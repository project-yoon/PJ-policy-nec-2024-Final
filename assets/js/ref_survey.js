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

//Space Slide 막기 - 다른 문제가 있을수 있으니 공약이슈트리보기에만 적용
$(document).keydown( function(event) {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    jQuery(document).ready(function($){
        if(!isMobile) {
            //PC
            if (event.keyCode == 13 || event.keyCode == 32) {
                event.preventDefault();            
            }
        } else {
            //MOBILE
            return;
        }
    });
});


/// 지역선택
// Click했을경우
$(document).on('click','#region a',function(e){       
    $(".regionSelect .regionBtn a").removeClass('on');
    $(".regionSelect .regionBtn a").removeAttr("title");
    $(this).addClass("on");
    $(this).attr("title","선택됨");
    $(".tree_region span, .local_text").html($(this).children(".region_name").text());
    // talkback에서 포커스 이동문제로 setTimeout 추가
    // $(".tree_con .tree_type01 button").focus();
    setTimeout(function(){
        $(".tree_con .tree_type01 button").focus();
    }, 1);
});
// 키보드 입력했을경우
$(document).on('keyup','#region a',function(event){  
    if(event.keyCode == 13 || event.keyCode == 32){            
        $(".regionSelect .regionBtn a").removeClass('on');
        $(".regionSelect .regionBtn a").removeAttr("title");
        $(this).addClass("on");
        $(this).attr("title","선택됨");
        $(".tree_region span, .local_text").html($(this).children(".region_name").text());        
        setTimeout(function(){
            $(".tree_con .tree_type01 button").focus();
        }, 1);
    }
});

// 지역선택에서 마지막항목에서 Tab눌렀을시 2depth로 이동하지 않고 footer로 이동
$(document).on('keydown','#region a',function(event){
    let regionLenght = $("#region a").length;
    let regionIndex = $("#region a").index(this) + 1;
    
    // event.keyCode == 9 Tab
    if(regionLenght == regionIndex){
        if(event.shiftKey && event.keyCode == 9){ 
            return;
        }else if(event.keyCode == 9){            
            event.preventDefault();                     
            $(".f_link_box a:first-child").focus();
        }           
    }
});

$(document).ready(function() {
    // 5가지 대분류 하위메뉴 선택값
    let treeNum = 0;   
    
    // 5가지 대분류 하위메뉴 클릭
    $(".tree_wrap ul li button").click(function(){
        $(".tree_tab_wrap").hide();
        $(this).siblings(".tree_tab_wrap").show();
        $(".tree_wrap .tree_con button").removeClass("active");
        $(this).addClass('active');
    });

    $(".tree_wrap ul li button").each(function(){
        $(this).click(function(){
            if($(this).hasClass("active")){
                $(".tree_wrap ul li button").removeAttr("title");
                $(this).attr("title","선택됨");
            }
        });
    });
});


/// 5가지 대분류(2depth)
// Click했을경우
$(document).on('click','.tree_con li button',function(e){
    let winWidthCheck = $(window).width();
    if(winWidthCheck > 1024){
        $(".tree_tab_wrap").hide();
        $(".tree_wrap .tree_con button").removeClass("active");
        $(".tree_wrap ul li button").removeAttr("title");
        $('.tree_tab_wrap a').removeClass('on');
        $('.tree_tab_wrap a').removeAttr('title');                

        $(this).siblings(".tree_tab_wrap").show();
        $(this).addClass('active');
        $(this).attr("title","선택됨");

        $(".local_2depth_text").html($(this).children('span').text());
        $(".tree_tab_wrap a").attr("tabindex","0");              
    }else if(winWidthCheck <= 1024 ){
        $(".tree_wrap .tree_con button").removeClass("active");
        $(this).addClass('active');
        
        $(".select_keyword ul.sel_kw_sub_title_list li a").attr("tabindex","0");
        $(".sel_kw_title > p").html($(this).children('span').text());
        $(".local_2depth_text").html($(this).children('span').text());

        // $(".sel_kw_sub_title_list li:first-child a").focus();
        setTimeout(function(){
            $(".sel_kw_sub_title_list li:first-child a").focus();
        }, 1);
    }
});

// 키보드 입력했을경우
$(document).on('keydown','.tree_con li button', function(event){
    let treeLenght = $(".tree_con li button").length;
    let treeIndex = $(".tree_con li button").index(this) + 1;
    let winWidthCheck = $(window).width();
    
    //5가지 대분류 마지막 항목에서 Tab누를시 footer로 이동
    if(treeLenght == treeIndex){
        if(event.shiftKey && event.keyCode == 9){ 
            return;
        }else if(event.keyCode == 9){
            event.preventDefault();            
            setTimeout(function(){
                $(".f_link_box a:first-child").focus();
            }, 1);              
        }           
    }

    //5가지 대분류 첫번째 항목에서 Shift+Tab누를시 선택했던 지역선택으로 이동
    if(treeIndex == 1){
        if(event.shiftKey && event.keyCode == 9){
            event.preventDefault();
            // $("#region a.on").focus();
            setTimeout(function(){
                $("#region a.on").focus();
            }, 1); 
        }
    }

    //5가지 대분류에서 하위메뉴로 이동 PC/Mobile
    if(event.keyCode == 13 || event.keyCode == 32){            
        if(winWidthCheck > 1024){
            $(".tree_tab_wrap").hide();
            $(".tree_wrap .tree_con button").removeClass("active");
            $(".tree_wrap ul li button").removeAttr("title");
            $('.tree_tab_wrap a').removeClass('on');
            $('.tree_tab_wrap a').removeAttr('title');                

            $(this).siblings(".tree_tab_wrap").show();
            $(this).addClass('active');
            $(this).attr("title","선택됨");

            $(".local_2depth_text").html($(this).children('span').text());
            $(".tree_tab_wrap a").attr("tabindex","0");

            setTimeout(function(){
                $(".tree_tab_wrap a:first-child").focus();
            }, 1); 
        }else if(winWidthCheck <= 1024 ){
            $(".tree_wrap .tree_con button").removeClass("active");
            $(this).addClass('active');

            $(".select_keyword ul.sel_kw_sub_title_list li a").attr("tabindex","0");            
        
            setTimeout(function(){
                $(".sel_kw_sub_title_list li:first-child a").focus();
            }, 1); 

            $(".sel_kw_title > p").html($(this).children('span').text());
            $(".local_2depth_text").html($(this).children('span').text());
        }
        
    }
})

///5가지 대분류 하위 메뉴선택 - PC
//클릭했을경우
$(document).on('click','.tree_tab_wrap a',function(e){
    $('.tree_tab_wrap a').removeClass('on');
    $('.tree_tab_wrap a').removeAttr('title');
    $(this).addClass('on');
    $(this).attr("title","선택됨");

    $(".sel_kw_title > p").html($(this).parent().siblings('button').text());
    $(".sel_kw_title > span").html("["+$(this).children().not('.blind_text').text()+"]");
    
    $(".ks_title").attr("tabindex","0");
    $(".ks_list li").attr("tabindex","0");

    $(".ks_title").each( function(){
        $(this).next().children().find(".blind_text").html($(this).text());
    })

    treeNum = $(".tree_tab_wrap a").index(this);    
        
    // setTimeout(function(){
    //     $(".sel_kw_list .keySubBox:first-child .ks_title").focus();
    // }, 1);
});
// 키보드 입력했을경우
$(document).on('keydown','.tree_tab_wrap a', function(event){
    const treeTabMenu = $(".tree_tab_wrap a");
    let treeTabLenght = $(this).siblings.length;
    let treeTabIndex = $(this).index();

    if(event.keyCode == 13 || event.keyCode == 32){
        $('.tree_tab_wrap a').removeClass('on');
        $('.tree_tab_wrap a').removeAttr('title');
        $(this).addClass('on');
        $(this).attr("title","선택됨");

        $(".sel_kw_title > p").html($(this).parent().siblings('button').text());
        $(".sel_kw_title > span").html("["+$(this).children().not('.blind_text').text()+"]");
        
        $(".ks_title").attr("tabindex","0");
        $(".ks_list li").attr("tabindex","0");

        $(".ks_title").each( function(){
            $(this).next().children().find(".blind_text").html($(this).text());
        })
        
        treeNum = $(".tree_tab_wrap a").index(this);
        setTimeout(function(){
            $(".sel_kw_list .keySubBox:first-child .ks_title").focus();
        }, 1);
    }

    console.log("treeTabLenght =" + treeTabLenght);
    console.log("treeTabIndex =" + treeTabIndex);
    if(treeTabLenght == treeTabIndex){        
        if(event.shiftKey && event.keyCode == 9){ 
            return;
        }else if(event.keyCode == 9){
            treeTabMenu.attr("tabindex","-1");            
        }
    }

    if(treeTabIndex == 0){
        if(event.shiftKey && event.keyCode == 9){
            event.preventDefault();
            treeTabMenu.attr("tabindex","-1");
            
            setTimeout(function(){
                $(".tree_con li button.active").focus();
            }, 1);
        }
    }
});

//5가지 대분류 하위 메뉴 - Mobile
//클릭했을경우
$(document).on('click','.sel_kw_sub_title_list li a',function(e){
    const treeSubMenu = $(".sel_kw_sub_title_list li a");
    
    $(".ks_title").attr("tabindex","0");
    $(".ks_list li").attr("tabindex","0");
    kwSubNum = treeSubMenu.index(this);
    //ks_title 텍스트를 Ks_list에 넣기
    $(".ks_title").each( function(){
        $(this).next().children().find(".blind_text").html($(this).text());
    })
    // setTimeout(function(){
    //     $(".sel_kw_list .keySubBox:first-child .ks_title").focus();
    // }, 1);
});
// 키보드 입력했을경우
$(document).on('keydown','.sel_kw_sub_title_list li a', function(event){
    const treeSubMenu = $(".sel_kw_sub_title_list li a");
    let treeSubLenght = treeSubMenu.length;
    let treeSubIndex = treeSubMenu.index(this) + 1;

    //5가지 대분류 하위 메뉴선택 
    if(event.keyCode == 13 || event.keyCode == 32){             
        $(".ks_title").attr("tabindex","0");
        $(".ks_list li").attr("tabindex","0");
        kwSubNum = treeSubMenu.index(this);
        $(".ks_title").each( function(){
            $(this).next().children().find(".blind_text").html($(this).text());
        })        
        setTimeout(function(){
            $(".sel_kw_list .keySubBox:first-child .ks_title").focus();
        }, 1);
    }
    //하위메뉴 벗어날시 tab메뉴 못가게 막음
    if(treeSubLenght == treeSubIndex){
        if(event.shiftKey && event.keyCode == 9){ 
            return;
        }else if(event.keyCode == 9){                
            treeSubMenu.attr("tabindex","-1");
        }
    }

    //Shift+Tab누를시 선택했던 5가지 대분류로 이동
    if(treeSubIndex == 1){
        if(event.shiftKey && event.keyCode == 9){
            event.preventDefault();
            treeSubMenu.attr("tabindex","-1");
            
            setTimeout(function(){
                $(".tree_con li button.active").focus();
            }, 1);
        }
    }
});    

// 3depth list 마지막 항목에서 상위로 나가기 
$(document).on('keydown','.ks_list li', function(event){
    let kslistLenght = $(".ks_list li").length;
    let kslistIndex = $(".ks_list li").index(this) + 1;
    let winWidthCheck = $(window).width();
    
    if(kslistLenght == kslistIndex){
        if(event.shiftKey && event.keyCode == 9){ 
            return;
        }else if(event.keyCode == 9){
            if(winWidthCheck > 1024){
                event.preventDefault();
                setTimeout(function(){
                    $(".tree_tab_wrap a").eq(treeNum).focus();
                }, 1);
                $(".sel_kw_title").attr("tabindex","-1");
                $(".ks_title").attr("tabindex","-1");
                $(".ks_list li").attr("tabindex","-1");
            }else if(winWidthCheck <= 1024){    
                event.preventDefault();
                setTimeout(function(){
                    $(".sel_kw_sub_title_list li a").eq(kwSubNum).focus();
                }, 1);                
                $(".ks_title").attr("tabindex","-1");
                $(".ks_list li").attr("tabindex","-1");                               
            }
        }           
    }
})

// 3depth list 첫번째 제목에서 상위로 나가기 
$(document).on('keydown','.keySubBox:first-child .ks_title', function(event){
    let winWidthCheck = $(window).width();
    if(event.shiftKey && event.keyCode == 9){ 
        if(winWidthCheck > 1024){
            event.preventDefault();
            setTimeout(function(){
                $(".tree_tab_wrap a").eq(treeNum).focus();
            }, 1);
            $(".sel_kw_title").attr("tabindex","-1");
            $(".ks_title").attr("tabindex","-1");
            $(".ks_list li").attr("tabindex","-1");
        }else if(winWidthCheck <= 1024){  
            event.preventDefault();
            setTimeout(function(){
                $(".sel_kw_sub_title_list li a").eq(kwSubNum).focus();
            }, 1);           
            $(".sel_kw_title").attr("tabindex","-1");
            $(".ks_title").attr("tabindex","-1");
            $(".ks_list li").attr("tabindex","-1");
        }  
    }        
})