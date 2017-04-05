	var aLi = document.querySelectorAll('.nav > ul > li');
	for(var j = 0; j <aLi.length; j++){
		aLi[j].onclick = function(){
			for(var j = 0; j < aLi.length; j++){
				aLi[j].className = '';
			}
			this.className = 'active';
		}
	}

