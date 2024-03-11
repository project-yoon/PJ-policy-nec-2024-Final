<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="UTF-8" %>
<%@ page import="java.net.URLEncoder" %>
<%@ include file="/WEB-INF/jsp/common/include/top_new.jspf"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<title>중앙선거관리위원회 정책·공약마당 공약이슈트리</title>

<script src="<c:url value='/js-new/chart.js/Chart.bundle.min.js' />"></script>
<script src="<c:url value='/js-new/chartScript.js?version=20220502' />"></script>
<script src="<c:url value='/js-new/swiper.min.js' />"></script>
<!-- [D] 240229-교정 기존 js 주석 및 신규 js 추가 -->
<!-- <script src="<c:url value='/js-new/comparative.js?version=20220516' />"></script>  -->
<script src="/js/ref_survey_cp.js"></script>

<!-- [D] 240229-교정 : 기존 정책공약마당 css 주석처리 및 신규 css 추가 -->
<!-- <link rel="stylesheet" type="text/css"	href="<c:url value='/css-new/comparative.css?version=20220517' />" /> -->
<link rel="stylesheet" type="text/css" href="/css/ref_survey_cp.css?version=20240308">
<link rel="stylesheet" type="text/css" href="<c:url value='/css-new/swiper.min.css' />" />

<script type="text/javascript">

var selectRegion = "서울" ;
var selectPlcy = "산업/경제";

$(document).ready(function() {
	_FN_TITLE("공약이슈트리 | 정책·공약마당");
	parent._FN_INDEX_RESIZE(0);
	_FN_RESIZE_CALL();

	$('#keyinfo2').val('${keyinfo.menuId}');
	searchChart(selectRegion);
	$("#subtitle").text("산업/경제");
	selectPlcy = "산업/경제";

});

//지역선택 웹접근성(enter 일때 click 과 같이)
$(document).on('keyup','#region a',function(event){

	if(event.keyCode == 13){ //enter

		selectRegion = $(this).find("span").text();

		searchChart(selectRegion);
   }
});
//지역선택
$(document).on('click','#region a span',function(e){

	selectRegion = $(this).text();

	searchChart(selectRegion);

	$("#subtitle").text("산업/경제");
	 selectPlcy = "산업/경제";
	 $("#issueTableId").hide();

});

//legend 선택
$(document).on('click', '#legend li', function(e){

	 //console.log("legend" + $(this).find('#legendtext .legend-txt .legend-cate').text());
      selectPlcy = "";
	  selectPlcy = $(this).find('#legendtext .legend-txt .legend-cate').text();

	  $("#sex").val("").prop("selected",true);
	  $("#age").val("").prop("selected",true);
	  $("#subtitle").text(selectPlcy);

	 // $("#issue_search_box_id").show();
	 $("#issueTableId").hide();

});

function searchChart(selectRegion){

	var vhtml = "";
	     vhtml += "<canvas id=\"surveyChart1\" width=\"230\" height=\"230\"></canvas>";
	     vhtml += "<div id=\"legend\"></div>";

	$("#cavasdiv").html(vhtml);

	$("#sex option:eq(0)").attr("selected","selected");
	$("#age option:eq(0)").attr("selected","selected");
	//$("#issue_search_box_id").css("display","none");
	//$("#issueTableId").css("display","none");

	var objdata  = new Object();
	objdata.keyinfo2 = $('#keyinfo2').val();
	objdata.region = selectRegion;

	var data2 ="";

	$.ajax({
		async : false,
		type: "POST",
		url: "<c:url value='/plc/survey/selectRegionPartIssue.do'/>",
		data : objdata,
		dataType : "json",
		success:function(data){

					var chartData_labels = new Array; //모든곳에 라벨은 이것만 쓸것! 중복을 제거할 수 있는 기능!
					var chartData_data = new Array;
					var backgroundColorAge = ["#C09000","#CDA636","#D9BC66","#DFC77F","#E6D399","#ECDDB2","#F2E9CC","#F9F4E5"];
					var hoverBackgroundColorAge = ["#9a7300","#ad8c2e","#c0a659","#c2ad6d","#cfbe89","#d2c49c","#d8d0b6","#e7e2d5"];
					var backgroundColorRegion =["#007C7B","#369695","#66B0B0","#7FBDBD","#99CBCA","#B2D7D7","#CCE5E5","#E5F2F2"];
					var hoverBackgroundColorRegion = ["#006a69","#2e8382","#599b9b","#73acac","#8bbab9","#a2c5c5","#bcd3d3","#d7e3e3"];

					if(data.issueList.length> 0 ){

						for(var i=0; i < data.issueList.length; i++){

							chartData_labels.push(String(data.issueList[i].policyIssue));
							chartData_data.push(Number(data.issueList[i].issueCnt));
						}

				    	data2 = {
								chartData_labels :  chartData_labels,
								chartData_data :  chartData_data
						}
						chart(data2);
					}


        },
        error: function(xhr,status,error){
        	alert("서버에 통신 중에 에러가 발생하였습니다.");
    		return false;
        }
	});
}
//이슈트리페이지 이동시
function surveyTree(e){

	var url ="<c:url value='/plc/survey/initUSASurveyPolicyIssue.do' />";
	url = url +"?keyinfo2=" + encodeURIComponent($('#keyinfo2').val());
	url = url +"&region=" + encodeURIComponent("");
	location.href= url;
}

$(document).on('click','#btnResultForm',function(e){
	//e.preventDefault();
	//console.log(selectRegion+$('#sex').val()+$('#age').val());
	/* var url ="<c:url value='/plc/survey/initUSASurveyPolicyIssue.do' />";
	url = url +"?keyinfo2=" + encodeURIComponent($('#keyinfo2').val());
	url = url +"&region=" + encodeURIComponent(selectRegion);
	url = url +"&selectPolicySex=" + encodeURIComponent($('#sex').val());;
	url = url +"&selectPolicyAge=" + encodeURIComponent($('#age').val());;
	location.href=url;*/

	if (selectPlcy == "") {
		alert("그래프에서 분야를 선택하세요");
		return ;
	}

	/* if ($("#sex").val() == "1") {
		alert("성별을 선택하세요");
		return ;
	}

	if ($("#age").val() == "1") {
		alert("나이를 선택하세요");
		return ;
	} */

	var objdata  = new Object();
	objdata.keyinfo2 = $('#keyinfo2').val();
	objdata.region = selectRegion;
	objdata.selectPolicy= selectPlcy;
	objdata.selectPolicySex = $("select[name=sex").val();
	objdata.selectPolicyAge = $("select[name=age").val();

	$.ajax({
		async : false,
		type: "POST",
		url: "<c:url value='/plc/survey/selectIssueKeyword.do'/>",
		data : objdata,
		dataType : "json",
		success:function(data){

					var mhtml = "";
					var phtml = "";

					if(data.issueList.length> 0 ){

						//$("#issueTableId").show();

						mhtml += "<dl>";
						mhtml +=      "<dt>순위</dt>";
						mhtml +=      "<dt>이슈 키워드 <span>(1 ~ 10위)</span></dt>";
						mhtml += "</dl>";

						phtml += "<dl>";
						phtml +=      "<dt>순위</dt>";
						phtml +=      "<dt>이슈 키워드 <span>(11 ~ 20위)</span></dt>";
						phtml += "</dl>";

						for(i=0; i <data.issueList.length ; i++  ){

							if( i<10 ){

								mhtml += "<dl>";
								mhtml +=     "<dd>";
								mhtml +=     "<div>"+data.issueList[i].issueRm+"</div>";
								mhtml +=     "</dd>";
								//mhtml +=     "<dd>" + data.issueList[i].issueIsue+"<span>(" + data.issueList[i].issueWtft +"%)</span></dd>" ;
								mhtml +=     "<dd>" +data.issueList[i].issueIsue+"</dd>";
								mhtml += "</dl>";

							}else if(i >=10){

								phtml += "<dl>";
								phtml +=     "<dd>";
								phtml +=     "<div>"+data.issueList[i].issueRm+"</div>";
								phtml +=     "</dd>";
								//phtml +=     "<dd>" + data.issueList[i].issueIsue+"<span>(" + data.issueList[i].issueWtft +"%)</span></dd>" ;
								phtml +=     "<dd>" +data.issueList[i].issueIsue+"</dd>";
								phtml += "</dl>";

							}
						}



						$("#issueTable1").html(mhtml);
						$("#issueTable2").html(phtml);
						$("#issueTableId").css("display","");
					}else{
						$("#issueTable1").html("");
						$("#issueTable2").html("");
						$("#issueTableId").css("display","none");

					}

        },
        error: function(xhr,status,error){
        	alert("서버에 통신 중에 에러가 발생하였습니다.");
    		return false;
        }
	});

});
</script>
<script type="text/javascript" src="<c:url value='/js-new/iframe/iframeResizer.contentWindow.min.js' />"></script>

</head>
<body oncontextmenu="return false" ondragstart="return false">
<style>
	body,html {overflow-x: hidden; -ms-overflow-style:none; scrollbar-width: none;}
	body::-webkit-scrollbar { display:none; }
</style>
	<div id="wrap">
	<%@ include file="/WEB-INF/jsp/common/include/menu_new.jspf"%>

	<div class="subVisual">
		<img src="<c:url value='/img/comparative/subVisual.jpg' />" alt="공약이슈 비주얼 이미지" />
		<h1>공약이슈트리</h1>
		</div>
		<%@ include file="/WEB-INF/jsp/common/include/menu_new_sub.jspf"%>


		<div id="content">
			<!-- [D] 240229 : 'comparative' 신규 키클래스 -->
			<div class="comparative" data-treeTab="3">
				<h2 class="subTitle" title="공약이슈트리 기초조사 타이틀">공약이슈트리 기초자료 보기</h2>
				<input type="text" id="keyinfo2" name="keyinfo2" hidden="">
				<div class="comparativeTab">
					<!-- [D] 240229 : 개발 적용 시, 탭 a href 경로 재설정 바랍니다 -->
					<a href="<c:url value='/plc/survey/initUSASurveyPolicyTree.do' />?keyinfo2=SURVEY1"  onClick="surveyTree(this)" title="공약이슈트리 보기 - 탭메뉴">
						<div>
							<p>시·도별 공약이슈트리<span> 보기</span></p>
						</div>
					</a>
					<a href="<c:url value='/plc/survey/initUSASurveyPolicySigungu.do' />?keyinfo2=SURVEY1" " title="시·군·구별 공약이슈트리 보기 - 탭메뉴">
						<div>
							<p><span>시·군·구별 공약이슈트리 </span><span>보기</span></p>
						</div>
					</a>
					<a href="" title="공약이슈 기초자료 보기 - 탭메뉴 선택됨" >
						<div class="on">
							<p><span>공약이슈트리 </span>기초자료<span>보기</span></p>
						</div>
					</a>
				</div>
				<div class="toolTip3">
					<p>언론기사 빅데이터 분석을 통해 공약이슈를 도출하였습니다.</p>
					<p>공약이슈트리 기초자료 PDF 파일을 보거나 저장할 수 있습니다.</p>
				</div>

				<!-- [D] 240229 : PDF 영역 -->
				<div class="map-pdf">
					<div class="pdf-download">
						<span class="download-title">공약이슈트리 기초자료 보기 다운로드</span>
						<!-- [D] 240229 : 개발 적용 시 pdf 경로 재설정 바랍니다
									1) a href
									2) iframe src
						-->
						<a href="/js/pdfViewer/web/viewer.jsp?file=231215_SurveyPolicyIssue.pdf#page=1"
							class="pdf-popup" target="_blank"><span>PDF파일보기</span></a>
						<a href="/js/pdfViewer/web/231215_SurveyPolicyIssue.pdf" class="btn-download"
							title="공약이슈트리 기초자료 PDF파일 다운로드" download="231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf"><span>다운로드</span></a>
					</div>
					<div class="pdf-viewer" tabindex="0">
						<!-- [D] 240229-교정 - 경로 변경 및 소스 수정-->
						<iframe
							src="/js/pdfViewer/web/viewer.jsp?file=231215_SurveyPolicyIssue.pdf#page=1"
							class="pdf-viewer-frame" name="iframe-pdf" title="공약이슈트리 기초자료 pdf 화면"></iframe>
					</div>
				</div>
			</div>
		</div>




<%@ include file="/WEB-INF/jsp/common/include/bottom_new.jspf"%>