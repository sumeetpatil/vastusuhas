
let vastuSuhasCal = {
    mValuesTypes: ["Khshetraphal", "Aaya", "Dhana", "Vruna", "Vaara", "Tithi","Nakshatra","Yoga","Karana",
        "Amsha","Ayushya","Dipalak"],
    calculate: function (length, width) {
        const khshetraphal = length * width;
        let finalObj = {
            cols: [],
            totalGuna: 0.0,
            phal: ""
        };

        for (let i = 0; i < this.mValuesTypes.length; i++) {
            let valObj = this.getValues(i, khshetraphal);
            finalObj.cols.push(valObj);
            finalObj.totalGuna += valObj.col6;
        }
        finalObj.phal = this.getPhalString(finalObj.totalGuna);

        return finalObj;
    }, formatDecimal(num) {
        return (Math.round(num * 100) / 100).toFixed(2);
    },
    getValues(type, khshetraphal) {
        switch (type) {
            case 0:
                return { "col1": this.mValuesTypes[type], "col2": this.formatDecimal(khshetraphal), "col3": "", "col4": "", "col5": this.formatDecimal(khshetraphal), "col6": 0 };
            case 1:
                let aaya = khshetraphal * 9.0;
                let aayaMod8 = Math.floor(aaya % 8.0);
                let aayaGuna = (aayaMod8 % 2);
                return { "col1": this.mValuesTypes[type], "col2": aaya, "col3": aayaMod8, "col4": aayaMod8, "col5": this.getAayaString(aayaMod8), "col6": aayaGuna };
            case 2:
                let dhana = khshetraphal * 8.0;
                let dhanaMod12 = Math.floor(dhana % 12.0);
                if (dhanaMod12 == 0) {
                    dhanaMod12 = 12;
                }
                let vruna1Mod8 = Math.floor((khshetraphal * 3.0) % 8.0);
                if (vruna1Mod8 == 0) {
                    vruna1Mod8 = 12;
                }
                return { "col1": this.mValuesTypes[type], "col2": dhana, "col3": dhanaMod12, "col4": dhanaMod12, "col5": this.getDhanaVrunaString(vruna1Mod8, dhanaMod12), "col6": this.getDhanaVrunaGuna(vruna1Mod8, dhanaMod12) };
            case 3:
                let dhana1Mod12 = Math.floor((khshetraphal * 8.0) % 12.0);
                if (dhana1Mod12 == 0) {
                    dhana1Mod12 = 12;
                }
                let vruna = khshetraphal * 3.0;
                let vrunaMod8 = Math.floor(vruna % 8.0);
                if (vrunaMod8 == 0) {
                    vrunaMod8 = 12;
                }
                return { "col1": this.mValuesTypes[type], "col2": vruna, "col3": vrunaMod8, "col4": vrunaMod8, "col5": this.getDhanaVrunaString(vrunaMod8, dhana1Mod12), "col6": this.getDhanaVrunaGuna(vrunaMod8, dhana1Mod12) };
            case 4:
                let vaara = khshetraphal * 9.0;
                let vaaraMod7 = Math.floor(vaara % 7.0);
                return { "col1": this.mValuesTypes[type], "col2": vaara, "col3": vaaraMod7, "col4": this.getVaaraString(vaaraMod7), "col5": this.getVaaraStatus(vaaraMod7), "col6": this.getVaaraGuna(vaaraMod7) };
            case 5:
                let tithi = khshetraphal * 8.0;
                let tithiMod30 = Math.floor(tithi % 30.0);
                return { "col1": this.mValuesTypes[type], "col2": tithi, "col3": tithiMod30, "col4": this.getTithiString(tithiMod30), "col5": this.getTiThiStatus(tithiMod30), "col6": this.getTithiGuna(tithiMod30) };
            case 6:
                let nakshatra = khshetraphal * 8.0;
                let nakshatraMod27 = Math.floor(nakshatra % 27.0);
                return { "col1": this.mValuesTypes[type], "col2": nakshatra, "col3": nakshatraMod27, "col4": this.getNakshatraString(nakshatraMod27), "col5": this.getNakshatraStatus(nakshatraMod27), "col6": this.getNakshatraGuna(nakshatraMod27) };
            case 7:
                let yoga = khshetraphal * 4.0;
                let yogaMod27 = Math.floor(yoga % 27.0);
                return { "col1": this.mValuesTypes[type], "col2": yoga, "col3": yogaMod27, "col4": this.getYogaString(yogaMod27), "col5": this.getYogaStatus(yogaMod27), "col6": this.getYugaGuna(yogaMod27) };
            case 8:
                let karana = khshetraphal * 5.0;
                let karanaMod11 = Math.floor(karana % 11.0);
                return { "col1": this.mValuesTypes[type], "col2": karana, "col3": karanaMod11, "col4": this.getKaranaString(karanaMod11), "col5": this.getKaranaStatus(karanaMod11), "col6": this.getKaranaGuna(karanaMod11) };
            case 9:
                let amsha = khshetraphal * 6.0;
                let amshaMod9 = Math.floor(amsha % 9.0);
                let col4 = amshaMod9 == 0 ? 9 : amshaMod9;
                return { "col1": this.mValuesTypes[type], "col2": amsha, "col3": amshaMod9, "col4": col4, "col5": this.getAmshaStatus(amshaMod9), "col6": this.getAmshaGuna(amshaMod9) };
            case 10:
                let ayushya = khshetraphal * 9.0;
                let ayushyaMod120 = Math.floor(ayushya % 120.0);
                return { "col1": this.mValuesTypes[type], "col2": ayushya, "col3": ayushyaMod120, "col4": ayushyaMod120, "col5": this.getAyushyaStatus(ayushyaMod120), "col6": this.getAyushyaGuna(ayushyaMod120) };
            case 11:
                let ayushya1Mod8 = Math.floor(((Math.floor((khshetraphal * 9.0) % 120.0)) % 8));
                return { "col1": this.mValuesTypes[type], "col2": "", "col3": ayushya1Mod8, "col4": this.getDikPalakString(ayushya1Mod8), "col5": this.getDikPalakStatus(ayushya1Mod8), "col6": this.getDikpalakGuna(ayushya1Mod8) };
            default:
                return { "col1": "", "col2": "", "col3": "", "col4": "", "col5": "", "col6": "" };
        }
    }, getAayaString(mod8) {
        switch (mod8) {
            case 0:
                return "KAKAYA NOT GOOD";
            case 1:
                return "DHWAJAYA";
            case 2:
                return "DHUMRAYA NOT GOOD";
            case 3:
                return "SIMHAYA";
            case 4:
                return "SHWANAYA NOT GOOD";
            case 5:
                return "VRUSHABHAYA";
            case 6:
                return "KHARAYA NOT GOOD";
            case 7:
                return "GAJAYA";
            default:
                return "";
        }
    }, getDhanaVrunaString(vrunaMod8, dhanaMod12) {
        if (dhanaMod12 - vrunaMod8 > 0) {
            return "GOOD";
        }
        return "BAD";
    }, getVaaraString(vaaraMod7) {
        switch (vaaraMod7) {
            case 0:
                return "SATURDAY";
            case 1:
                return "SUNDAY";
            case 2:
                return "MONDAY";
            case 3:
                return "TUESDAY";
            case 4:
                return "WEDNESDAY";
            case 5:
                return "THURSDAY";
            case 6:
                return "FRIDAY";
            default:
                return "";
        }
    }, getVaaraGuna(vaaraMod7) {
        switch (vaaraMod7) {
            case 1:
            case 2:
            case 4:
            case 5:
            case 6:
                return 1;
            default:
                return 0;
        }
    }, getVaaraStatus(vaaraMod7) {
        switch (vaaraMod7) {
            case 0:
                return "NORMAL-LOSS";
            case 1:
                return "AGNI BHAY";
            case 2:
                return "DEVELOPMENT";
            case 3:
                return "LOSS";
            case 4:
                return "PROPERTY";
            case 5:
                return "FAME";
            case 6:
                return "GROWTH";
            default:
                return "";
        }
    }, getTithiGuna(tithiMod30) {
        switch (tithiMod30) {
            case 0:
            case 1:
            case 4:
            case 8:
            case 9:
            case 14:
            case 15:
                return 0;
            default:
                return 1;
        }
    }, getTiThiStatus(tithiMod30) {
        if (tithiMod30 == 0 || 1 == tithiMod30 || 4 == tithiMod30 || 8 == tithiMod30 || 9 == tithiMod30 || 14 == tithiMod30 || 15 == tithiMod30) {
            return "NOT GOOD";
        }
        return "GOOD";
    }, getTithiString(tithiMod30) {
        switch (tithiMod30) {
            case 0:
                return "AMAVASYA";
            case 1:
                return "PRATIPADA";
            case 2:
                return "DVITIYA";
            case 3:
                return "TRUTIYA";
            case 4:
                return "CHATURTI";
            case 5:
                return "PANCHAMI";
            case 6:
                return "SHASTI";
            case 7:
                return "SAPTAMI";
            case 8:
                return "ASTAMI";
            case 9:
                return "NAVAMI";
            case 10:
                return "DASHAMI";
            case 11:
                return "EKADASH";
            case 12:
                return "DVADASH";
            case 13:
                return "TRAYODASH";
            case 14:
                return "CHATURDASHA";
            case 15:
                return "POORNIMA";
            case 16:
                return "PRATIPADA";
            case 17:
                return "DVITIYA";
            case 18:
                return "TRUTIYA";
            case 19:
                return "CHATURTI";
            case 20:
                return "PANCHAMI";
            case 21:
                return "SHASTI";
            case 22:
                return "SAPTAMI";
            case 23:
                return "ASTAMI";
            case 24:
                return "NAVAMI";
            case 25:
                return "DASHAMI";
            case 26:
                return "EKADASH";
            case 27:
                return "DVADASH";
            case 28:
                return "TRAYODASH";
            case 29:
                return "CHATURDASHA";
            default:
                return "";
        }
    }, getYogaStatus(yogaMod27) {
        switch (yogaMod27) {
            case 0:
            case 1:
            case 6:
            case 9:
            case 10:
            case 13:
            case 15:
            case 17:
            case 19:
                return "NOT GOOD";
            case 2:
            case 3:
            case 4:
            case 5:
            case 7:
            case 8:
            case 11:
            case 12:
            case 14:
            case 16:
            case 18:
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
            case 26:
                return "GOOD";
            default:
                return "";
        }
    }, getYogaString(yogaMod27) {
        switch (yogaMod27) {
            case 0:
                return "VAIDRUTI";
            case 1:
                return "VISHKAMBA";
            case 2:
                return "PREETI";
            case 3:
                return "AYUSHYAMAN";
            case 4:
                return "SOUBHAGYA";
            case 5:
                return "SHOBHANA";
            case 6:
                return "ATIGANDA";
            case 7:
                return "SUKARMA";
            case 8:
                return "DHRUTI";
            case 9:
                return "SHOOLA";
            case 10:
                return "GANDA";
            case 11:
                return "VRIDDI";
            case 12:
                return "DHRUVA";
            case 13:
                return "VYAGYATA";
            case 14:
                return "HARSHANA";
            case 15:
                return "VAJRA";
            case 16:
                return "SIDDHI";
            case 17:
                return "VYATIPATA";
            case 18:
                return "VARIYANA";
            case 19:
                return "PARIGHA";
            case 20:
                return "SHIVA";
            case 21:
                return "SIDDHA";
            case 22:
                return "SAADYA";
            case 23:
                return "SUBHA";
            case 24:
                return "SHUKLA";
            case 25:
                return "BRAHMA";
            case 26:
                return "INDRA";
            default:
                return "";
        }
    }, getYugaGuna(yogaMod27) {
        switch (yogaMod27) {
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 11:
            case 12:
            case 14:
            case 15:
            case 16:
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
            case 26:
                return 1;
            default:
                return 0;
        }
    }, getKaranaGuna(karanaMod11) {
        switch (karanaMod11) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                return 1;
            default:
                return 0;
        }
    }, getKaranaStatus(karanaMod11) {
        switch (karanaMod11) {
            case 0:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                return "NOT GOOD";
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                return "GOOD";
            default:
                return "";
        }
    }, getKaranaString(karanaMod11) {
        switch (karanaMod11) {
            case 0:
                return "KINSUGNA";
            case 1:
                return "BAVA";
            case 2:
                return "BALAVA";
            case 3:
                return "KOULAVA";
            case 4:
                return "TAITILA";
            case 5:
                return "GARAJA";
            case 6:
                return "VANIJA";
            case 7:
                return "BHADRA";
            case 8:
                return "SHAKUNI";
            case 9:
                return "CHATUSPADA";
            case 10:
                return "NAGAVAN";
            default:
                return "";
        }
    }, getAmshaGuna(amshaMod9) {
        switch (amshaMod9) {
            case 0:
            case 2:
            case 3:
            case 7:
            case 8:
                return 1;
            default:
                return 0;
        }
    }, getAmshaStatus(amshaMod9) {
        switch (amshaMod9) {
            case 0:
                return "HAPPY LIFE";
            case 1:
                return "LOSS";
            case 2:
            case 7:
                return "DEVELOPMENT";
            case 3:
                return "PROFIT";
            case 4:
                return "DEMISE";
            case 5:
                return "DEATH FEAR";
            case 6:
                return "THIEF FEAR";
            case 8:
                return "GROWTH";
            default:
                return "";
        }
    }, getAyushyaGuna(ayushyaMod120) {
        if (ayushyaMod120 >= 60) {
            return 1;
        }
        return 0;
    }, getAyushyaStatus(ayushyaMod120) {
        if (ayushyaMod120 >= 60) {
            return "GOOD";
        }
        if (ayushyaMod120 >= 40) {
            return "MEDIUM";
        }
        return "NOT GOOD";
    }, getDikpalakGuna(ayushya1Mod8) {
        switch (ayushya1Mod8) {
            case 0:
            case 1:
            case 5:
            case 6:
            case 7:
                return 1;
            default:
                return 0;
        }
    }, getDikPalakStatus(ayushya1Mod8) {
        switch (ayushya1Mod8) {
            case 0:
            case 1:
            case 5:
            case 6:
            case 7:
                return "GOOD";
            case 2:
            case 3:
            case 4:
                return "NOT GOOD";
            default:
                return "";
        }
    }, getDikPalakString(ayushya1Mod8) {
        switch (ayushya1Mod8) {
            case 0:
                return "ISHA";
            case 1:
                return "INDRA";
            case 2:
                return "AGNI";
            case 3:
                return "YAMA";
            case 4:
                return "NIRUTI";
            case 5:
                return "VARUNA";
            case 6:
                return "VAAYU";
            case 7:
                return "KUBERA";
            default:
                return "";
        }
    }, getPhalString(mTotalGuna) {
        if (mTotalGuna >= 10.0) {
            return "Shreshtha";
        }
        if (mTotalGuna >= 7.0) {
            return "Uttam";
        }
        return "Not Good";
    }, getDhanaVrunaGuna(vrunaMod8, dhanaMod12) {
        return (dhanaMod12 - vrunaMod8 > 0 ? 1 : 0);
    }, getNakshatraString(nakshatraMod27) {
        switch (nakshatraMod27) {
            case 0:
                return "REVATI";
            case 1:
                return "ASHWINI";
            case 2:
                return "BHARANI";
            case 3:
                return "KRUTIKA";
            case 4:
                return "ROHINI";
            case 5:
                return "MRUGASHIRA";
            case 6:
                return "ARIDRA";
            case 7:
                return "PUNARVASU";
            case 8:
                return "PUSHYA";
            case 9:
                return "ASHLESHA";
            case 10:
                return "MAGHA";
            case 11:
                return "HUBBA";
            case 12:
                return "UTTARA";
            case 13:
                return "HASTA";
            case 14:
                return "CHITTA";
            case 15:
                return "SWATI";
            case 16:
                return "VISHAKHA";
            case 17:
                return "ANURADHA";
            case 18:
                return "JESHTHA";
            case 19:
                return "MOOLA";
            case 20:
                return "POORVASHADHA";
            case 21:
                return "UTTARASHADHA";
            case 22:
                return "SHRAVANA";
            case 23:
                return "DHANISTA";
            case 24:
                return "SHATATARA";
            case 25:
                return "POORVABHADRA";
            case 26:
                return "UTTARBHADRA";
            default:
                return "";
        }
    }, getNakshatraStatus(nakshatraMod27) {
        switch (nakshatraMod27) {
            case 0:
            case 4:
            case 5:
            case 8:
            case 12:
            case 13:
            case 14:
            case 15:
            case 17:
            case 21:
            case 22:
            case 23:
            case 24:
            case 26:
                return "GOOD";
            case 1:
            case 2:
            case 3:
            case 6:
            case 7:
            case 9:
            case 10:
            case 11:
            case 16:
            case 18:
            case 19:
            case 20:
            case 25:
                return "NOT GOOD";
            default:
                return "";
        }
    }, getNakshatraGuna(nakshatraMod27) {
        switch (nakshatraMod27) {
            case 0:
            case 4:
            case 6:
            case 9:
            case 12:
            case 13:
            case 14:
            case 15:
            case 17:
            case 21:
            case 22:
            case 23:
            case 24:
            case 26:
                return 1;
            default:
                return 0;
        }
    }
};


//let calculate = vastuSuhasCal.calculate(1.5, 11.5);
//console.log(calculate);