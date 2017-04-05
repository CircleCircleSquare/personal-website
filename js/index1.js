window.onload = function(){
	var oBegin = document.querySelector('.begin');
	var oMy = document.querySelector('#my');
	var oMain = document.querySelector('.main');
	var oFirstPage = document.querySelector('.firstPage');
	var oWork = document.querySelector('.work');
	var oAbout = document.querySelector('.about');
	var oNav = document.querySelector('.nav1');
	var oUl = document.querySelector('.nav > ul');
	var aLi = document.querySelectorAll('.nav > ul > li > a');
	var oPause = document.querySelector('#pause');
	var oPlay = document.querySelector('#play');
	var oMusic = document.querySelector('#music');
	var oMusicPicture = document.querySelector('.music-picture');
	var oMusicPicture2 = document.querySelector('.music-picture2');
	var oTab = document.querySelector('.tab');
	var aTab = document.querySelectorAll('.tab > div');
	var aBtn = document.querySelectorAll('.tab > ul > li');
	var oRight = document.querySelector('.right');
	var oLeft = document.querySelector('.left');
	var oRect = document.querySelector('.rect');
	var oH = document.querySelector('.hour');
	var oM = document.querySelector('.minute');
	var oS = document.querySelector('.second');
	var oday = document.querySelector('.day');
	var oWeek = document.querySelector('.week');
	var timer = null;
	var time = null;
	var iNow = 0;

	//beigin页面
	$(function(){
		var str = '丁媛媛的主页时刻';
		for(var i = 0; i <str.length; i++){
			var oS = document.createElement('span');
			oS.innerHTML = str.charAt(i);
			oS.className = 'word';
			oBegin.appendChild(oS);
		}

		var aSpan = oBegin.children;

		var i = 0;
		timer = setInterval(function(){
			move(aSpan[i], {opacity: 1});
			i ++;
			document.body.style.overflow = 'hidden';
			if(i == aSpan.length){
				clearInterval(timer);

				setTimeout(function(){
					oBegin.style.display = 'none';
					oMain.style.display = 'block';
					document.body.style.overflow = '';
				},2600)
			}
		},200)
	})
	

	//音乐播放器
	$(function(){
		$('#pause').click(function(){
			this.style.display = 'none';
			oPlay.style.display = 'block';
			oMusic.pause();
			oMusicPicture.innerHTML='';
			oMusicPicture2.innerHTML='';
		})
		$('#play').click(function(){
			this.style.display = 'none';
			oPause.style.display = 'block';
			oMusic.play();
			oMusicPicture.innerHTML='♪♪';
			oMusicPicture2.innerHTML='♪♪';
		})
	})

	//导航条
	$(function(){
		$('.nav > ul > li > a').click(function(){
			$('.nav > ul > li > a').removeClass('active');
			$(this).addClass('active');
		})
	})

	//作品展示
	$(function(){
		function next() {
        	iNow++;
       		if (iNow == aBtn.length) {
          		iNow = 0;
       		}
        	tab();
   		}
   		time = setInterval(next,2000);
   		oTab.onmouseover = function() {
        	clearInterval(time);
    	};
    	oTab.onmouseout = function() {
        	time = setInterval(next,1500);
    	};
    	for (var i = 0; i < aBtn.length; i++) {
       		aBtn[i].index = i;
        	aBtn[i].onclick = function() {
            	iNow = this.index;
            	tab();
       	 	};
    	}
	    function tab() {
	        for (var i = 0; i < aBtn.length; i++) {
	            aBtn[i].className = '';
	            aTab[i].className = '';
	        }
	            aBtn[iNow].className = 'active';
	            aTab[iNow].className = 'active';
	       }
	})
	
	//页面滚动
	$(function(){
		$(window).scroll(function(){
		 	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
			if(scrollT <= oFirstPage.scrollHeight/2){
				aLi[0].className = 'active';
				aLi[1].className = '';
				aLi[2].className = '';
				aLi[3].className = '';
			}else if(scrollT <= oFirstPage.scrollHeight + oWork.scrollHeight/2 ){
				aLi[1].className = 'active';
				aLi[0].className = '';
				aLi[2].className = '';
				aLi[3].className = '';
			}else if(scrollT <= oFirstPage.scrollHeight + oWork.scrollHeight + oAbout.scrollHeight/2){
				aLi[2].className = 'active';
				aLi[0].className = '';
				aLi[1].className = '';
				aLi[3].className = '';
			}else{
				aLi[3].className = 'active';
				aLi[0].className = '';
				aLi[2].className = '';
				aLi[1].className = '';
			}
			oRect.style.transform = '';
			oRect.style.transform = `rotateY(30000deg) rotateX(30000deg)`;
			oRect.style.transition = `400s`;
			
		})
	})

	//时间
	$(function(){
		setInterval(clock,16);
		clock();
		function clock(){
			var oDate = new Date();
			var iH = oDate.getHours();
			var iM = oDate.getMinutes();
			var iS = oDate.getSeconds();
			var iMS = oDate.getMilliseconds();
			oH.style.transform=`rotate(${(iH + iM/60)/12 *360}deg)`;
			oM.style.transform=`rotate(${(iM + iS/60)/60*360}deg)`;
			oS.style.transform = `rotate(${(iS + iMS/1000)/60*360}deg)`;
		}
	})

	$(function(){
		var oDate = new Date();
		var oY = oDate.getFullYear();
		var oM = oDate.getMonth()+1;
		var oD = oDate.getDate();
		var str = oY + '年' + addZero(oM) + '月' + addZero(oD) + '日';
		oday.innerHTML = str;

		var iW = oDate.getDay();
		switch(iW){
			case 0:
				oWeek.innerHTML = '星期日';
				break;
			case 1:
				oWeek.innerHTML = '星期一';
				break;
			case 2:
				oWeek.innerHTML = '星期二';
				break;
			case 3:
				oWeek.innerHTML = '星期三';
				break;
			case 4:
				oWeek.innerHTML = '星期四';
				break;
			case 5:
				oWeek.innerHTML = '星期五';
				break;
			case 6:
				oWeek.innerHTML = '星期六';
				break;
		}
	})
	
	//jsonp({
		//url:"http://api.asilu.com.weather",
		//data:{
			//"city":"上海"
		//},
		//cbName:'callback',
		//success:function(json){
			//oWeather.innerHTML = json;
		//}
	//})
	
	


	
	








}