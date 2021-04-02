var jQ = jQuery.noConflict();

if(/^https:\/\/finest-cy\.com.*/i.test(window.location.href)){
  function _classCallCheck(e, t) {
	if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
var OwO_demo = new OwO({
        logo: '表情',
        container: document.getElementsByClassName('OwO')[0],
        target: document.getElementsByClassName('OwO-textarea')[0],
        api: b2_global.version+'/Assets/fontend/OwO/OwO.json',
        position: 'down',
        width: '100%',
        maxHeight: '250px'
    });
}else{
	document.write("<h1>人作死,就会死</h1>");
}
