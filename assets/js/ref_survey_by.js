/* 공약이슈트리 보기 */
function issueTree() {
    const topParents = document.querySelector('.comparative');
    const mapLists = document.querySelectorAll('#map-country-svg polygon');
    const mapTitle = document.querySelector('.map-keyword[data-col="5"] .map-title');
    const mapContent = document.querySelector('.map-keyword[data-col="5"] .keyword-list');
    const mapBtn = document.querySelector('.map-keyword[data-col="5"] .btn-map');

    let keywordCol05Title = {
        seoul: '서울특별시',
        busan: '부산광역시',
        daegu: '대구광역시',
        incheon: '인천광역시',
        kwangju: '광주광역시',
        daejeon: '대전광역시',
        ulsan: '울산광역시',
        sejong: '세종특별자치시',
        gyunggi: '경기도',
        kangwon: '강원특별자치도',
        chungbuk: '충청북도',
        chungnam: '충청남도',
        jeonbuk: '전북특별자치도',
        jeonnam: '전라남도',
        gyeongbuk: '경상북도',
        gyeongnam: '경상남도',
        jeju: '제주특별자치도',
    };
    let keywordCol05Contents = {
        seoul: `
        <div class="keyword-box">
			<div><span>1</span>부동산/지역개발</div>
			<ol>
				<li><span>주택공급</span></li>
				<li><span>서울주택도시공사</span></li>
				<li><span>신속통합기획</span></li>
				<li><span>공공재건축</span></li>
				<li><span>정비사업</span></li>
				<li><span>공공재개발</span></li>
				<li><span>9호선</span></li>
				<li><span>공공임대주택</span></li>
				<li><span>공공주택</span></li>
				<li><span>김포골드라인</span></li>
				<li><span>5호선</span></li>
				<li><span>임대차</span> 3법</li>
				<li><span>상승폭</span></li>
				<li><span>신혼부부</span></li>
				<li><span>역세권청년주택</span></li>
				<li><span>규제완화</span></li>
				<li><span>도시건축공동</span></li>
				<li><span>재건축사업</span></li>
				<li><span>토지거래허가구역지정</span></li>
				<li><span>재건축단지</span></li>
			</ol>
		</div>
		<div class="keyword-box">
			<div><span>2</span>사건사고</div>
			<ol>
				<li><span>장애인차별철폐연대</span></li>
				<li><span>공직선거법위반</span></li>
				<li><span>전동킥보드</span></li>
				<li><span>서울시청앞</span></li>
				<li><span>윤의원</span></li>
				<li><span>초등학교교사</span></li>
				<li><span>전국장애</span></li>
				<li><span>인명피해</span></li>
				<li><span>서이초등학교</span></li>
				<li><span>지하철탑승시위</span></li>
				<li><span>장애인권리</span></li>
				<li><span>위급재난문자</span></li>
				<li><span>오존주의보</span></li>
				<li><span>이태원참사유가족</span></li>
				<li><span>불법주정차</span></li>
				<li><span>공공운수노조</span></li>
				<li><span>장애인단체</span></li>
				<li><span>4호선</span></li>
				<li><span>재난문자</span></li>
				<li><span>도로교통법</span></li>
			</ol>
		</div>
		<div class="keyword-box">
			<div><span>3</span>정치이슈</div>
			<ol>
				<li><span>전</span> 서울시장</li>
				<li><span>시장성추행</span></li>
				<li><span>공수처</span></li>
				<li><span>고위공직자범죄수사처</span></li>
				<li><span>2차가해</span></li>
				<li><span>특별채용</span></li>
				<li><span>성추행사건</span></li>
				<li><span>혐의고소</span></li>
				<li><span>진상규명</span></li>
				<li><span>여성단체</span></li>
				<li><span>한국성폭력상담소</span></li>
				<li><span>권력형성범죄</span></li>
				<li><span>1호사건</span></li>
				<li><span>피해여성</span></li>
				<li><span>공수처법</span></li>
				<li><span>시장휴대전화</span></li>
				<li><span>해직교사</span></li>
				<li><span>국가공무원법</span></li>
				<li><span>광화문광장</span></li>
				<li><span>성추행피해자</span></li>
			</ol>
		</div>
		<div class="keyword-box">
			<div><span>4</span>행정/복지</div>
			<ol>
				<li><span>상수도사업본부</span></li>
				<li><span>학생인권조례</span></li>
				<li><span>기후동행카드</span></li>
				<li><span>여성가족정책</span></li>
				<li><span>영훈국제중</span></li>
				<li><span>전동킥보드</span></li>
				<li><span>안심소득</span></li>
				<li><span>서울사랑상품권</span></li>
				<li><span>자원회수시설</span></li>
				<li><span>수도권매립지</span></li>
				<li><span>서울창업허브</span></li>
				<li><span>생태전환교육</span></li>
				<li><span>학교밖청소년</span></li>
				<li><span>대중교통요금인상</span></li>
				<li><span>꿈새김판</span></li>
				<li><span>미세먼지계절관리제</span></li>
				<li><span>일반고전환</span></li>
				<li><span>자립준비청년</span></li>
				<li><span>물재생센터</span></li>
				<li><span>고립은둔청년</span></li>
			</ol>
		</div>
		<div class="keyword-box">
			<div><span>5</span>문화/관광</div>
			<ol>
				<li><span>광화문광장</span></li>
				<li><span>세월호기억공간</span></li>
				<li><span>서울시립미술관</span></li>
				<li><span>동대문디자인플라자</span></li>
				<li><span>광장재구조화</span></li>
				<li><span>서울미래유산</span></li>
				<li><span>서울도시건축</span></li>
				<li><span>복합문화공간</span></li>
				<li><span>서울패션위크</span></li>
				<li><span>국립중앙박물관</span></li>
				<li><span>문화예술</span></li>
				<li><span>성소수자</span></li>
				<li><span>국립현대미술관</span></li>
				<li><span>문화비축기지</span></li>
				<li><span>이건희기증관</span></li>
				<li><span>구조화공사</span></li>
				<li><span>기억공간철거</span></li>
				<li><span>어린이대공원</span></li>
				<li><span>예술의전당</span></li>
				<li><span>서울퀴어문화축제</span></li>
			</ol>
		</div>
        `,
        busan: `
        <div class="keyword-box">
			<div><span>1</span>사건사고</div>
			<ol>
				<li><span>전 장관</span></li>
				<li><span>전 부산</span></li>
				<li><span>성추행</span></li>
				<li><span>강제추행</span></li>
				<li><span>공직선거법위반</span></li>
				<li><span>권력형성범죄</span></li>
				<li><span>자녀입시비리</span></li>
				<li><span>성추행사건</span></li>
				<li><span>부하직원강제추행</span></li>
				<li><span>엘시티특혜분양</span></li>
				<li><span>투기의혹</span></li>
				<li><span>고위공직자범죄</span></li>
				<li><span>선출직공직자</span></li>
				<li><span>성추문</span></li>
				<li><span>인명피해</span></li>
				<li><span>피해여성</span></li>
				<li><span>시장성추행사건</span></li>
				<li><span>구속기소</span></li>
				<li><span>직권남용</span></li>
				<li><span>혐의적용</span></li>
			</ol>
		</div>
		<div class="keyword-box">
			<div><span>2</span>행정</div>
			<ol>
				<li><span>세계박람회유치</span></li>
				<li><span>지역경제활성화</span></li>
				<li><span>가덕신공항</span></li>
				<li><span>부산엑스포유치</span></li>
				<li><span>부산월드엑스포</span></li>
				<li><span>방사능오염수</span></li>
				<li><span>국제박람회기구</span></li>
				<li><span>동백전</span></li>
				<li><span>공동어시장</span></li>
				<li><span>형제복지원</span></li>
				<li><span>자치경찰</span></li>
				<li><span>원전오염수</span></li>
				<li><span>일본정부</span></li>
				<li><span>상수도사업본부</span></li>
				<li><span>워케이션</span></li>
				<li><span>장애인복지</span></li>
				<li><span>학교밖청소년</span></li>
				<li><span>동남권메가시티</span></li>
				<li><span>현대화사업</span></li>
				<li><span>지역화폐</span></li>
			</ol>
		</div>
		<div class="keyword-box">
			<div><span>3</span>지역개발/부동산</div>
			<ol>
				<li><span>가덕신공항</span></li>
				<li><span>김해신공항</span></li>
				<li><span>부산울산경남</span></li>
				<li><span>공항건설</span></li>
				<li><span>공항특별법</span></li>
				<li><span>에코델타시티</span></li>
				<li><span>동남권관문공항</span></li>
				<li><span>생활형숙박시설</span></li>
				<li><span>동남권메가시티</span></li>
				<li><span>일해저터널</span></li>
				<li><span>비규제지역</span></li>
				<li><span>센텀2지구</span></li>
				<li><span>정비사업</span></li>
				<li><span>명지국제신도시</span></li>
				<li><span>위브더제니스</span></li>
				<li><span>전세사기피해자</span></li>
				<li><span>전세피해지원</span></li>
				<li><span>부동산문제</span></li>
				<li><span>특별지방자치단체설치</span></li>
				<li><span>조정대상지역지정</span></li>
			</ol>
		</div>
		<div class="keyword-box">
			<div><span>4</span>문화/관광</div>
			<ol>
				<li><span>영화의전당</span></li>
				<li><span>복합문화공간</span></li>
				<li><span>국제관광도시</span></li>
				<li><span>유엔기념공원</span></li>
				<li><span>부산시립미술관</span></li>
				<li><span>국제아트센터</span></li>
				<li><span>15분도시</span></li>
				<li><span>한국야구명예의전당</span></li>
				<li><span>부산국제영화제</span></li>
				<li><span>생활형숙박시설</span></li>
				<li><span>오시리아관광단지</span></li>
				<li><span>벡스코</span></li>
				<li><span>부산세계장애인대회</span></li>
				<li><span>해양레저관광</span></li>
				<li><span>부산관광공사</span></li>
				<li><span>유엔참전용사</span></li>
				<li><span>부산롯데</span></li>
				<li><span>창의도시</span></li>
				<li><span>부산근현대역사관</span></li>
				<li><span>드론쇼코리아</span></li>
			</ol>
		</div>
		<div class="keyword-box">
			<div><span>5</span>산업</div>
			<ol>
				<li><span>동남권방사선의과학</span></li>
				<li><span>블록체인규제자유</span></li>
				<li><span>북항재개발사업</span></li>
				<li><span>한국해양수산개발</span></li>
				<li><span>투자유치</span></li>
				<li><span>가덕신공항</span></li>
				<li><span>산업생태계조성</span></li>
				<li><span>도심융합</span></li>
				<li><span>디지털자산거래소</span></li>
				<li><span>청사포해상풍력</span></li>
				<li><span>한국해양대학교</span></li>
				<li><span>스마트양식클러스터</span></li>
				<li><span>블록체인기술</span></li>
				<li><span>양식클러스터조성</span></li>
				<li><span>운송사업조합</span></li>
				<li><span>원전해체산업</span></li>
				<li><span>부산국제금융센터</span></li>
				<li><span>스마트물류시스템</span></li>
				<li><span>동남권메가시티</span></li>
				<li><span>동남권산단</span></li>
			</ol>
        </div>
        `,
        daegu: `
        <div class="keyword-box">
			<div><span>1</span>사건사고</div>
			<ol>
				<li><span>공직선거법위반</span></li>
				<li><span>소방당국</span></li>
				<li><span>인명피해</span></li>
				<li><span>대구퀴어문화축제</span></li>
				<li><span>혐의기소</span></li>
				<li><span>대구시청여자핸드볼</span></li>
				<li><span>경찰관계자</span></li>
				<li><span>피해발생</span></li>
				<li><span>대중교통전용지구</span></li>
				<li><span>징계절차개시</span></li>
				<li><span>여자핸드볼팀</span></li>
				<li><span>도로점용허가</span></li>
				<li><span>공무집행방해</span></li>
				<li><span>전동킥보드</span></li>
				<li><span>독감백신</span></li>
				<li><span>부동산투기의혹</span></li>
				<li><span>백신접종</span></li>
				<li><span>불법도로점거</span></li>
				<li><span>공수처</span></li>
				<li><span>투기의혹</span></li>
			</ol>
		</div>
		<div class="keyword-box">
			<div><span>2</span>지역활성화</div>
			<ol>
				<li><span>대구경북통합신공항</span></li>
				<li><span>군공항이전</span></li>
				<li><span>이전부지선정</span></li>
				<li><span>공항건설</span></li>
				<li><span>공항화물터미널</span></li>
				<li><span>국가철도망구축계획</span></li>
				<li><span>김해신공항</span></li>
				<li><span>공항특별법</span></li>
				<li><span>달빛내륙철도</span></li>
				<li><span>공동후보지</span></li>
				<li><span>국가로봇테스트필드</span></li>
				<li><span>대구시경북</span></li>
				<li><span>후적지</span></li>
				<li><span>기부대양여</span></li>
				<li><span>대구군공항</span></li>
				<li><span>수성알파시티</span></li>
				<li><span>공항사업</span></li>
				<li><span>공항건설사업</span></li>
				<li><span>국가물산업클러스터</span></li>
				<li><span>민간공항</span></li>
			</ol>
		</div>
		<div class="keyword-box">
			<div><span>3</span>행정/복지</div>
			<ol>
				<li><span>대형마트의무휴업일</span></li>
				<li><span>대구경북행정통합</span></li>
				<li><span>국립공원승격</span></li>
				<li><span>통합물관리방안</span></li>
				<li><span>지역경제활성화</span></li>
				<li><span>구미해평취수장</span></li>
				<li><span>대구로택시</span></li>
				<li><span>대구행복페이</span></li>
				<li><span>대구시경북</span></li>
				<li><span>취수원이전</span></li>
				<li><span>자치경찰</span></li>
				<li><span>홍범도장군</span></li>
				<li><span>일본군위안부피해자</span></li>
				<li><span>원전오염수</span></li>
				<li><span>주민참여예산</span></li>
				<li><span>국립공원지정</span></li>
				<li><span>대구취수원</span></li>
				<li><span>휴업일평일</span></li>
				<li><span>고향사랑기부제</span></li>
				<li><span>대구로페이</span></li>
			</ol>
		</div>
		<div class="keyword-box">
			<div><span>4</span>부동산</div>
			<ol>
				<li><span>힐스테이트</span></li>
				<li><span>2호선</span></li>
				<li><span>1호선</span></li>
				<li><span>주거용오피스텔</span></li>
				<li><span>분양예정</span></li>
				<li><span>일반분양</span></li>
				<li><span>3호선</span></li>
				<li><span>힐스에비뉴 감삼센트럴</span></li>
				<li><span>생활인프라</span></li>
				<li><span>비규제지역</span></li>
				<li><span>서대구역</span></li>
				<li><span>대구권광역철도</span></li>
				<li><span>조정대상지역지정</span></li>
				<li><span>금호워터폴리스</span></li>
				<li><span>배후수요</span></li>
				<li><span>교육환경</span></li>
				<li><span>상승폭</span></li>
				<li><span>규제지역</span></li>
				<li><span>특화설계</span></li>
				<li><span>화성파크드림</span></li>
			</ol>
		</div>
		<div class="keyword-box">
			<div><span>5</span>문화/행사</div>
			<ol>
				<li><span>아시안게임공동유치</span></li>
				<li><span>2038 하계아시안게임 동계올림픽</span></li>
				<li><span>대구문화예술허브</span></li>
				<li><span>시민안전테마파크</span></li>
				<li><span>달빛내륙고속철도</span></li>
				<li><span>경북도청후적지</span></li>
				<li><span>문화예술진흥원</span></li>
				<li><span>대구국제마라톤</span></li>
				<li><span>국채보상운동</span></li>
				<li><span>복합문화공간</span></li>
				<li><span>국립현대미술관</span></li>
				<li><span>대구지하철참사</span></li>
				<li><span>대구오페라하우스</span></li>
				<li><span>국립근대미술관</span></li>
				<li><span>달빛동맹</span></li>
				<li><span>대구치맥페스티벌</span></li>
				<li><span>이건희미술관유치</span></li>
				<li><span>대구콘서트하우스</span></li>
				<li><span>국립중앙박물관</span></li>
				<li><span>문화체육관광</span></li>
			</ol>
		</div>
        `,
        incheon: `
        <div class="keyword-box">
            <div><span>1</span>사건사고</div>
            <ol>
                <li><span>경찰관계자</span></li>
                <li><span>영장실질심사</span></li>
                <li><span>혈중알코올농도</span></li>
                <li><span>아동학대범죄</span></li>
                <li><span>살해뒤</span></li>
                <li><span>도로교통법상</span></li>
                <li><span>아동학대치사</span></li>
                <li><span>유기혐의</span></li>
                <li><span>출생신고</span></li>
                <li><span>농수로</span></li>
                <li><span>횡단보도</span></li>
                <li><span>살인혐의</span></li>
                <li><span>재산피해</span></li>
                <li><span>아동복지법상</span></li>
                <li><span>보육교사</span></li>
                <li><span>위험운전치사</span></li>
                <li><span>노래주점</span></li>
                <li><span>학대혐의</span></li>
                <li><span>스카이72골프장</span></li>
                <li><span>시신유기</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>2</span>행정/복지</div>
            <ol>
                <li><span>수도권매립지</span></li>
                <li><span>친환경자원순환센터</span></li>
                <li><span>기후동행카드</span></li>
                <li><span>유충발견</span></li>
                <li><span>인천국제해양포럼</span></li>
                <li><span>지역경제활성화</span></li>
                <li><span>상수도사업본부</span></li>
                <li><span>5도특별경비단</span></li>
                <li><span>깔따구유충</span></li>
                <li><span>정당현수막</span></li>
                <li><span>수돗물유충</span></li>
                <li><span>수도권매립지종료</span></li>
                <li><span>생활폐기물</span></li>
                <li><span>매립지관리공사</span></li>
                <li><span>매립지사용종료</span></li>
                <li><span>부평정수장</span></li>
                <li><span>수돗물공급</span></li>
                <li><span>인천에코랜드</span></li>
                <li><span>고도정수처리</span></li>
                <li><span>자체매립지</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>3</span>지역발전</div>
            <ol>
                <li><span>4차국가철도망구축</span></li>
                <li><span>인천경제청</span></li>
                <li><span>송도국제도시</span></li>
                <li><span>1호선</span></li>
                <li><span>영종국제도시</span></li>
                <li><span>검단신도시</span></li>
                <li><span>김포골드라인</span></li>
                <li><span>인천스타트업파크</span></li>
                <li><span>분양예정</span></li>
                <li><span>배후수요</span></li>
                <li><span>5호선</span></li>
                <li><span>7호선</span></li>
                <li><span>2호선</span></li>
                <li><span>영종하늘도시</span></li>
                <li><span>의료복합타운</span></li>
                <li><span>호반써밋</span></li>
                <li><span>비규제지역</span></li>
                <li><span>서부권광역급행철도</span></li>
                <li><span>청라시티타워</span></li>
                <li><span>도심항공교통</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>4</span>북한/안보</div>
            <ol>
                <li><span>대북전단살포</span></li>
                <li><span>미군기지캠프</span></li>
                <li><span>자유북한운동연합</span></li>
                <li><span>탈북민</span></li>
                <li><span>조병창병원건물</span></li>
                <li><span>남북교류협력</span></li>
                <li><span>부평미군기지</span></li>
                <li><span>서북도서순환훈련</span></li>
                <li><span>일반인개방</span></li>
                <li><span>무기공장</span></li>
                <li><span>남북공동연락사무소</span></li>
                <li><span>연평도포격</span></li>
                <li><span>당섬선착장</span></li>
                <li><span>연락사무소폭파</span></li>
                <li><span>군감시장비</span></li>
                <li><span>테러종합훈련</span></li>
                <li><span>쌀페트병살포</span></li>
                <li><span>야간경계근무</span></li>
                <li><span>남북교류협력법</span></li>
                <li><span>해병대연평부대</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>5</span>전세사기</div>
            <ol>
                <li><span>전세사기피해</span></li>
                <li><span>전세피해지원센터</span></li>
                <li><span>전세보증금</span></li>
                <li><span>전세사기</span></li>
                <li><span>건축왕</span></li>
                <li><span>긴급주거지원</span></li>
                <li><span>전세계약</span></li>
                <li><span>최우선변제금</span></li>
                <li><span>전세사기깡통</span></li>
                <li><span>사기피해대책</span></li>
                <li><span>인천전세사기 피해주택</span></li>
                <li><span>전세사기사건</span></li>
                <li><span>구속기소</span></li>
                <li><span>범죄단체조직</span></li>
                <li><span>구속영장</span></li>
                <li><span>피해임차인</span></li>
                <li><span>단체조직죄</span></li>
                <li><span>전세사기혐의</span></li>
                <li><span>30대여성</span></li>
                <li><span>지역전세피해</span></li>
            </ol>
        </div>
        `,
        kwangju: `
        <div class="keyword-box">
            <div><span>1</span>군공항이전/행정/복지</div>
            <ol>
                <li><span>군공항이전</span></li>
                <li><span>광주군공항</span></li>
                <li><span>광주전남</span></li>
                <li><span>광주형일자리</span></li>
                <li><span>광주민간공항이전</span></li>
                <li><span>광주글로벌모터스</span></li>
                <li><span>지역경제활성화</span></li>
                <li><span>상수도사업본부</span></li>
                <li><span>공항이전문제</span></li>
                <li><span>빛그린산단</span></li>
                <li><span>상생형지역</span></li>
                <li><span>공항이전사업</span></li>
                <li><span>공항이전특별법</span></li>
                <li><span>세계지질공원</span></li>
                <li><span>복합쇼핑몰유치</span></li>
                <li><span>에너지자립도시</span></li>
                <li><span>무안국제공항</span></li>
                <li><span>고향사랑기부제</span></li>
                <li><span>행정통합</span></li>
                <li><span>일제강제</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>2</span>사건사고</div>
            <ol>
                <li><span>소방당국</span></li>
                <li><span>공직선거법위반</span></li>
                <li><span>인명피해</span></li>
                <li><span>침수피해</span></li>
                <li><span>아동청소년</span></li>
                <li><span>횡단보도</span></li>
                <li><span>전동킥보드</span></li>
                <li><span>부동산투기의혹</span></li>
                <li><span>도로교통법</span></li>
                <li><span>성착취물</span></li>
                <li><span>박사방</span></li>
                <li><span>폐쇄회로CCTV</span></li>
                <li><span>사적채용</span></li>
                <li><span>혈중알코올농도</span></li>
                <li><span>법인카드</span></li>
                <li><span>불교조계종</span></li>
                <li><span>명예훼손혐의</span></li>
                <li><span>투기의혹</span></li>
                <li><span>김전비서관</span></li>
                <li><span>범죄단체조직</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>3</span>지역발전/문화/관광</div>
            <ol>
                <li><span>광주복합쇼핑몰</span></li>
                <li><span>국가철도망구축계획</span></li>
                <li><span>민간공원특례사업</span></li>
                <li><span>달빛내륙철도</span></li>
                <li><span>첨단3지구</span></li>
                <li><span>아시아문화전당</span></li>
                <li><span>공원1지구</span></li>
                <li><span>2호선</span></li>
                <li><span>중앙공원</span></li>
                <li><span>문화중심도시</span></li>
                <li><span>신세계프라퍼티</span></li>
                <li><span>아시아문화중심</span></li>
                <li><span>정율성역사공원</span></li>
                <li><span>선수권대회</span></li>
                <li><span>광주디자인비엔날레</span></li>
                <li><span>반도체특화</span></li>
                <li><span>등산관광단지조성</span></li>
                <li><span>분양할예정</span></li>
                <li><span>공원조성사업</span></li>
                <li><span>관광단지조성사업</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>4</span>민주화운동</div>
            <ol>
                <li><span>5.18민주화운동</span></li>
                <li><span></span></li>
                <li><span>광주민주화운동</span></li>
                <li><span>오월정신</span></li>
                <li><span>민주화운동진상규명</span></li>
                <li><span>헬기사격</span></li>
                <li><span>5.18기념재단</span></li>
                <li><span>진상규명</span></li>
                <li><span>사자명예훼손</span></li>
                <li><span>오월영령</span></li>
                <li><span>민주인권평화</span></li>
                <li><span>민주화운동기록관</span></li>
                <li><span>배여사</span></li>
                <li><span>민주의문</span></li>
                <li><span>운동기록관</span></li>
                <li><span>오월어머니집</span></li>
                <li><span>민주영령</span></li>
                <li><span>사격목격</span></li>
                <li><span>역사왜곡처벌</span></li>
                <li><span>국가폭력</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>5</span>건물붕괴사고</div>
            <ol>
                <li><span>아이파크붕괴사고</span></li>
                <li><span>건물붕괴사고</span></li>
                <li><span>사고발생</span></li>
                <li><span>학동4구역</span></li>
                <li><span>타워크레인</span></li>
                <li><span>실종자수색작업</span></li>
                <li><span>아파트붕괴사고</span></li>
                <li><span>철거건물붕괴</span></li>
                <li><span>광주화정아이파크</span></li>
                <li><span>중대재해처벌법</span></li>
                <li><span>실종자가족</span></li>
                <li><span>구조작업</span></li>
                <li><span>신축아파트붕괴</span></li>
                <li><span>외벽붕괴사고</span></li>
                <li><span>화정아이파크붕괴</span></li>
                <li><span>철거공사</span></li>
                <li><span>건물붕괴참사</span></li>
                <li><span>공사붕괴사고</span></li>
                <li><span>철거중</span></li>
                <li><span>5층건물</span></li>
            </ol>
        </div>
        `,
        daejeon: `
        <div class="keyword-box">
            <div><span>1</span>도시/지역개발</div>
            <ol>
                <li><span>충청권광역철도</span></li>
                <li><span>대덕특구</span></li>
                <li><span>지하층지상</span></li>
                <li><span>대전도시공사</span></li>
                <li><span>유성복합터미널</span></li>
                <li><span>국제과학 비즈니스벨트</span></li>
                <li><span>힐스테이트도안</span></li>
                <li><span>충청권메가시티</span></li>
                <li><span>바이오랩허브</span></li>
                <li><span>국가철도망구축계획</span></li>
                <li><span>도안신도시</span></li>
                <li><span>혁신도시지정</span></li>
                <li><span>대전세종연구원</span></li>
                <li><span>주거용오피스텔</span></li>
                <li><span>베이스볼드림파크</span></li>
                <li><span>2호선트램</span></li>
                <li><span>도심융합</span></li>
                <li><span>연구개발 특구진흥재단</span></li>
                <li><span>지역균형뉴딜</span></li>
                <li><span>대전의료원설립</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>2</span>행정</div>
            <ol>
                <li><span>지역화폐</span></li>
                <li><span>어린이재활병원</span></li>
                <li><span>일자리경제진흥원</span></li>
                <li><span>세계지방정부연합</span></li>
                <li><span>민주시민교육</span></li>
                <li><span>주민참여예산</span></li>
                <li><span>대덕특구</span></li>
                <li><span>한국생명공학</span></li>
                <li><span>상수도사업본부</span></li>
                <li><span>행정수도이전</span></li>
                <li><span>공공배달앱</span></li>
                <li><span>바이오랩허브</span></li>
                <li><span>고향사랑기부제</span></li>
                <li><span>원자력안전교부세</span></li>
                <li><span>행정수도</span></li>
                <li><span>대전열병합발전</span></li>
                <li><span>현대화사업</span></li>
                <li><span>교통약자</span></li>
                <li><span>지역서점</span></li>
                <li><span>홍범도장군</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>3</span>사건사고</div>
            <ol>
                <li><span>소방당국</span></li>
                <li><span>독감백신</span></li>
                <li><span>한국타이어</span></li>
                <li><span>대응3단계</span></li>
                <li><span>악성민원</span></li>
                <li><span>반부패경제범죄수사대</span></li>
                <li><span>전세사기피해</span></li>
                <li><span>공직선거법위반</span></li>
                <li><span>자치경찰</span></li>
                <li><span>홍수주의보</span></li>
                <li><span>현대프리미엄아울렛</span></li>
                <li><span>정림동코스모스아파트</span></li>
                <li><span>진화작업</span></li>
                <li><span>대전교사노조</span></li>
                <li><span>침수피해</span></li>
                <li><span>화재원인</span></li>
                <li><span>교권보호</span></li>
                <li><span>아동학대예방</span></li>
                <li><span>발생한산불</span></li>
                <li><span>혈중알코올농도</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>4</span>문화/관광</div>
            <ol>
                <li><span>0시축제</span></li>
                <li><span>2027하계세계대학 경기대회</span></li>
                <li><span>충남도청사</span></li>
                <li><span>대전시립미술관</span></li>
                <li><span>전국기능경기대회</span></li>
                <li><span>대전신세계</span></li>
                <li><span>신세계아트 앤 사이언스</span></li>
                <li><span>국제대학스포츠</span></li>
                <li><span>원도심상권</span></li>
                <li><span>대전시립박물관</span></li>
                <li><span>대전컨벤션센터</span></li>
                <li><span>충남도청구간</span></li>
                <li><span>철도관사촌</span></li>
                <li><span>리그오브레전드</span></li>
                <li><span>국립현대미술관</span></li>
                <li><span>골령골</span></li>
                <li><span>엑스포과학공원</span></li>
                <li><span>대전국제와인</span></li>
                <li><span>민간인희생자</span></li>
                <li><span>일류경제도시</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>5</span>안보</div>
            <ol>
                <li><span>국립대전현충원</span></li>
                <li><span>국군간호사관학교</span></li>
                <li><span>홍범도장군</span></li>
                <li><span>무기개발</span></li>
                <li><span>졸업및임관식</span></li>
                <li><span>현충일추념식</span></li>
                <li><span>장군안장식</span></li>
                <li><span>46용사묘역</span></li>
                <li><span>첨단국방산업</span></li>
                <li><span>2023방위산업부품장비</span></li>
                <li><span>서해수호</span></li>
                <li><span>대전시유성구 국방과학연구소</span></li>
                <li><span>국방산업벨트</span></li>
                <li><span>국가유공자</span></li>
                <li><span>졸업생도</span></li>
                <li><span>보훈의달</span></li>
                <li><span>첨단국방산업단지</span></li>
                <li><span>호국영령</span></li>
                <li><span>국방산업육성</span></li>
                <li><span>임관식졸업</span></li>
            </ol>
        </div>
        `,
        ulsan: `
        <div class="keyword-box">
            <div><span>1</span>행정</div>
            <ol>
                <li><span>울산시장선거개입</span></li>
                <li><span>부유식해상풍력</span></li>
                <li><span>반구대암각화</span></li>
                <li><span>1호기경제성평가</span></li>
                <li><span>지역경제활성화</span></li>
                <li><span>울산페이</span></li>
                <li><span>태화강국가정원</span></li>
                <li><span>상수도사업본부</span></li>
                <li><span>민주시민교육</span></li>
                <li><span>울산대교</span></li>
                <li><span>염포산터널</span></li>
                <li><span>자치경찰</span></li>
                <li><span>장애인복지</span></li>
                <li><span>기후위기대응</span></li>
                <li><span>월성원전</span></li>
                <li><span>고향사랑기부제</span></li>
                <li><span>해상풍력사업</span></li>
                <li><span>아동학대예방</span></li>
                <li><span>경영안정자금</span></li>
                <li><span>원전오염수</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>2</span>사건사고</div>
            <ol>
                <li><span>울산시장선거개입</span></li>
                <li><span>소방당국</span></li>
                <li><span>선거개입하명수사</span></li>
                <li><span>공직선거법위반</span></li>
                <li><span>청와대울산</span></li>
                <li><span>인명피해</span></li>
                <li><span>고위공직자범죄수사</span></li>
                <li><span>진화작업</span></li>
                <li><span>태풍힌남노</span></li>
                <li><span>울산시청햇빛광장</span></li>
                <li><span>SK지오센트릭</span></li>
                <li><span>수사의혹사건</span></li>
                <li><span>공직선거법</span></li>
                <li><span>11호태풍</span></li>
                <li><span>공수처법</span></li>
                <li><span>시장선거공작</span></li>
                <li><span>사고견</span></li>
                <li><span>시세차익</span></li>
                <li><span>채널A사건</span></li>
                <li><span>하명수사</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>3</span>산업/노동</div>
            <ol>
                <li><span>사업추진</span></li>
                <li><span>부유식해상풍력</span></li>
                <li><span>자율운항선박</span></li>
                <li><span>선박성능실증센터</span></li>
                <li><span>한국조선해양</span></li>
                <li><span>태화강국가정원</span></li>
                <li><span>전기차전용공장</span></li>
                <li><span>고용안정선제대응</span></li>
                <li><span>한국동서발전</span></li>
                <li><span>넥슬렌</span></li>
                <li><span>현대차울산</span></li>
                <li><span>지역혁신플랫폼</span></li>
                <li><span>산업수도</span></li>
                <li><span>수소차</span></li>
                <li><span>조선해양산업</span></li>
                <li><span>일자리창출</span></li>
                <li><span>현대자동차울산</span></li>
                <li><span>도심항공교통</span></li>
                <li><span>실증사업</span></li>
                <li><span>수소전기차</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>4</span>지역정비/인프라</div>
            <ol>
                <li><span>울산과학기술원</span></li>
                <li><span>부산울산경남</span></li>
                <li><span>동남권메가시티</span></li>
                <li><span>수소전기트램</span></li>
                <li><span>가덕신공항</span></li>
                <li><span>특별연합규약</span></li>
                <li><span>태화강국가정원</span></li>
                <li><span>김해신공항</span></li>
                <li><span>원전해체산업</span></li>
                <li><span>도심융합</span></li>
                <li><span>공항건설</span></li>
                <li><span>신복로터리</span></li>
                <li><span>다운2지구</span></li>
                <li><span>동해남부선</span></li>
                <li><span>원전해체연구소</span></li>
                <li><span>에너지산업 융복합단지</span></li>
                <li><span>부산울산</span></li>
                <li><span>국가첨단전략산업</span></li>
                <li><span>정주여건개선</span></li>
                <li><span>지능형교통</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>5</span>문화/관광</div>
            <ol>
                <li><span>태화강국가정원</span></li>
                <li><span>울산시립미술관</span></li>
                <li><span>울주세계산악영화제</span></li>
                <li><span>전국체육대회</span></li>
                <li><span>전국장애인체전</span></li>
                <li><span>울산국제영화제</span></li>
                <li><span>전국소년체육대회</span></li>
                <li><span>영남알프스</span></li>
                <li><span>울산문화예술</span></li>
                <li><span>울산공업축제</span></li>
                <li><span>장애인체육</span></li>
                <li><span>알프스복합웰컴센터</span></li>
                <li><span>장생포고래문화</span></li>
                <li><span>태화강생태 관광협의회</span></li>
                <li><span>자연주의정원</span></li>
                <li><span>회관대공연장</span></li>
                <li><span>선암호수공원</span></li>
                <li><span>철새여행버스</span></li>
                <li><span>대왕암공원</span></li>
                <li><span>원터파크지구</span></li>
            </ol>
        </div>
        `,
        sejong: `
        <div class="keyword-box">
            <div><span>1</span>행정/행정중심복합도시</div>
            <ol>
                <li><span>세종의사당</span></li>
                <li><span>행정수도이전</span></li>
                <li><span>행정수도완성</span></li>
                <li><span>대통령세종집무실</span></li>
                <li><span>세종시이전</span></li>
                <li><span>세종2청사</span></li>
                <li><span>행정중심 복합도시건설청</span></li>
                <li><span>일회용컵보증금</span></li>
                <li><span>국회법개정안</span></li>
                <li><span>행복청</span></li>
                <li><span>여야합의</span></li>
                <li><span>지역화폐</span></li>
                <li><span>국가균형 발전위원회</span></li>
                <li><span>중앙행정기관</span></li>
                <li><span>2집무실</span></li>
                <li><span>국가물관리</span></li>
                <li><span>학생수</span></li>
                <li><span>국회분원</span></li>
                <li><span>지방시대</span></li>
                <li><span>정부부처</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>2</span>사건사고</div>
            <ol>
                <li><span>투기의혹</span></li>
                <li><span>특별수사본부</span></li>
                <li><span>대통령기록관</span></li>
                <li><span>전동킥보드</span></li>
                <li><span>수사의뢰</span></li>
                <li><span>정부공직자윤리</span></li>
                <li><span>배우자명의</span></li>
                <li><span>내부정보를이용</span></li>
                <li><span>의원직사퇴</span></li>
                <li><span>인명피해</span></li>
                <li><span>고위공직자</span></li>
                <li><span>월성1호기</span></li>
                <li><span>공수처</span></li>
                <li><span>담임교사</span></li>
                <li><span>금강보행교</span></li>
                <li><span>일장기를게양</span></li>
                <li><span>평화의소녀</span></li>
                <li><span>병원성 조류인플루엔자</span></li>
                <li><span>아동학대</span></li>
                <li><span>돼지열병</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>3</span>부동산</div>
            <ol>
                <li><span>상승폭</span></li>
                <li><span>행정수도이전</span></li>
                <li><span>규제지역</span></li>
                <li><span>윤의원</span></li>
                <li><span>이전기관종사자</span></li>
                <li><span>시세차익</span></li>
                <li><span>아파트매매가격</span></li>
                <li><span>임대차3법</span></li>
                <li><span>비규제지역</span></li>
                <li><span>청약경쟁</span></li>
                <li><span>주택공급</span></li>
                <li><span>세종시아파트값</span></li>
                <li><span>부동산문제</span></li>
                <li><span>관세평가분류원</span></li>
                <li><span>이전기관특별공급</span></li>
                <li><span>리첸시아파밀리</span></li>
                <li><span>집값상승</span></li>
                <li><span>부동산투기의혹</span></li>
                <li><span>땅투기의혹</span></li>
                <li><span>행복도시</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>4</span>지역활성화</div>
            <ol>
                <li><span>세종의사당</span></li>
                <li><span>국가철도망구축</span></li>
                <li><span>충청권광역철도</span></li>
                <li><span>2027하계 세계대학경기대회</span></li>
                <li><span>국립세종수목원</span></li>
                <li><span>충청권메가시티</span></li>
                <li><span>세종역신설</span></li>
                <li><span>세종호수공원</span></li>
                <li><span>행정수도완성</span></li>
                <li><span>금강보행교</span></li>
                <li><span>자율주행기술</span></li>
                <li><span>세종중앙공원</span></li>
                <li><span>자율주행버스</span></li>
                <li><span>광역생활경제</span></li>
                <li><span>스마트시티 국가시범도시</span></li>
                <li><span>시범운행지구</span></li>
                <li><span>한글사랑도시</span></li>
                <li><span>4개시도지사</span></li>
                <li><span>충청권지방은행</span></li>
                <li><span>충청권특별</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>5</span>노동/일자리</div>
            <ol>
                <li><span>최저임금위원회</span></li>
                <li><span>민주노총 공공운수노조</span></li>
                <li><span>근로자위원</span></li>
                <li><span>화물연대</span></li>
                <li><span>사용자위원</span></li>
                <li><span>세종컨벤션센터</span></li>
                <li><span>전국보건의료산업</span></li>
                <li><span>일자리으뜸기업</span></li>
                <li><span>내년도최저임금</span></li>
                <li><span>안전운임</span></li>
                <li><span>공공의료확충</span></li>
                <li><span>지방자치단체 일자리대상</span></li>
                <li><span>업무개시명령</span></li>
                <li><span>집단운송거부</span></li>
                <li><span>일자리창출</span></li>
                <li><span>최저임금인상</span></li>
                <li><span>총파업돌입</span></li>
                <li><span>불법의료근절</span></li>
                <li><span>근로자위원공익</span></li>
                <li><span>화물노동자</span></li>
            </ol>
        </div>
        `,
        gyunggi: `
        <div class="keyword-box">
            <div><span>1</span>사건사고</div>
            <ol>
                <li><span>전회장</span></li>
                <li><span>고위공직자 범죄수사처</span></li>
                <li><span>대북전단살포</span></li>
                <li><span>공직선거법위반</span></li>
                <li><span>공수처</span></li>
                <li><span>아프리카돼지열병</span></li>
                <li><span>덕평물류센터화재</span></li>
                <li><span>자유북한운동연합</span></li>
                <li><span>의원</span></li>
                <li><span>변호사비대납</span></li>
                <li><span>호우주의보</span></li>
                <li><span>흉기난동사건</span></li>
                <li><span>진화작업</span></li>
                <li><span>정의기억연대</span></li>
                <li><span>학생인권조례</span></li>
                <li><span>정치자금법위반</span></li>
                <li><span>산업안전보건</span></li>
                <li><span>폭염특보</span></li>
                <li><span>일본군위안부피해자</span></li>
                <li><span>물류창고화재</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>2</span>지역활성화</div>
            <ol>
                <li><span>국가철도망구축계획</span></li>
                <li><span>과천지식정보타운</span></li>
                <li><span>1호선</span></li>
                <li><span>김포골드라인</span></li>
                <li><span>경기주택도시</span></li>
                <li><span>용인반도체클러스터</span></li>
                <li><span>배후수요</span></li>
                <li><span>동탄2신도시</span></li>
                <li><span>서울모빌리티쇼</span></li>
                <li><span>공공주택지구</span></li>
                <li><span>신혼희망타운</span></li>
                <li><span>판교테크노밸리</span></li>
                <li><span>킨텍스</span></li>
                <li><span>5호선</span></li>
                <li><span>경의중앙선</span></li>
                <li><span>운정신도시</span></li>
                <li><span>에버랜드</span></li>
                <li><span>7호선</span></li>
                <li><span>4호선</span></li>
                <li><span>용인플랫폼시티</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>3</span>행정</div>
            <ol>
                <li><span>지역화폐</span></li>
                <li><span>경기북부특별자치</span></li>
                <li><span>공공배달앱</span></li>
                <li><span>경기도경제과학</span></li>
                <li><span>배달특급</span></li>
                <li><span>경기도일자리재단</span></li>
                <li><span>스마트팜</span></li>
                <li><span>김포시서울편입</span></li>
                <li><span>경기지역화폐</span></li>
                <li><span>학생인권조례</span></li>
                <li><span>골목상권</span></li>
                <li><span>기후동행카드</span></li>
                <li><span>지역경제활성화</span></li>
                <li><span>수술실CCTV설치</span></li>
                <li><span>대북전단살포</span></li>
                <li><span>수도권매립지</span></li>
                <li><span>화폐지급</span></li>
                <li><span>원전오염수</span></li>
                <li><span>후쿠시마오염수</span></li>
                <li><span>고향사랑기부제</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>4</span>안보</div>
            <ol>
                <li><span>국군의날기념식</span></li>
                <li><span>서해수호의날</span></li>
                <li><span>해군2함대</span></li>
                <li><span>육군특수전사령부</span></li>
                <li><span>천자봉함 노적봉함</span></li>
                <li><span>캠프형프리스</span></li>
                <li><span>자유의방패</span></li>
                <li><span>주한미군</span></li>
                <li><span>화력격멸훈련</span></li>
                <li><span>이번훈련</span></li>
                <li><span>한미연합연습</span></li>
                <li><span>한미동맹</span></li>
                <li><span>한미연합사단</span></li>
                <li><span>훈련실시</span></li>
                <li><span>드론작전사령부</span></li>
                <li><span>방패프리덤실드</span></li>
                <li><span>연합연습자유</span></li>
                <li><span>이날훈련</span></li>
                <li><span>한미장병</span></li>
                <li><span>지상작전사령부</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>5</span>부동산</div>
            <ol>
                <li><span>비규제지역</span></li>
                <li><span>규제지역</span></li>
                <li><span>분양예정</span></li>
                <li><span>일반분양</span></li>
                <li><span>신혼희망타운</span></li>
                <li><span>아파트값</span></li>
                <li><span>힐스테이트</span></li>
                <li><span>청약경쟁</span></li>
                <li><span>1호선</span></li>
                <li><span>주택공급</span></li>
                <li><span>공공주택지구</span></li>
                <li><span>신혼부부</span></li>
                <li><span>호반써밋</span></li>
                <li><span>대출규제</span></li>
                <li><span>교통호재</span></li>
                <li><span>공공임대주택</span></li>
                <li><span>지식정보타운</span></li>
                <li><span>기본주택</span></li>
                <li><span>조정대상지역지정</span></li>
                <li><span>동탄2신도시</span></li>
            </ol>
        </div>
        `,
        kangwon: `
        <div class="keyword-box">
            <div><span>1</span>자연재해/사건사고</div>
            <ol>
                <li><span>소방당국</span></li>
                <li><span>특보발효</span></li>
                <li><span>인명피해</span></li>
                <li><span>호우주의보</span></li>
                <li><span>폭염특보</span></li>
                <li><span>산불발생</span></li>
                <li><span>호우특보</span></li>
                <li><span>지진발생</span></li>
                <li><span>발생한산불</span></li>
                <li><span>건조특보</span></li>
                <li><span>호우경보</span></li>
                <li><span>태풍마이삭</span></li>
                <li><span>침수피해</span></li>
                <li><span>대형산불</span></li>
                <li><span>학교폭력</span></li>
                <li><span>강풍주의보</span></li>
                <li><span>피해학생</span></li>
                <li><span>대설특보</span></li>
                <li><span>인공수초섬</span></li>
                <li><span>선박전복사고</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>2</span>지역활성화/지역발전</div>
            <ol>
                <li><span>지역경제활성화</span></li>
                <li><span>설악산오색 케이블카설치</span></li>
                <li><span>생활형숙박시설</span></li>
                <li><span>비규제지역</span></li>
                <li><span>평창동계올림픽</span></li>
                <li><span>워케이션</span></li>
                <li><span>설악산국립공원</span></li>
                <li><span>세계지질공원</span></li>
                <li><span>망상1지구</span></li>
                <li><span>환동해본부</span></li>
                <li><span>서울양양고속도로</span></li>
                <li><span>한중문화타운</span></li>
                <li><span>폐광지역</span></li>
                <li><span>고향사랑기부제</span></li>
                <li><span>동해안권 경제자유구역</span></li>
                <li><span>세계산림엑스포</span></li>
                <li><span>동서고속화철도</span></li>
                <li><span>레고랜드코리아</span></li>
                <li><span>동해고속도로</span></li>
                <li><span>청소년올림픽대회</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>3</span>행정/복지</div>
            <ol>
                <li><span>강원특별자치도출범</span></li>
                <li><span>피해복구</span></li>
                <li><span>플라이강원</span></li>
                <li><span>인구감소지역</span></li>
                <li><span>자치도설치</span></li>
                <li><span>강원특수교육원</span></li>
                <li><span>강원평화특별자치</span></li>
                <li><span>자치경찰</span></li>
                <li><span>미래산업글로벌도시</span></li>
                <li><span>강원특별법</span></li>
                <li><span>스마트팜</span></li>
                <li><span>육아기본수당</span></li>
                <li><span>지역자원시설</span></li>
                <li><span>공공배달앱</span></li>
                <li><span>지역아동센터</span></li>
                <li><span>농촌일손</span></li>
                <li><span>학령인구감소</span></li>
                <li><span>자치분권</span></li>
                <li><span>비상소화장치</span></li>
                <li><span>출생아수</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>4</span>국방/북한</div>
            <ol>
                <li><span>대북전단살포</span></li>
                <li><span>자유북한운동연합</span></li>
                <li><span>화살머리고지 유해발굴</span></li>
                <li><span>탈북민</span></li>
                <li><span>국방부유해발굴</span></li>
                <li><span>발굴감식단</span></li>
                <li><span>남북관계발전법</span></li>
                <li><span>대북전단금지법</span></li>
                <li><span>군당국</span></li>
                <li><span>유해발굴</span></li>
                <li><span>자유의방패</span></li>
                <li><span>참전용사</span></li>
                <li><span>1달러지폐</span></li>
                <li><span>감시장비</span></li>
                <li><span>과학화전투</span></li>
                <li><span>기계화보병</span></li>
                <li><span>유해발굴작업</span></li>
                <li><span>대형풍선</span></li>
                <li><span>전투훈련단</span></li>
                <li><span>접경지역주민</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>5</span>보건/의료/환경</div>
            <ol>
                <li><span>아프리카돼지열병</span></li>
                <li><span>야생멧돼지폐사체</span></li>
                <li><span>원전오염수방류</span></li>
                <li><span>멸종위기야생생물</span></li>
                <li><span>방역당국</span></li>
                <li><span>양돈농가</span></li>
                <li><span>양돈농장</span></li>
                <li><span>발생농장</span></li>
                <li><span>바이러스검출</span></li>
                <li><span>멸종위기종</span></li>
                <li><span>돼지농장</span></li>
                <li><span>광역울타리</span></li>
                <li><span>후쿠시마오염수</span></li>
                <li><span>감염멧돼지</span></li>
                <li><span>방역조치</span></li>
                <li><span>기후위기</span></li>
                <li><span>차단방역</span></li>
                <li><span>숲조성</span></li>
                <li><span>원주세브란스</span></li>
                <li><span>자작나무숲</span></li>
            </ol>
        </div>
        `,
        chungbuk: `
        <div class="keyword-box">
            <div><span>1</span>지역개발/부동산</div>
            <ol>
                <li><span>과학기술 정보통신부</span></li>
                <li><span>수소추출기</span></li>
                <li><span>다목적 방사광가속기</span></li>
                <li><span>SK아이이테크놀로지</span></li>
                <li><span>푸르지오테크노폴리스센트럴</span></li>
                <li><span>영지웰푸르지오</span></li>
                <li><span>충청권광역철도</span></li>
                <li><span>청주도심통과</span></li>
                <li><span>수소충전인프라</span></li>
                <li><span>LG에너지솔루션</span></li>
                <li><span>국가철도망구축</span></li>
                <li><span>철도망구축계획</span></li>
                <li><span>에어로폴리스</span></li>
                <li><span>한화큐셀</span></li>
                <li><span>스테이트 청주센트럴</span></li>
                <li><span>수소출하센터</span></li>
                <li><span>수도권내륙선</span></li>
                <li><span>지역특화산업</span></li>
                <li><span>오송철도클러스터</span></li>
                <li><span>수소충전설비</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>2</span>자연재해</div>
            <ol>
                <li><span>최고강수확률</span></li>
                <li><span>궁평2지하차도</span></li>
                <li><span>과수화상병</span></li>
                <li><span>지하차도침수사고</span></li>
                <li><span>아프리카돼지</span></li>
                <li><span>돼지열병</span></li>
                <li><span>한파특보</span></li>
                <li><span>폭염특보</span></li>
                <li><span>호우주의보</span></li>
                <li><span>임시제방</span></li>
                <li><span>야생멧돼지</span></li>
                <li><span>복구봉사활동</span></li>
                <li><span>피해복구</span></li>
                <li><span>홍수경보</span></li>
                <li><span>병원성 조류인플루엔자</span></li>
                <li><span>미호강범람</span></li>
                <li><span>특별재난지역선포</span></li>
                <li><span>럼피스킨</span></li>
                <li><span>긴급구호물품</span></li>
                <li><span>홍수통제소</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>3</span>행정/상생사업</div>
            <ol>
                <li><span>교육지원청</span></li>
                <li><span>레이크파크 르네상스</span></li>
                <li><span>지역경제활성화</span></li>
                <li><span>고향사랑기부제</span></li>
                <li><span>인구감소지역</span></li>
                <li><span>중앙투자심사</span></li>
                <li><span>국제교육원</span></li>
                <li><span>행복교육지구</span></li>
                <li><span>행정사무감사</span></li>
                <li><span>지역균형뉴딜</span></li>
                <li><span>결식우려아동</span></li>
                <li><span>지방소멸대응</span></li>
                <li><span>문화복합시설</span></li>
                <li><span>발달장애</span></li>
                <li><span>소멸대응기금</span></li>
                <li><span>귀농귀촌</span></li>
                <li><span>자치연수원이전</span></li>
                <li><span>공공배달앱</span></li>
                <li><span>특수교육</span></li>
                <li><span>지방교육재정</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>4</span>사건사고</div>
            <ol>
                <li><span>동상철거</span></li>
                <li><span>전직대통령</span></li>
                <li><span>시멘트업계</span></li>
                <li><span>대통령동상</span></li>
                <li><span>대통령동상철거</span></li>
                <li><span>소방당국</span></li>
                <li><span>산불진화헬기</span></li>
                <li><span>불법촬영카메라</span></li>
                <li><span>폭력피해학생</span></li>
                <li><span>부동산투기의혹</span></li>
                <li><span>예비살인</span></li>
                <li><span>사망사고</span></li>
                <li><span>전직대통령예우</span></li>
                <li><span>시멘트업체</span></li>
                <li><span>전화금융사기</span></li>
                <li><span>광주민주화운동</span></li>
                <li><span>사람동상</span></li>
                <li><span>불법촬영</span></li>
                <li><span>특별재난지역선포</span></li>
                <li><span>카메라를설치</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>5</span>행사/문화</div>
            <ol>
                <li><span>무형문화재한지장</span></li>
                <li><span>일본군 위안부피해자</span></li>
                <li><span>안전체험관</span></li>
                <li><span>윤할머니</span></li>
                <li><span>문화재유존지역</span></li>
                <li><span>못난이김치</span></li>
                <li><span>세계무예마스터</span></li>
                <li><span>대한민국체육비전</span></li>
                <li><span>세계대학경기</span></li>
                <li><span>스포츠산업</span></li>
                <li><span>에코프라이데이</span></li>
                <li><span>전통한지제조</span></li>
                <li><span>할머니별세</span></li>
                <li><span>일본군위안부문제</span></li>
                <li><span>기술보유</span></li>
                <li><span>충청북도 무형문화재</span></li>
                <li><span>한지제조기술</span></li>
                <li><span>항저우아시안게임</span></li>
                <li><span>양국국가대표</span></li>
                <li><span>재난안전체험</span></li>
            </ol>
        </div>
        `,
        chungnam: `
        <div class="keyword-box">
            <div><span>1</span>산업</div>
            <ol>
                <li><span>협약체결</span></li>
                <li><span>업무협약</span></li>
                <li><span>규모조성</span></li>
                <li><span>사업추진</span></li>
                <li><span>일반산업단지</span></li>
                <li><span>종합영양수액</span></li>
                <li><span>서산테크노밸리</span></li>
                <li><span>아산디스플레이시티</span></li>
                <li><span>지역경제활성화</span></li>
                <li><span>한국중부발전</span></li>
                <li><span>지역주민</span></li>
                <li><span>충청남도농업기술원</span></li>
                <li><span>협약식</span></li>
                <li><span>빠르미</span></li>
                <li><span>대기오염물질</span></li>
                <li><span>상호협력</span></li>
                <li><span>지역경제</span></li>
                <li><span>SK에코플랜트</span></li>
                <li><span>대기질개선</span></li>
                <li><span>스타트업타운</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>2</span>사건사고</div>
            <ol>
                <li><span>최고강수확률</span></li>
                <li><span>조례안</span></li>
                <li><span>112치안종합상황실</span></li>
                <li><span>아침최저기온</span></li>
                <li><span>종합상황실</span></li>
                <li><span>충남도의회</span></li>
                <li><span>정보화장비</span></li>
                <li><span>호우주의보</span></li>
                <li><span>청문감사인권</span></li>
                <li><span>폭염주의보</span></li>
                <li><span>감사인권담당관</span></li>
                <li><span>산림당국</span></li>
                <li><span>공공안녕정보</span></li>
                <li><span>손해배상청구소송</span></li>
                <li><span>인명피해</span></li>
                <li><span>2차가해</span></li>
                <li><span>피해발생</span></li>
                <li><span>번개동반</span></li>
                <li><span>발생산불</span></li>
                <li><span>호우경보</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>3</span>부동산</div>
            <ol>
                <li><span>지하층지상</span></li>
                <li><span>수자인에코시티</span></li>
                <li><span>천안한양</span></li>
                <li><span>분양예정</span></li>
                <li><span>비규제지역</span></li>
                <li><span>규모조성</span></li>
                <li><span>1순위청약</span></li>
                <li><span>호반써밋</span></li>
                <li><span>커뮤니티시설</span></li>
                <li><span>한국부동산원</span></li>
                <li><span>아산탕정지구</span></li>
                <li><span>분양관계자</span></li>
                <li><span>민간임대아파트</span></li>
                <li><span>청약경쟁</span></li>
                <li><span>청약접수</span></li>
                <li><span>당첨자발표</span></li>
                <li><span>전매제한</span></li>
                <li><span>생활인프라</span></li>
                <li><span>지방중소도시</span></li>
                <li><span>부동산원청약</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>4</span>행정</div>
            <ol>
                <li><span>학생인권조례</span></li>
                <li><span>행정타운</span></li>
                <li><span>청수행정타운</span></li>
                <li><span>고향사랑기부제</span></li>
                <li><span>지원대상</span></li>
                <li><span>계획인사교류</span></li>
                <li><span>장애인복지</span></li>
                <li><span>일반산업단지</span></li>
                <li><span>규모조성</span></li>
                <li><span>천안아산고속도로</span></li>
                <li><span>평택민자고속도로</span></li>
                <li><span>수도권전철연장</span></li>
                <li><span>4차국가철도망구축</span></li>
                <li><span>퓨처일반산업단지</span></li>
                <li><span>인재개발원교육파견</span></li>
                <li><span>올해조성</span></li>
                <li><span>철도망구축계획</span></li>
                <li><span>산림자원연구소</span></li>
                <li><span>학생인권</span></li>
                <li><span>각종관공서</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>5</span>문화</div>
            <ol>
                <li><span>사회복지공동모금회</span></li>
                <li><span>기능경기대회</span></li>
                <li><span>삼성희망디딤돌</span></li>
                <li><span>도민참여숲</span></li>
                <li><span>세계대학경기대회</span></li>
                <li><span>새벽배송서비스</span></li>
                <li><span>보호종료청소년</span></li>
                <li><span>전국기능경기</span></li>
                <li><span>5개지역</span></li>
                <li><span>이번대회</span></li>
                <li><span>재해구호센터</span></li>
                <li><span>희망디딤돌센터</span></li>
                <li><span>전국재해구호</span></li>
                <li><span>참여숲조성</span></li>
                <li><span>센터건립</span></li>
                <li><span>침수가전무상수리</span></li>
                <li><span>하계세계대학</span></li>
                <li><span>대회참가</span></li>
                <li><span>지역사회</span></li>
                <li><span>업무협약</span></li>
            </ol>
        </div>
        `,
        jeonbuk: `
        <div class="keyword-box">
            <div><span>1</span>지역특성화/부동산</div>
            <ol>
                <li><span>탄소산업진흥원</span></li>
                <li><span>국가철도망구축</span></li>
                <li><span>국가식품클러스터</span></li>
                <li><span>일진하이솔</span></li>
                <li><span>농생명산업</span></li>
                <li><span>이솔루스</span></li>
                <li><span>새만금개발청</span></li>
                <li><span>기능경기대회</span></li>
                <li><span>특화단지지정</span></li>
                <li><span>힐스테이트</span></li>
                <li><span>2일반산업단지</span></li>
                <li><span>SK넥실리</span></li>
                <li><span>새만금신공항</span></li>
                <li><span>생명산업수도</span></li>
                <li><span>이차전지특화</span></li>
                <li><span>현대중공업 군산조선소</span></li>
                <li><span>수소생산클러스터</span></li>
                <li><span>군산형일자리</span></li>
                <li><span>전북특별자치</span></li>
                <li><span>특화단지유치</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>2</span>행정</div>
            <ol>
                <li><span>세계스카우트잼버리</span></li>
                <li><span>서남권해상풍력</span></li>
                <li><span>잼버리파행</span></li>
                <li><span>고향사랑기부제</span></li>
                <li><span>지역경제활성화</span></li>
                <li><span>전북특별자치</span></li>
                <li><span>잼버리조직위</span></li>
                <li><span>고향사랑기부금</span></li>
                <li><span>인구감소지역</span></li>
                <li><span>귀농귀촌</span></li>
                <li><span>스카우트대원</span></li>
                <li><span>자치경찰</span></li>
                <li><span>온열질환자</span></li>
                <li><span>군산형일자리</span></li>
                <li><span>스마트팜</span></li>
                <li><span>새만금개발청</span></li>
                <li><span>전북특별자치도</span></li>
                <li><span>전북형뉴딜</span></li>
                <li><span>지역균형뉴딜</span></li>
                <li><span>새만금예산삭감</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>3</span>날씨/재해/사건사고</div>
            <ol>
                <li><span>세계스카우트잼버리</span></li>
                <li><span>호우주의보/경보/특보</span></li>
                <li><span>최고강수확률</span></li>
                <li><span>장마전선</span></li>
                <li><span>온열질환자</span></li>
                <li><span>세계스카우트연맹</span></li>
                <li><span>폭염주의보</span></li>
                <li><span>홍수주의보</span></li>
                <li><span>익산장점마을</span></li>
                <li><span>폭염특보</span></li>
                <li><span>장점마을주민</span></li>
                <li><span>침수피해</span></li>
                <li><span>인명피해</span></li>
                <li><span>태풍카눈</span></li>
                <li><span>한파경보</span></li>
                <li><span>복구작업</span></li>
                <li><span>호우예비특보</span></li>
                <li><span>산사태위기경보</span></li>
                <li><span>집단암발병</span></li>
                <li><span>피해상황</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>4</span>문화/역사</div>
            <ol>
                <li><span>출토금동신발</span></li>
                <li><span>아시아태평양 마스터스</span></li>
                <li><span>고창봉덕리1호분</span></li>
                <li><span>세계소리축제</span></li>
                <li><span>태권도원</span></li>
                <li><span>동학농민혁명</span></li>
                <li><span>전주한옥마을</span></li>
                <li><span>국립무형유산</span></li>
                <li><span>태권도사관</span></li>
                <li><span>선수권대회</span></li>
                <li><span>국가지정문화재</span></li>
                <li><span>문화관광재단</span></li>
                <li><span>임실N치즈</span></li>
                <li><span>나주정촌고분</span></li>
                <li><span>글로벌게임잼</span></li>
                <li><span>콘텐츠융합진</span></li>
                <li><span>사관학교설립</span></li>
                <li><span>임실치즈테마파크</span></li>
                <li><span>국제태권</span></li>
                <li><span>보물지정</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>5</span>보건/의료/복지</div>
            <ol>
                <li><span>보건의료산업노조</span></li>
                <li><span>병원성 조류인플루엔자</span></li>
                <li><span>가금농장</span></li>
                <li><span>오리농장</span></li>
                <li><span>방역당국</span></li>
                <li><span>사회복지공동</span></li>
                <li><span>삼성희망디딤돌</span></li>
                <li><span>공동모금회</span></li>
                <li><span>해당농장</span></li>
                <li><span>군산의료원파업</span></li>
                <li><span>자원봉사센터</span></li>
                <li><span>닭오리</span></li>
                <li><span>럼피스킨</span></li>
                <li><span>항원검출</span></li>
                <li><span>고병원성</span></li>
                <li><span>전국보건의료산업</span></li>
                <li><span>인수공통전염병</span></li>
                <li><span>장애인복지</span></li>
                <li><span>원광대병원</span></li>
                <li><span>고병원성 조류인플루엔자</span></li>
            </ol>
        </div>
        `,
        jeonnam: `
        <div class="keyword-box">
            <div><span>1</span>지역발전/행정</div>
            <ol>
                <li><span>광주군공항이전</span></li>
                <li><span>과학기술정보통신부</span></li>
                <li><span>지역경제활성화</span></li>
                <li><span>광주민간공항이전</span></li>
                <li><span>포스코HY클린메탈</span></li>
                <li><span>인구감소지역</span></li>
                <li><span>해상풍력사업</span></li>
                <li><span>수산과학원</span></li>
                <li><span>강력레이저연구시설</span></li>
                <li><span>무안국제공항</span></li>
                <li><span>국립심뇌혈관센터</span></li>
                <li><span>고향사랑기부제</span></li>
                <li><span>에어로스페이스</span></li>
                <li><span>우주센터</span></li>
                <li><span>저장탱크</span></li>
                <li><span>삼성희망디딤돌</span></li>
                <li><span>스마트팜</span></li>
                <li><span>공항이전문제</span></li>
                <li><span>한국에너지공대</span></li>
                <li><span>의과대학설립</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>2</span>사건사고</div>
            <ol>
                <li><span>한국에너지공대</span></li>
                <li><span>희생자명예회복</span></li>
                <li><span>진상규명</span></li>
                <li><span>원전오염수방류</span></li>
                <li><span>피해발생</span></li>
                <li><span>사건특별법제정</span></li>
                <li><span>병원성 조류인플루엔자</span></li>
                <li><span>사고발생</span></li>
                <li><span>육용오리농장</span></li>
                <li><span>방역당국</span></li>
                <li><span>인명피해</span></li>
                <li><span>병원성여부</span></li>
                <li><span>소방당국</span></li>
                <li><span>가금농장</span></li>
                <li><span>사망사고</span></li>
                <li><span>항원검출</span></li>
                <li><span>바이러스검출</span></li>
                <li><span>중앙119구조</span></li>
                <li><span>농림축산검역</span></li>
                <li><span>혐의기소</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>3</span>날씨/자연재해</div>
            <ol>
                <li><span>최고강수확률</span></li>
                <li><span>폭염주의보</span></li>
                <li><span>호우주의보</span></li>
                <li><span>낮최고기온</span></li>
                <li><span>아침최저기온</span></li>
                <li><span>주의보발효</span></li>
                <li><span>중앙재난안전 대책본부</span></li>
                <li><span>천둥번개동반</span></li>
                <li><span>태풍</span></li>
                <li><span>서해/남해앞바다</span></li>
                <li><span>피해발생</span></li>
                <li><span>예상강수량</span></li>
                <li><span>침수피해</span></li>
                <li><span>바다의물결</span></li>
                <li><span>태풍주의보</span></li>
                <li><span>장마전선</span></li>
                <li><span>인명피해</span></li>
                <li><span>날씨예보</span></li>
                <li><span>지진발생</span></li>
                <li><span>강풍주의보</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>4</span>도시개발/부동산</div>
            <ol>
                <li><span>빛가람혁신도시</span></li>
                <li><span>포레나순천</span></li>
                <li><span>한국에너지공대</span></li>
                <li><span>지방중소도시</span></li>
                <li><span>비규제지역</span></li>
                <li><span>남악신도시</span></li>
                <li><span>분양예정</span></li>
                <li><span>지역주민</span></li>
                <li><span>커뮤니티시설</span></li>
                <li><span>브랜드아파트</span></li>
                <li><span>분양관계자</span></li>
                <li><span>생활형숙박</span></li>
                <li><span>생활인프라</span></li>
                <li><span>1순위청약</span></li>
                <li><span>청약경쟁</span></li>
                <li><span>무주택세대구성원</span></li>
                <li><span>부영주택</span></li>
                <li><span>민간임대아파트</span></li>
                <li><span>전남공동혁신도시</span></li>
                <li><span>한국부동산원</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>5</span>관광/행사</div>
            <ol>
                <li><span>순천만 국제정원박람회</span></li>
                <li><span>여수세계섬박람회</span></li>
                <li><span>다도해해상국립공원</span></li>
                <li><span>전국체전</span></li>
                <li><span>장애인체육회</span></li>
                <li><span>국제농업박람회</span></li>
                <li><span>전라남도체육대회</span></li>
                <li><span>국제수묵비엔날레</span></li>
                <li><span>한국섬진흥원</span></li>
                <li><span>유네스코 세계자연유산</span></li>
                <li><span>남도영화제</span></li>
                <li><span>장애인체전</span></li>
                <li><span>유니크베뉴</span></li>
                <li><span>관광자원</span></li>
                <li><span>스마트관광도시</span></li>
                <li><span>경도해양관광단지</span></li>
                <li><span>국가정원</span></li>
                <li><span>명량대첩축제</span></li>
                <li><span>국립난대수목원</span></li>
                <li><span>국제행사</span></li>
            </ol>
        </div>
        `,
        gyeongbuk: `
        <div class="keyword-box">
            <div><span>1</span>지역개발</div>
            <ol>
                <li><span>통합신공항</span></li>
                <li><span>대구경북</span></li>
                <li><span>과학기술정보통신부</span></li>
                <li><span>SK에코플랜트</span></li>
                <li><span>SK실트론</span></li>
                <li><span>스마트팜</span></li>
                <li><span>공항건설</span></li>
                <li><span>업무협약</span></li>
                <li><span>한국수력원자력</span></li>
                <li><span>배터리재활용</span></li>
                <li><span>포스코퓨처</span></li>
                <li><span>안전체험관</span></li>
                <li><span>양극재공장</span></li>
                <li><span>한화큐셀</span></li>
                <li><span>국가철도망구축</span></li>
                <li><span>규제자유</span></li>
                <li><span>한울1호기</span></li>
                <li><span>포항블루밸리</span></li>
                <li><span>월성1호기</span></li>
                <li><span>군공항이전</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>2</span>자연재해/사건사고</div>
            <ol>
                <li><span>최고강수확률</span></li>
                <li><span>주의보발효</span></li>
                <li><span>인명피해</span></li>
                <li><span>울릉도독도</span></li>
                <li><span>폭염주의보</span></li>
                <li><span>폭염특보</span></li>
                <li><span>피해복구</span></li>
                <li><span>호우주의보</span></li>
                <li><span>백색입자</span></li>
                <li><span>한파주의보</span></li>
                <li><span>수색작업</span></li>
                <li><span>재해구호협회</span></li>
                <li><span>지진발생</span></li>
                <li><span>태풍마이삭</span></li>
                <li><span>과수화상병</span></li>
                <li><span>식품의약</span></li>
                <li><span>산불발생</span></li>
                <li><span>태풍힌남노</span></li>
                <li><span>아프리카돼지</span></li>
                <li><span>입자발견</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>3</span>행정</div>
            <ol>
                <li><span>업무협약</span></li>
                <li><span>교육지원청</span></li>
                <li><span>고향사랑기부제</span></li>
                <li><span>중앙지방협력회의</span></li>
                <li><span>지역경제활성화</span></li>
                <li><span>포항교육지원</span></li>
                <li><span>지방소멸</span></li>
                <li><span>구미교육지원</span></li>
                <li><span>고향사랑기부금</span></li>
                <li><span>인구감소</span></li>
                <li><span>경산교육지원</span></li>
                <li><span>소멸위험지역</span></li>
                <li><span>피해구제지원금</span></li>
                <li><span>국가지질공원</span></li>
                <li><span>우수농특산물</span></li>
                <li><span>도시재생뉴딜산업</span></li>
                <li><span>귀어귀촌</span></li>
                <li><span>수소생산</span></li>
                <li><span>동해선철도상생</span></li>
                <li><span>관할구역변경</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>4</span>문화</div>
            <ol>
                <li><span>국가지정문화재</span></li>
                <li><span>무형문화재한지장</span></li>
                <li><span>샤인머스켓</span></li>
                <li><span>보물지정</span></li>
                <li><span>일제강점기</span></li>
                <li><span>경상북도유형문화재</span></li>
                <li><span>석조목조 아미타여래좌상</span></li>
                <li><span>천염기념물지정</span></li>
                <li><span>국립공원</span></li>
                <li><span>독도교육</span></li>
                <li><span>오층모전석탑</span></li>
                <li><span>독도재단</span></li>
                <li><span>해양경찰의날</span></li>
                <li><span>경북세일페스타</span></li>
                <li><span>외씨버선길</span></li>
                <li><span>단죄문</span></li>
                <li><span>지정문화재 천연기념물</span></li>
                <li><span>농업기술원 시험재배</span></li>
                <li><span>독도수호</span></li>
                <li><span>전통한지제조</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>5</span>부동산</div>
            <ol>
                <li><span>비규제지역</span></li>
                <li><span>두산위브</span></li>
                <li><span>힐스테이트</span></li>
                <li><span>분양권전매</span></li>
                <li><span>구미아이파크더샵</span></li>
                <li><span>일반분양</span></li>
                <li><span>생활인프라</span></li>
                <li><span>커뮤니티시설</span></li>
                <li><span>삼척센트럴두산</span></li>
                <li><span>지방중소도시</span></li>
                <li><span>한국부동산원</span></li>
                <li><span>브랜드아파트</span></li>
                <li><span>대구권광역철도</span></li>
                <li><span>센트럴두산</span></li>
                <li><span>청약경쟁</span></li>
                <li><span>포항아이파크</span></li>
                <li><span>교육시설</span></li>
                <li><span>공시가격현실화 공동논의</span></li>
                <li><span>편의시설</span></li>
                <li><span>미분양관리지역</span></li>
            </ol>
        </div>
        `,
        gyeongnam: `
        <div class="keyword-box">
            <div><span>1</span>행정</div>
            <ol>
                <li><span>교육지원청</span></li>
                <li><span>경상남도교육청</span></li>
                <li><span>반려동물진료비</span></li>
                <li><span>지속가능</span></li>
                <li><span>민간사업자</span></li>
                <li><span>지역혁신플랫폼</span></li>
                <li><span>업무협약</span></li>
                <li><span>경남도의회</span></li>
                <li><span>조례안</span></li>
                <li><span>마산로봇랜드</span></li>
                <li><span>창원교육지원</span></li>
                <li><span>지원대상</span></li>
                <li><span>로봇랜드재단</span></li>
                <li><span>동물진료비부담</span></li>
                <li><span>사업진행</span></li>
                <li><span>학교정책국</span></li>
                <li><span>지역사회</span></li>
                <li><span>행복교육지구</span></li>
                <li><span>삼성희망디딤돌</span></li>
                <li><span>진료비자율표시</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>2</span>인프라</div>
            <ol>
                <li><span>협약체결</span></li>
                <li><span>우주항공청</span></li>
                <li><span>사업추진</span></li>
                <li><span>가덕신공항</span></li>
                <li><span>남부내륙철도</span></li>
                <li><span>여수해저터널</span></li>
                <li><span>항공청설치</span></li>
                <li><span>김해신공항</span></li>
                <li><span>남해여수</span></li>
                <li><span>철도망구축계획</span></li>
                <li><span>부유식해상풍력</span></li>
                <li><span>국가철도망구축</span></li>
                <li><span>우주항공산업</span></li>
                <li><span>우주경제비전</span></li>
                <li><span>상호협력</span></li>
                <li><span>김해공항확장</span></li>
                <li><span>경상국립대학교</span></li>
                <li><span>항공청설립</span></li>
                <li><span>공항건설</span></li>
                <li><span>해저터널</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>3</span>사건사고</div>
            <ol>
                <li><span>최고강수확률</span></li>
                <li><span>아침최저기온</span></li>
                <li><span>낮최고기온</span></li>
                <li><span>호우주의보</span></li>
                <li><span>예상강수량</span></li>
                <li><span>원전오염수</span></li>
                <li><span>침수피해</span></li>
                <li><span>인명피해</span></li>
                <li><span>호우경보</span></li>
                <li><span>장마전선</span></li>
                <li><span>산불진화헬기</span></li>
                <li><span>오몀수방류</span></li>
                <li><span>피해발생</span></li>
                <li><span>공직선거법위반</span></li>
                <li><span>산림당국</span></li>
                <li><span>산불발생</span></li>
                <li><span>폭염주의보</span></li>
                <li><span>폭염특보</span></li>
                <li><span>선거법위반혐의</span></li>
                <li><span>혐의재판</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>4</span>지역행사</div>
            <ol>
                <li><span>지역경제활성화</span></li>
                <li><span>항노화엑스포</span></li>
                <li><span>전통의약</span></li>
                <li><span>세계차엑스포</span></li>
                <li><span>업무협약</span></li>
                <li><span>하동세계차</span></li>
                <li><span>졸업및임관식</span></li>
                <li><span>해군사관학교</span></li>
                <li><span>작업복공동세탁소</span></li>
                <li><span>국립현대미술관</span></li>
                <li><span>지역경제</span></li>
                <li><span>동남권메가시티</span></li>
                <li><span>산청세계전통</span></li>
                <li><span>엑스포조직</span></li>
                <li><span>활성화기여</span></li>
                <li><span>조직위</span></li>
                <li><span>공동주최</span></li>
                <li><span>항노화산업</span></li>
                <li><span>해군순항훈련</span></li>
                <li><span>동남권발전계획</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>5</span>부동산</div>
            <ol>
                <li><span>지하층지상</span></li>
                <li><span>비규제</span></li>
                <li><span>김해푸르지오하이엔드</span></li>
                <li><span>1순위청약</span></li>
                <li><span>일반분양</span></li>
                <li><span>공공지원민간 임대주택</span></li>
                <li><span>세상창원파크센트럴</span></li>
                <li><span>청약경쟁</span></li>
                <li><span>분양예정</span></li>
                <li><span>청약접수</span></li>
                <li><span>창원롯데캐슬</span></li>
                <li><span>주차공간</span></li>
                <li><span>무주택세대구성원</span></li>
                <li><span>커뮤니티시설</span></li>
                <li><span>규모조성</span></li>
                <li><span>가구조성</span></li>
                <li><span>청약가능</span></li>
                <li><span>당첨자발표</span></li>
                <li><span>한국부동산원</span></li>
                <li><span>생활인프라</span></li>
            </ol>
        </div>
        `,
        jeju: `
        <div class="keyword-box">
            <div><span>1</span>날씨/자연재해</div>
            <ol>
                <li><span>태풍힌남노</span></li>
                <li><span>폭염특보</span></li>
                <li><span>호우주의보</span></li>
                <li><span>발효중</span></li>
                <li><span>장마전선</span></li>
                <li><span>주의보발효</span></li>
                <li><span>중심기압</span></li>
                <li><span>한파특보</span></li>
                <li><span>풍랑특보</span></li>
                <li><span>초미세먼지농도</span></li>
                <li><span>예상적설량</span></li>
                <li><span>기온영하</span></li>
                <li><span>건조특보</span></li>
                <li><span>강풍특보</span></li>
                <li><span>태풍특보</span></li>
                <li><span>태풍영향</span></li>
                <li><span>비피해</span></li>
                <li><span>대설특보</span></li>
                <li><span>강풍반경</span></li>
                <li><span>지역폭염</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>2</span>사건사고</div>
            <ol>
                <li><span>해안가안전사고</span></li>
                <li><span>제주도소방</span></li>
                <li><span>소방당국</span></li>
                <li><span>공직선거법위반</span></li>
                <li><span>국가보안법위반</span></li>
                <li><span>반려동물</span></li>
                <li><span>너울성파도</span></li>
                <li><span>독감백신</span></li>
                <li><span>혈중알코올농도</span></li>
                <li><span>제주동물테마파크</span></li>
                <li><span>전동킥보드</span></li>
                <li><span>물결갯바위</span></li>
                <li><span>유기동물</span></li>
                <li><span>도로교통법</span></li>
                <li><span>살해혐의</span></li>
                <li><span>살인혐의</span></li>
                <li><span>반려견</span></li>
                <li><span>경비함정</span></li>
                <li><span>동물보호법위반</span></li>
                <li><span>성관계</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>3</span>지역발전/산업</div>
            <ol>
                <li><span>2공항건설</span></li>
                <li><span>제주삼다수</span></li>
                <li><span>공원민간특례사업</span></li>
                <li><span>제주드림타워</span></li>
                <li><span>제주신화월드</span></li>
                <li><span>제주도개발공사</span></li>
                <li><span>환경영향평가서</span></li>
                <li><span>제주용암수</span></li>
                <li><span>세계지질공원</span></li>
                <li><span>세계자연유산</span></li>
                <li><span>제주국제자유도시 개발센터</span></li>
                <li><span>제주특별자치도 개발공사</span></li>
                <li><span>2공항강행저지</span></li>
                <li><span>첨단과학기술</span></li>
                <li><span>도심항공교통/span></li>
                <li><span>15분도시</span></li>
                <li><span>제주영어교육도시</span></li>
                <li><span>삼다수생산</span></li>
                <li><span>2공항사업</span></li>
                <li><span>2공항전략 환경영향평가</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>4</span>행정</div>
            <ol>
                <li><span>자치경찰단</span></li>
                <li><span>진상규명</span></li>
                <li><span>개설허가취소</span></li>
                <li><span>일회용컵</span></li>
                <li><span>워케이션</span></li>
                <li><span>제주형 행정체제개편</span></li>
                <li><span>동부하수처리장</span></li>
                <li><span>3평화공원</span></li>
                <li><span>환경보전기여금</span></li>
                <li><span>고향사랑기부제</span></li>
                <li><span>의료기관개설</span></li>
                <li><span>희생자명예회복</span></li>
                <li><span>외국의료기관</span></li>
                <li><span>내국인진료</span></li>
                <li><span>녹지국제병원</span></li>
                <li><span>다회용컵</span></li>
                <li><span>지역화폐</span></li>
                <li><span>제주헬스케어타운</span></li>
                <li><span>고향사랑기부금</span></li>
                <li><span>국내첫영리병원</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span>5</span>환경/생태</div>
            <ol>
                <li><span>후쿠시마 오염수방류</span></li>
                <li><span>원전오염수</span></li>
                <li><span>남방큰돌고래</span></li>
                <li><span>일본정부</span></li>
                <li><span>멸종위기야생</span></li>
                <li><span>제주삼다수</span></li>
                <li><span>국제환경포럼</span></li>
                <li><span>수산과학원</span></li>
                <li><span>멸종위기종</span></li>
                <li><span>핵오염수</span></li>
                <li><span>비봉이</span></li>
                <li><span>세계지질공원</span></li>
                <li><span>방사능오염수</span></li>
                <li><span>염수해양투기</span></li>
                <li><span>기후위기</span></li>
                <li><span>해양쓰레기</span></li>
                <li><span>일본후쿠시마원전</span></li>
                <li><span>생물다양</span></li>
                <li><span>해양보호생물</span></li>
                <li><span>방사성물질</span></li>
            </ol>
        </div>
        `,
    };
    let sigunguList = {
        seoul: `
        <li class="jongno"><button type="button" data-sigungu="종로구">종로</a></li>
        <li class="junggu"><button type="button" data-sigungu="중구">중구</button></li>
        <li class="yongsan"><button type="button" data-sigungu="용산구">용산</button></li>
        <li class="seongdong"><button type="button" data-sigungu="성동구">성동</button></li>
        <li class="kwangjin"><button type="button" data-sigungu="광진구">광진</button></li>
        <li class="dongdaemun"><button type="button" data-sigungu="동대문구">동대문</button></li>
        <li class="jungnang"><button type="button" data-sigungu="중랑구">중랑</button></li>
        <li class="seongbuk"><button type="button" data-sigungu="성북구">성북</button></li>
        <li class="gangbuk"><button type="button" data-sigungu="강북구">강북</button></li>
        <li class="dobong"><button type="button" data-sigungu="도봉구">도봉</button></li>
        <li class="nowon"><button type="button" data-sigungu="노원구">노원</button></li>
        <li class="eunpyeong"><button type="button" data-sigungu="은평구">은평</button></li>
        <li class="seodaemun"><button type="button" data-sigungu="서대문구">서대문</button></li>
        <li class="mapo"><button type="button" data-sigungu="마포구">마포</button></li>
        <li class="yangcheon"><button type="button" data-sigungu="양천구">양천</button></li>
        <li class="kangseo"><button type="button" data-sigungu="강서구">강서</button></li>
        <li class="guro"><button type="button" data-sigungu="구로구">구로</button></li>
        <li class="geumcheon"><button type="button" data-sigungu="금천구">금천</button></li>
        <li class="yeongdeungpo"><button type="button" data-sigungu="영등포구">영등포</button></li>
        <li class="dongjak"><button type="button" data-sigungu="동작구">동작</button></li>
        <li class="gwanak"><button type="button" data-sigungu="관악구">관악</button></li>
        <li class="seocho"><button type="button" data-sigungu="서초구">서초</button></li>
        <li class="kangnam"><button type="button" data-sigungu="강남구">강남</button></li>
        <li class="songpa"><button type="button" data-sigungu="송파구">송파</button></li>
        <li class="kangdong"><button type="button" data-sigungu="강동구">강동</button></li>
        `,
        busan: `
        <li class="jung"><button type="button" data-sigungu="중구">중구</a></li>
		<li class="seo"><button type="button" data-sigungu="서구">서구</a></li>
		<li class="dong"><button type="button" data-sigungu="동구">동구</a></li>
		<li class="yeongdo"><button type="button" data-sigungu="영도구">영도구</a></li>
		<li class="busanjin"><button type="button" data-sigungu="부산진구">부산진구</a></li>
		<li class="donglae"><button type="button" data-sigungu="동래구">동래구</a></li>
		<li class="nam"><button type="button" data-sigungu="남구">남구</a></li>
		<li class="buk"><button type="button" data-sigungu="북구">북구</a></li>
		<li class="haeundae"><button type="button" data-sigungu="해운대구">해운대구</a></li>
		<li class="gijang"><button type="button" data-sigungu="기장군">기장군</a></li>
		<li class="saha"><button type="button" data-sigungu="사하구">사하구</a></li>
		<li class="geumjeong"><button type="button" data-sigungu="금정구">금정구</a></li>
		<li class="kangseo"><button type="button" data-sigungu="강서구">강서구</a></li>
		<li class="yeonje"><button type="button" data-sigungu="연제구">연제구</a></li>
		<li class="suyeong"><button type="button" data-sigungu="수영구">수영구</a></li>
		<li class="sasang"><button type="button" data-sigungu="사상구">사상구</a></li>
        `,
        daegu: `
        <li class="jung"><button type="button" data-sigungu="중구">중구</a></li>
		<li class="dong"><button type="button" data-sigungu="동구">동구</a></li>
		<li class="seo"><button type="button" data-sigungu="서구">서구</a></li>
		<li class="nam"><button type="button" data-sigungu="남구">남구</a></li>
		<li class="buk"><button type="button" data-sigungu="북구">북구</a></li>
		<li class="suseong"><button type="button" data-sigungu="수성구">수성구</a></li>
		<li class="dalseo"><button type="button" data-sigungu="달서구">달서구</a></li>
		<li class="dalseong"><button type="button" data-sigungu="달성군">달성군</a></li>
		<li class="gunwi"><button type="button" data-sigungu="군위군">군위군</a></li>
        `,
        incheon: `
        <li class="jung"><button type="button" data-sigungu="중구">중구</a></li>
		<li class="dong"><button type="button" data-sigungu="동구">동구</a></li>
		<li class="nam"><button type="button" data-sigungu="미추홀구">미추홀구</a></li>
		<li class="yeonsu"><button type="button" data-sigungu="연수구">연수구</a></li>
		<li class="namdong"><button type="button" data-sigungu="남동구">남동구</a></li>
		<li class="bupyeong"><button type="button" data-sigungu="부평구">부평구</a></li>
		<li class="gyeyang"><button type="button" data-sigungu="계양구">계양구</a></li>
		<li class="seo"><button type="button" data-sigungu="서구">서구</a></li>
		<li class="gwanghwa"><button type="button" data-sigungu="강화군">강화군</a></li>
		<li class="ongjin"><button type="button" data-sigungu="웅진군">웅진군</a></li>
        `,
        kwangju: `
        <li class="dong"><button type="button" data-sigungu="동구">동구</a></li>
		<li class="seo"><button type="button" data-sigungu="서구">서구</a></li>
		<li class="nam"><button type="button" data-sigungu="남구">남구</a></li>
		<li class="buk"><button type="button" data-sigungu="북구">북구</a></li>
		<li class="gwangsan"><button type="button" data-sigungu="광산구">광산구</a></li>
        `,
        daejeon: `
        <li class="dong"><button type="button" data-sigungu="동구">동구</a></li>
		<li class="jung"><button type="button" data-sigungu="중구">중구</a></li>
		<li class="seo"><button type="button" data-sigungu="서구">서구</a></li>
		<li class="yuseong"><button type="button" data-sigungu="유성구">유성구</a></li>
		<li class="daedeok"><button type="button" data-sigungu="대덕구">대덕구</a></li>
        `,
        ulsan: `
        <li class="jung"><button type="button" data-sigungu="중구">중구</a></li>
		<li class="nam"><button type="button" data-sigungu="남구">남구</a></li>
		<li class="dong"><button type="button" data-sigungu="동구">동구</a></li>
		<li class="buk"><button type="button" data-sigungu="북구">북구</a></li>
		<li class="ulju"><button type="button" data-sigungu="울주군">울주군</a></li>
        `,
        sejong: `
        <li class="sejong"><button type="button" data-sigungu="세종특별자치시">세종특별자치시</a></li>
        `,
        gyunggi: `
        <li class="uijeongbu"><button type="button" data-sigungu="의정부시">의정부시</a></li>
		<li class="gwangmyeong"><button type="button" data-sigungu="광명시">광명시</a></li>
		<li class="pyeongtaek"><button type="button" data-sigungu="평택시">평택시</a></li>
		<li class="yangju"><button type="button" data-sigungu="양주시">양주시</a></li>
		<li class="dongducheon"><button type="button" data-sigungu="동두천시">동두천시</a></li>
		<li class="gwacheon"><button type="button" data-sigungu="과천시">과천시</a></li>
		<li class="uiwang"><button type="button" data-sigungu="의왕시">의왕시</a></li>
		<li class="guri"><button type="button" data-sigungu="구리시">구리시</a></li>
		<li class="namyangju"><button type="button" data-sigungu="남양주시">남양주시</a></li>
		<li class="osan"><button type="button" data-sigungu="오산시">오산시</a></li>
		<li class="hwasung"><button type="button" data-sigungu="화성시">화성시</a></li>
		<li class="siheung"><button type="button" data-sigungu="시흥시">시흥시</a></li>
		<li class="gunpo"><button type="button" data-sigungu="군포시">군포시</a></li>
		<li class="hanam"><button type="button" data-sigungu="하남시">하남시</a></li>
		<li class="paju"><button type="button" data-sigungu="파주시">파주시</a></li>
		<li class="yeoju"><button type="button" data-sigungu="여주시">여주시</a></li>
		<li class="yichun"><button type="button" data-sigungu="이천시">이천시</a></li>
		<li class="ansung"><button type="button" data-sigungu="안성시">안성시</a></li>
		<li class="gimpo"><button type="button" data-sigungu="김포시">김포시</a></li>
		<li class="gwangju"><button type="button" data-sigungu="광주시">광주시</a></li>
		<li class="pocheon"><button type="button" data-sigungu="포천시">포천시</a></li>
		<li class="yeonchun"><button type="button" data-sigungu="연천군">연천군</a></li>
		<li class="yangpyeong"><button type="button" data-sigungu="양평군">양평군</a></li>
		<li class="gapyeong"><button type="button" data-sigungu="가평군">가평군</a></li>
		<li class="yongin"><button type="button" data-sigungu="용인시">용인시</a></li>
		<li class="goyang"><button type="button" data-sigungu="고양시">고양시</a></li>
		<li class="suwon"><button type="button" data-sigungu="수원시">수원시</a></li>
		<li class="bucheon"><button type="button" data-sigungu="부천시">부천시</a></li>
		<li class="ansan"><button type="button" data-sigungu="안산시">안산시</a></li>
		<li class="sungnam"><button type="button" data-sigungu="성남시">성남시</a></li>
		<li class="anyang"><button type="button" data-sigungu="안양시">안양시</a></li>
        `,
        kangwon: `
        <li class="chuncheon"><button type="button" data-sigungu="춘천시">춘천시</a></li>
		<li class="wonju"><button type="button" data-sigungu="원주시">원주시</a></li>
		<li class="gangneung"><button type="button" data-sigungu="강릉시">강릉시</a></li>
		<li class="donghae"><button type="button" data-sigungu="동해시">동해시</a></li>
		<li class="samcheok"><button type="button" data-sigungu="삼척시">삼척시</a></li>
		<li class="taebaek"><button type="button" data-sigungu="태백시">태백시</a></li>
		<li class="jeongseon"><button type="button" data-sigungu="정선군">정선군</a></li>
		<li class="sokcho"><button type="button" data-sigungu="속초시">속초시</a></li>
		<li class="goseoung"><button type="button" data-sigungu="고성군">고성군</a></li>
		<li class="yangyang"><button type="button" data-sigungu="양양군">양양군</a></li>
		<li class="inje"><button type="button" data-sigungu="인제군">인제군</a></li>
		<li class="hongcheon"><button type="button" data-sigungu="홍천군">홍천군</a></li>
		<li class="hwingseong"><button type="button" data-sigungu="횡성군">횡성군</a></li>
		<li class="yeongwol"><button type="button" data-sigungu="영월군">영월군</a></li>
		<li class="pyungchang"><button type="button" data-sigungu="평창군">평창군</a></li>
		<li class="hwacheon"><button type="button" data-sigungu="화천군">화천군</a></li>
		<li class="yanggu"><button type="button" data-sigungu="양구군">양구군</a></li>
		<li class="cheolwon"><button type="button" data-sigungu="철원군">철원군</a></li>
        `,
        chungbuk: `
        <li class="chungju"><button type="button" data-sigungu="충주시">충주시</a></li>
		<li class="jecheon"><button type="button" data-sigungu="제천시">제천시</a></li>
		<li class="danyang"><button type="button" data-sigungu="단양군">단양군</a></li>
		<li class="yeongdong"><button type="button" data-sigungu="영동군">영동군</a></li>
		<li class="boeun"><button type="button" data-sigungu="보은군">보은군</a></li>
		<li class="okchun"><button type="button" data-sigungu="옥천군">옥천군</a></li>
		<li class="eumsung"><button type="button" data-sigungu="음성군">음성군</a></li>
		<li class="jincheon"><button type="button" data-sigungu="진천군">진천군</a></li>
		<li class="gwisan"><button type="button" data-sigungu="괴산군">괴산군</a></li>
		<li class="jeungpyeong"><button type="button" data-sigungu="증평군">증평군</a></li>
		<li class="cheongju"><button type="button" data-sigungu="청주시">청주시</a></li>
        `,
        chungnam: `
        <li class="gongju"><button type="button" data-sigungu="공주시">공주시</a></li>
		<li class="boryeong"><button type="button" data-sigungu="보령시">보령시</a></li>
		<li class="asan"><button type="button" data-sigungu="아산시">아산시</a></li>
		<li class="seosan"><button type="button" data-sigungu="서산시">서산시</a></li>
		<li class="taean"><button type="button" data-sigungu="태안군">태안군</a></li>
		<li class="geumsan"><button type="button" data-sigungu="금산군">금산군</a></li>
		<li class="nonsan"><button type="button" data-sigungu="논산시">논산시</a></li>
		<li class="gyeryong"><button type="button" data-sigungu="계룡시">계룡시</a></li>
		<li class="buyeo"><button type="button" data-sigungu="부여군">부여군</a></li>
		<li class="seocheon"><button type="button" data-sigungu="서천군">서천군</a></li>
		<li class="hongsung"><button type="button" data-sigungu="홍성군">홍성군</a></li>
		<li class="chungyang"><button type="button" data-sigungu="청양군">청양군</a></li>
		<li class="yesan"><button type="button" data-sigungu="예산군">예산군</a></li>
		<li class="dangjin"><button type="button" data-sigungu="당진시">당진시</a></li>
		<li class="cheonan"><button type="button" data-sigungu="천안시">천안시</a></li>
        `,
        jeonbuk: `
        <li class="gunsan"><button type="button" data-sigungu="군산시">군산시</a></li>
		<li class="iksan"><button type="button" data-sigungu="익산시">익산시</a></li>
		<li class="jungep"><button type="button" data-sigungu="정읍시">정읍시</a></li>
		<li class="namwon"><button type="button" data-sigungu="남원시">남원시</a></li>
		<li class="gimje"><button type="button" data-sigungu="김제시">김제시</a></li>
		<li class="wanju"><button type="button" data-sigungu="완주군">완주군</a></li>
		<li class="jinan"><button type="button" data-sigungu="진안군">진안군</a></li>
		<li class="muju"><button type="button" data-sigungu="무주군">무주군</a></li>
		<li class="jangsu"><button type="button" data-sigungu="장수군">장수군</a></li>
		<li class="imsil"><button type="button" data-sigungu="임실군">임실군</a></li>
		<li class="sunchang"><button type="button" data-sigungu="순창군">순창군</a></li>
		<li class="gochang"><button type="button" data-sigungu="고창군">고창군</a></li>
		<li class="buan"><button type="button" data-sigungu="부안군">부안군</a></li>
		<li class="jeonju"><button type="button" data-sigungu="전주시">전주시</a></li>
        `,
        jeonnam: `
        <li class="mokpo"><button type="button" data-sigungu="목포시">목포시</a></li>
		<li class="yeosu"><button type="button" data-sigungu="여수시">여수시</a></li>
		<li class="suncheon"><button type="button" data-sigungu="순천시">순천시</a></li>
		<li class="naju"><button type="button" data-sigungu="나주시">나주시</a></li>
		<li class="gwangyang"><button type="button" data-sigungu="광양시">광양시</a></li>
		<li class="damyang"><button type="button" data-sigungu="담양군">담양군</a></li>
		<li class="jangseong"><button type="button" data-sigungu="장성군">장성군</a></li>
		<li class="gokseong"><button type="button" data-sigungu="곡성군">곡성군</a></li>
		<li class="gurye"><button type="button" data-sigungu="구례군">구례군</a></li>
		<li class="goheung"><button type="button" data-sigungu="고흥군">고흥군</a></li>
		<li class="boseong"><button type="button" data-sigungu="보성군">보성군</a></li>
		<li class="hwasun"><button type="button" data-sigungu="화순군">화순군</a></li>
		<li class="jangheung"><button type="button" data-sigungu="장흥군">장흥군</a></li>
		<li class="gangjin"><button type="button" data-sigungu="강진군">강진군</a></li>
		<li class="wando"><button type="button" data-sigungu="완도군">완도군</a></li>
		<li class="haenam"><button type="button" data-sigungu="해남군">해남군</a></li>
		<li class="jindo"><button type="button" data-sigungu="진도군">진도군</a></li>
		<li class="yeongam"><button type="button" data-sigungu="영암군">영암군</a></li>
		<li class="muan"><button type="button" data-sigungu="무안군">무안군</a></li>
		<li class="yeonggwang"><button type="button" data-sigungu="영광군">영광군</a></li>
		<li class="hampyeong"><button type="button" data-sigungu="함평군">함평군</a></li>
		<li class="sinan"><button type="button" data-sigungu="신안군">신안군</a></li>
        `,
        gyeongbuk: `
        <li class="ullung"><button type="button" data-sigungu="울릉군">울릉군</a></li>
		<li class="gyeongju"><button type="button" data-sigungu="경주시">경주시</a></li>
		<li class="gimcheon"><button type="button" data-sigungu="김천시">김천시</a></li>
		<li class="andong"><button type="button" data-sigungu="안동시">안동시</a></li>
		<li class="gumi"><button type="button" data-sigungu="구미시">구미시</a></li>
		<li class="yeongju"><button type="button" data-sigungu="영주시">영주시</a></li>
		<li class="yeongcheon"><button type="button" data-sigungu="영천시">영천시</a></li>
		<li class="sangju"><button type="button" data-sigungu="상주시">상주시</a></li>
		<li class="mungyeong"><button type="button" data-sigungu="문경시">문경시</a></li>
		<li class="yecheon"><button type="button" data-sigungu="예천군">예천군</a></li>
		<li class="gyeongsan"><button type="button" data-sigungu="경산시">경산시</a></li>
		<li class="cheongdo"><button type="button" data-sigungu="청도군">청도군</a></li>
		<li class="goryeong"><button type="button" data-sigungu="고령군">고령군</a></li>
		<li class="seongju"><button type="button" data-sigungu="성주군">성주군</a></li>
		<li class="chilgok"><button type="button" data-sigungu="칠곡군">칠곡군</a></li>
		<li class="wisung"><button type="button" data-sigungu="의성군">의성군</a></li>
		<li class="cheongsong"><button type="button" data-sigungu="청송군">청송군</a></li>
		<li class="yeongyang"><button type="button" data-sigungu="영양군">영양군</a></li>
		<li class="yeongdeok"><button type="button" data-sigungu="영덕군">영덕군</a></li>
		<li class="bonghwa"><button type="button" data-sigungu="봉화군">봉화군</a></li>
		<li class="uljin"><button type="button" data-sigungu="울진군">울진군</a></li>
		<li class="pohang"><button type="button" data-sigungu="포항시">포항시</a></li>
        `,
        gyeongnam: `
        <li class="jinju"><button type="button" data-sigungu="진주시">진주시</a></li>
		<li class="tongyeong"><button type="button" data-sigungu="통영시">통영시</a></li>
		<li class="goseong"><button type="button" data-sigungu="고성군">고성군</a></li>
		<li class="sacheon"><button type="button" data-sigungu="사천시">사천시</a></li>
		<li class="gimhae"><button type="button" data-sigungu="김해시">김해시</a></li>
		<li class="milyang"><button type="button" data-sigungu="밀양시">밀양시</a></li>
		<li class="geoje"><button type="button" data-sigungu="거제시">거제시</a></li>
		<li class="wiryeong"><button type="button" data-sigungu="의령군">의령군</a></li>
		<li class="haman"><button type="button" data-sigungu="함안군">함안군</a></li>
		<li class="changyeong"><button type="button" data-sigungu="창녕군">창녕군</a></li>
		<li class="yangsan"><button type="button" data-sigungu="양산시">양산시</a></li>
		<li class="hadong"><button type="button" data-sigungu="하동군">하동군</a></li>
		<li class="namehae"><button type="button" data-sigungu="남해군">남해군</a></li>
		<li class="hamyang"><button type="button" data-sigungu="함양군">함양군</a></li>
		<li class="sancheong"><button type="button" data-sigungu="산청군">산청군</a></li>
		<li class="geochang"><button type="button" data-sigungu="거창군">거창군</a></li>
		<li class="hapcheon"><button type="button" data-sigungu="합천군">합천군</a></li>
		<li class="chaongwon"><button type="button" data-sigungu="창원시">창원시</a></li>
        `,
        jeju: `
        <li class="jeju"><button type="button" data-sigungu="제주시">제주시</a></li>
		<li class="seoguipo"><button type="button" data-sigungu="서귀포시">서귀포시</a></li>
        `,
    };
    let sigunguContentsList = {
        seoul: {
            종로구: `
            <div class="keyword-box">
                <div><span>1</span>종로구 더미데이터</div>
                <ol>
                    <li><span>주택공급</span></li>
                    <li><span>서울주택도시공사</span></li>
                    <li><span>신속통합기획</span></li>
                    <li><span>공공재건축</span></li>
                    <li><span>정비사업</span></li>
                    <li><span>공공재개발</span></li>
                    <li><span>9호선</span></li>
                    <li><span>공공임대주택</span></li>
                    <li><span>공공주택</span></li>
                    <li><span>김포골드라인</span></li>
                    <li><span>5호선</span></li>
                    <li><span>임대차</span> 3법</li>
                    <li><span>상승폭</span></li>
                    <li><span>신혼부부</span></li>
                    <li><span>역세권청년주택</span></li>
                    <li><span>규제완화</span></li>
                    <li><span>도시건축공동</span></li>
                    <li><span>재건축사업</span></li>
                    <li><span>토지거래허가구역지정</span></li>
                    <li><span>재건축단지</span></li>
                </ol>
            </div>
            `,
            중구: `
            <div class="keyword-box">
                <div><span>1</span>중구 더미데이터</div>
                <ol>
                    <li><span>주택공급</span></li>
                    <li><span>서울주택도시공사</span></li>
                    <li><span>신속통합기획</span></li>
                    <li><span>공공재건축</span></li>
                    <li><span>정비사업</span></li>
                    <li><span>공공재개발</span></li>
                    <li><span>9호선</span></li>
                    <li><span>공공임대주택</span></li>
                    <li><span>공공주택</span></li>
                    <li><span>김포골드라인</span></li>
                    <li><span>5호선</span></li>
                    <li><span>임대차</span> 3법</li>
                    <li><span>상승폭</span></li>
                    <li><span>신혼부부</span></li>
                    <li><span>역세권청년주택</span></li>
                    <li><span>규제완화</span></li>
                    <li><span>도시건축공동</span></li>
                    <li><span>재건축사업</span></li>
                    <li><span>토지거래허가구역지정</span></li>
                    <li><span>재단지</span></li>
                </ol>
            </div>
            `,
        },
        busan: {
            해운대구: `
            <div class="keyword-box">
                <div><span>1</span>해운대 더미데이터</div>
                <ol>
                    <li><span>주택공급</span></li>
                    <li><span>서울주택도시공사</span></li>
                    <li><span>신속통합기획</span></li>
                    <li><span>공공재건축</span></li>
                    <li><span>정비사업</span></li>
                    <li><span>공공재개발</span></li>
                    <li><span>9호선</span></li>
                    <li><span>공공임대주택</span></li>
                    <li><span>공공주택</span></li>
                    <li><span>김포골드라인</span></li>
                    <li><span>5호선</span></li>
                    <li><span>임대차</span> 3법</li>
                    <li><span>상승폭</span></li>
                    <li><span>신혼부부</span></li>
                    <li><span>역세권청년주택</span></li>
                    <li><span>규제완화</span></li>
                    <li><span>도시건축공동</span></li>
                    <li><span>재건축사업</span></li>
                    <li><span>토지거래허가구역지정</span></li>
                    <li><span>재건축단지</span></li>
                </ol>
            </div>
            `,
            부산구: `
            <div class="keyword-box">
                <div><span>1</span>부산구 더미데이터</div>
                <ol>
                    <li><span>주택공급</span></li>
                    <li><span>서울주택도시공사</span></li>
                    <li><span>신속통합기획</span></li>
                    <li><span>공공재건축</span></li>
                    <li><span>정비사업</span></li>
                    <li><span>공공재개발</span></li>
                    <li><span>9호선</span></li>
                    <li><span>공공임대주택</span></li>
                    <li><span>공공주택</span></li>
                    <li><span>김포골드라인</span></li>
                    <li><span>5호선</span></li>
                    <li><span>임대차</span> 3법</li>
                    <li><span>상승폭</span></li>
                    <li><span>신혼부부</span></li>
                    <li><span>역세권청년주택</span></li>
                    <li><span>규제완화</span></li>
                    <li><span>도시건축공동</span></li>
                    <li><span>재건축사업</span></li>
                    <li><span>토지거래허가구역지정</span></li>
                    <li><span>재건축단지</span></li>
                </ol>
            </div>
            `,
        },
        incheon: {},
        kwangju: {},
        daejeon: {},
        ulsan: {},
        sejong: {},
        gyunggi: {},
        kangwon: {},
        chungbuk: {},
        chungnam: {},
        jeonbuk: {
            군산시: ``,
            익산시: ``,
            정읍시: ``,
            남원시: ``,
            김제시: ``,
            완주군: ``,
            진안군: ``,
            무주군: ``,
            장수군: ``,
            임실군: ``,
            순창군: ``,
            고창군: ``,
            부안군: ``,
            전주시: ``,
        },
        jeonnam: {
            목포시: `
            <div class="keyword-box">
                <div><span>1</span>사건사고</div>
                <ol>
                    <li><span>손전의원</span></li>
                    <li><span>어업지도선무궁화10호</span></li>
                    <li><span>해양수산부서해어업관리단</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>기소/재판</span></li>
                    <li><span>수노아파조직원</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>근대역사문화공원</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>부동산실명법위반</span></li>
                    <li><span>부동산매입</span></li>
                    <li><span>8호태풍</span></li>
                    <li><span>법정구속</span></li>
                    <li><span>폐쇄회로CCTV</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>원전오염수</span></li>
                    <li><span>매입혐의</span></li>
                    <li><span>살인혐의</span></li>
                    <li><span>부패방지법위반</span></li>
                    <li><span>여자친구</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>지역발전/세월호</div>
                <ol>
                    <li><span>수산식품수출단지조성</span></li>
                    <li><span>세월호선체</span></li>
                    <li><span>세월호참사주기</span></li>
                    <li><span>이동식전원공급시스템</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>예비문화도시</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>선상추모식</span></li>
                    <li><span>공공어린이재활의료센터</span></li>
                    <li><span>선체앞</span></li>
                    <li><span>전기추진</span></li>
                    <li><span>청년마을</span></li>
                    <li><span>닥터헬기</span></li>
                    <li><span>진상규명</span></li>
                    <li><span>솔레노이드밸브고착</span></li>
                    <li><span>대양산단</span></li>
                    <li><span>넥스트로컬</span></li>
                    <li><span>친환경선박산업</span></li>
                    <li><span>선박해양플랜트연구소</span></li>
                    <li><span>사회적참사</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>관광/행사</div>
                <ol>
                    <li><span>국립호남권생물자원관</span></li>
                    <li><span>김대중노벨평화상기념관</span></li>
                    <li><span>근대역사문화공간</span></li>
                    <li><span>목포문학박람회</span></li>
                    <li><span>2028세계섬엑스포유치</span></li>
                    <li><span>관광거점도시</span></li>
                    <li><span>목포해상W쇼</span></li>
                    <li><span>목포의눈물</span></li>
                    <li><span>국제수묵비엔날레</span></li>
                    <li><span>전국장애인체전</span></li>
                    <li><span>목포뮤직플레이</span></li>
                    <li><span>목재문화체험장</span></li>
                    <li><span>104회전국체전</span></li>
                    <li><span>평화광장</span></li>
                    <li><span>미식문화갤러리</span></li>
                    <li><span>문학박람회</span></li>
                    <li><span>4대관광거점도시</span></li>
                    <li><span>바위문화타운</span></li>
                    <li><span>전국최초</span></li>
                    <li><span>복원화사업</span></li>
                </ol>
            </div>
            `,
            여수시: `
            <div class="keyword-box">
                <div><span>1</span>사건사고</div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>태풍</span></li>
                    <li><span>기소/구속/재판</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>아프가니스탄특별기여자</span></li>
                    <li><span>층간소음문제</span></li>
                    <li><span>전남여수해양경찰</span></li>
                    <li><span>해양경찰교육원</span></li>
                    <li><span>희생자명예회복</span></li>
                    <li><span>진상규명</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>출생신고</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>경비함정</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>상괭이사체</span></li>
                    <li><span>원전오염수</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>사건특별법</span></li>
                    <li><span>택시기사</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>관광/사업</div>
                <ol>
                    <li><span>여수세계섬박람회</span></li>
                    <li><span>생활형숙박시설</span></li>
                    <li><span>남해해저터널건설</span></li>
                    <li><span>여수해저터널</span></li>
                    <li><span>여수세계박람회장</span></li>
                    <li><span>경도해양관광단지</span></li>
                    <li><span>동북아LNG허브터미널</span></li>
                    <li><span>섬박람회성공개최</span></li>
                    <li><span>저장탱크</span></li>
                    <li><span>사건희생자위령비</span></li>
                    <li><span>스마트그린산단</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>광양만권경제자유구역</span></li>
                    <li><span>공사계획승인</span></li>
                    <li><span>지속가능</span></li>
                    <li><span>공공배달앱</span></li>
                    <li><span>국가철도망구축</span></li>
                    <li><span>여수광양항</span></li>
                    <li><span>1단계사업</span></li>
                    <li><span>에코에너지허브</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>중대재해</div>
                <ol>
                    <li><span>사고발생</span></li>
                    <li><span>산업안전보건법</span></li>
                    <li><span>중대재해처벌법</span></li>
                    <li><span>법위반혐의</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>폭발사고발생</span></li>
                    <li><span>중대재해법</span></li>
                    <li><span>현장실습</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>공장폭발사고</span></li>
                    <li><span>여천NCC공장폭발사고</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>잠수작업</span></li>
                    <li><span>사상자발생</span></li>
                    <li><span>안전보건관리</span></li>
                    <li><span>현장실습생</span></li>
                    <li><span>경영책임자</span></li>
                    <li><span>안전관리</span></li>
                    <li><span>업무상과실치사</span></li>
                    <li><span>사망사고</span></li>
                </ol>
            </div>
            `,
            순천시: `
            <div class="keyword-box">
                <div><span>1</span>산불/성범죄</div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>산림청중앙산불방지대책본부</span></li>
                    <li><span>산불발생</span></li>
                    <li><span>전자발찌훼손</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>기소/재판</span></li>
                    <li><span>산불2/3단계</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>건조한날씨</span></li>
                    <li><span>폐쇄회로CCTV</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>산불진화헬기</span></li>
                    <li><span>중대시민재해</span></li>
                    <li><span>안전조치</span></li>
                    <li><span>마을회관</span></li>
                    <li><span>산불영향구역</span></li>
                    <li><span>신체접촉</span></li>
                    <li><span>중대재해처벌법</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>문화/관광</div>
                <ol>
                    <li><span>순천만국제정원박람회</span></li>
                    <li><span>순천만국가정원</span></li>
                    <li><span>순천만정원박람회성공개최</span></li>
                    <li><span>순천만습지</span></li>
                    <li><span>순천만생태문화교육원</span></li>
                    <li><span>스카이큐브</span></li>
                    <li><span>정원박람회개막식</span></li>
                    <li><span>세계자연유산</span></li>
                    <li><span>순천만갯벌</span></li>
                    <li><span>국가정원지정</span></li>
                    <li><span>2023정원박람회</span></li>
                    <li><span>국제습지센터</span></li>
                    <li><span>오천그린광장</span></li>
                    <li><span>한국의갯벌</span></li>
                    <li><span>생물권보전</span></li>
                    <li><span>정원도시</span></li>
                    <li><span>지속가능</span></li>
                    <li><span>태화강국가정원</span></li>
                    <li><span>유네스코세계문화유산</span></li>
                    <li><span>순천문화재야행</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>행정/인프라</div>
                <ol>
                    <li><span>상병수당시범사업</span></li>
                    <li><span>순천만국제정원박람회</span></li>
                    <li><span>경전철전철화사업</span></li>
                    <li><span>포레나순천</span></li>
                    <li><span>e편한세상순천어반타워</span></li>
                    <li><span>에어로스페이스</span></li>
                    <li><span>순천만국가정원</span></li>
                    <li><span>삼성희망디딤돌</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>대기기간</span></li>
                    <li><span>지방중소도시</span></li>
                    <li><span>대한민국생태수도</span></li>
                    <li><span>순천사랑상품권</span></li>
                    <li><span>클린업환경센터</span></li>
                    <li><span>도심관통</span></li>
                    <li><span>트리마제순천</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>공공기관지방이전</span></li>
                    <li><span>여성친화도시</span></li>
                    <li><span>청약경쟁</span></li>
                </ol>
            </div>
            `,
            나주시: `
            <div class="keyword-box">
                <div><span>1</span>조류독감/사건사고</div>
                <ol>
                    <li><span>육용오리/가금농장</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>난방공사</span></li>
                    <li><span>기소</span></li>
                    <li><span>고병원성조류인플루엔자</span></li>
                    <li><span>항원검출</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>예방적살</span></li>
                    <li><span>방역당국</span></li>
                    <li><span>중앙사고수습본부</span></li>
                    <li><span>정밀검사</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>호우경보</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>병원성여부</span></li>
                    <li><span>살처분</span></li>
                    <li><span>야생조류</span></li>
                    <li><span>방역조치</span></li>
                    <li><span>발전소가동</span></li>
                    <li><span>나주SRF열병합발전소</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>지역발전/농업</div>
                <ol>
                    <li><span>과학기술정보통신부</span></li>
                    <li><span>남도의병역사박물관</span></li>
                    <li><span>빛가람혁신도시</span></li>
                    <li><span>다목적방사광가속기구축사업</span></li>
                    <li><span>국립원예특작과학원배연구소</span></li>
                    <li><span>난방공사</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>전남공동혁신도시</span></li>
                    <li><span>국가중요농업유산</span></li>
                    <li><span>나주배</span></li>
                    <li><span>농촌진흥청</span></li>
                    <li><span>나주사랑상품권</span></li>
                    <li><span>정주여건개선</span></li>
                    <li><span>스마트팜</span></li>
                    <li><span>산림자원연구소</span></li>
                    <li><span>사용후배터리</span></li>
                    <li><span>국가물관리</span></li>
                    <li><span>부지선정평가</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>영산강생태복원</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>한전공대</div>
                <ol>
                    <li><span>한국에너지공과대학교</span></li>
                    <li><span>한국에너지공대</span></li>
                    <li><span>산업통상자원중소벤처기업</span></li>
                    <li><span>한전공대설립</span></li>
                    <li><span>빛가람혁신도시</span></li>
                    <li><span>강력레이저연구시설</span></li>
                    <li><span>한전공대설립부지</span></li>
                    <li><span>대형연구시설유치</span></li>
                    <li><span>부영주택</span></li>
                    <li><span>에너지특화연구창업</span></li>
                    <li><span>부영그룹</span></li>
                    <li><span>한전공대특별법</span></li>
                    <li><span>비전선포식</span></li>
                    <li><span>에너지특화대학</span></li>
                    <li><span>대학교KENTECH켄택</span></li>
                    <li><span>나주혁신도시</span></li>
                    <li><span>유일의에너지</span></li>
                    <li><span>에너지신기술</span></li>
                    <li><span>전력관제센터</span></li>
                    <li><span>특혜논란</span></li>
                </ol>
            </div>
            `,
            광양시: `
            <div class="keyword-box">
                <div><span>1</span>사건사고</div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>경제사회노동위원회</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>기소/구속</span></li>
                    <li><span>호우경보</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>사회적대화</span></li>
                    <li><span>구조작업</span></li>
                    <li><span>산사태발생</span></li>
                    <li><span>부패방지법위반</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>80대여성</span></li>
                    <li><span>부동산투기의혹</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>긴급중앙집행위원회</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>안전조치</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>양극재</div>
                <ol>
                    <li><span>양극재공장</span></li>
                    <li><span>포스코필바리리튬솔루션</span></li>
                    <li><span>수산화리튬공장</span></li>
                    <li><span>포스코HY클린</span></li>
                    <li><span>포스코퓨처엠</span></li>
                    <li><span>하이니켈양극재생산</span></li>
                    <li><span>니켈코발트망간알루미늄</span></li>
                    <li><span>양극재생산능력</span></li>
                    <li><span>수소전기트럭</span></li>
                    <li><span>포스코광양제철</span></li>
                    <li><span>리튬샌산</span></li>
                    <li><span>전기차배터리</span></li>
                    <li><span>LG에너지솔루션</span></li>
                    <li><span>세계최대규모</span></li>
                    <li><span>고순도니켈</span></li>
                    <li><span>이차전지소재사업</span></li>
                    <li><span>광양LNG터미널</span></li>
                    <li><span>배터리핵심소재</span></li>
                    <li><span>핵심소재</span></li>
                    <li><span>양극재사업</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>부동산</div>
                <ol>
                    <li><span>여수광양항만공사</span></li>
                    <li><span>미분양관리지역</span></li>
                    <li><span>동문굿모닝힐맘시티</span></li>
                    <li><span>광양푸르지오센터파크</span></li>
                    <li><span>전남광양항</span></li>
                    <li><span>중흥S클래스</span></li>
                    <li><span>더샵광양라크포엠</span></li>
                    <li><span>지방중소도시</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>민간임대아파트</span></li>
                    <li><span>1순위청약</span></li>
                    <li><span>관리지역으로지정</span></li>
                    <li><span>미분양주택</span></li>
                    <li><span>사전심사</span></li>
                    <li><span>청약경쟁</span></li>
                    <li><span>분양보증예비심사</span></li>
                    <li><span>광양베이센트</span></li>
                </ol>
            </div>
            `,
            담양군: `
            <div class="keyword-box">
                <div><span>1</span>날씨/사건사고</div>
                <ol>
                    <li><span>폭염주의보</span></li>
                    <li><span>인명/시설피해</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>호우경보</span></li>
                    <li><span>기소</span></li>
                    <li><span>낮최고기온</span></li>
                    <li><span>공직선거법위반혐의</span></li>
                    <li><span>천둥번개동반</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>대설특보</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>경찰과소방</span></li>
                    <li><span>물폭탄</span></li>
                    <li><span>정보화장비</span></li>
                    <li><span>응급복구</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>딸살해</span></li>
                    <li><span>인체조직기증</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>행정/농업</div>
                <ol>
                    <li><span>4차국가철도망구축</span></li>
                    <li><span>달빛내륙철도건설</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>공무원점심시간휴무</span></li>
                    <li><span>지역활력타운조성</span></li>
                    <li><span>달빛고속철도건설사업</span></li>
                    <li><span>지역사회공헌인정기업</span></li>
                    <li><span>고향사랑기부금</span></li>
                    <li><span>씨간장</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>지방소멸위기</span></li>
                    <li><span>신규사업</span></li>
                    <li><span>메리퀸</span></li>
                    <li><span>토마토농가</span></li>
                    <li><span>고속철도특별법</span></li>
                    <li><span>주민자치센터</span></li>
                    <li><span>반려유기동물</span></li>
                    <li><span>담양사랑상품권</span></li>
                    <li><span>지역균형뉴딜</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>관광/유네스코</div>
                <ol>
                    <li><span>에코센터호남기후변화체험관</span></li>
                    <li><span>세계지질공원</span></li>
                    <li><span>세계중요농업유산</span></li>
                    <li><span>민족민주열사묘역</span></li>
                    <li><span>민주동지회가비석일부</span></li>
                    <li><span>국립한국정원문화원</span></li>
                    <li><span>무등산권유네스코세계</span></li>
                    <li><span>518민주화운동</span></li>
                    <li><span>대나무밭농업</span></li>
                    <li><span>무등산권세계</span></li>
                    <li><span>키즈랜트캠핑</span></li>
                    <li><span>담양대나무축제</span></li>
                    <li><span>담빛문화지구</span></li>
                    <li><span>국가정원</span></li>
                    <li><span>공원재인증</span></li>
                    <li><span>유산에등재</span></li>
                    <li><span>4개지자체</span></li>
                    <li><span>죽녹원</span></li>
                    <li><span>정원산업육성</span></li>
                    <li><span>지질명소</span></li>
                </ol>
            </div>
            `,
            장성군: `
            <div class="keyword-box">
                <div><span>1</span>날씨/사건사고</div>
                <ol>
                    <li><span>호우경보</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>육용오리농장</span></li>
                    <li><span>기소</span></li>
                    <li><span>신고접수</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>대설특보</span></li>
                    <li><span>재산피해</span></li>
                    <li><span>장성경찰서</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>폭염주의보</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>홍수주의보</span></li>
                    <li><span>천둥번개</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>화재발생</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>지역발전</div>
                <ol>
                    <li><span>국립심뇌혈관센터설립</span></li>
                    <li><span>국립아열대작물실증센터</span></li>
                    <li><span>반도체특화단지조성</span></li>
                    <li><span>심뇌혈관연구소설립</span></li>
                    <li><span>첨단3지구</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>원자력안전교부세신설</span></li>
                    <li><span>심뇌혈관질환</span></li>
                    <li><span>장성사랑상품권</span></li>
                    <li><span>질병관리청</span></li>
                    <li><span>타당성재조사</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>농촌진흥청</span></li>
                    <li><span>카카오엔터프라이즈</span></li>
                    <li><span>푸드플랜</span></li>
                    <li><span>행정복지센터</span></li>
                    <li><span>전국원전동맹</span></li>
                    <li><span>장성호수변길</span></li>
                    <li><span>아열대작물재배</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>관광/문화</div>
                <ol>
                    <li><span>장성호수변길</span></li>
                    <li><span>축령산편백숲</span></li>
                    <li><span>내장산국립공원</span></li>
                    <li><span>전남장성군내장산</span></li>
                    <li><span>국가지정문화재</span></li>
                    <li><span>황금빛출렁다리</span></li>
                    <li><span>국립공원백양사</span></li>
                    <li><span>편백나무</span></li>
                    <li><span>행정복지센터</span></li>
                    <li><span>관광자원</span></li>
                    <li><span>목조아미타여래좌상</span></li>
                    <li><span>하늘숲길</span></li>
                    <li><span>백양사단풍</span></li>
                    <li><span>편백나무숲</span></li>
                    <li><span>명승지정</span></li>
                    <li><span>공원백양사일대</span></li>
                    <li><span>치유의숲</span></li>
                    <li><span>공간재창조</span></li>
                    <li><span>문화예술회관</span></li>
                    <li><span>장성아카데미</span></li>
                </ol>
            </div>
            `,
            곡성군: `
            <div class="keyword-box">
                <div><span>1</span>날씨재해</div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>산사태발생</span></li>
                    <li><span>기소</span></li>
                    <li><span>폭염주의보</span></li>
                    <li><span>구조작업</span></li>
                    <li><span>산사태위기경보</span></li>
                    <li><span>물폭탄</span></li>
                    <li><span>응급복구</span></li>
                    <li><span>호우경보</span></li>
                    <li><span>특별재난지역선포</span></li>
                    <li><span>안전조치</span></li>
                    <li><span>뒷산토사</span></li>
                    <li><span>마을주민</span></li>
                    <li><span>수해복구</span></li>
                    <li><span>재산피해</span></li>
                    <li><span>이재민발생</span></li>
                    <li><span>마을회관</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>지역사업</div>
                <ol>
                    <li><span>미래교육재단</span></li>
                    <li><span>지방소멸대응기금</span></li>
                    <li><span>농촌융복합사업</span></li>
                    <li><span>양수발전소유치</span></li>
                    <li><span>인구감소지역</span></li>
                    <li><span>희망복지기동서비스</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>10대고품질브랜드쌀</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>평생학습도시</span></li>
                    <li><span>섬진강기차마을</span></li>
                    <li><span>워케이션</span></li>
                    <li><span>농촌유학</span></li>
                    <li><span>학교밖청소년</span></li>
                    <li><span>지역균형뉴딜</span></li>
                    <li><span>치매안심센터</span></li>
                    <li><span>방마켓</span></li>
                    <li><span>곡성심청상품권</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>축제/관광</div>
                <ol>
                    <li><span>미래교육재단</span></li>
                    <li><span>섬진강기차마을</span></li>
                    <li><span>세계장미축제</span></li>
                    <li><span>섬진강침실습지</span></li>
                    <li><span>심청어린이대축제</span></li>
                    <li><span>침실습지훼손복원사업</span></li>
                    <li><span>증기기관차</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>워케이션</span></li>
                    <li><span>동악산생태축서식지</span></li>
                    <li><span>장미공원</span></li>
                    <li><span>한복문화주간</span></li>
                    <li><span>보존구역</span></li>
                    <li><span>프로그램운영</span></li>
                    <li><span>지속가능</span></li>
                    <li><span>창의교육</span></li>
                    <li><span>다양한프로그램</span></li>
                    <li><span>다양한체험</span></li>
                    <li><span>한복패션쇼</span></li>
                    <li><span>국제실험예술제</span></li>
                </ol>
            </div>
            `,
            구례군: `
            <div class="keyword-box">
                <div><span>1</span>수해/동식물</div>
                <ol>
                    <li><span>침수/수해피해</span></li>
                    <li><span>구례5일시장</span></li>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>복구작업</span></li>
                    <li><span>자원봉사자</span></li>
                    <li><span>봉사활동</span></li>
                    <li><span>피해복구</span></li>
                    <li><span>하천범람</span></li>
                    <li><span>수해복구</span></li>
                    <li><span>4대강사업</span></li>
                    <li><span>서시천제방</span></li>
                    <li><span>특별재난지역선포</span></li>
                    <li><span>지붕위</span></li>
                    <li><span>육용오리가금농장</span></li>
                    <li><span>환경분쟁조정</span></li>
                    <li><span>멸종위기종</span></li>
                    <li><span>119구조</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>행사/관광</div>
                <ol>
                    <li><span>산수유꽃축제</span></li>
                    <li><span>지리산국립공원</span></li>
                    <li><span>지리산케이블카설치</span></li>
                    <li><span>섬진강권통합관광벨트</span></li>
                    <li><span>구례5일시장</span></li>
                    <li><span>지리산역사문화관</span></li>
                    <li><span>지리산대화엄사권역</span></li>
                    <li><span>구례수목원</span></li>
                    <li><span>지리산온천관광지일원</span></li>
                    <li><span>국립공원공단</span></li>
                    <li><span>자연드림파크</span></li>
                    <li><span>4개지자체</span></li>
                    <li><span>장사씨름대회</span></li>
                    <li><span>산동면산수유마을</span></li>
                    <li><span>관광벨트조성</span></li>
                    <li><span>섬진강대숲길</span></li>
                    <li><span>꽃만개</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>공원계획변경</span></li>
                    <li><span>관광자원</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>복리/귀농귀촌</div>
                <ol>
                    <li><span>양정마을</span></li>
                    <li><span>지구단위종합복구사업</span></li>
                    <li><span>귀농귀촌주택개발</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>지붕위</span></li>
                    <li><span>농업창업지원센터</span></li>
                    <li><span>주택개발리츠사업</span></li>
                    <li><span>특별연합</span></li>
                    <li><span>서시천제방</span></li>
                    <li><span>임시주택</span></li>
                    <li><span>섬진강수해극복</span></li>
                    <li><span>평생학습도시</span></li>
                    <li><span>3주년생명위령제</span></li>
                    <li><span>패키지형귀농</span></li>
                    <li><span>어미소</span></li>
                    <li><span>체류형농업</span></li>
                    <li><span>마취총</span></li>
                    <li><span>인구감소지역</span></li>
                    <li><span>쌍둥이송아지</span></li>
                    <li><span>스마트복합쉼터</span></li>
                </ol>
            </div>
            `,
            고흥군: `
            <div class="keyword-box">
                <div><span>1</span>누리호</div>
                <ol>
                    <li><span>한국형발사체누리호</span></li>
                    <li><span>우주센터</span></li>
                    <li><span>과학기술정보통신부</span></li>
                    <li><span>1/2/3차발사</span></li>
                    <li><span>한국항공우주연구원</span></li>
                    <li><span>순수국내기술</span></li>
                    <li><span>성능검증위성</span></li>
                    <li><span>노리호발사</span></li>
                    <li><span>에어로스페이스</span></li>
                    <li><span>위성모사체</span></li>
                    <li><span>목표궤도안착</span></li>
                    <li><span>차세대소형위성</span></li>
                    <li><span>도심항공교통</span></li>
                    <li><span>지구저궤도</span></li>
                    <li><span>발사성공</span></li>
                    <li><span>종합연소시험</span></li>
                    <li><span>우주센터발사대</span></li>
                    <li><span>실증사업</span></li>
                    <li><span>실용위성</span></li>
                    <li><span>위성탑재</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>사건사고</div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>한국형발사체누리호</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>윤호21병원</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>우주센터</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>2/3차발사</span></li>
                    <li><span>병원에서불</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>기소</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>일산화탄소</span></li>
                    <li><span>입원환자</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>살인혐의</span></li>
                    <li><span>인근병원</span></li>
                    <li><span>피해규모</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>지역사업</div>
                <ol>
                    <li><span>임대형스마트팜혁신밸리</span></li>
                    <li><span>인구감소지역</span></li>
                    <li><span>드론특별자유화구역</span></li>
                    <li><span>수상태양광발전소</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>도심항공교통</span></li>
                    <li><span>마리안느와마가렛</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>귀농귀촌행복학교</span></li>
                    <li><span>어촌체험휴양마을</span></li>
                    <li><span>귀농어귀촌</span></li>
                    <li><span>우주센터</span></li>
                    <li><span>고흥드론센터</span></li>
                    <li><span>한화큐셀</span></li>
                    <li><span>전기차충전인프라</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>고향사랑기부금</span></li>
                    <li><span>스마트복합쉼터</span></li>
                    <li><span>뉴딜300사업</span></li>
                    <li><span>소멸위험지역</span></li>
                </ol>
            </div>
            `,
            보성군: `
            <div class="keyword-box">
                <div><span>1</span>사건사고</div>
                <ol>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>호우특보</span></li>
                    <li><span>버스정류장</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>천둥번개동반</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>안전조치</span></li>
                    <li><span>정전피해</span></li>
                    <li><span>원전오염수</span></li>
                    <li><span>재산피해</span></li>
                    <li><span>60대여성</span></li>
                    <li><span>악취민원</span></li>
                    <li><span>야산에서불</span></li>
                    <li><span>정전발생</span></li>
                    <li><span>전자발찌</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>행사/관광</div>
                <ol>
                    <li><span>보성세계차엑스포</span></li>
                    <li><span>한국의갯벌</span></li>
                    <li><span>유네스코세계자연유산등재</span></li>
                    <li><span>한국차문화공원</span></li>
                    <li><span>서편제보성소리축제</span></li>
                    <li><span>보성순천/서천갯벌</span></li>
                    <li><span>44차세계유산위원회</span></li>
                    <li><span>국가중요농업유산</span></li>
                    <li><span>화산섬과용암동굴</span></li>
                    <li><span>보성다향대축제</span></li>
                    <li><span>벌교갯벌레저뺄배대회</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>한국차박물관</span></li>
                    <li><span>구들장채석지</span></li>
                    <li><span>차품평대회</span></li>
                    <li><span>국가등록문화재</span></li>
                    <li><span>멸종위기종</span></li>
                    <li><span>생물다양</span></li>
                    <li><span>제암산자연휴양림</span></li>
                    <li><span>해양레저관광</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>행정/활성화</div>
                <ol>
                    <li><span>보성녹돈버거</span></li>
                    <li><span>유네스코세계자연유산</span></li>
                    <li><span>취약지역생활여건개조사업</span></li>
                    <li><span>한국의갯벌</span></li>
                    <li><span>한국의맛프로젝트</span></li>
                    <li><span>보성600사업</span></li>
                    <li><span>보성홍차아이스티제로</span></li>
                    <li><span>해양레저관광거점</span></li>
                    <li><span>국내산감자사용</span></li>
                    <li><span>포카칩과스윙칩</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>파이브가이즈</span></li>
                    <li><span>보성사랑상품권</span></li>
                    <li><span>공룡알화석</span></li>
                    <li><span>창녕갈릭버거</span></li>
                    <li><span>전철화사업</span></li>
                    <li><span>국내산식재료</span></li>
                    <li><span>활력증진사업</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>종합청렴도</span></li>
                </ol>
            </div>
            `,
            화순군: `
            <div class="keyword-box">
                <div><span>1</span>사건사고</div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>진실화해위</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>사망보험금</span></li>
                    <li><span>민간인희생사건</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>댐의저수율</span></li>
                    <li><span>기소</span></li>
                    <li><span>여자친구</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>피해여성</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>면허운전</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>인권침해사건</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>행정/지역발전</div>
                <ol>
                    <li><span>청년과신혼부부</span></li>
                    <li><span>백신안전기술지원센터</span></li>
                    <li><span>글로벌바이오랩허브</span></li>
                    <li><span>생물의약</span></li>
                    <li><span>소아청소년과의원</span></li>
                    <li><span>화순사랑상품권</span></li>
                    <li><span>화순백신산업</span></li>
                    <li><span>여성친화도시</span></li>
                    <li><span>임대주택사업</span></li>
                    <li><span>독립유공자후손</span></li>
                    <li><span>능주초등학교</span></li>
                    <li><span>정율성역사공원</span></li>
                    <li><span>임대보증금</span></li>
                    <li><span>임대주택지원사업</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>친화도시조성</span></li>
                    <li><span>친화도시인증</span></li>
                    <li><span>세계보건기구</span></li>
                    <li><span>고령친화도시</span></li>
                    <li><span>아동친화도시</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>환경/관광</div>
                <ol>
                    <li><span>멸종위기야생생물</span></li>
                    <li><span>남산공원국화동산</span></li>
                    <li><span>화순군서유리공룡화석지</span></li>
                    <li><span>익룡의군집생활</span></li>
                    <li><span>폐광지역</span></li>
                    <li><span>전국폐광지역</span></li>
                    <li><span>어린이직업체험</span></li>
                    <li><span>폐광지역주민</span></li>
                    <li><span>조기폐광</span></li>
                    <li><span>폐광지역경제</span></li>
                    <li><span>한국광업공단</span></li>
                    <li><span>익룡발자국</span></li>
                    <li><span>한국공룡연구센터</span></li>
                    <li><span>세계최초</span></li>
                    <li><span>폐광지역개발기금</span></li>
                    <li><span>화순군남산공원</span></li>
                    <li><span>둔치개밀</span></li>
                    <li><span>폐광지역시장</span></li>
                    <li><span>전국자연환경조사</span></li>
                    <li><span>세계거석테마파크</span></li>
                </ol>
            </div>
            `,
            장흥군: `
            <div class="keyword-box">
                <div><span>1</span>사건사고</div>
                <ol>
                    <li><span>전자발찌훼손</span></li>
                    <li><span>위치추적전자장치부착</span></li>
                    <li><span>기소/징역</span></li>
                    <li><span>광주보호관찰소</span></li>
                    <li><span>성폭행혐의</span></li>
                    <li><span>발찌착용</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>육용오리농장</span></li>
                    <li><span>성범죄전과자</span></li>
                    <li><span>계좌번호</span></li>
                    <li><span>장마전선</span></li>
                    <li><span>여성성폭행</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>공개수배</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>법률위반혐의</span></li>
                    <li><span>병원성조류인플루엔자</span></li>
                    <li><span>항원검출</span></li>
                    <li><span>아동학대치사</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>지역발전</div>
                <ol>
                    <li><span>국민안전체험관</span></li>
                    <li><span>SK에코플랜트</span></li>
                    <li><span>농촌융복합산업지구</span></li>
                    <li><span>대한민국체육인재개발원</span></li>
                    <li><span>아동친화도시</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>취약지역생활여건개조사업</span></li>
                    <li><span>공사중단건축물정비선도사업</span></li>
                    <li><span>의료폐기물소각기업</span></li>
                    <li><span>출생아수</span></li>
                    <li><span>여성친화도시인증</span></li>
                    <li><span>학교밖청소년</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>위담통합병원</span></li>
                    <li><span>바이오식품산업단지</span></li>
                    <li><span>아파트전세보증금</span></li>
                    <li><span>산지태양광</span></li>
                    <li><span>귀농어귀촌</span></li>
                    <li><span>노후공공건축물</span></li>
                    <li><span>고향사랑기부제</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>축제/관광</div>
                <ol>
                    <li><span>장흥물축제</span></li>
                    <li><span>편백숲우드랜드</span></li>
                    <li><span>살수대첩거리퍼레이드</span></li>
                    <li><span>반려견동반</span></li>
                    <li><span>반려동물동반</span></li>
                    <li><span>국가지정문화재명승</span></li>
                    <li><span>물축제주무대주변</span></li>
                    <li><span>천관산자연휴양림</span></li>
                    <li><span>정남진편백숲</span></li>
                    <li><span>지상최대</span></li>
                    <li><span>카카오게임즈</span></li>
                    <li><span>탐진강수변공원</span></li>
                    <li><span>소등섬</span></li>
                    <li><span>최대의물싸움</span></li>
                    <li><span>청태전</span></li>
                    <li><span>여름축제</span></li>
                    <li><span>프렌즈게임랜드</span></li>
                    <li><span>삼림휴양시설</span></li>
                    <li><span>숲속</span></li>
                    <li><span>탐진강</span></li>
                </ol>
            </div>
            `,
            강진군: `
            <div class="keyword-box">
                <div><span>1</span>묘소훼손/사건사고</div>
                <ol>
                    <li><span>대표부모묘소</span></li>
                    <li><span>공직선거법위반혐의</span></li>
                    <li><span>부모묘소훼손사건</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>기소</span></li>
                    <li><span>분묘발굴죄</span></li>
                    <li><span>문중인사</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>국가지정문화재</span></li>
                    <li><span>진실화해위</span></li>
                    <li><span>보물지정</span></li>
                    <li><span>조양가족</span></li>
                    <li><span>기보충작업</span></li>
                    <li><span>병원성조류인플루엔자</span></li>
                    <li><span>패가망신저주</span></li>
                    <li><span>기부행위</span></li>
                    <li><span>후손의절멸</span></li>
                    <li><span>하반신마비</span></li>
                    <li><span>가금농장</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>행정/지역발전</div>
                <ol>
                    <li><span>한복교복보급시범사업</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>쌀귀리융복합산업</span></li>
                    <li><span>스마트그린도시사업</span></li>
                    <li><span>인구감소지역</span></li>
                    <li><span>목재친화도시조성</span></li>
                    <li><span>지역아동센터</span></li>
                    <li><span>강진사랑상품권</span></li>
                    <li><span>지방소멸대응기금</span></li>
                    <li><span>청년마을</span></li>
                    <li><span>국가발전프로젝트</span></li>
                    <li><span>출산장려금</span></li>
                    <li><span>최종선정</span></li>
                    <li><span>여성친화도시</span></li>
                    <li><span>하우시스</span></li>
                    <li><span>육아수당</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>농촌융복합</span></li>
                    <li><span>삶의질</span></li>
                    <li><span>지역주민</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>문화관광/유산</div>
                <ol>
                    <li><span>강진만생태공원</span></li>
                    <li><span>연방죽생태순환수로농업시스템</span></li>
                    <li><span>강진청자축제</span></li>
                    <li><span>다산정약용</span></li>
                    <li><span>국가중요농업유산</span></li>
                    <li><span>병영면중고마을주민</span></li>
                    <li><span>어촌체험휴양마을</span></li>
                    <li><span>마량놀토수산시장</span></li>
                    <li><span>문화관광재단</span></li>
                    <li><span>바구니인가래로물고기</span></li>
                    <li><span>고려청자박물관</span></li>
                    <li><span>사의재</span></li>
                    <li><span>백운옥판차</span></li>
                    <li><span>가우도출렁다리</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>영랑시문학상</span></li>
                    <li><span>불금불파</span></li>
                    <li><span>체류형귀농</span></li>
                    <li><span>세계관개시설물</span></li>
                    <li><span>지역주민</span></li>
                </ol>
            </div>
            `,
            완도군: `
            <div class="keyword-box">
                <div><span>1</span>가뭄/사건사고</div>
                <ol>
                    <li><span>제한급수</span></li>
                    <li><span>2/4/6일급수</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>완도해양경찰서</span></li>
                    <li><span>원전오염수방류</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>태풍</span></li>
                    <li><span>4/6일단수</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>병물</span></li>
                    <li><span>최악의가뭄</span></li>
                    <li><span>기소</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>섬지역</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>민주화운동</span></li>
                    <li><span>물공급</span></li>
                    <li><span>물부족</span></li>
                    <li><span>화재발생</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>일가족 사망사건</div>
                <ol>
                    <li><span>조양가족</span></li>
                    <li><span>교외체험학습신청</span></li>
                    <li><span>송곡항인근</span></li>
                    <li><span>일가족</span></li>
                    <li><span>가족의차량</span></li>
                    <li><span>실종된조유나</span></li>
                    <li><span>휴대전화신호</span></li>
                    <li><span>폐쇄회로CCTV</span></li>
                    <li><span>완도에서실종</span></li>
                    <li><span>실종신고</span></li>
                    <li><span>차량인양</span></li>
                    <li><span>송곡항앞바다</span></li>
                    <li><span>차량발견</span></li>
                    <li><span>초등학교</span></li>
                    <li><span>수중수색</span></li>
                    <li><span>가족의아우디</span></li>
                    <li><span>국립과학수사</span></li>
                    <li><span>아버지의휴대전화</span></li>
                    <li><span>사망원인</span></li>
                    <li><span>조씨부부</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>해양산업/행정</div>
                <ol>
                    <li><span>해양치유산업</span></li>
                    <li><span>해양치유센터</span></li>
                    <li><span>해양바이오공동협력연구소</span></li>
                    <li><span>해양문화치유센터</span></li>
                    <li><span>국립난대수목원</span></li>
                    <li><span>자원활용</span></li>
                    <li><span>해양바이오산업</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>해양치유자원</span></li>
                    <li><span>해양치유프로그램</span></li>
                    <li><span>해양자원</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>해양기후치유</span></li>
                    <li><span>완도산다시마</span></li>
                    <li><span>생물권보전</span></li>
                    <li><span>해양치유공원</span></li>
                    <li><span>외국인계절근로자</span></li>
                    <li><span>해저케이블</span></li>
                    <li><span>중요농업유산</span></li>
                    <li><span>해양바이오연구센터</span></li>
                </ol>
            </div>
            `,
            해남군: `
            <div class="keyword-box">
                <div><span>1</span>재해/사건사고</div>
                <ol>
                    <li><span>지진발생</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>성충동약물치료</span></li>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>규모2.0이상</span></li>
                    <li><span>마로해역</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>기소</span></li>
                    <li><span>진실화해위</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>폭행혐의</span></li>
                    <li><span>누적강수량</span></li>
                    <li><span>진도어민</span></li>
                    <li><span>장마전선</span></li>
                    <li><span>60대여성</span></li>
                    <li><span>아동강제추행</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>지역발전/행정</div>
                <ol>
                    <li><span>농식품기후변화대응</span></li>
                    <li><span>솔라시도기업도시개발</span></li>
                    <li><span>지역거점스마트시티조성사업</span></li>
                    <li><span>기후변화대응센터</span></li>
                    <li><span>솔라시도태양광발전소</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>절임배추</span></li>
                    <li><span>장학사업기금</span></li>
                    <li><span>해남사랑상품권</span></li>
                    <li><span>국내최대규모</span></li>
                    <li><span>시범운행지구</span></li>
                    <li><span>고향사랑기부금</span></li>
                    <li><span>동물복지축산</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>가족어울림센터</span></li>
                    <li><span>국산품종농산물</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>솔라시도데이터센터</span></li>
                    <li><span>기후변화대응농업</span></li>
                    <li><span>미래도시</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>관광</div>
                <ol>
                    <li><span>해남땅끝마을</span></li>
                    <li><span>땅끝순례문화관</span></li>
                    <li><span>명량대첩축제</span></li>
                    <li><span>해남공룡박물관</span></li>
                    <li><span>명량해상케이블카</span></li>
                    <li><span>서해랑길</span></li>
                    <li><span>오시아노관광단지</span></li>
                    <li><span>남파랑길</span></li>
                    <li><span>공룡화석지</span></li>
                    <li><span>백련재문학의집</span></li>
                    <li><span>해남미남축제</span></li>
                    <li><span>코리아둘레길</span></li>
                    <li><span>울돌목해상</span></li>
                    <li><span>다나카유키오</span></li>
                    <li><span>달마고도</span></li>
                    <li><span>불창시설</span></li>
                    <li><span>물놀이체험</span></li>
                    <li><span>오시아노리조트호텔</span></li>
                    <li><span>해남우수영관광지</span></li>
                    <li><span>울돌목스카이워크</span></li>
                </ol>
            </div>
            `,
            진도군: `
            <div class="keyword-box">
                <div><span>1</span>재해/사건사고</div>
                <ol>
                    <li><span>합동무상수리팀</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>태풍</span></li>
                    <li><span>전도군서망항</span></li>
                    <li><span>경비함정</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>연안구조정</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>긴급이송</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>응급환자</span></li>
                    <li><span>마로해역</span></li>
                    <li><span>학교폭력</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>기소</span></li>
                    <li><span>구조작업</span></li>
                    <li><span>신체접촉</span></li>
                    <li><span>혈중알코올농도</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>관광/발전</div>
                <ol>
                    <li><span>진도대파크림크로켓버거</span></li>
                    <li><span>신비의바닷길축제</span></li>
                    <li><span>다도해해상국립공원</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>한국의맛프로젝트</span></li>
                    <li><span>취약지역생활여건개조사업</span></li>
                    <li><span>국가중요어업유산</span></li>
                    <li><span>토요민속여행</span></li>
                    <li><span>씨월드고속훼리</span></li>
                    <li><span>저탄소한우</span></li>
                    <li><span>산타모니카호</span></li>
                    <li><span>해상교량</span></li>
                    <li><span>운림산방</span></li>
                    <li><span>국립공원공단</span></li>
                    <li><span>민속문화예술특구</span></li>
                    <li><span>해양문화재연구소</span></li>
                    <li><span>해상케이블카</span></li>
                    <li><span>플라스틱저온열분해</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>한창그린홀딩스</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>세월호</div>
                <ol>
                    <li><span>헤월호참사주기</span></li>
                    <li><span>진도팽목함</span></li>
                    <li><span>선상추모식</span></li>
                    <li><span>국민해양안전관</span></li>
                    <li><span>세월호기억공간</span></li>
                    <li><span>세월호선체</span></li>
                    <li><span>진상규명</span></li>
                    <li><span>세월호침몰</span></li>
                    <li><span>사고해역</span></li>
                    <li><span>추모행사</span></li>
                    <li><span>416세월호참사가족협의회</span></li>
                    <li><span>기억식</span></li>
                    <li><span>팽목기억관</span></li>
                    <li><span>세월호희생자</span></li>
                    <li><span>시민상주모임</span></li>
                    <li><span>일반인희생자</span></li>
                    <li><span>사회적참사</span></li>
                    <li><span>단원고학생</span></li>
                    <li><span>세월호유가족</span></li>
                    <li><span>책임자처벌</span></li>
                </ol>
            </div>
            `,
            영암군: `
            <div class="keyword-box">
                <div><span>1</span>조류독감/사건사고</div>
                <ol>
                    <li><span>육용오리가금농장</span></li>
                    <li><span>고병원성조류인플루엔자</span></li>
                    <li><span>중앙사고수습본부</span></li>
                    <li><span>예방적살</span></li>
                    <li><span>방역당국</span></li>
                    <li><span>살처분</span></li>
                    <li><span>정밀검사</span></li>
                    <li><span>항원검출</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>진실화해위</span></li>
                    <li><span>병원성여부</span></li>
                    <li><span>확진판정</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>사육중</span></li>
                    <li><span>20대아들</span></li>
                    <li><span>발생농장</span></li>
                    <li><span>방역조치</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>출입통제</span></li>
                    <li><span>의심사례</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>선박/행정</div>
                <ol>
                    <li><span>현대삼호중공업건조계약체결</span></li>
                    <li><span>한국조선해양</span></li>
                    <li><span>선주사인도예정</span></li>
                    <li><span>이중연료추진엔진탑재</span></li>
                    <li><span>현대중공업그룹조선중간지주사</span></li>
                    <li><span>울산현대중공업현대미포조선건조</span></li>
                    <li><span>초대형원유운반선</span></li>
                    <li><span>급대형컨테이너선</span></li>
                    <li><span>액화천연가스LNG운반선</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>유럽소재선사</span></li>
                    <li><span>인구감수지역</span></li>
                    <li><span>기술력바탕</span></li>
                    <li><span>연간수주목표</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>오세아니아소재선사</span></li>
                    <li><span>액화석유가스LPG운반선</span></li>
                    <li><span>아시아소재선사</span></li>
                    <li><span>영암사랑상품권</span></li>
                    <li><span>자동차운반선</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>축제/행사</div>
                <ol>
                    <li><span>월출산국립공원</span></li>
                    <li><span>왕인박사유적지</span></li>
                    <li><span>영암군민속씨름</span></li>
                    <li><span>왕인문화축제</span></li>
                    <li><span>자동차경주장</span></li>
                    <li><span>영암국제자동차</span></li>
                    <li><span>CJ대한통운슈퍼레이스</span></li>
                    <li><span>멸종위기야생생물</span></li>
                    <li><span>현대N페스티벌</span></li>
                    <li><span>장사씨름대회</span></li>
                    <li><span>코리아인터내셔널서킷</span></li>
                    <li><span>월출산기찬랜드</span></li>
                    <li><span>가스모터스포츠</span></li>
                    <li><span>슈퍼6000클래스</span></li>
                    <li><span>생태탐방원</span></li>
                    <li><span>타임트라이얼</span></li>
                    <li><span>구림마을</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>엑스타레이싱</span></li>
                    <li><span>기찬랜드물놀이장</span></li>
                </ol>
            </div>
            `,
            무안군: `
            <div class="keyword-box">
                <div><span>1</span>범죄</div>
                <ol>
                    <li><span>시신유기혐의</span></li>
                    <li><span>구속/기소</span></li>
                    <li><span>살해한뒤시신</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>폐쇄회로CCTV영상</span></li>
                    <li><span>30대여성</span></li>
                    <li><span>시신발견</span></li>
                    <li><span>살해혐의</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>여성살해</span></li>
                    <li><span>경찰과소방</span></li>
                    <li><span>용의자특정</span></li>
                    <li><span>중국산소금</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>혐의부인</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>무안군한숙박업소</span></li>
                    <li><span>미귀가신고</span></li>
                    <li><span>집단폭행</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>공항이전/지역발전</div>
                <ol>
                    <li><span>광주공항이전문제</span></li>
                    <li><span>남악신도시오룡지구</span></li>
                    <li><span>무안국제공항</span></li>
                    <li><span>예비이전후보지선정</span></li>
                    <li><span>중흥S클래스</span></li>
                    <li><span>회산백련지</span></li>
                    <li><span>오룡지구우미린</span></li>
                    <li><span>오룡푸르지오파르세나</span></li>
                    <li><span>행복상생프로젝트</span></li>
                    <li><span>무안양파빵</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>민간공항통합</span></li>
                    <li><span>지역농가</span></li>
                    <li><span>무안국제공항활성화</span></li>
                    <li><span>농촌진흥청</span></li>
                    <li><span>무안사랑상품권</span></li>
                    <li><span>원자력안전교부세</span></li>
                    <li><span>공항이전특별법</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>무안연꽃축제</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>날씨/환경</div>
                <ol>
                    <li><span>육용오리가금농장</span></li>
                    <li><span>중앙사고수습본부</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>원전오염수방류</span></li>
                    <li><span>고병원성조류인플루엔자</span></li>
                    <li><span>항원검출</span></li>
                    <li><span>발콩게</span></li>
                    <li><span>예방적살</span></li>
                    <li><span>제설작업</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>해양보호생물</span></li>
                    <li><span>전국원전동맹</span></li>
                    <li><span>방역당국</span></li>
                    <li><span>동사한숭어</span></li>
                    <li><span>살처분</span></li>
                    <li><span>대설특보</span></li>
                    <li><span>병원성여부</span></li>
                    <li><span>정밀검사</span></li>
                    <li><span>양식장어민</span></li>
                </ol>
            </div>
            `,
            영광군: `
            <div class="keyword-box">
                <div><span>1</span>사건사고</div>
                <ol>
                    <li><span>진실화해위</span></li>
                    <li><span>호우특보</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>기소</span></li>
                    <li><span>희생사건</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>급성췌장염</span></li>
                    <li><span>피해학생</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>민간인희생</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>공직선거법위반</span></li>
                    <li><span>국가보안법위반</span></li>
                    <li><span>구속기소</span></li>
                    <li><span>조작의혹사건</span></li>
                    <li><span>과거사정리위원회</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>환경</div>
                <ol>
                    <li><span>원자력안전위원회</span></li>
                    <li><span>고준위방사성폐기물</span></li>
                    <li><span>해상풍력발전기</span></li>
                    <li><span>한국수력원자력</span></li>
                    <li><span>한빛4/5호기</span></li>
                    <li><span>SK에코플랜트</span></li>
                    <li><span>뿔제비갈매기</span></li>
                    <li><span>멸종위기야생생물</span></li>
                    <li><span>건식저장시설</span></li>
                    <li><span>참조기양식산업화센터</span></li>
                    <li><span>국립생태원</span></li>
                    <li><span>임시저장시설</span></li>
                    <li><span>한빛원전</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>격납건물</span></li>
                    <li><span>사용후핵연료저장시설</span></li>
                    <li><span>헤드관통관</span></li>
                    <li><span>계획예방정비</span></li>
                    <li><span>원자력안전기술원</span></li>
                    <li><span>국가어항</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>복리/인프라</div>
                <ol>
                    <li><span>출생아수</span></li>
                    <li><span>광주군공항이전</span></li>
                    <li><span>힐스테이트영광</span></li>
                    <li><span>e모빌리티규제자유</span></li>
                    <li><span>전남영광군대마전기차산업단지</span></li>
                    <li><span>출산장려금</span></li>
                    <li><span>자유특구투자협약</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>평균출산연령</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>투자협약식</span></li>
                    <li><span>영광사랑상품권</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>e모빌리티산업</span></li>
                    <li><span>우수마을기업</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>복지등기우편서비스</span></li>
                    <li><span>전기이륜차</span></li>
                    <li><span>농업용동력운반차</span></li>
                    <li><span>청약접수</span></li>
                </ol>
            </div>
            `,
            함평군: `
            <div class="keyword-box">
                <div><span>1</span>재해/사건사고</div>
                <ol>
                    <li><span>호우특보</span></li>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>산불발생</span></li>
                    <li><span>국립수산과학원</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>산불2/3단계</span></li>
                    <li><span>고수온주의보</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>진실화해위</span></li>
                    <li><span>연료공급선</span></li>
                    <li><span>건조한날씨</span></li>
                    <li><span>산불영향구역</span></li>
                    <li><span>번개동반</span></li>
                    <li><span>산불진화</span></li>
                    <li><span>피해면적</span></li>
                    <li><span>항원검출</span></li>
                    <li><span>60대여성</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>산업/행정</div>
                <ol>
                    <li><span>광주군공항이전사업</span></li>
                    <li><span>빛그린산단</span></li>
                    <li><span>군공항유치</span></li>
                    <li><span>광주글로벌모터스</span></li>
                    <li><span>원자력안전교부세신설</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>예비이전후보지선정</span></li>
                    <li><span>광주형일자리</span></li>
                    <li><span>광주공장이전</span></li>
                    <li><span>주민설명회</span></li>
                    <li><span>공항이전설명회</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>금호타이어광주</span></li>
                    <li><span>인재양성기금</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>전국원전동맹</span></li>
                    <li><span>지방소멸대응</span></li>
                    <li><span>유치의향서제출</span></li>
                    <li><span>공항이전특별법</span></li>
                    <li><span>고향사랑기부금</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>관광/축제</div>
                <ol>
                    <li><span>함평엑스포공원</span></li>
                    <li><span>함평나비대축제</span></li>
                    <li><span>어촌체험휴양마을</span></li>
                    <li><span>대한민국국향대전개막</span></li>
                    <li><span>함평자연생태공원</span></li>
                    <li><span>지구와인간의공존주제</span></li>
                    <li><span>함평나비희망의날개</span></li>
                    <li><span>나비대축제기간</span></li>
                    <li><span>나비대축제개막</span></li>
                    <li><span>관람객발길</span></li>
                    <li><span>각종동물꽃</span></li>
                    <li><span>체험행사</span></li>
                    <li><span>축산특화농공단지</span></li>
                    <li><span>돌머리해수욕장</span></li>
                    <li><span>워케이션</span></li>
                    <li><span>유치원아이</span></li>
                    <li><span>황금박쥐생태전시관</span></li>
                    <li><span>빅토리아수련</span></li>
                    <li><span>지역축제</span></li>
                    <li><span>곤충생태관</span></li>
                </ol>
            </div>
            `,
            신안군: `
            <div class="keyword-box">
                <div><span>1</span>사건사고</div>
                <ol>
                    <li><span>근해통발어선청보호</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>목포해양경찰서</span></li>
                    <li><span>대비치도서쪽</span></li>
                    <li><span>청보호전복사고</span></li>
                    <li><span>태풍</span></li>
                    <li><span>구조당국</span></li>
                    <li><span>해상전복</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>경비함정</span></li>
                    <li><span>강풍주의보</span></li>
                    <li><span>수색작업</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>인근해상</span></li>
                    <li><span>실종자가족</span></li>
                    <li><span>중국어선</span></li>
                    <li><span>연안구조정</span></li>
                    <li><span>인양작업</span></li>
                    <li><span>염전노예사건</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>사업/행정</div>
                <ol>
                    <li><span>세계최대해상풍력사업</span></li>
                    <li><span>부유식해상풍력단지</span></li>
                    <li><span>후쿠시마원전오염수방류</span></li>
                    <li><span>지방소멸대응기금</span></li>
                    <li><span>투자협약식</span></li>
                    <li><span>인구감소지역</span></li>
                    <li><span>흑산공항건설사업</span></li>
                    <li><span>임자2대교</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>국립공원</span></li>
                    <li><span>설연휴임시개통</span></li>
                    <li><span>국가중요어업유산</span></li>
                    <li><span>태양광발전소</span></li>
                    <li><span>신재생에너지개발이익공유</span></li>
                    <li><span>지역균형뉴딜</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>스마트양식클러스터</span></li>
                    <li><span>전국최초</span></li>
                    <li><span>햇빛연금</span></li>
                    <li><span>신재생에너지사업</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>문화/관광</div>
                <ol>
                    <li><span>유네스코세계자연유산</span></li>
                    <li><span>한국의갯벌</span></li>
                    <li><span>세계최우수관광마을선정</span></li>
                    <li><span>자연유산보전본부</span></li>
                    <li><span>유엔세계관광기구</span></li>
                    <li><span>문화의달행사</span></li>
                    <li><span>신안갯벌</span></li>
                    <li><span>유산등재</span></li>
                    <li><span>44차세계유산위원회</span></li>
                    <li><span>유네스코생물권보전지역</span></li>
                    <li><span>화산섬과용암동굴</span></li>
                    <li><span>서천/보성순천갯벌</span></li>
                    <li><span>버들마편초꽃</span></li>
                    <li><span>세계자연보전연맹</span></li>
                    <li><span>디지털관광주민증</span></li>
                    <li><span>멸종위기종</span></li>
                    <li><span>생물다양</span></li>
                    <li><span>보편적가치</span></li>
                    <li><span>축제개최</span></li>
                    <li><span>분재공원</span></li>
                </ol>
            </div>
            `,
        },
        gyeongbuk: {
            울릉군: `
            <div class="keyword-box">
                <div><span>1</span>사건사고</div>
                <ol>
                    <li><span>예상강수량</span></li>
                    <li><span>특보발효</span></li>
                    <li><span>천둥번개</span></li>
                    <li><span>체감온도</span></li>
                    <li><span>예상적설량</span></li>
                    <li><span>한파특보</span></li>
                    <li><span>안전사고</span></li>
                    <li><span>태풍힌남노</span></li>
                    <li><span>사고유의</span></li>
                    <li><span>교통안전</span></li>
                    <li><span>폭염특보</span></li>
                    <li><span>건조특보</span></li>
                    <li><span>호우특보</span></li>
                    <li><span>강풍특보</span></li>
                    <li><span>태풍마이삭</span></li>
                    <li><span>태풍하이선</span></li>
                    <li><span>태풍특보</span></li>
                    <li><span>해상안전사고</span></li>
                    <li><span>대설특보</span></li>
                    <li><span>사고발생</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>국제/안보</div>
                <ol>
                    <li><span>일본정부</span></li>
                    <li><span>독도영유권주장</span></li>
                    <li><span>한일정상회담</span></li>
                    <li><span>일본영토</span></li>
                    <li><span>후쿠시마오염수</span></li>
                    <li><span>고유영토</span></li>
                    <li><span>억지주장</span></li>
                    <li><span>일본대사관총괄</span></li>
                    <li><span>일본주장</span></li>
                    <li><span>위안부문제</span></li>
                    <li><span>러시아군용기</span></li>
                    <li><span>역사왜곡</span></li>
                    <li><span>다케시마의날</span></li>
                    <li><span>일본언론</span></li>
                    <li><span>카디즈</span></li>
                    <li><span>중국러시아</span></li>
                    <li><span>역사인식</span></li>
                    <li><span>과거사문제</span></li>
                    <li><span>연합훈련</span></li>
                    <li><span>북한핵</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>지역행사/지역발전</div>
                <ol>
                    <li><span>독도의날</span></li>
                    <li><span>동북아역사재단</span></li>
                    <li><span>독도체험관</span></li>
                    <li><span>독도체험</span></li>
                    <li><span>독도교육</span></li>
                    <li><span>독도수호</span></li>
                    <li><span>협약체결</span></li>
                    <li><span>독도사랑</span></li>
                    <li><span>역사왜곡</span></li>
                    <li><span>해양생물자원관</span></li>
                    <li><span>울릉공항건설</span></li>
                    <li><span>독도학교</span></li>
                    <li><span>독도사랑예술</span></li>
                    <li><span>시설물관리</span></li>
                    <li><span>국가지질공원</span></li>
                    <li><span>영토수호훈련</span></li>
                    <li><span>해양생물</span></li>
                    <li><span>울릉크루즈</span></li>
                    <li><span>독도수호의지</span></li>
                    <li><span>해양과학기술원</span></li>
                </ol>
            </div>
            `,
            경주시: `
            <div class="keyword-box">
                <div><span>1</span>사건사고</div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>태풍힌남노</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>경주시청 트라이애슬론</span></li>
                    <li><span>철인3종</span></li>
                    <li><span>가혹행위</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>지진발생</span></li>
                    <li><span>11호태풍</span></li>
                    <li><span>팀닥터</span></li>
                    <li><span>초등학교인근</span></li>
                    <li><span>트라이애슬론팀</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>태풍하이선</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>경위조사</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>재난안전대책본부</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>피해규모</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>산업</div>
                <ol>
                    <li><span>월성1호기</span></li>
                    <li><span>한국수력원자력</span></li>
                    <li><span>월성원전</span></li>
                    <li><span>맥스터증설</span></li>
                    <li><span>임시저장시설</span></li>
                    <li><span>월성원자력본부</span></li>
                    <li><span>월성1호기조개폐쇄</span></li>
                    <li><span>건식저장시설</span></li>
                    <li><span>경제성평가</span></li>
                    <li><span>사용후 핵연료임시저장</span></li>
                    <li><span>월성원자력발전소</span></li>
                    <li><span>원전정책</span></li>
                    <li><span>조기폐쇄</span></li>
                    <li><span>신경주역</span></li>
                    <li><span>맥스터</span></li>
                    <li><span>사용후 핵연료관리정책</span></li>
                    <li><span>원전해체연구소</span></li>
                    <li><span>방사성물질</span></li>
                    <li><span>문무대왕과학연구소</span></li>
                    <li><span>관리정책재검토</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>관광</div>
                <ol>
                    <li><span>황리단길</span></li>
                    <li><span>국립경주문화재연구소</span></li>
                    <li><span>경주엑스포대공원</span></li>
                    <li><span>금동신발</span></li>
                    <li><span>동궁월지</span></li>
                    <li><span>금동관</span></li>
                    <li><span>국립경주박물관</span></li>
                    <li><span>발굴조사</span></li>
                    <li><span>황남동</span></li>
                    <li><span>통일신라시대</span></li>
                    <li><span>말갑옷</span></li>
                    <li><span>무덤주인</span></li>
                    <li><span>시민관광객</span></li>
                    <li><span>문무대왕릉</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>신라왕경핵심유적</span></li>
                    <li><span>장신구일체</span></li>
                    <li><span>스마트관광도시</span></li>
                    <li><span>한국문화재재단</span></li>
                    <li><span>바다의날</span></li>
                </ol>
            </div>
            `,
            김천시: `
            <div class="keyword-box">
                <div><span>1</span>산업/지역발전</div>
                <ol>
                    <li><span>남부내륙철도</span></li>
                    <li><span>미분양관리지역</span></li>
                    <li><span>일반산업단지</span></li>
                    <li><span>샤인머스켓</span></li>
                    <li><span>국가철도망구축</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>철도망구축계획</span></li>
                    <li><span>지방중소도시</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>철도건설사업</span></li>
                    <li><span>달빛내륙철도</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>분양보증예비심사</span></li>
                    <li><span>미분양주택</span></li>
                    <li><span>스마트그린물류</span></li>
                    <li><span>물류규제자유</span></li>
                    <li><span>튜닝카 성능안전시험센터</span></li>
                    <li><span>산업단지3단계</span></li>
                    <li><span>관리지역지정</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>사건사고</div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>국토안전관리원</span></li>
                    <li><span>경위조사</span></li>
                    <li><span>럼피스킨</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>지진발생</span></li>
                    <li><span>사고경위</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>집단폭행</span></li>
                    <li><span>주간보호센터</span></li>
                    <li><span>스마트워치</span></li>
                    <li><span>혐의기소</span></li>
                    <li><span>사건경위</span></li>
                    <li><span>신변보호대상</span></li>
                    <li><span>노인보호센터</span></li>
                    <li><span>노인복지법</span></li>
                    <li><span>폐쇄회로CCTV</span></li>
                    <li><span>원장요양보호사</span></li>
                    <li><span>지진발생인근지역</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>문화</div>
                <ol>
                    <li><span>김천실내체육관</span></li>
                    <li><span>상무프로축구단</span></li>
                    <li><span>리그챔피언결정</span></li>
                    <li><span>여자프로배구</span></li>
                    <li><span>한국도로공사</span></li>
                    <li><span>한국도로공사 흥국생명</span></li>
                    <li><span>치유의숲</span></li>
                    <li><span>한국도로공사 하이패스배구단</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>국립공원공단</span></li>
                    <li><span>김천종합운동장</span></li>
                    <li><span>지리산방사</span></li>
                    <li><span>수도산</span></li>
                    <li><span>챔피언결정전</span></li>
                    <li><span>흥국생명핑크</span></li>
                    <li><span>큐K리크</span></li>
                    <li><span>생물종보전원</span></li>
                    <li><span>자작나무숲</span></li>
                    <li><span>복합휴게시설</span></li>
                    <li><span>자원봉사자</span></li>
                </ol>
            </div>
            `,
            안동시: `
            <div class="keyword-box">
                <div><span>1</span>문화</div>
                <ol>
                    <li><span>하회별신굿탈놀이</span></li>
                    <li><span>국제컨벤션센터</span></li>
                    <li><span>인류무형문화유산</span></li>
                    <li><span>도산서원</span></li>
                    <li><span>아시아태평양지역</span></li>
                    <li><span>대한민국균형발전 박람회</span></li>
                    <li><span>선유줄불놀이</span></li>
                    <li><span>병산서원</span></li>
                    <li><span>인문가치포럼</span></li>
                    <li><span>국제탈춤페스티벌</span></li>
                    <li><span>춤공연장</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>안동탈춤</span></li>
                    <li><span>한국정신문화</span></li>
                    <li><span>관광거점도시</span></li>
                    <li><span>닥터헬기</span></li>
                    <li><span>21세기인문가치</span></li>
                    <li><span>안동하회마을</span></li>
                    <li><span>세계역사도시</span></li>
                    <li><span>예술의전장</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>사건사고</div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>산불발생</span></li>
                    <li><span>과수화상병</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>농수로</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>수로유기</span></li>
                    <li><span>단계발령</span></li>
                    <li><span>산불진화헬기</span></li>
                    <li><span>야산불</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>피해면적</span></li>
                    <li><span>누나살해</span></li>
                    <li><span>가출신고</span></li>
                    <li><span>산불방지대책</span></li>
                    <li><span>산림과학원</span></li>
                    <li><span>재산피해</span></li>
                    <li><span>산불피해지역</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>산업</div>
                <ol>
                    <li><span>SK바이오사이언스</span></li>
                    <li><span>스마트팜</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>카백신</span></li>
                    <li><span>바이오사이언스공장</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>협약체결</span></li>
                    <li><span>미분양관리지역</span></li>
                    <li><span>의료용대마</span></li>
                    <li><span>관광거점도시</span></li>
                    <li><span>사과스마트팜</span></li>
                    <li><span>노지스마트농업</span></li>
                    <li><span>인공모래섬</span></li>
                    <li><span>경북바이오산업연구원</span></li>
                    <li><span>안동형일자리</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>스마트농업시범사업</span></li>
                    <li><span>실증지원센터</span></li>
                    <li><span>글로벌바이오</span></li>
                    <li><span>스카이코비원</span></li>
                </ol>
            </div>
            `,
            구미시: `
            <div class="keyword-box">
                <div><span>1</span>산업/지역발전</div>
                <ol>
                    <li><span>SK에코플랜트</span></li>
                    <li><span>지하층지상</span></li>
                    <li><span>SK실트론</span></li>
                    <li><span>구미국가산업단지</span></li>
                    <li><span>국가첨단전략산업</span></li>
                    <li><span>통합신공항</span></li>
                    <li><span>도레이첨단소재</span></li>
                    <li><span>특화단지지정</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>스마트그린산단</span></li>
                    <li><span>반도체산업</span></li>
                    <li><span>반도체특화</span></li>
                    <li><span>첨단전략산업특화</span></li>
                    <li><span>인재양성전략회의</span></li>
                    <li><span>규모조성</span></li>
                    <li><span>대구권광역철도</span></li>
                    <li><span>SK퓨얼셀</span></li>
                    <li><span>LS머트리</span></li>
                    <li><span>도시재생혁신지구</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>사건사고</div>
                <ol>
                    <li><span>3세여아</span></li>
                    <li><span>여아친모</span></li>
                    <li><span>아이바꿔치기</span></li>
                    <li><span>유전자검사</span></li>
                    <li><span>사체은닉미수</span></li>
                    <li><span>미성년자약취혐의</span></li>
                    <li><span>폭염주의보</span></li>
                    <li><span>관계성립</span></li>
                    <li><span>아이친부</span></li>
                    <li><span>영장실질검사</span></li>
                    <li><span>반미라상태</span></li>
                    <li><span>병원성 조류인플루엔자</span></li>
                    <li><span>낮최고기온</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>아동학대방지</span></li>
                    <li><span>폭염경보</span></li>
                    <li><span>육계농장</span></li>
                    <li><span>최고체감온도</span></li>
                    <li><span>아동학대치료</span></li>
                    <li><span>가금농장</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>문화/행정</div>
                <ol>
                    <li><span>전국체육대회</span></li>
                    <li><span>구미형일자리</span></li>
                    <li><span>취수원이전</span></li>
                    <li><span>취수원</span></li>
                    <li><span>물관리방안</span></li>
                    <li><span>취수원다변화</span></li>
                    <li><span>통합물관리</span></li>
                    <li><span>상생형지역</span></li>
                    <li><span>낙동강통합물</span></li>
                    <li><span>교촌에프앤비</span></li>
                    <li><span>교촌치킨</span></li>
                    <li><span>구미시민운동장</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>지역일자리</span></li>
                    <li><span>협약체결</span></li>
                    <li><span>낙동강유역물</span></li>
                    <li><span>상생발전</span></li>
                    <li><span>한화큐셀</span></li>
                    <li><span>장애인체육대회</span></li>
                    <li><span>업무협약</span></li>
                </ol>
            </div>
            `,
            영주시: `
            <div class="keyword-box">
                <div><span>1</span>사건사고</div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>호우특보</span></li>
                    <li><span>심정지상태</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>산불발생</span></li>
                    <li><span>산사태발생</span></li>
                    <li><span>토사매몰</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>재난안전대책</span></li>
                    <li><span>사바나왕도마뱀</span></li>
                    <li><span>발자국발견</span></li>
                    <li><span>산불피해</span></li>
                    <li><span>생물자원관</span></li>
                    <li><span>물폭탄</span></li>
                    <li><span>열차탈선</span></li>
                    <li><span>하천제방유실</span></li>
                    <li><span>주택침수</span></li>
                    <li><span>그물무늬비단뱀</span></li>
                    <li><span>악어발견</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>산업/행정</div>
                <ol>
                    <li><span>첨단베어링 국가산업단지</span></li>
                    <li><span>공동점포</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>리사이클센터</span></li>
                    <li><span>고순도불화</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>행정복지센터</span></li>
                    <li><span>국립공원공단</span></li>
                    <li><span>베어링산업</span></li>
                    <li><span>영주사랑상품권</span></li>
                    <li><span>불화수소가스</span></li>
                    <li><span>국가산업단지 조성사업</span></li>
                    <li><span>불화아르곤 포토레지스트</span></li>
                    <li><span>국민은행신한은행</span></li>
                    <li><span>행복상생프로젝트</span></li>
                    <li><span>베어링시험평가센터</span></li>
                    <li><span>공동점포운영</span></li>
                    <li><span>동서횡단철도</span></li>
                    <li><span>하이테크베어링시험</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>지역행사</div>
                <ol>
                    <li><span>풍기인삼엑스포</span></li>
                    <li><span>산림치유원</span></li>
                    <li><span>과수화상병</span></li>
                    <li><span>소수서원</span></li>
                    <li><span>목조아미타여래좌상</span></li>
                    <li><span>상림복지진흥원</span></li>
                    <li><span>한국산림복지</span></li>
                    <li><span>세계피트니스</span></li>
                    <li><span>남자월드컵</span></li>
                    <li><span>국민체육센터</span></li>
                    <li><span>소백산국립공원</span></li>
                    <li><span>순흥벽화고분</span></li>
                    <li><span>보존처리</span></li>
                    <li><span>인삼문화팝업공원</span></li>
                    <li><span>슈퍼한우</span></li>
                    <li><span>산림치유프로그램</span></li>
                    <li><span>산림과학원</span></li>
                    <li><span>문화재보존과학</span></li>
                    <li><span>국가지정문화재</span></li>
                    <li><span>풍기인삼축제</span></li>
                </ol>
            </div>
            `,
            영천시: `
            <div class="keyword-box">
                <div><span>1</span>사건사고</div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>산불발생</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>땅투기</span></li>
                    <li><span>미공개정보이용</span></li>
                    <li><span>부동산투기의혹</span></li>
                    <li><span>흉기난동</span></li>
                    <li><span>장애인복지</span></li>
                    <li><span>LG에너지솔루션</span></li>
                    <li><span>전투식량</span></li>
                    <li><span>농어촌공사직원</span></li>
                    <li><span>부패방지법위반</span></li>
                    <li><span>산불진화</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>여성장애</span></li>
                    <li><span>식당흉기</span></li>
                    <li><span>복지시설</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>지역발전/행정</div>
                <ol>
                    <li><span>영천경마공원</span></li>
                    <li><span>국가철도망구축</span></li>
                    <li><span>폴리텍대학</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>팔공산국립공원</span></li>
                    <li><span>국립공원승격</span></li>
                    <li><span>경마농원</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>평생학습도시</span></li>
                    <li><span>산업단지조성사업</span></li>
                    <li><span>미분양관리지역</span></li>
                    <li><span>샤인머스캣</span></li>
                    <li><span>행정복지센터</span></li>
                    <li><span>하이테크파크지구</span></li>
                    <li><span>경마공원조성</span></li>
                    <li><span>로봇캠퍼스설립</span></li>
                    <li><span>인구감소지역</span></li>
                    <li><span>조향사랑기부제</span></li>
                    <li><span>영천하이테크파크</span></li>
                    <li><span>특성화대학</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>지역행사</div>
                <ol>
                    <li><span>육군3사관학교</span></li>
                    <li><span>졸업및임관식</span></li>
                    <li><span>국방부유해발굴감식단</span></li>
                    <li><span>보물지정</span></li>
                    <li><span>한의마을</span></li>
                    <li><span>안보환경</span></li>
                    <li><span>국가지정문화재</span></li>
                    <li><span>한국형아이언돔</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>미사일역량</span></li>
                    <li><span>방어능력</span></li>
                    <li><span>튼튼한안보</span></li>
                    <li><span>협약체결</span></li>
                    <li><span>미사일발사실험</span></li>
                    <li><span>미사일방어체계</span></li>
                    <li><span>한반도평화프로세스</span></li>
                    <li><span>한국와인</span></li>
                    <li><span>의병의날</span></li>
                    <li><span>안보토대</span></li>
                    <li><span>천문과학관</span></li>
                </ol>
            </div>
            `,
            상주시: `
            <div class="keyword-box">
                <div><span>1</span>사건사고</div>
                <ol>
                    <li><span>가금농장</span></li>
                    <li><span>병원성 조류인플루엔자</span></li>
                    <li><span>예방적살처분</span></li>
                    <li><span>육용오리농장</span></li>
                    <li><span>방역당국</span></li>
                    <li><span>정밀검사</span></li>
                    <li><span>고병원성</span></li>
                    <li><span>야생멧돼지</span></li>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>지진발생</span></li>
                    <li><span>돼지열병</span></li>
                    <li><span>중수본</span></li>
                    <li><span>아프리카돼지</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>해당농장</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>호우특보</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>항원검출</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>농업진흥/산업</div>
                <ol>
                    <li><span>스마트팜</span></li>
                    <li><span>스마트팜혁신밸리</span></li>
                    <li><span>상주곶감공원</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>비상경제민생회의</span></li>
                    <li><span>문장대온천개발</span></li>
                    <li><span>청년농업인</span></li>
                    <li><span>샤인머스켓</span></li>
                    <li><span>실리콘음극재</span></li>
                    <li><span>스마트농업</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>상강</span></li>
                    <li><span>문장대온천</span></li>
                    <li><span>감곶감</span></li>
                    <li><span>올해수확</span></li>
                    <li><span>농업혁신</span></li>
                    <li><span>적극지원</span></li>
                    <li><span>협약체결</span></li>
                    <li><span>상주곶감</span></li>
                    <li><span>청년농촌보금자리</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>문화</div>
                <ol>
                    <li><span>낙동강생물자원관</span></li>
                    <li><span>한국한복진흥원</span></li>
                    <li><span>환경부산하</span></li>
                    <li><span>낙동강오리알</span></li>
                    <li><span>한복문화주간</span></li>
                    <li><span>훈민정음해례본</span></li>
                    <li><span>훈민정음상주본</span></li>
                    <li><span>생물다양</span></li>
                    <li><span>국가지정문화재</span></li>
                    <li><span>경북문화재단</span></li>
                    <li><span>류후조</span></li>
                    <li><span>상주읍성</span></li>
                    <li><span>한복문화창작소</span></li>
                    <li><span>민속문화재지정</span></li>
                    <li><span>관광자원관</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>후백제역사문화권 지방정부</span></li>
                    <li><span>낙동강</span></li>
                    <li><span>협약체결</span></li>
                    <li><span>수상레저센터</span></li>
                </ol>
            </div>
            `,
            문경시: `
            <div class="keyword-box">
                <div><span>1</span>사건사고</div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>중부지방</span></li>
                    <li><span>온열질환</span></li>
                    <li><span>호우특보</span></li>
                    <li><span>온열질환자</span></li>
                    <li><span>남부지방</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>누적강수량</span></li>
                    <li><span>재난안전대책본부</span></li>
                    <li><span>호우경보</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>심정지상태</span></li>
                    <li><span>안전조치</span></li>
                    <li><span>80대여성</span></li>
                    <li><span>목줄입마개</span></li>
                    <li><span>홍수경보</span></li>
                    <li><span>개물림사고</span></li>
                    <li><span>산사태발생</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>환경/문화</div>
                <ol>
                    <li><span>오픈세트장</span></li>
                    <li><span>국가지질공원</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>돌리네습지</span></li>
                    <li><span>문경새재</span></li>
                    <li><span>세계명상마을</span></li>
                    <li><span>문경찻사발축제</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>세계지질공원</span></li>
                    <li><span>전통한지</span></li>
                    <li><span>헙무협약</span></li>
                    <li><span>인류무형문화유산</span></li>
                    <li><span>친환경퇴비</span></li>
                    <li><span>실내촬영스튜디오</span></li>
                    <li><span>미로공원</span></li>
                    <li><span>프로그램운영</span></li>
                    <li><span>국립자연휴양림</span></li>
                    <li><span>영화드라마촬영</span></li>
                    <li><span>오샛케이블카설치</span></li>
                    <li><span>빗물지하수</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>도시인프라</div>
                <ol>
                    <li><span>중부동서횡단철도</span></li>
                    <li><span>중부내륙철도</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>가은역꼬마열차</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>청년마을</span></li>
                    <li><span>협약체결</span></li>
                    <li><span>도시재생뉴딜사업</span></li>
                    <li><span>쌍용양회문경공장</span></li>
                    <li><span>산림레포츠진흥센터</span></li>
                    <li><span>철도망구축계획</span></li>
                    <li><span>청년농부</span></li>
                    <li><span>청년마을사업</span></li>
                    <li><span>4차국가철도망구축</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>감곡장호원역</span></li>
                    <li><span>수서광주</span></li>
                    <li><span>행복상생프로젝트</span></li>
                    <li><span>국가철도공단</span></li>
                    <li><span>귀농귀촌</span></li>
                </ol>
            </div>
            `,
            예천군: `
            <div class="keyword-box">
                <div><span>1</span>사건사고</div>
                <ol>
                    <li><span>실종자수색</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>재난안전대책본부</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>해병대1사단</span></li>
                    <li><span>포병대대소속</span></li>
                    <li><span>복구작업</span></li>
                    <li><span>해병대수사단</span></li>
                    <li><span>산사태발생</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>특별재난지역선포</span></li>
                    <li><span>중급류</span></li>
                    <li><span>산사태취약지역</span></li>
                    <li><span>군인권센터</span></li>
                    <li><span>발생한산불</span></li>
                    <li><span>산불발생</span></li>
                    <li><span>집중호우</span></li>
                    <li><span>산사태피해</span></li>
                    <li><span>임시주거시설</span></li>
                    <li><span>상병사망사건</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>문화/행정</div>
                <ol>
                    <li><span>경북도청신도시</span></li>
                    <li><span>곤충산업</span></li>
                    <li><span>천연기념물지정</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>보물지정</span></li>
                    <li><span>스마트팜</span></li>
                    <li><span>행정구역통합</span></li>
                    <li><span>이상한변호사</span></li>
                    <li><span>국가지정문화재</span></li>
                    <li><span>예천사랑상품권</span></li>
                    <li><span>변호사우영우</span></li>
                    <li><span>임시주거시설</span></li>
                    <li><span>보호수지정</span></li>
                    <li><span>곤충양잠산업</span></li>
                    <li><span>거점단지조성</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>곤충원료</span></li>
                    <li><span>예천행정구역</span></li>
                    <li><span>황목근팽나무</span></li>
                    <li><span>곤충축제</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>지역행사</div>
                <ol>
                    <li><span>육상경기대회</span></li>
                    <li><span>선수권대회</span></li>
                    <li><span>한복교복</span></li>
                    <li><span>예천박물관</span></li>
                    <li><span>산림치유원</span></li>
                    <li><span>복구작업</span></li>
                    <li><span>봉사활동</span></li>
                    <li><span>산림치유문화센터</span></li>
                    <li><span>교복보급시범</span></li>
                    <li><span>국제경기</span></li>
                    <li><span>항저우아시안게임</span></li>
                    <li><span>대창중학교학생</span></li>
                    <li><span>산림복지서비스</span></li>
                    <li><span>예천스타디움</span></li>
                    <li><span>자원봉사자</span></li>
                    <li><span>피해복구작업</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>박물관기탁</span></li>
                    <li><span>디자인문화진흥원</span></li>
                    <li><span>공동기획전</span></li>
                </ol>
            </div>
            `,
            경산시: `
            <div class="keyword-box">
                <div><span>1</span>사건사고</div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>폭염주의보</span></li>
                    <li><span>폭염특보</span></li>
                    <li><span>폭염경보</span></li>
                    <li><span>팀닥터</span></li>
                    <li><span>낮최고기온</span></li>
                    <li><span>사체유기혐의</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>온열질환</span></li>
                    <li><span>경주시청 트라이애슬론</span></li>
                    <li><span>아파트놀이터</span></li>
                    <li><span>체감온도</span></li>
                    <li><span>철인3종</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>지적장애</span></li>
                    <li><span>트라이애슬론팀</span></li>
                    <li><span>살해혐의</span></li>
                    <li><span>여행용가방</span></li>
                    <li><span>동료살해</span></li>
                    <li><span>실종신고</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>부동산</div>
                <ol>
                    <li><span>경산지식산업지구</span></li>
                    <li><span>규제지역</span></li>
                    <li><span>지하층지상</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>지방중소도시</span></li>
                    <li><span>규모조성</span></li>
                    <li><span>C랩아웃사이드</span></li>
                    <li><span>규제지역해제</span></li>
                    <li><span>일반산업단지</span></li>
                    <li><span>조정대상지역해제</span></li>
                    <li><span>신세계 프리미엄아울렛</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>시장상황</span></li>
                    <li><span>브랜드아파트</span></li>
                    <li><span>생활인프라</span></li>
                    <li><span>대출규제</span></li>
                    <li><span>경산산학융합</span></li>
                    <li><span>지식산업개발</span></li>
                    <li><span>청약시작</span></li>
                    <li><span>분양시작</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>행정</div>
                <ol>
                    <li><span>국립공원</span></li>
                    <li><span>경산공설시장</span></li>
                    <li><span>영남대학교 경산캠퍼스</span></li>
                    <li><span>국립공원승격</span></li>
                    <li><span>경산프리미엄아울렛</span></li>
                    <li><span>팔공산</span></li>
                    <li><span>경산캠퍼스민속촌</span></li>
                    <li><span>교량구축훈련</span></li>
                    <li><span>외국인유학</span></li>
                    <li><span>팔공산갓바위</span></li>
                    <li><span>행복상생프로젝트</span></li>
                    <li><span>창포물머리</span></li>
                    <li><span>천마아트센터</span></li>
                    <li><span>자유방패</span></li>
                    <li><span>공병대대장병</span></li>
                    <li><span>지역농가</span></li>
                    <li><span>조생종벼</span></li>
                    <li><span>공원지정</span></li>
                    <li><span>불상머리</span></li>
                    <li><span>지역경제활성화</span></li>
                </ol>
            </div>
            `,
            청도군: `
            <div class="keyword-box">
                <div><span>1</span>지역행사/문화</div>
                <ol>
                    <li><span>반구대암각화</span></li>
                    <li><span>청도소싸움경기장</span></li>
                    <li><span>낙동강 통합물관리방안</span></li>
                    <li><span>운문댐물</span></li>
                    <li><span>정월대보름</span></li>
                    <li><span>청도공영사업공사</span></li>
                    <li><span>청도한재미나리</span></li>
                    <li><span>통합물관리</span></li>
                    <li><span>새마을운동</span></li>
                    <li><span>청도천둔치</span></li>
                    <li><span>반구대암각화보존</span></li>
                    <li><span>영웅귀환행사</span></li>
                    <li><span>청도반시</span></li>
                    <li><span>호국영웅</span></li>
                    <li><span>국방부유해발굴</span></li>
                    <li><span>사연댐수문</span></li>
                    <li><span>한재미나리마을</span></li>
                    <li><span>새마을운동발상지</span></li>
                    <li><span>저탄소한우</span></li>
                    <li><span>청도소싸움축제</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>사건사고</div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>폭염주의보</span></li>
                    <li><span>폭염특보</span></li>
                    <li><span>대나무막대기</span></li>
                    <li><span>청도2터널</span></li>
                    <li><span>공무원시험</span></li>
                    <li><span>태풍하이선</span></li>
                    <li><span>시험준비</span></li>
                    <li><span>살인혐의</span></li>
                    <li><span>체감온도</span></li>
                    <li><span>사찰아들</span></li>
                    <li><span>가뭄단계</span></li>
                    <li><span>성매매알선사이트</span></li>
                    <li><span>대구부산고속도로</span></li>
                    <li><span>60대어머니</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>체벌명목</span></li>
                    <li><span>홍수주의보</span></li>
                    <li><span>이상징후</span></li>
                    <li><span>화재원인</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>행정</div>
                <ol>
                    <li><span>지역활력타운</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>알박기텐트</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>지방소멸위기</span></li>
                    <li><span>청도사랑상품권</span></li>
                    <li><span>유기견</span></li>
                    <li><span>보호소</span></li>
                    <li><span>과실전문생산</span></li>
                    <li><span>활력타운조성</span></li>
                    <li><span>로컬브랜딩</span></li>
                    <li><span>정착지원</span></li>
                    <li><span>인구감소</span></li>
                    <li><span>지방소멸대응</span></li>
                    <li><span>소멸대응기금</span></li>
                    <li><span>활력타운공모</span></li>
                    <li><span>귀농귀촌청년</span></li>
                    <li><span>귀농인</span></li>
                    <li><span>은퇴자공동체마을</span></li>
                    <li><span>청년복합공간</span></li>
                </ol>
            </div>
            `,
            고령군: `
            <div class="keyword-box">
                <div><span>1</span>사건사고</div>
                <ol>
                    <li><span>암사자</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>전자발찌</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>산불발생</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>전자발찌훼손</span></li>
                    <li><span>산불3단계</span></li>
                    <li><span>산불진화헬기</span></li>
                    <li><span>재난안전문자</span></li>
                    <li><span>암사자탈출</span></li>
                    <li><span>인력장비</span></li>
                    <li><span>멸종위기종</span></li>
                    <li><span>사설목장</span></li>
                    <li><span>산불방지대책</span></li>
                    <li><span>위치추적전자장치</span></li>
                    <li><span>아동청소년</span></li>
                    <li><span>창원보호관찰소</span></li>
                    <li><span>야생동물</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>행정</div>
                <ol>
                    <li><span>달빛내륙철도</span></li>
                    <li><span>국가철도망구축</span></li>
                    <li><span>철도망구축계획</span></li>
                    <li><span>인구감소지역</span></li>
                    <li><span>디지털관광주민</span></li>
                    <li><span>4차국가철도망구축</span></li>
                    <li><span>관광주민증</span></li>
                    <li><span>달빛고속철도</span></li>
                    <li><span>고속철도건설</span></li>
                    <li><span>계획반영</span></li>
                    <li><span>농촌융복합</span></li>
                    <li><span>달성습지</span></li>
                    <li><span>신규사업</span></li>
                    <li><span>고속철도특별법</span></li>
                    <li><span>철도건설사업</span></li>
                    <li><span>외국인계절근로자</span></li>
                    <li><span>복합산업지구</span></li>
                    <li><span>주민증사업</span></li>
                    <li><span>건설사업</span></li>
                    <li><span>할인혜택</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>산업/문화</div>
                <ol>
                    <li><span>지산동고분군</span></li>
                    <li><span>SK에코플랜트</span></li>
                    <li><span>고분군세계유산</span></li>
                    <li><span>세계유산</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>제의시설</span></li>
                    <li><span>유곡리두락리</span></li>
                    <li><span>교동송현동</span></li>
                    <li><span>연속유산</span></li>
                    <li><span>국제기념물 유적협의회</span></li>
                    <li><span>플라스틱재활용</span></li>
                    <li><span>유네스코 세계유산위원회</span></li>
                    <li><span>발굴조사</span></li>
                    <li><span>두락리고분군</span></li>
                    <li><span>국가제사</span></li>
                    <li><span>문명다양</span></li>
                    <li><span>가야유적</span></li>
                    <li><span>해인사장경판전</span></li>
                    <li><span>정치체계</span></li>
                    <li><span>DY폴리머</span></li>
                </ol>
            </div>
            `,
            성주군: `
            <div class="keyword-box">
                <div><span>1</span>사드기지</div>
                <ol>
                    <li><span>사드고고도미사일 방어체계</span></li>
                    <li><span>주한미군</span></li>
                    <li><span>고고도미사일방어체계기지</span></li>
                    <li><span>사드반대단체</span></li>
                    <li><span>주한미군사드</span></li>
                    <li><span>사드기지정상화</span></li>
                    <li><span>북한무인기</span></li>
                    <li><span>마을회관앞</span></li>
                    <li><span>사드추가배치</span></li>
                    <li><span>반대단체회원</span></li>
                    <li><span>마을회관</span></li>
                    <li><span>공사자재</span></li>
                    <li><span>일반환경영향평가</span></li>
                    <li><span>강제해산</span></li>
                    <li><span>사드철회</span></li>
                    <li><span>소성리종합상황실</span></li>
                    <li><span>물자반입</span></li>
                    <li><span>사드배치반대</span></li>
                    <li><span>성주참외</span></li>
                    <li><span>진입로확보</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>문화</div>
                <ol>
                    <li><span>남부대륙철도</span></li>
                    <li><span>상밖숲</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>세종대왕</span></li>
                    <li><span>관광두레사업</span></li>
                    <li><span>안치경북</span></li>
                    <li><span>수상레저테마파크</span></li>
                    <li><span>세종대왕자태실</span></li>
                    <li><span>고속도로건설</span></li>
                    <li><span>역사테마공원</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>시민수상스키</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>상생협의회</span></li>
                    <li><span>추모공원</span></li>
                    <li><span>국가대표출신</span></li>
                    <li><span>사찰추모관</span></li>
                    <li><span>지역관광</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>사건사고</div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>독감백신</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>백신접종</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>백신접종후</span></li>
                    <li><span>70대여성</span></li>
                    <li><span>독감백신접종</span></li>
                    <li><span>야산불</span></li>
                    <li><span>접종후사망</span></li>
                    <li><span>산불발생</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>피해규모</span></li>
                    <li><span>보건당국</span></li>
                    <li><span>온열질환자</span></li>
                    <li><span>산불1단계</span></li>
                    <li><span>공장불</span></li>
                    <li><span>중대재해처벌법</span></li>
                </ol>
            </div>
            `,
            칠곡군: `
            <div class="keyword-box">
                <div><span>1</span>지역행사/문화</div>
                <ol>
                    <li><span>다부동전적기념관</span></li>
                    <li><span>추모행사</span></li>
                    <li><span>워커장군</span></li>
                    <li><span>호국평화기념관</span></li>
                    <li><span>럭키칠곡</span></li>
                    <li><span>한미동맹</span></li>
                    <li><span>국가보훈부</span></li>
                    <li><span>백선엽장군동상</span></li>
                    <li><span>손편지</span></li>
                    <li><span>3기추모식</span></li>
                    <li><span>낙동강방어선전투</span></li>
                    <li><span>동상건립추진</span></li>
                    <li><span>호국영웅</span></li>
                    <li><span>에티오피아참전용사</span></li>
                    <li><span>국방부유해발굴</span></li>
                    <li><span>낙동강세계평화</span></li>
                    <li><span>평화문화대축전</span></li>
                    <li><span>워커장군흉상</span></li>
                    <li><span>화학사고대응</span></li>
                    <li><span>사고대응훈련</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>사건사고</div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>택배노동자</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>가혹행위</span></li>
                    <li><span>살해한혐의</span></li>
                    <li><span>공장불</span></li>
                    <li><span>중국국적</span></li>
                    <li><span>흉기살해</span></li>
                    <li><span>재발방지대책</span></li>
                    <li><span>폭염주의보</span></li>
                    <li><span>과로사대책위원회</span></li>
                    <li><span>폭염경보</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>야간근무</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>추돌사고</span></li>
                    <li><span>흉기위협</span></li>
                    <li><span>물류센터야간</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>상생사업/행정</div>
                <ol>
                    <li><span>할매글꼴</span></li>
                    <li><span>성인문해교육</span></li>
                    <li><span>성인문해교실</span></li>
                    <li><span>어린이집건립프로젝트</span></li>
                    <li><span>칠곡보생태공원</span></li>
                    <li><span>국가등록문화재</span></li>
                    <li><span>글꼴제작</span></li>
                    <li><span>손글씨</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>법정문화도시</span></li>
                    <li><span>키즈랜드캠핑</span></li>
                    <li><span>매원마을</span></li>
                    <li><span>대구권광역철도</span></li>
                    <li><span>수니와칠공주</span></li>
                    <li><span>서체제작</span></li>
                    <li><span>수제맥주</span></li>
                    <li><span>여성친화도시</span></li>
                    <li><span>핸드앤몰트</span></li>
                    <li><span>문화재등록</span></li>
                    <li><span>군부대통합이전</span></li>
                </ol>
            </div>
            `,
            의성군: `
            <div class="keyword-box">
                <div><span>1</span>지역행사/지역개발</div>
                <ol>
                    <li><span>통합신공항</span></li>
                    <li><span>이전부지선정</span></li>
                    <li><span>공항화물터미널</span></li>
                    <li><span>공동후보지</span></li>
                    <li><span>대구군공항</span></li>
                    <li><span>공항이전사업</span></li>
                    <li><span>유치신청</span></li>
                    <li><span>공항건설</span></li>
                    <li><span>주민투표</span></li>
                    <li><span>쓰레기산</span></li>
                    <li><span>공항사업</span></li>
                    <li><span>민간공항</span></li>
                    <li><span>이전부지</span></li>
                    <li><span>부적합결정</span></li>
                    <li><span>떡국떡</span></li>
                    <li><span>반려동물</span></li>
                    <li><span>의성마늘</span></li>
                    <li><span>후적지</span></li>
                    <li><span>방치폐기물</span></li>
                    <li><span>서당한글</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>행정</div>
                <ol>
                    <li><span>인구감소지역</span></li>
                    <li><span>지방소멸대응</span></li>
                    <li><span>스마트팜</span></li>
                    <li><span>이웃사촌시범마을</span></li>
                    <li><span>국가지질공원</span></li>
                    <li><span>소멸대응기금</span></li>
                    <li><span>통합신공항</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>평균총급여액</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>도시청년</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>귀농인</span></li>
                    <li><span>지방소멸위기</span></li>
                    <li><span>청년농업인</span></li>
                    <li><span>청춘구행복</span></li>
                    <li><span>사과스마트팜</span></li>
                    <li><span>공룡발자국화석</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>사건사고</div>
                <ol>
                    <li><span>폭염경보</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>최고체감온도</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>뇌물수수혐의</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>홍수주의보</span></li>
                    <li><span>홍수통제소</span></li>
                    <li><span>성매매강요</span></li>
                    <li><span>낙동강홍수통제</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>중국산고춧가루</span></li>
                    <li><span>기후위기적용</span></li>
                    <li><span>노인보행자교통사고</span></li>
                    <li><span>농작물피해</span></li>
                    <li><span>특별재난지역추가</span></li>
                    <li><span>온열질환</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>야외활동</span></li>
                    <li><span>장마전선</span></li>
                </ol>
            </div>
            `,
            청송군: `
            <div class="keyword-box">
                <div><span>1</span>지역행사/관광</div>
                <ol>
                    <li><span>세계지질공원</span></li>
                    <li><span>청송사과</span></li>
                    <li><span>산소카페청송군</span></li>
                    <li><span>아이스클라이밍월드컵</span></li>
                    <li><span>카페청송정원</span></li>
                    <li><span>독립유공자후손</span></li>
                    <li><span>유네스코세계</span></li>
                    <li><span>청송사과축제</span></li>
                    <li><span>공원인증</span></li>
                    <li><span>국가지질공원</span></li>
                    <li><span>주왕산국립공원</span></li>
                    <li><span>청송백자</span></li>
                    <li><span>외씨버선길</span></li>
                    <li><span>지질명소</span></li>
                    <li><span>청송사과유통센터</span></li>
                    <li><span>신성계곡녹색길</span></li>
                    <li><span>기부마라톤</span></li>
                    <li><span>지질학적가치</span></li>
                    <li><span>공원지정</span></li>
                    <li><span>비수구미생태길</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>사건사고</div>
                <ol>
                    <li><span>1대추락조종사</span></li>
                    <li><span>2명순직</span></li>
                    <li><span>비행단소속</span></li>
                    <li><span>추락조종사</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>2명비상탈출</span></li>
                    <li><span>초등학교배드민턴</span></li>
                    <li><span>산불방지대책</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>실시간방송</span></li>
                    <li><span>교도소무단</span></li>
                    <li><span>산불발생</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>훈련중추락</span></li>
                    <li><span>태풍하이선</span></li>
                    <li><span>청송교도소</span></li>
                    <li><span>무단침입</span></li>
                    <li><span>음란행위</span></li>
                    <li><span>농업부산물</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>행정</div>
                <ol>
                    <li><span>귀농귀촌</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>귀농인</span></li>
                    <li><span>안심가로등</span></li>
                    <li><span>축분고체연로</span></li>
                    <li><span>청송사랑화폐</span></li>
                    <li><span>전면무료</span></li>
                    <li><span>가축분뇨</span></li>
                    <li><span>물이용부담금</span></li>
                    <li><span>귀농귀촌유치</span></li>
                    <li><span>한국수력원자력</span></li>
                    <li><span>농촌융복합</span></li>
                    <li><span>귀농인정착</span></li>
                    <li><span>융복합산업</span></li>
                    <li><span>가로등설치</span></li>
                    <li><span>지원사업</span></li>
                    <li><span>도농복합도시</span></li>
                    <li><span>청년농업인</span></li>
                    <li><span>영농정착</span></li>
                    <li><span>농업창업</span></li>
                </ol>
            </div>
            `,
            영양군: `
            <div class="keyword-box">
                <div><span>1</span>지역발전</div>
                <ol>
                    <li><span>양수발전소유치</span></li>
                    <li><span>지역아동센터</span></li>
                    <li><span>자작나무숲</span></li>
                    <li><span>밤하늘보호공원</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>공립형지역</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>당숲</span></li>
                    <li><span>천연기념물지정</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>국립생태원</span></li>
                    <li><span>국가지정문화재</span></li>
                    <li><span>오층모전석탑</span></li>
                    <li><span>죽파리자작나무숲</span></li>
                    <li><span>서비스종합평가</span></li>
                    <li><span>관광자원</span></li>
                    <li><span>민원서비스통합</span></li>
                    <li><span>양수발전소건설</span></li>
                    <li><span>국유림명품숲</span></li>
                    <li><span>송하리졸참나무와당숲</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>사건사고</div>
                <ol>
                    <li><span>산림당국</span></li>
                    <li><span>옛날과자</span></li>
                    <li><span>바가지논란</span></li>
                    <li><span>산불발생</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>출생아수</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>문화관광축제</span></li>
                    <li><span>외부상인</span></li>
                    <li><span>건조한날씨</span></li>
                    <li><span>지역축제</span></li>
                    <li><span>광산문학연구소</span></li>
                    <li><span>과자한봉지</span></li>
                    <li><span>축제장</span></li>
                    <li><span>영양전통시장상인</span></li>
                    <li><span>35산불진화헬기</span></li>
                    <li><span>산불2단계</span></li>
                    <li><span>강릉단오제</span></li>
                    <li><span>피해면적</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>지역행사/행정</div>
                <ol>
                    <li><span>멸종위기종</span></li>
                    <li><span>국립생태원</span></li>
                    <li><span>교육지원청</span></li>
                    <li><span>반려동물</span></li>
                    <li><span>멸종위기종복원</span></li>
                    <li><span>밤하늘보호공원</span></li>
                    <li><span>멸종위기종복원센터</span></li>
                    <li><span>영양고추유통공사</span></li>
                    <li><span>추모공간</span></li>
                    <li><span>사랑의김치</span></li>
                    <li><span>김치나눔행사</span></li>
                    <li><span>영양고추</span></li>
                    <li><span>영양풍력발전</span></li>
                    <li><span>구세군자선냄비본부</span></li>
                    <li><span>시민자율봉사</span></li>
                    <li><span>영양산나물축제</span></li>
                    <li><span>산림휴양시설</span></li>
                    <li><span>산양촬영</span></li>
                    <li><span>아가씨선발대회</span></li>
                    <li><span>유기동물</span></li>
                </ol>
            </div>
            `,
            영덕군: `
            <div class="keyword-box">
                <div><span>1</span>사건사고</div>
                <ol>
                    <li><span>산림당국</span></li>
                    <li><span>산불발생</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>단계발령</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>산불진화헬기</span></li>
                    <li><span>백색입자</span></li>
                    <li><span>산불방지대책본부</span></li>
                    <li><span>마을회관</span></li>
                    <li><span>비위생</span></li>
                    <li><span>대형산불</span></li>
                    <li><span>해당업체</span></li>
                    <li><span>건조오징어</span></li>
                    <li><span>식품의약품안전처</span></li>
                    <li><span>원전정책</span></li>
                    <li><span>입자발견</span></li>
                    <li><span>원전예정구역</span></li>
                    <li><span>한국수력원자력</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>문화</div>
                <ol>
                    <li><span>전국재해구호협회</span></li>
                    <li><span>야성초등학교</span></li>
                    <li><span>인천상륙작전</span></li>
                    <li><span>초등학교부지</span></li>
                    <li><span>영덕시장화재</span></li>
                    <li><span>해파랑공원</span></li>
                    <li><span>희망브리지</span></li>
                    <li><span>장사상륙작전전승</span></li>
                    <li><span>전승기념관</span></li>
                    <li><span>피해복구</span></li>
                    <li><span>구호물품</span></li>
                    <li><span>영덕시장상인</span></li>
                    <li><span>오퍼레이티드바이소노</span></li>
                    <li><span>생활숙박시설</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>긴급구호물품</span></li>
                    <li><span>추석대목</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>피해상인</span></li>
                    <li><span>시장개설</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>산업</div>
                <ol>
                    <li><span>평균총급여액</span></li>
                    <li><span>인당평균</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>청년마을</span></li>
                    <li><span>전국평균</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>활력증진사업</span></li>
                    <li><span>생활SOC복합</span></li>
                    <li><span>어촌신활력증진</span></li>
                    <li><span>축구트레이닝센터</span></li>
                    <li><span>복합화사업</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>협약체결</span></li>
                    <li><span>플랫폼조성사업</span></li>
                    <li><span>어촌경제플랫폼</span></li>
                    <li><span>안전인프라개선</span></li>
                    <li><span>예정구역지정</span></li>
                    <li><span>최종선정</span></li>
                    <li><span>지원사업</span></li>
                    <li><span>생활플랫폼조성</span></li>
                </ol>
            </div>
            `,
            봉화군: `
            <div class="keyword-box">
                <div><span>1</span>사건사고</div>
                <ol>
                    <li><span>광산매물사고</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>아연광산</span></li>
                    <li><span>구조작업</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>구조당국</span></li>
                    <li><span>아연광산매물</span></li>
                    <li><span>사고고립</span></li>
                    <li><span>붕괴사고</span></li>
                    <li><span>산불발생</span></li>
                    <li><span>광산안전사무소</span></li>
                    <li><span>재난안전대책본부</span></li>
                    <li><span>발생산불</span></li>
                    <li><span>기적생환</span></li>
                    <li><span>산불3단계</span></li>
                    <li><span>호우특보</span></li>
                    <li><span>산사태발생</span></li>
                    <li><span>아연채굴</span></li>
                    <li><span>특보발효</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>문화</div>
                <ol>
                    <li><span>국립백두대간수목원</span></li>
                    <li><span>시드볼트</span></li>
                    <li><span>수목원정원관리원</span></li>
                    <li><span>분천산타마을</span></li>
                    <li><span>스마트레이더</span></li>
                    <li><span>야생식물종자</span></li>
                    <li><span>호랑이숲</span></li>
                    <li><span>국립세종수목원</span></li>
                    <li><span>식물종자영구</span></li>
                    <li><span>베트남마을조성사업</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>국가보안시설</span></li>
                    <li><span>대구지방환경청</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>글로벌시드볼트</span></li>
                    <li><span>환경보전법</span></li>
                    <li><span>한국호랑이</span></li>
                    <li><span>멸종위기종</span></li>
                    <li><span>백두산호랑이보존</span></li>
                    <li><span>청량산</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>도시인프라</div>
                <ol>
                    <li><span>영풍석포제련소</span></li>
                    <li><span>정책형뉴딜</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>뉴딜펀드</span></li>
                    <li><span>문화재수리재료</span></li>
                    <li><span>수리재료센터</span></li>
                    <li><span>조업정지</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>신한그린뉴딜</span></li>
                    <li><span>오미산</span></li>
                    <li><span>노후주택개선</span></li>
                    <li><span>목재친화도시</span></li>
                    <li><span>오미산풍력발전사업</span></li>
                    <li><span>환경보존법</span></li>
                    <li><span>목재친화도시조성</span></li>
                    <li><span>풍력발전</span></li>
                    <li><span>배터리재사용</span></li>
                    <li><span>특고압송전선로</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>파일럿공장가동</span></li>
                </ol>
            </div>
            `,
            울진군: `
            <div class="keyword-box">
                <div><span>1</span>사건사고</div>
                <ol>
                    <li><span>대형산불</span></li>
                    <li><span>금강송군락지</span></li>
                    <li><span>산불진화</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>산불피해복구</span></li>
                    <li><span>산불진화헬기</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>재해구호협회</span></li>
                    <li><span>임시조립주택</span></li>
                    <li><span>특별재난지역선포</span></li>
                    <li><span>산불방지대책</span></li>
                    <li><span>긴급구호물품</span></li>
                    <li><span>재난사태</span></li>
                    <li><span>돼지열병</span></li>
                    <li><span>사고선박</span></li>
                    <li><span>무단침범</span></li>
                    <li><span>공군전략정찰기</span></li>
                    <li><span>어선전복</span></li>
                    <li><span>중국인선원</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>원자력발전</div>
                <ol>
                    <li><span>한울1호기</span></li>
                    <li><span>한울원자력본부</span></li>
                    <li><span>한국수력원자력</span></li>
                    <li><span>원전정책</span></li>
                    <li><span>상업운전</span></li>
                    <li><span>건설재개</span></li>
                    <li><span>원자력안전</span></li>
                    <li><span>건식저장시설</span></li>
                    <li><span>4호기건설</span></li>
                    <li><span>한올2호기</span></li>
                    <li><span>공사중단</span></li>
                    <li><span>운전시작</span></li>
                    <li><span>원전생태계복원</span></li>
                    <li><span>전력생산</span></li>
                    <li><span>원전정책폐기</span></li>
                    <li><span>에너지정책</span></li>
                    <li><span>설계수명</span></li>
                    <li><span>신규원전건설</span></li>
                    <li><span>지역경제</span></li>
                    <li><span>원자력안전기술원</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>지역행사/지역개발</div>
                <ol>
                    <li><span>동서트레일</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>동서횡단철도</span></li>
                    <li><span>해안스카이레일</span></li>
                    <li><span>울진역센트럴두산</span></li>
                    <li><span>해양과학관</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>해양치유센터</span></li>
                    <li><span>해양치유산업</span></li>
                    <li><span>산림생태복원</span></li>
                    <li><span>국가철도망구축</span></li>
                    <li><span>금강소나무림</span></li>
                    <li><span>마을통과</span></li>
                    <li><span>지역경제</span></li>
                    <li><span>프로그램운영</span></li>
                    <li><span>울진사랑카드</span></li>
                    <li><span>기부자숲</span></li>
                    <li><span>해양치유자원</span></li>
                    <li><span>송전선로건설</span></li>
                </ol>
            </div>
            `,
            포항시: `
            <div class="keyword-box">
                <div><span>1</span>사건사고</div>
                <ol>
                    <li><span>태풍힌남노</span></li>
                    <li><span>아파트지하주차장</span></li>
                    <li><span>11호태풍</span></li>
                    <li><span>아파치헬기사격</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>포항수성사격장</span></li>
                    <li><span>타풍마이삭</span></li>
                    <li><span>복구작업</span></li>
                    <li><span>해병대1사단</span></li>
                    <li><span>수성사격장반대</span></li>
                    <li><span>심정지상태</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>배수작업</span></li>
                    <li><span>태풍피해</span></li>
                    <li><span>사격훈련</span></li>
                    <li><span>태풍하이선</span></li>
                    <li><span>재난안전대책</span></li>
                    <li><span>동물보호법위반</span></li>
                    <li><span>주한미군</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>지역행사</div>
                <ol>
                    <li><span>해병대1사단</span></li>
                    <li><span>국군의날</span></li>
                    <li><span>프로축구</span></li>
                    <li><span>큐K리그</span></li>
                    <li><span>합동상륙훈련</span></li>
                    <li><span>포항스틸야드</span></li>
                    <li><span>포항스틸러스</span></li>
                    <li><span>포항철길숲</span></li>
                    <li><span>국제불빛축제</span></li>
                    <li><span>스페이스워크</span></li>
                    <li><span>한국형상륙돌격</span></li>
                    <li><span>한미해병대</span></li>
                    <li><span>학도의용군</span></li>
                    <li><span>울릉크루즈</span></li>
                    <li><span>국가지정문화재</span></li>
                    <li><span>도시숲</span></li>
                    <li><span>체험형조형물</span></li>
                    <li><span>금광리신생대나무</span></li>
                    <li><span>포항문화재단</span></li>
                    <li><span>해병대교육훈련</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>행정/지역개발</div>
                <ol>
                    <li><span>비규제지역</span></li>
                    <li><span>포항블루밸리</span></li>
                    <li><span>포스코퓨처</span></li>
                    <li><span>양극재공장</span></li>
                    <li><span>미래기술</span></li>
                    <li><span>사용후배터리</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>협약체결</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>지진발생</span></li>
                    <li><span>펜타시티</span></li>
                    <li><span>특화단지지정</span></li>
                    <li><span>규제지역</span></li>
                    <li><span>인조흑연음극재</span></li>
                    <li><span>포항사랑상품권</span></li>
                    <li><span>포항지진특별법</span></li>
                    <li><span>상병수당</span></li>
                    <li><span>지방중소도시</span></li>
                    <li><span>국가첨단전략사업</span></li>
                    <li><span>힐스테이트</span></li>
                </ol>
            </div>
            `,
        },
        gyeongnam: {
            진주시: `
            <div class="keyword-box">
                <div><span>1</span>산업/행정</div>
                <ol>
                    <li><span>경상국립대학교</span></li>
                    <li><span>국토안전관리원</span></li>
                    <li><span>한국남동발전</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>협약체결</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>중진공</span></li>
                    <li><span>진주LH본사</span></li>
                    <li><span>중소기업 벤처진흥공단</span></li>
                    <li><span>경상국립대병원</span></li>
                    <li><span>정신질환자</span></li>
                    <li><span>지역사회</span></li>
                    <li><span>한국산업기술</span></li>
                    <li><span>한국세라믹기술원</span></li>
                    <li><span>산업기술시험원</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>중진공이사장</span></li>
                    <li><span>환경시험시설</span></li>
                    <li><span>최종선정</span></li>
                    <li><span>위성특화지구</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>문화</div>
                <ol>
                    <li><span>진주K기업가정신</span></li>
                    <li><span>진주남강유등축제</span></li>
                    <li><span>선수권대회</span></li>
                    <li><span>문화관광재단</span></li>
                    <li><span>진주문화관광</span></li>
                    <li><span>국립진주박물관</span></li>
                    <li><span>기업가정신센터</span></li>
                    <li><span>아시아역도선수</span></li>
                    <li><span>월아산숲속</span></li>
                    <li><span>승산마을</span></li>
                    <li><span>형평운동</span></li>
                    <li><span>진주국제포럼</span></li>
                    <li><span>한국경영학회</span></li>
                    <li><span>익룡발자국화석</span></li>
                    <li><span>천연기념물지정</span></li>
                    <li><span>진주역철도부지</span></li>
                    <li><span>기업가정신수도</span></li>
                    <li><span>발자국화석산지</span></li>
                    <li><span>공룍익룡발자국</span></li>
                    <li><span>국립현대미술관</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>사건사고</div>
                <ol>
                    <li><span>무기징역</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>혐의재판</span></li>
                    <li><span>징역선고</span></li>
                    <li><span>심신미약상태</span></li>
                    <li><span>혐의기소</span></li>
                    <li><span>아파트불</span></li>
                    <li><span>사형선고</span></li>
                    <li><span>투기의혹</span></li>
                    <li><span>한국토지주택공사직원</span></li>
                    <li><span>차별폭행</span></li>
                    <li><span>땅투기의혹</span></li>
                    <li><span>보육교사</span></li>
                    <li><span>혐오범죄</span></li>
                    <li><span>스토킹범죄</span></li>
                    <li><span>무기징역감형</span></li>
                    <li><span>반부패경제범죄</span></li>
                    <li><span>경제범죄수사대</span></li>
                    <li><span>폭행혐의</span></li>
                    <li><span>자신아파트</span></li>
                </ol>
            </div>
            `,
            통영시: `
            <div class="keyword-box">
                <div><span>1</span>사건사고</div>
                <ol>
                    <li><span>통영해경</span></li>
                    <li><span>태풍힌남노</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>중심기압</span></li>
                    <li><span>6호태풍카눈</span></li>
                    <li><span>부근해상</span></li>
                    <li><span>11호태풍</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>태풍특보</span></li>
                    <li><span>해상시속</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>동굴고립</span></li>
                    <li><span>재난안전대책본부</span></li>
                    <li><span>연안구조정</span></li>
                    <li><span>경비함정</span></li>
                    <li><span>태풍주의보</span></li>
                    <li><span>태풍경보</span></li>
                    <li><span>고립된다이버</span></li>
                    <li><span>풍속초속</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>산업/행정</div>
                <ol>
                    <li><span>통영에코파워</span></li>
                    <li><span>한국섬진흥원</span></li>
                    <li><span>한려해상국립공원</span></li>
                    <li><span>해양레저관광</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>노후주택개선</span></li>
                    <li><span>천연가스발전사업</span></li>
                    <li><span>야간관광특화</span></li>
                    <li><span>관광추진조직</span></li>
                    <li><span>관광특화도시</span></li>
                    <li><span>지역관광추진</span></li>
                    <li><span>섬진흥원설립</span></li>
                    <li><span>협력형노후</span></li>
                    <li><span>섬의날</span></li>
                    <li><span>국립공원</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>레저관광벨트</span></li>
                    <li><span>섬진흥원유치</span></li>
                    <li><span>주택개선사업</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>문화</div>
                <ol>
                    <li><span>욕지도</span></li>
                    <li><span>통영국제음악제</span></li>
                    <li><span>통영국제음악당</span></li>
                    <li><span>고메원도넛</span></li>
                    <li><span>윤이상 국제음악콩쿠르</span></li>
                    <li><span>임윤찬</span></li>
                    <li><span>통영국제음악재단</span></li>
                    <li><span>대학축구연맹전</span></li>
                    <li><span>통영페스티벌 오케스트라</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>원인조사</span></li>
                    <li><span>국제요트대회</span></li>
                    <li><span>춘계대학축구</span></li>
                    <li><span>우승차지</span></li>
                    <li><span>국제음악당콘서트홀</span></li>
                    <li><span>유네스코음악창</span></li>
                    <li><span>콩쿠르우승</span></li>
                    <li><span>고구마라떼</span></li>
                    <li><span>현대음악작곡가</span></li>
                    <li><span>윤이상첼로협주곡</span></li>
                </ol>
            </div>
            `,
            고성군: `
            <div class="keyword-box">
                <div><span>1</span>행정</div>
                <ol>
                    <li><span>점심시간휴무</span></li>
                    <li><span>해양치유센터</span></li>
                    <li><span>점심시간</span></li>
                    <li><span>해양치유산업</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>해양치유자원</span></li>
                    <li><span>자원활용</span></li>
                    <li><span>꿈키움바우처</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>평생학습도시</span></li>
                    <li><span>고성사랑상품권</span></li>
                    <li><span>안전조치</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>태풍힌남노</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>12호태풍</span></li>
                    <li><span>해양자원</span></li>
                    <li><span>유기동물</span></li>
                    <li><span>태풍마이삭</span></li>
                    <li><span>휴무제시행</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>산업</div>
                <ol>
                    <li><span>SK에코플랜트</span></li>
                    <li><span>SK오션플랜트</span></li>
                    <li><span>해상풍력하부구조물</span></li>
                    <li><span>한국남동발전</span></li>
                    <li><span>중대재해처벌법</span></li>
                    <li><span>스마트양식클러스터</span></li>
                    <li><span>무인기종합타운</span></li>
                    <li><span>해상풍력시장</span></li>
                    <li><span>삼강에스엔씨</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>부유식해상풍력</span></li>
                    <li><span>삼강엠앤티</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>중대재해법</span></li>
                    <li><span>중대재해처벌법위반</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>양촌용정지구</span></li>
                    <li><span>협약체결</span></li>
                    <li><span>송학동고분군</span></li>
                    <li><span>도시재생뉴딜사업</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>문화</div>
                <ol>
                    <li><span>공룡세계엑스포</span></li>
                    <li><span>공룡발자국화석</span></li>
                    <li><span>아동친화도시</span></li>
                    <li><span>세계엑스포조직위</span></li>
                    <li><span>선수권대회</span></li>
                    <li><span>공룡나라쇼핑몰</span></li>
                    <li><span>공룡발자국</span></li>
                    <li><span>상족암군립공원</span></li>
                    <li><span>국가지질공원</span></li>
                    <li><span>이번대회</span></li>
                    <li><span>보물지정</span></li>
                    <li><span>발자국화석산지</span></li>
                    <li><span>효의왕후</span></li>
                    <li><span>공룡알화석</span></li>
                    <li><span>엑스포성공</span></li>
                    <li><span>고성공룡박물관</span></li>
                    <li><span>지정예고</span></li>
                    <li><span>국가지정문화재</span></li>
                    <li><span>상족암</span></li>
                    <li><span>국민체육센터</span></li>
                </ol>
            </div>
            `,
            사천시: `
            <div class="keyword-box">
                <div><span>1</span>우주/항공</div>
                <ol>
                    <li><span>우주항공청</span></li>
                    <li><span>한국항공우주</span></li>
                    <li><span>한국형전투기</span></li>
                    <li><span>시험비행</span></li>
                    <li><span>시제1호기</span></li>
                    <li><span>항공우주청</span></li>
                    <li><span>비행성공</span></li>
                    <li><span>시제기</span></li>
                    <li><span>방사청</span></li>
                    <li><span>비행시험</span></li>
                    <li><span>우주항공산업</span></li>
                    <li><span>항공청설립</span></li>
                    <li><span>에어로스페이스</span></li>
                    <li><span>과학기술정보</span></li>
                    <li><span>국산초음속전투기</span></li>
                    <li><span>우주산업</span></li>
                    <li><span>산업KAI본사</span></li>
                    <li><span>기술개발</span></li>
                    <li><span>방위산업</span></li>
                    <li><span>항공MRO사업</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>사건사고</div>
                <ol>
                    <li><span>KT1훈련기</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>혐의기소</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>3훈련비행단</span></li>
                    <li><span>학생조종사</span></li>
                    <li><span>정치자금법위반</span></li>
                    <li><span>보육교사</span></li>
                    <li><span>경위조사</span></li>
                    <li><span>혐의재판</span></li>
                    <li><span>전자발찌</span></li>
                    <li><span>충돌추락</span></li>
                    <li><span>비행훈련중</span></li>
                    <li><span>무죄선고</span></li>
                    <li><span>비행기록장치</span></li>
                    <li><span>원인조사</span></li>
                    <li><span>사고순직</span></li>
                    <li><span>공중충돌</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>문화</div>
                <ol>
                    <li><span>사천바다케이블카</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>아라마루아쿠아리움</span></li>
                    <li><span>바다케이블카</span></li>
                    <li><span>비스타제주호</span></li>
                    <li><span>케이블카자연휴양림</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>고향사랑기부금</span></li>
                    <li><span>삼천포대교</span></li>
                    <li><span>해양관광도시</span></li>
                    <li><span>실안낙조</span></li>
                    <li><span>초양도아쿠아리움</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>자연휴양림</span></li>
                    <li><span>이벤트실시</span></li>
                    <li><span>부처님위</span></li>
                    <li><span>비토섬</span></li>
                    <li><span>관광명소</span></li>
                    <li><span>실안노을</span></li>
                    <li><span>해안둘레길</span></li>
                </ol>
            </div>
            `,
            김해시: `
            <div class="keyword-box">
                <div><span>1</span>문화</div>
                <ol>
                    <li><span>시민문화체험</span></li>
                    <li><span>문화체험전시관</span></li>
                    <li><span>생태문화공원</span></li>
                    <li><span>김해문화재단</span></li>
                    <li><span>롯데워터파크</span></li>
                    <li><span>문화의전당</span></li>
                    <li><span>대성동고분박물관</span></li>
                    <li><span>봉화마을생태문화</span></li>
                    <li><span>사적지정</span></li>
                    <li><span>발굴조사</span></li>
                    <li><span>대성동고분군</span></li>
                    <li><span>화포천습지</span></li>
                    <li><span>학교정책국</span></li>
                    <li><span>세계유산</span></li>
                    <li><span>세계최대규모</span></li>
                    <li><span>유곡리두락리</span></li>
                    <li><span>김해강소특구</span></li>
                    <li><span>고령지산동고분군</span></li>
                    <li><span>보물지정</span></li>
                    <li><span>워터파크</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>사건사고</div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>혐의기소</span></li>
                    <li><span>불법촬영카메라</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>김해중부경찰서</span></li>
                    <li><span>경위조사</span></li>
                    <li><span>혐의재판</span></li>
                    <li><span>재산피해</span></li>
                    <li><span>부경동물원</span></li>
                    <li><span>카메라설치</span></li>
                    <li><span>폐쇄회로CCTV</span></li>
                    <li><span>불법촬영</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>소방서추산</span></li>
                    <li><span>안전조치</span></li>
                    <li><span>청주동물원</span></li>
                    <li><span>마약사범</span></li>
                    <li><span>공장불</span></li>
                    <li><span>혈중알코올농도</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>산업</div>
                <ol>
                    <li><span>비규제지역</span></li>
                    <li><span>지하층지상</span></li>
                    <li><span>협약체결</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>중대재해처벌법</span></li>
                    <li><span>1순위청약</span></li>
                    <li><span>대흥알앤티</span></li>
                    <li><span>김해관광유통단지</span></li>
                    <li><span>마산복선전철</span></li>
                    <li><span>부전마산복선</span></li>
                    <li><span>동북아물류플랫폼</span></li>
                    <li><span>규모조성</span></li>
                    <li><span>다회용기</span></li>
                    <li><span>직업성질병</span></li>
                    <li><span>급성중독</span></li>
                    <li><span>산업안전보건</span></li>
                    <li><span>산업단지조성사업</span></li>
                    <li><span>부울경</span></li>
                    <li><span>임시건강진단</span></li>
                    <li><span>교통여건</span></li>
                </ol>
            </div>
            `,
            밀양시: `
            <div class="keyword-box">
                <div><span>1</span>산업</div>
                <ol>
                    <li><span>스마트팜</span></li>
                    <li><span>스마트팜혁신밸리</span></li>
                    <li><span>아리랑우주천문대</span></li>
                    <li><span>나노융합 국가산업단지</span></li>
                    <li><span>나노융합국가</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>상생형지역</span></li>
                    <li><span>진로교육원</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>기상과학관</span></li>
                    <li><span>협약체결</span></li>
                    <li><span>추진중</span></li>
                    <li><span>융합국가산단</span></li>
                    <li><span>청년농업인</span></li>
                    <li><span>진로교육</span></li>
                    <li><span>임대형스마트팜</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>밀양신공장</span></li>
                    <li><span>지역일자리</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>지역행사</div>
                <ol>
                    <li><span>밀양아리랑대축제</span></li>
                    <li><span>공연예술축제</span></li>
                    <li><span>영남알프스</span></li>
                    <li><span>밀양공연예술</span></li>
                    <li><span>밀양돼지국밥</span></li>
                    <li><span>방문의해</span></li>
                    <li><span>아리랑아트센터</span></li>
                    <li><span>문화관광재단</span></li>
                    <li><span>밀양문화관광</span></li>
                    <li><span>반려동물지원센터</span></li>
                    <li><span>밀양아리나</span></li>
                    <li><span>얼음골</span></li>
                    <li><span>날좀보소</span></li>
                    <li><span>반려동물</span></li>
                    <li><span>얼음골사과</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>도래재자연</span></li>
                    <li><span>한국연극협회</span></li>
                    <li><span>드론환경감시단</span></li>
                    <li><span>지역문화예술</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>행정/인프라</div>
                <ol>
                    <li><span>김해신공항</span></li>
                    <li><span>공항건설</span></li>
                    <li><span>미분양관리지역</span></li>
                    <li><span>가덕신공항</span></li>
                    <li><span>상생형지역</span></li>
                    <li><span>김해공항확장</span></li>
                    <li><span>협약체결</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>공항추진</span></li>
                    <li><span>고향사랑기부금</span></li>
                    <li><span>동남권관문공항</span></li>
                    <li><span>지역일자리</span></li>
                    <li><span>군산형일자리</span></li>
                    <li><span>공항입지</span></li>
                    <li><span>공항공단엔지니어링</span></li>
                    <li><span>분양보증예비심사</span></li>
                    <li><span>지방중소도시</span></li>
                    <li><span>공항특별법</span></li>
                    <li><span>비규제지역</span></li>
                </ol>
            </div>
            `,
            거제시: `
            <div class="keyword-box">
                <div><span>1</span>산업</div>
                <ol>
                    <li><span>대우조선</span></li>
                    <li><span>대우조선해양</span></li>
                    <li><span>조선하청지회</span></li>
                    <li><span>금속노조</span></li>
                    <li><span>고성조선하청</span></li>
                    <li><span>공권력투입</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>하청노동자</span></li>
                    <li><span>삼성중공업</span></li>
                    <li><span>고용노동부장관</span></li>
                    <li><span>지하층지상</span></li>
                    <li><span>대우조선해양하청노조</span></li>
                    <li><span>민주노총금속노조</span></li>
                    <li><span>거제유로스카이</span></li>
                    <li><span>원유운반선</span></li>
                    <li><span>상생협력선포식</span></li>
                    <li><span>건조중</span></li>
                    <li><span>선출항명명식</span></li>
                    <li><span>신형호위함</span></li>
                    <li><span>코랄술</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>사건사고</div>
                <ol>
                    <li><span>태풍힌남노</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>6호태풍카눈</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>10호태풍하이선</span></li>
                    <li><span>9호태풍마이삭</span></li>
                    <li><span>중심기압</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>재난안전대책본부</span></li>
                    <li><span>안전조치</span></li>
                    <li><span>신고접수</span></li>
                    <li><span>최대순간풍속</span></li>
                    <li><span>부근상륙</span></li>
                    <li><span>태풍특보</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>태풍경보</span></li>
                    <li><span>경찰조사</span></li>
                    <li><span>생후5일</span></li>
                    <li><span>달콤왕가탕후루</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>지역발전/행정</div>
                <ol>
                    <li><span>남부내륙철도</span></li>
                    <li><span>바다의날</span></li>
                    <li><span>아세안국가정원</span></li>
                    <li><span>장목관광단지</span></li>
                    <li><span>흥남철수작전</span></li>
                    <li><span>지세포해양공원</span></li>
                    <li><span>관광단지조성기념식</span></li>
                    <li><span>바람의언덕</span></li>
                    <li><span>체험휴양마을</span></li>
                    <li><span>장목관광단지조성</span></li>
                    <li><span>내륙철도건설</span></li>
                    <li><span>가덕신공항</span></li>
                    <li><span>공공배달앱</span></li>
                    <li><span>활력증진사업</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>배달올거제</span></li>
                    <li><span>철도건설사업</span></li>
                    <li><span>국가정원조성</span></li>
                    <li><span>달빛내륙철도</span></li>
                    <li><span>관광명소</span></li>
                </ol>
            </div>
            `,
            의령군: `
            <div class="keyword-box">
                <div><span>1</span>사건사고</div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>공직선거법위반</span></li>
                    <li><span>혐의기소</span></li>
                    <li><span>기초의원</span></li>
                    <li><span>광역의원</span></li>
                    <li><span>기초단체장</span></li>
                    <li><span>경비행기추락</span></li>
                    <li><span>중과실치상혐의</span></li>
                    <li><span>혐의재판</span></li>
                    <li><span>의령군수재선거</span></li>
                    <li><span>선거법위반혐의</span></li>
                    <li><span>캐디교체</span></li>
                    <li><span>교체요구</span></li>
                    <li><span>원인조사</span></li>
                    <li><span>구속기소</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>캐디앞</span></li>
                    <li><span>강제추행혐의</span></li>
                    <li><span>공직선거법</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>문화</div>
                <ol>
                    <li><span>솥바위</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>미래교육원</span></li>
                    <li><span>미래교육테마파크</span></li>
                    <li><span>리치리치</span></li>
                    <li><span>이건희미술관유치</span></li>
                    <li><span>부자기운</span></li>
                    <li><span>홍의장군</span></li>
                    <li><span>호암이병철</span></li>
                    <li><span>국립국어사전박물관</span></li>
                    <li><span>국립현대미술관</span></li>
                    <li><span>의령홍의장군</span></li>
                    <li><span>의병정신</span></li>
                    <li><span>교향사랑기부금</span></li>
                    <li><span>교육청미래교육</span></li>
                    <li><span>삼성이건희</span></li>
                    <li><span>명예도로</span></li>
                    <li><span>유치전</span></li>
                    <li><span>국립근대미술관</span></li>
                    <li><span>미술관유치</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>산업/인프라</div>
                <ol>
                    <li><span>귀농귀촌</span></li>
                    <li><span>정보화장비</span></li>
                    <li><span>경무기획정보</span></li>
                    <li><span>지방소멸대응</span></li>
                    <li><span>소멸대응기금</span></li>
                    <li><span>초급공정통제사</span></li>
                    <li><span>인구감소지역</span></li>
                    <li><span>의령사랑상품권</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>청년마을</span></li>
                    <li><span>교육지원청</span></li>
                    <li><span>공정통제사소규모전술종합훈련</span></li>
                    <li><span>의령교육지원</span></li>
                    <li><span>부림일반산업단지</span></li>
                    <li><span>산지태양광</span></li>
                    <li><span>공공자원개방공유</span></li>
                    <li><span>기획교육</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>지역사회</span></li>
                    <li><span>개방공유서비스</span></li>
                </ol>
            </div>
            `,
            함안군: `
            <div class="keyword-box">
                <div><span>1</span>사건사고</div>
                <ol>
                    <li><span>중대재해처벌법</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>혐의기소</span></li>
                    <li><span>중대재해처벌법위반</span></li>
                    <li><span>한국제강</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>법정구속</span></li>
                    <li><span>한국제강대표이사</span></li>
                    <li><span>안전보건관리</span></li>
                    <li><span>안전조치</span></li>
                    <li><span>안전조치의무</span></li>
                    <li><span>경영책임자</span></li>
                    <li><span>안전보건확보의무</span></li>
                    <li><span>혐의재판</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>한국제강법인</span></li>
                    <li><span>무게방열판</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>온유파트너스</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>문화</div>
                <ol>
                    <li><span>함안낙화놀이</span></li>
                    <li><span>발굴조사</span></li>
                    <li><span>문화재연구소</span></li>
                    <li><span>입곡군립공원</span></li>
                    <li><span>강주해바라기축제</span></li>
                    <li><span>토기가마군</span></li>
                    <li><span>유네스코세계유산등재</span></li>
                    <li><span>기념물지정</span></li>
                    <li><span>낙화놀이</span></li>
                    <li><span>세계유산</span></li>
                    <li><span>유곡리두락리</span></li>
                    <li><span>숯한지</span></li>
                    <li><span>경남무형문화재</span></li>
                    <li><span>유네스코</span></li>
                    <li><span>사적지정예고</span></li>
                    <li><span>함안우거리토기</span></li>
                    <li><span>사랑의쌀</span></li>
                    <li><span>유네스코세계유산위원회</span></li>
                    <li><span>국제기념물 유적협의회</span></li>
                    <li><span>고분군세계유산</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>산업/행정</div>
                <ol>
                    <li><span>지역아동센터</span></li>
                    <li><span>협약체결</span></li>
                    <li><span>공립형지역</span></li>
                    <li><span>포스코히어로즈</span></li>
                    <li><span>아동센터건립</span></li>
                    <li><span>수소전기트램</span></li>
                    <li><span>하이퍼튜브</span></li>
                    <li><span>하이퍼튜브 종합시험센터</span></li>
                    <li><span>로만시스</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>의료폐기물소각</span></li>
                    <li><span>포스코청암</span></li>
                    <li><span>폐기물소각시설</span></li>
                    <li><span>종합시험센터유치</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>히어로즈선정</span></li>
                    <li><span>낙동강유역환경청</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>사회적약자</span></li>
                    <li><span>자기력차량</span></li>
                </ol>
            </div>
            `,
            창녕군: `
            <div class="keyword-box">
                <div><span>1</span>사건사고</div>
                <ol>
                    <li><span>아동학대사건</span></li>
                    <li><span>공직선거법위반</span></li>
                    <li><span>학대혐의</span></li>
                    <li><span>피해아동</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>아동보호전문기관</span></li>
                    <li><span>계부친모</span></li>
                    <li><span>선거법위반혐의</span></li>
                    <li><span>혐의재판</span></li>
                    <li><span>영장신청</span></li>
                    <li><span>선거인매수</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>아동복지법</span></li>
                    <li><span>사건발생</span></li>
                    <li><span>경찰신고</span></li>
                    <li><span>온열질환</span></li>
                    <li><span>혐의구속</span></li>
                    <li><span>혐의부인</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>화재원인</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>문화</div>
                <ol>
                    <li><span>따오기복원센터</span></li>
                    <li><span>우포따오기복원</span></li>
                    <li><span>교동송현동</span></li>
                    <li><span>멸종위기야생동물</span></li>
                    <li><span>부화성공</span></li>
                    <li><span>야생방사</span></li>
                    <li><span>송현동고분군</span></li>
                    <li><span>산토끼노래동산</span></li>
                    <li><span>멸종위기종</span></li>
                    <li><span>방사따오기</span></li>
                    <li><span>번식성공</span></li>
                    <li><span>람사르습지도시</span></li>
                    <li><span>생물권보전</span></li>
                    <li><span>부곡온천</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>개체수</span></li>
                    <li><span>골프대회</span></li>
                    <li><span>인공증식</span></li>
                    <li><span>장신구일체</span></li>
                    <li><span>생물다양성</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>산업/행정</div>
                <ol>
                    <li><span>온천도시지정</span></li>
                    <li><span>4대강사업</span></li>
                    <li><span>비상활주로</span></li>
                    <li><span>증류식소주</span></li>
                    <li><span>온천산업</span></li>
                    <li><span>외국인계절근로자</span></li>
                    <li><span>빛소주</span></li>
                    <li><span>창녕사랑상품권</span></li>
                    <li><span>우포의아침</span></li>
                    <li><span>비상활주로이착륙훈련</span></li>
                    <li><span>한미연합비상</span></li>
                    <li><span>프리미엄소주</span></li>
                    <li><span>연합비상활주로</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>한미공군</span></li>
                    <li><span>공중기동정찰</span></li>
                    <li><span>작전지속수행능력</span></li>
                    <li><span>지원대상</span></li>
                    <li><span>전시연합작전</span></li>
                    <li><span>원소주스피릿</span></li>
                </ol>
            </div>
            `,
            양산시: `
            <div class="keyword-box">
                <div><span>1</span>사건사고</div>
                <ol>
                    <li><span>혐의기소</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>시신훼손</span></li>
                    <li><span>혐의재판</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>시신유기</span></li>
                    <li><span>살해뒤</span></li>
                    <li><span>유기혐의</span></li>
                    <li><span>여성살해</span></li>
                    <li><span>택시기사</span></li>
                    <li><span>집단폭행</span></li>
                    <li><span>시신일부</span></li>
                    <li><span>살인혐의</span></li>
                    <li><span>또래여성</span></li>
                    <li><span>범행동기</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>폭염경보</span></li>
                    <li><span>보육교사</span></li>
                    <li><span>재산피해</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>산업</div>
                <ol>
                    <li><span>비규제지역</span></li>
                    <li><span>사송신도시</span></li>
                    <li><span>지하층지상</span></li>
                    <li><span>한국필립모리스</span></li>
                    <li><span>미분양관리지역</span></li>
                    <li><span>규제지역</span></li>
                    <li><span>지방중소도시</span></li>
                    <li><span>동남권메가시티</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>부울경</span></li>
                    <li><span>영농경력</span></li>
                    <li><span>양산공장</span></li>
                    <li><span>비연소제품</span></li>
                    <li><span>농업경영계획서</span></li>
                    <li><span>커뮤니티시설</span></li>
                    <li><span>고리2호기</span></li>
                    <li><span>양산울산광역철도</span></li>
                    <li><span>국가철도망구축</span></li>
                    <li><span>환경영향평가서</span></li>
                    <li><span>멸종위기종</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>문화/행정</div>
                <ol>
                    <li><span>원자력안전교부세</span></li>
                    <li><span>양산시립박물관</span></li>
                    <li><span>바이오랩허브</span></li>
                    <li><span>양산사랑카드</span></li>
                    <li><span>로날드맥도날드하우스</span></li>
                    <li><span>물금역KTX정차</span></li>
                    <li><span>안전교부세신설</span></li>
                    <li><span>방사선비상계획구역</span></li>
                    <li><span>배달양산</span></li>
                    <li><span>문화행사</span></li>
                    <li><span>바이오랩허브구축</span></li>
                    <li><span>마을주민</span></li>
                    <li><span>철도망구축계획</span></li>
                    <li><span>4차국가철도망구축</span></li>
                    <li><span>한국로날드맥도날드</span></li>
                    <li><span>환아들</span></li>
                    <li><span>사랑카드앱</span></li>
                    <li><span>양산사랑상품권</span></li>
                    <li><span>지방교부세법</span></li>
                    <li><span>문화프로그램</span></li>
                </ol>
            </div>
            `,
            하동군: `
            <div class="keyword-box">
                <div><span>1</span>사건사고</div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>화개장터</span></li>
                    <li><span>피해학생</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>학교폭력</span></li>
                    <li><span>산불발생</span></li>
                    <li><span>교육지원청</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>복구작업</span></li>
                    <li><span>자원봉사자</span></li>
                    <li><span>특별재난지역선포</span></li>
                    <li><span>변기물</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>기혹행위</span></li>
                    <li><span>서당기숙사</span></li>
                    <li><span>호우경보</span></li>
                    <li><span>교육시설</span></li>
                    <li><span>피해상황</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>산업/행정</div>
                <ol>
                    <li><span>시범운행지구</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>귀농귀촌주택</span></li>
                    <li><span>중요농업유산</span></li>
                    <li><span>광양만권 경제자유구역</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>도시재생뉴딜사업</span></li>
                    <li><span>협약체결</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>4대강사업</span></li>
                    <li><span>방류량</span></li>
                    <li><span>서부경남공공병원</span></li>
                    <li><span>귀촌주택용지</span></li>
                    <li><span>중요어업유산</span></li>
                    <li><span>공동주택용지</span></li>
                    <li><span>공공병원설립</span></li>
                    <li><span>자율주행 자동차시범운행</span></li>
                    <li><span>공공의료확충</span></li>
                    <li><span>삶의질</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>문화</div>
                <ol>
                    <li><span>세계차엑스포</span></li>
                    <li><span>하동세계차</span></li>
                    <li><span>하동야생차</span></li>
                    <li><span>중요농업유산</span></li>
                    <li><span>엑스포조직위</span></li>
                    <li><span>스마트복합쉼터</span></li>
                    <li><span>하동스포츠파크</span></li>
                    <li><span>하동녹차</span></li>
                    <li><span>하동녹차연구소</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>건강한미래</span></li>
                    <li><span>저연의향기</span></li>
                    <li><span>차시배지</span></li>
                    <li><span>하동야생차문화축제</span></li>
                    <li><span>차문화</span></li>
                    <li><span>엑스포성공</span></li>
                    <li><span>토지문학</span></li>
                    <li><span>평사리문학대상</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>문학제운영</span></li>
                </ol>
            </div>
            `,
            남해군: `
            <div class="keyword-box">
                <div><span>1</span>환경</div>
                <ol>
                    <li><span>남부지방</span></li>
                    <li><span>낮최고기온</span></li>
                    <li><span>예상강수량</span></li>
                    <li><span>남해안상륙</span></li>
                    <li><span>태풍힌남노</span></li>
                    <li><span>중심기압</span></li>
                    <li><span>번개동반</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>최대풍속</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>안전사고</span></li>
                    <li><span>태풍마이삭</span></li>
                    <li><span>호우특보</span></li>
                    <li><span>장마전선</span></li>
                    <li><span>기상청관계자</span></li>
                    <li><span>폭염특보</span></li>
                    <li><span>체감온도</span></li>
                    <li><span>태풍영향</span></li>
                    <li><span>시설물관리</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>문화/관광</div>
                <ol>
                    <li><span>남해관광</span></li>
                    <li><span>관광문화재단</span></li>
                    <li><span>남해마늘</span></li>
                    <li><span>남해방문의해</span></li>
                    <li><span>어촌체험휴양마을</span></li>
                    <li><span>독일마을</span></li>
                    <li><span>독일마을맥주축제</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>관광추진조직</span></li>
                    <li><span>관광자원</span></li>
                    <li><span>이순신순국공원</span></li>
                    <li><span>지역관광추진</span></li>
                    <li><span>협약체결</span></li>
                    <li><span>남해군관광문화</span></li>
                    <li><span>마늘활용</span></li>
                    <li><span>세계중요농업유산</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>남해여행</span></li>
                    <li><span>숙박시설</span></li>
                    <li><span>상생발전</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>산업</div>
                <ol>
                    <li><span>남해여수해저터널</span></li>
                    <li><span>해저터널</span></li>
                    <li><span>해저터널건설</span></li>
                    <li><span>한려해상국립공원</span></li>
                    <li><span>해저터널건설사업</span></li>
                    <li><span>영농형태양광</span></li>
                    <li><span>이동시간</span></li>
                    <li><span>남해안관광벨트</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>예비타당성조사통과</span></li>
                    <li><span>5개년계획</span></li>
                    <li><span>국지도건설계획</span></li>
                    <li><span>자율관리어업</span></li>
                    <li><span>터널개통</span></li>
                    <li><span>자원화사업</span></li>
                    <li><span>관광자원</span></li>
                    <li><span>해저터널시대</span></li>
                    <li><span>남중권발전</span></li>
                    <li><span>남해안관광</span></li>
                    <li><span>지역발전</span></li>
                </ol>
            </div>
            `,
            함양군: `
            <div class="keyword-box">
                <div><span>1</span>문화/관광</div>
                <ol>
                    <li><span>상림</span></li>
                    <li><span>항노화엑스포</span></li>
                    <li><span>함양상림공원</span></li>
                    <li><span>산삼항노화</span></li>
                    <li><span>대봉산휴양</span></li>
                    <li><span>고종시곶감</span></li>
                    <li><span>짚라인</span></li>
                    <li><span>상림공원일원</span></li>
                    <li><span>함양산삼축제</span></li>
                    <li><span>숲상림공원</span></li>
                    <li><span>지리산함양</span></li>
                    <li><span>상림공원청보리밭</span></li>
                    <li><span>연꽃어린이집원생</span></li>
                    <li><span>함양곶감</span></li>
                    <li><span>휴양밸리일원</span></li>
                    <li><span>상림연꽃단지</span></li>
                    <li><span>빅토리아연꽃</span></li>
                    <li><span>고종시곶감축제</span></li>
                    <li><span>정부승인국제행사</span></li>
                    <li><span>상림공원연꽃단지</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>사건사고</div>
                <ol>
                    <li><span>지리산자락</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>한국전통심마니</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>한국전통심마니협회</span></li>
                    <li><span>지리산천왕봉</span></li>
                    <li><span>전자발찌</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>지리산둘레길</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>산청함양사건</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>안전조치</span></li>
                    <li><span>뿌리발견</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>전동킥보드</span></li>
                    <li><span>발찌훼손</span></li>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>발견천종산삼</span></li>
                    <li><span>호우특보</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>행정/지역발전</div>
                <ol>
                    <li><span>달빛내륙철도</span></li>
                    <li><span>지방소멸대응</span></li>
                    <li><span>지방소멸대응기금</span></li>
                    <li><span>에디슨모터스</span></li>
                    <li><span>인구감소지역</span></li>
                    <li><span>영농형태양광</span></li>
                    <li><span>4차국가철도망구축</span></li>
                    <li><span>국가철도망구축계획</span></li>
                    <li><span>협약체결</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>광주대구</span></li>
                    <li><span>내륙철도건설</span></li>
                    <li><span>인구감소</span></li>
                    <li><span>달빛고속철도</span></li>
                    <li><span>체리수확</span></li>
                    <li><span>주거플랫폼사업</span></li>
                    <li><span>농촌유토피아사업</span></li>
                    <li><span>지속가능</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>함양농촌유토피아</span></li>
                </ol>
            </div>
            `,
            산청군: `
            <div class="keyword-box">
                <div><span>1</span>행정/인프라</div>
                <ol>
                    <li><span>사업추진</span></li>
                    <li><span>지리산국립공원</span></li>
                    <li><span>전통의약</span></li>
                    <li><span>산청군보건의료원</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>내과전문의</span></li>
                    <li><span>국립공원</span></li>
                    <li><span>지리산</span></li>
                    <li><span>지리산천왕봉</span></li>
                    <li><span>사업선정</span></li>
                    <li><span>산청사랑상품권</span></li>
                    <li><span>케이블카설치</span></li>
                    <li><span>공중보건</span></li>
                    <li><span>지리산케이블카설치</span></li>
                    <li><span>경남산청군보건의료</span></li>
                    <li><span>지원대상</span></li>
                    <li><span>지원사업</span></li>
                    <li><span>지역자활센터</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>사건사고</div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>경남산청함양거창</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>산청함양사건</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>남부지방</span></li>
                    <li><span>재난안전대책본부</span></li>
                    <li><span>호우경보</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>중부지방</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>호우특보</span></li>
                    <li><span>산불진화헬기</span></li>
                    <li><span>산불발생</span></li>
                    <li><span>물폭탄</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>피해면적</span></li>
                    <li><span>번개동반</span></li>
                    <li><span>시설피해</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>지역행사</div>
                <ol>
                    <li><span>전통의약</span></li>
                    <li><span>항노화엑스포</span></li>
                    <li><span>세계전통</span></li>
                    <li><span>산엔청</span></li>
                    <li><span>산청한방약초축제</span></li>
                    <li><span>엑스포조직</span></li>
                    <li><span>미래의약속</span></li>
                    <li><span>조직위</span></li>
                    <li><span>산엔청쇼핑몰</span></li>
                    <li><span>항노화산업</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>동의보감촌일원</span></li>
                    <li><span>엑스포성공개최</span></li>
                    <li><span>산청엑스포</span></li>
                    <li><span>산청동의보감촌</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>공동주최</span></li>
                    <li><span>정부승인국제행사</span></li>
                    <li><span>산엔청복지관</span></li>
                    <li><span>사업선정</span></li>
                </ol>
            </div>
            `,
            거창군: `
            <div class="keyword-box">
                <div><span>1</span>행정/지역발전</div>
                <ol>
                    <li><span>달빛내륙철도</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>디지털관광주민증</span></li>
                    <li><span>인구감소지역</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>지역활력타운</span></li>
                    <li><span>국가철도망구축</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>서비스제공</span></li>
                    <li><span>철도망구축계획</span></li>
                    <li><span>협약체결</span></li>
                    <li><span>승강기안전기술원</span></li>
                    <li><span>주민참여예산</span></li>
                    <li><span>최종선정</span></li>
                    <li><span>승강기허브도시</span></li>
                    <li><span>지역사회</span></li>
                    <li><span>평생학습도시</span></li>
                    <li><span>공유냉장고</span></li>
                    <li><span>허브도시조성</span></li>
                    <li><span>승강기안전공단</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>관광</div>
                <ol>
                    <li><span>항노화힐링랜드</span></li>
                    <li><span>거창국제연극제</span></li>
                    <li><span>거창사건추모공원</span></li>
                    <li><span>자락인경남</span></li>
                    <li><span>덕유산자락</span></li>
                    <li><span>의동마을은행나무</span></li>
                    <li><span>거창창포원</span></li>
                    <li><span>은행나무길</span></li>
                    <li><span>Y자형출렁다리</span></li>
                    <li><span>샤인머스켓</span></li>
                    <li><span>창포꽃</span></li>
                    <li><span>홍로사과</span></li>
                    <li><span>산청함양사건</span></li>
                    <li><span>거창허브빌리지</span></li>
                    <li><span>1호지방정원</span></li>
                    <li><span>사과수확</span></li>
                    <li><span>향적봉</span></li>
                    <li><span>정상부근</span></li>
                    <li><span>치유의숲</span></li>
                    <li><span>집단학살</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>사건사고</div>
                <ol>
                    <li><span>더샵거창포르시엘</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>청소년과의원</span></li>
                    <li><span>소아청소년</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>폭염주의보</span></li>
                    <li><span>아침최저기온</span></li>
                    <li><span>과수화상병</span></li>
                    <li><span>남부지방</span></li>
                    <li><span>지진발생</span></li>
                    <li><span>주의보발효</span></li>
                    <li><span>호우경보</span></li>
                    <li><span>공개수배</span></li>
                    <li><span>지하층지상</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>재난안전대책본부</span></li>
                    <li><span>한파경보</span></li>
                    <li><span>심정지상태</span></li>
                </ol>
            </div>
            `,
            합천군: `
            <div class="keyword-box">
                <div><span>1</span>사건사고</div>
                <ol>
                    <li><span>산림당국</span></li>
                    <li><span>산불발생</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>산불진화</span></li>
                    <li><span>산불3단계</span></li>
                    <li><span>산불진화헬기</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>마을회관</span></li>
                    <li><span>국가위기경보</span></li>
                    <li><span>원인조사</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>산불재난국가위기</span></li>
                    <li><span>인근마을회관</span></li>
                    <li><span>월평리인근야산</span></li>
                    <li><span>긴급대피</span></li>
                    <li><span>주불진화</span></li>
                    <li><span>피해추정면적</span></li>
                    <li><span>장비동원</span></li>
                    <li><span>특수진화대</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>문화/관광</div>
                <ol>
                    <li><span>일해공원</span></li>
                    <li><span>생명의숲</span></li>
                    <li><span>공원명칭변경</span></li>
                    <li><span>해인사</span></li>
                    <li><span>성파스님</span></li>
                    <li><span>운석충돌</span></li>
                    <li><span>적중초계분지</span></li>
                    <li><span>운석충돌구</span></li>
                    <li><span>황매산군립공원</span></li>
                    <li><span>합천국민운동본부</span></li>
                    <li><span>철쭉억새</span></li>
                    <li><span>공원명칭</span></li>
                    <li><span>한국구슬거미</span></li>
                    <li><span>합천운석충돌</span></li>
                    <li><span>합천영상테마파크</span></li>
                    <li><span>장경판전</span></li>
                    <li><span>국가지정문화재</span></li>
                    <li><span>관광자원</span></li>
                    <li><span>한국지질자원</span></li>
                    <li><span>국립생물자원</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>행정/지역발전</div>
                <ol>
                    <li><span>합천댐수상</span></li>
                    <li><span>수상태양광</span></li>
                    <li><span>한화큐셀</span></li>
                    <li><span>수상태양광발전소</span></li>
                    <li><span>양수발전소유치</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>남부내륙철도</span></li>
                    <li><span>취수원다변화</span></li>
                    <li><span>한국수자원공사</span></li>
                    <li><span>물관리방안</span></li>
                    <li><span>통합물관리</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>광역취수장</span></li>
                    <li><span>달빛내륙철도</span></li>
                    <li><span>합천댐</span></li>
                    <li><span>황강취수장</span></li>
                    <li><span>낙동강취수원</span></li>
                    <li><span>태양광발전소</span></li>
                    <li><span>전기생산</span></li>
                    <li><span>국내최대규모</span></li>
                </ol>
            </div>
            `,
            창원시: `
            <div class="keyword-box">
                <div><span>1</span>사건사고</div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>중대재해처벌법</span></li>
                    <li><span>혐의기소</span></li>
                    <li><span>경위조사</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>혐의재판</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>원인조사</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>급성중독</span></li>
                    <li><span>직업성질병</span></li>
                    <li><span>두성산업</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>재산피해</span></li>
                    <li><span>유충발견</span></li>
                    <li><span>국가보안법위반</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>석동정수장</span></li>
                    <li><span>소방서추산</span></li>
                    <li><span>깔따구유충</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>문화/행정</div>
                <ol>
                    <li><span>지역주민</span></li>
                    <li><span>지역사회</span></li>
                    <li><span>국립현대미술관</span></li>
                    <li><span>원전정책</span></li>
                    <li><span>해군교육사령부</span></li>
                    <li><span>상병수당</span></li>
                    <li><span>이상한변호사우영우</span></li>
                    <li><span>원전산업</span></li>
                    <li><span>협약체결</span></li>
                    <li><span>천연기념물지정</span></li>
                    <li><span>졸업및임관식</span></li>
                    <li><span>사업진행</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>상병수당시범사업</span></li>
                    <li><span>진해구해군교육</span></li>
                    <li><span>미술관창원관</span></li>
                    <li><span>어린이재활병원</span></li>
                    <li><span>마산해양신도시</span></li>
                    <li><span>원전생태계</span></li>
                    <li><span>소덕동팽나무</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>산업</div>
                <ol>
                    <li><span>규제지역</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>에어로스페이스</span></li>
                    <li><span>협약체결</span></li>
                    <li><span>스마트그린산단</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>LG스마트파크</span></li>
                    <li><span>수소생산기지</span></li>
                    <li><span>규제지역해제</span></li>
                    <li><span>조정대상지역지정</span></li>
                    <li><span>수소청소트럭</span></li>
                    <li><span>규모조성</span></li>
                    <li><span>SK에코플랜트</span></li>
                    <li><span>생산라인</span></li>
                    <li><span>지방중소도시</span></li>
                    <li><span>한국전기</span></li>
                    <li><span>수소생산</span></li>
                    <li><span>수소액화플랜트</span></li>
                    <li><span>거점형수소</span></li>
                </ol>
            </div>
            `,
        },
        jeju: {
            제주시: `
            <div class="keyword-box">
                <div><span>1</span>날씨/재해/사건사고</div>
                <ol>
                    <li><span>살해혐의</span></li>
                    <li><span>태풍힌남노</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>도로교통법</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>주의보발효</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>제주도소방</span></li>
                    <li><span>무기징역</span></li>
                    <li><span>32명민호</span></li>
                    <li><span>전면통제</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>성폭력범죄</span></li>
                    <li><span>해경관계자</span></li>
                    <li><span>태풍경보</span></li>
                    <li><span>의붓아들살해혐의</span></li>
                    <li><span>주차된차량</span></li>
                    <li><span>폭염주의보</span></li>
                    <li><span>지적장애</span></li>
                    <li><span>풍랑주의보</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>투자/관광/지역개발</div>
                <ol>
                    <li><span>제주드림타워</span></li>
                    <li><span>민간특례사업</span></li>
                    <li><span>워케이션</span></li>
                    <li><span>첨단과학기술</span></li>
                    <li><span>세계자연유산</span></li>
                    <li><span>세계삼다수</span></li>
                    <li><span>제주들불축제</span></li>
                    <li><span>2공항건설</span></li>
                    <li><span>제주관광공사</span></li>
                    <li><span>제주신화월드</span></li>
                    <li><span>제주동물테마파크</span></li>
                    <li><span>국제자유도시 개발센터</span></li>
                    <li><span>랜딩카지노</span></li>
                    <li><span>시민복지타운</span></li>
                    <li><span>봉성리새별오름</span></li>
                    <li><span>제주용암수</span></li>
                    <li><span>그랜드하얏트제주</span></li>
                    <li><span>외국인관광객</span></li>
                    <li><span>도시공원민간</span></li>
                    <li><span>오름불</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>행정</div>
                <ol>
                    <li><span>자치경찰단</span></li>
                    <li><span>원전오염수</span></li>
                    <li><span>남방큰돌고래</span></li>
                    <li><span>제주형행정체제개편</span></li>
                    <li><span>일본정부</span></li>
                    <li><span>동부하수처리장</span></li>
                    <li><span>핵오염수</span></li>
                    <li><span>비봉이</span></li>
                    <li><span>방사능오염수</span></li>
                    <li><span>사회안전지수</span></li>
                    <li><span>3평화공원</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>일본후쿠시마원전</span></li>
                    <li><span>행정체제도입</span></li>
                    <li><span>비자림로확장공사</span></li>
                    <li><span>학생수</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>4.3트라우마센터</span></li>
                    <li><span>기초생활보장</span></li>
                    <li><span>현대화사업</span></li>
                </ol>
            </div>
            `,
            서귀포시: `
            <div class="keyword-box">
                <div><span>1</span>날씨/재해/사건사고</div>
                <ol>
                    <li><span>태풍힌남노</span></li>
                    <li><span>북상중</span></li>
                    <li><span>항공대소속헬기</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>해경경비함정</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>헬기추락</span></li>
                    <li><span>대표부친</span></li>
                    <li><span>피해견</span></li>
                    <li><span>사고헬기</span></li>
                    <li><span>식욕억제제</span></li>
                    <li><span>위탁영농</span></li>
                    <li><span>국가태풍센터</span></li>
                    <li><span>동물보호법위반</span></li>
                    <li><span>해역조난</span></li>
                    <li><span>거대한파도</span></li>
                    <li><span>농지법위반소지</span></li>
                    <li><span>카눈북상</span></li>
                    <li><span>보호법위반혐의</span></li>
                    <li><span>남해안상륙</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>2</span>관광/지역개발</div>
                <ol>
                    <li><span>휴애리자연생활공원</span></li>
                    <li><span>제주영어교육도시</span></li>
                    <li><span>전략환경영향평가서</span></li>
                    <li><span>한화포레나제주</span></li>
                    <li><span>2공항건설사업</span></li>
                    <li><span>국제학교</span></li>
                    <li><span>제주신화월드</span></li>
                    <li><span>제주에듀</span></li>
                    <li><span>브랭섬홀아시아</span></li>
                    <li><span>노스런던칼리지 에잇스쿨</span></li>
                    <li><span>워케이션</span></li>
                    <li><span>보롬왓농장</span></li>
                    <li><span>곶자왈도립농장</span></li>
                    <li><span>유채꽃광장</span></li>
                    <li><span>평화대공원</span></li>
                    <li><span>신화역사공원</span></li>
                    <li><span>유채꽃</span></li>
                    <li><span>국가등록문화재</span></li>
                    <li><span>푸르지오더퍼스트</span></li>
                    <li><span>1훈련소정문</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span>3</span>생태계</div>
                <ol>
                    <li><span>남방큰돌고래</span></li>
                    <li><span>비봉이방류</span></li>
                    <li><span>돌고래무리</span></li>
                    <li><span>광치기해변</span></li>
                    <li><span>가두리훈련장</span></li>
                    <li><span>해양보호생물</span></li>
                    <li><span>해양쓰레기</span></li>
                    <li><span>국내수족관</span></li>
                    <li><span>퍼시픽리솜</span></li>
                    <li><span>황화코스모스</span></li>
                    <li><span>멸종위기종</span></li>
                    <li><span>차밭</span></li>
                    <li><span>돌송이차</span></li>
                    <li><span>해양방류</span></li>
                    <li><span>염생식물</span></li>
                    <li><span>핑크돌핀스</span></li>
                    <li><span>신화가든</span></li>
                    <li><span>천연기념물뿔쇠오리</span></li>
                    <li><span>보호관리</span></li>
                    <li><span>점지빠귀</span></li>
                </ol>
            </div>
            `,
        },
    };

    // svg 내 index 추가
    addTabindexToPolygons();

    // 24-02-02 svg over시 ul.overarea 호출
    if ($('#map-country-svg')) {
        $('#map-country-svg polygon').each(function () {
            var id = $(this).data('area');

            $(this).mouseenter(function () {
                $('#over_' + id).show();
            });
            $(this).mouseout(function () {
                $('#over_' + id).hide();
            });
            $(this).focusin(function () {
                $('#over_' + id).show();
            });
            $(this).focusout(function () {
                $('#over_' + id).hide();
            });
        });
    }
    // svg내 polygon 이벤트
    mapLists.forEach((mapList, index) => {
        // 클릭시 키워드로 포커스 이동
        mapList.addEventListener('click', () => {
            // title="선택됨" 적용
            titleChange(mapLists, mapList);
            // 시도 키워드 노출
            topParents.setAttribute('data-keyword', '5');
            // 타이틀 변경
            for (let i in keywordCol05Title) {
                if (mapList.getAttribute('data-area') == i) {
                    mapTitle.innerHTML = keywordCol05Title[i];
                }
            }
            // 키워드 변경 및 지역상세보기 data값 변경
            for (let i in keywordCol05Contents) {
                if (mapList.getAttribute('data-area') == i) {
                    mapContent.innerHTML = keywordCol05Contents[i];
                    mapBtn.setAttribute('data-link', i);
                }
            }
            // col5의 h3와 타이틀, 키워드에 tabindex부여
            mapTitle.setAttribute('tabindex', '0');
            mapContent.querySelectorAll('.keyword-box > div, li').forEach((el) => {
                el.setAttribute('tabindex', '0');
            });
            setTimeout(() => {
                mapTitle.focus();
            }, 1);
        });
        // 엔터 및 스페이스 입력시 키워드로 포커스 이동
        mapList.addEventListener('keydown', (e) => {
            if (e.key == 'Enter' || e.key == ' ') {
                // title="선택됨" 적용
                titleChange(mapLists, mapList);
                // 시도 키워드 노출
                topParents.setAttribute('data-keyword', '5');
                // 타이틀 변경
                for (let i in keywordCol05Title) {
                    if (mapList.getAttribute('data-area') == i) {
                        mapTitle.innerHTML = keywordCol05Title[i];
                    }
                }
                // 키워드 변경 및 지역상세보기 data값 변경
                for (let i in keywordCol05Contents) {
                    if (mapList.getAttribute('data-area') == i) {
                        mapContent.innerHTML = keywordCol05Contents[i];
                        mapBtn.setAttribute('data-link', i);
                    }
                }
                // col5의 h3와 타이틀, 키워드에 tabindex부여
                mapTitle.setAttribute('tabindex', '0');
                mapContent.querySelectorAll('.keyword-box > div, li').forEach((el) => {
                    el.setAttribute('tabindex', '0');
                });
                setTimeout(() => {
                    mapTitle.focus();
                }, 1);
            }
            //svg내 polygon 마지막 일시
            if (!e.shiftKey && e.key == 'Tab') {
                if (mapLists.length == index + 1) {
                    e.preventDefault();
                    setTimeout(function () {
                        $('.f_link_box a:first-child').focus();
                    }, 1);
                }
            }
        });
    });

    // 타이틀에서 shift + Tab 입력시 포커스 복귀
    mapTitle.addEventListener('keydown', (e) => {
        if (e.shiftKey && e.key == 'Tab') {
            e.preventDefault();
            document.querySelector('polygon[title="선택됨"]').focus();
        }
    });

    // 지역 상세보기 버튼 이벤트
    const allMap = document.querySelector('.map-area');
    const sigunguMap = document.querySelector('.sigungu-area');
    const sigunguLineup = sigunguMap.querySelector('.sigungu');
    // 클릭 시 시군구 지도 보이고 포커스 이동
    mapBtn.addEventListener('click', () => {
        topParents.setAttribute('data-keyword', '');
        openControl(allMap, sigunguMap);
        sigunguMap.setAttribute('data-inmap', mapBtn.getAttribute('data-link'));
        for (let i in sigunguList) {
            if (sigunguMap.getAttribute('data-inmap') == i) {
                sigunguLineup.innerHTML = sigunguList[i];
                // 시군구 지도로 이동 시 전국지도 title 제거
                mapLists.forEach((el) => {
                    el.setAttribute('title', '');
                });
                ChangeSigunguButton();
            }
        }
    });
    // 키보드 이벤트
    mapBtn.addEventListener('keydown', (e) => {
        // 엔터 및 스페이스 입력시 시군구 지도 보이고 포커스 이동
        if (e.key == 'Enter' || e.key == ' ') {
            topParents.setAttribute('data-keyword', '');
            openControl(allMap, sigunguMap);
            sigunguMap.setAttribute('data-inmap', mapBtn.getAttribute('data-link'));
            for (let i in sigunguList) {
                if (sigunguMap.getAttribute('data-inmap') == i) {
                    sigunguLineup.innerHTML = sigunguList[i];
                    // 시군구 지도로 이동 시 전국지도 title 제거
                    mapLists.forEach((el) => {
                        el.setAttribute('title', '');
                    });
                    ChangeSigunguButton();
                }
            }
        }
        // Tab 입력시 포커스 복귀
        if (!e.shiftKey && e.key == 'Tab') {
            e.preventDefault();
            document.querySelector('polygon[title="선택됨"]').focus();
        }
    });

    // 시군구 뒤로가기 버튼 이벤트
    const btnMapBack = document.querySelector('.btn-map-back');
    // 클릭 시 전국지도로 돌아가기
    btnMapBack.addEventListener('click', () => {
        topParents.setAttribute('data-keyword', '');
        openControl(sigunguMap, allMap);
        goToTab();
    });

    // 시군구 컨텐츠 버튼 이벤트
    function ChangeSigunguButton() {
        const mapTitle = document.querySelector('.map-keyword[data-col="3"] .map-title');
        const mapContent = document.querySelector('.map-keyword[data-col="3"] .keyword-list');
        let sigunguContents = sigunguLineup.querySelectorAll('li button');

        sigunguContents.forEach((sigunguContent, index) => {
            // 클릭 시 이벤트
            sigunguContent.addEventListener('click', () => {
                for (let i in sigunguContentsList) {
                    if (sigunguMap.getAttribute('data-inmap') == i) {
                        // title="선택됨" 적용
                        titleChange(sigunguContents, sigunguContent);
                        // 시군구 키워드 노출
                        topParents.setAttribute('data-keyword', '3');
                        for (let j in sigunguContentsList[i]) {
                            if (sigunguContent.getAttribute('data-sigungu') == j) {
                                mapContent.innerHTML = sigunguContentsList[i][j];
                                // 타이틀 변경
                                for (let i in keywordCol05Title) {
                                    if (sigunguMap.getAttribute('data-inmap') == i) {
                                        mapTitle.innerHTML = `${keywordCol05Title[i]} > ${j}`;
                                    }
                                }
                                // col3의 h3와 타이틀, 키워드에 tabindex부여
                                mapTitle.setAttribute('tabindex', '0');
                                mapContent.querySelectorAll('.keyword-box > div, li').forEach((el) => {
                                    el.setAttribute('tabindex', '0');
                                });
                            }
                        }
                    }
                }
                setTimeout(() => {
                    mapTitle.focus();
                }, 1);
            });
            // 키보드 이벤트
            sigunguContent.addEventListener('keydown', (e) => {
                if (e.key == 'Enter' || e.key == ' ') {
                    for (let i in sigunguContentsList) {
                        if (sigunguMap.getAttribute('data-inmap') == i) {
                            // title="선택됨" 적용
                            titleChange(sigunguContents, sigunguContent);
                            // 시군구 키워드 노출
                            topParents.setAttribute('data-keyword', '3');
                            for (let j in sigunguContentsList[i]) {
                                if (sigunguContent.getAttribute('data-sigungu') == j) {
                                    mapContent.innerHTML = sigunguContentsList[i][j];
                                    // 타이틀 변경
                                    for (let i in keywordCol05Title) {
                                        if (sigunguMap.getAttribute('data-inmap') == i) {
                                            mapTitle.innerHTML = `${keywordCol05Title[i]} > ${j}`;
                                        }
                                    }
                                    // col3의 h3와 타이틀, 키워드에 tabindex부여
                                    mapTitle.setAttribute('tabindex', '0');
                                    mapContent.querySelectorAll('.keyword-box > div, li').forEach((el) => {
                                        el.setAttribute('tabindex', '0');
                                    });
                                    // 키워드 마지막 리스트에서 포커스 복귀
                                    const mapContentLast = mapContent.querySelector('.keyword-box:last-child li:last-child');
                                    // focus 주지 않으면 keydown 이벤트 동작 안함
                                    mapContentLast.focus();
                                    mapContentLast.addEventListener('keydown', (e) => {
                                        if (!e.shiftKey && e.key == 'Tab') {
                                            e.preventDefault();
                                            sigunguContent.focus();
                                        }
                                    });
                                }
                            }
                        }
                    }
                    setTimeout(() => {
                        mapTitle.focus();
                    }, 1);
                }
                // 타이틀에서 shift + Tab 입력시 포커스 복귀
                mapTitle.addEventListener('keydown', (e) => {
                    if (e.shiftKey && e.key == 'Tab') {
                        e.preventDefault();
                        sigunguContent.focus();
                    }
                });
                // 마지막 시군구에서 footer로 포커스 이동
                const currentIndex = index + 1;
                if (sigunguContents.length == currentIndex) {
                    if (!e.shiftKey && e.key == 'Tab') {
                        e.preventDefault();
                        document.querySelector('.f_link_box a:first-child').focus();
                    }
                }
            });
        });
    }

    // footer에서 shift+Tab 입력 이벤트
    const currentPage = this.document.querySelector('.comparative').getAttribute('data-treeTab');

    if (currentPage == 1) {
        // '공약이슈트리 보기' 시 탭선택으로 포커스 이동
        document.querySelector('.f_link_box a:first-child').addEventListener('keydown', (e) => {
            if (e.shiftKey && e.key == 'Tab') {
                e.preventDefault();
                goToTab();
            }
        });
    } else if (currentPage == 2) {
        // '공약이슈트리 기초자료 보기' 시 iframe으로 포커스 이동
        return;
    }
}

/* 공약이슈 기초조사 보기 */
function issueBasic() {
    const currentTab = document.querySelector('.comparativeTab a[data-act="active"]');
    // 탭 이벤트 iframe으로 포커스 이동
    currentTab.addEventListener('click', () => {
        document.querySelector('.pdf-viewer').focus();
    });
    currentTab.addEventListener('keydown', (e) => {
        if (e.key == 'Enter' || e.key == ' ') {
            document.querySelector('.pdf-viewer').focus();
        }
    });
}

/* 모바일 */
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
    const keywords = document.querySelectorAll('.comparative > .map-keyword[data-keyword]');

    cityCodes.forEach((cityCode, index) => {
        // 지역 클릭 시 select 박스 타이틀 및 option 값 변경
        cityCode.addEventListener('click', () => {
            addRemoveClass(cityCodes, moSigungu);
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
            // 키워드 탭인덱스 추가
            let keyName = $('.map-keyword').find('h3');
            let keyTitle = $('.map-keyword').find('.keyword-box > div');
            let keyList = $('.map-keyword').find('li');
            keyName.attr('tabindex', '0');
            keyTitle.attr('tabindex', '0');
            keyList.attr('tabindex', '0');
            // 키워드 판별 후 포커스 이동
            if (document.querySelectorAll('.map-keyword').length != 0) {
                keywords.forEach((keyword) => {
                    keyword.classList.remove('on');
                    if (keyword.getAttribute('data-keyword') == cityCode.getAttribute('data-moCity')) {
                        keyword.classList.add('on');
                        setTimeout(() => {
                            keyword.querySelector('h3').focus();
                        }, 1);
                    }
                });
            } else {
                document.querySelector('.mo-select select').focus();
            }
        });
        // 지역 키보드 사용시 select 박스 타이틀 및 option 값 변경
        cityCode.addEventListener('keydown', (e) => {
            if (e.key == 'Enter' || e.key == ' ') {
                addRemoveClass(cityCodes, moSigungu);
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
                // 키워드 탭인덱스 추가
                let keyName = $('.map-keyword').find('h3');
                let keyTitle = $('.map-keyword').find('.keyword-box > div');
                let keyList = $('.map-keyword').find('li');
                keyName.attr('tabindex', '0');
                keyTitle.attr('tabindex', '0');
                keyList.attr('tabindex', '0');
                // 키워드 판별 후 포커스 이동
                if (document.querySelectorAll('.map-keyword').length != 0) {
                    keywords.forEach((keyword) => {
                        keyword.classList.remove('on');
                        if (keyword.getAttribute('data-keyword') == cityCode.getAttribute('data-moCity')) {
                            keyword.classList.add('on');
                            setTimeout(() => {
                                keyword.querySelector('h3').focus();
                            }, 1);
                        }
                    });
                } else {
                    e.preventDefault();
                    document.querySelector('.mo-select select').focus();
                }
            }
            // 마지막 도시에서 탭키를 누를 경우 footer로 이동
            const currentIndex = index + 1;
            if (!e.shiftKey && e.key == 'Tab') {
                if (cityCodes.length == currentIndex) {
                    e.preventDefault();
                    $('.f_link_box a:first-child').focus();
                }
            }
        });
    });
    // 키워드 시도에서 shift+tab 누를 시 시도 선택으로 포커스 이동
    document.querySelectorAll('.map-keyword h3').forEach((mapKeywordOn) => {
        mapKeywordOn.addEventListener('keydown', (e) => {
            if (e.shiftKey && e.key == 'Tab') {
                e.preventDefault();
                document.querySelector('button[data-moCity].on').focus();
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
    // 클릭 시 키워드 노출

    // 클릭 시 팝업창 노출
    const select = document.querySelector('#sigunguSelect');
    $('.mo-select button').click(function () {
        let title = document.querySelector('.mo-sigungu h3').innerHTML;
        let option = select.options[select.selectedIndex];
        document.querySelector('.map-pdf02').classList.add('on');
        document.querySelector('.map-pdf02 h3').innerHTML = `${title} ${option.value}`;
        document.querySelector('.map-pdf02 .pdf-popup').setAttribute('title', `${document.querySelector('.map-pdf02 h3').innerHTML} 기초조사 이미지 자료 팝업 새창 띄움`);
        setTimeout(() => {
            document.querySelector('.map-pdf02 .pdf-popup').focus();
        }, 1);
    });
}

// 지도 svg내 index 추가
function addTabindexToPolygons() {
    let svgElement = document.getElementById('map-country-svg');
    let polygons = svgElement.querySelectorAll('polygon');
    polygons.forEach((poly) => {
        poly.setAttribute('tabindex', '0');
    });
}

// 노출 조절
function openControl(hide, show) {
    if (hide.length == undefined) {
        hide.setAttribute('data-open', '');
    } else if (hide.length > 0) {
        hide.forEach((el) => {
            el.setAttribute('data-open', '');
        });
    }
    if (show.length == undefined) {
        show.setAttribute('data-open', 'open');
    } else if (show.length > 0) {
        show.forEach((el) => {
            el.setAttribute('data-open', 'open');
        });
    }
}

// 접근성 및 요소접근을 위해 title에 '선택됨' 부여
function titleChange(remove, add) {
    remove.forEach((el) => {
        el.setAttribute('title', '');
    });
    add.setAttribute('title', '선택됨');
}

// 공약이슈트리보기&공약이슈기초조사보기 로 포커스 이동
function goToTab() {
    document.querySelector('.comparativeTab a div.on').parentElement.focus();
}

// html 로드되고 바로 실행
window.addEventListener('DOMContentLoaded', function () {
    const currentPage = this.document.querySelector('.comparative').getAttribute('data-treeTab');

    if (currentPage == 1) {
        issueTree();
    } else if (currentPage == 2) {
        issueBasic();
    }
    // mobileChangeSigungu();
});
