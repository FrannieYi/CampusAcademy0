// JavaScript Document

//轮播图
$(function () {
            var topCarousel = $('#topCarousel');
            var topCarouselPicture = $('#topCarouselPicture');
            var topCarouselCircle = $('#topCarouselCircle span');
            var prev1 = $('#prev1');
            var next1 = $('#next1');
            var index = 1;
            var len = 4;
            var interval = 3000;
            var timer;

            function animate (offset) {
                var left = parseInt(topCarouselPicture.css('left')) + offset;
                if (offset>0) {
                    offset = '+=' + offset;
                }
                else {
                    offset = '-=' + Math.abs(offset);
                }
                topCarouselPicture.animate({'left': offset}, 300, function () {
                    if(left > -200){
                        topCarouselPicture.css('left', -1920 * len);
                    }
                    if(left < (-1920 * len)) {
                        topCarouselPicture.css('left', -1920);
                    }
                });
            }

            function showButton() {
                topCarouselCircle.eq(index-1).addClass('on').siblings().removeClass('on');
            }

            function play() {
                timer = setTimeout(function () {
                    next1.trigger('click');
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }

            next1.bind('click', function () {
                if (topCarouselPicture.is(':animated')) {
                    return;
                }
                if (index == 4) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-1920);
                showButton();
            });

            prev1.bind('click', function () {
                if (topCarouselPicture.is(':animated')) {
                    return;
                }
                if (index == 1) {
                    index = 4;
                }
                else {
                    index -= 1;
                }
                animate(1920);
                showButton();
            });

            topCarouselCircle.each(function () {
                 $(this).bind('click', function () {
                     if (topCarouselPicture.is(':animated') || $(this).attr('class')=='on') {
                         return;
                     }
                     var myIndex = parseInt($(this).attr('index'));
                     var offset = -1920 * (myIndex - index);

                     animate(offset);
                     index = myIndex;
                     showButton();
                 });
            });
            topCarousel.hover(stop, play);
            play();
        });


//播放/暂停图标切换
function playMusic(a){
	var array = document.getElementsByTagName('button');
	var length = array.length;
	var status = a.className;
	for(var i = 0; i < length; i++){
		array[i].className = 'playSong';
	}
	if(status != 'pauseSong'){
		a.className = 'pauseSong';
	}	
	else{
		a.className = 'playSong';
	}
}
