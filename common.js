document.getElementById("btlCal").onclick = function(){
    let length = document.getElementById("inpLength").value;
    let width = document.getElementById("inpWidth").value;
    let obj = vastuSuhasCal.calculate(length, width);
    let tbl = "";   
    for(let i=0;i<obj.cols.length;i++){
        tbl+= "<tr><td>"+obj.cols[i].col1+"</td><td>"+obj.cols[i].col4+"</td><td>"+obj.cols[i].col5+"</td><tr>";
    }

    tbl+= "<tr><td>"+"Total Guna"+"</td><td></td><td>"+obj.totalGuna+"</td><tr>";
    tbl+= "<tr><td>"+"Phal"+"</td><td></td><td>"+obj.phal+"</td><tr>";
    document.getElementById("tblCal").innerHTML = tbl;
};
