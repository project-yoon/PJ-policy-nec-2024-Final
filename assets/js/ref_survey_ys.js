let winWidthCheck = $(window).width();

//본문바로가기 main 분기
function mainCheck(){
    //메인페이지 visual에 id="main_visual" ID추가할것
    if($("#main_visual").length > 0){
        let visualTop = $("#main_visual").offset().top
        console.log(visualTop);
        $('#accessibility button').blur();
        $(window).scrollTop(visualTop);
        // $('html, body').animate({scrollTop: visualTop}, 500);                        
        console.log("메인페이지 본문 바로가기");        
    } else {        
        let conTop = $("#content").offset().top
        console.log(conTop);
        $('#accessibility button').blur(); 
        $(window).scrollTop(conTop);
        // $('html, body').animate({scrollTop: conTop}, 500);          
        console.log("서브페이지 본문 바로가기");
    }
}

$(document).on('keydown','#accessibility button',function(event){  
    if(event.keyCode == 13 || event.keyCode == 32){            
      mainCheck();
    }
});

/* CP-20240110 : 이용수 script 추가 */
/// svg내 이벤트 ///
// svg내 index 추가
function addTabindexToPolygons() {
    let svgElement = document.getElementById('map-country-svg');
    let polygons = svgElement.querySelectorAll('polygon');
    polygons.forEach((poly) => {
        poly.setAttribute('tabindex', '0');
    });
}
// 로드후 pologon에 tabindex 추가
window.addEventListener('load', addTabindexToPolygons);

// svg내 polygon 클릭시
$(document).on('click', '#map-country-svg polygon', function() {
  // 클릭한 polygon의 data-area 값 가져오기
  let clickedArea = $(this).data('area');
  let keyName = $('.map-keyword').find('h3');
  let keyTitle = $('.map-keyword').find('.keyword-box > div');
  let keyList = $('.map-keyword').find('li');

  // 모든 .map-keyword를 숨김
  $('.map-keyword').removeClass('on');

  // 클릭한 polygon의 data-area와 일치하는 .map-keyword를 보여줌
  $('.map-keyword[data-keyword="' + clickedArea + '"]').addClass('on');

  
  // h3와 각 toptic 타이틀 과 리스트에 tabindex 속성 추가
  keyName.attr('tabindex', '0');
  keyTitle.attr('tabindex', '0');
  keyList.attr('tabindex', '0');

  // 내부 h3에 포커스주기
  keyName.focus();
});

// svg내 polygon Enter입력시
$(document).on('keydown', '#map-country-svg polygon', function(event) {
  let polyLength = $("#map-country-svg polygon").length;
  let polyIndex = $("#map-country-svg polygon").index(this) + 1;
  
  //svg내 polygon 마지막 일시
  if(polyLength == polyIndex){
      if(event.shiftKey && event.keyCode == 9){ 
          return;
      }else if(event.keyCode == 9){
          event.preventDefault();            
          setTimeout(function(){
              $(".f_link_box a:first-child").focus();
          }, 1);              
      }           
  }


  if (event.keyCode === 13) {
    event.preventDefault(); // 기본 동작 막기

    let clickedArea = $(this).data('area');
    let keyName = $('.map-keyword').find('h3');
    let keyTitle = $('.map-keyword').find('.keyword-box > div');
    let keyList = $('.map-keyword').find('li');

    // 모든 .map-keyword를 숨김
    $('.map-keyword').removeClass('on');

    // 클릭한 polygon의 data-area와 일치하는 .map-keyword를 보여줌
    $('.map-keyword[data-keyword="' + clickedArea + '"]').addClass('on');

    
    // h3와 각 toptic 타이틀 과 리스트에 tabindex 속성 추가
    keyName.attr('tabindex', '0');
    keyTitle.attr('tabindex', '0');
    keyList.attr('tabindex', '0');

    // 내부 h3에 포커스주기
    keyName.focus();
  }
});

/// 시군구 버튼 
// 클릭시 
$(document).on('click', '.btn-map', function(event) {
  event.preventDefault();
  // 클릭한 버튼의 data-link 값 가져오기
  let clickedLink = $(this).data('link');
  let backBtn = $('.map-area').find('.btn_map_back');
  // 모든 .map-area에 on 클래스를 제거
  $('.map-area').removeClass('on');
  $('.map-keyword').removeClass('on');
  // 클릭한 버튼의 data-link 값과 일치하는 .map-area에 on 클래스를 추가
  $('.map-area[data-inmap="' + clickedLink + '"]').addClass('on');

  backBtn.focus();
});
// Enter 누를시
$(document).on('keydown', '.btn-map', function(event) {
  
  let clickedLink = $(this).data('link');
  let backBtn = $('.map-area').find('.btn_map_back');

  if(event.keyCode === 13){
    event.preventDefault();
    // 클릭한 버튼의 data-link 값 가져오기
    // 모든 .map-area에 on 클래스를 제거
    $('.map-area').removeClass('on');
    $('.map-keyword').removeClass('on');
    // 클릭한 버튼의 data-link 값과 일치하는 .map-area에 on 클래스를 추가
    $('.map-area[data-inmap="' + clickedLink + '"]').addClass('on');

    backBtn.focus();
          
  } else if(event.keyCode === 9){    
    event.preventDefault();
    $('polygon[data-area="' + clickedLink + '"]').focus();
  }
});

/// 시군구 뒤로가기 버튼
$(document).on('click', '.btn_map_back', function(event) {
  event.preventDefault();
  // 클릭한 버튼의 data-link 값 가져오기
  let backedLink = $(this).data('back');
  let backedFocus = $(this).closest('.map-area');
  let backedFocusLink = backedFocus.data('inmap');
  // 모든 .map-area에 on 클래스를 제거
  $('.map-area').removeClass('on');
  $('.map-keyword').removeClass('on');
  // 클릭한 버튼의 data-link 값과 일치하는 .map-area에 on 클래스를 추가
  $('.map-area[data-inmap="' + backedLink + '"]').addClass('on');
  $('polygon[data-area="' + backedFocusLink + '"]').focus();
});

$(document).on('keydown', '.btn_map_back', function(event) {
  if(event.keyCode === 13){
    // // Enter 누를시
    let backedLink = $(this).data('back');
    let backedFocus = $(this).closest('.map-area');
    let backedFocusLink = backedFocus.data('inmap');
    // 모든 .map-area에 on 클래스를 제거
    $('.map-area').removeClass('on');
    $('.map-keyword').removeClass('on');
    // 클릭한 버튼의 data-link 값과 일치하는 .map-area에 on 클래스를 추가
    $('.map-area[data-inmap="' + backedLink + '"]').addClass('on');
    $('polygon[data-area="' + backedFocusLink + '"]').focus();
  }
});

//시군구 리스트 클릭 이벤트
$(document).on('click', '.sigungu a', function(event) {
  event.preventDefault();

  // 클릭한 a 요소의 부모 li 요소에 on 클래스 추가
  $(this).closest('li').addClass('on').siblings().removeClass('on');

  // 클릭한 polygon의 data-sigungu 값 가져오기
  let clickedArea = $(this).data('sigungu');
  let keyName = $('.map-keyword').find('h3');
  let keyTitle = $('.map-keyword').find('.keyword-box > div');
  let keyList = $('.map-keyword').find('li');

  // 모든 .map-keyword를 숨김
  $('.map-keyword').removeClass('on');

  // 클릭한 polygon의 data-area와 일치하는 .map-keyword를 보여줌
  $('.map-keyword[data-keyword="' + clickedArea + '"]').addClass('on');  
  
  // h3와 각 toptic 타이틀 과 리스트에 tabindex 속성 추가
  keyName.attr('tabindex', '0');
  keyTitle.attr('tabindex', '0');
  keyList.attr('tabindex', '0');

  // 내부 h3에 포커스주기
  keyName.focus();
});

//시군구 리스트 enter 이벤트
$(document).on('keydown', '.sigungu li a', function(event) {
  let clickedArea = $(this).data('sigungu');
  let keyName = $('.map-keyword').find('h3');
  let keyTitle = $('.map-keyword').find('.keyword-box > div');
  let keyList = $('.map-keyword').find('li');
  let lastLi = $('ul.sigungu li:last-child');

  if(event.keyCode === 13){
    event.preventDefault();    
    
    // 클릭한 a 요소의 부모 li 요소에 on 클래스 추가
    $(this).closest('li').addClass('on').siblings().removeClass('on');

    // 모든 .map-keyword를 숨김
    $('.map-keyword').removeClass('on');

    // 클릭한 polygon의 data-area와 일치하는 .map-keyword를 보여줌
    $('.map-keyword[data-keyword="' + clickedArea + '"]').addClass('on');
    
    // h3와 각 toptic 타이틀 과 리스트에 tabindex 속성 추가
    keyName.attr('tabindex', '0');
    keyTitle.attr('tabindex', '0');
    keyList.attr('tabindex', '0');

    // 내부 h3에 포커스주기
    keyName.focus();
  } 
});
//시군구 마지막 에서 탭키누를 경우
$(document).on('keydown', '.sigungu li:last-child a', function(event) {
  let lastLi = $('ul.sigungu li:last-child a');

  if (lastLi.length > 0) {
    if (event.keyCode === 9 && event.shiftKey){
      return;
    } else if (event.keyCode === 9) {
      event.preventDefault();  // 기본 동작인 포커스 이동을 막음
      $(".f_link_box a:first-child").focus();
    }
  } 
});


// 시 군 구 키워드 마지막 리스트 탭 누를시 
$(document).on('keydown', '.keyword-box:last-child li:last-child', function(event) {
  if (event.keyCode === 9 && event.shiftKey){
    return;
  } else if (event.keyCode === 9) {
    $('.map-keyword').each(function() {
      let isOnClass = $(this).hasClass('on');
      let hasBtnMap = $(this).find('.btn-map').length > 0;
      if (isOnClass && !hasBtnMap) {              
        event.preventDefault();  
        let dataKeyword = $(this).data('keyword');
        
        // 포커스 설정
        $('ul.sigungu li a[data-sigungu="'+ dataKeyword + '"]').focus();
        console.log($('ul.sigungu li a[data-sigungu="'+ dataKeyword + '"]'));
      }
    });  
  }
});
/// 모바일 
if(winWidthCheck < 1024){


  
}