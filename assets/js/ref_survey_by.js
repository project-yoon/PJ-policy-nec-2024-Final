function tabMove() {
    const mapLists = $('#map-country-svg polygon');
    const mapPdf = $('.map-pdf');
    const mapPdf02 = $('.map-pdf02');
    const pdfViewer = $('.map-pdf').find('.pdf-viewer');

    // svg내 polygon 클릭시 iframe으로 포커스 이동
    mapLists.click(function () {
        addRemoveClass(mapPdf, mapLists);
        addRemoveClass(mapPdf02, mapLists);
        mapLists.attr('title', '');
        $(this).addClass('on').attr('title', '선택됨');
        setTimeout(() => {
            $(pdfViewer).focus();
        }, 300);
    });

    // svg내 polygon Enter/space 입력시 iframe으로 포커스 이동
    mapLists.keydown(function (e) {
        if (e.key == 'Enter' || e.key == ' ') {
            addRemoveClass(mapPdf, mapLists);
            addRemoveClass(mapPdf02, mapLists);
            mapLists.attr('title', '');
            $(this).addClass('on').attr('title', '선택됨');
            setTimeout(() => {
                $(pdfViewer).focus();
            }, 300);
        }
    });

    // iframe에서 Shift+Tab 누를 시 선택했던 페이지로 이동
    pdfViewer.keydown(function (e) {
        if (e.shiftKey && e.key == 'Tab') {
            e.preventDefault();
            mapLists.each((index, page) => {
                if ($(page).hasClass('on')) {
                    setTimeout(() => {
                        $(page).focus();
                    }, 1);
                }
            });
        }
    });

    const btnGoSigungu = $('.btn-go-sigungu');
    // 시군구 바로가기에서 Tab 누를 시 전국지도로 이동
    btnGoSigungu.keydown(function (e) {
        if (!e.shiftKey && e.key === 'Tab') {
            e.preventDefault();
            mapLists.each((index, page) => {
                if ($(page).hasClass('on')) {
                    setTimeout(() => {
                        $(page).focus();
                    }, 1);
                }
            });
        }
    });
}

function pdfFile() {
    const mapLists = document.querySelectorAll('#map-country-svg polygon');
    const mapTitle = document.querySelector('.map-pdf h3');
    const mapTitle02 = document.querySelector('.map-pdf02 h3');
    const iframe = document.querySelector('.pdf-viewer iframe');
    let btnSigungu = document.querySelector('.btn-map');

    let pdfTitle = {
        서울: '서울특별시',
        부산: '부산광역시',
        대구: '대구광역시',
        인천: '인천광역시',
        광주: '광주광역시',
        대전: '대전광역시',
        울산: '울산광역시',
        세종: '세종특별자치시',
        경기: '경기도',
        강원: '강원특별자치도',
        충북: '충청북도',
        충남: '충청남도',
        전북: '전북특별자치도',
        전남: '전라남도',
        경북: '경상북도',
        경남: '경상남도',
        제주: '제주특별자치도',
    };
    let pdfView = {
        서울: './assets/pdf_viewer/web/viewer.html?file=231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=25',
        부산: './assets/pdf_viewer/web/viewer.html?file=231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=73',
        대구: './assets/pdf_viewer/web/viewer.html?file=231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=65',
        인천: './assets/pdf_viewer/web/viewer.html?file=231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=25',
        광주: './assets/pdf_viewer/web/viewer.html?file=231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=73',
        대전: './assets/pdf_viewer/web/viewer.html?file=231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=65',
        울산: './assets/pdf_viewer/web/viewer.html?file=231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=25',
        세종: './assets/pdf_viewer/web/viewer.html?file=231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=73',
        경기: './assets/pdf_viewer/web/viewer.html?file=231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=65',
        강원: './assets/pdf_viewer/web/viewer.html?file=231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=25',
        충북: './assets/pdf_viewer/web/viewer.html?file=231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=73',
        충남: './assets/pdf_viewer/web/viewer.html?file=231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=65',
        전북: './assets/pdf_viewer/web/viewer.html?file=231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=25',
        전남: './assets/pdf_viewer/web/viewer.html?file=231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=73',
        경북: './assets/pdf_viewer/web/viewer.html?file=231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=65',
        경남: './assets/pdf_viewer/web/viewer.html?file=231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=25',
        제주: './assets/pdf_viewer/web/viewer.html?file=231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=73',
    };
    let pdfFiles = {
        서울: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=25',
        부산: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=73',
        대구: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=65',
        인천: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=25',
        광주: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=73',
        대전: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=65',
        울산: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=25',
        세종: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=73',
        경기: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=65',
        강원: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=25',
        충북: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=73',
        충남: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=65',
        전북: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=25',
        전남: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=73',
        경북: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=65',
        경남: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=25',
        제주: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=73',
    };

    // polygon 이벤트
    mapLists.forEach((mapList) => {
        // 클릭 시 이벤트
        mapList.addEventListener('click', () => {
            // 타이틀 변경
            for (let i in pdfTitle) {
                if (mapList.getAttribute('data-area') == i) {
                    // 버전1
                    mapTitle.innerHTML = pdfTitle[i];
                    // 버전2
                    mapTitle02.innerHTML = pdfTitle[i];
                    $(btnSigungu).data('link', i);
                }
            }
            // iframe src: pdf 파일명 변경
            for (let i in pdfView) {
                // 버전1
                if (mapList.getAttribute('data-area') == i) {
                    iframe.src = pdfView[i];
                }
                // 버전2
                if (mapList.getAttribute('data-area') == i) {
                    $('.map-pdf02 .pdf-popup').click(function () {
                        window.open(pdfView[i], '기초조사 이미지 자료 팝업창', 'width=800,height=900,location=no,status=no,scrollbars=no');
                    });
                }
            }
            // download 파일 변경
            for (let i in pdfFiles) {
                $('.pdf-download').attr('href', pdfFiles[i]);
            }
        });

        // 키보드 입력 시 이벤트
        mapList.addEventListener('keydown', (e) => {
            if (e.key == 'Enter' || e.key == ' ') {
                // 타이틀 변경
                for (let i in pdfTitle) {
                    if (mapList.getAttribute('data-area') == i) {
                        // 버전1
                        mapTitle.innerHTML = pdfTitle[i];
                        // 버전2
                        mapTitle02.innerHTML = pdfTitle[i];
                        $(btnSigungu).data('link', i);
                    }
                }
                // iframe src: pdf 파일명 변경
                for (let i in pdfView) {
                    // 버전1
                    if (mapList.getAttribute('data-area') == i) {
                        iframe.src = pdfView[i];
                    }
                    // 버전2
                    if (mapList.getAttribute('data-area') == i) {
                        $('.map-pdf02 .pdf-popup').click(function () {
                            window.open(pdfView[i], '기초조사 이미지 자료 팝업창', 'width=800,height=900,location=no,status=no,scrollbars=no');
                        });
                    }
                }
            }
            // download 파일 변경
            for (let i in pdfFiles) {
                $('.pdf-download').attr('href', pdfFiles[i]);
            }
        });
    });

    // 시군구 버튼
    // 클릭시
    $(document).on('click', '.btn-map', function (event) {
        // 클릭한 버튼의 data-link 값 가져오기
        let clickedLink = $(this).data('link');
        let backBtn = $('.map-area').find('.btn_map_back');
        // 모든 .map-area에 on 클래스를 제거
        $('.map-area').removeClass('on');
        // 클릭한 버튼의 data-link 값과 일치하는 .map-area에 on 클래스를 추가
        $('.map-area[data-inmap="' + clickedLink + '"]').addClass('on');
        backBtn.focus();
    });
    // Enter 누를시
    $(document).on('keydown', '.btn-map', function (event) {
        let clickedLink = $(this).data('link');
        let backBtn = $('.map-area').find('.btn_map_back');

        if (event.keyCode === 13) {
            event.preventDefault();
            // 클릭한 버튼의 data-link 값 가져오기
            // 모든 .map-area에 on 클래스를 제거
            $('.map-area').removeClass('on');
            $('.map-keyword').removeClass('on');
            // 클릭한 버튼의 data-link 값과 일치하는 .map-area에 on 클래스를 추가
            $('.map-area[data-inmap="' + clickedLink + '"]').addClass('on');

            backBtn.focus();
        } else if (event.keyCode === 9) {
            event.preventDefault();
            $('polygon[data-area="' + clickedLink + '"]').focus();
        }
    });
    /// 시군구 뒤로가기 버튼
    $(document).on('click', '.btn_map_back', function (event) {
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

    $(document).on('keydown', '.btn_map_back', function (event) {
        if (event.keyCode === 13) {
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
}

function mobileChangeSigungu() {
    const moSigungu = document.querySelector('.mo-sigungu');
    let sigunguTitle = {
        서울: '서울특별시',
        부산: '부산광역시',
        대구: '대구광역시',
        인천: '인천광역시',
        광주: '광주광역시',
        대전: '대전광역시',
        울산: '울산광역시',
        세종: '세종특별자치시',
        경기: '경기도',
        강원: '강원특별자치도',
        충북: '충청북도',
        충남: '충청남도',
        전북: '전북특별자치도',
        전남: '전라남도',
        경북: '경상북도',
        경남: '경상남도',
        제주: '제주특별자치도',
    };
    let sigunguList = {
        서울: '<option value="종로구">종로구</option><option value="중구">중구</option><option value="용산구">용산구</option><option value="성동구">성동구</option><option value="광진구">광진구</option><option value="동대문구">동대문구</option><option value="중랑구">중랑구</option><option value="성북구">성북구</option><option value="강북구">강북구</option><option value="도봉구">도봉구</option><option value="노원구">노원구</option><option value="은평구">은평구</option><option value="서대문구">서대문구</option><option value="마포구">마포구</option><option value="양천구">양천구</option><option value="강서구">강서구</option><option value="구로구">구로구</option><option value="금천구">금천구</option><option value="영등포구">영등포구</option><option value="동작구">동작구</option><option value="관악구">관악구</option><option value="서초구">서초구</option><option value="강남구">강남구</option><option value="송파구">송파구</option><option value="강동구">강동구</option>',
        부산: '<option value="중구">중구</option><option value="서구">서구</option><option value="동구">동구</option><option value="영도구">영도구</option><option value="부산진구">부산진구</option><option value="동래구">동래구</option><option value="남구">남구</option><option value="북구">북구</option><option value="해운대구">해운대구</option><option value="기장군">기장군</option><option value="사하구">사하구</option><option value="금정구">금정구</option><option value="강서구">강서구</option><option value="연제구">연제구</option><option value="수영구">수영구</option><option value="사상구">사상구</option>',
        대구: '<option value="중구">중구</option><option value="동구">동구</option><option value="서구">서구</option><option value="남구">남구</option><option value="북구">북구</option><option value="수성구">수성구</option><option value="달서구">달서구</option><option value="달성군">달성군</option><option value="군위군">군위군</option>',
        인천: '<option value="중구">중구</option><option value="동구">동구</option><option value="미추홀구">미추홀구</option><option value="연수구">연수구</option><option value="남동구">남동구</option><option value="부평구">부평구</option><option value="계양구">계양구</option><option value="서구">서구</option><option value="강화군">강화군</option><option value="웅진군">웅진군</option>',
        광주: '<option value="동구">동구</option><option value="서구">서구</option><option value="남구">남구</option><option value="북구">북구</option><option value="중구">중구</option>',
        대전: '<option value="동구">동구</option><option value="중구">중구</option><option value="서구">서구</option><option value="유성구">유성구</option><option value="대덕구">대덕구</option>',
        울산: '<option value="중구">중구</option><option value="남구">남구</option><option value="동구">동구</option><option value="북구">북구</option><option value="울주군">울주군</option>',
        세종: '<option value="세종특별자치시">세종특별자치시</option>',
        경기: '<option value="의정부시">의정부시</option><option value="광명시">광명시</option><option value="평택시">평택시</option><option value="양주시">양주시</option><option value="동두천시">동두천시</option><option value="과천시">과천시</option><option value="의왕시">의왕시</option><option value="구리시">구리시</option><option value="남양주시">남양주시</option><option value="오산시">오산시</option><option value="화성시">화성시</option><option value="시흥시">시흥시</option><option value="군포시">군포시</option><option value="하남시">하남시</option><option value="파주시">파주시</option><option value="여주시">여주시</option><option value="이천시">이천시</option><option value="안성시">안성시</option><option value="김포시">김포시</option><option value="광주시">광주시</option><option value="포천시">포천시</option><option value="연천군">연천군</option><option value="양평군">양평군</option><option value="가평군">가평군</option><option value="용인시">용인시</option><option value="고양시">고양시</option><option value="수원시">수원시</option><option value="부천시">부천시</option><option value="안산시">안산시</option><option value="성남시">성남시</option><option value="안양시">안양시</option>',
        강원: '<option value="춘천시">춘천시</option><option value="원주시">원주시</option><option value="강릉시">강릉시</option><option value="동해시">동해시</option><option value="삼척시">삼척시</option><option value="태백시">태백시</option><option value="정선군">정선군</option><option value="속초시">속초시</option><option value="고성군">고성군</option><option value="양양군">양양군</option><option value="인제군">인제군</option><option value="홍천군">홍천군</option><option value="횡성군">횡성군</option><option value="영월군">영월군</option><option value="평창군">평창군</option><option value="화천군">화천군</option><option value="양구군">양구군</option><option value="철원군">철원군</option>',
        충북: '<option value="충주시">충주시</option><option value="제천시">제천시</option><option value="단양군">단양군</option><option value="영동군">영동군</option><option value="보은군">보은군</option><option value="옥천군">옥천군</option><option value="음성군">음성군</option><option value="진천군">진천군</option><option value="괴산군">괴산군</option><option value="증평군">증평군</option><option value="청주시">청주시</option>',
        충남: '<option value="공주시">공주시</option><option value="보령시">보령시</option><option value="아산시">아산시</option><option value="서산시">서산시</option><option value="태안군">태안군</option><option value="금산군">금산군</option><option value="논산시">논산시</option><option value="계룡시">계룡시</option><option value="부여군">부여군</option><option value="서천군">서천군</option><option value="홍성군">홍성군</option><option value="청양군">청양군</option><option value="예산군">예산군</option><option value="당진시">당진시</option><option value="천안시">천안시</option>',
        전북: '<option value="군산시">군산시</option><option value="익산시">익산시</option><option value="정읍시">정읍시</option><option value="남원시">남원시</option><option value="김제시">김제시</option><option value="완주군">완주군</option><option value="진안군">진안군</option><option value="무주군">무주군</option><option value="장수군">장수군</option><option value="임실군">임실군</option><option value="순창군">순창군</option><option value="고창군">고창군</option><option value="부안군">부안군</option><option value="전주시">전주시</option>',
        전남: '<option value="목포시">목포시</option><option value="여수시">여수시</option><option value="순천시">순천시</option><option value="나주시">나주시</option><option value="관양시">관양시</option><option value="담양군">담양군</option><option value="장성군">장성군</option><option value="곡성군">곡성군</option><option value="구례군">구례군</option><option value="고흥군">고흥군</option><option value="보성군">보성군</option><option value="화순군">화순군</option><option value="장흥군">장흥군</option><option value="강진군">강진군</option><option value="완도군">완도군</option><option value="해남군">해남군</option><option value="진도군">진도군</option><option value="영암군">영암군</option><option value="무안군">무안군</option><option value="영광군">영광군</option><option value="함평군">함평군</option><option value="신안군">신안군</option>',
        경북: '<option value="울릉군">울릉군</option><option value="경주시">경주시</option><option value="김천시">김천시</option><option value="안동시">안동시</option><option value="구미시">구미시</option><option value="영주시">영주시</option><option value="영천시">영천시</option><option value="상주시">상주시</option><option value="문경시">문경시</option><option value="예천군">예천군</option><option value="경산시">경산시</option><option value="청도군">청도군</option><option value="고령군">고령군</option><option value="성주군">성주군</option><option value="칠곡군">칠곡군</option><option value="의성군">의성군</option><option value="청송군">청송군</option><option value="영양군">영양군</option><option value="영덕군">영덕군</option><option value="봉화군">봉화군</option><option value="울진군">울진군</option><option value="포항시">포항시</option>',
        경남: '<option value="진주시">진주시</option><option value="통영시">통영시</option><option value="고성군">고성군</option><option value="사천시">사천시</option><option value="김해시">김해시</option><option value="밀양시">밀양시</option><option value="거제시">거제시</option><option value="의령군">의령군</option><option value="함안군">함안군</option><option value="창녕군">창녕군</option><option value="양산시">양산시</option><option value="하동군">하동군</option><option value="남해군">남해군</option><option value="함양군">함양군</option><option value="산청군">산청군</option><option value="거창군">거창군</option><option value="합천군">합천군</option><option value="창원시">창원시</option>',
        제주: '<option value="제주시">제주시</option><option value="서귀포시">서귀포시</option>',
    };
    let pdfFilesSigungu = {
        서울: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=25',
        부산: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=73',
        대구: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=65',
        인천: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=25',
        광주: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=73',
        대전: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=65',
        울산: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=25',
        세종: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=73',
        경기: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=65',
        강원: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=25',
        충북: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=73',
        충남: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=65',
        전북: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=25',
        전남: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=73',
        경북: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=65',
        경남: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=25',
        제주: './assets/pdf_viewer/web/231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=73',
    };

    // 시군구 이벤트
    const cityCodes = document.querySelectorAll('button[data-moCity]');

    cityCodes.forEach((cityCode) => {
        // 지역 클릭 시 select 박스 타이틀 및 option 값 변경
        cityCode.addEventListener('click', () => {
            addRemoveClass(moSigungu, cityCodes);
            cityCodes.forEach((el) => {
                el.setAttribute('title', '');
            });
            cityCode.setAttribute('title', '선택됨');
            cityCode.classList.add('on');
            for (let title in sigunguTitle) {
                if (cityCode.getAttribute('data-moCity') == title) {
                    document.querySelector('.mo-sigungu h3').innerHTML = sigunguTitle[title];
                    document.querySelector('.mo-select label').innerHTML = sigunguTitle[title] + ' 시군구 선택하기';
                }
            }
            for (let list in sigunguList) {
                if (cityCode.getAttribute('data-moCity') == list) {
                    document.querySelector('#sigunguSelect').innerHTML = sigunguList[list];
                }
            }
            document.querySelector('.mo-select select').focus();
        });
        // 지역 키보드 사용시 select 박스 타이틀 및 option 값 변경
        cityCode.addEventListener('keydown', (e) => {
            if (e.key == 'Enter' || e.key == ' ') {
                addRemoveClass(moSigungu, cityCodes);
                cityCodes.forEach((el) => {
                    el.setAttribute('title', '');
                });
                cityCode.setAttribute('title', '선택됨');
                cityCode.classList.add('on');
                for (let title in sigunguTitle) {
                    if (cityCode.getAttribute('data-moCity') == title) {
                        document.querySelector('.mo-sigungu h3').innerHTML = sigunguTitle[title];
                        document.querySelector('.mo-select label').innerHTML = sigunguTitle[title] + ' 시군구 선택하기';
                    }
                }
                for (let list in sigunguList) {
                    if (cityCode.getAttribute('data-moCity') == list) {
                        document.querySelector('#sigunguSelect').innerHTML = sigunguList[list];
                    }
                }
                e.preventDefault();
                document.querySelector('.mo-select select').focus();
            }
        });
    });

    // Shift+Tab 누를 시 시도 선택으로 돌아가기
    $('.mo-select select').keydown(function (e) {
        const cityCodes = $('button[data-moCity]');
        if (e.shiftKey && e.key === 'Tab') {
            e.preventDefault();
            cityCodes.each((index, page) => {
                if ($(page).hasClass('on')) {
                    setTimeout(() => {
                        $(page).focus();
                    }, 1);
                }
            });
        }
    });

    // 확인 버튼 이벤트

    // 클릭 시 팝업창 노출
    const select = document.querySelector('#sigunguSelect');
    $('.mo-select button').click(function () {
        let title = document.querySelector('.mo-sigungu h3').innerHTML;
        let option = select.options[select.selectedIndex];
        document.querySelector('.map-pdf02 h3').innerHTML = `${title} ${option.value}`;
        setTimeout(() => {
            document.querySelector('.map-pdf02 .pdf-popup').focus();
        }, 1);
    });
}

function addRemoveClass(add, remove) {
    $(add).addClass('on');
    $(remove).removeClass('on');
}
// 현재 위치 확인
/* document.addEventListener('keydown', (e) => {
    console.log(document.activeElement);
}); */

// html 로드되고 바로 실행
window.addEventListener('DOMContentLoaded', function () {
    tabMove();
    pdfFile();
    mobileChangeSigungu();
});
