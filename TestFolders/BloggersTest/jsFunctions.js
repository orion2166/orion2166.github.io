function message() {
    var flname = document.getElementById("flname").value;  
    var ename = document.getElementById("ename").value;
    var sname = document.getElementById("sname").value;
    var mname = document.getElementById("mname").value;
    
    setTimeout(function() {
    window.open("mailto:" + ename + "?subject=" + sname + "&body=" + mname);
    }, 320);    
}