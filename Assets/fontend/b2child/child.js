/*公告滚动*/
(function ($) {
    $.fn.extend({
        "slideUp": function (value) {
            var docthis = this;
            value = $.extend({
                "li_h": "30",
                "time": 3000,
                "movetime": 1000
            }, value)
            function autoani() {
                $("li:first", docthis).animate({ "margin-top": -value.li_h }, value.movetime, function () {
                    $(this).css("margin-top", 0).appendTo(".line");
                })
            }
            var anifun = setInterval(autoani, value.time);
            $(docthis).children("li").hover(function () {
                clearInterval(anifun);
            }, function () {
                anifun = setInterval(autoani, value.time);
            })
        }
    })
    $(function () {
        $(".line").slideUp();
    })
})(jQuery);

/*首页列表*/
function Change() {
    var cat = document.querySelectorAll('.btn-change');
    if (cat.length > 0) {
        cat.forEach(_e => {
            _e.onclick = function (e) {
                let i = e.target.dataset.i
                let item = document.querySelector('#post-item-' + i)
                let _opt = item.getAttribute('data-opt')
                let cats = item.querySelectorAll('.picked')[0].getAttribute('data-cats')
                item = item.parentNode
                pages = item.getAttribute('data-pages')
                let box = item.parentNode.querySelectorAll('ul.b2_gap')[0]
                cats = JSON.parse(cats)
                _opt = JSON.parse(_opt)
                _opt['post_cat'] = cats
                _opt['post_paged'] = 1
                _opt['post_i'] = i
                _opt['post_order'] = 'random'
                axios.post(b2_rest_url + 'getPostList', Qs.stringify(_opt)).then(res => {
                    if (res.status == 200) {
                        box.innerHTML = res.data.data
                        listFadein(box.childNodes, 20)
                        b2RestTimeAgo(document.querySelectorAll('.b2timeago'))
                    }
                    NProgress.done()
                    NProgress.remove()
                    lazyLoadInstance.update()
                    b2SidebarSticky()
                    b2PackeryLoad()
                })
            }
        })
    }
}
Change()
