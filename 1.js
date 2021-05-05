    let _POST = (url, data, fn) => {
        let request = new XMLHttpRequest();
        request.open('POST', url, true);
        // request.setRequestHeader("")
        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                fn.success && fn.success(JSON.parse(this.response));
            } else {
                fn.error && fn.error(this);
            }
        };
        // request.onerror =
        request.send(data);
    }
    let clear = null;
    let _Messages = (msg, status) => {
        clearTimeout(clear);
        status = status || 'info';
        console.log(status)
        let el = document.querySelector('.message');
        el.classList.value = `message ${status}`;
        el.innerHTML = msg;
        clear = setTimeout(() => {
            el.classList.remove(status)
        }, 3000);
    }

    let _btn = document.querySelector('.upload-button');
    let _up = document.querySelector('.upload-file');
    let _textarea = document.querySelector('.image-url');
    let _select = document.querySelector('.select-api');
    _btn.addEventListener('click', (e) => {
        _up.click();
    })

    _up.addEventListener('change', (e) => {
        let files = e.target.files
        if (!files.length) return false;
        let formData = new FormData();
        formData.append('image', files[0], files[0].name);
        formData.append('api',_select.value);
        _Messages(`正在上传：${files[0].name}`);
        _POST('//image.kieng.cn/upload.html?type='+_select.value, formData, {
            success: (res) => {
                if (res.code === 200) {
                    _textarea.value = res.data.url;
                    _Messages("上传成功！", "success");
                    _up.value = "";
                } else {
                    _Messages(res.msg, "error");
                }
            }
        });

        // _POST('/?upload', formData, {
        //     success: (res) => {
        //         if (res.code === "0") {
        //             _textarea.value = res.url;
        //             _Messages("上传成功！", "success");
        //             _up.value = "";
        //         } else {
        //             _Messages(res.msg, "error");
        //         }
        //     }
        // });
    })

    document.querySelector('.submit').addEventListener('click', () => {
        let els = document.querySelectorAll('.save-form .values')
        let formData = new FormData();
        for (let el of els) {
            formData.append(el.name, el.value);
        }
        _Messages("正在提交...");
        _POST('./?save', formData, {
            success: (res) => {
                let status = "error";
                if (res.code === 0) {
                    for (let el of els) {
                        el.value = "";
                    }
                    status = "success";
                }
                _Messages(res.msg, status);
            }
        });
    })
