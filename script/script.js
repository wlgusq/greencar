$(document).ready(function(){

  // 서브 메뉴 나오기 숨기기
  let mnu = $('header .gnb > ul > li > a')

  mnu.click(function(){
    $(this).next().toggle().parent().siblings().find('.sub').hide();
  });

  $('main').click(function(){
    $('.sub').hide();
  });

  let m_mnu_btn = $('.fa-bars')

  m_mnu_btn.click(function(){
    $('.gnb').slideToggle();
  });



  // popup
  let modal = `
  <div class="popup">
      <div class="popup_inner">

          <a href="javascript:;" title="할인혜택 보러 가기">
          <img src="./img/popup.png" alt="이벤트 팝업">
          <span>할인혜택 보러가기</span></a>

        <input type="checkbox" value="오늘 하루 보지 않기" id="popcheck">
        <label for="popcheck">오늘 하루 보지 않기</label>
        <input type="button" value="닫기" id ="c_btn">
      </div>
    </div>
  `

  $('body').append(modal);

if($.cookie('modal')=='none'){
  $('.popup').hide();
}

  let $ex = $('.popup #popcheck');

function c_popup(){
  if($ex.is(':checked')){
    $.cookie('modal', 'none', {expires:1, path:'/'});
  }
  $('.popup').hide();
}

  $('.popup #c_btn').click(function(){
    c_popup();
  });



  // 메인 슬라이드
  const sl_btn = $('.l_btn');
  const sr_btn = $('.r_btn');

  let sli_img = $('.visual > div > img');
  let i = 0;

  function moving(){
    //console.log('시간');
    sli_img.eq(i).stop().fadeOut();

    if(i==2){
      i=0;
    }else{
      i++;
    }
    sli_img.eq(i).stop().fadeIn();
  }

  function moving2(){
    sli_img.eq(i).stop().fadeOut();

    if(i==0){
      i=2;
    }else{
      i--;
    }
    sli_img.eq(i).stop().fadeIn();
  };

  let Timer2 = setInterval(moving,5000);

  sl_btn.click(function(){
    moving2();
  });
  sr_btn.click(function(){
    moving();
  });

  $('sli_btn').hover(function(){
    clearInterval(Timer);
  },function(){
    Timer = setInterval(moving, 5000);
  });






  // 랜덤 배너
  let ran = Math.floor(Math.random()*3+1);

  document.getElementById('r_img').src='./img/re0'+ran+'.png';
  document.getElementById('ra_img').src='./img/re0'+ran+'-1.png';





  // 탭메뉴
  let btn = $('.tab_btn li a');

  //$(window).resize(function(){
    
   // $(this).onLoad();//새로고침
  btn.click(function(){
   //if(window.innerWidth > 767) { //디바이스 크기가 767이상일 때
        // alert('어어어');
        $(this).next().slideDown().parent().siblings().find('div').slideUp();
        $(this).addClass('btn_cli').parent().siblings().find('a').removeClass('btn_cli');
   // }else{
      // $(this).next().show().parent().siblings().find('div').hide();
      // $(this).addClass('btn_cli').parent().siblings().find('a').removeClass('btn_cli');
   // }

      return false;
    });  
  //}).resize();





// 슬라이드 배너
const slide = $('.banner_inner');
const l_btn = $('.banner > div > i.fa-angle-left');
const r_btn = $('.banner > div > i.fa-angle-right');

$('.banner_inner > li:last-child').insertBefore('.banner_inner > li:first-child');





slide.css('margin-left','-100%');

function moveLeft(){
  slide.animate({'margin-left':'-200%'},500, function(){
    $('.banner_inner > li:first-child').insertAfter('.banner_inner > li:last-child').stop();
    slide.css('margin-left','-100%');
  });
  };
  let Timer = setInterval(moveLeft, 5000);  

function moveRight(){
  slide.animate({'margin-left':'0px'},500, function(){
    $('.banner_inner > li:last-child').insertBefore('.banner_inner > li:first-child').stop();
    slide.css('margin-left','-100%');
  });
  }

  
l_btn.click(function(){
  clearInterval(Timer)
  moveRight();
});

r_btn.click(function(){
  clearInterval(Timer)
  moveLeft();
});

  $('.banner i.fas').mouseleave(function(){
    // alert('아아아');
  Timer = setInterval(moveLeft, 5000);
});







// 이벤트
const e_btn = $('.event_btn button');
const ef_btn = $('.event_btn button:first-child');
const es_btn = $('.event_btn button:nth-child(2)');
const et_btn = $('.event_btn button:last-child');

e_btn.click(function(){
  $(this).addClass('cli').siblings().removeClass('cli');
});

ef_btn.click(function(){
  $('.eventli').hide();
  $('.eventli').fadeIn();
});
es_btn.click(function(){
  $('.eventli').hide();
  $('.new').fadeIn();
});
et_btn.click(function(){
  $('.eventli').hide();
  $('.end').fadeIn();
});




// top_btn
const top_btn = $('.top_btn');

$(window).scroll(function(){
  let s_pos = $(this).scrollTop();
  console.log(s_pos);

  if(s_pos>=600){
    $('.top_btn').fadeIn();
  }else{
    $('.top_btn').fadeOut();
  }

});



top_btn.click(function(){
  $('html, body').animate({'scrollTop':'0px'},500);

  return false;
});







});
