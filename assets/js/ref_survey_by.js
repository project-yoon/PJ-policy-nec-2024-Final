function tabMove() {
    const mapLists = document.querySelectorAll('#map-country-svg polygon');
    const mapPdf = document.querySelector('.map-pdf');
    const pdfViewer = mapPdf.querySelector('.pdf-viewer');
    const iframe = document.querySelector('.pdf-viewer iframe');

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

// 현재 위치 확인
/* document.addEventListener('keydown', (e) => {
    console.log(document.activeElement);
}); */

// html 로드되고 바로 실행
window.addEventListener('DOMContentLoaded', function () {
    tabMove();
    pdfFile();
});
