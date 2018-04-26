var HousellSlide = (function() {		

	//configuracion
	var _currentImg = 0,
		animated = false,
		_TRANSITION = 'te-example3';

	var html = '<div class="te-container"> <a href="https://www.housell.com/landing-generica/?" target="_blank"> <div id="te-wrapper" class="te-wrapper"> <div class="te-images"> <img src="https://i.imgur.com/ZJgckm2.jpg" alt=""/> <img src="https://i.imgur.com/Tlh42Sc.jpg" alt=""/> <img src="https://i.imgur.com/gvS4Etp.jpg" alt=""/> </div><div class="te-cover"> <img src="https://i.imgur.com/ZJgckm2.jpg" alt=""/> </div><div class="te-transition"> <div class="te-front"></div><div class="te-back"></div></div><div style="padding-left: 0px;padding-top:5px;padding-right:5px;"> <div class="bzm_text"> <span class="bzm_text_title bzm_text_bold" style="color:#2d363b;line-height:1.1; font-size:18px;"> ¿Vendes tu casa? Esto te interesa…</span> <span style="color:#000000; font-size:14px;"> <i> Descubre cuanto puedes ahorrar vendiendo tu casa con una inmobiliaria digital </i> </span> <img class="logo" src="https://i.imgur.com/Qw2jb2H.png" alt=""> </div></div></div></a> </div>';

	var css = '.HousellSlide a, .HousellSlide a:hover{text-decoration: none; color: white}.HousellSlide .te-container{width: 300px; height: 250px; margin: 0 auto; background-color: #f1f1f1;}.HousellSlide .te-wrapper{position: relative; width: 300px; height: 250px; overflow: hidden; font-family: Source Sans Pro;}.HousellSlide .bzm_text{margin-top: 10px; margin-left: 10px; text-align: left;}.HousellSlide .bzm_text_bold, .HousellSlide .bzm_text_medium{line-height: 1.4; text-decoration: none; color: #000;}.HousellSlide .bzm_text_bold{font-size: 19px; font-weight: 700; line-height: 1;}.HousellSlide .bzm_text_medium{font-size: 16px; font-weight: 400;}/*******************************************************/ /****************** Unfold Effects *********************/ /*******************************************************/ .HousellSlide .te-perspective{-webkit-perspective: 1000;}.HousellSlide .te-cover, .HousellSlide .te-transition{width: 300px; height: 150px;}.HousellSlide .te-cover.te-hide, .HousellSlide .te-transition, .HousellSlide .te-images{display: none;}.HousellSlide .te-images{width: 300px; height: 150px;}.HousellSlide .te-cover>img, .HousellSlide .te-images>img{width: 300px; height: 150px;}.HousellSlide .te-transition.te-show{display: block;}.HousellSlide .te-back, .HousellSlide .te-front{position: absolute; width: 100%; height: 100%;}.HousellSlide .te-front{z-index: 2;}.HousellSlide .te-back{z-index: 1; -webkit-backface-visibility: hidden;}.HousellSlide .te-transition img{position: absolute; left: 0px; top: 0px;}/***************** example3 ********************/ .HousellSlide .te-example3 .te-front{z-index: 1;}.HousellSlide .te-example3 .te-back{z-index: 2;}.HousellSlide .te-example3.te-show .te-back{-webkit-animation: example3Back 0.4s ease-out forwards;}@-webkit-keyframes example3Back{0%{-webkit-transform: rotate(40deg) scale(1.5) translate(200px, 10px); opacity: 0;}100%{-webkit-transform: rotate(0deg) scale(1) translate(0, 0); opacity: 1;}}.HousellSlide #botones-para-compartir{text-align: right;}.likedini:hover, .facebooki:hover, .twitteri:hover, .googlei:hover, .pinteresti:hover{border-radius: 25px 25px 25px 25px; transition: all .3s ease-out; box-shadow: 0px 0px 5px #000; /* Sombra */ -moz-transition: all .5s; -webkit-transition: all .5s; -o-transition: all .5s;}.likedini, .facebooki, .twitteri, .googlei, .pinteresti{transition: all .3s ease-out; -moz-transition: all .5s; -webkit-transition: all .5s; -o-transition: all .5s;}.HousellSlide .logo{width: 62px; z-index: 2; background-color: transparent; border-radius: 0px; float: right; height: 15px; text-align: center; margin-top: 15px; margin-right:5px;}';
		
	
	
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
HousellSlide.show('HousellSlide');
