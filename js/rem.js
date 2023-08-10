function setRem() {
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    clientWidth = clientWidth > 1920 ? 1920 : clientWidth;
    clientWidth = clientWidth < 1024 ? 1024 : clientWidth;

    //得到一个rem80px
    var rem = clientWidth / 19.2;
    var html = document.getElementsByTagName('html')[0];
    html.style.fontSize = rem + 'px';
}

window.onload = setRem;
window.onresize = setRem;