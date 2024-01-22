function tabMove() {
    const mapLists = document.querySelectorAll('.map-area svg polygon');
    let currentSigungu = '';

    mapLists.forEach((mapList, index) => {
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
            // 마지막 도시에서 tab 할 시 공약이슈 기초조사 보기로 이동
            // if (index == mapListsLength) {
            //     if (e.key == 'Tab') {
            //         e.preventDefault();
            //         setTimeout(() => {
            //             treeTab.parentElement.nextElementSibling.focus();
            //         }, 1);
            //     }
            // }
        });
    });

    // 돌아가기 버튼 클릭 시 전국 지도로 돌아가기
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

// html 로드되고 바로 실행
window.addEventListener('DOMContentLoaded', function () {
    tabMove();
});
