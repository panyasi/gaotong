$(function(){
	const indexPage ={
		data:{
			index:0,
			swiperitemWidth:null,
			isLock:false,
			swiperSpeed:200,
			swiperItemLen:$('.teacher-item').length,
			initLeft:null,
		},
		init:function(){
			this.bind();
			this.setSwiperItem();
		},
		bind:function(){
			$(window).on('scroll',this.navScrollEvent);
			$('.nav-list li').on('click',this.sectionScrollEvent);
			$('.online-toggle-item').on('click',this.onlineItemActive);
			$('.item-section').on('click',this.itemSectionStopPro);
			$('.video-mask').on('click',this.videoPlayEvent);
			$('.video-icon').on('click',this.videoPlayEvent);
			$('#video-js').on('click',this.videoPauseEvent);
			$('#video-js').on('mouseenter',this.videoControlsShow);
			$('.swiper-right-btn').on('click',this.nextSwiper);
      		$('.swiper-left-btn').on('click',this.preSwiper);
		},
		navScrollEvent:function(){
			let winScroll = $(window).scrollTop();
			let hasClassActive = $('#nav').hasClass('active');
			if(!hasClassActive && winScroll > 426){
				$('#nav').addClass('active')
			}else if(hasClassActive && winScroll < 426){
				$('#nav').removeClass('active')
			}
		},
		sectionScrollEvent:function(){
			let thisIndex = $(this).data('index') ;
			let thisSection = $('.section' + '-' + thisIndex);
			let offsetTop = thisSection.offset().top - 70;
			$("html,body").animate({
          		scrollTop: offsetTop
      		}, 200);
		},
		onlineItemActive:function(){
			$(this).toggleClass('active');
		},
		itemSectionStopPro:function(e){
			e.stopPropagation();
		},
		videoPlayEvent:function(){
			$('.video-mask').remove();
			$('.video-icon').remove();
			$('#video-js').trigger('play');
		},
		videoPauseEvent:function(){
			if(this.paused){
		        $('#video-js').trigger('play');
		    }else{
		        $('#video-js').trigger('pause');
		        indexPage.videoControlsShow();
		    }   
		},
		videoControlsShow:function(){
			let myVideo = document.getElementById('video-js');
      		myVideo.controls  = true;
		},
		setSwiperItem:function(){
			let swiperItemLen = indexPage.data.swiperItemLen
			let firstItem = $('.teacher-item').not(':first').clone();
      		let lastItem = $('.teacher-item').not(':last').clone();
		    let itemWidth = $('.teacher-item').width();
		    indexPage.data.swiperitemWidth = itemWidth;
		    let initLeft = -itemWidth * (swiperItemLen - 1);
		    indexPage.data.initLeft = initLeft;
		    $('.teacher-list').append(lastItem);
      		$('.teacher-list').prepend(firstItem);
		    $('.teacher-list').css('left', initLeft + "px")
		},
		nextSwiper:function(){
			let next_index = indexPage.data.index + 1;
			indexPage.gotoIndex(next_index);
		},
		preSwiper:function(){
			let pre_index = indexPage.data.index - 1;
			indexPage.gotoIndex(pre_index)
		},
		gotoIndex:function(index){
			let initLeft = indexPage.data.initLeft;
			let itemWidth = indexPage.data.swiperitemWidth;
			let swiperItemLen = indexPage.data.swiperItemLen;
			let swiperSpeed = indexPage.data.swiperSpeed;
			let isLock = indexPage.data.isLock;
			let translateX = initLeft - (itemWidth * index);
			if(isLock){
				return
			}else{
				indexPage.data.isLock = true;
			}
			$('.teacher-list').animate({
				"left" : translateX + "px",
				},swiperSpeed, function() {
				if(index == swiperItemLen){
					index = 0;
					$('.teacher-list').css('left', initLeft + "px");
				}
				if(index == -(swiperItemLen -1)){
					index = 1;
					$('.teacher-list').css('left', initLeft - (index * itemWidth) + "px");
				}
				indexPage.data.index = index;
				console.log(index,"new")				
				indexPage.data.isLock = false;
			});
		}
	}
	indexPage.init();
})