function setCookie(name, value){
    document.cookie = name + "=" + value;
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