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