document.getElementById("btlCal").onclick = function () {
    let length = document.getElementById("inpLength").value;
    let width = document.getElementById("inpWidth").value;
    let obj = vastuSuhasCal.calculate(length, width);
    let tbl = "";
    for (let i = 0; i < obj.cols.length; i++) {
        tbl += "<tr><td>" + obj.cols[i].col1 + "</td><td>" + obj.cols[i].col4 + "</td><td>" + obj.cols[i].col5 + "</td><tr>";
    }

    tbl += "<tr><td>" + "<b>Total Guna</b>" + "</td><td></td><td><b>" + obj.totalGuna + "</b></td><tr>";
    tbl += "<tr><td>" + "<b>Phal</b>" + "</td><td></td><td><b>" + obj.phal + "</b></td><tr>";
    document.getElementById("tblCal").innerHTML = tbl;
};
