var LeonDiabetesSlide=function(){function e(e,t,i){e.addEventListener?e.addEventListener(t,i):e.attachEvent?e.attachEvent("on"+t,function(t){t.target=t.target||t.srcElement,i.call(e,t)}):"undefined"!=typeof e["on"+t]&&null!==e["on"+t]||(e["on"+t]=function(t){t.target=t.target||t.srcElement,i.call(e,t)})}function t(e){for(var t=0;t<e.length;t++)for(;e[t].firstChild;)e[t].removeChild(e[t].firstChild);return e}function i(){return!l&&(l=!0,r(),void setInterval(i,5e3))}function a(e){var t=document.querySelector(b+" #te-wrapper div.te-cover"),i=document.querySelector(b+" #te-wrapper"),a=document.querySelector(b+" #te-wrapper .te-transition");t.classList.remove("te-hide"),i.classList.remove("te-perspective"),a.classList.remove("te-show"),l=!1}function o(){var e=document.querySelectorAll(b+" #te-wrapper .te-transition div.te-back"),i=document.querySelectorAll(b+" #te-wrapper .te-transition div.te-front");n===imagesCount-1?(o=imagesCount-1,n=0):(o=n,++n);var a=document.querySelectorAll(b+" #te-wrapper div.te-images > img"),o=a[o],r=a[a.length==n?0:n];n=a.length==n?0:n;var s=o.attributes.getNamedItem("src").value,l=r.attributes.getNamedItem("src").value;t(i);for(var d=0;d<i.length;d++){var c=document.createElement("img");c.setAttribute("style","width: 300px;height: 150px;"),c.setAttribute("src",s),i[d].appendChild(c)}t(e);for(var d=0;d<e.length;d++)c=document.createElement("img"),c.setAttribute("style","width: 300px;height: 150px;"),c.setAttribute("src",l),e[d].appendChild(c);var p=document.querySelector(b+" #te-wrapper div.te-cover img");p.setAttribute("src",l)}function r(){var e=document.querySelector(b+" #te-wrapper div.te-cover"),t=document.querySelector(b+" #te-wrapper"),i=document.querySelector(b+" #te-wrapper .te-transition");i.classList.add("te-show"),e.classList.add("te-hide"),t.classList.add("te-perspective"),o()}function s(t){var o=document.querySelector("."+t);if(null!=o){b="."+t;var r=document.getElementsByTagName("head"),s=document.createElement("style"),n=document.createTextNode(p);s.appendChild(n),r[0].appendChild(s),o.innerHTML=c,m=document.querySelector(b+" #te-wrapper"),h=document.querySelector(b+" #te-wrapper div.te-cover"),g=document.querySelectorAll(b+" #te-wrapper div.te-images > img"),imagesCount=g.length,teTransition=document.querySelector(b+" #te-wrapper .te-transition"),teTransition.classList.add(d),e(m,"webkitAnimationEnd",a),setInterval(i,5e3)}}var n=0,l=!1,d="te-example3",c='<div class="te-container"> <a href="http://www.leonmedicalcenters.com/es/diabetes-primeros-cuidados/" target="_blank"><div id="te-wrapper" class="te-wrapper"><div class="te-images"> <img src="https://i.imgur.com/NbAVUEn.jpg" alt="" /> <img src="https://i.imgur.com/RhNd3s1.jpg" alt="" /> <img src="https://i.imgur.com/n5e78bG.jpg" alt="" /></div><div class="te-cover"> <img src="https://i.imgur.com/NbAVUEn.jpg" alt="" /></div><div class="te-transition"><div class="te-front"></div><div class="te-back"></div></div><div style="padding-left: 5px;padding-top:2px;padding-right:5px;width: 98.5%;"> <span class="bzm_text_title bzm_text_bold" style="color:#000;">Diabetes, primeros cuidados.</span> <span class="bzm_text_title bzm_text_medium" style="display:block;color:#000;"><i style=" font-weight:500">Su médico es la mejor fuente para obtener los cuidados que necesita para vivir con diabetes. En Leon Medical Centers tenemos los mejores especialistas de diabetes de toda Florida.</i></span><div style="text-align: right;margin-top:2px;"> <img src="https://i.imgur.com/t6HZ6GY.jpg" alt="" style="height:23px;margin-top:-10px;"><div id="botones-para-compartir" style="display:inline;float:left;margin-left:176px;margin-top:-3px;"> <span> <a class="shared" href="https://www.facebook.com/sharer/sharer.php?u=http://www.leonmedicalcenters.com/es/diabetes-primeros-cuidados/" target="_blank"> <img alt="compartir en facebook" class="facebooki" height="16" src="http://4.bp.blogspot.com/-2W3Fr7nS-T0/Uh1HrkLe5wI/AAAAAAAAAiQ/0-_aC8Yici4/s1600/facebook.png" title="compartir en facebook" width="16" /></a><a class="shared" href="https://plus.google.com/share?url=http://www.leonmedicalcenters.com/es/diabetes-primeros-cuidados/" target="_blank"> <img alt="compartir en google+" class="googlei" height="16" src="http://3.bp.blogspot.com/-Ioy5JWv_nwk/Uh1HlxE8urI/AAAAAAAAAhc/q_uUabDAhsU/s1600/Google%252B%2Balt.png" title="compartir en google+" width="16" /></a><a class="shared" href="https://twitter.com/home?status=http://www.leonmedicalcenters.com/es/diabetes-primeros-cuidados/" target="_blank"> <img alt="compartir en twitter" class="twitteri" height="16" src="http://3.bp.blogspot.com/-TgonF6vzJs0/Uh1Hmxqk8aI/AAAAAAAAAiA/MdT4pRWKRbI/s1600/twitter.png" title="compartir en twitter" width="16" /></a> </span></div></div></div></div> </a></div>',p=".LeonDiabetesSlide a, .LeonDiabetesSlide a:hover{text-decoration:none;color:white}.LeonDiabetesSlide .te-container{width:300px;height:250px;margin:0 auto;background-color:#FFF}.LeonDiabetesSlide .te-wrapper{position:relative;width:300px;height:250px;overflow:hidden;font-family:Lato,sans-serif}.LeonDiabetesSlide .bzm_text_bold, .LeonDiabetesSlide .bzm_text_medium{line-height:1.4;text-decoration:none;color:#000}.LeonDiabetesSlide .bzm_text_bold{font-size:15px;font-weight:700;line-height:1}.LeonDiabetesSlide .bzm_text_medium{font-size:12px;font-weight:700;line-height:1.2;}.LeonDiabetesSlide .te-perspective{-webkit-perspective:1000}.LeonDiabetesSlide .te-cover, .LeonDiabetesSlide .te-transition{width:300px;height:150px}.LeonDiabetesSlide .te-cover.te-hide, .LeonDiabetesSlide .te-transition, .LeonDiabetesSlide .te-images{display:none}.LeonDiabetesSlide .te-images{width:300px;height:150px}.LeonDiabetesSlide .te-cover > img, .LeonDiabetesSlide .te-images>img{width:300px;height:150px}.LeonDiabetesSlide .te-transition.te-show{display:block}.LeonDiabetesSlide .te-back, .LeonDiabetesSlide .te-front{position:absolute;width:100%;height:100%}.LeonDiabetesSlide .te-front{z-index:2}.LeonDiabetesSlide .te-back{z-index:1;-webkit-backface-visibility:hidden}.LeonDiabetesSlide .te-transition img{position:absolute;left:0px;top:0px}.LeonDiabetesSlide .te-example3 .te-front{z-index:1}.LeonDiabetesSlide .te-example3 .te-back{z-index:2}.LeonDiabetesSlide .te-example3.te-show .te-back{-webkit-animation:example3Back 0.4s ease-out forwards}@-webkit-keyframes example3Back{0%{-webkit-transform:rotate(40deg) scale(1.5) translate(200px,10px);opacity:0}100%{-webkit-transform:rotate(0deg) scale(1) translate(0,0);opacity:1}}.LeonDiabetesSlide #botones-para-compartir{text-align:right}.likedini:hover,.facebooki:hover,.twitteri:hover,.googlei:hover,.pinteresti:hover{border-radius:25px 25px 25px 25px;transition:all .3s ease-out;box-shadow:0px 0px 5px #000;-moz-transition:all .5s;-webkit-transition:all .5s;-o-transition:all .5s}.likedini,.facebooki,.twitteri,.googlei,.pinteresti{transition:all .3s ease-out;-moz-transition:all .5s;-webkit-transition:all .5s;-o-transition:all .5s}",m=null,h=null,g=null,b=null;return imagesCount=0,teTransition=null,{show:s}}();LeonDiabetesSlide.show('LeonDiabetesSlide');