var JustoBuenoSlide = (function() {		

	//configuracion
	var _currentImg = 0,
		animated = false,
		_TRANSITION = 'te-example3';

	var html = '<div class="te-container"> <a href="https://mercaderiajustoybueno.com/" target="_blank"><div id="te-wrapper" class="te-wrapper"><div class="te-images"> <img src="https://i.imgur.com/CpvX738.jpg" alt="" /> <img src="https://i.imgur.com/oN56p4x.jpg" alt="" /> <img src="https://i.imgur.com/hwr7QR9.jpg" alt="" /></div><div class="te-cover"> <img src="https://i.imgur.com/CpvX738.jpg" alt="" /></div><div class="te-transition"><div class="te-front"></div><div class="te-back"></div></div><div style="padding-left: 5px;padding-top:2px;padding-right:5px;"><div class="bzm_text"> <span class="bzm_text_title bzm_text_bold" style="color:#000;line-height:1.1;">Le invitamos a mercar con gusto</span> <span class="bzm_text_title bzm_text_medium" style="display:block;color:#000;margin-top:5px;"><i>Encuentra <strong>JUSTO</strong> lo que necesitas: <strong>BUENOS</strong> productos, buen precio y sobre todo muy cerca de tí.</i></span></div><div style="bottom:0px;height: 18px;text-align:left;margin-top:8px;"> <img src="https://i.imgur.com/ZQs3Kch.jpg" style="height:32px;"><div id="botones-para-compartir" style="display:inline;margin-left:1px;margin-top:-19px;"> <span> <a class="shared" href="https://www.facebook.com/sharer/sharer.php?u=https://mercaderiajustoybueno.com/" target="block"> <img alt="compartir en facebook" class="facebooki" height="16" src="http://4.bp.blogspot.com/-2W3Fr7nS-T0/Uh1HrkLe5wI/AAAAAAAAAiQ/0-_aC8Yici4/s1600/facebook.png" title="compartir en facebook" width="16" /></a><a class="shared" href="https://plus.google.com/share?url=https://mercaderiajustoybueno.com/" target="block"> <img alt="compartir en google+" class="googlei" height="16" src="http://3.bp.blogspot.com/-Ioy5JWv_nwk/Uh1HlxE8urI/AAAAAAAAAhc/q_uUabDAhsU/s1600/Google%252B%2Balt.png" title="compartir en google+" width="16" /></a><a class="shared" href="https://twitter.com/home?status=https://mercaderiajustoybueno.com/" target="block"> <img alt="compartir en twitter" class="twitteri" height="16" src="http://3.bp.blogspot.com/-TgonF6vzJs0/Uh1Hmxqk8aI/AAAAAAAAAiA/MdT4pRWKRbI/s1600/twitter.png" title="compartir en twitter" width="16" /></a> </span></div><div class="logo"> <a href="https://mercaderiajustoybueno.com/" style="line-height: 31px;" target="_blank"><span style="font-size: 11.5px;font-weight:800">Visítanos</span></a></div></div></div></div> </a></div>';

	var css = '.JustoBuenoSlide a, .JustoBuenoSlide a:hover{text-decoration:none;color:white}.JustoBuenoSlide .te-container{width:300px;height:250px;margin:0 auto;background-color:#FFF}.JustoBuenoSlide .te-wrapper{position:relative;width:300px;height:250px;overflow:hidden;font-family:Lato,sans-serif}.JustoBuenoSlide .bzm_text_bold, .JustoBuenoSlide .bzm_text_medium{line-height:1.4;text-decoration:none;color:#000}.JustoBuenoSlide .bzm_text_bold{font-size:15px;font-weight:700;line-height:1}.JustoBuenoSlide .bzm_text_medium{font-size:12px;font-weight:500}.JustoBuenoSlide .te-perspective{-webkit-perspective:1000}.JustoBuenoSlide .te-cover, .JustoBuenoSlide .te-transition{width:300px;height:150px}.JustoBuenoSlide .te-cover.te-hide, .JustoBuenoSlide .te-transition, .JustoBuenoSlide .te-images{display:none}.JustoBuenoSlide .te-images{width:300px;height:150px}.JustoBuenoSlide .te-cover > img, .JustoBuenoSlide .te-images>img{width:300px;height:150px}.JustoBuenoSlide .te-transition.te-show{display:block}.JustoBuenoSlide .te-back, .JustoBuenoSlide .te-front{position:absolute;width:100%;height:100%}.JustoBuenoSlide .te-front{z-index:2}.JustoBuenoSlide .te-back{z-index:1;-webkit-backface-visibility:hidden}.JustoBuenoSlide .te-transition img{position:absolute;left:0px;top:0px}.JustoBuenoSlide .te-example3 .te-front{z-index:1}.JustoBuenoSlide .te-example3 .te-back{z-index:2}.JustoBuenoSlide .te-example3.te-show .te-back{-webkit-animation:example3Back 0.4s ease-out forwards}@-webkit-keyframes example3Back{0%{-webkit-transform:rotate(40deg) scale(1.5) translate(200px,10px);opacity:0}100%{-webkit-transform:rotate(0deg) scale(1) translate(0,0);opacity:1}}.JustoBuenoSlide #botones-para-compartir{text-align:right}.likedini:hover,.facebooki:hover,.twitteri:hover,.googlei:hover,.pinteresti:hover{border-radius:25px 25px 25px 25px;transition:all .3s ease-out;box-shadow:0px 0px 5px #000;-moz-transition:all .5s;-webkit-transition:all .5s;-o-transition:all .5s}.likedini,.facebooki,.twitteri,.googlei,.pinteresti{transition:all .3s ease-out;-moz-transition:all .5s;-webkit-transition:all .5s;-o-transition:all .5s}.JustoBuenoSlide .logo{width:26%;z-index:2;background-color:#d44132;border-radius:5px;float:right;height:30px;text-align:center;margin-top:1px}';
		
	
	
	//funcionamiento del script
	var teWrapper = null,
	teCover	= null,
	teImages = null,
	containerE = null;
	imagesCount	= 0,
	teTransition = null;

	// Función que hace compatibles los eventos con todos los navegadores.
	function _addEvent(el, name, fn) {
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
	//limpiar todos los elementos hijos del un uno padre
	function _removeChildrens(arrayElements) {

		for (var i=0;i<arrayElements.length;i++) {
			while (arrayElements[i].firstChild) {
				arrayElements[i].removeChild(arrayElements[i].firstChild);
			}
		}

		return arrayElements;
	};

	//function para inicializar el carousel 
	function _initCarousel () {
		if( animated )
			return false;
			
		animated = true;	
		showNext();
		setInterval(_initCarousel, 5000);
	};

	//function propias del component
	function webkitAnimationEnd(event) {
		var teCover = document.querySelector(containerE + ' #te-wrapper div.te-cover'),
			teWrapper = document.querySelector(containerE + ' #te-wrapper'),
			teTransition = document.querySelector(containerE + ' #te-wrapper .te-transition');
		
		teCover.classList.remove('te-hide');
		teWrapper.classList.remove('te-perspective');
		teTransition.classList.remove('te-show');
		animated = false;
	};
	function updateImages() {
		
		var back = document.querySelectorAll(containerE + ' #te-wrapper .te-transition div.te-back'),
			front = document.querySelectorAll(containerE + ' #te-wrapper .te-transition div.te-front');
		
		( _currentImg === imagesCount - 1 ) ? 
			( last_img = imagesCount - 1, _currentImg = 0 ) : 
			( last_img = _currentImg, ++_currentImg );
		
		var teImages = document.querySelectorAll(containerE + ' #te-wrapper div.te-images > img');
		var last_img = teImages[last_img],
			currentImg	= teImages[teImages.length == _currentImg ? 0 : _currentImg];

		_currentImg = teImages.length == _currentImg ? 0 : _currentImg;
		
		var urlLast = last_img.attributes.getNamedItem('src').value;
		var urlCurrent = currentImg.attributes.getNamedItem('src').value;

		_removeChildrens(front);
		for (var i=0;i<front.length;i++) {
			var img = document.createElement('img');
			img.setAttribute('style','width: 300px;height: 150px;');
			img.setAttribute('src', urlLast);
			front[i].appendChild(img);
		}

		_removeChildrens(back);		
		for (var i=0;i<back.length;i++) {
			img = document.createElement('img');
			img.setAttribute('style','width: 300px;height: 150px;');
			img.setAttribute('src', urlCurrent);
			back[i].appendChild(img);
		}

		var teCover = document.querySelector(containerE + ' #te-wrapper div.te-cover img');
		teCover.setAttribute('src', urlCurrent);
	};
	function showNext() {
		
		var teCover = document.querySelector(containerE + ' #te-wrapper div.te-cover'),
			teWrapper = document.querySelector(containerE + ' #te-wrapper'),
			teTransition = document.querySelector(containerE + ' #te-wrapper .te-transition');

		teTransition.classList.add('te-show');
		teCover.classList.add('te-hide');
		teWrapper.classList.add('te-perspective');
		
		updateImages();
	};

	function show(container) {

		var containerElement = document.querySelector('.'+container);
		if (containerElement != null) {
			containerE = '.'+container;
			var head = document.getElementsByTagName('head');
			var style = document.createElement('style');  
			var text = document.createTextNode(css);            
			style.appendChild(text);   
			head[0].appendChild(style);

			containerElement.innerHTML = html;  
				
			//inicializando variables global
			teWrapper = document.querySelector(containerE + ' #te-wrapper');
			teCover	= document.querySelector(containerE + ' #te-wrapper div.te-cover');
			teImages		= document.querySelectorAll(containerE + ' #te-wrapper div.te-images > img');
			imagesCount		= teImages.length;
			teTransition	= document.querySelector(containerE + ' #te-wrapper .te-transition');

			//agregar la transition
			teTransition.classList.add(_TRANSITION);
			_addEvent(teWrapper, 'webkitAnimationEnd', webkitAnimationEnd);

			setInterval(_initCarousel, 5000);
		}
	};

	return {
		show: show
	};
})();

JustoBuenoSlide.show('JustoBuenoSlide');