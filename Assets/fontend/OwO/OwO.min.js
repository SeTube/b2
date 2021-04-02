function _classCallCheck(e, t) {
	if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
var _createClass = function() {
	function e(e, t) {
		for (var a = 0; a < t.length; a++) {
			var s = t[a];
			s.enumerable = s.enumerable || !1,
			s.configurable = !0,
			"value" in s && (s.writable = !0),
			Object.defineProperty(e, s.key, s);
		}
	}
	return function(t, a, s) {
		return a && e(t.prototype, a),
		s && e(t, s),
		t;
	};
} (); !
function() {
	var e = function() {
		function e(t) {
			var a = this;
			_classCallCheck(this, e);
			var s = '';
			for (var n in s) s.hasOwnProperty(n) && !t.hasOwnProperty(n) && (t[n] = s[n]);
			this.container = t.container,
			this.target = t.target,
			'up' === t.position && this.container.classList.add('OwO-up');
			var i = new XMLHttpRequest();
			i.onreadystatechange = function() {
				4 === i.readyState && (i.status >= 200 && i.status < 300 || 304 === i.status ? (a.odata = JSON.parse(i.responseText), a.init(t)) : console.log("OwO data request was unsuccessful: " + i.status));
			},
			i.open("get", t.api),
			i.send(null);
		}
		return _createClass(e, [{
			key: "init",
			value: function(e) {
				var t = this;
				this.area = e.target,
				this.packages = Object.keys(this.odata);
				// this.user_vip = b2_global.user_vip.indexOf('vip') > -1;
				var a = '<div class="OwO-logo"><i class="b2font b2-biaoqing"></i><span class="text">' + e.logo + '</span></div><div class="OwO-body">';
				for (a, s = 0; s < this.packages.length; s++) {
					/*此处开始，也可以根据类型(this.odata[this.packages[s]].type)来判断文字和图片*/
					var n = this.odata[this.packages[s]].container;
					if (s >= 0) {
						a += '<div class="emoji-title"><span>' + this.odata[this.packages[s]].text + '</span></div>';
					}
					if (s === 0) {
						/*小黄脸*/
						a += '<ul class="OwO-items OwO-items-' + this.odata[this.packages[s]].type + '">';
						for (n, i = 0; i < n.length; i++) a += '<li class="OwO-item ' + this.odata[this.packages[s]].id + '" data-id="' + n[i].text + '" title="' + n[i].text + '"><img src="' + n[i].icon + '"></li>';
						a += "</ul>";
					} else if (s == 1) {
						/*颜文字*/
						a += '<ul class="OwO-items OwO-items-' + this.odata[this.packages[s]].type + '">';
						for (n, i = 0; i < n.length; i++) a += '<li class="OwO-item ' + this.odata[this.packages[s]].id + '" data-id="not-given" title="' + n[i].text + '">' + n[i].icon + "</li>";
						a += "</ul>";
					} else {
						/*小电视*/
						a += '<ul class="OwO-items OwO-items-' + this.odata[this.packages[s]].type + '">';
						for (n, i = 0; i < n.length; i++) a += '<li class="OwO-item ' + this.odata[this.packages[s]].id + '" data-id="' + n[i].text + '" title="' + n[i].text + '"><img src="' + n[i].icon + '"></li>';
						a += "</ul>";
					}

					/*此处结束*/
				}
				a += '<div class="OwO-bar"><ul class="OwO-packages">';
				for (var o = 0; o < this.packages.length; o++) a += '<li><span><img src="' + this.packages[o] + '"></span></li>';
				a += '</ul><div class="OwO-navigate"><a href="javascript:(0);" class="left"><</a><a href="javascript:(0);" class="right">></a></div></div></div>',
				this.container.innerHTML = a;
				this.logo = this.container.getElementsByClassName("OwO-logo")[0];
				this.logo.addEventListener("click",
				function() {
					t.toggle();
				}),
				/*this.container.getElementsByClassName("OwO-body")[0].addEventListener("click",
                    function(e) {
                        var a = null;
                        if (e.target.classList.contains("OwO-item") ? a = e.target: e.target.parentNode.classList.contains("OwO-item") && (a = e.target.parentNode), a) {
                            var s = t.area.selectionEnd,
                            n = t.area.value;
                            t.area.value = n.slice(0, s) + a.innerHTML + n.slice(s),
                            t.area.focus(),
                            t.toggle()
                        }
                    }),*/

				this.container.getElementsByClassName('OwO-body')[0].addEventListener('click', (e) =>{
					let target = null;
					if (e.target.classList.contains('OwO-item')) {
						target = e.target;
					} else if (e.target.parentNode.classList.contains('OwO-item')) {
						target = e.target.parentNode;
					}
					if (target) {
						const cursorPos = this.area.selectionEnd;
						let areaValue = this.area.value;
						//this.area.value = areaValue.slice(0, cursorPos) + target.innerHTML + areaValue.slice(cursorPos);
						if (target.dataset.id == "not-given") {
							this.area.value = areaValue.slice(0, cursorPos) + target.innerHTML + areaValue.slice(cursorPos);
						} else {
							this.area.value = areaValue.slice(0, cursorPos) + target.dataset.id + areaValue.slice(cursorPos);
						}
						this.area.focus();
						this.toggle();
					}
				}),
				this.packagesEle = this.container.getElementsByClassName("OwO-packages")[0];
				for (var c = function(e) { !
					function(a) {
						t.packagesEle.children[e].addEventListener("click",
						function() {
							t.tab(a);
						});
					} (e);
				},
				l = 0; l < this.packagesEle.children.length; l++) c(l);
				this.tab(0);
				let navs = document.querySelectorAll(".OwO-navigate a");
				let pack = document.querySelector(".OwO-packages");
				for (let nav of navs) {
					nav.addEventListener("click",
					function(e) {
						if (e.target.classList.contains("left")) {
							pack.scrollTo(0, 0);
						} else {
							pack.scrollTo(999, 0);
						}
					});
				}
			}
		},
		{
			key: "toggle",
			value: function() {
				this.container.classList.contains("OwO-open") ? this.container.classList.remove("OwO-open") : this.container.classList.add("OwO-open");
			}
		},
		{
			key: "tab",
			value: function(e) {
				var t = this.container.getElementsByClassName("OwO-items-show")[0];
				t && t.classList.remove("OwO-items-show"),
				this.container.getElementsByClassName("OwO-items")[e].classList.add("OwO-items-show");
				var a = this.container.getElementsByClassName("OwO-package-active")[0];
				a && a.classList.remove("OwO-package-active"),
				this.packagesEle.getElementsByTagName("li")[e].classList.add("OwO-package-active");
				var emj = document.getElementsByClassName("emoji-title-show")[0];
				emj && emj.classList.remove("emoji-title-show");
				document.getElementsByClassName("OwO-items-show")[0].previousElementSibling.classList.add("emoji-title-show");
			}
		}]),
		e;
	} ();
	"undefined" != typeof module && "undefined" != typeof module.exports ? module.exports = e: window.OwO = e;
} ();
