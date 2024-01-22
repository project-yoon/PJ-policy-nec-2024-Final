/**
 * 통합검색
 */
function _FN_ALL_SEARCH() {

	if($("#allSearchWord").val() == "") {
		alert("검색어를 입력하세요.");
		$("#allSearchWord").focus();
		return false;
	}

	if($("#allSearchWord").val().length <= 1) {
		alert("검색어는 2자 이상 입력해주세요.");
		$("#allSearchWord").focus();
		return false;
	}

	var regExp = "^[가-힣]*$";

	if (!$("#allSearchWord").val().match(regExp)) {
		alert("검색어는 한글만 입력하세요.");
		$("#allSearchWord").focus();
		return false;
	}

	_FN_PAGE_CALL(_CTX_PATH + "/plc/search/initUMASearch.do?allSearchWord="+encodeURIComponent($("#allSearchWord").val()));
}

/**
 * PDF뷰어
 */
function _FN_VIEW_PDF(url, filename) {

	//IE브라우저 체크
//	var agent = navigator.userAgent.toLowerCase();
//	if((navigator.appName == "Netscape" && navigator.userAgent.search("Trident") != -1) || (agent.indexOf("msie") != -1)) {
//		//IE10 버전 이하 체크
//		if(navigator.appName == "Microsoft Internet Explorer") {
//			alert("정책·공약마당의 정책·공약은 IE11이상에서 바로 보실 수 있습니다.\n다운로드 기능을 이용하시거나 브라우저를 업그레이드 해주세요.");
//			return false;
//		}
//	}

	if(url == "") {
		alert("파일 정보가 없습니다.");
		return false;
	}

//	var pdfView = _COMMON_PDF_VIEW;
	var pdfView = "N";
	var pdfPath = _COMMON_PDF_FILE_URL_PATH;
	var pdfUrl = "";

	if(pdfView == "Y") {
		pdfUrl = _COMMON_CDN_URL_PATH + pdfPath;
	} else {
		pdfUrl = _CTX_PATH + pdfPath;
	}

	$("#url").val(pdfUrl+url);
	$("#filename").val(filename);

	var _VIEW_PDF;

	_VIEW_PDF = window.open('', '_VIEW_PDF','width=800, height=900, resizable=yes');
	_VIEW_PDF.focus();

    document.frmpdf.target= "_VIEW_PDF";
    document.frmpdf.action= "/plc/common/initUCoCommonPdf.do";
    document.frmpdf.method= "POST";
    document.frmpdf.submit();
}


function _FN_VIEW_PDF_20200311(pdfView, url, filename) {

	if(url == "") {
		alert("파일 정보가 없습니다.");
		return false;
	}

	var pdfPath = _COMMON_PDF_FILE_URL_PATH;
	var pdfUrl = "";

	if(pdfView == "Y") {
		pdfUrl = _COMMON_CDN_URL_PATH + pdfPath;
	} else {
		pdfUrl = _CTX_PATH + pdfPath;
	}

	$("#url").val(pdfUrl+url);
	$("#filename").val(filename);

	var _VIEW_PDF;

	_VIEW_PDF = window.open('', '_VIEW_PDF','width=800, height=900, resizable=yes');
	_VIEW_PDF.focus();

    document.frmpdf.target= "_VIEW_PDF";
    document.frmpdf.action= "/plc/common/initUCoCommonPdf.do";
    document.frmpdf.method= "POST";
    document.frmpdf.submit();
}

function _FN_VIEW_PDF_IMAGE(pdfView, url, filename, pgCnt, pdfTypeCode) {
	if(url == "") {
		alert("파일 정보가 없습니다.");
		return false;
	}

	var pdfPath = _COMMON_PDF_FILE_URL_PATH;
	var pdfUrl = "";

	if(pdfView == "Y") {
		pdfUrl = _COMMON_CDN_URL_PATH + pdfPath;
	} else {
		pdfUrl = _URL + pdfPath;
	}

	$("#url").val(pdfUrl+url);
	$("#filename").val(filename);
	$("#pgCnt").val(pgCnt);
	$("#pdfTypeCode").val(pdfTypeCode);

	var _VIEW_PDF;

	_VIEW_PDF = window.open('', '_VIEW_PDF_IMG','width=800, height=900, resizable=yes');
	_VIEW_PDF.focus();

    document.frmpdf.target= "_VIEW_PDF_IMG";
    document.frmpdf.action= "/plc/common/initUCoCommonImg.do";
    document.frmpdf.method= "POST";
    document.frmpdf.submit();
}

function _FN_VIEW_PDF_DOWN(requestedFileName, requestedFullPath) {
	fileHiddenFrame.location.href = _CTX_PATH + "/plc/common/downloadFile.do?requestedFileName=" + encodeURIComponent(requestedFileName) +"&requestedFullPath="+ requestedFullPath;
}

function _MS_BIND_DOWNLOAD() {
	var agent = navigator.userAgent.toLowerCase();
	//if ((navigator.appName == "Netscape" && navigator.userAgent.search("Trident") != -1) || (agent.indexOf("msie") != -1)) {
	if ($(".btn-down.icon-spr").length > 0) {
		$(".btn-down.icon-spr").not(".disabled").off('click');
		$(".btn-down.icon-spr").not(".disabled").each(function(i) {
			_FN_DOWNLOAD_IE($(this));
		});
	}
	if ($(".btn_down.cdn").length > 0) {
		$(".btn_down.cdn").not(".disabled").off('click');
		$(".btn_down.cdn").not(".disabled").each(function(i) {
			_FN_DOWNLOAD_IE($(this));
		});
	}
	//}
}

// IE 인 경우 a 태그로 파일 다운로드하도록 처리.
function _FN_DOWNLOAD_IE(el) {
	$(el).click(function(e) {
		e.preventDefault();
		var filename = $(this).attr('download');
		var href = $(this).attr('href');
		if (filename === '') {
			var tmp = href.split('/');
			filename = tmp[tmp.length - 1];
		}

		var xhr = new XMLHttpRequest();
		xhr.onloadstart = function () {
			xhr.responseType = 'blob';
		};
		xhr.onload = function () {
			if (typeof navigator.msSaveOrOpenBlob !== 'undefined') {
				navigator.msSaveOrOpenBlob(xhr.response, filename);
			} else {
				var blob = new Blob([xhr.response]);
				var URL = window.URL || window.webkitURL;
				var downloadUrl = URL.createObjectURL(blob);
				var a = document.createElement("a");
				if (typeof a.download === 'undefined') {
					window.location = downloadUrl;
				} else {
					a.href = downloadUrl;
					a.download = filename;
					document.body.appendChild(a);
					a.click();
				}
			}
		};

		xhr.open("GET", href, true);
		//xhr.setRequestHeader("Content-Type", "application/pdf");
		xhr.send();
	});
}

function _FN_COMMIMENT_POPUP(url) {
	window.open(url, '_COMMIMENT_POPUP','width=510, height=550, resizable=no, scrollbars=no');
}

function _FN_COMMIMENT_BIRE_POPUP(url) {
	window.open(url, '_COMMIMENT_POPUP','width=510, height=550, resizable=no, scrollbars=no');
}

function isEmpty(value) {
	var isEmptyObject = function(a) {
		if(typeof a.length === 'undefined') {
			var hasNonempty = Object.keys(a).some(function nonEmpty(element) {
				return !isEmpty(a[element]);
			});
			return hasNonempty ? false : isEmptyObject(Object.keys(a));
		}
		return !a.some(function nonEmpty(element) {
			return !isEmpty(element);
		});
	};
	return(value == false || typeof value === 'undefined' || value == null || (typeof value === 'object' && isEmptyObject(value)));
}

function _FN_RESIZE_CALL() {
	parent._FN_INDEX_RESIZE($("body").height());
}

function _FN_TITLE(val) {
	parent._FN_TITLE(val);
}

function _FN_PAGE_CALL(val) {
	parent._FN_PAGE_LINK(val);
}

function _FN_SLIDER_CALL(index, last) {

	if(index == 0) {
		$(".bx-prev").addClass("disabled");
	} else {
		$(".bx-prev").removeClass("disabled");
	}

	if(last == true) {
		$(".bx-next").addClass("disabled");
	} else {
		$(".bx-next").removeClass("disabled");
	}
}