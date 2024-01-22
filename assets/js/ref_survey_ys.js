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

/* 이용수 script 추가 */
/// svg내 이벤트 ///
// svg내 index 추가
function addTabindexToPolygons() {
    var svgElement = document.getElementById('map-country-svg');
    var polygons = svgElement.querySelectorAll('polygon');
    polygons.forEach((poly) => {
        poly.setAttribute('tabindex', '0');
    });
}
// 로드후 pologon에 tabindex 추가
window.addEventListener('load', addTabindexToPolygons);

// svg내 polygon 클릭시
$(document).on('click', '#map-country-svg polygon', function() {
  var index = $('#map-country-svg polygon').index(this);
  var targetDiv = $('.map-keyword').eq(index);

  // polykeyword를 열었던 polygons를 다시 클릭한 경우 닫기
  if (targetDiv.is(':visible')) {
    targetDiv.hide();
    return;
  }

  // 숨겨져 있는 다른 content 숨기기
  $('.map-keyword').hide();

  // 현재 클릭한 polygon에 대응하는 content 보이기
  targetDiv.show();

  // tabindex 속성 추가
  targetDiv.attr('tabindex', '0');

  // 포커스 주기
  targetDiv.focus();
});

// svg내 polygon Enter입력시
$(document).on('keydown', '#map-country-svg polygon', function(e) {
  if (e.keyCode === 13) {
    e.preventDefault(); // 기본 동작 막기

    var index = $('#map-country-svg polygon').index(this);
    var targetDiv = $('.map-keyword').eq(index);

    // polykeyword를 열었던 polygons를 다시 클릭한 경우 닫기
    if (targetDiv.is(':visible')) {
      targetDiv.hide();
      return;
    }

    // 숨겨져 있는 다른 content 숨기기
    $('.map-keyword').hide();

    // 현재 클릭한 polygon에 대응하는 content 보이기
    targetDiv.show();

    // 내부의 h3 엘리먼트로 포커스 이동
    var h3Element = targetDiv.find('h3');

    // h3 엘리먼트에 tabindex 속성 추가
    h3Element.attr('tabindex', '0');

    // 포커스 주기
    h3Element.focus();
  }
});

/// .map-keyword 내 h3 이벤트
// h3에서 tab 입력시
$(document).on('keydown', '.map-keyword h3', function(e) {
  if (e.keyCode === 9 && !e.shiftKey) {

  } else if(e.keyCode==9 && e.shiftKey){

  }
});