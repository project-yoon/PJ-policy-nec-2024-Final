function tabMove() {
    const mapLists = document.querySelectorAll('#map-country-svg polygon');
    const mapPdf = document.querySelector('.map-pdf');
    const pdfViewer = mapPdf.querySelector('.pdf-viewer');

    // iframe으로 포커스 이동
    mapLists.forEach((mapList) => {
        // 페이지 클릭 시 iframe부모로 포커스 이동
        mapList.addEventListener('click', (e) => {
            mapPdf.classList.add('on');
            mapLists.forEach((element) => {
                element.classList.remove('on');
                element.setAttribute('title', '');
            });
            mapList.classList.add('on');
            mapList.setAttribute('title', '선택됨');
            // pdf 파일 로드된 후에 포커스가 들어가야 화면상 이동이 됨(추후 시간 조절 필요)
            setTimeout(() => {
                pdfViewer.focus();
            }, 300);
        });
        // 키보드 누를 시 iframe부모로 포커스 이동
        mapList.addEventListener('keydown', (e) => {
            if (e.key == 'Enter' || e.key == ' ') {
                mapPdf.classList.add('on');
                mapLists.forEach((element) => {
                    element.classList.remove('on');
                    element.setAttribute('title', '');
                });
                mapList.classList.add('on');
                mapList.setAttribute('title', '선택됨');
                setTimeout(() => {
                    pdfViewer.focus();
                }, 300);
            }
        });
    });

    // iframe에서 Shift+Tab 누를 시 선택했던 페이지로 이동
    pdfViewer.addEventListener('keydown', (e) => {
        if (e.shiftKey && e.key == 'Tab') {
            e.preventDefault();
            mapLists.forEach((page) => {
                if (page.classList.contains('on')) {
                    setTimeout(() => {
                        page.focus();
                    }, 1);
                }
            });
        }
    });

    const btnGoSigungu = document.querySelector('.btn-go-sigungu');
    // 시군구 바로가기에서 Tab 누를 시 전국지도로 이동
    btnGoSigungu.addEventListener('keydown', (e) => {
        if (!e.shiftKey && e.key === 'Tab') {
            e.preventDefault();
            mapLists.forEach((page) => {
                if (page.classList.contains('on')) {
                    setTimeout(() => {
                        page.focus();
                    }, 1);
                }
            });
        }
    });

    let currentSigungu = 0;

    /* mapLists.forEach((mapList, index) => {
        const mapListsLength = mapLists.length - 1;
        const treeTab = document.querySelector('.comparativeTab div.on');

        // 지역선택 도시 클릭 이벤트
        mapList.addEventListener('click', (e) => {
            // 도시 선택시 시군구로 이동
            let mapInmaps = document.querySelectorAll('.map-area');

            // 같은 도시명 지도 보여주기
            mapInmaps.forEach((mapInmap) => {
                // 도시 엔터/스페이스바 사용 시 지도 제거
                mapInmap.classList.remove('on');
                if (mapInmap.getAttribute('data-inmap') == mapList.getAttribute('data-area')) {
                    mapInmap.classList.add('on');
                }
                setTimeout(() => {
                    document.querySelector('.comparativeMap').focus();
                }, 1);
            });
        });

        // 지역선택 도시 키보드 이벤트
        mapList.addEventListener('keydown', (e) => {
            // 도시 선택시 시군구로 이동
            if (e.key == 'Enter' || e.key == ' ') {
                let mapInmaps = document.querySelectorAll('.map-area');

                // 같은 도시명 지도 보여주기
                mapInmaps.forEach((mapInmap) => {
                    // 도시 엔터/스페이스바 사용 시 전국 지도 제거
                    mapInmap.classList.remove('on');
                    if (mapInmap.getAttribute('data-inmap') == mapList.getAttribute('data-area')) {
                        mapInmap.classList.add('on');
                        currentSigungu = mapInmap.getAttribute('data-inmap');
                    }
                    setTimeout(() => {
                        document.querySelector('.comparativeMap').focus();
                    }, 1);
                });
            }

            // shift+tab 누를 시 공약이슈트리 보기로 이동
            if (e.shiftKey && e.key == 'Tab') {
                if (index == 0) {
                    e.preventDefault();
                    setTimeout(() => {
                        treeTab.parentElement.focus();
                    }, 1);
                }
            }
        });
    }); */

    // 돌아가기 버튼 이벤트 : 과장님것 붙여넣기
    const btnMapBacks = document.querySelectorAll('.btn_map_back');

    btnMapBacks.forEach((btnMapBack) => {
        btnMapBack.addEventListener('keydown', (e) => {
            if (e.key == 'Enter' || e.key == ' ') {
                let mapInmaps = document.querySelectorAll('.map-area');

                // 기존 지도 숨김
                mapInmaps.forEach((mapInmap) => {
                    mapInmap.classList.remove('on');
                });

                // 전국 지도 노출 및 포커스 이동
                document.querySelector('div[data-inmap="전국"]').classList.add('on');
                console.log(currentSigungu, '3');
                setTimeout(() => {
                    mapLists.forEach((selectedMap) => {
                        if (selectedMap.getAttribute('data-area') == currentSigungu) {
                            selectedMap.focus();
                        }
                    });
                }, 1);
            }
        });
    });
}

function pdfFile() {
    const mapLists = document.querySelectorAll('#map-country-svg polygon');
    const iframe = document.querySelector('.pdf-viewer iframe');
    // 객체에 pdf 파일 위치 모아놓고 data 비교후 적용
    let mapPDF = {
        서울: './assets/pdf_viewer/web/viewer.html?file=231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=25',
        부산: './assets/pdf_viewer/web/viewer.html?file=231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=73',
        대구: './assets/pdf_viewer/web/viewer.html?file=231215_정책선거문화_확산을_위한_언론기사_빅데이터_분석.pdf#page=65',
    };

    // polygon 이벤트
    mapLists.forEach((mapList) => {
        //클릭 시 iframe src: pdf 파일 변경
        mapList.addEventListener('click', () => {
            for (let i in mapPDF) {
                if (mapList.getAttribute('data-area') == i) {
                    iframe.src = mapPDF[i];
                }
            }
        });
        //키보드 엔터 시 iframe src: pdf 파일 변경
        mapList.addEventListener('keydown', (e) => {
            if (e.key == 'Enter' || e.key == ' ') {
                for (let i in mapPDF) {
                    if (mapList.getAttribute('data-area') == i) {
                        iframe.src = mapPDF[i];
                    }
                }
            }
        });
    });
}

function changeSigungu() {
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
    };

    // 시군구 이벤트
    const cityCodes = document.querySelectorAll('button[data-moCity]');

    cityCodes.forEach((cityCode) => {
        // 지역 클릭 시 select 박스 타이틀 및 option 값 변경
        cityCode.addEventListener('click', () => {
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
        });
        // 지역 키보드 사용시 select 박스 타이틀 및 option 값 변경
        cityCode.addEventListener('keydown', (e) => {
            if (e.key == 'Enter' || e.key == ' ') {
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
            }
        });
    });
    console.log(cityCodes);
}

// 현재 위치 확인
/* document.addEventListener('keydown', (e) => {
    console.log(document.activeElement);
}); */

// html 로드되고 바로 실행
window.addEventListener('DOMContentLoaded', function () {
    tabMove();
    pdfFile();
    changeSigungu();
});
