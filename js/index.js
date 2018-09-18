$(function(){
  var indexPage = {
    init:function(){
      this.setSwiperItem();
      this.bind();
    },
    bind:function(){
      $('.online-toggle-item').on('click',this.toggleItemActive);
      $('.item-section').on('click',this.itemSectionStopPro);
      $(window).on('scroll',this.navScroll);
      $('.nav-list li').on('click',this.scrollToSection);
      $('.swiper-right-btn').on('click',this.nextCheckoutItem);
      $('.swiper-left-btn').on('click',this.preCheckoutItem);
      $('.video-mask').on('click',this.videoPlayEvent);
      $('.video-icon').on('click',this.videoPlayEvent);
      $('#video-js').on('click',this.videoPauseEvent);
      $('#video-js').on('mouseenter',this.videoControlsShow);
    },
    toggleItemActive:function(){
      $(this).toggleClass('active');
    },
    itemSectionStopPro:function(e){
      e.stopPropagation(); // 阻止冒泡
      console.log(this)
    },
    navScroll:function(){
      var hasClassActive = $('#nav').hasClass('active')
      // console.log(hasClassActive)
      var winScroll = $(window).scrollTop();
      // console.log(winScroll)
      if(!hasClassActive && winScroll > 426){
        $('#nav').addClass('active')
      }else if(hasClassActive && winScroll < 426){
        $('#nav').removeClass('active')
      }
    },
    scrollToSection:function(){
      var currentIndex = $('.nav-list li').index(this)+1;
      console.log(currentIndex)
      var currentSection = $('.section'+'-'+currentIndex);
      // console.log(currentSection);
      var eleTop = currentSection.offset().top-70;
      // console.log(eleTop);
      $("html,body").animate({
          scrollTop: eleTop
      }, 200);
    },
    data:{
      initLeft:-960,
      isLock:false,
    },  
    nextCheckoutItem:function(){
      indexPage.data.initLeft = indexPage.data.initLeft-240;
      // console.log(indexPage.data.initLeft)
      var isLock = indexPage.data.isLock;
      if(isLock){
        return;
      }else{
        indexPage.data.isLock = true;
      };
      $('.teacher-list').animate({'left':indexPage.data.initLeft +'px'},300,function(){
        if(indexPage.data.initLeft <= -2160){
          indexPage.data.initLeft = -960;
          $('.teacher-list').css('left',indexPage.data.initLeft+'px')
          console.log()
        }
        indexPage.data.isLock = false;
      })
    },
    preCheckoutItem:function(){
      indexPage.data.initLeft = indexPage.data.initLeft+240;
      // console.log(indexPage.data.initLeft)
      var isLock = indexPage.data.isLock;
      if(isLock){
        return;
      }else{
        indexPage.data.isLock = true;
      };
      $('.teacher-list').animate({'left':indexPage.data.initLeft +'px'},300,function(){
        if(indexPage.data.initLeft >= 0){
          indexPage.data.initLeft = -1200;
          $('.teacher-list').css('left',indexPage.data.initLeft+'px')
          // console.log(indexPage.data.initLeft)
        };
        indexPage.data.isLock = false;
      });
    },
    setSwiperItem:function(){
      var firstItem = $('.teacher-item').not(':first').clone();
      var lastItem = $('.teacher-item').not(':last').clone();
      let itemWidth = $('.teacher-item').width();
      $('.teacher-list').append(lastItem);
      $('.teacher-list').prepend(firstItem);
    },
    videoPlayEvent:function(){
      $('.video-icon').remove();
      $('.video-mask').remove();
      $('#video-js').trigger('play');
      $('#video-js').addClass('paly'); 
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
      var myVideo = document.getElementById('video-js');
      myVideo.controls  = true;
    },
  };
  indexPage.init();
})

// var indexPage = {
//   init:function(){
//     this.bind();
//   },
//   bind:function(){
//     var toggleItem = document.getElementsByClassName('toggle-item');
//     for(let i = 0;i < toggleItem.length;i++){
//       toggleItem[i].addEventListener('click',this.toggleItemActive);
//     };

//     var itemSection = document.getElementsByClassName('item-section');
//     for(let i = 0;i < itemSection.length;i++){
//       itemSection[i].addEventListener('click',this.itemSectionStopPro);
//     };

//     window.addEventListener('scroll',this.navScroll);

//     var navItem = document.querySelectorAll('.nav-list li');
//     for(let i = 0;i <navItem.length;i++){
//       navItem[i].addEventListener('click',this.scrollToSection);
//     }
        
//   },
//   toggleItemActive:function(){
//     var toggleItem = document.getElementsByClassName('toggle-item');
//     var toggleItemClassName = this.getAttribute('class');
//     var hasClassActive = (toggleItemClassName.indexOf('active') !== -1);
//     console.log(hasClassActive)
//     if(hasClassActive){
//         this.setAttribute('class','toggle-item')
//     }else{
//         this.setAttribute('class','toggle-item active')
//     }
//   },
//   itemSectionStopPro:function(e){
//     e.stopPropagation();
//   },
//   navScroll:function(){
//     var navEle = document.getElementById('nav');
//     var winScroll = window.pageYOffset;
//     var navEleClassName = navEle.getAttribute('class');
//     var hasClassActive = (navEleClassName.indexOf('active') !== -1);
//     if(winScroll > 426 && !hasClassActive){
//       navEle.setAttribute('class','nav-container active')
//     }else if(winScroll < 426 && hasClassActive){
//       navEle.setAttribute('class','nav-container')
//     }
//   },
//   scrollToSection:function(){
//     //方法一
//     var navItem = document.querySelectorAll('.nav-list li');
//     var currentIndex = this.getAttribute('data-index')
//     console.log(currentIndex)
//     var currentSection = document.getElementsByClassName('section'+'-'+currentIndex)[0];//返回的是数组，第0个才是元素
//     console.log(currentSection);
//     var eleTop = currentSection.offsetTop-70;
//     console.log(eleTop)
//     window.scrollTo(0,eleTop);
//     //方法二
//     // var navItem = document.querySelectorAll('.nav-list li');
//     // var navClass = this.getAttribute('data-nav');
//     // console.log(navClass)
//     // var navToEle = document.getElementsByClassName(navClass)[0];
//     // console.log(navToEle)
//     // var EleTop = navToEle.offsetTop-70;
//     // window.scrollTo(0,EleTop);
//   }
// }
// indexPage.init();








    
