//start conexion code

<!-- start Mixpanel --><script type="text/javascript">(function(e,a){if(!a.__SV){var b=window;try{var c,l,i,j=b.location,g=j.hash;c=function(a,b){return(l=a.match(RegExp(b+"=([^&]*)")))?l[1]:null};g&&c(g,"state")&&(i=JSON.parse(decodeURIComponent(c(g,"state"))),"mpeditor"===i.action&&(b.sessionStorage.setItem("_mpcehash",g),history.replaceState(i.desiredHash||"",e.title,j.pathname+j.search)))}catch(m){}var k,h;window.mixpanel=a;a._i=[];a.init=function(b,c,f){function e(b,a){var c=a.split(".");2==c.length&&(b=b[c[0]],a=c[1]);b[a]=function(){b.push([a].concat(Array.prototype.slice.call(arguments,
0)))}}var d=a;"undefined"!==typeof f?d=a[f]=[]:f="mixpanel";d.people=d.people||[];d.toString=function(b){var a="mixpanel";"mixpanel"!==f&&(a+="."+f);b||(a+=" (stub)");return a};d.people.toString=function(){return d.toString(1)+".people (stub)"};k="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
for(h=0;h<k.length;h++)e(d,k[h]);a._i.push([b,c,f])};a.__SV=1.2;b=e.createElement("script");b.type="text/javascript";b.async=!0;b.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js";c=e.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)}})(document,window.mixpanel||[]);
mixpanel.init("44fa848b7c713988573f6955f85b5ae7");</script><!-- end Mixpanel -->
//end conexion code

(function(){
    'use strict';

    var rrss = ['facebook', 'twitter', 'google', 'whatsapp', 'pinterest', 'mailto', 'reddit', 'linkedin',
    'tumblr', 'mail.google', 'printfriendly', 'telegram', 'skype', 'viber', 'bufferapp', 'flipboard' ];
    var articleData = { characterLimit: 2000 };
    var porcentTime = 10;
    var porcetScroll = 15;
    var flagReadArticleTime = false;
    var setTimeout = null;
    var gtmYTListeners = [];

    // Función que hace compatibles los eventos con todos los navegadores.
    function addEvent(el, name, fn) {
        if (el.addEventListener) {
        el.addEventListener(name, fn);
        } else if (el.attachEvent) {
        el.attachEvent('on' + name, function(evt) {
            evt.target = evt.target || evt.srcElement;
            // Call the event to ensure uniform 'this' handling, pass it event
            fn.call(el, evt);
        });
        } else if (typeof el['on' + name] === 'undefined' || el['on' + name] === null) {
        el['on' + name] = function(evt) {
            evt.target = evt.target || evt.srcElement;
            // Call the event to ensure uniform 'this' handling, pass it event
            fn.call(el, evt);
        };
        }
    };  


    //PARA LOS LINKS

    function searchShare(href) {
        
        for (var i = 0; i < rrss.length; i++) {
            if (href.search(rrss[i]) != -1) {
                return rrss[i];
            }
        }
        return null;
    };

    function goToLink(link, mode) {
        return function() {
            if (link != undefined) {
                switch (mode) {
                    case undefined: {
                        window.location = link;
                        break;
                    }
                    default: {
                        window.open(link, '_blank');
                        break;
                    }
                }
            }
        }
    };

    // Function para controlar los links de redes sociales
    function sortLink($event) {        
        var el = $event.currentTarget;
        var href = el.getAttribute('href');
        var socialShare = searchShare(href);        

        if (href != undefined) {
            if (socialShare == null) {
                var target = el.getAttribute('target');
                var data = { ref: href };
                
                if (target == '_blank' || $event.ctrlKey) {
                    mixpanel.track("Click Out", data, false);
                }else {
                    $event.preventDefault();
                    var callback = goToLink(href);
                    mixpanel.track("Click Out", data, callback);
                    window.setTimeout(callback, 500);        
                }
                
            }else {
                switch (socialShare) {
                    case 'google': {
                        var red = "Google+";
                        break;
                    }
                    case 'mailto': {
                        var red = "Email";
                        break;
                    }
                    case 'mail.google': {
                        var red = "Gmail";
                        break;
                    }
                    case 'bufferapp': {
                        var red = "Buffer";
                        break;
                    }
                    default: {
                        var red = socialShare.charAt(0).toUpperCase() + socialShare.slice(1);
                        break;
                    }
                }
                var data = {
                    "Red": red
                };
                mixpanel.track("Share Redes Sociales", data, false);
            }
            return;            
        }
    };


    //PARA LA LECTURA DEL ARTICULO


    //Function para extraer node text in html
    function getTextNode(element) {
        var firstText = "";
        if (element.nodeType === Node.TEXT_NODE && element.nodeValue.trim() != '') {
            return element.nodeValue.trim();
        }else {
            for (var i = 0; i < element.childNodes.length; i++) {
                firstText += getTextNode(element.childNodes[i]);
            }

            return firstText;
        }
    };

    //Function para extraer el read time of article
    function isReadArticle(currentTime) {

        var temp = Object.assign({}, articleData);        
        var time = currentTime - temp.date;
        if (articleData.text < temp.characterLimit) {
            var textPorcent = temp.text * 100 / temp.characterLimit;
            var floor = 60000 * textPorcent / 100;
        }else {
            if (articleData.text == temp.characterLimit) {
                var floor = 60000;
            }else {
                var floor =  temp.text / temp.characterLimit * 60000;
            }
        }

        var porcent = floor * porcentTime / 100
       
        return (time >= Math.floor(porcent)) ? true : false;
    };

    //Function para controlar el scroll
    function scrollListener(e) {

        var article = document.getElementsByClassName("article-text");
        articleData.articleInit = article[0].offsetTop;
        articleData.end = article[0].clientHeight;
        articleData.articleEnd = article[0].offsetTop + article[0].clientHeight;
        var position = window.scrollY;
        var currentTime = Date.now();
        if (!isReadArticle(currentTime)) {
            window.setTimeout(scrollListener, 2000, e);            
            return;            
        }

        var windowSize = window.innerHeight;
        if (articleData.articleEnd < windowSize && position == 0 && !flagReadArticleTime) {
            flagReadArticleTime = true;            
            mixpanel.track("Lecturas", null, false);
            return;
        }
        
        var rest = articleData.articleEnd - articleData.articleInit;
        var porcent = rest * porcetScroll / 100;
        if (position > articleData.articleInit + porcent && !flagReadArticleTime) {
            flagReadArticleTime = true;      
            mixpanel.track("Lecturas", null, false);
            return;
        }

        window.setTimeout(scrollListener, 2000, e);            
        return;
    };


    //VIDEO ZONE

    // informar del % reproducido en estos puntos: 0%, 25%, 50%, 75%, fin
    function onPlayerPercent(e) {
        if (e["getPlayerState"]() == YT.PlayerState.PLAYING) {
            var t = e["getDuration"]() - e["getCurrentTime"]() <= 1.5 ? 1 : (Math.floor(e["getCurrentTime"]() / e["getDuration"]() * 4) / 4).toFixed(2);
            // var eventSendFlag = null;
            // for (var i = 0; i < gtmYTListeners.length; i++) {
            //     var src = e.getIframe().getAttribute('src');
            //     if (gtmYTListeners[i].id == e.getIframe().getAttribute('src')) {
            //         eventSendFlag = gtmYTListeners[i].eventSend
            //         break;
            //     }
            // }
            
            // if (t >= "0.50" && !eventSendFlag) {
            //     var video_data = e["getVideoData"]();
            //     var evAction = window.location.href; // alternativas: document.title, window.location.pathname...
            //     var evLabel = video_data.title + ' : ' + video_data.video_id; // alternativas: video_data.title, video_data.id...
                e["lastP"] = t;
                // gtmYTListeners[i].eventSend = !eventSendFlag;
                // var dataVideo = {
                //     'Ubicacion': evAction,
                //     'Nombre del Video': evLabel
                // };                
                // mixpanel.track("Visualizacion Video", dataVideo, false);
                // console.log("Video see");
            }
            e["lastP"] != 1 && window.setTimeout(onPlayerPercent, 2000, e);
        // }
    };

    // detectar play, pause, end y % avanzado (cada segundo)
    function onPlayerStateChange(e) {
        e["data"] == YT.PlayerState.PLAYING && window.setTimeout(onPlayerPercent, 1000, e["target"]);
        var video_data = e.target["getVideoData"]();
        var evAction = window.location.href;
        var evLabel = video_data.title + ' : ' + video_data.video_id;
        if (e["data"] == YT.PlayerState.PLAYING && YT.gtmLastAction == "p") {
            YT.gtmLastAction = "";
            var eventSendFlag = null;
            for (var i = 0; i < gtmYTListeners.length; i++) {
                var src = e["target"].getIframe().getAttribute('src');
                if (gtmYTListeners[i].id == e["target"].getIframe().getAttribute('src')) {
                    eventSendFlag = gtmYTListeners[i].eventSend
                    break;
                }
            }

            if (!eventSendFlag) {
            
                gtmYTListeners[i].eventSend = !eventSendFlag;
                var dataVideo = {
                    'Ubicacion': evAction,
                    'Nombre del Video': evLabel
                };                
                mixpanel.track("Visualizacion Video", dataVideo, false);
            }
        }
        if (e["data"] == YT.PlayerState.PAUSED) {
            YT.gtmLastAction = "p";
        }
    };

    // añadir listener para cada reproductor
    window.onYouTubeIframeAPIReady = (function() {
        for (var e = document.getElementsByTagName("iframe"), x = e.length; x--;) {
            if (/youtube.com\/embed/.test(e[x].src)) {
                 gtmYTListeners.push({
                    "id": e[x].src,
                    "eventSend": false,
                    "event": new YT.Player(e[x], {
                        events: {
                            onStateChange: onPlayerStateChange
                        }
                    })
                });
                YT.gtmLastAction = "p";
            }
        }
    });

    function commonVideoAction() {

        // buscar embeds flash y reemplazar por iframe
        for (var e = document.getElementsByTagName("embed"), x = e.length; x--;) {
            if (/youtube.com/.test(e[x].src)) {
                e[x].parentNode.outerHTML = e[x].outerHTML.replace(/embed/g,'iframe').replace(/youtube\.com\/v/g, 'youtube.com/embed');
            }
        }

        // activar api
        for (var e = document.getElementsByTagName("iframe"), x = e.length; x--;)
            if (/youtube.com\/embed/.test(e[x].src))
                if(e[x].src.indexOf('enablejsapi=') === -1)
                    e[x].src += (e[x].src.indexOf('?') ===-1 ? '?':'&') + 'enablejsapi=1';        
    };

    // cargar api de youtube e insertar
    var j = document.createElement("script"),
	f = document.getElementsByTagName("script")[0];
    j.src = "//www.youtube.com/iframe_api";
    j.async = true;
    f.parentNode.insertBefore(j, f);


    //INICIO DEL SCRIPT


    // Function a ejecutar cuando la pagina cargue
    function DOMContentLoaded() {
        //add path de la pagina don de quieren renderizar el script
        if (window.location.href.search("vive-saludable-y-se-feliz") != -1) {

            mixpanel.track("Page View");
        
            var links = document.getElementsByTagName("a"); 
            for (var i = 0; i < links.length; i++) {
                addEvent(links[i], 'click', sortLink);
            }

            var article = document.getElementsByClassName("article-text");
            if (article[0]) {
                articleData.text = getTextNode(article[0]).length;
                articleData.articleInit = article[0].offsetTop;
                articleData.end = article[0].clientHeight;
                articleData.articleEnd = article[0].offsetTop + article[0].clientHeight;
                articleData.date = Date.now();
                window.setTimeout(scrollListener, 1000, article[0]);
            }   

            commonVideoAction();
        }    
    };   

    //Para identificar el tipo de navegador
    var event = document.addEventListener ? 'DOMContentLoaded' : 'load';
    addEvent(document, event, DOMContentLoaded);
})();
