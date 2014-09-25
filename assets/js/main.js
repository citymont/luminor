/*!
 * luminor
 *
 * MIT licensed
 * Copyright (C) 2014 Thibaut Villemont, http://moderntree.net
 */


var App = (function () {
	lux = 0

    return {
        init: function() {
          console.log('init');
        },
        start: function() {
        	if(App.lux > 70 ) {
        		$('.digits, #watch .minute-marks li').addClass('glowing');
        	} else {
        		$('.digits, #watch .minute-marks li').removeClass('glowing');
        	}
        	
        }
    };

})();

App.init();

window.addEventListener('devicelight', function(event) {
  console.log(event.value + 'lux');
  App.lux = event.value;
  App.start();
});