var RocaSlid=function(){function t(t,e,i){t.addEventListener?t.addEventListener(e,i):t.attachEvent?t.attachEvent("on"+e,function(e){e.target=e.target||e.srcElement,i.call(t,e)}):"undefined"!=typeof t["on"+e]&&null!==t["on"+e]||(t["on"+e]=function(e){e.target=e.target||e.srcElement,i.call(t,e)})}function e(t){for(var e=0;e<t.length;e++)for(;t[e].firstChild;)t[e].removeChild(t[e].firstChild);return t}function i(){return!s&&(s=!0,r(),void setInterval(i,5e3))}function a(t){var e=document.querySelector(u+" #te-wrapper div.te-cover"),i=document.querySelector(u+" #te-wrapper"),a=document.querySelector(u+" #te-wrapper .te-transition");e.classList.remove("te-hide"),i.classList.remove("te-perspective"),a.classList.remove("te-show"),s=!1}function o(){var t=document.querySelectorAll(u+" #te-wrapper .te-transition div.te-back"),i=document.querySelectorAll(u+" #te-wrapper .te-transition div.te-front");n===imagesCount-1?(o=imagesCount-1,n=0):(o=n,++n);var a=document.querySelectorAll(u+" #te-wrapper div.te-images > img"),o=a[o],r=a[a.length==n?0:n];n=a.length==n?0:n;var l=o.attributes.getNamedItem("src").value,s=r.attributes.getNamedItem("src").value;e(i);for(var c=0;c<i.length;c++){var p=document.createElement("img");p.setAttribute("style","width: 300px;height: 150px;"),p.setAttribute("src",l),i[c].appendChild(p)}e(t);for(var c=0;c<t.length;c++)p=document.createElement("img"),p.setAttribute("style","width: 300px;height: 150px;"),p.setAttribute("src",s),t[c].appendChild(p);var d=document.querySelector(u+" #te-wrapper div.te-cover img");d.setAttribute("src",s)}function r(){var t=document.querySelector(u+" #te-wrapper div.te-cover"),e=document.querySelector(u+" #te-wrapper"),i=document.querySelector(u+" #te-wrapper .te-transition");i.classList.add("te-show"),t.classList.add("te-hide"),e.classList.add("te-perspective"),o()}function l(e){var o=document.querySelector("."+e);if(null!=o){u="."+e;var r=document.getElementsByTagName("head"),l=document.createElement("style"),n=document.createTextNode(d);l.appendChild(n),r[0].appendChild(l),o.innerHTML=p,m=document.querySelector(u+" #te-wrapper"),h=document.querySelector(u+" #te-wrapper div.te-cover"),g=document.querySelectorAll(u+" #te-wrapper div.te-images > img"),imagesCount=g.length,teTransition=document.querySelector(u+" #te-wrapper .te-transition"),teTransition.classList.add(c),t(m,"webkitAnimationEnd",a),setInterval(i,5e3)}}var n=0,s=!1,c="te-example3",p='<div class="te-container"> <a href="http://rocatilegroup.com/onetileatatime/" target="_blank"><div id="te-wrapper" class="te-wrapper"><div class="te-images"> <img src="https://i.imgur.com/9Gpzwpy.jpg" alt="" /> <img src="https://i.imgur.com/Vl3MOWw.jpg" alt="" /> <img src="https://i.imgur.com/5J4fyjS.jpg" alt="" /></div><div class="te-cover"> <img src="https://i.imgur.com/9Gpzwpy.jpg" alt="" /></div><div class="te-transition"><div class="te-front"></div><div class="te-back"></div></div><div style="padding-left: 5px;padding-top:2px;padding-right:5px;"> <span class="bzm_text_title bzm_text_bold" style="color:#000;">ROCA Porcelain & Ceramic Tiles. </span> <span class="bzm_text_title bzm_text_medium" style="display:block;color:#000;"><i style=" font-weight:500">Visit Our Miami/Doral Showroom. Book a Tour.</i></span><div style="text-align: right;margin-top:8px;"> <img src="https://i.imgur.com/lQx7a7P.png" alt="" style="height:13px"><div id="botones-para-compartir" style="display:inline;float:left;margin-left:197px;margin-top:1px;"> <span> <a class="shared" href="https://www.facebook.com/sharer/sharer.php?u=http://rocatilegroup.com/onetileatatime/" target="_blank"> <img alt="compartir en facebook" class="facebooki" height="16" src="http://4.bp.blogspot.com/-2W3Fr7nS-T0/Uh1HrkLe5wI/AAAAAAAAAiQ/0-_aC8Yici4/s1600/facebook.png" title="compartir en facebook" width="16" /></a> <a class="shared" href="https://plus.google.com/share?url=http://rocatilegroup.com/onetileatatime/" target="_blank"> <img alt="compartir en google+" class="googlei" height="16" src="http://3.bp.blogspot.com/-Ioy5JWv_nwk/Uh1HlxE8urI/AAAAAAAAAhc/q_uUabDAhsU/s1600/Google%252B%2Balt.png" title="compartir en google+" width="16" /></a> <a class="shared" href="https://twitter.com/home?status=http://rocatilegroup.com/onetileatatime/" target="_blank"> <img alt="compartir en twitter" class="twitteri" height="16" src="http://3.bp.blogspot.com/-TgonF6vzJs0/Uh1Hmxqk8aI/AAAAAAAAAiA/MdT4pRWKRbI/s1600/twitter.png" title="compartir en twitter" width="16" /></a> </span></div></div></div></div> </a></div>',d=".RocaSlid a, .RocaSlid a:hover{text-decoration:none;color:white}.RocaSlid .te-container{width:300px;height:250px;margin:0 auto;background-color:#FFF}.RocaSlid .te-wrapper{position:relative;width:300px;height:250px;overflow:hidden;font-family:Lato,sans-serif}.RocaSlid .bzm_text_bold, .RocaSlid .bzm_text_medium{line-height:1.4;text-decoration:none;color:#000}.RocaSlid .bzm_text_bold{font-size:19px;font-weight:700;line-height:1}.RocaSlid .bzm_text_medium{font-size:14px;font-weight:700;margin-top:3px;}.RocaSlid .te-perspective{-webkit-perspective:1000}.RocaSlid .te-cover, .RocaSlid .te-transition{width:300px;height:150px}.RocaSlid .te-cover.te-hide, .RocaSlid .te-transition, .RocaSlid .te-images{display:none}.RocaSlid .te-images{width:300px;height:150px}.RocaSlid .te-cover > img, .RocaSlid .te-images>img{width:300px;height:150px}.RocaSlid .te-transition.te-show{display:block}.RocaSlid .te-back, .RocaSlid .te-front{position:absolute;width:100%;height:100%}.RocaSlid .te-front{z-index:2}.RocaSlid .te-back{z-index:1;-webkit-backface-visibility:hidden}.RocaSlid .te-transition img{position:absolute;left:0px;top:0px}.RocaSlid .te-example3 .te-front{z-index:1}.RocaSlid .te-example3 .te-back{z-index:2}.RocaSlid .te-example3.te-show .te-back{-webkit-animation:example3Back 0.4s ease-out forwards}@-webkit-keyframes example3Back{0%{-webkit-transform:rotate(40deg) scale(1.5) translate(200px,10px);opacity:0}100%{-webkit-transform:rotate(0deg) scale(1) translate(0,0);opacity:1}}.RocaSlid #botones-para-compartir{text-align:right}.likedini:hover,.facebooki:hover,.twitteri:hover,.googlei:hover,.pinteresti:hover{border-radius:25px 25px 25px 25px;transition:all .3s ease-out;box-shadow:0px 0px 5px #000;-moz-transition:all .5s;-webkit-transition:all .5s;-o-transition:all .5s}.likedini,.facebooki,.twitteri,.googlei,.pinteresti{transition:all .3s ease-out;-moz-transition:all .5s;-webkit-transition:all .5s;-o-transition:all .5s}",m=null,h=null,g=null,u=null;return imagesCount=0,teTransition=null,{show:l}}();RocaSlid.show('RocaSlid');