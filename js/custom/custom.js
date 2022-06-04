var titleTime = document.title;
var getTimeState = function () {
    var t = (new Date).getHours (), e = "";
    return t <= 4 || 22 < t ? e = "Good 🛌<br>Night<br>" : 4 < t && t <= 10 ? e = "Good 🌮<br>Morning<br>" : 10 < t && t <= 12 ? e = "Good 🍱<br>Noon<br>" : 12 < t && t <= 17 ? e = "Good ☕<br>Afternoon<br>" : 17 < t && t <= 22 && (e = "Good 🍇<br>Evening<br>"), e
};

function sayhi () {
    document.querySelector ("#author-info__sayhi") && (document.getElementById ("author-info__sayhi").innerHTML = getTimeState () + "这里是 👇")
}

var navFn = {
    switchDarkMode: function () {
        "light" === ("dark" === document.documentElement.getAttribute ("data-theme") ? "dark" : "light") ? (activateDarkMode (), saveToLocal.set ("theme", "dark", 2), void 0 !== GLOBAL_CONFIG.Snackbar && btf.snackbarShow (GLOBAL_CONFIG.Snackbar.day_to_night)) : (activateLightMode (), saveToLocal.set ("theme", "light", 2), void 0 !== GLOBAL_CONFIG.Snackbar && btf.snackbarShow (GLOBAL_CONFIG.Snackbar.night_to_day)), "function" == typeof utterancesTheme && utterancesTheme (), "object" === ("undefined" == typeof FB ? "undefined" : _typeof (FB)) && window.loadFBComment (), window.DISQUS && document.getElementById ("disqus_thread").children.length && setTimeout (function () {
            return window.disqusReset ()
        }, 200)
    }
};

function fly_to_top () {
    btf.scrollToDest (0, 500)
}

function coverColor () {
    var t = null === (t = document.getElementById ("post-cover")) || void 0 === t ? void 0 : t.src;
    void 0 !== t ? RGBaster.colors (t, {
        paletteSize: 30, exclude: ["rgb(255,255,255)", "rgb(0,0,0)", "rgb(254,254,254)"], success: function (t) {
            var e = t.dominant.match (/\d+/g), o = "rgba(".concat (e[0], ",").concat (e[1], ",").concat (e[2], ",0.4)");
            180 <= .299 * e[0] + .587 * e[1] + .114 * e[2] ? (document.styleSheets[0].addRule (":root", "--hassan-main-fontcolor: #000 !important"), document.styleSheets[0].addRule (":root", "--hassan-main-gray: #000000bb !important"), document.styleSheets[0].addRule (":root", "--hassan-bg-social: rgba(0,0,0,.1) !important"), document.querySelector (".status-bar_img").src = "https://npm.elemecdn.com/hassan-assets/img/status-bar-dark.svg") : (document.styleSheets[0].addRule (":root", "--hassan-main-fontcolor: #fff !important"), document.styleSheets[0].addRule (":root", "--hassan-main-gray: #ffffffcc !important"), document.styleSheets[0].addRule (":root", "--hassan-bg-social: rgba(255,255,255,.2) !important"), document.querySelector (".status-bar_img").src = "https://npm.elemecdn.com/hassan-assets/img/status-bar-light.svg"), document.styleSheets[0].addRule (":root", "--hassan-main:" + t.dominant + "!important"), document.styleSheets[0].addRule (":root", "--hassan-main-light: " + o + " !important"), document.getElementById ("coverdiv").classList.add ("loaded")
        }, error: function () {
            document.styleSheets[0].addRule (":root", "--hassan-main: var(--hassan-main)")
        }
    }) : document.styleSheets[0].addRule (":root", "--hassan-main: var(--hassan-main)")
}

function showTime () {
    var t = new Date, e = "AM", o = t.getHours (), t = t.getMinutes ();
    0 <= o && o <= 12 ? e = "AM" : 12 < o && (o -= 12, e = "PM"), o = o < 10 ? "0" + o : o, t = t < 10 ? "0" + t : t,
        document.querySelector (".status-bar__clock").textContent = "".concat (o, ":").concat (t, " ").concat (e),
        setTimeout (showTime, 1e3);
}

function workboard () {
    var t = (new Date).getHours (), e = null,
        e = t < 22 && 8 <= t ? "<img src='https://img.shields.io/badge/诗颂的博客-营业中-6adea8?style=social&logo=Blogger&logoColor=5ccdc1' title='营业时间：8:00 - 22:00'>" : "<img src='https://img.shields.io/badge/诗颂的博客-打烊啦-6adea8?style=social&logo=Blogger&logoColor=5ccdc1' title='营业时间：8:00 - 22:00'>";
    document.querySelector (".workboard").innerHTML = e
}

window.addEventListener ("scroll", function (t) {
    var e;
    56 < (document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop) ? null !== (e = document.getElementById ("doraemon_to_top")) && void 0 !== e && e.classList.add ("doraemon_fixed") : null !== (e = document.getElementById ("doraemon_to_top")) && void 0 !== e && e.classList.remove ("doraemon_fixed")
}), document.addEventListener ("copy", function (t) {
    btf.snackbarShow (GLOBAL_CONFIG.copy.success)
}), document.onkeydown = function () {
    var t = window.event;
    123 == t.keyCode && btf.snackbarShow ("你是在帮我调试，还是在扒我底裤呀？"), 122 == t.keyCode && btf.snackbarShow ("您已进入全屏，按F11可以退出噢~"), 68 == t.keyCode && t.ctrlKey && btf.snackbarShow ("感谢这位友友收藏本站，爱你！")
};