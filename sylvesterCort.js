var unfold = function () {
    function t(t, e, o) {
        t.addEventListener ? t.addEventListener(e, o) : t.attachEvent ? t.attachEvent("on" + e, function (e) {
            e.target = e.target || e.srcElement, o.call(t, e)
        }) : "undefined" != typeof t["on" + e] && null !== t["on" + e] || (t["on" + e] = function (e) {
            e.target = e.target || e.srcElement, o.call(t, e)
        })
    }

    function e(t) {
        for (var e = 0; e < t.length; e++)
            for (; t[e].firstChild;) t[e].removeChild(t[e].firstChild);
        return t
    }

    function o() {
        return !l && (l = !0, r(), void setInterval(o, 5e3))
    }

    function n(t) {
        var e = document.querySelector(b + " #te-wrapper div.te-cover"),
            o = document.querySelector(b + " #te-wrapper"),
            n = document.querySelector(b + " #te-wrapper .te-transition");
        return !("te-unfold1" === s && "unfold1_3Back" !== t.animationName || "te-unfold2" === s && "unfold2_3Back" !== t.animationName) && (e.classList.remove("te-hide"), o.classList.remove("te-perspective"), n.classList.remove("te-show"), void(l = !1))
    }

    function i() {
        var t = document.querySelectorAll(b + " #te-wrapper .te-transition div.te-back"),
            o = document.querySelectorAll(b + " #te-wrapper .te-transition div.te-front");
        d === imagesCount - 1 ? (i = imagesCount - 1, d = 0) : (i = d, ++d);
        var n = document.querySelectorAll(b + " #te-wrapper div.te-images > img"),
            i = n[i],
            r = n[d];
        e(o);
        for (var a = 0; a < o.length; a++) {
            var l = document.createElement("img");
            l.setAttribute("style", "width: 300px;height: 150px;"), l.setAttribute("src", i.attributes.getNamedItem("src").value), o[a].appendChild(l)
        }
        e(t);
        for (var a = 0; a < t.length; a++) l = document.createElement("img"), l.setAttribute("style", "width: 300px;height: 150px;"), l.setAttribute("src", r.attributes.getNamedItem("src").value), t[a].appendChild(l);
        var s = document.querySelector(b + " #te-wrapper div.te-cover img");
        s.setAttribute("src", r.attributes.getNamedItem("src").value)
    }

    function r() {
        var t = document.querySelector(b + " #te-wrapper div.te-cover"),
            e = document.querySelector(b + " #te-wrapper"),
            o = document.querySelector(b + " #te-wrapper .te-transition");
        o.classList.add("te-show"), t.classList.add("te-hide"), e.classList.add("te-perspective"), i()
    }

    function a(e) {
        var i = document.querySelector("." + e);
        if (null != i) {
            b = "." + e;
            var r = document.getElementsByTagName("head"),
                a = document.createElement("style"),
                d = document.createTextNode(u);
            a.appendChild(d), r[0].appendChild(a), i.innerHTML = c, f = document.querySelector(b + " #te-wrapper"), m = document.querySelector(b + " #te-wrapper div.te-cover"), p = document.querySelectorAll(b + " #te-wrapper div.te-images > img"), imagesCount = p.length, teTransition = document.querySelector(b + " #te-wrapper .te-transition"), teTransition.classList.add(s), t(f, "webkitAnimationEnd", n), setInterval(o, 5e3)
        }
    }
    var d = 0,
        l = !1,
        s = "te-unfold1",
        c = '<div class="te-container"> <a href="http://sylvester.org"> <div id="te-wrapper" class="te-wrapper"> <div class="te-images"> <img src="https://i.imgur.com/YpLzV10.jpg" alt=""/> <img src="https://i.imgur.com/PxiC60E.jpg" alt=""/> <img src="https://i.imgur.com/gnnxRMO.jpg" alt=""/></div><div class="te-cover"> <img src="https://i.imgur.com/YpLzV10.jpg" alt=""/></div><div class="te-transition"> <div class="te-front te-front1"></div><div class="te-front te-front2"></div><div class="te-front te-front3"></div><div class="te-back te-back1"></div><div class="te-back te-back2"></div><div class="te-back te-back3"></div></div><div style="padding-left: 5px;padding-top:5px;padding-right:5px;"> <span class="bzm_text_title bzm_text_bold" style="color:#000; font-size:14px;">No one is more prepared to fight your cancer</span> <span class="bzm_text_title bzm_text_medium" style="display:block;color:#000; font-size:10px;"><i>Sylvester Cancer Center is South Florida’s leader in cancer diagnosis and treatment.</i></span> <div style="text-align: right;margin-top:-10px;"> <img src="https://i.imgur.com/ugnp4YA.jpg" alt="" style="width:75px"></div></div></div></a></div>',
        u = ".unfold a, .unfold a:hover{text-decoration: none; color: white}.unfold .te-container{width: 300px; height: 250px; margin: 0 auto; background-color: #FFF}.unfold .te-wrapper{position: relative; width: 300px; height: 250px}.unfold .bzm_text_bold, .unfold .bzm_text_medium{line-height: 1.5; text-decoration: none; color: #000}.unfold .bzm_text_bold{font-size: 15px; font-weight: 900}.unfold .bzm_text_medium{font-size: 11px; font-weight: 700}.unfold .te-perspective{-webkit-perspective: 1000}.unfold .te-cover, .unfold .te-transition{width: 300px; height: 150px}.unfold .te-cover.te-hide, .unfold .te-transition, .unfold .te-images{display: none}.unfold .te-images{width: 300px; height: 150px}.unfold .te-cover>img, .unfold .te-images>img{width: 300px; height: 150px}.unfold .te-transition.te-show{display: block}.unfold .te-back, .unfold .te-front{overflow: hidden; position: absolute; opacity: 0; -webkit-backface-visibility: hidden}.unfold .te-transition img{position: absolute; left: 0px; top: 0px}.unfold .te-unfold1 .te-front{-webkit-transform-origin: 50% 100%}.unfold .te-unfold1 .te-back{-webkit-transform-origin: 50% 0%}.unfold .te-unfold1 .te-front, .unfold .te-unfold1 .te-back{width: 300px; height: 50px}.unfold .te-unfold1 .te-front.te-front2, .unfold .te-unfold1 .te-back.te-back2{top: 50px}.unfold .te-unfold1 .te-front.te-front2 img, .unfold .te-unfold1 .te-back.te-back2 img{top: -50px}.unfold .te-unfold1 .te-front.te-front3, .unfold .te-unfold1 .te-back.te-back3{top: 100px}.unfold .te-unfold1 .te-front.te-front3 img, .unfold .te-unfold1 .te-back.te-back3 img{top: -100px}.unfold .te-unfold1.te-show .te-front.te-front1{-webkit-animation: unfold1_1Front 1s ease-in-out}.unfold .te-unfold1.te-show .te-front.te-front2{-webkit-animation: unfold1_2Front 1s ease-in-out}.unfold .te-unfold1.te-show .te-front.te-front3{-webkit-animation: unfold1_3Front 1s ease-in-out}.unfold .te-unfold1.te-show .te-back.te-back1{-webkit-animation: unfold1_1Back 1s ease-in-out; -webkit-animation-delay: 0.7s}.unfold .te-unfold1.te-show .te-back.te-back2{-webkit-animation: unfold1_2Back 1s ease-in-out; -webkit-animation-delay: 0.7s}.unfold .te-unfold1.te-show .te-back.te-back3{-webkit-animation: unfold1_3Back 1s ease-in-out; -webkit-animation-delay: 0.7s}@-webkit-keyframes unfold1_1Front{0%{opacity: 1; -webkit-transform: rotate3d(1, 0, 0, 0)}33%{-webkit-transform: rotate3d(1, 0, 0, 100deg)}100%{opacity: 1; -webkit-transform: rotate3d(1, 0, 0, 100deg)}}@-webkit-keyframes unfold1_2Front{0%{opacity: 1; -webkit-transform: rotate3d(1, 0, 0, 0)}33%{-webkit-transform: rotate3d(1, 0, 0, 0)}66%{-webkit-transform: rotate3d(1, 0, 0, 100deg)}100%{opacity: 1; -webkit-transform: rotate3d(1, 0, 0, 100deg)}}@-webkit-keyframes unfold1_3Front{0%{opacity: 1; -webkit-transform: rotate3d(1, 0, 0, 0)}66%{-webkit-transform: rotate3d(1, 0, 0, 0)}83%{-webkit-transform: rotate3d(1, 0, 0, 50deg)}100%{opacity: 1; -webkit-transform: rotate3d(1, 0, 0, 100deg)}}@-webkit-keyframes unfold1_1Back{0%{opacity: 1; -webkit-transform: rotate3d(1, 0, 0, -100deg)}30%{opacity: 1; -webkit-transform: rotate3d(1, 0, 0, 0)}100%{opacity: 1; -webkit-transform: rotate3d(1, 0, 0, 0)}}@-webkit-keyframes unfold1_2Back{0%{opacity: 1; -webkit-transform: rotate3d(1, 0, 0, -100deg)}26%{-webkit-transform: rotate3d(1, 0, 0, -100deg)}60%{-webkit-transform: rotate3d(1, 0, 0, 0)}100%{opacity: 1; -webkit-transform: rotate3d(1, 0, 0, 0)}}@-webkit-keyframes unfold1_3Back{0%{opacity: 1; -webkit-transform: rotate3d(1, 0, 0, -100deg)}55%{-webkit-transform: rotate3d(1, 0, 0, -100deg)}78%{-webkit-transform: rotate3d(1, 0, 0, 28deg)}86%{-webkit-transform: rotate3d(1, 0, 0, -28deg)}94%{-webkit-transform: rotate3d(1, 0, 0, 12deg)}98%{-webkit-transform: rotate3d(1, 0, 0, -12deg)}100%{opacity: 1; -webkit-transform: rotate3d(1, 0, 0, 0)}}",
        f = null,
        m = null,
        p = null,
        b = null;
    return imagesCount = 0, teTransition = null, {
        show: a
    }
}();
unfold.show('unfold');
