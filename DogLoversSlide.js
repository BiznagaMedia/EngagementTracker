var DogLoversSlide=function(){function e(e,t,i){e.addEventListener?e.addEventListener(t,i):e.attachEvent?e.attachEvent("on"+t,function(t){t.target=t.target||t.srcElement,i.call(e,t)}):"undefined"!=typeof e["on"+t]&&null!==e["on"+t]||(e["on"+t]=function(t){t.target=t.target||t.srcElement,i.call(e,t)})}function t(e){for(var t=0;t<e.length;t++)for(;e[t].firstChild;)e[t].removeChild(e[t].firstChild);return e}function i(){return!l&&(l=!0,a(),void setInterval(i,5e3))}function o(e){var t=document.querySelector(v+" #te-wrapper div.te-cover"),i=document.querySelector(v+" #te-wrapper"),o=document.querySelector(v+" #te-wrapper .te-transition");t.classList.remove("te-hide"),i.classList.remove("te-perspective"),o.classList.remove("te-show"),l=!1}function r(){var e=document.querySelectorAll(v+" #te-wrapper .te-transition div.te-back"),i=document.querySelectorAll(v+" #te-wrapper .te-transition div.te-front");n===imagesCount-1?(r=imagesCount-1,n=0):(r=n,++n);var o=document.querySelectorAll(v+" #te-wrapper div.te-images > img"),r=o[r],a=o[o.length==n?0:n];n=o.length==n?0:n;var s=r.attributes.getNamedItem("src").value,l=a.attributes.getNamedItem("src").value;t(i);for(var c=0;c<i.length;c++){var d=document.createElement("img");d.setAttribute("style","width: 300px;height: 150px;"),d.setAttribute("src",s),i[c].appendChild(d)}t(e);for(var c=0;c<e.length;c++)d=document.createElement("img"),d.setAttribute("style","width: 300px;height: 150px;"),d.setAttribute("src",l),e[c].appendChild(d);var p=document.querySelector(v+" #te-wrapper div.te-cover img");p.setAttribute("src",l)}function a(){var e=document.querySelector(v+" #te-wrapper div.te-cover"),t=document.querySelector(v+" #te-wrapper"),i=document.querySelector(v+" #te-wrapper .te-transition");i.classList.add("te-show"),e.classList.add("te-hide"),t.classList.add("te-perspective"),r()}function s(t){var r=document.querySelector("."+t);if(null!=r){v="."+t;var a=document.getElementsByTagName("head"),s=document.createElement("style"),n=document.createTextNode(p);s.appendChild(n),a[0].appendChild(s),r.innerHTML=d,g=document.querySelector(v+" #te-wrapper"),m=document.querySelector(v+" #te-wrapper div.te-cover"),h=document.querySelectorAll(v+" #te-wrapper div.te-images > img"),imagesCount=h.length,teTransition=document.querySelector(v+" #te-wrapper .te-transition"),teTransition.classList.add(c),e(g,"webkitAnimationEnd",o),setInterval(i,5e3)}}var n=0,l=!1,c="te-example3",d='<div class="te-container"> <a href="https://www.facebook.com/events/551138755268347/" target="_blank"><div id="te-wrapper" class="te-wrapper"><div class="te-images"> <img src="https://i.imgur.com/LteQyqL.jpg" alt="" /> <img src="https://i.imgur.com/PptqA8z.jpg" alt="" /> <img src="https://i.imgur.com/pgCwbCh.jpg" alt="" /></div><div class="te-cover"> <img src="https://i.imgur.com/LteQyqL.jpg" alt="" /></div><div class="te-transition"><div class="te-front"></div><div class="te-back"></div></div><div style="padding-left: 5px;padding-top:2px;padding-right:5px;"> <span class="bzm_text_title bzm_text_bold" style="color:#000;">Más que una mascota, es tu Amigo! Ven con tu perro y diviértete.</span><div style="bottom:0px;height: 18px;text-align:left;margin-top:8px;"> <img src="https://i.imgur.com/oCX4ObR.png" style="height:30px"><div id="botones-para-compartir" style="display:inline;margin-left:1px;margin-top:-19px;"> <span> <a class="shared" href="https://www.facebook.com/sharer/sharer.php?u=https://www.facebook.com/events/551138755268347/" target="block"> <img alt="compartir en facebook" class="facebooki" height="16" src="http://4.bp.blogspot.com/-2W3Fr7nS-T0/Uh1HrkLe5wI/AAAAAAAAAiQ/0-_aC8Yici4/s1600/facebook.png" title="compartir en facebook" width="16" /></a><a class="shared" href="https://plus.google.com/share?url=https://www.facebook.com/events/551138755268347/" target="block"> <img alt="compartir en google+" class="googlei" height="16" src="http://3.bp.blogspot.com/-Ioy5JWv_nwk/Uh1HlxE8urI/AAAAAAAAAhc/q_uUabDAhsU/s1600/Google%252B%2Balt.png" title="compartir en google+" width="16" /></a><a class="shared" href="https://twitter.com/home?status=https://www.facebook.com/events/551138755268347/" target="block"> <img alt="compartir en twitter" class="twitteri" height="16" src="http://3.bp.blogspot.com/-TgonF6vzJs0/Uh1Hmxqk8aI/AAAAAAAAAiA/MdT4pRWKRbI/s1600/twitter.png" title="compartir en twitter" width="16" /></a> </span></div><div class="logo"> <a href="https://www.facebook.com/events/551138755268347/" style="line-height: 31px;" target="_blank"><span style="font-size: 11.5px;font-weight:800">Infórmate Aquí</span></a></div></div></div></div> </a></div>',p=".DogLoversSlide a, .DogLoversSlide a:hover{text-decoration:none;color:white}.DogLoversSlide .te-container{width:300px;height:250px;margin:0 auto;background-color:#FFF}.DogLoversSlide .te-wrapper{position:relative;width:300px;height:250px;overflow:hidden;font-family:Lato,sans-serif}.DogLoversSlide .bzm_text_bold, .DogLoversSlide .bzm_text_medium{line-height:1.4;text-decoration:none;color:#000}.DogLoversSlide .bzm_text_bold{font-size:19px;font-weight:700;line-height:1}.DogLoversSlide .bzm_text_medium{font-size:12px;font-weight:700}.DogLoversSlide .te-perspective{-webkit-perspective:1000}.DogLoversSlide .te-cover, .DogLoversSlide .te-transition{width:300px;height:150px}.DogLoversSlide .te-cover.te-hide, .DogLoversSlide .te-transition, .DogLoversSlide .te-images{display:none}.DogLoversSlide .te-images{width:300px;height:150px}.DogLoversSlide .te-cover > img, .DogLoversSlide .te-images>img{width:300px;height:150px}.DogLoversSlide .te-transition.te-show{display:block}.DogLoversSlide .te-back, .DogLoversSlide .te-front{position:absolute;width:100%;height:100%}.DogLoversSlide .te-front{z-index:2}.DogLoversSlide .te-back{z-index:1;-webkit-backface-visibility:hidden}.DogLoversSlide .te-transition img{position:absolute;left:0px;top:0px}.DogLoversSlide .te-example3 .te-front{z-index:1}.DogLoversSlide .te-example3 .te-back{z-index:2}.DogLoversSlide .te-example3.te-show .te-back{-webkit-animation:example3Back 0.4s ease-out forwards}@-webkit-keyframes example3Back{0%{-webkit-transform:rotate(40deg) scale(1.5) translate(200px,10px);opacity:0}100%{-webkit-transform:rotate(0deg) scale(1) translate(0,0);opacity:1}}.DogLoversSlide #botones-para-compartir{text-align:right}.likedini:hover,.facebooki:hover,.twitteri:hover,.googlei:hover,.pinteresti:hover{border-radius:25px 25px 25px 25px;transition:all .3s ease-out;box-shadow:0px 0px 5px #000;-moz-transition:all .5s;-webkit-transition:all .5s;-o-transition:all .5s}.likedini,.facebooki,.twitteri,.googlei,.pinteresti{transition:all .3s ease-out;-moz-transition:all .5s;-webkit-transition:all .5s;-o-transition:all .5s}.DogLoversSlide .logo{width:35%;z-index:2;background-color:#e45a18;border-radius:2px;float:right;height:30px;text-align:center;margin-top:1px}",g=null,m=null,h=null,v=null;return imagesCount=0,teTransition=null,{show:s}}();DogLoversSlide.show('DogLoversSlide');