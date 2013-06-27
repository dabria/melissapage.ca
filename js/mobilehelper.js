function makehidden(decal) {
  var ua = navigator.userAgent.toLowerCase();
  var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
  if(isAndroid) {
    var img = document.getElementById('decal');
    img.style.visibility = 'hidden';
  }
}
makehidden('decal');