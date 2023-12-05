	/* To Disable Inspect Element */
	document.onkeydown = function(e) {
	  if(event.keyCode == 123) {
		 return window.location.replace("https://www.google.com");
	  }
	  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
		 return window.location.replace("https://www.google.com");
	  }
	  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
		 return window.location.replace("https://www.google.com");
	  }
	  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
		 return window.location.replace("https://www.google.com");
	  }
	  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
		 return window.location.replace("https://www.google.com");
	  }
		if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
		 return window.location.replace("https://www.google.com");
	  }
	}
	
	
	!function t(){try{!function t(n){1===(""+n/n).length&&0!==n||function(){}.constructor("debugger")(),t(++n)}(0)}catch(n){setTimeout(t,5e3)}}();
