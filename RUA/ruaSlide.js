var RUASlide = (function() {		

	//configuracion
	var _currentImg = 0,
		animated = false,
		_TRANSITION = 'te-example3';

	var html = '<div class="te-container"> <a href="https://www.housell.com/landing-generica/?" target="_blank"> <div id="te-wrapper" class="te-wrapper"> <div class="te-images"> <img src="https://i.imgur.com/KAB1zYi.png" alt=""/> <img src="https://i.imgur.com/IIeJ4Nr.png" alt=""/> <img src="https://i.imgur.com/A1JMezc.png" alt=""/> </div><div class="te-cover"> <img src="https://i.imgur.com/KAB1zYi.png" alt=""/> </div><div class="te-transition"> <div class="te-front"></div><div class="te-back"></div></div><div style="padding-left: 0px;margin-top:-2.5px;padding-top:0px;padding-right:5px;"> <div class="bzm_text"> <span class="bzm_text_title bzm_text_bold text_mob" style="color:#2d363b;line-height:86%; font-size:16px;">¿Vendió una propiedad por menos de lo que la compró? Recupere su dinero de la plusvalía municipal. Hay sentencias que lo avalan.</span> <img class="logo" src="https://i.imgur.com/xsff2W6.png" alt=""> </div></div></div></a> </div>';

	var css = '.RUASlide a, .RUASlide a:hover{text-decoration: none; color: white}.RUASlide .te-container{width: 300px; height: 250px; margin: 0 auto; background-color: #f1f1f1;}.RUASlide .te-wrapper{position: relative; width: 300px; height: 250px; overflow: hidden; font-family: Source Sans Pro;}.RUASlide .bzm_text{margin-top: 10px; margin-left: 10px; text-align: left;}.RUASlide .bzm_text_bold, .RUASlide .bzm_text_medium{line-height: 1.4; text-decoration: none; color: #000;}.RUASlide .bzm_text_bold{font-size: 19px; font-weight: 700; line-height: 1;}.RUASlide .bzm_text_medium{font-size: 16px; font-weight: 400;}/*******************************************************/ /****************** Unfold Effects *********************/ /*******************************************************/ .RUASlide .te-perspective{-webkit-perspective: 1000;}.RUASlide .te-cover, .RUASlide .te-transition{width: 300px; height: 170px;}.RUASlide .te-cover.te-hide, .RUASlide .te-transition, .RUASlide .te-images{display: none;}.RUASlide .te-images{width: 300px; height: 170px;}.RUASlide .te-cover>img, .RUASlide .te-images>img{width: 300px; height: 170px;}.RUASlide .te-transition.te-show{display: block;}.RUASlide .te-back, .RUASlide .te-front{position: absolute; width: 100%; height: 100%;}.RUASlide .te-front{z-index: 2;}.RUASlide .te-back{z-index: 1; -webkit-backface-visibility: hidden;}.RUASlide .te-transition img{position: absolute; left: 0px; top: 0px;}/***************** example3 ********************/ .RUASlide .te-example3 .te-front{z-index: 1;}.RUASlide .te-example3 .te-back{z-index: 2;}.RUASlide .te-example3.te-show .te-back{-webkit-animation: example3Back 0.4s ease-out forwards;}@-webkit-keyframes example3Back{0%{-webkit-transform: rotate(40deg) scale(1.5) translate(200px, 10px); opacity: 0;}100%{-webkit-transform: rotate(0deg) scale(1) translate(0, 0); opacity: 1;}}.RUASlide #botones-para-compartir{text-align: right;}.likedini:hover, .facebooki:hover, .twitteri:hover, .googlei:hover, .pinteresti:hover{border-radius: 25px 25px 25px 25px; transition: all .3s ease-out; box-shadow: 0px 0px 5px #000; /* Sombra */ -moz-transition: all .5s; -webkit-transition: all .5s; -o-transition: all .5s;}.likedini, .facebooki, .twitteri, .googlei, .pinteresti{transition: all .3s ease-out; -moz-transition: all .5s; -webkit-transition: all .5s; -o-transition: all .5s;}.RUASlide .logo{width: 35px; z-index: 2; background-color: transparent; border-radius: 0px; float: right; height: 25px; text-align: center; margin-top: 2.5px; margin-right: 5px;}@media screen and (){.text_mob{font-size: 12px;}}}';
		
	
	
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
			img.setAttribute('style','width: 300px;height: 170px;');
			img.setAttribute('src', urlLast);
			front[i].appendChild(img);
		}

		_removeChildrens(back);		
		for (var i=0;i<back.length;i++) {
			img = document.createElement('img');
			img.setAttribute('style','width: 300px;height: 170px;');
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
RUASlide.show('RUASlide');
