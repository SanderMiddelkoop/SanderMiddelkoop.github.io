function setCookie(name, value){  
    var d = new Date();
    d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";

}

function getCookie(name){
    var n = name + "=";
    var cookiesString = decodeURIComponent(document.cookie);
    var allCookies = cookiesString.split(';');
    for(var i = 0; i<allCookies.length; i++){
        var c = allCookies[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(n) == 0) {
          return c.substring(n.length, c.length);
        }
    }
    return "";
}