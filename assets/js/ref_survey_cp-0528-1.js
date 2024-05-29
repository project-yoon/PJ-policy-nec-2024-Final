/* 시도별 공약이슈트리 보기 */
function issueTree() {
    const topParents = document.querySelector('.comparative');
    const mapLists = document.querySelectorAll('.map-country-svg polygon');
    const mapTitle = document.querySelector('.map-keyword[data-col="5"] .map-title');
    const mapContent = document.querySelector('.map-keyword[data-col="5"] .keyword-list');

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
    // [D] 240517 : '.keyword-box > title-number' 텍스트 수정
	//  			1) 스크린리더가 읽어줄 수 있도록 합니다
	// 				2) ref_survey_cp.js : innerHTML을 위해 담아둔 변수에 동일하게 반영
    let keywordCol05Contents = {
        seoul: `
        <div class="keyword-box">
            <div><span class="title-number">TOPIC 1</span><span>부동산/지역개발</span></div>
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
				<li><span>임대차 3법</span></li>
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
			<div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
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
			<div><span class="title-number">TOPIC 3</span><span>정치이슈</span></div>
			<ol>
				<li><span>전 서울시장</span></li>
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
			<div><span class="title-number">TOPIC 4</span><span>행정/복지</span></div>
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
			<div><span class="title-number">TOPIC 5</span><span>문화/관광</span></div>
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
			<div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
			<div><span class="title-number">TOPIC 2</span><span>행정</span></div>
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
			<div><span class="title-number">TOPIC 3</span><span>지역개발/부동산</span></div>
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
			<div><span class="title-number">TOPIC 4</span><span>문화/관광</span></div>
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
			<div><span class="title-number">TOPIC 5</span><span>산업</span></div>
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
			<div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
			<div><span class="title-number">TOPIC 2</span><span>지역활성화</span></div>
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
			<div><span class="title-number">TOPIC 3</span><span>행정/복지</span></div>
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
			<div><span class="title-number">TOPIC 4</span><span>부동산</span></div>
			<ol>
				<li><span>힐스테이트</span></li>
				<li><span>2호선</span></li>
				<li><span>1호선</span></li>
				<li><span>주거용오피스텔</span></li>
				<li><span>분양예정</span></li>
				<li><span>일반분양</span></li>
				<li><span>3호선</span></li>
				<li><span>힐스에비뉴감삼센트럴</span></li>
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
			<div><span class="title-number">TOPIC 5</span><span>문화/행사</span></div>
			<ol>
				<li><span>아시안게임공동유치</span></li>
				<li><span>2038하계아시안게임</span></li>
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
            <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
            <div><span class="title-number">TOPIC 2</span><span>행정/복지</span></div>
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
            <div><span class="title-number">TOPIC 3</span><span>지역발전</span></div>
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
            <div><span class="title-number">TOPIC 4</span><span>북한/안보</span></div>
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
            <div><span class="title-number">TOPIC 5</span><span>전세사기</span></div>
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
            <div><span class="title-number">TOPIC 1</span><span>군공항이전/행정/복지</span></div>
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
            <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
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
            <div><span class="title-number">TOPIC 3</span><span>지역발전/문화/관광</span></div>
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
            <div><span class="title-number">TOPIC 4</span><span>민주화운동</span></div>
            <ol>
                <li><span>5.18민주화운동</span></li>
                <li><span>민주화운동기념식</span></li>
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
            <div><span class="title-number">TOPIC 5</span><span>건물붕괴사고</span></div>
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
            <div><span class="title-number">TOPIC 1</span><span>도시/지역개발</span></div>
            <ol>
                <li><span>충청권광역철도</span></li>
                <li><span>대덕특구</span></li>
                <li><span>지하층지상</span></li>
                <li><span>대전도시공사</span></li>
                <li><span>유성복합터미널</span></li>
                <li><span>국제과학비즈니스벨트</span></li>
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
                <li><span>연구개발특구진흥재단</span></li>
                <li><span>지역균형뉴딜</span></li>
                <li><span>대전의료원설립</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span class="title-number">TOPIC 2</span><span>행정</span></div>
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
            <div><span class="title-number">TOPIC 3</span><span>사건사고</span></div>
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
            <div><span class="title-number">TOPIC 4</span><span>문화/관광</span></div>
            <ol>
                <li><span>0시축제</span></li>
                <li><span>2027하계세계대학경기대회</span></li>
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
            <div><span class="title-number">TOPIC 5</span><span>안보</span></div>
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
                <li><span>대전시유성구국방과학연구소</span></li>
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
            <div><span class="title-number">TOPIC 1</span><span>행정</span></div>
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
            <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
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
            <div><span class="title-number">TOPIC 3</span><span>산업/노동</span></div>
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
            <div><span class="title-number">TOPIC 4</span><span>지역정비/인프라</span></div>
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
                <li><span>에너지산업융복합단지</span></li>
                <li><span>부산울산</span></li>
                <li><span>국가첨단전략산업</span></li>
                <li><span>정주여건개선</span></li>
                <li><span>지능형교통</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span class="title-number">TOPIC 5</span><span>문화/관광</span></div>
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
                <li><span>태화강생태관광협의회</span></li>
                <li><span>자연주의정원</span></li>
                <li><span>회관대공연장</span></li>
                <li><span>선암호수공원</span></li>
                <li><span>철새여행버스</span></li>
                <li><span>대왕암공원</span></li>
                <li><span>워터파크지구</span></li>
            </ol>
        </div>
        `,
        sejong: `
        <div class="keyword-box">
            <div><span class="title-number">TOPIC 1</span><span>행정/행정중심복합도시</span></div>
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
            <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
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
            <div><span class="title-number">TOPIC 3</span><span>부동산</span></div>
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
            <div><span class="title-number">TOPIC 4</span><span>지역활성화</span></div>
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
            <div><span class="title-number">TOPIC 5</span><span>노동/일자리</span></div>
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
            <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
            <div><span class="title-number">TOPIC 2</span><span>지역활성화</span></div>
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
            <div><span class="title-number">TOPIC 3</span><span>행정</span></div>
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
            <div><span class="title-number">TOPIC 4</span><span>안보</span></div>
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
            <div><span class="title-number">TOPIC 5</span><span>부동산</span></div>
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
            <div><span class="title-number">TOPIC 1</span><span>자연재해/사건사고</span></div>
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
            <div><span class="title-number">TOPIC 2</span><span>지역활성화/지역발전</span></div>
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
            <div><span class="title-number">TOPIC 3</span><span>행정/복지</span></div>
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
            <div><span class="title-number">TOPIC 4</span><span>국방/북한</span></div>
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
            <div><span class="title-number">TOPIC 5</span><span>보건/의료/환경</span></div>
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
            <div><span class="title-number">TOPIC 1</span><span>지역개발/부동산</span></div>
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
            <div><span class="title-number">TOPIC 2</span><span>자연재해</span></div>
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
            <div><span class="title-number">TOPIC 3</span><span>행정/상생사업</span></div>
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
            <div><span class="title-number">TOPIC 4</span><span>사건사고</span></div>
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
            <div><span class="title-number">TOPIC 5</span><span>행사/문화</span></div>
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
            <div><span class="title-number">TOPIC 1</span><span>산업</span></div>
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
            <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
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
            <div><span class="title-number">TOPIC 3</span><span>부동산</span></div>
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
            <div><span class="title-number">TOPIC 4</span><span>행정</span></div>
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
            <div><span class="title-number">TOPIC 5</span><span>문화</span></div>
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
            <div><span class="title-number">TOPIC 1</span><span>지역특성화/부동산</span></div>
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
            <div><span class="title-number">TOPIC 2</span><span>행정</span></div>
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
            <div><span class="title-number">TOPIC 3</span><span>날씨/재해/사건사고</span></div>
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
            <div><span class="title-number">TOPIC 4</span><span>문화/역사</span></div>
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
            <div><span class="title-number">TOPIC 5</span><span>보건/의료/복지</span></div>
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
            <div><span class="title-number">TOPIC 1</span><span>지역발전/행정</span></div>
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
            <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
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
            <div><span class="title-number">TOPIC 3</span><span>날씨/자연재해</span></div>
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
            <div><span class="title-number">TOPIC 4</span><span>도시개발/부동산</span></div>
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
            <div><span class="title-number">TOPIC 5</span><span>관광/행사</span></div>
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
                <li><span>유네스코세계자연유산</span></li>
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
            <div><span class="title-number">TOPIC 1</span><span>지역개발</span></div>
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
            <div><span class="title-number">TOPIC 2</span><span>자연재해/사건사고</span></div>
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
            <div><span class="title-number">TOPIC 3</span><span>행정</span></div>
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
            <div><span class="title-number">TOPIC 4</span><span>문화</span></div>
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
            <div><span class="title-number">TOPIC 5</span><span>부동산</span></div>
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
            <div><span class="title-number">TOPIC 1</span><span>행정</span></div>
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
            <div><span class="title-number">TOPIC 2</span><span>인프라</span></div>
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
            <div><span class="title-number">TOPIC 3</span><span>사건사고</span></div>
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
                <li><span>오염수방류</span></li>
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
            <div><span class="title-number">TOPIC 4</span><span>지역행사</span></div>
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
            <div><span class="title-number">TOPIC 5</span><span>부동산</span></div>
            <ol>
                <li><span>지하층지상</span></li>
                <li><span>비규제</span></li>
                <li><span>김해푸르지오하이엔드</span></li>
                <li><span>1순위청약</span></li>
                <li><span>일반분양</span></li>
                <li><span>공공지원민간임대주택</span></li>
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
            <div><span class="title-number">TOPIC 1</span><span>날씨/자연재해</span></div>
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
            <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
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
            <div><span class="title-number">TOPIC 3</span><span>지역발전/산업</span></div>
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
                <li><span>도심항공교통</span></li>
                <li><span>15분도시</span></li>
                <li><span>제주영어교육도시</span></li>
                <li><span>삼다수생산</span></li>
                <li><span>2공항사업</span></li>
                <li><span>2공항전략 환경영향평가</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span class="title-number">TOPIC 4</span><span>행정</span></div>
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
            <div><span class="title-number">TOPIC 5</span><span>환경/생태</span></div>
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

    // svg 내 index 추가
    addTabindexToPolygons();

    // svg내 polygon 이벤트
    // 240517 : 전체 개선, (mouseenter,mouseleave,focus 통합또는핸들러)
    mapLists.forEach((mapList) => {
        const overareas = document.querySelectorAll('.overarea li');
        const checkOver = `over_${mapList.getAttribute('data-area')}`;

        mapList.onfocus = () => {
            console.log('● Focused on:', mapList);
            overareas.forEach((overarea) => {
                if (overarea.getAttribute('id') == checkOver) {
                    openControl(overareas, overarea);
                    console.log('● handleFocus : 들어옴');
                }
            });
        };
        mapList.onblur = () => {
            console.log('☆ 나가서지금어디야 Focused out:', document.activeElement);
            overareas.forEach((overarea) => {
                if (mapList.getAttribute('title') !== '선택됨') {
                    overarea.setAttribute('data-open', '');
                }
                console.log('○ handleBlur : 나갔어');
            });
        };
        mapList.onclick = () => {
            handleClick(mapList);
            console.log('§ [가상키] 지금어디야? mapList.onclick? :', document.activeElement);
        };
        mapList.onkeydown = (e) => {
            if (e.key === 'Enter') {
                handleClick(mapList);
                console.log('§ [일반키] 지금어디야? mapList.onkeydown? :', document.activeElement);
            }
        };
    });

    // 240517 : 전체 개선
    function handleClick(mapList) {
        console.log('● Clicked on: 선택된것은', mapList);
        // 클릭이벤트
        // title="선택됨" 적용
        titleChange(mapLists, mapList);
        
        // 시도 키워드 노출
        topParents.setAttribute('data-keyword', '5');
        
        // 지역에 따른 타이틀 및 키워드 내용 설정
        const area = mapList.getAttribute('data-area');
        mapTitle.innerHTML = keywordCol05Title[area] || ''; 
        mapContent.innerHTML = keywordCol05Contents[area] || '';

        // col5의 타이틀, 키워드에 tabindex부여
        mapTitle.setAttribute('tabindex', '1');
        mapContent.querySelectorAll('.keyword-box > div, li').forEach((el) => {
            el.setAttribute('tabindex', '0');
        });

        setTimeout(() => {
            mapTitle.focus();
            console.log('타이틀에 포커스? mapTitle.focus:', document.activeElement);
        }, 0);
        
        console.log(' --- handleClick 동작완료 --- ');
        // 키보드 이벤트
        // 240517 del
    };

    // 타이틀에서 shift + Tab 입력시 포커스 복귀
    // 240517 전체 개선
    mapTitle.onkeydown = (e) => {
        console.log('타이틀에서빠꾸빠꾸? Title keydown event:', e.key);
        if (!e.shiftKey && e.key === 'Tab') {
            e.preventDefault();
            const selectedPolygon = document.querySelector('polygon[title="선택됨"]');
            if (selectedPolygon) {
                // selectedPolygon.focus();
                setTimeout(() => {
					selectedPolygon.focus();
				}, 0);
            }
        }
        // .map-title 요소의 tabindex 제거
        mapTitle.removeAttribute('tabindex');
        console.log('♨ remove remove Title:', mapTitle);
    };

    /* 모바일 */
    const btnCities = document.querySelectorAll('button[data-city]');

    btnCities.forEach((btnCity, btnCityidx) => {
        // 지역 클릭 이벤트
        btnCity.addEventListener('click', () => {
            titleChange(btnCities, btnCity);
            // 시도 키워드 노출
            topParents.setAttribute('data-keyword', '5');
            // 키워드 변경
            for (let i in keywordCol05Contents) {
                if (btnCity.getAttribute('data-city') == i) {
                    mapContent.innerHTML = keywordCol05Contents[i];
                }
            }
            // col5의 타이틀, 키워드에 tabindex부여
            mapContent.querySelectorAll('.keyword-box > div, li').forEach((el) => {
                el.setAttribute('tabindex', '0');
            });
            // 키워드로 포커스 이동
            mapContent.querySelector('.keyword-box > div').focus();
            // 마지막 키워드에서 버튼으로 포커스 이동
            // mapContent.querySelector('.keyword-box:last-child li:last-child').addEventListener('keydown', (e) => {
            //     if (!e.shiftKey && e.key == 'Tab') {
            //         e.preventDefault();
            //         document.querySelector('button[title="선택됨"]').focus();
            //     }
            // });
            // 키워드 시도에서 shift+tab 누를 시 시도 선택으로 포커스 이동
            // 240517 del
        });
        // 지역 키보드 이벤트
        // 240517 del
    });

    // footer에서 shift+Tab 입력 시 탭선택으로 포커스 이동
    // 240517 del
    // document.querySelector('.f_link_box a:first-child').addEventListener('keydown', (e) => {
    //     if (e.shiftKey && e.key == 'Tab') {
    //         e.preventDefault();
    //         goToTab();
    //     }
    // });
}

/* 시군구별 공약이슈트리 보기 */
function issueTreeSigungu() {
    const topParents = document.querySelector('.comparative');
    const mapTitle = document.querySelector('.map-keyword[data-col="3"] .map-title');
    const mapContent = document.querySelector('.map-keyword[data-col="3"] .keyword-list');
    const sigunguMap = document.querySelector('.sigungu-area');
    const sigunguLineup = sigunguMap.querySelector('.sigungu');
    const btnCities = document.querySelectorAll('button[data-city]');
    const moSigungu = document.querySelector('.mo-sigungu');

    let keywordCol03Title = {
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
    let sigunguList = {
        seoul: `
        <li class="jongno"><button type="button" data-sigungu="종로구">종로구</button></li>
        <li class="junggu"><button type="button" data-sigungu="중구">중구</button></li>
        <li class="yongsan"><button type="button" data-sigungu="용산구">용산구</button></li>
        <li class="seongdong"><button type="button" data-sigungu="성동구">성동구</button></li>
        <li class="kwangjin"><button type="button" data-sigungu="광진구">광진구</button></li>
        <li class="dongdaemun"><button type="button" data-sigungu="동대문구">동대문구</button></li>
        <li class="jungnang"><button type="button" data-sigungu="중랑구">중랑구</button></li>
        <li class="seongbuk"><button type="button" data-sigungu="성북구">성북구</button></li>
        <li class="gangbuk"><button type="button" data-sigungu="강북구">강북구</button></li>
        <li class="dobong"><button type="button" data-sigungu="도봉구">도봉구</button></li>
        <li class="nowon"><button type="button" data-sigungu="노원구">노원구</button></li>
        <li class="eunpyeong"><button type="button" data-sigungu="은평구">은평구</button></li>
        <li class="seodaemun"><button type="button" data-sigungu="서대문구">서대문구</button></li>
        <li class="mapo"><button type="button" data-sigungu="마포구">마포구</button></li>
        <li class="yangcheon"><button type="button" data-sigungu="양천구">양천구</button></li>
        <li class="kangseo"><button type="button" data-sigungu="강서구">강서구</button></li>
        <li class="guro"><button type="button" data-sigungu="구로구">구로구</button></li>
        <li class="geumcheon"><button type="button" data-sigungu="금천구">금천구</button></li>
        <li class="yeongdeungpo"><button type="button" data-sigungu="영등포구">영등포구</button></li>
        <li class="dongjak"><button type="button" data-sigungu="동작구">동작구</button></li>
        <li class="gwanak"><button type="button" data-sigungu="관악구">관악구</button></li>
        <li class="seocho"><button type="button" data-sigungu="서초구">서초구</button></li>
        <li class="kangnam"><button type="button" data-sigungu="강남구">강남구</button></li>
        <li class="songpa"><button type="button" data-sigungu="송파구">송파구</button></li>
        <li class="kangdong"><button type="button" data-sigungu="강동구">강동구</button></li>
        `,
        busan: `
        <li class="jung"><button type="button" data-sigungu="중구">중구</button></li>
		<li class="seo"><button type="button" data-sigungu="서구">서구</button></li>
		<li class="dong"><button type="button" data-sigungu="동구">동구</button></li>
		<li class="yeongdo"><button type="button" data-sigungu="영도구">영도구</button></li>
		<li class="busanjin"><button type="button" data-sigungu="부산진구">부산진구</button></li>
		<li class="donglae"><button type="button" data-sigungu="동래구">동래구</button></li>
		<li class="nam"><button type="button" data-sigungu="남구">남구</button></li>
		<li class="buk"><button type="button" data-sigungu="북구">북구</button></li>
		<li class="haeundae"><button type="button" data-sigungu="해운대구">해운대구</button></li>
		<li class="gijang"><button type="button" data-sigungu="기장군">기장군</button></li>
		<li class="saha"><button type="button" data-sigungu="사하구">사하구</button></li>
		<li class="geumjeong"><button type="button" data-sigungu="금정구">금정구</button></li>
		<li class="kangseo"><button type="button" data-sigungu="강서구">강서구</button></li>
		<li class="yeonje"><button type="button" data-sigungu="연제구">연제구</button></li>
		<li class="suyeong"><button type="button" data-sigungu="수영구">수영구</button></li>
		<li class="sasang"><button type="button" data-sigungu="사상구">사상구</button></li>
        `,
        daegu: `
        <li class="jung"><button type="button" data-sigungu="중구">중구</button></li>
		<li class="dong"><button type="button" data-sigungu="동구">동구</button></li>
		<li class="seo"><button type="button" data-sigungu="서구">서구</button></li>
		<li class="nam"><button type="button" data-sigungu="남구">남구</button></li>
		<li class="buk"><button type="button" data-sigungu="북구">북구</button></li>
		<li class="suseong"><button type="button" data-sigungu="수성구">수성구</button></li>
		<li class="dalseo"><button type="button" data-sigungu="달서구">달서구</button></li>
		<li class="dalseong"><button type="button" data-sigungu="달성군">달성군</button></li>
		<li class="gunwi"><button type="button" data-sigungu="군위군">군위군</button></li>
        `,
        incheon: `
        <li class="jung"><button type="button" data-sigungu="중구">중구</button></li>
		<li class="dong"><button type="button" data-sigungu="동구">동구</button></li>
		<li class="nam"><button type="button" data-sigungu="미추홀구">미추홀구</button></li>
		<li class="yeonsu"><button type="button" data-sigungu="연수구">연수구</button></li>
		<li class="namdong"><button type="button" data-sigungu="남동구">남동구</button></li>
		<li class="bupyeong"><button type="button" data-sigungu="부평구">부평구</button></li>
		<li class="gyeyang"><button type="button" data-sigungu="계양구">계양구</button></li>
		<li class="seo"><button type="button" data-sigungu="서구">서구</button></li>
		<li class="gwanghwa"><button type="button" data-sigungu="강화군">강화군</button></li>
		<li class="ongjin"><button type="button" data-sigungu="옹진군">옹진군</button></li>
        `,
        kwangju: `
        <li class="dong"><button type="button" data-sigungu="동구">동구</button></li>
		<li class="seo"><button type="button" data-sigungu="서구">서구</button></li>
		<li class="nam"><button type="button" data-sigungu="남구">남구</button></li>
		<li class="buk"><button type="button" data-sigungu="북구">북구</button></li>
		<li class="gwangsan"><button type="button" data-sigungu="광산구">광산구</button></li>
        `,
        daejeon: `
        <li class="dong"><button type="button" data-sigungu="동구">동구</button></li>
		<li class="jung"><button type="button" data-sigungu="중구">중구</button></li>
		<li class="seo"><button type="button" data-sigungu="서구">서구</button></li>
		<li class="yuseong"><button type="button" data-sigungu="유성구">유성구</button></li>
		<li class="daedeok"><button type="button" data-sigungu="대덕구">대덕구</button></li>
        `,
        ulsan: `
        <li class="jung"><button type="button" data-sigungu="중구">중구</button></li>
		<li class="nam"><button type="button" data-sigungu="남구">남구</button></li>
		<li class="dong"><button type="button" data-sigungu="동구">동구</button></li>
		<li class="buk"><button type="button" data-sigungu="북구">북구</button></li>
		<li class="ulju"><button type="button" data-sigungu="울주군">울주군</button></li>
        `,
        sejong: `
        <li class="sejong"><button type="button" data-sigungu="세종특별자치시">세종특별자치시</button></li>
        `,
        gyunggi: `
        <li class="uijeongbu"><button type="button" data-sigungu="의정부시">의정부시</button></li>
		<li class="gwangmyeong"><button type="button" data-sigungu="광명시">광명시</button></li>
		<li class="pyeongtaek"><button type="button" data-sigungu="평택시">평택시</button></li>
		<li class="yangju"><button type="button" data-sigungu="양주시">양주시</button></li>
		<li class="dongducheon"><button type="button" data-sigungu="동두천시">동두천시</button></li>
		<li class="gwacheon"><button type="button" data-sigungu="과천시">과천시</button></li>
		<li class="uiwang"><button type="button" data-sigungu="의왕시">의왕시</button></li>
		<li class="guri"><button type="button" data-sigungu="구리시">구리시</button></li>
		<li class="namyangju"><button type="button" data-sigungu="남양주시">남양주시</button></li>
		<li class="osan"><button type="button" data-sigungu="오산시">오산시</button></li>
		<li class="hwasung"><button type="button" data-sigungu="화성시">화성시</button></li>
		<li class="siheung"><button type="button" data-sigungu="시흥시">시흥시</button></li>
		<li class="gunpo"><button type="button" data-sigungu="군포시">군포시</button></li>
		<li class="hanam"><button type="button" data-sigungu="하남시">하남시</button></li>
		<li class="paju"><button type="button" data-sigungu="파주시">파주시</button></li>
		<li class="yeoju"><button type="button" data-sigungu="여주시">여주시</button></li>
		<li class="yichun"><button type="button" data-sigungu="이천시">이천시</button></li>
		<li class="ansung"><button type="button" data-sigungu="안성시">안성시</button></li>
		<li class="gimpo"><button type="button" data-sigungu="김포시">김포시</button></li>
		<li class="gwangju"><button type="button" data-sigungu="광주시">광주시</button></li>
		<li class="pocheon"><button type="button" data-sigungu="포천시">포천시</button></li>
		<li class="yeonchun"><button type="button" data-sigungu="연천군">연천군</button></li>
		<li class="yangpyeong"><button type="button" data-sigungu="양평군">양평군</button></li>
		<li class="gapyeong"><button type="button" data-sigungu="가평군">가평군</button></li>
		<li class="yongin"><button type="button" data-sigungu="용인시">용인시</button></li>
		<li class="goyang"><button type="button" data-sigungu="고양시">고양시</button></li>
		<li class="suwon"><button type="button" data-sigungu="수원시">수원시</button></li>
		<li class="bucheon"><button type="button" data-sigungu="부천시">부천시</button></li>
		<li class="ansan"><button type="button" data-sigungu="안산시">안산시</button></li>
		<li class="sungnam"><button type="button" data-sigungu="성남시">성남시</button></li>
		<li class="anyang"><button type="button" data-sigungu="안양시">안양시</button></li>
        `,
        kangwon: `
        <li class="chuncheon"><button type="button" data-sigungu="춘천시">춘천시</button></li>
		<li class="wonju"><button type="button" data-sigungu="원주시">원주시</button></li>
		<li class="gangneung"><button type="button" data-sigungu="강릉시">강릉시</button></li>
		<li class="donghae"><button type="button" data-sigungu="동해시">동해시</button></li>
		<li class="samcheok"><button type="button" data-sigungu="삼척시">삼척시</button></li>
		<li class="taebaek"><button type="button" data-sigungu="태백시">태백시</button></li>
		<li class="jeongseon"><button type="button" data-sigungu="정선군">정선군</button></li>
		<li class="sokcho"><button type="button" data-sigungu="속초시">속초시</button></li>
		<li class="goseoung"><button type="button" data-sigungu="고성군">고성군</button></li>
		<li class="yangyang"><button type="button" data-sigungu="양양군">양양군</button></li>
		<li class="inje"><button type="button" data-sigungu="인제군">인제군</button></li>
		<li class="hongcheon"><button type="button" data-sigungu="홍천군">홍천군</button></li>
		<li class="hwingseong"><button type="button" data-sigungu="횡성군">횡성군</button></li>
		<li class="yeongwol"><button type="button" data-sigungu="영월군">영월군</button></li>
		<li class="pyungchang"><button type="button" data-sigungu="평창군">평창군</button></li>
		<li class="hwacheon"><button type="button" data-sigungu="화천군">화천군</button></li>
		<li class="yanggu"><button type="button" data-sigungu="양구군">양구군</button></li>
		<li class="cheolwon"><button type="button" data-sigungu="철원군">철원군</button></li>
        `,
        chungbuk: `
        <li class="chungju"><button type="button" data-sigungu="충주시">충주시</button></li>
		<li class="jecheon"><button type="button" data-sigungu="제천시">제천시</button></li>
		<li class="danyang"><button type="button" data-sigungu="단양군">단양군</button></li>
		<li class="yeongdong"><button type="button" data-sigungu="영동군">영동군</button></li>
		<li class="boeun"><button type="button" data-sigungu="보은군">보은군</button></li>
		<li class="okchun"><button type="button" data-sigungu="옥천군">옥천군</button></li>
		<li class="eumsung"><button type="button" data-sigungu="음성군">음성군</button></li>
		<li class="jincheon"><button type="button" data-sigungu="진천군">진천군</button></li>
		<li class="gwisan"><button type="button" data-sigungu="괴산군">괴산군</button></li>
		<li class="jeungpyeong"><button type="button" data-sigungu="증평군">증평군</button></li>
		<li class="cheongju"><button type="button" data-sigungu="청주시">청주시</button></li>
        `,
        chungnam: `
        <li class="gongju"><button type="button" data-sigungu="공주시">공주시</button></li>
		<li class="boryeong"><button type="button" data-sigungu="보령시">보령시</button></li>
		<li class="asan"><button type="button" data-sigungu="아산시">아산시</button></li>
		<li class="seosan"><button type="button" data-sigungu="서산시">서산시</button></li>
		<li class="taean"><button type="button" data-sigungu="태안군">태안군</button></li>
		<li class="geumsan"><button type="button" data-sigungu="금산군">금산군</button></li>
		<li class="nonsan"><button type="button" data-sigungu="논산시">논산시</button></li>
		<li class="gyeryong"><button type="button" data-sigungu="계룡시">계룡시</button></li>
		<li class="buyeo"><button type="button" data-sigungu="부여군">부여군</button></li>
		<li class="seocheon"><button type="button" data-sigungu="서천군">서천군</button></li>
		<li class="hongsung"><button type="button" data-sigungu="홍성군">홍성군</button></li>
		<li class="chungyang"><button type="button" data-sigungu="청양군">청양군</button></li>
		<li class="yesan"><button type="button" data-sigungu="예산군">예산군</button></li>
		<li class="dangjin"><button type="button" data-sigungu="당진시">당진시</button></li>
		<li class="cheonan"><button type="button" data-sigungu="천안시">천안시</button></li>
        `,
        jeonbuk: `
        <li class="gunsan"><button type="button" data-sigungu="군산시">군산시</button></li>
		<li class="iksan"><button type="button" data-sigungu="익산시">익산시</button></li>
		<li class="jungep"><button type="button" data-sigungu="정읍시">정읍시</button></li>
		<li class="namwon"><button type="button" data-sigungu="남원시">남원시</button></li>
		<li class="gimje"><button type="button" data-sigungu="김제시">김제시</button></li>
		<li class="wanju"><button type="button" data-sigungu="완주군">완주군</button></li>
		<li class="jinan"><button type="button" data-sigungu="진안군">진안군</button></li>
		<li class="muju"><button type="button" data-sigungu="무주군">무주군</button></li>
		<li class="jangsu"><button type="button" data-sigungu="장수군">장수군</button></li>
		<li class="imsil"><button type="button" data-sigungu="임실군">임실군</button></li>
		<li class="sunchang"><button type="button" data-sigungu="순창군">순창군</button></li>
		<li class="gochang"><button type="button" data-sigungu="고창군">고창군</button></li>
		<li class="buan"><button type="button" data-sigungu="부안군">부안군</button></li>
		<li class="jeonju"><button type="button" data-sigungu="전주시">전주시</button></li>
        `,
        jeonnam: `
        <li class="mokpo"><button type="button" data-sigungu="목포시">목포시</button></li>
		<li class="yeosu"><button type="button" data-sigungu="여수시">여수시</button></li>
		<li class="suncheon"><button type="button" data-sigungu="순천시">순천시</button></li>
		<li class="naju"><button type="button" data-sigungu="나주시">나주시</button></li>
		<li class="gwangyang"><button type="button" data-sigungu="광양시">광양시</button></li>
		<li class="damyang"><button type="button" data-sigungu="담양군">담양군</button></li>
		<li class="jangseong"><button type="button" data-sigungu="장성군">장성군</button></li>
		<li class="gokseong"><button type="button" data-sigungu="곡성군">곡성군</button></li>
		<li class="gurye"><button type="button" data-sigungu="구례군">구례군</button></li>
		<li class="goheung"><button type="button" data-sigungu="고흥군">고흥군</button></li>
		<li class="boseong"><button type="button" data-sigungu="보성군">보성군</button></li>
		<li class="hwasun"><button type="button" data-sigungu="화순군">화순군</button></li>
		<li class="jangheung"><button type="button" data-sigungu="장흥군">장흥군</button></li>
		<li class="gangjin"><button type="button" data-sigungu="강진군">강진군</button></li>
		<li class="wando"><button type="button" data-sigungu="완도군">완도군</button></li>
		<li class="haenam"><button type="button" data-sigungu="해남군">해남군</button></li>
		<li class="jindo"><button type="button" data-sigungu="진도군">진도군</button></li>
		<li class="yeongam"><button type="button" data-sigungu="영암군">영암군</button></li>
		<li class="muan"><button type="button" data-sigungu="무안군">무안군</button></li>
		<li class="yeonggwang"><button type="button" data-sigungu="영광군">영광군</button></li>
		<li class="hampyeong"><button type="button" data-sigungu="함평군">함평군</button></li>
		<li class="sinan"><button type="button" data-sigungu="신안군">신안군</button></li>
        `,
        gyeongbuk: `
        <li class="ullung"><button type="button" data-sigungu="울릉군">울릉군</button></li>
		<li class="gyeongju"><button type="button" data-sigungu="경주시">경주시</button></li>
		<li class="gimcheon"><button type="button" data-sigungu="김천시">김천시</button></li>
		<li class="andong"><button type="button" data-sigungu="안동시">안동시</button></li>
		<li class="gumi"><button type="button" data-sigungu="구미시">구미시</button></li>
		<li class="yeongju"><button type="button" data-sigungu="영주시">영주시</button></li>
		<li class="yeongcheon"><button type="button" data-sigungu="영천시">영천시</button></li>
		<li class="sangju"><button type="button" data-sigungu="상주시">상주시</button></li>
		<li class="mungyeong"><button type="button" data-sigungu="문경시">문경시</button></li>
		<li class="yecheon"><button type="button" data-sigungu="예천군">예천군</button></li>
		<li class="gyeongsan"><button type="button" data-sigungu="경산시">경산시</button></li>
		<li class="cheongdo"><button type="button" data-sigungu="청도군">청도군</button></li>
		<li class="goryeong"><button type="button" data-sigungu="고령군">고령군</button></li>
		<li class="seongju"><button type="button" data-sigungu="성주군">성주군</button></li>
		<li class="chilgok"><button type="button" data-sigungu="칠곡군">칠곡군</button></li>
		<li class="wisung"><button type="button" data-sigungu="의성군">의성군</button></li>
		<li class="cheongsong"><button type="button" data-sigungu="청송군">청송군</button></li>
		<li class="yeongyang"><button type="button" data-sigungu="영양군">영양군</button></li>
		<li class="yeongdeok"><button type="button" data-sigungu="영덕군">영덕군</button></li>
		<li class="bonghwa"><button type="button" data-sigungu="봉화군">봉화군</button></li>
		<li class="uljin"><button type="button" data-sigungu="울진군">울진군</button></li>
		<li class="pohang"><button type="button" data-sigungu="포항시">포항시</button></li>
        `,
        gyeongnam: `
        <li class="jinju"><button type="button" data-sigungu="진주시">진주시</button></li>
		<li class="tongyeong"><button type="button" data-sigungu="통영시">통영시</button></li>
		<li class="goseong"><button type="button" data-sigungu="고성군">고성군</button></li>
		<li class="sacheon"><button type="button" data-sigungu="사천시">사천시</button></li>
		<li class="gimhae"><button type="button" data-sigungu="김해시">김해시</button></li>
		<li class="milyang"><button type="button" data-sigungu="밀양시">밀양시</button></li>
		<li class="geoje"><button type="button" data-sigungu="거제시">거제시</button></li>
		<li class="wiryeong"><button type="button" data-sigungu="의령군">의령군</button></li>
		<li class="haman"><button type="button" data-sigungu="함안군">함안군</button></li>
		<li class="changyeong"><button type="button" data-sigungu="창녕군">창녕군</button></li>
		<li class="yangsan"><button type="button" data-sigungu="양산시">양산시</button></li>
		<li class="hadong"><button type="button" data-sigungu="하동군">하동군</button></li>
		<li class="namehae"><button type="button" data-sigungu="남해군">남해군</button></li>
		<li class="hamyang"><button type="button" data-sigungu="함양군">함양군</button></li>
		<li class="sancheong"><button type="button" data-sigungu="산청군">산청군</button></li>
		<li class="geochang"><button type="button" data-sigungu="거창군">거창군</button></li>
		<li class="hapcheon"><button type="button" data-sigungu="합천군">합천군</button></li>
		<li class="chaongwon"><button type="button" data-sigungu="창원시">창원시</button></li>
        `,
        jeju: `
        <li class="jeju"><button type="button" data-sigungu="제주시">제주시</button></li>
		<li class="seoguipo"><button type="button" data-sigungu="서귀포시">서귀포시</button></li>
        `,
    };
    // [D] 240517 : '.keyword-box > title-number' 텍스트 수정
	//  			1) 스크린리더가 읽어줄 수 있도록 합니다
	// 				2) ref_survey_cp.js : innerHTML을 위해 담아둔 변수에 동일하게 반영
    let sigunguContentsList = {
        seoul: {
            종로구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>정치/사회</span></div>
                <ol>
                    <li><span>정부서울청사</span></li>
                    <li><span>중앙재난안전대책본부회의</span></li>
                    <li><span>경제부총리</span></li>
                    <li><span>비상경제중앙대책본부</span></li>
                    <li><span>서울종로구외교부</span></li>
                    <li><span>국무회의참석</span></li>
                    <li><span>서울종로구청와대</span></li>
                    <li><span>관계장관회의</span></li>
                    <li><span>과학기술정보통신부</span></li>
                    <li><span>부동산시장점검관계장관</span></li>
                    <li><span>외교부</span></li>
                    <li><span>교육부장관</span></li>
                    <li><span>후쿠시마원전오염수방류관련</span></li>
                    <li><span>국정현안점검조정회의</span></li>
                    <li><span>회의주제</span></li>
                    <li><span>사회부총리</span></li>
                    <li><span>행정안전부</span></li>
                    <li><span>정부서울청사합동브리핑실</span></li>
                    <li><span>고용노둥부장관</span></li>
                    <li><span>국무위원</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>기자회견/사건사고</span></div>
                <ol>
                    <li><span>주한일본대사관앞</span></li>
                    <li><span>일본군성노예제문제해결</span></li>
                    <li><span>후쿠시마원전오염수해양투기</span></li>
                    <li><span>전국장애인차별철폐연대</span></li>
                    <li><span>고위공직자범죄수사처</span></li>
                    <li><span>정의기억연대</span></li>
                    <li><span>앞기자회견</span></li>
                    <li><span>일본정부</span></li>
                    <li><span>평화의소녀</span></li>
                    <li><span>종로구광화문광장</span></li>
                    <li><span>세종문화회관</span></li>
                    <li><span>종로구경실련강당</span></li>
                    <li><span>기자회견발언</span></li>
                    <li><span>종로구헌법재판소앞</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>공공운수노조</span></li>
                    <li><span>종로구통위도인수위</span></li>
                    <li><span>손팻말</span></li>
                    <li><span>일본위안부피해자</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>관광/복지</span></div>
                <ol>
                    <li><span>포시즌스호텔</span></li>
                    <li><span>종로구광화문광장</span></li>
                    <li><span>국립현대미술관서울관</span></li>
                    <li><span>한국불교역사문화기념관</span></li>
                    <li><span>탑골공원</span></li>
                    <li><span>국립민속박물관</span></li>
                    <li><span>대한민국역사박물관</span></li>
                    <li><span>상병수당시범사업</span></li>
                    <li><span>국립고궁박물관</span></li>
                    <li><span>궁중문화축전</span></li>
                    <li><span>사랑의온도탑</span></li>
                    <li><span>민속박물관오촌댁</span></li>
                    <li><span>부산세계박람회유치</span></li>
                    <li><span>종로구마로니에공원</span></li>
                    <li><span>복합문화공원</span></li>
                    <li><span>자립준비청년</span></li>
                    <li><span>서울썸머비치</span></li>
                    <li><span>원각사무료급식소</span></li>
                    <li><span>지역아동센터</span></li>
                    <li><span>돈의동쪽방촌</span></li>
                </ol>
            </div>
            `,
            중구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>관광/행사</span></div>
                <ol>
                    <li><span>서울중구한국프레스센터</span></li>
                    <li><span>서울중구롯데호텔</span></li>
                    <li><span>웨스틴조선호텔</span></li>
                    <li><span>중구더플라자호텔</span></li>
                    <li><span>서울중구신라호텔</span></li>
                    <li><span>동대문디자인플라자</span></li>
                    <li><span>밀레니엄힐튼</span></li>
                    <li><span>롯데백화점본점</span></li>
                    <li><span>서울중구명동성당</span></li>
                    <li><span>서울중구청계천</span></li>
                    <li><span>서울중구청계광장</span></li>
                    <li><span>남산골한옥마을</span></li>
                    <li><span>중구장충체육관</span></li>
                    <li><span>외국인관광객</span></li>
                    <li><span>관훈클럽초청토론회</span></li>
                    <li><span>한국기자협회</span></li>
                    <li><span>그랜드볼룸</span></li>
                    <li><span>국립국악관현악단</span></li>
                    <li><span>디지털전환</span></li>
                    <li><span>국립창극단</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>정치/사회</span></div>
                <ol>
                    <li><span>서울중구대한상공회의소</span></li>
                    <li><span>과학기술정보통신부</span></li>
                    <li><span>한국프레스센터</span></li>
                    <li><span>고용노동부장관</span></li>
                    <li><span>경제부총리겸기획재정부장관</span></li>
                    <li><span>고용노동부</span></li>
                    <li><span>중구은행회관</span></li>
                    <li><span>경제부총리</span></li>
                    <li><span>농협중앙회장</span></li>
                    <li><span>간담회발언</span></li>
                    <li><span>서울중구대한상의</span></li>
                    <li><span>금융위원장</span></li>
                    <li><span>중앙회본관</span></li>
                    <li><span>사랑의열매</span></li>
                    <li><span>과학기술정보통신부장관</span></li>
                    <li><span>서울중구롯데호텔</span></li>
                    <li><span>웨스틴조선호텔</span></li>
                    <li><span>튀르키예</span></li>
                    <li><span>거시경제금융회의</span></li>
                    <li><span>은행연합회</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>기자회견/범죄</span></div>
                <ol>
                    <li><span>민주노총전국택배노동조홥</span></li>
                    <li><span>서울중구CJ대한통운본사앞</span></li>
                    <li><span>한국프레스센터</span></li>
                    <li><span>택배노동자</span></li>
                    <li><span>앞기자회견</span></li>
                    <li><span>민주노총</span></li>
                    <li><span>공공운수노조</span></li>
                    <li><span>장애인차별철폐연대</span></li>
                    <li><span>민주노총공공운수</span></li>
                    <li><span>후쿠시마오염수해양투기</span></li>
                    <li><span>기자회견발언</span></li>
                    <li><span>서울시청앞</span></li>
                    <li><span>진실화해위</span></li>
                    <li><span>국가인권위원회앞</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>참사특별조사</span></li>
                    <li><span>스마트워치</span></li>
                    <li><span>고용노동청앞</span></li>
                    <li><span>신변보호</span></li>
                    <li><span>살해혐의</span></li>
                </ol>
            </div>
            `,
            용산구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>압사사고/기자회견</span></div>
                <ol>
                    <li><span>용산구대통령집무실</span></li>
                    <li><span>전쟁기념관앞</span></li>
                    <li><span>서울용산구이태원</span></li>
                    <li><span>입건/기소/구속</span></li>
                    <li><span>이태원압사참사</span></li>
                    <li><span>전국장애인차별연대</span></li>
                    <li><span>앞기자회견</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>이태원참사희생자</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>특별수사본부</span></li>
                    <li><span>화천대유</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>녹사평역</span></li>
                    <li><span>이태원참사유가족</span></li>
                    <li><span>장애인권리</span></li>
                    <li><span>애도기간</span></li>
                    <li><span>과실치사상</span></li>
                    <li><span>이태원역</span></li>
                    <li><span>이태원참사현장</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>대통령집무실</span></div>
                <ol>
                    <li><span>용산구대통령실청사</span></li>
                    <li><span>용산구국방부청사</span></li>
                    <li><span>대통령실청사브리핑룸</span></li>
                    <li><span>대통령집무실앞</span></li>
                    <li><span>비상경제민생회의</span></li>
                    <li><span>국무회의주재</span></li>
                    <li><span>대통령실관계자</span></li>
                    <li><span>미국대통령</span></li>
                    <li><span>현안브리핑</span></li>
                    <li><span>용산구국방컨벤션</span></li>
                    <li><span>대통령집무실이전</span></li>
                    <li><span>중소기업인대회</span></li>
                    <li><span>한미동행</span></li>
                    <li><span>국제사회</span></li>
                    <li><span>대통령실고위관계자</span></li>
                    <li><span>국민통합</span></li>
                    <li><span>청사이전</span></li>
                    <li><span>국가위기관리센터</span></li>
                    <li><span>공동언론발표</span></li>
                    <li><span>대통령실핵심관계자</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>문화/관광</span></div>
                <ol>
                    <li><span>국립중앙박물관</span></li>
                    <li><span>용산구백범김구선생기념관</span></li>
                    <li><span>용산구전쟁기념관</span></li>
                    <li><span>그랜드하얏트서울</span></li>
                    <li><span>국립한글박물관</span></li>
                    <li><span>610민주항쟁기념식</span></li>
                    <li><span>용산어린이공원</span></li>
                    <li><span>전쟁기념관평화의광장</span></li>
                    <li><span>민주인권기념관</span></li>
                    <li><span>서울용산구노들섬</span></li>
                    <li><span>보훈가족초청감사행사</span></li>
                    <li><span>언론공개회</span></li>
                    <li><span>리움미술관</span></li>
                    <li><span>용산공원조성</span></li>
                    <li><span>임시정부수립기념식</span></li>
                    <li><span>국가유공자</span></li>
                    <li><span>참전용사</span></li>
                    <li><span>용산미군기지</span></li>
                    <li><span>국립현대미술관</span></li>
                    <li><span>한글날</span></li>
                </ol>
            </div>
            `,
            성동구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>법률위반위험운전치사</span></li>
                    <li><span>기소/재판</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>서울성동구서울교통공사</span></li>
                    <li><span>특정범죄가중처벌</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>동부지법형사</span></li>
                    <li><span>면허취소수준</span></li>
                    <li><span>뚝도아리수</span></li>
                    <li><span>20대여성</span></li>
                    <li><span>영장실질심사</span></li>
                    <li><span>사설구급차</span></li>
                    <li><span>만취상태</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>발달장애</span></li>
                    <li><span>30대여성</span></li>
                    <li><span>아리수정수센터</span></li>
                    <li><span>폐쇄회로CCTV</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>복리/행사</span></div>
                <ol>
                    <li><span>공공배달앱배달특급</span></li>
                    <li><span>서울성동구서울숲</span></li>
                    <li><span>성동구에스팩토리</span></li>
                    <li><span>서울성동구응봉산</span></li>
                    <li><span>성동형스마트도시통합운영센터</span></li>
                    <li><span>뉴포드브롱코New</span></li>
                    <li><span>탈모치료비지원조례</span></li>
                    <li><span>발달장애인</span></li>
                    <li><span>살곶이체육공원</span></li>
                    <li><span>패스트파이브서울숲</span></li>
                    <li><span>복합문화공간</span></li>
                    <li><span>성동구비트플렉스</span></li>
                    <li><span>서울성동구뚝섬</span></li>
                    <li><span>복합문화체육센터</span></li>
                    <li><span>응봉산개나리</span></li>
                    <li><span>한강조각프로젝트</span></li>
                    <li><span>봄날씨</span></li>
                    <li><span>스마트쉼터</span></li>
                    <li><span>드라이브스루행사</span></li>
                    <li><span>스마트포용도시</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>부동산</span></div>
                <ol>
                    <li><span>아크로서울포레스트</span></li>
                    <li><span>실거래가공개시스템</span></li>
                    <li><span>삼표레미콘공장부지</span></li>
                    <li><span>SK에코플랜트</span></li>
                    <li><span>임대차3법</span></li>
                    <li><span>삼표산업</span></li>
                    <li><span>순위청약</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>성수전략정비구역</span></li>
                    <li><span>전세계약</span></li>
                    <li><span>2호선</span></li>
                    <li><span>청계SK뷰</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>전세보증금</span></li>
                    <li><span>계약갱신청구권</span></li>
                    <li><span>청량리역롯데캐슬</span></li>
                    <li><span>1인가구</span></li>
                    <li><span>시세차익</span></li>
                    <li><span>재개발정비사업</span></li>
                    <li><span>금호21구역</span></li>
                </ol>
            </div>
            `,
            광진구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>관광/행사</span></div>
                <ol>
                    <li><span>서울광진구뚝섬한강</span></li>
                    <li><span>광진구그랜드워커힐</span></li>
                    <li><span>광진구서울어린이대공원</span></li>
                    <li><span>워커힐호텔앤리조트</span></li>
                    <li><span>어린이날</span></li>
                    <li><span>SK에코플랜트</span></li>
                    <li><span>어린이대공원후문</span></li>
                    <li><span>빛의시어터</span></li>
                    <li><span>유니버설아트센터</span></li>
                    <li><span>한강사업본부</span></li>
                    <li><span>세계협동조합대회</span></li>
                    <li><span>놀이기구</span></li>
                    <li><span>어린이대공원놀이동산</span></li>
                    <li><span>파이낸셜스토리</span></li>
                    <li><span>사회적가치</span></li>
                    <li><span>한강조각프로젝트</span></li>
                    <li><span>서울시한강</span></li>
                    <li><span>한강공원눈썰매장</span></li>
                    <li><span>지속가능</span></li>
                    <li><span>광나루여의도잠원</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
                <ol>
                    <li><span>기소/재판/구속</span></li>
                    <li><span>한국보건의료인국가시험원</span></li>
                    <li><span>국가실험실기시험</span></li>
                    <li><span>특정범죄가중처벌</span></li>
                    <li><span>버스기사</span></li>
                    <li><span>전동킥보드</span></li>
                    <li><span>어린이대공원</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>의사국가시험</span></li>
                    <li><span>동부지법형사</span></li>
                    <li><span>살인혐의</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>경찰관계자</span></li>
                    <li><span>도로교통법</span></li>
                    <li><span>85회의사국가시험</span></li>
                    <li><span>영장신청</span></li>
                    <li><span>착용요구</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>양형이유</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>지역생활/부동산</span></div>
                <ol>
                    <li><span>국립정신건강센터</span></li>
                    <li><span>동서울우편물류센터</span></li>
                    <li><span>롯데캐슬리버파크시그니처</span></li>
                    <li><span>롯데캐슬이스트</span></li>
                    <li><span>지하층지상</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>자양하늘채베르</span></li>
                    <li><span>청약경쟁</span></li>
                    <li><span>2호선</span></li>
                    <li><span>우아한형제</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>반려동물</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>공공직접시행</span></li>
                    <li><span>집마련</span></li>
                    <li><span>거점오피스</span></li>
                    <li><span>1순위청약</span></li>
                    <li><span>생활인프라</span></li>
                    <li><span>특별소통기간</span></li>
                    <li><span>동서울터미널</span></li>
                </ol>
            </div>
            `,
            동대문구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>화재/사건사고</span></div>
                <ol>
                    <li><span>청량리청과물시장화재</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>기소/재판/입건</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>서울북부지법형사</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>경찰관계자</span></li>
                    <li><span>청량리농수산물시장</span></li>
                    <li><span>빛과진리교회</span></li>
                    <li><span>영장신청</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>구속기소</span></li>
                    <li><span>경찰조사</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>전동킥보드</span></li>
                    <li><span>서울북부지검</span></li>
                    <li><span>사건발생</span></li>
                    <li><span>경찰신고</span></li>
                    <li><span>가혹행위</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>행사/행정</span></div>
                <ol>
                    <li><span>동대문디자인플라자</span></li>
                    <li><span>위치추적중앙관제센터</span></li>
                    <li><span>글로벌지식협력단지</span></li>
                    <li><span>동물복지지원센터</span></li>
                    <li><span>제수용품</span></li>
                    <li><span>경찰청실종자가족지원센터</span></li>
                    <li><span>한국건강관리협회</span></li>
                    <li><span>허준이수학난제연구소</span></li>
                    <li><span>청량리종합시장</span></li>
                    <li><span>고등과학원</span></li>
                    <li><span>금융권공동채용박람회</span></li>
                    <li><span>화상통화</span></li>
                    <li><span>설명절</span></li>
                    <li><span>해외한인입양</span></li>
                    <li><span>유전자채취</span></li>
                    <li><span>청량리청과물시장</span></li>
                    <li><span>경제개발</span></li>
                    <li><span>입양인가족</span></li>
                    <li><span>5개년계획</span></li>
                    <li><span>미국으로입양</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>부동산</span></div>
                <ol>
                    <li><span>지하층지상</span></li>
                    <li><span>청량리롯데캐슬하이루체</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>휘경자이디센시아</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>주거형오피스텔</span></li>
                    <li><span>1호선</span></li>
                    <li><span>부동산청약홈</span></li>
                    <li><span>주택재개발정비사업</span></li>
                    <li><span>경의중앙선</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>1순위청약</span></li>
                    <li><span>청약경쟁</span></li>
                    <li><span>일반분양물량</span></li>
                    <li><span>규모조성</span></li>
                    <li><span>구역재개발</span></li>
                    <li><span>5호선</span></li>
                    <li><span>청약접수</span></li>
                    <li><span>배후수요</span></li>
                </ol>
            </div>
            `,
            중랑구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>기소/재판/구속</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>폐쇄회로CCTV</span></li>
                    <li><span>구속기소</span></li>
                    <li><span>마약투약혐의</span></li>
                    <li><span>시신유기혐의</span></li>
                    <li><span>필로폰투약</span></li>
                    <li><span>여자친구</span></li>
                    <li><span>영장실질심사</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>살해후</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>대마재배</span></li>
                    <li><span>지하주차장</span></li>
                    <li><span>혐의부인</span></li>
                    <li><span>흉기살해</span></li>
                    <li><span>폭행혐의</span></li>
                    <li><span>전자발찌</span></li>
                    <li><span>마약류관리법</span></li>
                    <li><span>주민신고</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>부동산</span></div>
                <ol>
                    <li><span>리버센SK뷰롯데캐슬</span></li>
                    <li><span>힐스테이트지금디포레</span></li>
                    <li><span>경의중앙선</span></li>
                    <li><span>소규모주택정비사업</span></li>
                    <li><span>자율주택정비사업</span></li>
                    <li><span>상봉터미널</span></li>
                    <li><span>망우1구역</span></li>
                    <li><span>공공주택복합사업</span></li>
                    <li><span>7호선</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>순위청약</span></li>
                    <li><span>공공재건축</span></li>
                    <li><span>도시정비사업</span></li>
                    <li><span>상봉역유보라퍼스트리브</span></li>
                    <li><span>반도건설</span></li>
                    <li><span>주택공급</span></li>
                    <li><span>시공권확보</span></li>
                    <li><span>도시재생</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>신설1구역</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>관광/지역발전</span></div>
                <ol>
                    <li><span>망우역사문화공원</span></li>
                    <li><span>방정환교육지원센터</span></li>
                    <li><span>서울장미축제</span></li>
                    <li><span>서울의료원응급의료센터신축</span></li>
                    <li><span>용마산폭포공원</span></li>
                    <li><span>중랑창업지원센터</span></li>
                    <li><span>아이스크림기부행사</span></li>
                    <li><span>장미공원</span></li>
                    <li><span>망우리공원</span></li>
                    <li><span>수림대장미공원</span></li>
                    <li><span>복합지원센터건립</span></li>
                    <li><span>망우공간</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>평생학습도시</span></li>
                    <li><span>무장애숲길</span></li>
                    <li><span>로즈페스티벌</span></li>
                    <li><span>로즈뮤직페스티벌</span></li>
                    <li><span>장미퍼레이드</span></li>
                    <li><span>장미음악회</span></li>
                    <li><span>장미터널</span></li>
                </ol>
            </div>
            `,
            성북구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>사랑제일교회</span></li>
                    <li><span>고려대학교</span></li>
                    <li><span>장위10구역재개발조합</span></li>
                    <li><span>서울북부지법집행인력</span></li>
                    <li><span>기소/재판/구속</span></li>
                    <li><span>교회앞</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>경찰관계자</span></li>
                    <li><span>명도집행</span></li>
                    <li><span>집행입력</span></li>
                    <li><span>교회목사</span></li>
                    <li><span>경찰과소방</span></li>
                    <li><span>교회관계자</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>서울성북구북악산</span></li>
                    <li><span>공무집행방해</span></li>
                    <li><span>스마트모빌리티회장</span></li>
                    <li><span>교회시설</span></li>
                    <li><span>공직선거법위밥</span></li>
                    <li><span>라임사태</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>부동산</span></div>
                <ol>
                    <li><span>장위자이레디언트</span></li>
                    <li><span>사랑제일교회</span></li>
                    <li><span>공공재개발</span></li>
                    <li><span>지하층지상</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>순위청약</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>롯데캐슬트윈골드</span></li>
                    <li><span>올림픽파크포레온</span></li>
                    <li><span>장위10구역</span></li>
                    <li><span>도시정비사업</span></li>
                    <li><span>꿈의숲</span></li>
                    <li><span>장위8구역</span></li>
                    <li><span>6호선</span></li>
                    <li><span>센트럴아이파크</span></li>
                    <li><span>장위4구역</span></li>
                    <li><span>장위뉴타운</span></li>
                    <li><span>1순위청약</span></li>
                    <li><span>청약진행</span></li>
                    <li><span>일반분양물량</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>사회/축제</span></div>
                <ol>
                    <li><span>평화의소녀상</span></li>
                    <li><span>외국인학생축제</span></li>
                    <li><span>고려대학교</span></li>
                    <li><span>급식로봇</span></li>
                    <li><span>소녀상영구존치</span></li>
                    <li><span>종합사회복지관</span></li>
                    <li><span>숭곡중</span></li>
                    <li><span>고려대학교민주광장</span></li>
                    <li><span>계성고학생</span></li>
                    <li><span>소녀상건립</span></li>
                    <li><span>손편지</span></li>
                    <li><span>국제하계대학</span></li>
                    <li><span>익명의기부자</span></li>
                    <li><span>사랑제일교회</span></li>
                    <li><span>고려대학교인촌기념관</span></li>
                    <li><span>사회복지시설</span></li>
                    <li><span>지역아동센터</span></li>
                    <li><span>봉사활동</span></li>
                    <li><span>지역사회</span></li>
                    <li><span>국제여름학교</span></li>
                </ol>
            </div>
            `,
            강북구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>경비원갑질/사건사고</span></div>
                <ol>
                    <li><span>아파트경비원</span></li>
                    <li><span>기소/재판/입건</span></li>
                    <li><span>서울북부지법형사</span></li>
                    <li><span>폭언폭행/협박</span></li>
                    <li><span>서울강북경찰서</span></li>
                    <li><span>경비노동자</span></li>
                    <li><span>아파트입주민</span></li>
                    <li><span>택배기사</span></li>
                    <li><span>폭행혐의</span></li>
                    <li><span>경찰관계자</span></li>
                    <li><span>주차문제</span></li>
                    <li><span>경찰조사</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>경찰신고</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>정신적고통</span></li>
                    <li><span>영장신청</span></li>
                    <li><span>검찰송치</span></li>
                    <li><span>이중주차</span></li>
                    <li><span>청와대국민청원</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>역사/관광</span></div>
                <ol>
                    <li><span>4.19혁명기념식</span></li>
                    <li><span>꿈의숲</span></li>
                    <li><span>국립4.19민주</span></li>
                    <li><span>북한산국립공원</span></li>
                    <li><span>서울도심등산관광센터</span></li>
                    <li><span>수유리광복군합동묘소</span></li>
                    <li><span>기념식첨석</span></li>
                    <li><span>묘지참배</span></li>
                    <li><span>4.19혁명기념일</span></li>
                    <li><span>강북구4.19민주</span></li>
                    <li><span>민주묘지기념탑</span></li>
                    <li><span>파라스파라서울</span></li>
                    <li><span>역사문화관광</span></li>
                    <li><span>학생혁명기념탑</span></li>
                    <li><span>북한산둘레길</span></li>
                    <li><span>4.19혁명유공자</span></li>
                    <li><span>운정그린캠퍼스</span></li>
                    <li><span>숲아트센터</span></li>
                    <li><span>조선호텔앤리조트</span></li>
                    <li><span>학생과시민</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>부동산</span></div>
                <ol>
                    <li><span>강북구칸타빌수유펠리스</span></li>
                    <li><span>한화포레나미아</span></li>
                    <li><span>순위청약</span></li>
                    <li><span>도심공공주택복합사업</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>부동산원청약홈</span></li>
                    <li><span>북서울자이폴라리스</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>청약진행</span></li>
                    <li><span>미계약물량</span></li>
                    <li><span>대출규제</span></li>
                    <li><span>1순위청약</span></li>
                    <li><span>청약경쟁</span></li>
                    <li><span>금리인상</span></li>
                    <li><span>신속통합기회</span></li>
                    <li><span>4호선</span></li>
                    <li><span>매입임대사업</span></li>
                    <li><span>미분양물량</span></li>
                    <li><span>청약시장</span></li>
                    <li><span>주택매입</span></li>
                </ol>
            </div>
            `,
            도봉구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고/날씨</span></div>
                <ol>
                    <li><span>국가재정범죄합동수사단출범식</span></li>
                    <li><span>서울북부지방법원/검찰청</span></li>
                    <li><span>서울북부지법형사</span></li>
                    <li><span>재판/기소/입건</span></li>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>호우경보</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>구속전피의자심문</span></li>
                    <li><span>중부지방</span></li>
                    <li><span>경찰관계자</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>서울북부지검</span></li>
                    <li><span>영장실질심사</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>유기혐의</span></li>
                    <li><span>살해</span></li>
                    <li><span>30대여성</span></li>
                    <li><span>60대여성</span></li>
                    <li><span>경찰신고</span></li>
                    <li><span>장마전선</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>부동산</span></div>
                <ol>
                    <li><span>도심공공주택복합사업</span></li>
                    <li><span>힐스테이트도봉역웰가</span></li>
                    <li><span>주거용오피스텔</span></li>
                    <li><span>지하층지상</span></li>
                    <li><span>공공지원민간임대아파트</span></li>
                    <li><span>도심복합사업후보지</span></li>
                    <li><span>도봉롯데캐슬골든파크</span></li>
                    <li><span>1호선</span></li>
                    <li><span>임대차3법</span></li>
                    <li><span>7호선도봉산역</span></li>
                    <li><span>씨드큐브창동</span></li>
                    <li><span>금호어울림리버</span></li>
                    <li><span>선도사업후보지</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>이동가능</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>19세이상</span></li>
                    <li><span>주민동의</span></li>
                    <li><span>집마련</span></li>
                    <li><span>4호선</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>문화/체험/행정</span></div>
                <ol>
                    <li><span>서울아레나복합문화시설</span></li>
                    <li><span>자율주행순찰로봇서비스</span></li>
                    <li><span>오징어게임체험관</span></li>
                    <li><span>명예사회복지공무원</span></li>
                    <li><span>김근태기념도서관</span></li>
                    <li><span>온실가스감축</span></li>
                    <li><span>환경교육도시</span></li>
                    <li><span>자치분권대학</span></li>
                    <li><span>여성친화도시</span></li>
                    <li><span>협약체결</span></li>
                    <li><span>반려견놀이터</span></li>
                    <li><span>음식물쓰레기</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>기후위기대응</span></li>
                    <li><span>환경교육</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>친환경보일러</span></li>
                    <li><span>조례재정</span></li>
                    <li><span>폭염탈출냉장고</span></li>
                </ol>
            </div>
            `,
            노원구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>살해혐의</span></li>
                    <li><span>기소/구속/재판</span></li>
                    <li><span>서울북부지법형사</span></li>
                    <li><span>모녀살해</span></li>
                    <li><span>무기징역</span></li>
                    <li><span>구속기소</span></li>
                    <li><span>경찰관계자</span></li>
                    <li><span>징역선고</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>경찰조사</span></li>
                    <li><span>스토킹처벌법</span></li>
                    <li><span>스토킹범죄</span></li>
                    <li><span>특수주거침입</span></li>
                    <li><span>5개혐의</span></li>
                    <li><span>처벌법위반</span></li>
                    <li><span>차례로살해</span></li>
                    <li><span>정보통신망침해</span></li>
                    <li><span>연락거부</span></li>
                    <li><span>노원구한아파트</span></li>
                    <li><span>폭행혐의</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>부동산</span></div>
                <ol>
                    <li><span>노원구태릉골프장부지</span></li>
                    <li><span>가구/주택공급</span></li>
                    <li><span>수도권주택공급대책</span></li>
                    <li><span>노원구상계주공</span></li>
                    <li><span>도봉운전면허시험장이전</span></li>
                    <li><span>노원롯데캐슬시그니처</span></li>
                    <li><span>사전청약</span></li>
                    <li><span>서울아파트값</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>주택공급확대</span></li>
                    <li><span>지하층지상</span></li>
                    <li><span>신규택지</span></li>
                    <li><span>재건축사업</span></li>
                    <li><span>적정성검토</span></li>
                    <li><span>대출규제</span></li>
                    <li><span>공급확대방안</span></li>
                    <li><span>상승폭</span></li>
                    <li><span>예비안전진단</span></li>
                    <li><span>사전청약물량</span></li>
                    <li><span>금리인상</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>복지/행사</span></div>
                <ol>
                    <li><span>노원구봉사관</span></li>
                    <li><span>대한적집자사서울특별시지사</span></li>
                    <li><span>경춘선숲길갤러리</span></li>
                    <li><span>과속경보시스템표지판설치</span></li>
                    <li><span>일자리박람회</span></li>
                    <li><span>노원구등나무근린공원</span></li>
                    <li><span>장애인복지</span></li>
                    <li><span>적십자봉사원</span></li>
                    <li><span>반려견</span></li>
                    <li><span>화랑대철도공원</span></li>
                    <li><span>아동식당</span></li>
                    <li><span>반려동물</span></li>
                    <li><span>노원구서비스공단</span></li>
                    <li><span>복지시설</span></li>
                    <li><span>기업참여</span></li>
                    <li><span>김장나눔행사</span></li>
                    <li><span>김장김치</span></li>
                    <li><span>반려견쉼터</span></li>
                    <li><span>채용예정</span></li>
                    <li><span>아이편한택시</span></li>
                </ol>
            </div>
            `,
            은평구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>한국여성의전화사무실</span></li>
                    <li><span>학교급식노동자폐암진단</span></li>
                    <li><span>러브버그</span></li>
                    <li><span>재판/기소/고소</span></li>
                    <li><span>수색초등학교</span></li>
                    <li><span>특수공무집행방해혐의</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>전 서울시장</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>성추행사건기자회견</span></li>
                    <li><span>택시기사</span></li>
                    <li><span>위력성추행사건</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>동물보호법위반</span></li>
                    <li><span>한국성폭력상담소</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>성추행혐의</span></li>
                    <li><span>폐쇄회로CCTV</span></li>
                    <li><span>주택가흉기</span></li>
                    <li><span>양손흉기</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>부동산</span></div>
                <ol>
                    <li><span>도심공공주택복합사업</span></li>
                    <li><span>새절역두산위브트레지움</span></li>
                    <li><span>센트레빌아스테리움시그니처</span></li>
                    <li><span>증산4구역</span></li>
                    <li><span>힐스테이트DMC역</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>순위청약</span></li>
                    <li><span>SK뷰아이파크포레</span></li>
                    <li><span>6호선</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>서울혁신파크</span></li>
                    <li><span>1순위청약</span></li>
                    <li><span>경의중앙선</span></li>
                    <li><span>청약경쟁</span></li>
                    <li><span>DMC파인시티자이</span></li>
                    <li><span>주민동의</span></li>
                    <li><span>복합사업부지</span></li>
                    <li><span>현대테라타워</span></li>
                    <li><span>정비사업</span></li>
                    <li><span>시세차익</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행사/복리</span></div>
                <ol>
                    <li><span>서울소방기술경연대회</span></li>
                    <li><span>행복공감봉사단발대식</span></li>
                    <li><span>국립한국문학관</span></li>
                    <li><span>서울소방학교</span></li>
                    <li><span>반려동물</span></li>
                    <li><span>자립준비청년</span></li>
                    <li><span>구조전술구급전술</span></li>
                    <li><span>아이맘택시</span></li>
                    <li><span>환경성질환예방사업</span></li>
                    <li><span>단체종목별</span></li>
                    <li><span>화재진압전술</span></li>
                    <li><span>한국환경산업기술원</span></li>
                    <li><span>전세사기피해</span></li>
                    <li><span>은평구신사초등학교</span></li>
                    <li><span>서울혁신파크</span></li>
                    <li><span>봉사활동</span></li>
                    <li><span>논두렁축제</span></li>
                    <li><span>실내환경개선</span></li>
                    <li><span>개인종목</span></li>
                    <li><span>지역아동센터</span></li>
                </ol>
            </div>
            `,
            서대문구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>경찰청국가수사본부</span></li>
                    <li><span>서울서대문구연세대학교</span></li>
                    <li><span>서대문구경찰청앞</span></li>
                    <li><span>기소/재판/구속</span></li>
                    <li><span>서울서부지법형사</span></li>
                    <li><span>행정안전부경찰국신설</span></li>
                    <li><span>민주노총서비스연맹</span></li>
                    <li><span>택배노조</span></li>
                    <li><span>중사사망사건</span></li>
                    <li><span>국회행정안전</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>특검팀</span></li>
                    <li><span>택배노동자</span></li>
                    <li><span>명예훼손혐의</span></li>
                    <li><span>수사권조정</span></li>
                    <li><span>사의표명</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>경찰제도개선문</span></li>
                    <li><span>경찰직장협의회</span></li>
                    <li><span>전동킥보드</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>행사/관광</span></div>
                <ol>
                    <li><span>국립대한민국임시정부기념관</span></li>
                    <li><span>스위스그랜드호텔컨벤션센터</span></li>
                    <li><span>103주년임시정부수립기념식</span></li>
                    <li><span>독도체험관</span></li>
                    <li><span>서대문독립공원</span></li>
                    <li><span>31절기념식</span></li>
                    <li><span>홍제천인공폭포</span></li>
                    <li><span>81회순국선열의날기념식</span></li>
                    <li><span>53회대한민국국가조찬기도회</span></li>
                    <li><span>예술극장</span></li>
                    <li><span>민주평화통일자문회의여성평화회의</span></li>
                    <li><span>캠퍼스타운사업단</span></li>
                    <li><span>국가보훈처</span></li>
                    <li><span>서울형수변감성도시</span></li>
                    <li><span>신촌파랑고래</span></li>
                    <li><span>민주평화통일</span></li>
                    <li><span>독립유공자</span></li>
                    <li><span>문화예술</span></li>
                    <li><span>순국선열추념탑</span></li>
                    <li><span>국제질서</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정/부동산</span></div>
                <ol>
                    <li><span>연세로대중교통전용지구</span></li>
                    <li><span>도심공공주택복합사업</span></li>
                    <li><span>전용지구해제</span></li>
                    <li><span>봉사활동</span></li>
                    <li><span>가족돌봄청년</span></li>
                    <li><span>차량통행</span></li>
                    <li><span>임대차3법</span></li>
                    <li><span>지구지정</span></li>
                    <li><span>선도사업후보지</span></li>
                    <li><span>복합사업부지</span></li>
                    <li><span>공공임대주택</span></li>
                    <li><span>주민동의</span></li>
                    <li><span>경의중앙선</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>복지사각지대발굴</span></li>
                    <li><span>서울형고품질</span></li>
                    <li><span>공공임대상가</span></li>
                    <li><span>디지털튜터</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>청약경쟁</span></li>
                </ol>
            </div>
            `,
            마포구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>기소/재판/구속</span></li>
                    <li><span>군인권센터</span></li>
                    <li><span>서울서부지법형사</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>반부패공공범죄</span></li>
                    <li><span>명예훼손혐의</span></li>
                    <li><span>영장신청</span></li>
                    <li><span>정의기억연대</span></li>
                    <li><span>전동킥보드</span></li>
                    <li><span>영장실질심사</span></li>
                    <li><span>검찰송치</span></li>
                    <li><span>마약범죄수사대</span></li>
                    <li><span>폭행혐의</span></li>
                    <li><span>일본군위안부피해자</span></li>
                    <li><span>도로교통법</span></li>
                    <li><span>가혹행위</span></li>
                    <li><span>특별수사본부</span></li>
                    <li><span>여자친구</span></li>
                    <li><span>폐쇄회로CCTV</span></li>
                    <li><span>혈중알코올농도</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>부동산/지역발전</span></div>
                <ol>
                    <li><span>광역자원회수시설</span></li>
                    <li><span>일성여자중고등학교</span></li>
                    <li><span>학력인정평생학교</span></li>
                    <li><span>넥슨어린이재활병원</span></li>
                    <li><span>임대차3법</span></li>
                    <li><span>빅테크핀테크기업</span></li>
                    <li><span>덕은지구</span></li>
                    <li><span>청년문화공간</span></li>
                    <li><span>전세매물</span></li>
                    <li><span>계약갱신청구권</span></li>
                    <li><span>반려동물</span></li>
                    <li><span>주민설명회</span></li>
                    <li><span>마포더클래시</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>전세보증금</span></li>
                    <li><span>마포래미안푸르지오</span></li>
                    <li><span>2호선</span></li>
                    <li><span>복합화력발전소</span></li>
                    <li><span>서울창업허브</span></li>
                    <li><span>마포쉼터</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행사/축제</span></div>
                <ol>
                    <li><span>문화비축기지</span></li>
                    <li><span>새만금세계스카우트잼버리</span></li>
                    <li><span>서울월드컵경기장</span></li>
                    <li><span>K팝슈퍼라이브콘서트</span></li>
                    <li><span>월드컵공원평화광장</span></li>
                    <li><span>마포구하늘공원</span></li>
                    <li><span>마포구경의선숲길공원</span></li>
                    <li><span>마포구월드컵공원</span></li>
                    <li><span>마포구망원시장</span></li>
                    <li><span>전쟁과여성인권박물관</span></li>
                    <li><span>스마트모빌리티엑스포</span></li>
                    <li><span>마포농수산시장</span></li>
                    <li><span>잼버리폐영식</span></li>
                    <li><span>스카우트대원</span></li>
                    <li><span>서커스카바레</span></li>
                    <li><span>마포나래새우젓축제</span></li>
                    <li><span>홍대레드로드</span></li>
                    <li><span>국회의원축구대회</span></li>
                    <li><span>대한민국과브라질</span></li>
                    <li><span>라트비아축제</span></li>
                </ol>
            </div>
            `,
            양천구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>아동학대치사</span></li>
                    <li><span>기소/재판/구속</span></li>
                    <li><span>정인이사건</span></li>
                    <li><span>가상자산범죄합동수사</span></li>
                    <li><span>살해혐의</span></li>
                    <li><span>아동보호전문기관</span></li>
                    <li><span>구속기소</span></li>
                    <li><span>아동학대방지</span></li>
                    <li><span>아동복지법위반</span></li>
                    <li><span>담임교사</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>초등학교교사</span></li>
                    <li><span>공직선거법위반</span></li>
                    <li><span>국립과학수사</span></li>
                    <li><span>초등학교</span></li>
                    <li><span>복부손상</span></li>
                    <li><span>부모와형</span></li>
                    <li><span>교권보호</span></li>
                    <li><span>전세사기피해자</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>부동산</span></div>
                <ol>
                    <li><span>적정성검토</span></li>
                    <li><span>전세보증금</span></li>
                    <li><span>목동신시가지아파트</span></li>
                    <li><span>재건축사업</span></li>
                    <li><span>안전진단통과</span></li>
                    <li><span>재건축추진</span></li>
                    <li><span>1,2차정밀안전진단</span></li>
                    <li><span>조건부재건축판정</span></li>
                    <li><span>재건축규제완화</span></li>
                    <li><span>전세사기피해</span></li>
                    <li><span>임대차3법</span></li>
                    <li><span>신속통합기획</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>정비사업</span></li>
                    <li><span>정비업체</span></li>
                    <li><span>최종통과</span></li>
                    <li><span>VL르웨스트</span></li>
                    <li><span>전세계약</span></li>
                    <li><span>신월시영아파트</span></li>
                    <li><span>한국건설기술연구원</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정/행사</span></div>
                <ol>
                    <li><span>대심도빗물저류배수시설</span></li>
                    <li><span>공항소음피해대책지역</span></li>
                    <li><span>신트리공원</span></li>
                    <li><span>해누리타운</span></li>
                    <li><span>예술인센터</span></li>
                    <li><span>목동파리공원</span></li>
                    <li><span>행복한백화점</span></li>
                    <li><span>자연드림목동파리공원점</span></li>
                    <li><span>동네단골시장</span></li>
                    <li><span>한국방송기자클럽초청토론회</span></li>
                    <li><span>도시농업공원</span></li>
                    <li><span>스마트횡단보도</span></li>
                    <li><span>소비자기후행동</span></li>
                    <li><span>상습침수지역</span></li>
                    <li><span>디지털전환</span></li>
                    <li><span>디지털튜터</span></li>
                    <li><span>도심속가을걷이</span></li>
                    <li><span>집중호우대비</span></li>
                    <li><span>도시농업박람회</span></li>
                    <li><span>지구의날</span></li>
                </ol>
            </div>
            `,
            강서구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>지역발전/지원</span></div>
                <ol>
                    <li><span>김포공항국내선</span></li>
                    <li><span>마곡LG사이언스파크</span></li>
                    <li><span>전세사기피해지원센터</span></li>
                    <li><span>김포골드라인</span></li>
                    <li><span>LG아트센터</span></li>
                    <li><span>국제공항국내선청사</span></li>
                    <li><span>한국건강관리협회</span></li>
                    <li><span>5호선</span></li>
                    <li><span>5호선연장사업</span></li>
                    <li><span>김포비즈니스항공센터</span></li>
                    <li><span>김포공항국제선</span></li>
                    <li><span>9호선</span></li>
                    <li><span>모바일운전면허증</span></li>
                    <li><span>서울서부지부</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>전세사기피해자</span></li>
                    <li><span>독감예방접종</span></li>
                    <li><span>청년희망</span></li>
                    <li><span>전세사기</span></li>
                    <li><span>서진학교</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>전세사기/사건사고</span></div>
                <ol>
                    <li><span>기소/재판/구속</span></li>
                    <li><span>서울남부지법형사</span></li>
                    <li><span>전세사기</span></li>
                    <li><span>전세보증금</span></li>
                    <li><span>살해혐의</span></li>
                    <li><span>전세사기피해</span></li>
                    <li><span>빌라왕</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>구속기소</span></li>
                    <li><span>경찰관계자</span></li>
                    <li><span>전세사기피해자</span></li>
                    <li><span>불법도박장개설</span></li>
                    <li><span>공무상비밀</span></li>
                    <li><span>가혹행위</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>경찰조사</span></li>
                    <li><span>영장신청</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>전세계약</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>부동산</span></div>
                <ol>
                    <li><span>생활형숙박시설</span></li>
                    <li><span>롯데캐스르웨스트에비뉴</span></li>
                    <li><span>지하층지상</span></li>
                    <li><span>전세보증금</span></li>
                    <li><span>전세사기</span></li>
                    <li><span>9호선</span></li>
                    <li><span>도심공공주택복합</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>5호선</span></li>
                    <li><span>빌라왕</span></li>
                    <li><span>배후수요</span></li>
                    <li><span>전세사기피해</span></li>
                    <li><span>도심복합사업</span></li>
                    <li><span>전세계약</span></li>
                    <li><span>전세사기의심</span></li>
                    <li><span>신혼희망타운</span></li>
                    <li><span>청약경쟁</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>김포한강</span></li>
                </ol>
            </div>
            `,
            구로구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>기소/구속/재판</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>경찰관계자</span></li>
                    <li><span>영장신청</span></li>
                    <li><span>범죄피해자안전조치</span></li>
                    <li><span>서울남부지법형사</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>전동킥보드</span></li>
                    <li><span>폭행혐의</span></li>
                    <li><span>현행범으로체포</span></li>
                    <li><span>경찰조사</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>경찰에신고</span></li>
                    <li><span>폐쇄회로CCTV</span></li>
                    <li><span>40대여성</span></li>
                    <li><span>버스기사</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>스토킹처벌법</span></li>
                    <li><span>중국국적</span></li>
                    <li><span>스마트워치</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>문화/발전/복지</span></div>
                <ol>
                    <li><span>디큐브아트센터</span></li>
                    <li><span>구로구고척스카이</span></li>
                    <li><span>롤드컵</span></li>
                    <li><span>서울구로디지털산업단지</span></li>
                    <li><span>뮤지컬빌리엘리어트</span></li>
                    <li><span>글로벌창업사관학교</span></li>
                    <li><span>리그오브레전드</span></li>
                    <li><span>서울아트책보고</span></li>
                    <li><span>구로구가족센터</span></li>
                    <li><span>한국시리즈</span></li>
                    <li><span>2022대한민국드론UAM박람회</span></li>
                    <li><span>발달장애인</span></li>
                    <li><span>장애인복지</span></li>
                    <li><span>디큐브시트</span></li>
                    <li><span>모두의화장실</span></li>
                    <li><span>G밸리산업박물관</span></li>
                    <li><span>노란색횡단보도</span></li>
                    <li><span>복지시설</span></li>
                    <li><span>빌리아일리시</span></li>
                    <li><span>킬러규제혁파</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>부동산</span></div>
                <ol>
                    <li><span>공공지원민간임대주택</span></li>
                    <li><span>지하층지상</span></li>
                    <li><span>구로차량기지이전사업</span></li>
                    <li><span>모아엘가트레뷰</span></li>
                    <li><span>1호선</span></li>
                    <li><span>구로차량기지광명이전</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>주거용오피스텔</span></li>
                    <li><span>고척아이파크</span></li>
                    <li><span>7호선</span></li>
                    <li><span>소규모주택정비</span></li>
                    <li><span>편의시설</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>민간임대아파트</span></li>
                    <li><span>생활인프라</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>호반써밋</span></li>
                    <li><span>신혼부부</span></li>
                    <li><span>1순위청약</span></li>
                    <li><span>배후수요</span></li>
                </ol>
            </div>
            `,
            금천구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>서울남부지법형사</span></li>
                    <li><span>기소/재판/구속</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>경찰조사</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>소화약제누출사고</span></li>
                    <li><span>경찰관계자</span></li>
                    <li><span>구속전피의자심문</span></li>
                    <li><span>지식사업센터신축공사현장</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>살해혐의</span></li>
                    <li><span>데이트폭력</span></li>
                    <li><span>폐쇄회로CCTV</span></li>
                    <li><span>국립과학수사</span></li>
                    <li><span>영장실질심사</span></li>
                    <li><span>전동킥보드</span></li>
                    <li><span>범행동기</span></li>
                    <li><span>상가지하주차장</span></li>
                    <li><span>피해여성</span></li>
                    <li><span>동료교사</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>에너지/복지</span></div>
                <ol>
                    <li><span>금천구가산디지털단지</span></li>
                    <li><span>에너지스테이션</span></li>
                    <li><span>태양광연료전지등분산에너지활성화</span></li>
                    <li><span>지역아동센터</span></li>
                    <li><span>SK박미주유소</span></li>
                    <li><span>주민참여예산</span></li>
                    <li><span>금천50플러스센터</span></li>
                    <li><span>봉사활동</span></li>
                    <li><span>지역사회</span></li>
                    <li><span>전기차충전</span></li>
                    <li><span>기업특화망</span></li>
                    <li><span>전기생산</span></li>
                    <li><span>충전소</span></li>
                    <li><span>서비스제공</span></li>
                    <li><span>스마트레이더</span></li>
                    <li><span>친환경전기</span></li>
                    <li><span>금천일자리주식회사</span></li>
                    <li><span>머핀포인트</span></li>
                    <li><span>다양한사회공헌활동</span></li>
                    <li><span>충전에사용</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>부동산</span></div>
                <ol>
                    <li><span>서울가산디지털산업단지</span></li>
                    <li><span>지하층지상</span></li>
                    <li><span>반도아이비밸리</span></li>
                    <li><span>소규모주택정비사업</span></li>
                    <li><span>서부간선도로남부순환도로</span></li>
                    <li><span>가산어반워크</span></li>
                    <li><span>7호선</span></li>
                    <li><span>서부간선도로지하</span></li>
                    <li><span>반도건설</span></li>
                    <li><span>특화설계</span></li>
                    <li><span>1호선</span></li>
                    <li><span>교통여건</span></li>
                    <li><span>선도사업후보지</span></li>
                    <li><span>지하화사업</span></li>
                    <li><span>남서울럭키</span></li>
                    <li><span>가산모비우스타워</span></li>
                    <li><span>업무시설</span></li>
                    <li><span>현대테라타워</span></li>
                    <li><span>도시정비사업</span></li>
                    <li><span>신안산선</span></li>
                </ol>
            </div>
            `,
            영등포구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>기소/입건/고발</span></li>
                    <li><span>민주노총공공운수노조</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>민주노총건설노조</span></li>
                    <li><span>살해혐의</span></li>
                    <li><span>전국보건의료사업노동조합</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>현행범체포</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>공무집행방해</span></li>
                    <li><span>폭행혐의</span></li>
                    <li><span>폐쇄회로CCTV</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>영장실질심사</span></li>
                    <li><span>명예훼손혐의</span></li>
                    <li><span>택배노조</span></li>
                    <li><span>허위사실</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>중국동포</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>부동산</span></div>
                <ol>
                    <li><span>공공주택복합사업</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>청약경쟁</span></li>
                    <li><span>주거용오피스텔</span></li>
                    <li><span>영등포쪽방촌</span></li>
                    <li><span>자이디그니트</span></li>
                    <li><span>임대차3법</span></li>
                    <li><span>평균경쟁</span></li>
                    <li><span>1순위청약</span></li>
                    <li><span>정비사업</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>9호선</span></li>
                    <li><span>쪽방주민</span></li>
                    <li><span>배후수요</span></li>
                    <li><span>신속통합기획</span></li>
                    <li><span>1인가구</span></li>
                    <li><span>순위청약</span></li>
                    <li><span>신길AK푸르지오</span></li>
                    <li><span>공공임대주택</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>센터/행사</span></div>
                <ol>
                    <li><span>더현대서울</span></li>
                    <li><span>영등포구여의도한강</span></li>
                    <li><span>타임스퀘어</span></li>
                    <li><span>64컨벤션센터</span></li>
                    <li><span>63아트</span></li>
                    <li><span>독도체험관</span></li>
                    <li><span>여의도공원문화의마당</span></li>
                    <li><span>서울세계불꽃축제</span></li>
                    <li><span>한강공원물빛광장</span></li>
                    <li><span>백화점중최대규모</span></li>
                    <li><span>여의도봄꽃축제</span></li>
                    <li><span>공군특수비행팀</span></li>
                    <li><span>여의도벚꽃길</span></li>
                    <li><span>동북아역사재단</span></li>
                    <li><span>맥스달튼</span></li>
                    <li><span>발명의날</span></li>
                    <li><span>갤럭시Z폴드</span></li>
                    <li><span>신세계백화점타임스퀘어</span></li>
                    <li><span>팝업스토어운영</span></li>
                    <li><span>63아트전망대</span></li>
                </ol>
            </div>
            `,
            동작구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>국가수호/행사</span></div>
                <ol>
                    <li><span>국립서울현충원</span></li>
                    <li><span>6.25전사자발굴유해합동안장식</span></li>
                    <li><span>한국광복군선열합동봉송식</span></li>
                    <li><span>현충원현충관</span></li>
                    <li><span>원불교소태산기념관</span></li>
                    <li><span>현충일추념식</span></li>
                    <li><span>국방부유해발굴감식단</span></li>
                    <li><span>현충탑분향</span></li>
                    <li><span>제복한복패션쇼</span></li>
                    <li><span>현충원겨레얼마당</span></li>
                    <li><span>보훈의달</span></li>
                    <li><span>국가보훈부</span></li>
                    <li><span>추념식참석</span></li>
                    <li><span>영현봉송</span></li>
                    <li><span>철원인제경기도</span></li>
                    <li><span>호국보훈</span></li>
                    <li><span>국립대전현충원</span></li>
                    <li><span>방명록작성</span></li>
                    <li><span>여단급부대</span></li>
                    <li><span>625전쟁격전지</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>태풍/사건사고</span></div>
                <ol>
                    <li><span>구속영장</span></li>
                    <li><span>남성사계시장</span></li>
                    <li><span>서울중앙지법형사</span></li>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>기소/재판</span></li>
                    <li><span>중부지방</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>태풍</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>30대여성</span></li>
                    <li><span>철도경찰</span></li>
                    <li><span>영장실질심사</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>아들살해</span></li>
                    <li><span>반지하주택</span></li>
                    <li><span>쿠팡이츠</span></li>
                    <li><span>경찰조사</span></li>
                    <li><span>복구작업</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>원전오염수/발전</span></div>
                <ol>
                    <li><span>서울동작구노량진수산시장</span></li>
                    <li><span>원전오염수방류</span></li>
                    <li><span>일본후쿠시마원전오염수</span></li>
                    <li><span>일본정부후쿠시마</span></li>
                    <li><span>서울아이발달지원센터</span></li>
                    <li><span>노량진수산시장한산한모습</span></li>
                    <li><span>스마트슈퍼</span></li>
                    <li><span>서울여성플라자</span></li>
                    <li><span>오염수해양방류</span></li>
                    <li><span>해양방류계획</span></li>
                    <li><span>방류임박</span></li>
                    <li><span>1원자력발전소</span></li>
                    <li><span>수협중앙</span></li>
                    <li><span>운동본부발대식</span></li>
                    <li><span>일본산수산물</span></li>
                    <li><span>청년정책네트워크</span></li>
                    <li><span>방사능검사</span></li>
                    <li><span>노량진수산시장장인</span></li>
                    <li><span>방사능오염수</span></li>
                    <li><span>무인운영</span></li>
                </ol>
            </div>
            `,
            관악구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>흉기난동/범죄</span></div>
                <ol>
                    <li><span>기소/재판/구속</span></li>
                    <li><span>서울중앙지법형사</span></li>
                    <li><span>흉기난동사건</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>경찰관계자</span></li>
                    <li><span>구속전피의자심문</span></li>
                    <li><span>살인예고글</span></li>
                    <li><span>사건발생</span></li>
                    <li><span>서울관악구신림역</span></li>
                    <li><span>영장신청</span></li>
                    <li><span>폐쇄회로CCTV</span></li>
                    <li><span>흉기난동</span></li>
                    <li><span>경찰조사</span></li>
                    <li><span>범행동기</span></li>
                    <li><span>영장실질심사</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>무기징역</span></li>
                    <li><span>피의자심문영장</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>지역발전/행정</span></div>
                <ol>
                    <li><span>주사랑공동체교회</span></li>
                    <li><span>관악S밸리</span></li>
                    <li><span>난방비지원점검</span></li>
                    <li><span>골목상권활성화</span></li>
                    <li><span>낙성벤처창업센터</span></li>
                    <li><span>여성안심귀갓길</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>반도체공동연구소</span></li>
                    <li><span>출생신고</span></li>
                    <li><span>별빛신사리상권</span></li>
                    <li><span>1인가구</span></li>
                    <li><span>배터리공동연구센터</span></li>
                    <li><span>관악강감찬축제</span></li>
                    <li><span>벤처창업기업</span></li>
                    <li><span>육성촉진기구</span></li>
                    <li><span>별빛신사리상권르네상스</span></li>
                    <li><span>벤처기업육성촉진</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>공중케이블정비</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>부동산</span></div>
                <ol>
                    <li><span>힐스테이트관악</span></li>
                    <li><span>벤처타운역</span></li>
                    <li><span>지하층지상</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>순위청약</span></li>
                    <li><span>2호선</span></li>
                    <li><span>경전철신림선</span></li>
                    <li><span>공공재건축</span></li>
                    <li><span>부동산원청약홈</span></li>
                    <li><span>청약경쟁</span></li>
                    <li><span>1순위청약</span></li>
                    <li><span>전세보증금</span></li>
                    <li><span>신혼희망타운</span></li>
                    <li><span>신림뉴타운</span></li>
                    <li><span>집마련</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>청약진행/span></li>
                    <li><span>상승폭</span></li>
                    <li><span>신혼부부</span></li>
                    <li><span>관악중앙하이츠포레</span></li>
                </ol>
            </div>
            `,
            서초구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>서울중앙지방법원/경찰청</span></li>
                    <li><span>공판출석</span></li>
                    <li><span>기소/재판/고발</span></li>
                    <li><span>서울중앙지법형사</span></li>
                    <li><span>구속전피의자심문</span></li>
                    <li><span>택시기사폭행</span></li>
                    <li><span>로비특혜의혹관련</span></li>
                    <li><span>영장실질검사</span></li>
                    <li><span>속행공판</span></li>
                    <li><span>공직선거법위반혐의</span></li>
                    <li><span>서이초등학교</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>폭행혐의</span></li>
                    <li><span>허위사실</span></li>
                    <li><span>자녀입시비리</span></li>
                    <li><span>범죄가중처벌</span></li>
                    <li><span>음주측정거부</span></li>
                    <li><span>블랙박스영상</span></li>
                    <li><span>성남도시개발공사기획</span></li>
                    <li><span>초등학교교사</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>문화/행사</span></div>
                <ol>
                    <li><span>예술의전당</span></li>
                    <li><span>서초구aT센터</span></li>
                    <li><span>매헌윤봉길의사기념관</span></li>
                    <li><span>JW메리어트호텔</span></li>
                    <li><span>서초구반포한강</span></li>
                    <li><span>국립국악원</span></li>
                    <li><span>서초구세빛섬플로팅아일랜드</span></li>
                    <li><span>2023귀농귀촌청년창업박람회</span></li>
                    <li><span>서울서초구국립중앙도서관</span></li>
                    <li><span>예술의전당CJ토월극장</span></li>
                    <li><span>K-라이스벨트농업농업장관회의</span></li>
                    <li><span>예술의전당콘서트홀</span></li>
                    <li><span>예술의전당한가람미술관</span></li>
                    <li><span>예술의전당오페라홀</span></li>
                    <li><span>청년정책점검회의</span></li>
                    <li><span>청년창업박람회</span></li>
                    <li><span>농협공동주최</span></li>
                    <li><span>예술의전당자유소극장</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>예술의전당IBK챔버홀</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>부동산</span></div>
                <ol>
                    <li><span>래미안원베일리</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>실거래가공개시스템</span></li>
                    <li><span>아크로리버파크</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>임대차3법</span></li>
                    <li><span>재건축사업</span></li>
                    <li><span>시세차익</span></li>
                    <li><span>정비업계</span></li>
                    <li><span>도시첨단물류단지</span></li>
                    <li><span>토지임대부</span></li>
                    <li><span>전세계약</span></li>
                    <li><span>주택공급</span></li>
                    <li><span>커뮤니티시설</span></li>
                    <li><span>정비사업</span></li>
                    <li><span>청약경쟁</span></li>
                    <li><span>상승폭</span></li>
                    <li><span>재건축단지</span></li>
                    <li><span>2호선</span></li>
                    <li><span>전세보증금</span></li>
                </ol>
            </div>
            `,
            강남구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>코엑스/문화행사</span></div>
                <ol>
                    <li><span>서울강남구코엑스</span></li>
                    <li><span>한국과학기술정보통신부</span></li>
                    <li><span>인터컨티넨탈서울코엑스</span></li>
                    <li><span>현대백화점무역센터점</span></li>
                    <li><span>과학기술회관</span></li>
                    <li><span>이번박람회/전시회</span></li>
                    <li><span>코엑스개막</span></li>
                    <li><span>조선팰리스서울강남</span></li>
                    <li><span>일상비일상의틈</span></li>
                    <li><span>날기념식</span></li>
                    <li><span>정보통신부장관</span></li>
                    <li><span>서울강남구현대백화점</span></li>
                    <li><span>파이브가이즈</span></li>
                    <li><span>복합문화공간</span></li>
                    <li><span>국내최대규모</span></li>
                    <li><span>갤러리아백화점</span></li>
                    <li><span>무역의날</span></li>
                    <li><span>LG에너지솔루션</span></li>
                    <li><span>월드IT쇼</span></li>
                    <li><span>프렌차이즈창업박람회</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>마약범죄</span></div>
                <ol>
                    <li><span>기소/재판/구속</span></li>
                    <li><span>서울중앙지법</span></li>
                    <li><span>경찰관계자</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>마약투약혐의</span></li>
                    <li><span>마약류관리법</span></li>
                    <li><span>간이시약</span></li>
                    <li><span>프로포폴투약</span></li>
                    <li><span>벌금형선고</span></li>
                    <li><span>양형이유</span></li>
                    <li><span>구속기소</span></li>
                    <li><span>약식명령</span></li>
                    <li><span>정식재판</span></li>
                    <li><span>향정신성의약품</span></li>
                    <li><span>무죄선고</span></li>
                    <li><span>상습투약</span></li>
                    <li><span>법정구속</span></li>
                    <li><span>결심공판</span></li>
                    <li><span>징역형의집행유예</span></li>
                    <li><span>면허취소수준</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>부동산</span></div>
                <ol>
                    <li><span>실거래가공개시스템</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>서울아파트값</span></li>
                    <li><span>상승폭</span></li>
                    <li><span>규제지역</span></li>
                    <li><span>임대차3법</span></li>
                    <li><span>시세차익</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>아파트매매가격</span></li>
                    <li><span>규제완화</span></li>
                    <li><span>재건축사업</span></li>
                    <li><span>조합설립</span></li>
                    <li><span>대출규제</span></li>
                    <li><span>주택공급</span></li>
                    <li><span>하락폭</span></li>
                    <li><span>재건축단지</span></li>
                    <li><span>집마련</span></li>
                    <li><span>전세계약</span></li>
                    <li><span>금리인상</span></li>
                    <li><span>전세보증금</span></li>
                </ol>
            </div>
            `,
            송파구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>위치추적전자장치전자발찌</span></li>
                    <li><span>기소/재판/구속</span></li>
                    <li><span>영장실질심사</span></li>
                    <li><span>송파구쿠팡본사앞</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>배달의민족</span></li>
                    <li><span>펜싱국가대표</span></li>
                    <li><span>전자발찌훼손</span></li>
                    <li><span>자유북한운동연합</span></li>
                    <li><span>살해혐의</span></li>
                    <li><span>우아한형제</span></li>
                    <li><span>쿠팡이츠</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>재혼상대</span></li>
                    <li><span>신변보호</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>범행동기</span></li>
                    <li><span>폭행혐의</span></li>
                    <li><span>특정경제범죄</span></li>
                    <li><span>여자친구</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>롯데월드/올림픽공원</span></div>
                <ol>
                    <li><span>서울송파구롯데월드</span></li>
                    <li><span>서울스카이전망대</span></li>
                    <li><span>올림픽공원체조경기장</span></li>
                    <li><span>정기전국대의원대회</span></li>
                    <li><span>SK올림픽핸드볼경기장</span></li>
                    <li><span>송파구롯데월드어드벤처</span></li>
                    <li><span>올림픽공원평화의광장</span></li>
                    <li><span>잠실종합운동장</span></li>
                    <li><span>올림픽공원들꽃마루</span></li>
                    <li><span>청년의날</span></li>
                    <li><span>서울합동연설회</span></li>
                    <li><span>서울스카이브릿지</span></li>
                    <li><span>어린이날축제</span></li>
                    <li><span>롯데월드아쿠아리움</span></li>
                    <li><span>미디어아트특별전</span></li>
                    <li><span>잠실실내체육관</span></li>
                    <li><span>평화의문</span></li>
                    <li><span>놀이기구</span></li>
                    <li><span>태양의서커스</span></li>
                    <li><span>포켓몬플레이존</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>부동산</span></div>
                <ol>
                    <li><span>서울스카이전망대</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>서울아파트값</span></li>
                    <li><span>실거래가공개시스템</span></li>
                    <li><span>서울송파구롯데월드</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>임대차3법</span></li>
                    <li><span>하락폭</span></li>
                    <li><span>현대테라타워</span></li>
                    <li><span>리모델링사업</span></li>
                    <li><span>서울아파트매매</span></li>
                    <li><span>전세매물</span></li>
                    <li><span>상승폭</span></li>
                    <li><span>금리인상</span></li>
                    <li><span>재건축사업</span></li>
                    <li><span>규제지역</span></li>
                    <li><span>전세계약</span></li>
                    <li><span>아파트매매가격</span></li>
                    <li><span>신혼희망타운</span></li>
                    <li><span>도시정비사업</span></li>
                </ol>
            </div>
            `,
            강동구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>재건축/청약/분양</span></div>
                <ol>
                    <li><span>올림픽파크포레온둔촌</span></li>
                    <li><span>둔촌주공재건축사업</span></li>
                    <li><span>시공사업단</span></li>
                    <li><span>순위청약</span></li>
                    <li><span>고덕강일지구</span></li>
                    <li><span>현대산업개발대우건설롯데</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>공사중단</span></li>
                    <li><span>둔촌주공아파트</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>중도금대출</span></li>
                    <li><span>조합집행부</span></li>
                    <li><span>일반분양물량</span></li>
                    <li><span>청약경쟁</span></li>
                    <li><span>조합시공</span></li>
                    <li><span>공사재개</span></li>
                    <li><span>단군이래최대</span></li>
                    <li><span>강일어반브릿지</span></li>
                    <li><span>정비업계</span></li>
                    <li><span>부동산원청약</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>사건사고/범죄</span></div>
                <ol>
                    <li><span>택배노조</span></li>
                    <li><span>택시기사</span></li>
                    <li><span>택배기사</span></li>
                    <li><span>재판/기소</span></li>
                    <li><span>택배차량</span></li>
                    <li><span>응급환자</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>접촉사고</span></li>
                    <li><span>택배노동자</span></li>
                    <li><span>사설구급차</span></li>
                    <li><span>경찰관계자</span></li>
                    <li><span>동부지법형사</span></li>
                    <li><span>흉기점화용토치</span></li>
                    <li><span>영장신청</span></li>
                    <li><span>지하주차장</span></li>
                    <li><span>데이트폭력</span></li>
                    <li><span>택배사</span></li>
                    <li><span>횡령혐의</span></li>
                    <li><span>경찰조사</span></li>
                    <li><span>저상차량</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>지역발전/행정</span></div>
                <ol>
                    <li><span>투자협력</span></li>
                    <li><span>국가철도망구축계획</span></li>
                    <li><span>암사종합시장</span></li>
                    <li><span>9호선</span></li>
                    <li><span>반려견순찰대</span></li>
                    <li><span>협약체결</span></li>
                    <li><span>비상경제민생</span></li>
                    <li><span>강동아트센터</span></li>
                    <li><span>현대EV스테이션</span></li>
                    <li><span>불법주정차차량</span></li>
                    <li><span>5호선</span></li>
                    <li><span>협력MOU체결</span></li>
                    <li><span>전기자전거</span></li>
                    <li><span>연장사업</span></li>
                    <li><span>서비스제공</span></li>
                    <li><span>기본계획수립용역</span></li>
                    <li><span>4단계연장사업</span></li>
                    <li><span>왕숙신도시</span></li>
                    <li><span>남양주왕숙</span></li>
                    <li><span>선연장사업</span></li>
                </ol>
            </div>
            `,
        },
        busan: {
            중구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>지역활성화</span></div>
                <ol>
                    <li><span>부산롯데백화점광복점</span></li>
                    <li><span>롯데타워건립</span></li>
                    <li><span>부산시청터</span></li>
                    <li><span>보수동책방골목</span></li>
                    <li><span>부산국제영화제</span></li>
                    <li><span>임시사용승인기간</span></li>
                    <li><span>가덕신공항</span></li>
                    <li><span>부산국제단편영화제</span></li>
                    <li><span>아쿠아몰엔터테인먼트</span></li>
                    <li><span>부두창고</span></li>
                    <li><span>규모건립</span></li>
                    <li><span>북항재개발사업</span></li>
                    <li><span>부산근현대역사관</span></li>
                    <li><span>부산오션시티푸르지오</span></li>
                    <li><span>롯데타워공사</span></li>
                    <li><span>BIFF광장</span></li>
                    <li><span>청년작당소</span></li>
                    <li><span>헌책방골목</span></li>
                    <li><span>부산비엔날레개막</span></li>
                    <li><span>창고마련</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
                <ol>
                    <li><span>모 의원</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>20세기파조직원</span></li>
                    <li><span>후배조직원</span></li>
                    <li><span>강제추행</span></li>
                    <li><span>폭력조직</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>벽돌더미</span></li>
                    <li><span>프로야구선수출신</span></li>
                    <li><span>타워크레인</span></li>
                    <li><span>강풍주의보</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>영화친구</span></li>
                    <li><span>안전조치</span></li>
                    <li><span>정치자금법위반</span></li>
                    <li><span>놀이기구</span></li>
                    <li><span>조직원시비</span></li>
                    <li><span>칠성파</span></li>
                    <li><span>특수재물손괴</span></li>
                    <li><span>특수상해혐의</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정</span></div>
                <ol>
                    <li><span>인당평균총급여액</span></li>
                    <li><span>출생아수</span></li>
                    <li><span>원전오염수</span></li>
                    <li><span>염수해양방류</span></li>
                    <li><span>부산세계박람회유치</span></li>
                    <li><span>청소년과의원</span></li>
                    <li><span>점심시간휴무</span></li>
                    <li><span>교육국제화</span></li>
                    <li><span>수산물품질관리원</span></li>
                    <li><span>점심시간</span></li>
                    <li><span>평균출산연령</span></li>
                    <li><span>일본정부</span></li>
                    <li><span>팬스타그룹</span></li>
                    <li><span>일본후쿠시마원전</span></li>
                    <li><span>특구지정</span></li>
                    <li><span>후쿠시마오염수</span></li>
                    <li><span>40대초반</span></li>
                    <li><span>30대초반</span></li>
                    <li><span>수산물시료</span></li>
                    <li><span>고향사랑기부제</span></li>
                </ol>
            </div>
            `,
            서구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>태풍</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>재산피해</span></li>
                    <li><span>부산대병원노조</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>60대여성</span></li>
                    <li><span>카눈북상</span></li>
                    <li><span>안전조치</span></li>
                    <li><span>이진종합건설</span></li>
                    <li><span>복구작업</span></li>
                    <li><span>여자친구</span></li>
                    <li><span>방화시도</span></li>
                    <li><span>특혜의혹</span></li>
                    <li><span>도로교통법</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>진베이시티사업</span></li>
                    <li><span>붕괴사고</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>수산물/행정</span></div>
                <ol>
                    <li><span>부산공동어시장</span></li>
                    <li><span>대형선망어선</span></li>
                    <li><span>지방소멸대응기금</span></li>
                    <li><span>노후주택개선</span></li>
                    <li><span>평생학습도시</span></li>
                    <li><span>염수방류</span></li>
                    <li><span>뜰마을사업</span></li>
                    <li><span>원전오염수</span></li>
                    <li><span>협력형노후</span></li>
                    <li><span>만선의꿈</span></li>
                    <li><span>국내고등어어획량</span></li>
                    <li><span>인구감소지역</span></li>
                    <li><span>주택개선사업</span></li>
                    <li><span>침적쓰레기</span></li>
                    <li><span>선단이제주</span></li>
                    <li><span>소외계층</span></li>
                    <li><span>구덕문화공원</span></li>
                    <li><span>고래고기</span></li>
                    <li><span>소멸위험지역</span></li>
                    <li><span>아동친화도시</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>문화/지역활성화</span></div>
                <ol>
                    <li><span>알로이시오</span></li>
                    <li><span>포스코이앤</span></li>
                    <li><span>신문그리니티</span></li>
                    <li><span>신문1지구</span></li>
                    <li><span>고신대복음</span></li>
                    <li><span>비석문화마을</span></li>
                    <li><span>비석마을피란민주거지</span></li>
                    <li><span>도시정비사업</span></li>
                    <li><span>의료관광특구</span></li>
                    <li><span>자유아동극장</span></li>
                    <li><span>김해관광유통단지</span></li>
                    <li><span>피란생활박물관</span></li>
                    <li><span>송도용궁</span></li>
                    <li><span>오션더퍼스트</span></li>
                    <li><span>부민2구역</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>롯데워터파크</span></li>
                    <li><span>스테이트이진베이</span></li>
                    <li><span>장유여객터미널</span></li>
                    <li><span>도시재생</span></li>
                </ol>
            </div>
            `,
            동구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>지하차도침수</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>초량지하차도</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>과실치사상</span></li>
                    <li><span>호우경보</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>2차폭발</span></li>
                    <li><span>태풍힌남노</span></li>
                    <li><span>북상중</span></li>
                    <li><span>성폭행혐의</span></li>
                    <li><span>동구한목욕탕</span></li>
                    <li><span>허위공문서작성</span></li>
                    <li><span>부산항5부두</span></li>
                    <li><span>동구청공무원</span></li>
                    <li><span>직무유기혐의</span></li>
                    <li><span>경보발효</span></li>
                    <li><span>폭우침수</span></li>
                    <li><span>상습침수지역</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>행정</span></div>
                <ol>
                    <li><span>부산항국제전시컨벤션센터</span></li>
                    <li><span>염수해양방류</span></li>
                    <li><span>일본정부</span></li>
                    <li><span>원전오염수</span></li>
                    <li><span>인구감소지역</span></li>
                    <li><span>방사능오염수</span></li>
                    <li><span>특화형비자</span></li>
                    <li><span>일본총영사관</span></li>
                    <li><span>평화의소녀</span></li>
                    <li><span>부산세계박람회유치</span></li>
                    <li><span>핵오염수</span></li>
                    <li><span>국제박람회기구</span></li>
                    <li><span>염수방류</span></li>
                    <li><span>청년마을</span></li>
                    <li><span>BIE실사단</span></li>
                    <li><span>부산엑스포유치</span></li>
                    <li><span>외국인유학</span></li>
                    <li><span>후쿠시마오염수</span></li>
                    <li><span>염수방류결정</span></li>
                    <li><span>소멸대응기금</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>지역발전</span></div>
                <ol>
                    <li><span>생활형숙박시설</span></li>
                    <li><span>북항재개발</span></li>
                    <li><span>롯데캐슬드메</span></li>
                    <li><span>위브더제니스</span></li>
                    <li><span>SK에코플랜트</span></li>
                    <li><span>1호선</span></li>
                    <li><span>가덕신공항</span></li>
                    <li><span>부산주요교통거점</span></li>
                    <li><span>북항2단계</span></li>
                    <li><span>부산패션비즈센터</span></li>
                    <li><span>부산엑스포유치</span></li>
                    <li><span>도시정비사업</span></li>
                    <li><span>BIE실사단</span></li>
                    <li><span>재개발1단계</span></li>
                    <li><span>도심항공교통</span></li>
                    <li><span>거점연결</span></li>
                    <li><span>혼합현실</span></li>
                    <li><span>리마크빌부산역</span></li>
                    <li><span>2단계사업</span></li>
                    <li><span>엑스포유지</span></li>
                </ol>
            </div>
            `,
            영도구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>안전속도</span></li>
                    <li><span>제한속도</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>하역작업</span></li>
                    <li><span>30대여성</span></li>
                    <li><span>태풍</span></li>
                    <li><span>안전조치</span></li>
                    <li><span>도로교통법</span></li>
                    <li><span>너울성파도</span></li>
                    <li><span>속도5030정책</span></li>
                    <li><span>원통형화물</span></li>
                    <li><span>과실치사상</span></li>
                    <li><span>보행자교통사고사망자</span></li>
                    <li><span>건설기계관리법위반</span></li>
                    <li><span>대형화물</span></li>
                    <li><span>어린이보호구역스쿨존</span></li>
                    <li><span>어린이보호구역</span></li>
                    <li><span>방호울타리</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>해양산업/행정</span></div>
                <ol>
                    <li><span>국립해양박물관</span></li>
                    <li><span>디지털관광주민증</span></li>
                    <li><span>한국해양수산개발원</span></li>
                    <li><span>한국해양과학기술원</span></li>
                    <li><span>단정운영역량경연대회</span></li>
                    <li><span>한국해양대학교</span></li>
                    <li><span>복지등기우편서비스</span></li>
                    <li><span>지방소멸대응기금</span></li>
                    <li><span>인구감소</span></li>
                    <li><span>해양수산분야일자리창출</span></li>
                    <li><span>생존수영교육</span></li>
                    <li><span>연구기관일자리</span></li>
                    <li><span>희망곳간</span></li>
                    <li><span>가족돌봄청년</span></li>
                    <li><span>일상돌봄서비스</span></li>
                    <li><span>위기가구</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>소멸위기지역</span></li>
                    <li><span>안전속도</span></li>
                    <li><span>관광두레사업</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>지역활성화</span></div>
                <ol>
                    <li><span>HJ중공업</span></li>
                    <li><span>문화도시</span></li>
                    <li><span>복합문화공간</span></li>
                    <li><span>오션시티푸르지오</span></li>
                    <li><span>여울문화마을</span></li>
                    <li><span>동남권물류센터</span></li>
                    <li><span>체험휴양마을</span></li>
                    <li><span>영도다리축제</span></li>
                    <li><span>명예복직퇴직</span></li>
                    <li><span>청학우성스마트시티</span></li>
                    <li><span>도시재생</span></li>
                    <li><span>워케이션</span></li>
                    <li><span>동삼혁신도시</span></li>
                    <li><span>동삼2구역</span></li>
                    <li><span>도시조성사업</span></li>
                    <li><span>생활숙박시설</span></li>
                    <li><span>마을형관광지</span></li>
                    <li><span>도시재생뉴딜사업</span></li>
                    <li><span>지역특화재생</span></li>
                    <li><span>재개발사업</span></li>
                </ol>
            </div>
            `,
            부산진구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>강간살인미수혐의</span></li>
                    <li><span>부산돌려차기</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>폭행혐의</span></li>
                    <li><span>전세사기피해</span></li>
                    <li><span>20대여성</span></li>
                    <li><span>강풍주의보</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>호우경보</span></li>
                    <li><span>주의보발효</span></li>
                    <li><span>현행범체포</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>차별폭행</span></li>
                    <li><span>오피스텔공동현관</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>범행동기</span></li>
                    <li><span>폭행혐의</span></li>
                    <li><span>전세보증금</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>부동산/지역개발</span></div>
                <ol>
                    <li><span>도심공공주택복합사업</span></li>
                    <li><span>부산시민공원</span></li>
                    <li><span>양정포레힐즈스위첸</span></li>
                    <li><span>스테일서면해링턴</span></li>
                    <li><span>중흥S클래스</span></li>
                    <li><span>전포3구역</span></li>
                    <li><span>도심복합사업</span></li>
                    <li><span>2호선</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>양정자이더샵</span></li>
                    <li><span>1호선</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>규제지역</span></li>
                    <li><span>증산4구역</span></li>
                    <li><span>동서고가도로</span></li>
                    <li><span>선도사업후보지</span></li>
                    <li><span>정비사업</span></li>
                    <li><span>전포카페거리</span></li>
                    <li><span>에코델타시티</span></li>
                    <li><span>아파트값</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정</span></div>
                <ol>
                    <li><span>부산세계박람회유치</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>방사선환경영향평가서</span></li>
                    <li><span>부전도서관</span></li>
                    <li><span>상수도사업본부</span></li>
                    <li><span>고리2호기</span></li>
                    <li><span>15분도시</span></li>
                    <li><span>학교복합시설</span></li>
                    <li><span>평생학습도시</span></li>
                    <li><span>행복교육지구</span></li>
                    <li><span>뜰마을사업</span></li>
                    <li><span>지역아동센터</span></li>
                    <li><span>부산형통합</span></li>
                    <li><span>한국수력원자력</span></li>
                    <li><span>원전오염수</span></li>
                    <li><span>의료급여사업</span></li>
                    <li><span>유충발견</span></li>
                    <li><span>반려동물</span></li>
                    <li><span>도서관공공개발</span></li>
                    <li><span>수돗물유충</span></li>
                </ol>
            </div>
            `,
            동래구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>지역특성화/지역개발</span></div>
                <ol>
                    <li><span>충렬사안락서원교육회관</span></li>
                    <li><span>래미안포레스티지</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>소규모주택정비사업</span></li>
                    <li><span>1호선온천장역</span></li>
                    <li><span>방학전통문화체험</span></li>
                    <li><span>온천4구역</span></li>
                    <li><span>전통문화체험교실</span></li>
                    <li><span>1호선</span></li>
                    <li><span>구역재개발</span></li>
                    <li><span>안락스위첸</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>도시정비사업</span></li>
                    <li><span>교육환경</span></li>
                    <li><span>주거용오피스텔</span></li>
                    <li><span>래미안원베일리</span></li>
                    <li><span>다도예절</span></li>
                    <li><span>4호선</span></li>
                    <li><span>전통서당체험</span></li>
                    <li><span>지방광역시</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
                <ol>
                    <li><span>아영이사건</span></li>
                    <li><span>병원신생아실</span></li>
                    <li><span>의식불명</span></li>
                    <li><span>아동복지법위반</span></li>
                    <li><span>아동복지법</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>업무상과실치상</span></li>
                    <li><span>구속기소</span></li>
                    <li><span>두개골골절</span></li>
                    <li><span>학대의심</span></li>
                    <li><span>신생아학대</span></li>
                    <li><span>무호흡증세</span></li>
                    <li><span>학대정황</span></li>
                    <li><span>학대정황</span></li>
                    <li><span>과실치사상학대</span></li>
                    <li><span>혐의구속</span></li>
                    <li><span>전동킥보드</span></li>
                    <li><span>간호사징역</span></li>
                    <li><span>학대혐의</span></li>
                    <li><span>의료법위반혐의</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정/복지</span></div>
                <ol>
                    <li><span>원자력안전교부세</span></li>
                    <li><span>장난감도서관</span></li>
                    <li><span>동백택시</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>형제복지원</span></li>
                    <li><span>119안전체험관</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>도서관설치지원</span></li>
                    <li><span>전국원전동맹</span></li>
                    <li><span>케어서비스</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>사회공헌사업</span></li>
                    <li><span>기가지니</span></li>
                    <li><span>고향사랑기부금</span></li>
                    <li><span>부산세계박람회유치</span></li>
                    <li><span>이동문화정착</span></li>
                    <li><span>KT텔레캅</span></li>
                    <li><span>반려동물</span></li>
                    <li><span>스마트팜</span></li>
                    <li><span>주민서명운동</span></li>
                </ol>
            </div>
            `,
            남구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>안보/사건사고</span></div>
                <ol>
                    <li><span>해군작전사령부</span></li>
                    <li><span>공공운수노조화물연대</span></li>
                    <li><span>부산작전기지</span></li>
                    <li><span>핵추진탄도유도탄잠수함</span></li>
                    <li><span>컨테이너</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>핵추진항공모함</span></li>
                    <li><span>급핵추진</span></li>
                    <li><span>항공모함</span></li>
                    <li><span>화물연대총파업</span></li>
                    <li><span>미해군</span></li>
                    <li><span>총파업</span></li>
                    <li><span>안전운임</span></li>
                    <li><span>태풍힌남노</span></li>
                    <li><span>태풍하이선</span></li>
                    <li><span>화물연대부산지역</span></li>
                    <li><span>운임제일몰제</span></li>
                    <li><span>군사기지</span></li>
                    <li><span>집단운송거부</span></li>
                    <li><span>대형화물차</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>유엔추모/행정</span></div>
                <ol>
                    <li><span>유엔기념공원</span></li>
                    <li><span>유엔참천용사국제추모식</span></li>
                    <li><span>유엔의날기념식</span></li>
                    <li><span>공군특수비행팀</span></li>
                    <li><span>유엔평화기념관</span></li>
                    <li><span>턴투워드</span></li>
                    <li><span>튀르키예</span></li>
                    <li><span>유엔군전몰용사</span></li>
                    <li><span>추모의날</span></li>
                    <li><span>BIE실사단</span></li>
                    <li><span>국제박람회기구</span></li>
                    <li><span>묘역참배</span></li>
                    <li><span>참전의날</span></li>
                    <li><span>유엔군참전용사</span></li>
                    <li><span>캐나다참전용사</span></li>
                    <li><span>유엔군위령탑</span></li>
                    <li><span>공공배달앱</span></li>
                    <li><span>공원안장</span></li>
                    <li><span>정전협정</span></li>
                    <li><span>부산세계박람회유치</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>지역발전</span></div>
                <ol>
                    <li><span>두산위브더제니스</span></li>
                    <li><span>제니스오션시티</span></li>
                    <li><span>2호선</span></li>
                    <li><span>대연8구역</span></li>
                    <li><span>대연디아이엘</span></li>
                    <li><span>신흥주거타운</span></li>
                    <li><span>정비사업</span></li>
                    <li><span>푸르지오써밋</span></li>
                    <li><span>주택재개발정비사업</span></li>
                    <li><span>부경대</span></li>
                    <li><span>우룡산공원</span></li>
                    <li><span>우암2구역</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>용호별빛공원</span></li>
                    <li><span>규모조성</span></li>
                    <li><span>교육국제화</span></li>
                    <li><span>2구역재개발사업</span></li>
                    <li><span>북항재개발사업</span></li>
                    <li><span>도시정비사업</span></li>
                    <li><span>스테이트대연센트럴</span></li>
                </ol>
            </div>
            `,
            북구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>인명피해</span></li>
                    <li><span>50대부부</span></li>
                    <li><span>형제복지원</span></li>
                    <li><span>공직선거법위반</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>전동킥보드</span></li>
                    <li><span>살인혐의</span></li>
                    <li><span>무기징역</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>의사흉기</span></li>
                    <li><span>덕천지하상가</span></li>
                    <li><span>피해여성</span></li>
                    <li><span>범행동기</span></li>
                    <li><span>피해자부부</span></li>
                    <li><span>낙동강변살인</span></li>
                    <li><span>교권보호</span></li>
                    <li><span>임세원법</span></li>
                    <li><span>특수상해혐의</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>부동산/지역발전</span></div>
                <ol>
                    <li><span>한화포레나부산</span></li>
                    <li><span>화명생태공원</span></li>
                    <li><span>동물친화도시</span></li>
                    <li><span>SK에코플랜트</span></li>
                    <li><span>3호선</span></li>
                    <li><span>2호선</span></li>
                    <li><span>만덕터널</span></li>
                    <li><span>대연디아이엘</span></li>
                    <li><span>구포맥주</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>지역특성</span></li>
                    <li><span>명지국제신도시</span></li>
                    <li><span>구포시장</span></li>
                    <li><span>구포만세</span></li>
                    <li><span>구포개시장</span></li>
                    <li><span>수제맥주</span></li>
                    <li><span>1호선</span></li>
                    <li><span>문화예술교육</span></li>
                    <li><span>구포왜성</span></li>
                    <li><span>덕천동함박봉로</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정</span></div>
                <ol>
                    <li><span>역사문화환경보존</span></li>
                    <li><span>공동점포</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>형제복지원</span></li>
                    <li><span>보행자우선도로</span></li>
                    <li><span>대한민국독서대전</span></li>
                    <li><span>장애인복지관</span></li>
                    <li><span>사회복지관</span></li>
                    <li><span>부산뇌병변장애</span></li>
                    <li><span>현금성복지</span></li>
                    <li><span>지역사회통합</span></li>
                    <li><span>종합사회복지</span></li>
                    <li><span>홈씨씨교실</span></li>
                    <li><span>일본정부</span></li>
                    <li><span>오염수해양방류</span></li>
                    <li><span>노후준비지원</span></li>
                    <li><span>독서의달</span></li>
                    <li><span>점포개점</span></li>
                    <li><span>식신e식권</span></li>
                    <li><span>자원화사업</span></li>
                </ol>
            </div>
            `,
            해운대구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>문화/행사</span></div>
                <ol>
                    <li><span>영화의전당</span></li>
                    <li><span>부산국제영화제</span></li>
                    <li><span>부산국제모토쇼</span></li>
                    <li><span>국제조선해양</span></li>
                    <li><span>벡스코오디토리</span></li>
                    <li><span>해운대해수욕장</span></li>
                    <li><span>기후산업국제박람회</span></li>
                    <li><span>부산울산경남</span></li>
                    <li><span>국내최대게임</span></li>
                    <li><span>드론쇼코리아</span></li>
                    <li><span>송정해수욕장</span></li>
                    <li><span>국제영화제개막식</span></li>
                    <li><span>캠핑카쇼</span></li>
                    <li><span>이번박람회</span></li>
                    <li><span>부산세계박람회유치</span></li>
                    <li><span>부산시립미술관</span></li>
                    <li><span>시민관광객</span></li>
                    <li><span>다양한드론</span></li>
                    <li><span>국제박람회기구</span></li>
                    <li><span>유엔군참전</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
                <ol>
                    <li><span>태풍</span></li>
                    <li><span>추돌사고</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>마린시티</span></li>
                    <li><span>북상중</span></li>
                    <li><span>도로교통법</span></li>
                    <li><span>강제추행혐의</span></li>
                    <li><span>재산피해</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>전동킥보드</span></li>
                    <li><span>가중처벌</span></li>
                    <li><span>부정청약</span></li>
                    <li><span>초등학교앞</span></li>
                    <li><span>선의피해자</span></li>
                    <li><span>민식이법</span></li>
                    <li><span>음주운전금지규정</span></li>
                    <li><span>특정범죄가중</span></li>
                    <li><span>60대여성</span></li>
                    <li><span>횡단보도</span></li>
                    <li><span>승용차운전자</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>부동산/지역개발</span></div>
                <ol>
                    <li><span>생활형숙박시설</span></li>
                    <li><span>시그니엘부산</span></li>
                    <li><span>위브더제니스</span></li>
                    <li><span>신세계센텀센트레빌</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>규제지역</span></li>
                    <li><span>센텀2지구</span></li>
                    <li><span>해운대중동스위첸</span></li>
                    <li><span>주거형오피스텔</span></li>
                    <li><span>조정대상지역지정</span></li>
                    <li><span>주거용오피스텔</span></li>
                    <li><span>롯데캐슬드메</span></li>
                    <li><span>도시정비사업</span></li>
                    <li><span>우동3구역</span></li>
                    <li><span>마린시티</span></li>
                    <li><span>영화의전당</span></li>
                    <li><span>가덕신공항</span></li>
                    <li><span>정비사업</span></li>
                    <li><span>시그니처</span></li>
                </ol>
            </div>
            `,
            사하구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>태풍마이삭</span></li>
                    <li><span>강제추행</span></li>
                    <li><span>시의원</span></li>
                    <li><span>신체접촉</span></li>
                    <li><span>전자발찌</span></li>
                    <li><span>기초의원</span></li>
                    <li><span>60대여성</span></li>
                    <li><span>긴급대피</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>창문테이프</span></li>
                    <li><span>대포해수욕장</span></li>
                    <li><span>공장불</span></li>
                    <li><span>유리파편</span></li>
                    <li><span>중학교3학년</span></li>
                    <li><span>업무추진비</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>정전피해</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>지역발전/부동산</span></div>
                <ol>
                    <li><span>위브더제니스센트럴</span></li>
                    <li><span>공공지원민간임대주택</span></li>
                    <li><span>1호선</span></li>
                    <li><span>SK에코플랜트</span></li>
                    <li><span>에코델타시티</span></li>
                    <li><span>하단롯데캐슬</span></li>
                    <li><span>미분양관리지역</span></li>
                    <li><span>괴정6구역</span></li>
                    <li><span>펜타플렉스</span></li>
                    <li><span>스트리트형상가</span></li>
                    <li><span>주택정비사업</span></li>
                    <li><span>자생한방병원</span></li>
                    <li><span>감천문화마을</span></li>
                    <li><span>자율주택정비</span></li>
                    <li><span>플렉스메트로</span></li>
                    <li><span>하단녹산선</span></li>
                    <li><span>사상하단선</span></li>
                    <li><span>도시정비사업</span></li>
                    <li><span>힐스에비뉴사하역</span></li>
                    <li><span>힐스테이트</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정</span></div>
                <ol>
                    <li><span>을숙도생태공원</span></li>
                    <li><span>산림문화자산</span></li>
                    <li><span>장애인기능경기대회</span></li>
                    <li><span>BIE실사단</span></li>
                    <li><span>국제박람회기구</span></li>
                    <li><span>방사능오염수</span></li>
                    <li><span>공항특별법</span></li>
                    <li><span>대구경북신공항</span></li>
                    <li><span>일본후쿠시마원전방사능</span></li>
                    <li><span>스마트팜</span></li>
                    <li><span>일본정부</span></li>
                    <li><span>염수방류결정</span></li>
                    <li><span>횡단보도</span></li>
                    <li><span>해상시위</span></li>
                    <li><span>미래교육지구</span></li>
                    <li><span>염수방류</span></li>
                    <li><span>여성친화도시</span></li>
                    <li><span>부산세계박람회유치</span></li>
                    <li><span>가덕신공항</span></li>
                    <li><span>지역아동센터</span></li>
                </ol>
            </div>
            `,
            부산구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>강간살인미수혐의</span></li>
                    <li><span>부산돌려차기</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>폭행혐의</span></li>
                    <li><span>전세사기피해</span></li>
                    <li><span>20대여성</span></li>
                    <li><span>강풍주의보</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>호우경보</span></li>
                    <li><span>주의보발효</span></li>
                    <li><span>현행범체포</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>차별폭행</span></li>
                    <li><span>오피스텔공동현관</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>범행동기</span></li>
                    <li><span>폭행혐의</span></li>
                    <li><span>전세보증금</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>부동산/지역개발</span></div>
                <ol>
                    <li><span>도심공공주택복합사업</span></li>
                    <li><span>부산시민공원</span></li>
                    <li><span>양정포레힐즈스위첸</span></li>
                    <li><span>스테일서면해링턴</span></li>
                    <li><span>중흥S클래스</span></li>
                    <li><span>전포3구역</span></li>
                    <li><span>도심복합사업</span></li>
                    <li><span>2호선</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>양정자이더샵</span></li>
                    <li><span>1호선</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>규제지역</span></li>
                    <li><span>증산4구역</span></li>
                    <li><span>동서고가도로</span></li>
                    <li><span>선도사업후보지</span></li>
                    <li><span>정비사업</span></li>
                    <li><span>전포카페거리</span></li>
                    <li><span>에코델타시티</span></li>
                    <li><span>아파트값</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정</span></div>
                <ol>
                    <li><span>부산세계박람회유치</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>방사선환경영향평가서</span></li>
                    <li><span>부전도서관</span></li>
                    <li><span>상수도사업본부</span></li>
                    <li><span>고리2호기</span></li>
                    <li><span>15분도시</span></li>
                    <li><span>학교복합시설</span></li>
                    <li><span>평생학습도시</span></li>
                    <li><span>행복교육지구</span></li>
                    <li><span>뜰마을사업</span></li>
                    <li><span>지역아동센터</span></li>
                    <li><span>부산형통합</span></li>
                    <li><span>한국수력원자력</span></li>
                    <li><span>원전오염수</span></li>
                    <li><span>의료급여사업</span></li>
                    <li><span>유충발견</span></li>
                    <li><span>반려동물</span></li>
                    <li><span>도서관공공개발</span></li>
                    <li><span>수돗물유충</span></li>
                </ol>
            </div>
            `,
            기장군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>산업/지역활성화</span></div>
                <ol>
                    <li><span>동남권방사선의과학산업단지</span></li>
                    <li><span>오시리아관광단지</span></li>
                    <li><span>동남권원자력의학원</span></li>
                    <li><span>한국야구명예의전당</span></li>
                    <li><span>빛물꿈교육행복타운</span></li>
                    <li><span>롯데월드어드벤부산</span></li>
                    <li><span>동남권산단</span></li>
                    <li><span>빌라쥬드아난</span></li>
                    <li><span>신형연구</span></li>
                    <li><span>일광신도시</span></li>
                    <li><span>원전해체연구소</span></li>
                    <li><span>중입자가속기</span></li>
                    <li><span>방사선의과대학</span></li>
                    <li><span>부경대</span></li>
                    <li><span>도시철도기장선</span></li>
                    <li><span>도심융합</span></li>
                    <li><span>스마트양식클러스터</span></li>
                    <li><span>부산과학관</span></li>
                    <li><span>정관신도시</span></li>
                    <li><span>문화예술타운</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
                <ol>
                    <li><span>태풍하이선</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>아동학대치사</span></li>
                    <li><span>구속입건</span></li>
                    <li><span>차량바다</span></li>
                    <li><span>생후8일</span></li>
                    <li><span>40대여성</span></li>
                    <li><span>업무추진비</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>바다추락</span></li>
                    <li><span>형제복지원</span></li>
                    <li><span>김씨부부</span></li>
                    <li><span>차량추락사고</span></li>
                    <li><span>2월생후</span></li>
                    <li><span>본인딸</span></li>
                    <li><span>복구작업</span></li>
                    <li><span>시신암매장</span></li>
                    <li><span>영아시신</span></li>
                    <li><span>40대친모</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>원전/행정</span></div>
                <ol>
                    <li><span>고리원전</span></li>
                    <li><span>한국수력원자력</span></li>
                    <li><span>방사선환경영향평가서</span></li>
                    <li><span>고준위방사성폐기물</span></li>
                    <li><span>원자력안전</span></li>
                    <li><span>사용후핵연료건식저장</span></li>
                    <li><span>최종해체계획서</span></li>
                    <li><span>일본정부</span></li>
                    <li><span>원전오염수</span></li>
                    <li><span>저장시설건설</span></li>
                    <li><span>치유의숲</span></li>
                    <li><span>오염수해양방류</span></li>
                    <li><span>원자력안전법</span></li>
                    <li><span>원자력발전소</span></li>
                    <li><span>수산과학원</span></li>
                    <li><span>임시저장시설</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>초등돌봄교실</span></li>
                    <li><span>1호기해체</span></li>
                    <li><span>저장시설포화</span></li>
                </ol>
            </div>
            `,
            금정구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>시신훼손</span></li>
                    <li><span>시신유기</span></li>
                    <li><span>살해뒤</span></li>
                    <li><span>유기혐의</span></li>
                    <li><span>여행용가방</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>여성살해</span></li>
                    <li><span>택시기사</span></li>
                    <li><span>20대여성</span></li>
                    <li><span>또래여성</span></li>
                    <li><span>시신일부</span></li>
                    <li><span>범행동기</span></li>
                    <li><span>흉기살해</span></li>
                    <li><span>피해자집</span></li>
                    <li><span>훼손유기</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>피해자살해</span></li>
                    <li><span>숲속</span></li>
                    <li><span>낙동강변풀숲</span></li>
                    <li><span>산불발생</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>부동산/지역발전</span></div>
                <ol>
                    <li><span>양산금호리첸시아</span></li>
                    <li><span>사송더샵데시앙</span></li>
                    <li><span>서금사재정비</span></li>
                    <li><span>재정비촉진구역</span></li>
                    <li><span>수자인에코시티</span></li>
                    <li><span>도시정비사업</span></li>
                    <li><span>1호선</span></li>
                    <li><span>시공권확보</span></li>
                    <li><span>시공사선정</span></li>
                    <li><span>소규모주택정비사업</span></li>
                    <li><span>청령동오펠리</span></li>
                    <li><span>종합버스터미널</span></li>
                    <li><span>재건축정비사업</span></li>
                    <li><span>집마련</span></li>
                    <li><span>부곡2구역</span></li>
                    <li><span>사송신도시</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>요가의날</span></li>
                    <li><span>불광5구역</span></li>
                    <li><span>호반써밋</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정</span></div>
                <ol>
                    <li><span>원자력안전교부신설</span></li>
                    <li><span>자립준비청년</span></li>
                    <li><span>전국원전동맹</span></li>
                    <li><span>지방소멸대응기금</span></li>
                    <li><span>부산공공의료</span></li>
                    <li><span>영락공원</span></li>
                    <li><span>커피방문</span></li>
                    <li><span>공공병원</span></li>
                    <li><span>인구감소지역</span></li>
                    <li><span>아동양육시설</span></li>
                    <li><span>음식물쓰레기</span></li>
                    <li><span>학교밖청소년</span></li>
                    <li><span>의류제조소공</span></li>
                    <li><span>금샘도서관</span></li>
                    <li><span>지역아동센터</span></li>
                    <li><span>여성공무원비율</span></li>
                    <li><span>방사선비상계획구역</span></li>
                    <li><span>워케이션</span></li>
                    <li><span>여성관리자비율</span></li>
                    <li><span>보험자병원</span></li>
                </ol>
            </div>
            `,
            강서구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>지역발전</span></div>
                <ol>
                    <li><span>에코델타시티</span></li>
                    <li><span>명지국제신도시</span></li>
                    <li><span>가덕신공항</span></li>
                    <li><span>김해신공항</span></li>
                    <li><span>가덕도대항전망대</span></li>
                    <li><span>에코델타스마트시티</span></li>
                    <li><span>국제사업물류도시</span></li>
                    <li><span>에코델타센터</span></li>
                    <li><span>SK에코플랜트</span></li>
                    <li><span>반도아이비플래닛</span></li>
                    <li><span>명지듀클래스</span></li>
                    <li><span>진해경제자육구역청</span></li>
                    <li><span>빌리브명지</span></li>
                    <li><span>대저생태공원</span></li>
                    <li><span>스마트빌리지</span></li>
                    <li><span>주거형오피스텔</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>공항특별법</span></li>
                    <li><span>에코시티한양수자인</span></li>
                    <li><span>김해국제공항</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
                <ol>
                    <li><span>민주노총공공운수노조화물연대</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>쇠구슬</span></li>
                    <li><span>화물연대조합원</span></li>
                    <li><span>안전운임</span></li>
                    <li><span>총파업돌입</span></li>
                    <li><span>화물연대노조원</span></li>
                    <li><span>집단운송거부</span></li>
                    <li><span>공장불</span></li>
                    <li><span>업무개시명령</span></li>
                    <li><span>산후우울증</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>부산신항인근도로</span></li>
                    <li><span>트레일러차량</span></li>
                    <li><span>살인혐의</span></li>
                    <li><span>태풍힌남노</span></li>
                    <li><span>화물연대파업</span></li>
                    <li><span>운임제일몰제</span></li>
                    <li><span>화물차량</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정</span></div>
                <ol>
                    <li><span>청춘드림카지원사업</span></li>
                    <li><span>국회부산도서관</span></li>
                    <li><span>중소중견기업</span></li>
                    <li><span>부산학생안전체험관</span></li>
                    <li><span>동아플레이팅</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>청년SW아카데미</span></li>
                    <li><span>스마트공장구축지원</span></li>
                    <li><span>온라인그로서리</span></li>
                    <li><span>평생학습도시</span></li>
                    <li><span>국회도서관</span></li>
                    <li><span>자원재활용</span></li>
                    <li><span>국제박람회기구</span></li>
                    <li><span>국가관리묘역</span></li>
                    <li><span>BIE실사단</span></li>
                    <li><span>출퇴근시간단축</span></li>
                    <li><span>유기동물보호</span></li>
                    <li><span>수산자원연구소</span></li>
                    <li><span>지역청년</span></li>
                    <li><span>염수방류</span></li>
                </ol>
            </div>
            `,
            연제구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>전 부산시장</span></li>
                    <li><span>강제추행치상혐의</span></li>
                    <li><span>5층주차장</span></li>
                    <li><span>기소</span></li>
                    <li><span>공판출석</span></li>
                    <li><span>중대재해처벌법</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>신호대기중</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>디엘이앤씨</span></li>
                    <li><span>전세사기피해</span></li>
                    <li><span>재산피해</span></li>
                    <li><span>중대재해법</span></li>
                    <li><span>살모넬라균검출</span></li>
                    <li><span>주차장택시</span></li>
                    <li><span>성폭력사건</span></li>
                    <li><span>추락방지시설</span></li>
                    <li><span>경찰관계자</span></li>
                    <li><span>택시기사</span></li>
                    <li><span>도로추락</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>문화/지역개발</span></div>
                <ol>
                    <li><span>부산아시아드주경기장</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>쌍용더플래티넘</span></li>
                    <li><span>가덕신공항</span></li>
                    <li><span>3호선</span></li>
                    <li><span>하늘채엘센트로</span></li>
                    <li><span>쿠팡플레이시리즈</span></li>
                    <li><span>전북현대</span></li>
                    <li><span>파리생제르맹</span></li>
                    <li><span>시장정비사업</span></li>
                    <li><span>황령3터널</span></li>
                    <li><span>거제2구역</span></li>
                    <li><span>1호선</span></li>
                    <li><span>현대산업개발</span></li>
                    <li><span>지방광역시</span></li>
                    <li><span>메가푸드마켓</span></li>
                    <li><span>미라보스위트</span></li>
                    <li><span>에코델타시티</span></li>
                    <li><span>오방맛길</span></li>
                    <li><span>구역재개발</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정/복지</span></div>
                <ol>
                    <li><span>부산아시아드주경기장</span></li>
                    <li><span>부산세계박람회유치</span></li>
                    <li><span>소방훈련최우수</span></li>
                    <li><span>도심테러가정</span></li>
                    <li><span>미19지원사령부</span></li>
                    <li><span>청년창업허브</span></li>
                    <li><span>엑스포유치지원</span></li>
                    <li><span>한미민관군경소방</span></li>
                    <li><span>연합통합방위훈련</span></li>
                    <li><span>평생학습도시</span></li>
                    <li><span>결식우려아동</span></li>
                    <li><span>행복얼라이언스</span></li>
                    <li><span>유치기원</span></li>
                    <li><span>나라키움부산</span></li>
                    <li><span>자치경찰</span></li>
                    <li><span>적십자봉사원</span></li>
                    <li><span>한미합동방위</span></li>
                    <li><span>연합전력</span></li>
                    <li><span>미세먼지차단숲</span></li>
                    <li><span>실제훈련</span></li>
                </ol>
            </div>
            `,
            수영구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>지역활성화</span></div>
                <ol>
                    <li><span>힐스테이트</span></li>
                    <li><span>드론라이트쇼</span></li>
                    <li><span>청약경쟁</span></li>
                    <li><span>광안리M드론</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>남천자이</span></li>
                    <li><span>현대모터스튜디오</span></li>
                    <li><span>규제지역</span></li>
                    <li><span>2호선</span></li>
                    <li><span>복합문화공간</span></li>
                    <li><span>주거형오피스텔</span></li>
                    <li><span>공공디자인페스티벌</span></li>
                    <li><span>부산불꽃축제</span></li>
                    <li><span>조형물설치</span></li>
                    <li><span>미라보스위트</span></li>
                    <li><span>조정대상지역해제</span></li>
                    <li><span>남천2구역</span></li>
                    <li><span>소규모주택정비</span></li>
                    <li><span>국제갤러리</span></li>
                    <li><span>광안리해수욕장일대</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
                <ol>
                    <li><span>태풍</span></li>
                    <li><span>민락수변공원</span></li>
                    <li><span>팔도시장</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>편법증여의혹</span></li>
                    <li><span>이진종합건설</span></li>
                    <li><span>택시기사</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>빗물저장소</span></li>
                    <li><span>60대여성</span></li>
                    <li><span>공연음란죄</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>야쿠르트전동카트</span></li>
                    <li><span>불법촬영</span></li>
                    <li><span>커피전문점</span></li>
                    <li><span>살인미수혐의</span></li>
                    <li><span>살인혐의</span></li>
                    <li><span>커피주문</span></li>
                    <li><span>할머니손녀</span></li>
                    <li><span>티팬티</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정</span></div>
                <ol>
                    <li><span>민락수변공원</span></li>
                    <li><span>금주구역지정</span></li>
                    <li><span>부산세계박람회유치</span></li>
                    <li><span>엑스포유치</span></li>
                    <li><span>유치기원불꽃쇼</span></li>
                    <li><span>충전용보조배터리</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>드론쇼</span></li>
                    <li><span>공항건설</span></li>
                    <li><span>2030세계박람회엑스포유치</span></li>
                    <li><span>BIE총회</span></li>
                    <li><span>국제박람회기구</span></li>
                    <li><span>수중기지국기반</span></li>
                    <li><span>해양오염탐지센서</span></li>
                    <li><span>BIE실사단</span></li>
                    <li><span>유치응원</span></li>
                    <li><span>엑스포유치기원</span></li>
                    <li><span>대형전광판</span></li>
                    <li><span>해상부이</span></li>
                    <li><span>프랑스파리</span></li>
                </ol>
            </div>
            `,
            사상구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>호우특보/경보/주의보</span></li>
                    <li><span>학장천</span></li>
                    <li><span>정치자금법위반</span></li>
                    <li><span>재산피해</span></li>
                    <li><span>60대여성</span></li>
                    <li><span>공무집행방해</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>백신접종</span></li>
                    <li><span>면허취소수준</span></li>
                    <li><span>수색작업</span></li>
                    <li><span>여성실종</span></li>
                    <li><span>공장불</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>주변산책</span></li>
                    <li><span>낙동강변살인</span></li>
                    <li><span>백양터널</span></li>
                    <li><span>살인사건</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>행정/복지</span></div>
                <ol>
                    <li><span>엄궁농산물도매시장</span></li>
                    <li><span>인당평균총급여액</span></li>
                    <li><span>평생직업교육</span></li>
                    <li><span>자율형공립</span></li>
                    <li><span>형제복지원</span></li>
                    <li><span>기숙형중학교</span></li>
                    <li><span>김장배추</span></li>
                    <li><span>신한금융희망재단</span></li>
                    <li><span>고등직업교육</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>소외계층</span></li>
                    <li><span>외국인주민</span></li>
                    <li><span>기부한수박</span></li>
                    <li><span>지역특화분야</span></li>
                    <li><span>숲체험교육</span></li>
                    <li><span>사랑의김장</span></li>
                    <li><span>배추나눔행사</span></li>
                    <li><span>체험교육관</span></li>
                    <li><span>인구감소지역</span></li>
                    <li><span>드론수색대회</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>지역발전</span></div>
                <ol>
                    <li><span>삼락생태공원</span></li>
                    <li><span>승학터널민간투자사업</span></li>
                    <li><span>양정포레힐즈</span></li>
                    <li><span>낙동강지방정원</span></li>
                    <li><span>사상역경보센트리</span></li>
                    <li><span>가덕신공항</span></li>
                    <li><span>노바인터내쇼</span></li>
                    <li><span>국가정원지정</span></li>
                    <li><span>부산김해경전철</span></li>
                    <li><span>공공전세주택</span></li>
                    <li><span>정원등록</span></li>
                    <li><span>부산세계박람회개최</span></li>
                    <li><span>창업주거복합</span></li>
                    <li><span>도시재생뉴딜사업</span></li>
                    <li><span>재개발정비사업</span></li>
                    <li><span>에코델타시티</span></li>
                    <li><span>터널개통</span></li>
                    <li><span>엄궁대교</span></li>
                    <li><span>민간투자사업실시</span></li>
                    <li><span>임대보증금</span></li>
                </ol>
            </div>
            `,
        },
        daegu: {
            중구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>지역행사/행정</span></div>
                <ol>
                    <li><span>대구퀴어문화축제</span></li>
                    <li><span>대학수학능력시험</span></li>
                    <li><span>일본군위안부피해자</span></li>
                    <li><span>일본군위안부역사관</span></li>
                    <li><span>참사희생자합동분향소</span></li>
                    <li><span>천주교대구대교구청</span></li>
                    <li><span>피해자이용수할머니</span></li>
                    <li><span>따듯한중구</span></li>
                    <li><span>법률사무소방화참사</span></li>
                    <li><span>여성의날</span></li>
                    <li><span>추모의날</span></li>
                    <li><span>불법도로점거</span></li>
                    <li><span>위안부피해자추모</span></li>
                    <li><span>전달연탄</span></li>
                    <li><span>노인복지관</span></li>
                    <li><span>이웃전달</span></li>
                    <li><span>집회신고</span></li>
                    <li><span>지하철화재참사</span></li>
                    <li><span>세계여성의날</span></li>
                    <li><span>공동모금회</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>지역개발</span></div>
                <ol>
                    <li><span>국채보상운동기념공원</span></li>
                    <li><span>주거용오피스텔</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>1호선</span></li>
                    <li><span>동성로SK</span></li>
                    <li><span>3호선</span></li>
                    <li><span>남산동전태일</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>대구동산병원</span></li>
                    <li><span>미분양관리지역</span></li>
                    <li><span>대구권광역철도</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>생활인프라</span></li>
                    <li><span>푸르지오더센트럴</span></li>
                    <li><span>대원칸타빌</span></li>
                    <li><span>청라힐스자이</span></li>
                    <li><span>중앙로역푸르지오</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>전매가능</span></li>
                    <li><span>동성로상권</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>공직선거법위반</span></li>
                    <li><span>보건복지부장관후보</span></li>
                    <li><span>아빠찬스의혹</span></li>
                    <li><span>기소</span></li>
                    <li><span>폭염주의보</span></li>
                    <li><span>살인예고글</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>주의보발효</span></li>
                    <li><span>공직선거법</span></li>
                    <li><span>사고경위</span></li>
                    <li><span>폭염특보</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>지역폭염</span></li>
                    <li><span>선거운동기간</span></li>
                    <li><span>시청압수수색</span></li>
                    <li><span>여름폭염</span></li>
                    <li><span>중앙분리대</span></li>
                    <li><span>택시기사</span></li>
                </ol>
            </div>
            `,
            동구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>부동산/지역개발</span></div>
                <ol>
                    <li><span>통합신공항</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>1호선</span></li>
                    <li><span>주거용오피스텔</span></li>
                    <li><span>규제지역해제</span></li>
                    <li><span>후적지</span></li>
                    <li><span>미분양물량</span></li>
                    <li><span>1순위청약</span></li>
                    <li><span>군공항이전</span></li>
                    <li><span>화성파크드림</span></li>
                    <li><span>청약경쟁</span></li>
                    <li><span>3호선</span></li>
                    <li><span>커뮤니티시설</span></li>
                    <li><span>푸르지오아츠베르</span></li>
                    <li><span>더샵디어엘로</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>교육환경</span></li>
                    <li><span>미분양관리지역</span></li>
                    <li><span>더샵수성라크에르</span></li>
                    <li><span>전매가능</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>문화/행사</span></div>
                <ol>
                    <li><span>국립공원승격</span></li>
                    <li><span>신암선열공원</span></li>
                    <li><span>행정복지센터</span></li>
                    <li><span>아양아트센터</span></li>
                    <li><span>기능경기대회</span></li>
                    <li><span>시민안전테마파크</span></li>
                    <li><span>국립공원지정</span></li>
                    <li><span>오리배</span></li>
                    <li><span>테러종합훈련</span></li>
                    <li><span>아양갤러리</span></li>
                    <li><span>국립공원공단</span></li>
                    <li><span>자유의방패</span></li>
                    <li><span>작품관람</span></li>
                    <li><span>1지방선거</span></li>
                    <li><span>참사18주기</span></li>
                    <li><span>대구지화철화재</span></li>
                    <li><span>사찰음식체험관</span></li>
                    <li><span>국유단</span></li>
                    <li><span>대구지하철참사</span></li>
                    <li><span>동시지방선거</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>영장신청</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>중계한혐의</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>대응1단계</span></li>
                    <li><span>성인무도장</span></li>
                    <li><span>모텔동급생</span></li>
                    <li><span>폭행혐의</span></li>
                    <li><span>옷강제</span></li>
                    <li><span>불법주정차</span></li>
                    <li><span>소방안전본부</span></li>
                    <li><span>성보호</span></li>
                    <li><span>사고경위</span></li>
                    <li><span>폭염주의보</span></li>
                    <li><span>아동청소년</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>무도장불</span></li>
                    <li><span>동구모텔</span></li>
                </ol>
            </div>
            `,
            서구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>재활용공장</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>40대여성</span></li>
                    <li><span>살해혐의</span></li>
                    <li><span>충전소</span></li>
                    <li><span>할머니잔소리</span></li>
                    <li><span>존속살해</span></li>
                    <li><span>동생B군</span></li>
                    <li><span>여성폭행</span></li>
                    <li><span>할머니살해</span></li>
                    <li><span>공직선거법위반</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>공장화재현장</span></li>
                    <li><span>전자장치부착</span></li>
                    <li><span>황산가스</span></li>
                    <li><span>흉기위협</span></li>
                    <li><span>존속살해방조</span></li>
                    <li><span>할머니비명</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>지역행사/정책</span></div>
                <ol>
                    <li><span>서구문화회관</span></li>
                    <li><span>통합신공항</span></li>
                    <li><span>평균총급여액</span></li>
                    <li><span>달성토성마을</span></li>
                    <li><span>김태형모교</span></li>
                    <li><span>행정복지센터</span></li>
                    <li><span>벽화뷔</span></li>
                    <li><span>악취관리지역지정</span></li>
                    <li><span>인구감소지역</span></li>
                    <li><span>뷔벽화거리</span></li>
                    <li><span>1인가구</span></li>
                    <li><span>호국의형제</span></li>
                    <li><span>뷔생일</span></li>
                    <li><span>형제안장식</span></li>
                    <li><span>국립대구박물관</span></li>
                    <li><span>지방소멸대응</span></li>
                    <li><span>소멸대응기금</span></li>
                    <li><span>국립서울현충원</span></li>
                    <li><span>가덕신공항</span></li>
                    <li><span>사랑의향기</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>주거/부동산</span></div>
                <ol>
                    <li><span>주거형오피스텔</span></li>
                    <li><span>서대구역</span></li>
                    <li><span>반도유보라센텀</span></li>
                    <li><span>서대구센트럴</span></li>
                    <li><span>힐스테이트서대구역</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>화성파크드림</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>서대구고속철도역</span></li>
                    <li><span>청약경쟁</span></li>
                    <li><span>대구권광역철도</span></li>
                    <li><span>서대구역세권개발사업</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>통합신공항</span></li>
                    <li><span>생활인프라</span></li>
                    <li><span>조정대상지역해제</span></li>
                    <li><span>전매가능</span></li>
                    <li><span>편의시설</span></li>
                    <li><span>재개발정비사업</span></li>
                    <li><span>두류스타힐스</span></li>
                </ol>
            </div>
            `,
            남구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>주거/부동산</span></div>
                <ol>
                    <li><span>공공주택복합사업</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>도시정비사업</span></li>
                    <li><span>대명자이그랜드시티</span></li>
                    <li><span>주거형오피스텔</span></li>
                    <li><span>푸르지오트레힐즈</span></li>
                    <li><span>선도사업후보지</span></li>
                    <li><span>증산4구역</span></li>
                    <li><span>1호선</span></li>
                    <li><span>생활인프라</span></li>
                    <li><span>복합사업후보지</span></li>
                    <li><span>전포3구역</span></li>
                    <li><span>이문4구역</span></li>
                    <li><span>1순위청약</span></li>
                    <li><span>주민동의</span></li>
                    <li><span>3차선도사업후보지</span></li>
                    <li><span>대구신청사</span></li>
                    <li><span>청약경쟁</span></li>
                    <li><span>주택공급</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>정책</span></div>
                <ol>
                    <li><span>중견언론인모임</span></li>
                    <li><span>릴레이정책토론회</span></li>
                    <li><span>대구아트파크</span></li>
                    <li><span>대구경북</span></li>
                    <li><span>토론회참석</span></li>
                    <li><span>포럼21주최</span></li>
                    <li><span>현안질의</span></li>
                    <li><span>대구FC엔젤클럽</span></li>
                    <li><span>초청토론회</span></li>
                    <li><span>참석질문</span></li>
                    <li><span>기조발언</span></li>
                    <li><span>엔젤클럽태동</span></li>
                    <li><span>엔젤클럽회장</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>지역행사/상생사업</span></div>
                <ol>
                    <li><span>앞산해넘이전망대</span></li>
                    <li><span>한국불교대학</span></li>
                    <li><span>경북여자상업고등학교</span></li>
                    <li><span>대구핼러윈축제</span></li>
                    <li><span>대명동앞산카페</span></li>
                    <li><span>장애인교육</span></li>
                    <li><span>3D프린터제작</span></li>
                    <li><span>졸업앨범</span></li>
                    <li><span>마지막해넘이</span></li>
                    <li><span>압사사고</span></li>
                    <li><span>전격취소</span></li>
                    <li><span>미술실기대회</span></li>
                    <li><span>62회졸업식</span></li>
                    <li><span>2021학년졸업식</span></li>
                    <li><span>봉덕동캠프워커</span></li>
                    <li><span>군견훈련장</span></li>
                    <li><span>미군헌병대</span></li>
                    <li><span>군견시범</span></li>
                    <li><span>연탄나눔행사</span></li>
                </ol>
            </div>
            `,
            북구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>지역행사/지역개발</span></div>
                <ol>
                    <li><span>이슬람사원건립</span></li>
                    <li><span>북구산격동엑스코</span></li>
                    <li><span>사원건립반대</span></li>
                    <li><span>공사중지처분</span></li>
                    <li><span>이슬람사원건축허가</span></li>
                    <li><span>종교의자유</span></li>
                    <li><span>한국로봇산업진흥원</span></li>
                    <li><span>캠핑용품</span></li>
                    <li><span>후적지</span></li>
                    <li><span>국제그린에너지엑스포</span></li>
                    <li><span>대구건축박람회</span></li>
                    <li><span>건축관련기업</span></li>
                    <li><span>캠핑트래블페어</span></li>
                    <li><span>경북농업기술원</span></li>
                    <li><span>매천동수산물시장</span></li>
                    <li><span>방사능검사</span></li>
                    <li><span>공사중단</span></li>
                    <li><span>이슬람사원갈등</span></li>
                    <li><span>베이비&키즈</span></li>
                    <li><span>미술작품</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>공장화재</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>매천동농수산물도매시장화재</span></li>
                    <li><span>자전거공장</span></li>
                    <li><span>대응1단계</span></li>
                    <li><span>운동기구</span></li>
                    <li><span>식품공장</span></li>
                    <li><span>대형화재</span></li>
                    <li><span>흉기위협</span></li>
                    <li><span>도로침수</span></li>
                    <li><span>대나무조각</span></li>
                    <li><span>노래방주인</span></li>
                    <li><span>전동킥보드</span></li>
                    <li><span>프렌차이즈호떡가게</span></li>
                    <li><span>위치추적전자장치</span></li>
                    <li><span>사지마비</span></li>
                    <li><span>산림당국</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>부동산/지역발전</span></div>
                <ol>
                    <li><span>주거형오피스텔</span></li>
                    <li><span>1호선</span></li>
                    <li><span>화성파크드림</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>복합스포츠타운</span></li>
                    <li><span>금호워터폴리스</span></li>
                    <li><span>호반써밋</span></li>
                    <li><span>더샵프리미엘</span></li>
                    <li><span>민간임대아파트</span></li>
                    <li><span>대구오페라스위첸</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>생활편의시설</span></li>
                    <li><span>삼성창조캠퍼스</span></li>
                    <li><span>교육환경</span></li>
                    <li><span>대구권광역철도</span></li>
                    <li><span>생활인프라</span></li>
                    <li><span>동성로상권</span></li>
                    <li><span>푸르지오에듀포레</span></li>
                    <li><span>도보이용</span></li>
                </ol>
            </div>
            `,
            수성구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>지역행사/복지</span></div>
                <ol>
                    <li><span>전국최대두꺼비</span></li>
                    <li><span>새끼두꺼비</span></li>
                    <li><span>일본군위안부피해자</span></li>
                    <li><span>망월지</span></li>
                    <li><span>피해자이용수할머니</span></li>
                    <li><span>범죄피해트라우마통합지원기관</span></li>
                    <li><span>대구스마일센터</span></li>
                    <li><span>행정복지센터</span></li>
                    <li><span>선거사전투표</span></li>
                    <li><span>대이동시작</span></li>
                    <li><span>한국근현대미술</span></li>
                    <li><span>강력범죄피해자</span></li>
                    <li><span>욱수동</span></li>
                    <li><span>일상생활복귀</span></li>
                    <li><span>펜스설치</span></li>
                    <li><span>생태경관보전</span></li>
                    <li><span>위안부문제</span></li>
                    <li><span>자연보호</span></li>
                    <li><span>범어대성당</span></li>
                    <li><span>친선의밤</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
                <ol>
                    <li><span>변호사사무실</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>빌딩2층</span></li>
                    <li><span>방화용의자</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>사무실방화사건</span></li>
                    <li><span>연기흡입</span></li>
                    <li><span>국립과학수사</span></li>
                    <li><span>인화성물질</span></li>
                    <li><span>시청여자핸드볼</span></li>
                    <li><span>긴급대피</span></li>
                    <li><span>여자핸드볼팀</span></li>
                    <li><span>성추행의혹</span></li>
                    <li><span>탄소중독</span></li>
                    <li><span>감독선수</span></li>
                    <li><span>스포츠단훈련</span></li>
                    <li><span>소송패소</span></li>
                    <li><span>개발사업투자금</span></li>
                    <li><span>휘발유구입경로</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>주거/부동산</span></div>
                <ol>
                    <li><span>일반분양</span></li>
                    <li><span>주거형오피스텔</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>3호선</span></li>
                    <li><span>2호선</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>푸르지어더센트럴</span></li>
                    <li><span>위브더제니스</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>범어자이</span></li>
                    <li><span>더샵수성라크에르</span></li>
                    <li><span>커뮤니티시설</span></li>
                    <li><span>생활인프라</span></li>
                    <li><span>더샵수성오클레어</span></li>
                    <li><span>수성더팰리스</span></li>
                    <li><span>우방아이유쉘</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>미분양물량</span></li>
                    <li><span>조정대상지역지정</span></li>
                    <li><span>전매제한</span></li>
                </ol>
            </div>
            `,
            달서구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>섬유공장</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>코나전기차</span></li>
                    <li><span>한국토지주택공사LH대구</span></li>
                    <li><span>화재현장</span></li>
                    <li><span>충전중</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>산불발생</span></li>
                    <li><span>투기의혹</span></li>
                    <li><span>택시회사</span></li>
                    <li><span>공용전기차충전기</span></li>
                    <li><span>방화추정</span></li>
                    <li><span>성당동상가건물</span></li>
                    <li><span>자동차안전</span></li>
                    <li><span>차량파손</span></li>
                    <li><span>합동감식반</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>주거/부동산</span></div>
                <ol>
                    <li><span>힐스테이트감삼센트럴</span></li>
                    <li><span>2호선</span></li>
                    <li><span>서대구역</span></li>
                    <li><span>공공주택복합사업</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>시청신청사</span></li>
                    <li><span>중흥S클래스</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>롯데캐슬센트럴</span></li>
                    <li><span>주거용오피스텔</span></li>
                    <li><span>주거복합단지</span></li>
                    <li><span>해링턴플레이스감삼</span></li>
                    <li><span>최고45층</span></li>
                    <li><span>힐스에비뉴감삼</span></li>
                    <li><span>청약접수</span></li>
                    <li><span>생활인프라</span></li>
                    <li><span>개발호재</span></li>
                    <li><span>대구용산자이</span></li>
                    <li><span>생활편의시설</span></li>
                    <li><span>대우산업개발</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>지역행사/지역개발</span></div>
                <ol>
                    <li><span>사전투표소</span></li>
                    <li><span>행정복지센터</span></li>
                    <li><span>성서노인종합복지</span></li>
                    <li><span>노인문화대학생</span></li>
                    <li><span>동시지방선거</span></li>
                    <li><span>결혼이민자</span></li>
                    <li><span>삼계탕밀키트</span></li>
                    <li><span>초복맞이문화할동</span></li>
                    <li><span>취약계층어르신</span></li>
                    <li><span>역사유적공원</span></li>
                    <li><span>민주운동기념일</span></li>
                    <li><span>독도의날</span></li>
                    <li><span>자원봉사자</span></li>
                    <li><span>자선냄비시종식</span></li>
                    <li><span>연말거리모금</span></li>
                    <li><span>노브랜드버거</span></li>
                    <li><span>시청신청사</span></li>
                    <li><span>원시인조형물</span></li>
                    <li><span>차량방역소독</span></li>
                    <li><span>장애인어르신</span></li>
                </ol>
            </div>
            `,
            달성군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>문화/역사</span></div>
                <ol>
                    <li><span>전 대통령</span></li>
                    <li><span>대통령사저</span></li>
                    <li><span>인혁당사건</span></li>
                    <li><span>대국민메시지</span></li>
                    <li><span>재소자희생사건</span></li>
                    <li><span>민간읜희생자</span></li>
                    <li><span>대통령예방</span></li>
                    <li><span>대통령경호처</span></li>
                    <li><span>희생사건유해발굴</span></li>
                    <li><span>특수상해미수</span></li>
                    <li><span>국립서울현충원</span></li>
                    <li><span>사저입주</span></li>
                    <li><span>전입신고</span></li>
                    <li><span>희생자위령탑</span></li>
                    <li><span>희생자유가족</span></li>
                    <li><span>경북지역형무소</span></li>
                    <li><span>진실화해</span></li>
                    <li><span>부역혐의희생사건</span></li>
                    <li><span>사저인근</span></li>
                    <li><span>일본군위안부피해자</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>지역행사/부동산</span></div>
                <ol>
                    <li><span>행정복지센터</span></li>
                    <li><span>금호어울림센트럴</span></li>
                    <li><span>대구테크노폴리스</span></li>
                    <li><span>테크비즈센터</span></li>
                    <li><span>1순위청약</span></li>
                    <li><span>국립대구과학관</span></li>
                    <li><span>과학의달</span></li>
                    <li><span>마늘밭</span></li>
                    <li><span>마늘수확</span></li>
                    <li><span>지하층지상최고</span></li>
                    <li><span>센트럴줌시티</span></li>
                    <li><span>2호선</span></li>
                    <li><span>경력단절여성</span></li>
                    <li><span>구직활동</span></li>
                    <li><span>사전투표</span></li>
                    <li><span>청약경쟁</span></li>
                    <li><span>생활인프라</span></li>
                    <li><span>고급주거단지</span></li>
                    <li><span>푸르지오브리시엘</span></li>
                    <li><span>대구경북과학기술원</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>산불</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>소방안전본부</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>산불진화헬기</span></li>
                    <li><span>재생의류보관창고</span></li>
                    <li><span>피해규모</span></li>
                    <li><span>대응 1단계</span></li>
                    <li><span>재산피해</span></li>
                    <li><span>건조한날씨</span></li>
                    <li><span>산불방지대책</span></li>
                    <li><span>6호태풍카눈</span></li>
                    <li><span>공장불</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>안전조치</span></li>
                    <li><span>사고발생</span></li>
                </ol>
            </div>
            `,
            군위군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>태풍피해</span></div>
                <ol>
                    <li><span>6호선태풍카눈</span></li>
                    <li><span>강풍호우</span></li>
                    <li><span>제방유실</span></li>
                    <li><span>한반도상륙</span></li>
                    <li><span>카눈하천</span></li>
                    <li><span>태풍피해현장</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>복구작업</span></li>
                    <li><span>마을침수</span></li>
                    <li><span>전동휠체어</span></li>
                    <li><span>심정지상태</span></li>
                    <li><span>소방구조대</span></li>
                    <li><span>고무보트이용</span></li>
                    <li><span>마을수색</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>119특수구조대</span></li>
                    <li><span>경북안전</span></li>
                    <li><span>피해속출</span></li>
                    <li><span>낙농가</span></li>
                    <li><span>침수돼우사</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>공항건설/지역개발</span></div>
                <ol>
                    <li><span>대구경북통합신공항</span></li>
                    <li><span>공항건설사업</span></li>
                    <li><span>대구군공항이전</span></li>
                    <li><span>공항화물터미널</span></li>
                    <li><span>공항특별법</span></li>
                    <li><span>민간공항이전</span></li>
                    <li><span>기부대양여</span></li>
                    <li><span>공항이전사업</span></li>
                    <li><span>공항사업</span></li>
                    <li><span>타당성검토</span></li>
                    <li><span>2030년개항</span></li>
                    <li><span>공동합의문</span></li>
                    <li><span>화물터미널위치</span></li>
                    <li><span>공항개항</span></li>
                    <li><span>통합관제시스템</span></li>
                    <li><span>민간공항건설</span></li>
                    <li><span>화물터미널갈등</span></li>
                    <li><span>군부대통합이전</span></li>
                    <li><span>기회발전</span></li>
                    <li><span>도심항공교통</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>사건사고</span></div>
                <ol>
                    <li><span>고속도로하행선</span></li>
                    <li><span>불로터널인근산사태</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>산사태발생</span></li>
                    <li><span>상주영천고속도로</span></li>
                    <li><span>양방향교통통제</span></li>
                    <li><span>심정지상태</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>복구작업</span></li>
                    <li><span>관계기관</span></li>
                    <li><span>기관합동</span></li>
                    <li><span>6호태풍카눈</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>부계면동산계곡</span></li>
                    <li><span>물소용돌이</span></li>
                    <li><span>미끄럼놀이</span></li>
                    <li><span>탈진상태</span></li>
                    <li><span>사망판정</span></li>
                    <li><span>소방안전본부</span></li>
                </ol>
            </div>
            `,
        },
        incheon: {
            중구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>위험운전치사</span></li>
                    <li><span>중구을왕리해수욕장</span></li>
                    <li><span>살해뒤</span></li>
                    <li><span>노래주점</span></li>
                    <li><span>유기혐의</span></li>
                    <li><span>도로교통법상</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>특정범죄</span></li>
                    <li><span>시신유기</span></li>
                    <li><span>뒤시신</span></li>
                    <li><span>청와대국민청원</span></li>
                    <li><span>살해혐의</span></li>
                    <li><span>50대가장</span></li>
                    <li><span>시신훼손</span></li>
                    <li><span>50대여성</span></li>
                    <li><span>음주운전방조혐의</span></li>
                    <li><span>치사혐의</span></li>
                    <li><span>여행용가방</span></li>
                    <li><span>노래주점업주</span></li>
                    <li><span>사망사고</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>지역활성화</span></div>
                <ol>
                    <li><span>영종국제도시</span></li>
                    <li><span>시티항동마리나</span></li>
                    <li><span>인천내항일원항만</span></li>
                    <li><span>연안여객터미널</span></li>
                    <li><span>인천경제자유구역청</span></li>
                    <li><span>영종하늘도시</span></li>
                    <li><span>주거형오피스텔</span></li>
                    <li><span>인천해양박물관</span></li>
                    <li><span>공공지원민간</span></li>
                    <li><span>송도국제도시</span></li>
                    <li><span>미분양관리지역</span></li>
                    <li><span>스마트오토밸리</span></li>
                    <li><span>스마트관광도시</span></li>
                    <li><span>SK뷰스카이</span></li>
                    <li><span>여객선비욘드</span></li>
                    <li><span>푸르지오더스카이</span></li>
                    <li><span>터미널제주행</span></li>
                    <li><span>인천개항장문화재</span></li>
                    <li><span>항만재개발사업</span></li>
                    <li><span>부두재개발사업</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정/환경보호</span></div>
                <ol>
                    <li><span>5도특별경비단</span></li>
                    <li><span>인천중부지방경찰청</span></li>
                    <li><span>실종자가족지원센터</span></li>
                    <li><span>중구배다리시장</span></li>
                    <li><span>세관특송물류센터</span></li>
                    <li><span>인천본부세관</span></li>
                    <li><span>공항경찰단</span></li>
                    <li><span>수소전기버스</span></li>
                    <li><span>유전자분석제도</span></li>
                    <li><span>후쿠시마오염수</span></li>
                    <li><span>중국어선</span></li>
                    <li><span>염수방류</span></li>
                    <li><span>실종자가족</span></li>
                    <li><span>외곽울타리</span></li>
                    <li><span>전기버스충전</span></li>
                    <li><span>불법조업</span></li>
                    <li><span>장기실종자발견</span></li>
                    <li><span>종합어시장</span></li>
                    <li><span>음식물처리기</span></li>
                    <li><span>피박재자원</span></li>
                </ol>
            </div>
            `,
            동구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>대응단계발령</span></li>
                    <li><span>의원</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>현대시장화재</span></li>
                    <li><span>일반건조물방화</span></li>
                    <li><span>공직선거법위반</span></li>
                    <li><span>기소</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>인천현대</span></li>
                    <li><span>선거법위반혐의</span></li>
                    <li><span>허위사실</span></li>
                    <li><span>그릇가게</span></li>
                    <li><span>경보령</span></li>
                    <li><span>구속기소</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>시장전체점포</span></li>
                    <li><span>가구공장</span></li>
                    <li><span>소형화물차</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>산업/지역활성화</span></div>
                <ol>
                    <li><span>두산위브더센트럴</span></li>
                    <li><span>현대두산인프라코어</span></li>
                    <li><span>SK에코플랜트</span></li>
                    <li><span>두산위브더제니스</span></li>
                    <li><span>1호선</span></li>
                    <li><span>2외곽순환고속도로</span></li>
                    <li><span>광역교통망</span></li>
                    <li><span>스마트건설기술</span></li>
                    <li><span>공공지원민간</span></li>
                    <li><span>재개발정비사업</span></li>
                    <li><span>인천도시산업선교회</span></li>
                    <li><span>정비사업</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>도시정비사업</span></li>
                    <li><span>송림3지구</span></li>
                    <li><span>주택재개발정비</span></li>
                    <li><span>공항건설사업</span></li>
                    <li><span>지원민간임대주택</span></li>
                    <li><span>도시재생뉴딜사업</span></li>
                    <li><span>백령공항건설</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정/복지</span></div>
                <ol>
                    <li><span>인구감소지역</span></li>
                    <li><span>지방소멸대응기금</span></li>
                    <li><span>동인천역북광장</span></li>
                    <li><span>아동보호전문</span></li>
                    <li><span>금주구역</span></li>
                    <li><span>소공인특화지원센터</span></li>
                    <li><span>평생학습도시</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>교육환경개선</span></li>
                    <li><span>동인천민자역사</span></li>
                    <li><span>연료전지발전소</span></li>
                    <li><span>사회공헌사업</span></li>
                    <li><span>관심지역</span></li>
                    <li><span>청년복합공간</span></li>
                    <li><span>아동청소년재단</span></li>
                    <li><span>공유냉장고</span></li>
                    <li><span>승기하수처리장</span></li>
                    <li><span>소외계층</span></li>
                    <li><span>행정체제개편</span></li>
                    <li><span>김장김치</span></li>
                </ol>
            </div>
            `,
            미추홀구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>기소/구속</span></li>
                    <li><span>영잘실질심사</span></li>
                    <li><span>살해혐의</span></li>
                    <li><span>살인혐의</span></li>
                    <li><span>범죄처벌</span></li>
                    <li><span>무기징역</span></li>
                    <li><span>폐쇄회로CCTV</span></li>
                    <li><span>남자친구</span></li>
                    <li><span>50대여성</span></li>
                    <li><span>유기혐의</span></li>
                    <li><span>시신유기</span></li>
                    <li><span>20대여성</span></li>
                    <li><span>성폭행</span></li>
                    <li><span>아동학대범죄</span></li>
                    <li><span>인하대캠퍼스</span></li>
                    <li><span>단과대학건물</span></li>
                    <li><span>범행동기</span></li>
                    <li><span>준강간치사혐의</span></li>
                    <li><span>아동복지법상</span></li>
                    <li><span>딸살해</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>전세사기</span></div>
                <ol>
                    <li><span>전세사기피해자</span></li>
                    <li><span>전세사기</span></li>
                    <li><span>전세보증금</span></li>
                    <li><span>사기피해대책</span></li>
                    <li><span>건축왕</span></li>
                    <li><span>전세피해지원센터</span></li>
                    <li><span>전세계약</span></li>
                    <li><span>전세사기깡통</span></li>
                    <li><span>최우선변제금</span></li>
                    <li><span>범죄단체조직</span></li>
                    <li><span>사기피해주택</span></li>
                    <li><span>단체조직죄</span></li>
                    <li><span>구속기소</span></li>
                    <li><span>경매기일</span></li>
                    <li><span>사기피해자지원</span></li>
                    <li><span>임대아파트</span></li>
                    <li><span>긴급주거지원</span></li>
                    <li><span>피해임차인</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>보증금미반환</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>지역활성화</span></div>
                <ol>
                    <li><span>일반분양</span></li>
                    <li><span>도심공공주택복합</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>1호선</span></li>
                    <li><span>시티오씨엘</span></li>
                    <li><span>SK에코플랜트</span></li>
                    <li><span>숭의역</span></li>
                    <li><span>망상1지구</span></li>
                    <li><span>인천뮤지엄</span></li>
                    <li><span>주거용오피스텔</span></li>
                    <li><span>학익1블록</span></li>
                    <li><span>더샵아르테</span></li>
                    <li><span>주택복합사업</span></li>
                    <li><span>포레나인천</span></li>
                    <li><span>2순환고속도로</span></li>
                    <li><span>정비사업</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>미니신도시급</span></li>
                    <li><span>시민공원역</span></li>
                    <li><span>도시정비사업</span></li>
                </ol>
            </div>
            `,
            연수구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>부동산/지역활성화</span></div>
                <ol>
                    <li><span>송도국제도시</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>송도아크베이</span></li>
                    <li><span>1호선</span></li>
                    <li><span>인천경제자유구역청</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>규제지역</span></li>
                    <li><span>달빛축제공원</span></li>
                    <li><span>대출규제</span></li>
                    <li><span>송도랜드마크시티</span></li>
                    <li><span>주거용오피스텔</span></li>
                    <li><span>펜타포트</span></li>
                    <li><span>호반써밋</span></li>
                    <li><span>배후수요</span></li>
                    <li><span>인천스타트업파크</span></li>
                    <li><span>크리스탈오션</span></li>
                    <li><span>현대프리미엄아울렛</span></li>
                    <li><span>SK뷰</span></li>
                    <li><span>포레나인천</span></li>
                    <li><span>송도센텀하이브</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
                <ol>
                    <li><span>기소</span></li>
                    <li><span>공무원피격사건</span></li>
                    <li><span>출생신고</span></li>
                    <li><span>딸살해</span></li>
                    <li><span>20대장애인딸</span></li>
                    <li><span>병변1급중증장애</span></li>
                    <li><span>살해혐의</span></li>
                    <li><span>복지법위반</span></li>
                    <li><span>선거무효소송</span></li>
                    <li><span>전동킥보드</span></li>
                    <li><span>피해아동</span></li>
                    <li><span>살인혐의</span></li>
                    <li><span>아동복지법상</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>아동학대혐의</span></li>
                    <li><span>발달장애</span></li>
                    <li><span>폭행혐의</span></li>
                    <li><span>도로교통법상</span></li>
                    <li><span>살해뒤</span></li>
                    <li><span>떡볶이김밥</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정/노동</span></div>
                <ol>
                    <li><span>인천신항컨테이너</span></li>
                    <li><span>인천국제해양포럼</span></li>
                    <li><span>선광신컨테이너</span></li>
                    <li><span>공공운수노조화물연대</span></li>
                    <li><span>민주노총공공운수</span></li>
                    <li><span>송도국제도시</span></li>
                    <li><span>세계스카우트잼버리</span></li>
                    <li><span>총파업돌입</span></li>
                    <li><span>정당현수막</span></li>
                    <li><span>안전운임</span></li>
                    <li><span>컨테이너선적작업</span></li>
                    <li><span>안전운임일몰제</span></li>
                    <li><span>컨테이너터미널</span></li>
                    <li><span>클로이서브봇</span></li>
                    <li><span>국제치안산업</span></li>
                    <li><span>집단운송거부</span></li>
                    <li><span>옥외광고물법</span></li>
                    <li><span>도로쇠못</span></li>
                    <li><span>2층전기버스</span></li>
                    <li><span>유네스코학습도시</span></li>
                </ol>
            </div>
            `,
            남동구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>기소</span></li>
                    <li><span>층간소음흉기난동</span></li>
                    <li><span>흉기난동사건</span></li>
                    <li><span>경찰조사</span></li>
                    <li><span>현장이탈</span></li>
                    <li><span>농수로</span></li>
                    <li><span>아동학대범죄</span></li>
                    <li><span>살해혐의</span></li>
                    <li><span>사체유기혐의</span></li>
                    <li><span>전경위</span></li>
                    <li><span>아동복지법상</span></li>
                    <li><span>특례법상아동학대</span></li>
                    <li><span>살해뒤</span></li>
                    <li><span>피해아동</span></li>
                    <li><span>아동학대치사</span></li>
                    <li><span>난동사건당시</span></li>
                    <li><span>살인미수혐의</span></li>
                    <li><span>범행동기</span></li>
                    <li><span>수로유기</span></li>
                    <li><span>직무유기혐의</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>지역발전</span></div>
                <ol>
                    <li><span>소래습지생태공원</span></li>
                    <li><span>포레나인천</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>남동구샤펠드미앙</span></li>
                    <li><span>가천대길병원</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>2호선</span></li>
                    <li><span>1호선</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>소래포구</span></li>
                    <li><span>홈플러스간석점</span></li>
                    <li><span>구월동로데오거리</span></li>
                    <li><span>노선개통</span></li>
                    <li><span>메가푸드마켓</span></li>
                    <li><span>공공임대주택</span></li>
                    <li><span>논현센트레빌</span></li>
                    <li><span>새우타워</span></li>
                    <li><span>트레빌라메르</span></li>
                    <li><span>남동공단소재</span></li>
                    <li><span>남동스마트밸리</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정/복지</span></div>
                <ol>
                    <li><span>쓰레기매립지건설</span></li>
                    <li><span>소래포구어시장</span></li>
                    <li><span>여성친화도시</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>현대화사업</span></li>
                    <li><span>인천퀴어문화축제</span></li>
                    <li><span>스마트실버</span></li>
                    <li><span>고향사랑기부금</span></li>
                    <li><span>매립지사용종료</span></li>
                    <li><span>전통어시장</span></li>
                    <li><span>구월동중앙공원</span></li>
                    <li><span>수도권매립지사용</span></li>
                    <li><span>원전오염수</span></li>
                    <li><span>건설반대투쟁</span></li>
                    <li><span>매립지건설계획철회</span></li>
                    <li><span>자원순환정책</span></li>
                    <li><span>에코랜드조성</span></li>
                    <li><span>염수방류</span></li>
                    <li><span>미세먼지차단숲</span></li>
                </ol>
            </div>
            `,
            부평구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>기소</span></li>
                    <li><span>아동학대중상해</span></li>
                    <li><span>구속기소</span></li>
                    <li><span>부평구모텔</span></li>
                    <li><span>지적장애</span></li>
                    <li><span>무기징역</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>심정지상태</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>양의어머니</span></li>
                    <li><span>아동학대범죄</span></li>
                    <li><span>모텔지적</span></li>
                    <li><span>특례법상아동학대</span></li>
                    <li><span>횡단보도</span></li>
                    <li><span>폭행혐의</span></li>
                    <li><span>2개월딸</span></li>
                    <li><span>집단폭행</span></li>
                    <li><span>도로교통법상</span></li>
                    <li><span>나무탁자</span></li>
                    <li><span>공무집행방해</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>부동산/지역발전</span></div>
                <ol>
                    <li><span>1호선</span></li>
                    <li><span>전세피해지원센터</span></li>
                    <li><span>SK에코플랜트</span></li>
                    <li><span>한국지엠부평공장</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>전세사기피해</span></li>
                    <li><span>세상시티</span></li>
                    <li><span>배후수요</span></li>
                    <li><span>부평SK뷰</span></li>
                    <li><span>7호선</span></li>
                    <li><span>문화의거리</span></li>
                    <li><span>공공지원민간</span></li>
                    <li><span>정비사업</span></li>
                    <li><span>인천도시철도</span></li>
                    <li><span>소규모주택정비</span></li>
                    <li><span>자원민간임대주택</span></li>
                    <li><span>부평캐슬더샵</span></li>
                    <li><span>전세사기</span></li>
                    <li><span>도시정비사업</span></li>
                    <li><span>청천2구역</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정/복지</span></div>
                <ol>
                    <li><span>인천가족공원</span></li>
                    <li><span>일반인희생자</span></li>
                    <li><span>세월호참사일반</span></li>
                    <li><span>유충발견</span></li>
                    <li><span>스마트주차로봇</span></li>
                    <li><span>콘텐츠기업지원</span></li>
                    <li><span>부평정수장</span></li>
                    <li><span>주차로봇서비스</span></li>
                    <li><span>성묘객편의</span></li>
                    <li><span>꿈의도서관</span></li>
                    <li><span>해피해빗</span></li>
                    <li><span>후쿠시마오염수</span></li>
                    <li><span>수돗물유충</span></li>
                    <li><span>유충추정물체</span></li>
                    <li><span>깔따구유충</span></li>
                    <li><span>아동친화도시</span></li>
                    <li><span>원전오염수</span></li>
                    <li><span>수돗물공급</span></li>
                    <li><span>벌레유충</span></li>
                    <li><span>염수해양투기</span></li>
                </ol>
            </div>
            `,
            계양구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>경찰관계자</span></li>
                    <li><span>추적전자장치</span></li>
                    <li><span>전자발찌</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>철제그릇</span></li>
                    <li><span>전동킥보드</span></li>
                    <li><span>폐쇄회로CCTV</span></li>
                    <li><span>시신일부</span></li>
                    <li><span>살해뒤</span></li>
                    <li><span>살해혐의</span></li>
                    <li><span>어머니살해</span></li>
                    <li><span>공직선거법</span></li>
                    <li><span>범행동기</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>선거방해혐의</span></li>
                    <li><span>사망보험금</span></li>
                    <li><span>60대어머니</span></li>
                    <li><span>화학액체</span></li>
                    <li><span>뒤현금</span></li>
                    <li><span>30대여성</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>지역발전</span></div>
                <ol>
                    <li><span>계양테크노벨리</span></li>
                    <li><span>김포공항이전</span></li>
                    <li><span>9호선계양연장</span></li>
                    <li><span>작전한라비발디</span></li>
                    <li><span>두산위브더제니스</span></li>
                    <li><span>풍경채인천</span></li>
                    <li><span>공공주택지구</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>1호선</span></li>
                    <li><span>김포도시철도기지</span></li>
                    <li><span>밸리공공주택</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>도시정비사업</span></li>
                    <li><span>계양위너스카이</span></li>
                    <li><span>인천계양지구</span></li>
                    <li><span>분양관계자</span></li>
                    <li><span>주거중심지</span></li>
                    <li><span>계양DSE지식산업센터</span></li>
                    <li><span>계양더프리미어</span></li>
                    <li><span>공공주택</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정</span></div>
                <ol>
                    <li><span>유충발견</span></li>
                    <li><span>SK에코</span></li>
                    <li><span>고령자복지주택</span></li>
                    <li><span>쌍둥딸4아들</span></li>
                    <li><span>북부수도사업소</span></li>
                    <li><span>자원순환센터</span></li>
                    <li><span>육군17사단</span></li>
                    <li><span>부평정수장</span></li>
                    <li><span>쌍둥이출산</span></li>
                    <li><span>플라스틱재활용</span></li>
                    <li><span>군인부부</span></li>
                    <li><span>투명폐페트병</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>유충추정물체</span></li>
                    <li><span>수돗물공급</span></li>
                    <li><span>자원순환사회</span></li>
                    <li><span>위촉장수요</span></li>
                    <li><span>쌍둥이돌잔치</span></li>
                    <li><span>신혼희망타운</span></li>
                    <li><span>신혼부부</span></li>
                </ol>
            </div>
            `,
            서구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>경찰관계자</span></li>
                    <li><span>기소</span></li>
                    <li><span>보육교사</span></li>
                    <li><span>학대혐의</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>빈대출몰</span></li>
                    <li><span>횡단보도</span></li>
                    <li><span>아동학대범죄</span></li>
                    <li><span>장애아동</span></li>
                    <li><span>국공립어린이집</span></li>
                    <li><span>피해아동</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>살인혐의</span></li>
                    <li><span>성폭행혐의</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>어린이집보육교사</span></li>
                    <li><span>폭행혐의</span></li>
                    <li><span>생후40일</span></li>
                    <li><span>중앙선침범</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>지역활성화</span></div>
                <ol>
                    <li><span>검단신도시</span></li>
                    <li><span>로열파크시티푸르지오</span></li>
                    <li><span>청라의료복합타운</span></li>
                    <li><span>국가철도망구축계획</span></li>
                    <li><span>호반써밋</span></li>
                    <li><span>도시개발</span></li>
                    <li><span>스타필드</span></li>
                    <li><span>유네스코세계문화유산</span></li>
                    <li><span>청라시티타워</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>5호선</span></li>
                    <li><span>1호선</span></li>
                    <li><span>영종국제도시</span></li>
                    <li><span>2호선</span></li>
                    <li><span>7호선</span></li>
                    <li><span>청라국제도시</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>검단웰카운티</span></li>
                    <li><span>주거용오피스텔</span></li>
                    <li><span>배후수요</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정</span></div>
                <ol>
                    <li><span>수도권매립지</span></li>
                    <li><span>유충발견</span></li>
                    <li><span>국립생물자원관</span></li>
                    <li><span>수돗물유충</span></li>
                    <li><span>깔따구유충</span></li>
                    <li><span>스타필드청라</span></li>
                    <li><span>활성탄여과지</span></li>
                    <li><span>매립지사용종료</span></li>
                    <li><span>수돗물사태</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>환경과학원</span></li>
                    <li><span>공공배달앱</span></li>
                    <li><span>매립지공사</span></li>
                    <li><span>발생지처리원칙</span></li>
                    <li><span>수돗물공급</span></li>
                    <li><span>자원순환센터</span></li>
                    <li><span>고도정수처리</span></li>
                    <li><span>지역화폐</span></li>
                    <li><span>생활폐기물</span></li>
                    <li><span>유충발생</span></li>
                </ol>
            </div>
            `,
            강화군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>농수로유기</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>지진발생</span></li>
                    <li><span>사체유기혐의</span></li>
                    <li><span>살해뒤</span></li>
                    <li><span>경찰관계자</span></li>
                    <li><span>유기혐의</span></li>
                    <li><span>누나살해</span></li>
                    <li><span>해역규모</span></li>
                    <li><span>가출신고</span></li>
                    <li><span>시신발견</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>20대남동생</span></li>
                    <li><span>누나흉기</span></li>
                    <li><span>규모3.7지진</span></li>
                    <li><span>이번지진</span></li>
                    <li><span>재난문자</span></li>
                    <li><span>30대여성</span></li>
                    <li><span>주민발견</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>안보</span></div>
                <ol>
                    <li><span>대북전단살포</span></li>
                    <li><span>자유북한운동연합</span></li>
                    <li><span>탈북민</span></li>
                    <li><span>평화전망대</span></li>
                    <li><span>북한황해북도개풍군</span></li>
                    <li><span>북한무인기</span></li>
                    <li><span>남북교류협력</span></li>
                    <li><span>북한주민</span></li>
                    <li><span>군당국</span></li>
                    <li><span>영공침범</span></li>
                    <li><span>군감시장비</span></li>
                    <li><span>무인기관측</span></li>
                    <li><span>접경지역주민</span></li>
                    <li><span>탈북단체</span></li>
                    <li><span>합동참모본부</span></li>
                    <li><span>무인기추정</span></li>
                    <li><span>대남확성기</span></li>
                    <li><span>남북공동연락사무소</span></li>
                    <li><span>장비포착</span></li>
                    <li><span>대형풍선</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>문화/관광</span></div>
                <ol>
                    <li><span>디지털관광주민증</span></li>
                    <li><span>평화전망대</span></li>
                    <li><span>평화의길</span></li>
                    <li><span>어촌뉴딜300사업</span></li>
                    <li><span>화개정원</span></li>
                    <li><span>고려산진달래군락지</span></li>
                    <li><span>진달래축제</span></li>
                    <li><span>해양영토탐방</span></li>
                    <li><span>해양문화대장정</span></li>
                    <li><span>대한민국해양문화</span></li>
                    <li><span>북한황해도개풍군</span></li>
                    <li><span>축제시기</span></li>
                    <li><span>서해랑길</span></li>
                    <li><span>주민증발급</span></li>
                    <li><span>지역균형뉴딜</span></li>
                    <li><span>워케이션</span></li>
                    <li><span>창후항어촌뉴딜</span></li>
                    <li><span>길테마노선</span></li>
                    <li><span>워크형전망대</span></li>
                    <li><span>삶의질</span></li>
                </ol>
            </div>
            `,
            옹진군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>5도특별경비단</span></li>
                    <li><span>중국어선</span></li>
                    <li><span>어업지도선</span></li>
                    <li><span>해경관계자</span></li>
                    <li><span>불법조업</span></li>
                    <li><span>해상실종</span></li>
                    <li><span>월북시도</span></li>
                    <li><span>서해어업지도</span></li>
                    <li><span>공무직직원</span></li>
                    <li><span>수색작업</span></li>
                    <li><span>아내성폭행</span></li>
                    <li><span>자진월북</span></li>
                    <li><span>소청도인근</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>서해북단</span></li>
                    <li><span>살해혐의</span></li>
                    <li><span>지진발생</span></li>
                    <li><span>북한군</span></li>
                    <li><span>월북의도</span></li>
                    <li><span>외국어선단속</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>북한/안보</span></div>
                <ol>
                    <li><span>서북도서순환훈련</span></li>
                    <li><span>연평도포격</span></li>
                    <li><span>해병대장병</span></li>
                    <li><span>당섬선착장</span></li>
                    <li><span>해병대연평부대</span></li>
                    <li><span>경계근무</span></li>
                    <li><span>포7중대</span></li>
                    <li><span>2010년북한</span></li>
                    <li><span>46용사위령탑</span></li>
                    <li><span>남북공동연락사무소</span></li>
                    <li><span>연평도평화공원</span></li>
                    <li><span>북한포격</span></li>
                    <li><span>북한개머리</span></li>
                    <li><span>포격당시</span></li>
                    <li><span>해병대6여단</span></li>
                    <li><span>탄약재보급</span></li>
                    <li><span>연락사무소폭파</span></li>
                    <li><span>접경지역긴장감</span></li>
                    <li><span>대북전단살포</span></li>
                    <li><span>도발접경지역</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>지역발전/복지</span></div>
                <ol>
                    <li><span>드론특별자유화구역</span></li>
                    <li><span>대형여객선도입</span></li>
                    <li><span>인천백령도</span></li>
                    <li><span>한국남동발전</span></li>
                    <li><span>백령공항건설</span></li>
                    <li><span>점박이물범</span></li>
                    <li><span>아이레저산업</span></li>
                    <li><span>공항건설사업</span></li>
                    <li><span>지역자원시설</span></li>
                    <li><span>영흥발전본부</span></li>
                    <li><span>항로여객선</span></li>
                    <li><span>한화건설부문</span></li>
                    <li><span>인구감소지역</span></li>
                    <li><span>정주생활지원금</span></li>
                    <li><span>수도권매립지사용</span></li>
                    <li><span>인천에코랜드</span></li>
                    <li><span>하모니플라워</span></li>
                    <li><span>여객선운항</span></li>
                    <li><span>매립지사용종료</span></li>
                    <li><span>정주여건개선</span></li>
                </ol>
            </div>
            `,
        },
        kwangju: {
            동구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>철거건물붕괴</span></li>
                    <li><span>학동4구역</span></li>
                    <li><span>영업정지</span></li>
                    <li><span>5층건물</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>다원이앤씨</span></li>
                    <li><span>사상자발생</span></li>
                    <li><span>불법재하도급</span></li>
                    <li><span>과실치사상</span></li>
                    <li><span>등록말소</span></li>
                    <li><span>구조작업</span></li>
                    <li><span>재발방지대책</span></li>
                    <li><span>하수급인관리</span></li>
                    <li><span>중대재해처벌법</span></li>
                    <li><span>버스정류장</span></li>
                    <li><span>시내버스</span></li>
                    <li><span>하청업체</span></li>
                    <li><span>안전불감증</span></li>
                    <li><span>안전점검</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>민주화운동/역사</span></div>
                <ol>
                    <li><span>옛전남도청</span></li>
                    <li><span>5.18민주화운동</span></li>
                    <li><span>5.18민주화운동기념식</span></li>
                    <li><span>헬기사격</span></li>
                    <li><span>전일빌딩</span></li>
                    <li><span>강제동원피해자</span></li>
                    <li><span>5.18진상규명</span></li>
                    <li><span>오월어머니집</span></li>
                    <li><span>5.18민주화운동기록관</span></li>
                    <li><span>5.18민주화운동기념일</span></li>
                    <li><span>전남도청복원</span></li>
                    <li><span>518기념재단</span></li>
                    <li><span>오월정신</span></li>
                    <li><span>오월영령</span></li>
                    <li><span>평화대행진</span></li>
                    <li><span>6월민주항쟁</span></li>
                    <li><span>어머니배은심여사</span></li>
                    <li><span>민주유공자법</span></li>
                    <li><span>정율성역사공원</span></li>
                    <li><span>항쟁도화선</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>복지/상생사업</span></div>
                <ol>
                    <li><span>국립아시아문화전당</span></li>
                    <li><span>은둔형외톨이</span></li>
                    <li><span>복합쇼핑몰</span></li>
                    <li><span>무등산국립공원</span></li>
                    <li><span>1인가구</span></li>
                    <li><span>충장월드페스티벌</span></li>
                    <li><span>AI창업캠프</span></li>
                    <li><span>인구감소지역</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>여성친화도시</span></li>
                    <li><span>문화중심도시</span></li>
                    <li><span>지방소멸대응</span></li>
                    <li><span>소멸대응기금</span></li>
                    <li><span>외톨이지원</span></li>
                    <li><span>문화창조원</span></li>
                    <li><span>인공지능산업융합사업단</span></li>
                    <li><span>문화관광도시</span></li>
                    <li><span>도시조성사업</span></li>
                    <li><span>충장축제테마거리</span></li>
                    <li><span>인구감소</span></li>
                </ol>
            </div>
            `,
            서구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>아파트붕괴/사건사고</span></div>
                <ol>
                    <li><span>아파트붕괴사고</span></li>
                    <li><span>아이파크붕괴사고</span></li>
                    <li><span>신축공사붕괴</span></li>
                    <li><span>붕괴사고현장</span></li>
                    <li><span>현대산업개발</span></li>
                    <li><span>붕괴사고</span></li>
                    <li><span>아파트신축사고</span></li>
                    <li><span>광주화정아이파크</span></li>
                    <li><span>타워크레인</span></li>
                    <li><span>현대산업개발신축아파트</span></li>
                    <li><span>실종자가족</span></li>
                    <li><span>외벽붕괴사고</span></li>
                    <li><span>201동건물</span></li>
                    <li><span>타워크레인해체</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>영업정지</span></li>
                    <li><span>실종자수색</span></li>
                    <li><span>잔해물</span></li>
                    <li><span>화정도현대아이파크</span></li>
                    <li><span>구조작업</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>문화/역사/지역발전</span></div>
                <ol>
                    <li><span>민간공원특례사업</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>첨단3지구</span></li>
                    <li><span>상무센트럴자이</span></li>
                    <li><span>상무지구</span></li>
                    <li><span>위파크</span></li>
                    <li><span>효성해린턴플레이스</span></li>
                    <li><span>종합버스터미널</span></li>
                    <li><span>518기념문화센터</span></li>
                    <li><span>1호선</span></li>
                    <li><span>파크마륵공원</span></li>
                    <li><span>김대중컨베션센터</span></li>
                    <li><span>2호선</span></li>
                    <li><span>분양할예정</span></li>
                    <li><span>도시정비사업</span></li>
                    <li><span>복합쇼핑몰</span></li>
                    <li><span>재개발정비사업</span></li>
                    <li><span>광주종합버스</span></li>
                    <li><span>학동4구역</span></li>
                    <li><span>공원1지구</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정/복지</span></div>
                <ol>
                    <li><span>기아오토랜드광주</span></li>
                    <li><span>강제동원시민모임</span></li>
                    <li><span>군공항이전</span></li>
                    <li><span>강제동원피해자</span></li>
                    <li><span>중대재해법</span></li>
                    <li><span>민주노총공공운수</span></li>
                    <li><span>양금덕할머니</span></li>
                    <li><span>광주군공항</span></li>
                    <li><span>랩아웃사이드</span></li>
                    <li><span>아이파크붕괴사고</span></li>
                    <li><span>건설안전특별법</span></li>
                    <li><span>아파트붕괴사고</span></li>
                    <li><span>광주2공장</span></li>
                    <li><span>삼성희망디딤돌</span></li>
                    <li><span>보호종료청소년</span></li>
                    <li><span>공공운수노조</span></li>
                    <li><span>불법주정차</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>붕괴사고현장</span></li>
                    <li><span>운수노조화물연대</span></li>
                </ol>
            </div>
            `,
            남구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>호우경보</span></li>
                    <li><span>대설특보</span></li>
                    <li><span>조양</span></li>
                    <li><span>조양가족</span></li>
                    <li><span>영장신청</span></li>
                    <li><span>일가족</span></li>
                    <li><span>교외체험학습</span></li>
                    <li><span>상당의귀금속</span></li>
                    <li><span>금은방침입</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>수돗물공급</span></li>
                    <li><span>음주측정</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>현직경찰관</span></li>
                    <li><span>만취상태</span></li>
                    <li><span>쇠구슬</span></li>
                    <li><span>특혜채용의혹</span></li>
                    <li><span>자녀특혜채용</span></li>
                    <li><span>침수피해</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>행정/지역발전</span></div>
                <ol>
                    <li><span>백운광장</span></li>
                    <li><span>스트리트푸드존</span></li>
                    <li><span>백운고가차도</span></li>
                    <li><span>고가차도철거공사</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>미디어월</span></li>
                    <li><span>행정복지센터</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>공중보행로</span></li>
                    <li><span>공원조성사업</span></li>
                    <li><span>전남대병원</span></li>
                    <li><span>복합화사업</span></li>
                    <li><span>역사공원조성</span></li>
                    <li><span>빛고을농촌</span></li>
                    <li><span>고을농촌테마</span></li>
                    <li><span>농촌테마공원</span></li>
                    <li><span>도시재생뉴딜사업</span></li>
                    <li><span>국민체육센터</span></li>
                    <li><span>공사시작</span></li>
                    <li><span>고향사랑기부</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>복지/남부교류</span></div>
                <ol>
                    <li><span>오월어머니집</span></li>
                    <li><span>5.18민주화운동</span></li>
                    <li><span>5.18진상규명조사</span></li>
                    <li><span>장애인복지</span></li>
                    <li><span>남부교류협력</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>공개모집</span></li>
                    <li><span>매니페스토실천본부</span></li>
                    <li><span>행정복지</span></li>
                    <li><span>행복한복지</span></li>
                    <li><span>지원대상</span></li>
                    <li><span>지역아동센터</span></li>
                    <li><span>문화협력재단</span></li>
                    <li><span>남북경제문화</span></li>
                    <li><span>시각장애</span></li>
                    <li><span>공구사랑방</span></li>
                    <li><span>복지7979센터</span></li>
                    <li><span>임대보증금</span></li>
                    <li><span>장애인문화</span></li>
                    <li><span>1인가구</span></li>
                </ol>
            </div>
            `,
            북구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>민주화운동/문화</span></div>
                <ol>
                    <li><span>5.18민주화운동</span></li>
                    <li><span>묘지참배</span></li>
                    <li><span>민족민주열사</span></li>
                    <li><span>5.18민주화운동기념식</span></li>
                    <li><span>기념식착석</span></li>
                    <li><span>오월정신</span></li>
                    <li><span>운동42주기</span></li>
                    <li><span>오월어머니회</span></li>
                    <li><span>배여사</span></li>
                    <li><span>5.18민주화운동진상규명</span></li>
                    <li><span>특전산동지회</span></li>
                    <li><span>운동41주기</span></li>
                    <li><span>문재학열사</span></li>
                    <li><span>추모제참석</span></li>
                    <li><span>5월단체</span></li>
                    <li><span>5.18기념재단</span></li>
                    <li><span>민주묘지추모탑</span></li>
                    <li><span>민주유공자의유족</span></li>
                    <li><span>자유민주주의인권</span></li>
                    <li><span>영령추모</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
                <ol>
                    <li><span>말바우시장</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>횡단보도</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>아파트단지</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>일가족</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>영장신청</span></li>
                    <li><span>어린이보호구역</span></li>
                    <li><span>호우경보</span></li>
                    <li><span>전동킥보드</span></li>
                    <li><span>폭염특보</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>호우특보</span></li>
                    <li><span>만취상태</span></li>
                    <li><span>폭행혐의</span></li>
                    <li><span>배수작업</span></li>
                    <li><span>예상강수량</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>지역개발/상생사업</span></div>
                <ol>
                    <li><span>기아챔피언스</span></li>
                    <li><span>복합쇼핑몰</span></li>
                    <li><span>프로야구KIA타이거즈</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>운전면허시험장</span></li>
                    <li><span>전남방직일신방직</span></li>
                    <li><span>첨단3지구</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>소규모주택정비</span></li>
                    <li><span>국립광주과학관</span></li>
                    <li><span>선도사업후보지</span></li>
                    <li><span>남토향토음식</span></li>
                    <li><span>북구청공원녹지</span></li>
                    <li><span>드론비행연습장</span></li>
                    <li><span>스타필드</span></li>
                    <li><span>북구비엔날레전시관</span></li>
                    <li><span>행정복지센터</span></li>
                    <li><span>평생학습도시</span></li>
                    <li><span>공원녹지과</span></li>
                </ol>
            </div>
            `,
            광산구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>운수노조화물연대</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>도로교통법위반</span></li>
                    <li><span>호우경보</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>선거법위반혐의</span></li>
                    <li><span>공직선거법위반</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>폐쇄회로CCTV</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>안전운임</span></li>
                    <li><span>전동킥보드</span></li>
                    <li><span>공영차고지</span></li>
                    <li><span>충전소</span></li>
                    <li><span>추돌사고</span></li>
                    <li><span>홍수주의보</span></li>
                    <li><span>만취상태</span></li>
                    <li><span>당선무효</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>지역활성화/산업</span></div>
                <ol>
                    <li><span>고려인마을</span></li>
                    <li><span>광주글로벌모터스</span></li>
                    <li><span>군공항이전</span></li>
                    <li><span>광주형일자리</span></li>
                    <li><span>동물질병관리원</span></li>
                    <li><span>과속경보시스템</span></li>
                    <li><span>복합쇼핑몰</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>빛그린산업단지</span></li>
                    <li><span>홍범도장군</span></li>
                    <li><span>발달장애</span></li>
                    <li><span>교육국제화</span></li>
                    <li><span>고려인동포</span></li>
                    <li><span>준공기념행사</span></li>
                    <li><span>소음대책지역</span></li>
                    <li><span>첨단3지구</span></li>
                    <li><span>1인가구</span></li>
                    <li><span>스타필드</span></li>
                    <li><span>자립준비청년</span></li>
                    <li><span>고향사랑기부제</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>부동산</span></div>
                <ol>
                    <li><span>구속영장</span></li>
                    <li><span>부동산투기의혹</span></li>
                    <li><span>경위조사</span></li>
                    <li><span>빛그린산단</span></li>
                    <li><span>라펜트힐</span></li>
                    <li><span>김전비서관</span></li>
                    <li><span>수시재산등록</span></li>
                    <li><span>광주형일자리</span></li>
                    <li><span>송정지구개발사업</span></li>
                    <li><span>청와대반부패비서관</span></li>
                    <li><span>도로연결</span></li>
                    <li><span>의혹제기</span></li>
                    <li><span>영구임대아파트</span></li>
                    <li><span>투기목적</span></li>
                    <li><span>정부공직자윤리</span></li>
                    <li><span>금융채무</span></li>
                    <li><span>부동산재산</span></li>
                    <li><span>조사결과</span></li>
                    <li><span>법위반혐의</span></li>
                    <li><span>광주신도시계획조래</span></li>
                </ol>
            </div>
            `,
        },
        daejeon: {
            동구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>범죄/사건사고</span></div>
                <ol>
                    <li><span>돈봉투</span></li>
                    <li><span>전 대표</span></li>
                    <li><span>혐의기소</span></li>
                    <li><span>대전지법형사</span></li>
                    <li><span>중앙지검반부패수사</span></li>
                    <li><span>수자원공사상임감사</span></li>
                    <li><span>아동복지법</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>국제우편물</span></li>
                    <li><span>국립과학수사</span></li>
                    <li><span>도로교통법</span></li>
                    <li><span>중독재활센터</span></li>
                    <li><span>쇠구슬</span></li>
                    <li><span>범죄처벌</span></li>
                    <li><span>데이탑빌리지</span></li>
                    <li><span>마약류중독</span></li>
                    <li><span>금목걸이</span></li>
                    <li><span>해당우편물</span></li>
                    <li><span>아동학대살해</span></li>
                    <li><span>두개골골절상</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>문화/관광/역사</span></div>
                <ol>
                    <li><span>골령골</span></li>
                    <li><span>산내골령</span></li>
                    <li><span>민간인희생자</span></li>
                    <li><span>유해발굴</span></li>
                    <li><span>철도관사촌</span></li>
                    <li><span>진실과화해</span></li>
                    <li><span>집단학살</span></li>
                    <li><span>한국전쟁전후</span></li>
                    <li><span>민간인학살</span></li>
                    <li><span>상소동산림욕장</span></li>
                    <li><span>0시축제</span></li>
                    <li><span>얼음동산</span></li>
                    <li><span>대동하늘공원</span></li>
                    <li><span>유해안치식</span></li>
                    <li><span>화해의숲</span></li>
                    <li><span>일류경제도시</span></li>
                    <li><span>대청호벚꽃축제</span></li>
                    <li><span>대전산내사건</span></li>
                    <li><span>우암사적공원</span></li>
                    <li><span>과거사정리위원회</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>도시/지역개발</span></div>
                <ol>
                    <li><span>소규모주택정비관리</span></li>
                    <li><span>주거재생혁신기구</span></li>
                    <li><span>규제지역</span></li>
                    <li><span>도시정비사업</span></li>
                    <li><span>대전더스카이</span></li>
                    <li><span>지하층지상</span></li>
                    <li><span>재개발정비사업</span></li>
                    <li><span>대전역세권개발사업</span></li>
                    <li><span>힐스에비뉴대전</span></li>
                    <li><span>천동3구역</span></li>
                    <li><span>시공사선정</span></li>
                    <li><span>도심융합</span></li>
                    <li><span>주택공급</span></li>
                    <li><span>사회적경제혁신타운</span></li>
                    <li><span>대전의료원설립</span></li>
                    <li><span>대전복합터미널</span></li>
                    <li><span>관리지역선도사업</span></li>
                    <li><span>관리지역지정</span></li>
                    <li><span>정비사업수주</span></li>
                    <li><span>도시재생뉴딜사업</span></li>
                </ol>
            </div>
            `,
            중구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>범죄/사건사고</span></div>
                <ol>
                    <li><span>혐의기소</span></li>
                    <li><span>공식선거법위반</span></li>
                    <li><span>수칙위반</span></li>
                    <li><span>반부패경제범죄</span></li>
                    <li><span>황의원</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>만취상태</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>국제학교</span></li>
                    <li><span>아동학대치사</span></li>
                    <li><span>피해아동</span></li>
                    <li><span>어린이집원장</span></li>
                    <li><span>학대행위</span></li>
                    <li><span>무기징역</span></li>
                    <li><span>어린이집</span></li>
                    <li><span>현금수송차량</span></li>
                    <li><span>범죄가중처</span></li>
                    <li><span>어린이보호구역스쿨존</span></li>
                    <li><span>업무추진비</span></li>
                    <li><span>호우경보</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>도시/지역개발</span></div>
                <ol>
                    <li><span>하늘채스카이</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>도심융합</span></li>
                    <li><span>도시정비사업</span></li>
                    <li><span>1호선</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>충청권광역철도</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>SK에코플랜트</span></li>
                    <li><span>선화더와이즈</span></li>
                    <li><span>베이스볼드림파크</span></li>
                    <li><span>중촌SK뷰</span></li>
                    <li><span>청약경쟁</span></li>
                    <li><span>주거형오피스텔</span></li>
                    <li><span>한밭종합운동장</span></li>
                    <li><span>하늘채엘센트로</span></li>
                    <li><span>소규모주택정비</span></li>
                    <li><span>신흥주거타운</span></li>
                    <li><span>대우산업개발</span></li>
                    <li><span>노후공공건출물</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>문화/관광/종교</span></div>
                <ol>
                    <li><span>문화의거리</span></li>
                    <li><span>효문화뿌리축제</span></li>
                    <li><span>미용예술경연대회</span></li>
                    <li><span>충남도청사</span></li>
                    <li><span>유신임추기경</span></li>
                    <li><span>동행축제</span></li>
                    <li><span>경로당프로그램발표</span></li>
                    <li><span>0시축제</span></li>
                    <li><span>성심당</span></li>
                    <li><span>대전형무소</span></li>
                    <li><span>용머리어린이공원</span></li>
                    <li><span>한국족보박물관</span></li>
                    <li><span>뿌리공원</span></li>
                    <li><span>교황청성직자성</span></li>
                    <li><span>대전오월드</span></li>
                    <li><span>솔뫼성지</span></li>
                    <li><span>문화재등록</span></li>
                    <li><span>한국천주교</span></li>
                    <li><span>효문화진흥원</span></li>
                    <li><span>이탈리아로마라테라노</span></li>
                </ol>
            </div>
            `,
            서구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>범죄/사건사고</span></div>
                <ol>
                    <li><span>혐의기소</span></li>
                    <li><span>산불발생</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>무기징역</span></li>
                    <li><span>만취상태</span></li>
                    <li><span>국민은행지하주차장</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>경찰관계자</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>인도돌진</span></li>
                    <li><span>이승만과이정학</span></li>
                    <li><span>면허취소수준</span></li>
                    <li><span>정림동코스모스아파트</span></li>
                    <li><span>어린이보호구역스쿨존</span></li>
                    <li><span>현금수송차량</span></li>
                    <li><span>38구경권총</span></li>
                    <li><span>20대여성</span></li>
                    <li><span>살해한혐의</span></li>
                    <li><span>강도살인혐의</span></li>
                    <li><span>횡단보도</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>도시/지역개발</span></div>
                <ol>
                    <li><span>일반분양</span></li>
                    <li><span>1호선</span></li>
                    <li><span>포레나대전</span></li>
                    <li><span>대전월평공원</span></li>
                    <li><span>도안신도시</span></li>
                    <li><span>둔산더샵엘리프</span></li>
                    <li><span>SK에코</span></li>
                    <li><span>주거형오피스텔</span></li>
                    <li><span>충청권광역철도</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>도시정비사업</span></li>
                    <li><span>목원대</span></li>
                    <li><span>둔산자이아이파크</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>도마변동재정비촉진지구</span></li>
                    <li><span>자유화구역</span></li>
                    <li><span>엑스포시민광장</span></li>
                    <li><span>2호선</span></li>
                    <li><span>에테르스위첸</span></li>
                    <li><span>재개발정비사업</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정</span></div>
                <ol>
                    <li><span>어린이재활병원</span></li>
                    <li><span>한국산림복지진흥원</span></li>
                    <li><span>방사청</span></li>
                    <li><span>보행자우선도로</span></li>
                    <li><span>어린이급식관리지원</span></li>
                    <li><span>넥슨후원공공어린이</span></li>
                    <li><span>마사회건물</span></li>
                    <li><span>산림복지서비스</span></li>
                    <li><span>우수기관</span></li>
                    <li><span>전국학교비정규직노조</span></li>
                    <li><span>기관선정</span></li>
                    <li><span>산림치유지</span></li>
                    <li><span>도로교통법</span></li>
                    <li><span>상수도사업본부</span></li>
                    <li><span>방사청이전</span></li>
                    <li><span>불법주정차</span></li>
                    <li><span>월평동옛마사회</span></li>
                    <li><span>적극행정종합평가</span></li>
                    <li><span>행정사무감사</span></li>
                    <li><span>일시정지</span></li>
                </ol>
            </div>
            `,
            유성구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>안보/사건사고</span></div>
                <ol>
                    <li><span>국립대전현충원</span></li>
                    <li><span>서해수호의날</span></li>
                    <li><span>현대프리미엄아울렛</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>현대아울렛화재</span></li>
                    <li><span>합동안장식</span></li>
                    <li><span>46용사묘역</span></li>
                    <li><span>악성민원</span></li>
                    <li><span>연평도포격전</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>참배한뒤</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>현충일추념식</span></li>
                    <li><span>장군안장식</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>초등학교교사</span></li>
                    <li><span>대응2단계</span></li>
                    <li><span>간호사관학교</span></li>
                    <li><span>국가보훈처</span></li>
                    <li><span>연평해전전사자묘역</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>행정</span></div>
                <ol>
                    <li><span>과학기술정보통신부</span></li>
                    <li><span>국립대전현충원</span></li>
                    <li><span>홍범도장군</span></li>
                    <li><span>우주경제비전선포</span></li>
                    <li><span>한국항공우주연구원</span></li>
                    <li><span>원자력안전교부세</span></li>
                    <li><span>전국원전동맹</span></li>
                    <li><span>한전원자력연료</span></li>
                    <li><span>원전정책</span></li>
                    <li><span>장군묘역</span></li>
                    <li><span>숲체원</span></li>
                    <li><span>동그라미파트너스</span></li>
                    <li><span>규제지역</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>현충원독립유공자</span></li>
                    <li><span>유공자3묘역</span></li>
                    <li><span>우주항공청</span></li>
                    <li><span>정부출연연구기관</span></li>
                    <li><span>장애인고용</span></li>
                    <li><span>한국표준과학</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>도시/지역개발</span></div>
                <ol>
                    <li><span>대전컨벤션센터</span></li>
                    <li><span>국제과학비즈니스벨트</span></li>
                    <li><span>신세계아트앤사이언스</span></li>
                    <li><span>포레나대전</span></li>
                    <li><span>세계지방정부연합</span></li>
                    <li><span>1호선</span></li>
                    <li><span>대덕특구</span></li>
                    <li><span>도안신도시</span></li>
                    <li><span>신규택지</span></li>
                    <li><span>대전신세계</span></li>
                    <li><span>힐스테이트도안</span></li>
                    <li><span>주거형오피스텔</span></li>
                    <li><span>대전월드컵경기장</span></li>
                    <li><span>대전월평공원</span></li>
                    <li><span>유성복합터미널</span></li>
                    <li><span>대전죽동</span></li>
                    <li><span>연구개발특구진흥재단</span></li>
                    <li><span>대전도시공사</span></li>
                    <li><span>연합UCLG총회</span></li>
                    <li><span>신규공공택지</span></li>
                </ol>
            </div>
            `,
            대덕구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>범죄/사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>한국타이어</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>대응3단계</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>교사흉기</span></li>
                    <li><span>국립과학수사</span></li>
                    <li><span>혐의구속</span></li>
                    <li><span>공장불</span></li>
                    <li><span>시신아이스박스</span></li>
                    <li><span>40대교사</span></li>
                    <li><span>대전공장화재</span></li>
                    <li><span>구속기소</span></li>
                    <li><span>고등학교침입</span></li>
                    <li><span>영장실질심사</span></li>
                    <li><span>범죄처벌</span></li>
                    <li><span>범행동기</span></li>
                    <li><span>경찰조사</span></li>
                    <li><span>침입해교사</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>행정</span></div>
                <ol>
                    <li><span>한국수자원공사</span></li>
                    <li><span>지역화폐</span></li>
                    <li><span>어린이용돈수당</span></li>
                    <li><span>용돈수당</span></li>
                    <li><span>행동주의펀드</span></li>
                    <li><span>KTG이사회</span></li>
                    <li><span>물종합플랫폼</span></li>
                    <li><span>인구감소지역</span></li>
                    <li><span>플래쉬라이트캐피탈</span></li>
                    <li><span>안전운임</span></li>
                    <li><span>대전열병합발전</span></li>
                    <li><span>지방소멸대응</span></li>
                    <li><span>초등학교</span></li>
                    <li><span>수당지급</span></li>
                    <li><span>수당지급조례</span></li>
                    <li><span>물관리혁신</span></li>
                    <li><span>소멸대응기금</span></li>
                    <li><span>입학축하금</span></li>
                    <li><span>우수기관</span></li>
                    <li><span>미니태양광발전기</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>도시/지역개발</span></div>
                <ol>
                    <li><span>주거재생혁신지구</span></li>
                    <li><span>선도사업후보지</span></li>
                    <li><span>주거재생혁신</span></li>
                    <li><span>소규모주택정비</span></li>
                    <li><span>캠퍼스혁신파크</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>충청권광역철도</span></li>
                    <li><span>주택정비관리지역</span></li>
                    <li><span>SK에코</span></li>
                    <li><span>도시정비사업</span></li>
                    <li><span>주택공급</span></li>
                    <li><span>공공주택</span></li>
                    <li><span>연축지구</span></li>
                    <li><span>혁신지구선도</span></li>
                    <li><span>지구선도사업</span></li>
                    <li><span>광역철도1단계</span></li>
                    <li><span>후보지선정</span></li>
                    <li><span>송촌더파크</span></li>
                    <li><span>법동2구역</span></li>
                    <li><span>재개발정비사업</span></li>
                </ol>
            </div>
            `,
        },
        ulsan: {
            중구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>공공사업</span></div>
                <ol>
                    <li><span>원자력안전교부세신설</span></li>
                    <li><span>전국원전동맹</span></li>
                    <li><span>한국동서발전</span></li>
                    <li><span>전국원전인근지역</span></li>
                    <li><span>종합사회복지관</span></li>
                    <li><span>1인가구</span></li>
                    <li><span>지방교부세법</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>방사선비상계획구역</span></li>
                    <li><span>아동학대예방</span></li>
                    <li><span>주민서명운동</span></li>
                    <li><span>원전인근지역</span></li>
                    <li><span>전국학교비정규직</span></li>
                    <li><span>임시저장시설</span></li>
                    <li><span>정주여건개선</span></li>
                    <li><span>교부세법개정안</span></li>
                    <li><span>원전인근지자체</span></li>
                    <li><span>도심융합</span></li>
                    <li><span>교부세신설촉구</span></li>
                    <li><span>마을교육공동체</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>축제/문화</span></div>
                <ol>
                    <li><span>태화강국가정원</span></li>
                    <li><span>문화의거리</span></li>
                    <li><span>울산시립미술관</span></li>
                    <li><span>젊음의거리</span></li>
                    <li><span>문화의전당</span></li>
                    <li><span>어린이역사과학체험</span></li>
                    <li><span>국가정원봄꽃축제</span></li>
                    <li><span>태화강마두희축제</span></li>
                    <li><span>태화국가정원</span></li>
                    <li><span>외솔기념관</span></li>
                    <li><span>소방관노명래길</span></li>
                    <li><span>과학체험관</span></li>
                    <li><span>한글도시</span></li>
                    <li><span>명예도로</span></li>
                    <li><span>야외빙상장</span></li>
                    <li><span>외솔최현배선생</span></li>
                    <li><span>원도심</span></li>
                    <li><span>가을분위기</span></li>
                    <li><span>약사동제방</span></li>
                    <li><span>한글날</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>도시개발/부동산</span></div>
                <ol>
                    <li><span>도시공공주택복합사업</span></li>
                    <li><span>재개발정비사업</span></li>
                    <li><span>유보라팰라티움</span></li>
                    <li><span>도시정비사업</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>태화강국가정원</span></li>
                    <li><span>선도사업후보지</span></li>
                    <li><span>공공지원민간임대주택</span></li>
                    <li><span>반도건설</span></li>
                    <li><span>다운2지구</span></li>
                    <li><span>장위12구역</span></li>
                    <li><span>태화루사거리</span></li>
                    <li><span>울산혁신도시남측</span></li>
                    <li><span>정비사업수주</span></li>
                    <li><span>갈현1구역</span></li>
                    <li><span>경남아너스</span></li>
                    <li><span>유동인구</span></li>
                    <li><span>주거공간</span></li>
                    <li><span>도심융합</span></li>
                    <li><span>공룡발자국공원</span></li>
                </ol>
            </div>
            `,
            남구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>기소/재판</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>SK지오센트릭</span></li>
                    <li><span>삼환아르누보주상복합아파트</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>양형이유</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>울산소방본부</span></li>
                    <li><span>울산남구달동</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>효성티앤씨</span></li>
                    <li><span>경위조사</span></li>
                    <li><span>실형선고</span></li>
                    <li><span>국립과학수사연구원</span></li>
                    <li><span>공무집행방해</span></li>
                    <li><span>범죄처벌</span></li>
                    <li><span>재산피해</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>행정</span></div>
                <ol>
                    <li><span>울산남구청장</span></li>
                    <li><span>남구청장재선거</span></li>
                    <li><span>부유식해상풍력</span></li>
                    <li><span>공업탑</span></li>
                    <li><span>전 남구청장</span></li>
                    <li><span>행정복지센터</span></li>
                    <li><span>의회프레스센터</span></li>
                    <li><span>공직선거법위반</span></li>
                    <li><span>사전투표</span></li>
                    <li><span>플라스틱재활용</span></li>
                    <li><span>공식선거운동</span></li>
                    <li><span>재보궐선거</span></li>
                    <li><span>해상풍력전략</span></li>
                    <li><span>인공지능혁신파크</span></li>
                    <li><span>선거법위반혐의</span></li>
                    <li><span>이번선거</span></li>
                    <li><span>선거운동</span></li>
                    <li><span>부산시장선거</span></li>
                    <li><span>기초단체장</span></li>
                    <li><span>후보지원유세</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>관광</span></div>
                <ol>
                    <li><span>장생포고래문화마을</span></li>
                    <li><span>태화강국가정원</span></li>
                    <li><span>선암호수공원</span></li>
                    <li><span>생태체험관</span></li>
                    <li><span>바다여행선</span></li>
                    <li><span>고래생태체험</span></li>
                    <li><span>장생포문화창고</span></li>
                    <li><span>울산고래축제</span></li>
                    <li><span>남구도시관리</span></li>
                    <li><span>염포산터널</span></li>
                    <li><span>울산대교</span></li>
                    <li><span>고래문화재단</span></li>
                    <li><span>참돌고래떼</span></li>
                    <li><span>울산공업센터</span></li>
                    <li><span>냉동창고</span></li>
                    <li><span>수소선박</span></li>
                    <li><span>태화루사거리</span></li>
                    <li><span>문화특구일원</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>지역경제활성화</span></li>
                </ol>
            </div>
            `,
            동구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>기술/일자리</span></div>
                <ol>
                    <li><span>현대중공업</span></li>
                    <li><span>산업위기대응</span></li>
                    <li><span>자율운항선박</span></li>
                    <li><span>선박성능</span></li>
                    <li><span>성능실증센터</span></li>
                    <li><span>근접방어무기</span></li>
                    <li><span>고용위기지역</span></li>
                    <li><span>고늘지구</span></li>
                    <li><span>신형호위함</span></li>
                    <li><span>한국조선해양</span></li>
                    <li><span>특별지역지정</span></li>
                    <li><span>가족지원센터</span></li>
                    <li><span>위험성평가</span></li>
                    <li><span>한마음회관</span></li>
                    <li><span>외국인근로자</span></li>
                    <li><span>천안함진수식</span></li>
                    <li><span>선박기술개발</span></li>
                    <li><span>고용노동부장관</span></li>
                    <li><span>소멸위기지역</span></li>
                    <li><span>정책협약식</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>행정/복지</span></div>
                <ol>
                    <li><span>아프가니스탄특별기여자</span></li>
                    <li><span>종합사회복지</span></li>
                    <li><span>복지시설</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>장애인복지</span></li>
                    <li><span>특별기여자가족</span></li>
                    <li><span>하청노동자지원</span></li>
                    <li><span>지역사회</span></li>
                    <li><span>사회복지관</span></li>
                    <li><span>어지럼증호흡곤란</span></li>
                    <li><span>노동복지기금</span></li>
                    <li><span>공동모금회</span></li>
                    <li><span>국제우편물</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>울산정착</span></li>
                    <li><span>시교육청</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>울산대교</span></li>
                    <li><span>노인복지관</span></li>
                    <li><span>외국인노동자</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>관광</span></div>
                <ol>
                    <li><span>대왕암공원</span></li>
                    <li><span>출렁다리</span></li>
                    <li><span>염포산터널</span></li>
                    <li><span>조선해양축제</span></li>
                    <li><span>공원해상케이블카</span></li>
                    <li><span>소리체험관</span></li>
                    <li><span>울산조선</span></li>
                    <li><span>기발한배</span></li>
                    <li><span>울산대교</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>체류형관광지</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>김종훈</span></li>
                    <li><span>해안둘레길</span></li>
                    <li><span>유채꽃</span></li>
                    <li><span>수산물판매센터</span></li>
                    <li><span>관광지지정</span></li>
                    <li><span>터널무료</span></li>
                    <li><span>일산해수욕장</span></li>
                    <li><span>배콘테스트</span></li>
                </ol>
            </div>
            `,
            북구: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>환경/문화</span></div>
                <ol>
                    <li><span>울산쇠부리</span></li>
                    <li><span>친환경미래차</span></li>
                    <li><span>태풍힌남노</span></li>
                    <li><span>미래차현장방문</span></li>
                    <li><span>태풍하이선</span></li>
                    <li><span>11호태풍</span></li>
                    <li><span>반구대암각화</span></li>
                    <li><span>동해남부선</span></li>
                    <li><span>남부선폐선부지</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>박상진의사생가</span></li>
                    <li><span>공장방문</span></li>
                    <li><span>어선육지</span></li>
                    <li><span>한국판뉴딜</span></li>
                    <li><span>국가철도공단</span></li>
                    <li><span>박상진호수공원</span></li>
                    <li><span>도시숲</span></li>
                    <li><span>반구대암각화보존</span></li>
                    <li><span>북울산역</span></li>
                    <li><span>폐선부지활용</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>산업</span></div>
                <ol>
                    <li><span>현대자동차</span></li>
                    <li><span>맥스터증설</span></li>
                    <li><span>울산롯데캐슬</span></li>
                    <li><span>맥스터건설</span></li>
                    <li><span>임시저장시설</span></li>
                    <li><span>지하층지상</span></li>
                    <li><span>전용공장기공식</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>월성원전</span></li>
                    <li><span>생활숙박시설</span></li>
                    <li><span>사용후핵연료</span></li>
                    <li><span>북구주민투표</span></li>
                    <li><span>사용후핵연료저장</span></li>
                    <li><span>시민참관단</span></li>
                    <li><span>사용후핵연료관정책</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>현대차문화회관</span></li>
                    <li><span>공공산후조리원</span></li>
                    <li><span>현대자동차명촌</span></li>
                    <li><span>화물연대파업</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>아동/청소년/노인복지</span></div>
                <ol>
                    <li><span>평생학습관</span></li>
                    <li><span>CCTV통합관제</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>협약체결</span></li>
                    <li><span>장애인복지</span></li>
                    <li><span>아동친화도시</span></li>
                    <li><span>통합관제센터</span></li>
                    <li><span>노인복지관</span></li>
                    <li><span>워터파크지구</span></li>
                    <li><span>지역사회</span></li>
                    <li><span>청년창업지원</span></li>
                    <li><span>울산광역시교육청</span></li>
                    <li><span>창업지원센터</span></li>
                    <li><span>치매안심센터</span></li>
                    <li><span>청년창업</span></li>
                    <li><span>실버케어센터</span></li>
                    <li><span>시니어스마트센터</span></li>
                    <li><span>폐쇄회로CCTV</span></li>
                    <li><span>평생교육특화</span></li>
                    <li><span>교육특화도시</span></li>
                </ol>
            </div>
            `,
            울주군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>기소</span></li>
                    <li><span>원인/경위조사</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>태풍힌남노</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>사고견</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>에쓰오일울산공장</span></li>
                    <li><span>울산소방본부</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>양형이유</span></li>
                    <li><span>재산피해</span></li>
                    <li><span>11호태풍</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>중대재해처벌법</span></li>
                    <li><span>폭발화재사고</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>관광행사</span></div>
                <ol>
                    <li><span>반구대암각화</span></li>
                    <li><span>영남알프스</span></li>
                    <li><span>전시컨벤션센터</span></li>
                    <li><span>세계산악영화제</span></li>
                    <li><span>복합웰컴센터</span></li>
                    <li><span>지방자치단체합동추진단</span></li>
                    <li><span>태화강생태관</span></li>
                    <li><span>이날행사</span></li>
                    <li><span>지방협력포럼</span></li>
                    <li><span>알프스9봉우리</span></li>
                    <li><span>암각화보존</span></li>
                    <li><span>인증사업</span></li>
                    <li><span>대곡리반구대</span></li>
                    <li><span>문화체육관광부</span></li>
                    <li><span>합동추진단개소식</span></li>
                    <li><span>태화강국가정원</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>외고산옹기마을</span></li>
                    <li><span>진하해수욕장</span></li>
                    <li><span>암각화박물관</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정</span></div>
                <ol>
                    <li><span>한국수력원자력</span></li>
                    <li><span>산재전문공공병원</span></li>
                    <li><span>원자력본부</span></li>
                    <li><span>원전해체연구소</span></li>
                    <li><span>고리1,2호기</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>경영안전자금</span></li>
                    <li><span>새울원자력본부</span></li>
                    <li><span>고리원전</span></li>
                    <li><span>원자력안전</span></li>
                    <li><span>최종해체계획서</span></li>
                    <li><span>지역사회</span></li>
                    <li><span>협약체결</span></li>
                    <li><span>한국동서발전</span></li>
                    <li><span>스마트팜</span></li>
                    <li><span>병상규모</span></li>
                    <li><span>영농형태양광</span></li>
                    <li><span>주민의견수렴</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>원안위</span></li>
                </ol>
            </div>
            `,
        },
        sejong: {},
        gyunggi: {
            의정부시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>구속영장</span></li>
                    <li><span>기소</span></li>
                    <li><span>특수강도혐의</span></li>
                    <li><span>성폭행혐의</span></li>
                    <li><span>살인예고글</span></li>
                    <li><span>범행동기</span></li>
                    <li><span>총장장모</span></li>
                    <li><span>장관</span></li>
                    <li><span>살해혐의</span></li>
                    <li><span>장관아들</span></li>
                    <li><span>흉기위협</span></li>
                    <li><span>요양급여</span></li>
                    <li><span>공무집행방해</span></li>
                    <li><span>통장잔고증명서</span></li>
                    <li><span>성폭행범</span></li>
                    <li><span>사회복무요원</span></li>
                    <li><span>아동청소년</span></li>
                    <li><span>요양병원개설</span></li>
                    <li><span>폭행가담</span></li>
                    <li><span>양말공장</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>지역발전/문화</span></div>
                <ol>
                    <li><span>의정부고산수자인디에스티지</span></li>
                    <li><span>1호선</span></li>
                    <li><span>고산지구</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>세상신곡파크</span></li>
                    <li><span>복합문화융합</span></li>
                    <li><span>철도망구축계획</span></li>
                    <li><span>경기도청북부</span></li>
                    <li><span>의정부역스카이자이</span></li>
                    <li><span>민락2지구</span></li>
                    <li><span>바둑전용경기장</span></li>
                    <li><span>추동공원</span></li>
                    <li><span>의정부문화재단</span></li>
                    <li><span>민간공원특례</span></li>
                    <li><span>1순환고속도로</span></li>
                    <li><span>노선개통</span></li>
                    <li><span>더샵리듬시티</span></li>
                    <li><span>8호선</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정</span></div>
                <ol>
                    <li><span>미군반환공여지</span></li>
                    <li><span>리얼돌체험방</span></li>
                    <li><span>운전면허시험장이전</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>대북전단살포</span></li>
                    <li><span>캠프레드</span></li>
                    <li><span>경기북도설치</span></li>
                    <li><span>도봉면허시험장</span></li>
                    <li><span>국가유공자특화주택</span></li>
                    <li><span>캠프스탠리</span></li>
                    <li><span>캠프잭슨</span></li>
                    <li><span>공공하수처리시설</span></li>
                    <li><span>도봉운전면허</span></li>
                    <li><span>현대화사업</span></li>
                    <li><span>청소년전화</span></li>
                    <li><span>국가보훈부</span></li>
                    <li><span>희망의전화</span></li>
                    <li><span>한미동맹</span></li>
                    <li><span>자원회수시설</span></li>
                    <li><span>전문가의상담</span></li>
                </ol>
            </div>
            `,
            광명시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>부동산투기/사건사고</span></div>
                <ol>
                    <li><span>투기의혹</span></li>
                    <li><span>광명시흥신도시</span></li>
                    <li><span>한국토지주택공사LH직원</span></li>
                    <li><span>의혹제기</span></li>
                    <li><span>신도시투기의혹</span></li>
                    <li><span>광명시흥사업본부</span></li>
                    <li><span>땅투기의혹</span></li>
                    <li><span>광명시흥지구</span></li>
                    <li><span>토지매입</span></li>
                    <li><span>내부정보이용</span></li>
                    <li><span>변호사모임</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>부동산투기의혹</span></li>
                    <li><span>부동산투기사범</span></li>
                    <li><span>신도시예정지</span></li>
                    <li><span>특별수사본부</span></li>
                    <li><span>경찰관계자</span></li>
                    <li><span>시흥신도시투기</span></li>
                    <li><span>경기광명경찰서</span></li>
                    <li><span>정부합동조사단</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>지역발전</span></div>
                <ol>
                    <li><span>일반분양</span></li>
                    <li><span>지하층지상</span></li>
                    <li><span>광명시흥테크노밸리</span></li>
                    <li><span>광명시흥신도시</span></li>
                    <li><span>7호선</span></li>
                    <li><span>현대테라타워광명</span></li>
                    <li><span>광명뉴타운</span></li>
                    <li><span>광명시흥지구</span></li>
                    <li><span>더샵포레</span></li>
                    <li><span>공공주택지구</span></li>
                    <li><span>1호선</span></li>
                    <li><span>광명센트럴아이파크</span></li>
                    <li><span>호반써밋</span></li>
                    <li><span>플라자광명정</span></li>
                    <li><span>오토랜드광명</span></li>
                    <li><span>광명G타워</span></li>
                    <li><span>철산주공</span></li>
                    <li><span>배후수요</span></li>
                    <li><span>정비사업</span></li>
                    <li><span>구역재개발</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정</span></div>
                <ol>
                    <li><span>구로차량기지광명이전사업</span></li>
                    <li><span>광명융합기술교육</span></li>
                    <li><span>한국폴리텍대학</span></li>
                    <li><span>평생학습도시</span></li>
                    <li><span>타당성재조사</span></li>
                    <li><span>차량기지이전사업</span></li>
                    <li><span>신혼부부</span></li>
                    <li><span>광명시흥테크노밸리</span></li>
                    <li><span>광명시자영업지원센터</span></li>
                    <li><span>달빛어린이병원</span></li>
                    <li><span>재정사업평가</span></li>
                    <li><span>광명이전반대</span></li>
                    <li><span>청년숙의예산</span></li>
                    <li><span>광명사랑화폐</span></li>
                    <li><span>평생학습지원금</span></li>
                    <li><span>노후경유차</span></li>
                    <li><span>장애인평생</span></li>
                    <li><span>평생학습장학금</span></li>
                    <li><span>광명시평생학습원</span></li>
                    <li><span>교육원개원식</span></li>
                </ol>
            </div>
            `,
            평택시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>지역발전/기업</span></div>
                <ol>
                    <li><span>미국대통령</span></li>
                    <li><span>평택항만공사</span></li>
                    <li><span>평택지제역</span></li>
                    <li><span>1호선</span></li>
                    <li><span>고덕국제신도시</span></li>
                    <li><span>삼성전자반도체공장</span></li>
                    <li><span>고덕신도시</span></li>
                    <li><span>삼성전자평택</span></li>
                    <li><span>쌍용자동차</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>삼성반도체평택캠퍼스</span></li>
                    <li><span>제일풍경채</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>호반써밋</span></li>
                    <li><span>LG디지털파크</span></li>
                    <li><span>배후수요</span></li>
                    <li><span>에디슨모터스</span></li>
                    <li><span>서해안복선전철</span></li>
                    <li><span>수소생산기지</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>이층문화체육센터</span></li>
                    <li><span>신축공사장화재</span></li>
                    <li><span>냉동창고신축</span></li>
                    <li><span>경찰관계자</span></li>
                    <li><span>창고신축공사장</span></li>
                    <li><span>중대재해처벌법</span></li>
                    <li><span>산업안전보건</span></li>
                    <li><span>공사장화재현장</span></li>
                    <li><span>제빵공장</span></li>
                    <li><span>소방공무원합동영결식</span></li>
                    <li><span>평택냉동창고</span></li>
                    <li><span>순직한소방관</span></li>
                    <li><span>대응2단계</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>사망사고</span></li>
                    <li><span>순직소방공무원</span></li>
                    <li><span>가혹행위</span></li>
                    <li><span>중대재해법</span></li>
                    <li><span>20대여성근로자</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>안보</span></div>
                <ol>
                    <li><span>서해수호의날</span></li>
                    <li><span>2함대사령부</span></li>
                    <li><span>캠프험프리스</span></li>
                    <li><span>해군2함대</span></li>
                    <li><span>주한미군</span></li>
                    <li><span>주한미공군오산</span></li>
                    <li><span>자유의방패</span></li>
                    <li><span>주한미군사령관</span></li>
                    <li><span>고공정찰기</span></li>
                    <li><span>한미연합사령관</span></li>
                    <li><span>한미동맹</span></li>
                    <li><span>한미연합연습</span></li>
                    <li><span>아파치헬기</span></li>
                    <li><span>주한미군기지</span></li>
                    <li><span>연합방위태세</span></li>
                    <li><span>천안함피격</span></li>
                    <li><span>허스트경연대회</span></li>
                    <li><span>연평해전전적비</span></li>
                    <li><span>46용사추모식</span></li>
                    <li><span>서해수호관</span></li>
                </ol>
            </div>
            `,
            양주시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>중대재해처벌법</span></li>
                    <li><span>삼표산업</span></li>
                    <li><span>산업안전보건법</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>입건/기소</span></li>
                    <li><span>경영책임자</span></li>
                    <li><span>과실치사혐의</span></li>
                    <li><span>석재채취장</span></li>
                    <li><span>삼표산업채석장</span></li>
                    <li><span>토사붕괴사고</span></li>
                    <li><span>토사붕괴</span></li>
                    <li><span>채석장붕괴사고</span></li>
                    <li><span>하늘궁</span></li>
                    <li><span>처벌법적용</span></li>
                    <li><span>구조작업</span></li>
                    <li><span>작업중토사</span></li>
                    <li><span>안전보건관리</span></li>
                    <li><span>보건법위반</span></li>
                    <li><span>송추가마골</span></li>
                    <li><span>중대산업재해</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>부동산/지역개발</span></div>
                <ol>
                    <li><span>양주옥정신도시</span></li>
                    <li><span>라피아노스위첸</span></li>
                    <li><span>1호선</span></li>
                    <li><span>양주테크노밸리</span></li>
                    <li><span>7호선연장선</span></li>
                    <li><span>세상옥정</span></li>
                    <li><span>미분양관리지역</span></li>
                    <li><span>양주옥정파티오포</span></li>
                    <li><span>양주신도시</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>조정대상지역지정</span></li>
                    <li><span>단독주택</span></li>
                    <li><span>회천지구</span></li>
                    <li><span>옥정리더스가든</span></li>
                    <li><span>규제지역해제</span></li>
                    <li><span>신도시옥정지구</span></li>
                    <li><span>은남일반산업단지</span></li>
                    <li><span>2순환고속도로</span></li>
                    <li><span>한라비발디퍼스</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>문화/행정</span></div>
                <ol>
                    <li><span>효순미선평화공원</span></li>
                    <li><span>신효순심미선</span></li>
                    <li><span>공동점포</span></li>
                    <li><span>유네스코세계유산잠정목록</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>양주회암사</span></li>
                    <li><span>지하주차장</span></li>
                    <li><span>보강공사</span></li>
                    <li><span>무량판구조</span></li>
                    <li><span>철근누락</span></li>
                    <li><span>종합장사시설</span></li>
                    <li><span>유아체험교육원</span></li>
                    <li><span>보호소</span></li>
                    <li><span>장사시설건립</span></li>
                    <li><span>은행업무</span></li>
                    <li><span>추모행사</span></li>
                    <li><span>18주기추모제</span></li>
                    <li><span>회암사지유적</span></li>
                    <li><span>보강철근</span></li>
                    <li><span>유기동물</span></li>
                </ol>
            </div>
            `,
            동두천시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>건설하도급대금지급명령</span></li>
                    <li><span>소년분류심사원구금</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>대응1단계</span></li>
                    <li><span>폭염특보</span></li>
                    <li><span>대명토건</span></li>
                    <li><span>2도화상</span></li>
                    <li><span>쓰레기처리시설</span></li>
                    <li><span>군일행</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>늑골골절</span></li>
                    <li><span>경찰과소방</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>지역개발</span></div>
                <ol>
                    <li><span>중흥S클래스</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>1호선</span></li>
                    <li><span>지행역센트레빌파크뷰</span></li>
                    <li><span>브라운스톤인터포레</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>민간임대아파트</span></li>
                    <li><span>청약경쟁</span></li>
                    <li><span>수도권지하철</span></li>
                    <li><span>생활인프라</span></li>
                    <li><span>파주양주구간</span></li>
                    <li><span>한국문화영상고</span></li>
                    <li><span>소형아파트</span></li>
                    <li><span>동두천국가산업단지</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>청약시장</span></li>
                    <li><span>교육환경</span></li>
                    <li><span>신혼희망타운</span></li>
                    <li><span>수도권급행철도</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>복지</span></div>
                <ol>
                    <li><span>미2사단</span></li>
                    <li><span>행사에서미</span></li>
                    <li><span>미군장병</span></li>
                    <li><span>자원봉사센터</span></li>
                    <li><span>동두천시자원봉사</span></li>
                    <li><span>봉사센터이사</span></li>
                    <li><span>2사단한미연합사단</span></li>
                    <li><span>사랑의연탄</span></li>
                    <li><span>취약계층15가구</span></li>
                    <li><span>연탄나눔행사</span></li>
                    <li><span>취약계층전달</span></li>
                    <li><span>미군2사단</span></li>
                    <li><span>장병연탄</span></li>
                    <li><span>아동돌봄센터</span></li>
                </ol>
            </div>
            `,
            과천시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>고위공직자범죄수사처</span></li>
                    <li><span>공수처</span></li>
                    <li><span>정부과천청사공수처</span></li>
                    <li><span>자녀특혜채용의혹</span></li>
                    <li><span>경인고속도로북의왕IC인근</span></li>
                    <li><span>방음터널화재사고</span></li>
                    <li><span>북의왕</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>인근방음터널</span></li>
                    <li><span>경인고속도로방음</span></li>
                    <li><span>고가교방음터널</span></li>
                    <li><span>과천시공수처</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>간부자녀특혜</span></li>
                    <li><span>방음터널구간</span></li>
                    <li><span>채용의혹관련</span></li>
                    <li><span>국립과학수사</span></li>
                    <li><span>터널화재현장</span></li>
                    <li><span>과실치사상</span></li>
                    <li><span>폐기물운반</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>지역개발/문화</span></div>
                <ol>
                    <li><span>과천지식정보타운</span></li>
                    <li><span>과천푸르지오오르투스</span></li>
                    <li><span>규제지역</span></li>
                    <li><span>시세차익</span></li>
                    <li><span>푸르지오벨라르테</span></li>
                    <li><span>국립현대미술관</span></li>
                    <li><span>푸르지오어울림</span></li>
                    <li><span>4호선</span></li>
                    <li><span>과천청사역</span></li>
                    <li><span>신혼희망타운</span></li>
                    <li><span>주거형오피스텔</span></li>
                    <li><span>주택공급</span></li>
                    <li><span>자금조달계획서</span></li>
                    <li><span>공공주택지구</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>규제지역해제</span></li>
                    <li><span>민간택지분양가상한제</span></li>
                    <li><span>서울대공원동물원</span></li>
                    <li><span>신혼부부</span></li>
                    <li><span>규제완화</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정</span></div>
                <ol>
                    <li><span>주민소환투표</span></li>
                    <li><span>정부과천청사유휴부지</span></li>
                    <li><span>검수완</span></li>
                    <li><span>서울대공원주차장</span></li>
                    <li><span>론스타국제투자분쟁</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>이수과천복합터널</span></li>
                    <li><span>주민소환추진</span></li>
                    <li><span>주민소환시전</span></li>
                    <li><span>수사권완전</span></li>
                    <li><span>주민소환운동</span></li>
                    <li><span>러시아정부</span></li>
                    <li><span>보상서비스센터</span></li>
                    <li><span>임시보상서비스</span></li>
                    <li><span>러시아정상수교</span></li>
                    <li><span>멸종위기종</span></li>
                    <li><span>자율운항선박</span></li>
                    <li><span>주택공급계획</span></li>
                    <li><span>의료기관</span></li>
                    <li><span>시장직</span></li>
                </ol>
            </div>
            `,
            의왕시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>산업/노동</span></div>
                <ol>
                    <li><span>내륙컨테이너기지</span></li>
                    <li><span>민주노총공공운수노조</span></li>
                    <li><span>운수노조화물연대</span></li>
                    <li><span>안전운임</span></li>
                    <li><span>노조화물연대본부</span></li>
                    <li><span>화물연대총파업</span></li>
                    <li><span>업무개시명령</span></li>
                    <li><span>총파업돌입</span></li>
                    <li><span>집단운송거부</span></li>
                    <li><span>일몰제폐지</span></li>
                    <li><span>안전운임일몰제</span></li>
                    <li><span>운임제일몰제</span></li>
                    <li><span>화물연대조합원</span></li>
                    <li><span>무기한총파업</span></li>
                    <li><span>화물노동자</span></li>
                    <li><span>운송료인상</span></li>
                    <li><span>화물열차</span></li>
                    <li><span>화물차량</span></li>
                    <li><span>파업돌입</span></li>
                    <li><span>화물차주</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>지역발전/행정</span></div>
                <ol>
                    <li><span>인덕원자이SK</span></li>
                    <li><span>롯데프리미엄아울렛</span></li>
                    <li><span>신혼희망타운</span></li>
                    <li><span>4호선</span></li>
                    <li><span>신규택지</span></li>
                    <li><span>SK에코플랜트</span></li>
                    <li><span>아파트값</span></li>
                    <li><span>인덕원퍼스</span></li>
                    <li><span>의왕군포</span></li>
                    <li><span>신규공공주택지구</span></li>
                    <li><span>백운호수</span></li>
                    <li><span>타임빌라스</span></li>
                    <li><span>동탄복선전철</span></li>
                    <li><span>인덕원동탄</span></li>
                    <li><span>세상고천파크</span></li>
                    <li><span>월곶판교</span></li>
                    <li><span>인덕원푸르지오엘센트로</span></li>
                    <li><span>주택공급</span></li>
                    <li><span>수도권1순환고속도로</span></li>
                    <li><span>광역교통망</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>사건사고</span></div>
                <ol>
                    <li><span>반부패공공범죄수사대</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>국정농단사건</span></li>
                    <li><span>구속기소</span></li>
                    <li><span>서울중앙지법</span></li>
                    <li><span>삼성미래전략실</span></li>
                    <li><span>구치소보석/석방</span></li>
                    <li><span>20대여성</span></li>
                    <li><span>무차별폭행</span></li>
                    <li><span>웰컴투비디오</span></li>
                    <li><span>아동성착취</span></li>
                    <li><span>아파트엘리베이터</span></li>
                    <li><span>용기제조공장</span></li>
                    <li><span>전광판</span></li>
                    <li><span>자녀입시비리</span></li>
                    <li><span>구속기간만료</span></li>
                    <li><span>착취물사이트</span></li>
                    <li><span>선거법위반혐의</span></li>
                    <li><span>세계최대아동</span></li>
                    <li><span>증거인멸교사</span></li>
                </ol>
            </div>
            `,
            구리시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>지역발전/문화</span></div>
                <ol>
                    <li><span>갈매금강펜테리움IX타워</span></li>
                    <li><span>구리갈매지구</span></li>
                    <li><span>8호선연장선</span></li>
                    <li><span>경의중앙선</span></li>
                    <li><span>배후수요</span></li>
                    <li><span>구리갈매역세권</span></li>
                    <li><span>공공주택지구</span></li>
                    <li><span>구리역롯데캐슬</span></li>
                    <li><span>구리도시공사</span></li>
                    <li><span>다산신도시</span></li>
                    <li><span>1순환고속도로</span></li>
                    <li><span>다산한강프리미어</span></li>
                    <li><span>특화설계</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>드라이브인시스템</span></li>
                    <li><span>세종포천고속도로</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>교통호재</span></li>
                    <li><span>광역교통대책</span></li>
                    <li><span>왕숙신도시</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
                <ol>
                    <li><span>살인혐의</span></li>
                    <li><span>전세사기</span></li>
                    <li><span>전세보증금</span></li>
                    <li><span>전세사기피해자</span></li>
                    <li><span>동생살해</span></li>
                    <li><span>지적장애</span></li>
                    <li><span>혐의기소</span></li>
                    <li><span>경찰관계자</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>상속재산</span></li>
                    <li><span>장애2급</span></li>
                    <li><span>범죄단체조직</span></li>
                    <li><span>유죄인정</span></li>
                    <li><span>씨일당</span></li>
                    <li><span>실종신고</span></li>
                    <li><span>구속기소</span></li>
                    <li><span>폐쇄회로CCTV</span></li>
                    <li><span>장애인동생</span></li>
                    <li><span>단체조직죄</span></li>
                    <li><span>임대차보증금</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정</span></div>
                <ol>
                    <li><span>한강횡단교량</span></li>
                    <li><span>구리대교명령</span></li>
                    <li><span>세종포천고속도로</span></li>
                    <li><span>청년창업지원센터</span></li>
                    <li><span>구리월드디자인시티</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>고속도로한강</span></li>
                    <li><span>세종포천</span></li>
                    <li><span>서명운동</span></li>
                    <li><span>구리사랑카드</span></li>
                    <li><span>행정구역</span></li>
                    <li><span>33번째</span></li>
                    <li><span>구리대교로</span></li>
                    <li><span>고교학점제종합추진계획</span></li>
                    <li><span>구리암사</span></li>
                    <li><span>구리테크노밸리</span></li>
                    <li><span>시민행복특별시</span></li>
                    <li><span>다리이름</span></li>
                    <li><span>건설중</span></li>
                    <li><span>입영지원금</span></li>
                </ol>
            </div>
            `,
            남양주시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>경찰관계자</span></li>
                    <li><span>강제추행혐의</span></li>
                    <li><span>반부패공공범죄수사대</span></li>
                    <li><span>50대여성</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>대형견</span></li>
                    <li><span>재산피해</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>공직선거법위반</span></li>
                    <li><span>증거인멸교사</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>대응2단계</span></li>
                    <li><span>20대여성</span></li>
                    <li><span>사고견</span></li>
                    <li><span>주상복합건물</span></li>
                    <li><span>대응1단계</span></li>
                    <li><span>유기견</span></li>
                    <li><span>혈중알코올농도</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>지역개발/기업</span></div>
                <ol>
                    <li><span>현대프리미엄아울렛</span></li>
                    <li><span>다산신도시</span></li>
                    <li><span>남양주왕숙신도시</span></li>
                    <li><span>생활숙박시설</span></li>
                    <li><span>경의중앙선</span></li>
                    <li><span>스타이그제큐티브</span></li>
                    <li><span>북한강R점</span></li>
                    <li><span>반려동물</span></li>
                    <li><span>별내신도시</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>9호선</span></li>
                    <li><span>왕숙2지구</span></li>
                    <li><span>스페이스원</span></li>
                    <li><span>4호선</span></li>
                    <li><span>8호선</span></li>
                    <li><span>신혼희망타운</span></li>
                    <li><span>1호선</span></li>
                    <li><span>동물자연연대</span></li>
                    <li><span>1순환고속도로</span></li>
                    <li><span>배후수요</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>복지/행정</span></div>
                <ol>
                    <li><span>119특수구조대</span></li>
                    <li><span>튀르키예지진</span></li>
                    <li><span>택배기사</span></li>
                    <li><span>계곡정비사업</span></li>
                    <li><span>무량판구조</span></li>
                    <li><span>택배차량</span></li>
                    <li><span>청학밸리리조트</span></li>
                    <li><span>국제구조</span></li>
                    <li><span>휴먼북</span></li>
                    <li><span>계곡하천정비사업</span></li>
                    <li><span>남양주사랑상품권</span></li>
                    <li><span>장애인복지</span></li>
                    <li><span>창동차량기지</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>아이스팩</span></li>
                    <li><span>보강철근</span></li>
                    <li><span>정원화사업</span></li>
                    <li><span>지역화폐</span></li>
                    <li><span>고도정수처리</span></li>
                    <li><span>아리수정수센터</span></li>
                </ol>
            </div>
            `,
            오산시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>안보/사건사고</span></div>
                <ol>
                    <li><span>의류수거</span></li>
                    <li><span>경기오산경찰서</span></li>
                    <li><span>불법재산</span></li>
                    <li><span>교보자산신탁</span></li>
                    <li><span>주한미군</span></li>
                    <li><span>항공우주작전본부</span></li>
                    <li><span>만취상태</span></li>
                    <li><span>오산공군기지</span></li>
                    <li><span>차량압수</span></li>
                    <li><span>횡단보도</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>반려견훈련</span></li>
                    <li><span>한미동맹</span></li>
                    <li><span>연희동자택본체</span></li>
                    <li><span>강제추행</span></li>
                    <li><span>옷수거</span></li>
                    <li><span>유기혐의</span></li>
                    <li><span>무기징역</span></li>
                    <li><span>출산한아기</span></li>
                    <li><span>70대여성</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>문화/행정</span></div>
                <ol>
                    <li><span>국민안전체험관</span></li>
                    <li><span>죽미령평화공원</span></li>
                    <li><span>스미스부대전몰장병추도식</span></li>
                    <li><span>계곡고립탈출체험</span></li>
                    <li><span>유엔군초전기념관</span></li>
                    <li><span>평생학습도시</span></li>
                    <li><span>무량판구조</span></li>
                    <li><span>여홍이씨</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>반려동물테마파크</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>죽미령전투</span></li>
                    <li><span>관리체험시설</span></li>
                    <li><span>스미스평화관</span></li>
                    <li><span>마을교육공동체</span></li>
                    <li><span>여성친화도시</span></li>
                    <li><span>생태체험관</span></li>
                    <li><span>자매도시</span></li>
                    <li><span>아동친화도시</span></li>
                    <li><span>안전체험교육</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>지역발전</span></div>
                <ol>
                    <li><span>호반써밋테라스</span></li>
                    <li><span>오산세교지구</span></li>
                    <li><span>세교2지구</span></li>
                    <li><span>1호선</span></li>
                    <li><span>중흥S클래스</span></li>
                    <li><span>현대테라타워</span></li>
                    <li><span>동탄2신도시</span></li>
                    <li><span>국가철도망구축</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>필봉터널</span></li>
                    <li><span>세교1지구</span></li>
                    <li><span>물향기수목원</span></li>
                    <li><span>호반건설</span></li>
                    <li><span>오산역</span></li>
                    <li><span>운암뜰스마트시티</span></li>
                    <li><span>교통여건</span></li>
                    <li><span>롯데캐슬스카이</span></li>
                    <li><span>일반공급</span></li>
                    <li><span>오산운암</span></li>
                    <li><span>더샵오산엘리</span></li>
                </ol>
            </div>
            `,
            화성시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>지역발전/기업</span></div>
                <ol>
                    <li><span>동탄2신도시</span></li>
                    <li><span>세상동탄파크아너스</span></li>
                    <li><span>화성종합경기타운</span></li>
                    <li><span>규모조성</span></li>
                    <li><span>공공임대주택</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>청약접수</span></li>
                    <li><span>동탄테크노밸리</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>동탄호수공원</span></li>
                    <li><span>삼성전자화성</span></li>
                    <li><span>1호선</span></li>
                    <li><span>주거형오피스텔</span></li>
                    <li><span>주거문화타운</span></li>
                    <li><span>현대기아차</span></li>
                    <li><span>남양기술연구소</span></li>
                    <li><span>분양관계자</span></li>
                    <li><span>공공지원민간</span></li>
                    <li><span>봉담2지구</span></li>
                    <li><span>봉담자이</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
                <ol>
                    <li><span>전회장</span></li>
                    <li><span>연쇄살인사건</span></li>
                    <li><span>8차사건</span></li>
                    <li><span>전세사기피해</span></li>
                    <li><span>경찰관계자</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>이춘재연쇄살인</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>무기징역</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>피해아동</span></li>
                    <li><span>전세보증금</span></li>
                    <li><span>의식불명상태</span></li>
                    <li><span>살인사건</span></li>
                    <li><span>비상탈출</span></li>
                    <li><span>허위자백</span></li>
                    <li><span>전세사기의심</span></li>
                    <li><span>아동학대범죄</span></li>
                    <li><span>공장불</span></li>
                    <li><span>자원순환시설</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정</span></div>
                <ol>
                    <li><span>곤충자원센터</span></li>
                    <li><span>전기차전용공장</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>SK지오센트릭</span></li>
                    <li><span>원전오염수</span></li>
                    <li><span>무량판구조</span></li>
                    <li><span>군공항이전</span></li>
                    <li><span>사용후배터리</span></li>
                    <li><span>자동차산업</span></li>
                    <li><span>무상교통</span></li>
                    <li><span>반입총량</span></li>
                    <li><span>복합지원센터</span></li>
                    <li><span>함백산추모공원</span></li>
                    <li><span>국내전기차분야</span></li>
                    <li><span>소공인복합</span></li>
                    <li><span>유충발견</span></li>
                    <li><span>지역화폐</span></li>
                    <li><span>맞춤형전기차</span></li>
                    <li><span>전기차전용플랫폼</span></li>
                    <li><span>평생학습도시</span></li>
                </ol>
            </div>
            `,
            시흥시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>지역활성화</span></div>
                <ol>
                    <li><span>배곧신도시</span></li>
                    <li><span>갯골생태공원</span></li>
                    <li><span>멀티테크노밸리</span></li>
                    <li><span>웨이브파크</span></li>
                    <li><span>시흥장형퍼스트</span></li>
                    <li><span>공공주택지구</span></li>
                    <li><span>생활형숙박</span></li>
                    <li><span>배곡대교</span></li>
                    <li><span>웨이브파크</span></li>
                    <li><span>호반써밋</span></li>
                    <li><span>월곶판교</span></li>
                    <li><span>세계최대규모</span></li>
                    <li><span>생활숙박시설</span></li>
                    <li><span>인공서핑장</span></li>
                    <li><span>무인이동체</span></li>
                    <li><span>인공서핑시설</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>배곧지구</span></li>
                    <li><span>1호선</span></li>
                    <li><span>시흥프리미엄아울렛</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>부동산투기/사건사고</span></div>
                <ol>
                    <li><span>투기의혹제기</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>땅투기의혹</span></li>
                    <li><span>경찰관계자</span></li>
                    <li><span>광명시흥신도시</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>한국토지주택공사LH직원</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>광명시흥지구</span></li>
                    <li><span>의혹관련</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>토지매입</span></li>
                    <li><span>변호사모임</span></li>
                    <li><span>정부합동조사단</span></li>
                    <li><span>토지거래</span></li>
                    <li><span>시흥시과림동</span></li>
                    <li><span>발달장애</span></li>
                    <li><span>현행범체포</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>신도시투기의혹</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정/기업</span></div>
                <ol>
                    <li><span>미래폐자원거점수거센터</span></li>
                    <li><span>글로벌바이오인력양성</span></li>
                    <li><span>희망매각</span></li>
                    <li><span>중소벤처기업자산거래</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>해양레저관광</span></li>
                    <li><span>아쿠아펫</span></li>
                    <li><span>웨이브파크</span></li>
                    <li><span>유충이발견</span></li>
                    <li><span>멀티테크노밸리</span></li>
                    <li><span>자율주행모빌리티서비스</span></li>
                    <li><span>주민참여예산</span></li>
                    <li><span>지역자활센터</span></li>
                    <li><span>탈북민</span></li>
                    <li><span>무인이동체</span></li>
                    <li><span>지역화폐</span></li>
                    <li><span>배터리재활용</span></li>
                    <li><span>수돗물유충</span></li>
                    <li><span>생활치료센터</span></li>
                    <li><span>세계보건기구</span></li>
                </ol>
            </div>
            `,
            군포시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>한국복합물류취업특혜</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>아파트화재현장</span></li>
                    <li><span>경찰관계자</span></li>
                    <li><span>중앙지검반부패수사</span></li>
                    <li><span>아파트12층</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>살해혐의</span></li>
                    <li><span>복합물류취업</span></li>
                    <li><span>전동킥보드</span></li>
                    <li><span>합동감식</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>사상자발생</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>우레탄폼</span></li>
                    <li><span>지상추락</span></li>
                    <li><span>옥상계단</span></li>
                    <li><span>취업청탁의혹</span></li>
                    <li><span>옥상대피</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>도시정비/산업/문화</span></div>
                <ol>
                    <li><span>토지임대부주택</span></li>
                    <li><span>스마트풀필먼트센터</span></li>
                    <li><span>군포시철쭉동산</span></li>
                    <li><span>전기화물차</span></li>
                    <li><span>만개철쭉</span></li>
                    <li><span>전기택배차</span></li>
                    <li><span>산본로데오거리</span></li>
                    <li><span>환매조건부주택</span></li>
                    <li><span>고정노선운송로봇</span></li>
                    <li><span>재정비사업신속추진</span></li>
                    <li><span>리모델링사업</span></li>
                    <li><span>산본신도시</span></li>
                    <li><span>4호선</span></li>
                    <li><span>1기신도시재정비사업</span></li>
                    <li><span>트리아츠</span></li>
                    <li><span>풀필먼트서비스</span></li>
                    <li><span>철쭉구간</span></li>
                    <li><span>정비사업</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>도시정비사업</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정/복지</span></div>
                <ol>
                    <li><span>충전인프라품질검증센터</span></li>
                    <li><span>청소년자립지원관</span></li>
                    <li><span>교육지원청</span></li>
                    <li><span>주사랑공동체</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>전기차충전인프라</span></li>
                    <li><span>군포의왕</span></li>
                    <li><span>플러그하이버스</span></li>
                    <li><span>위기청소년</span></li>
                    <li><span>출생신고</span></li>
                    <li><span>아동친화도시</span></li>
                    <li><span>대출규제</span></li>
                    <li><span>주민참여예산</span></li>
                    <li><span>회원학생</span></li>
                    <li><span>포도농가</span></li>
                    <li><span>포도봉지</span></li>
                    <li><span>수도권비규제</span></li>
                    <li><span>수소모빌리티</span></li>
                    <li><span>청소년청년정책</span></li>
                    <li><span>1인가구</span></li>
                </ol>
            </div>
            `,
            하남시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>지역발전/기업</span></div>
                <ol>
                    <li><span>스타필드</span></li>
                    <li><span>국가철도망구축계획</span></li>
                    <li><span>사전청약</span></li>
                    <li><span>5호선</span></li>
                    <li><span>하남교산</span></li>
                    <li><span>미사강변도시</span></li>
                    <li><span>9호선</span></li>
                    <li><span>지식정보타운</span></li>
                    <li><span>스타월드조성</span></li>
                    <li><span>위례신사선</span></li>
                    <li><span>공공주택지구</span></li>
                    <li><span>신혼부부</span></li>
                    <li><span>신세계프라퍼티</span></li>
                    <li><span>배후수요</span></li>
                    <li><span>주거용오피스텔</span></li>
                    <li><span>미사경정공원</span></li>
                    <li><span>미사역</span></li>
                    <li><span>신혼희망타운</span></li>
                    <li><span>위례신도시</span></li>
                    <li><span>신도시사전청약</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
                <ol>
                    <li><span>전회장</span></li>
                    <li><span>팔당댐</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>스타모빌리티회장</span></li>
                    <li><span>서울양평고속도로</span></li>
                    <li><span>인근청량산</span></li>
                    <li><span>팔당대교</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>결심공판</span></li>
                    <li><span>공용물건손상혐의</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>회장도주</span></li>
                    <li><span>성폭행혐의</span></li>
                    <li><span>물방류</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>여사일가</span></li>
                    <li><span>특정경제범죄</span></li>
                    <li><span>범인도피죄</span></li>
                    <li><span>호우경보</span></li>
                    <li><span>화재원인</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정</span></div>
                <ol>
                    <li><span>마루공원장례식장</span></li>
                    <li><span>구조대장빈소</span></li>
                    <li><span>물류센터화재</span></li>
                    <li><span>주한미군지위협정</span></li>
                    <li><span>주민소환투표</span></li>
                    <li><span>한국판뉴딜현장</span></li>
                    <li><span>지역화폐</span></li>
                    <li><span>폐기물처리시설</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>안전관제서비스</span></li>
                    <li><span>연소확대저지</span></li>
                    <li><span>SOFA합동</span></li>
                    <li><span>여성친화도시</span></li>
                    <li><span>용산미군기지</span></li>
                    <li><span>고도정수처리장</span></li>
                    <li><span>정수처리시설</span></li>
                    <li><span>산후조리비</span></li>
                    <li><span>국가물산업클러스터</span></li>
                    <li><span>대장추모</span></li>
                    <li><span>녹조근정훈장</span></li>
                </ol>
            </div>
            `,
            파주시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>아프리카돼지열병</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>요양급여</span></li>
                    <li><span>윤의원</span></li>
                    <li><span>회삿돈</span></li>
                    <li><span>택시기사</span></li>
                    <li><span>살해혐의</span></li>
                    <li><span>특정경제범죄</span></li>
                    <li><span>정의기역연대</span></li>
                    <li><span>50대여성</span></li>
                    <li><span>운영관여</span></li>
                    <li><span>병원운영</span></li>
                    <li><span>횡령혐의</span></li>
                    <li><span>법정구속</span></li>
                    <li><span>유기혐의</span></li>
                    <li><span>여자친구</span></li>
                    <li><span>일본군위안부피해자</span></li>
                    <li><span>야생멧돼지</span></li>
                    <li><span>횡령금</span></li>
                    <li><span>위안부피해자쉼터</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>남북관계/행정</span></div>
                <ol>
                    <li><span>대북전단살포</span></li>
                    <li><span>자유북한운동연합</span></li>
                    <li><span>오두산통일전망대</span></li>
                    <li><span>남북공동연락사무소</span></li>
                    <li><span>북한무인기</span></li>
                    <li><span>남북산림협력</span></li>
                    <li><span>탈북민</span></li>
                    <li><span>남북출입사무소</span></li>
                    <li><span>국방부유해발굴</span></li>
                    <li><span>남북교류협력</span></li>
                    <li><span>민간인통제</span></li>
                    <li><span>발굴감시단</span></li>
                    <li><span>출입사무소북단</span></li>
                    <li><span>공동연락사무소폭파</span></li>
                    <li><span>실향민가족</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>대형풍선</span></li>
                    <li><span>캠프그리브스</span></li>
                    <li><span>성매매집결지</span></li>
                    <li><span>영공침범</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>지역활성화</span></div>
                <ol>
                    <li><span>운정신도시</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>운정3지구</span></li>
                    <li><span>오두산통일전망대</span></li>
                    <li><span>경의중앙선</span></li>
                    <li><span>운정호수공원</span></li>
                    <li><span>국립민속박물관</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>임진각평화</span></li>
                    <li><span>스테이트더운정</span></li>
                    <li><span>서울문산고속도로</span></li>
                    <li><span>파주메디컬클러스터</span></li>
                    <li><span>중흥S클래스</span></li>
                    <li><span>호반써밋</span></li>
                    <li><span>평화누리공원</span></li>
                    <li><span>조정대상지역지정</span></li>
                    <li><span>2순환고속도로</span></li>
                    <li><span>운정테크노밸리</span></li>
                    <li><span>공공자원민간</span></li>
                    <li><span>3호선</span></li>
                </ol>
            </div>
            `,
            여주시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>안보/사건사고</span></div>
                <ol>
                    <li><span>예방적살처분</span></li>
                    <li><span>중앙사고수습본부</span></li>
                    <li><span>한미연합사단</span></li>
                    <li><span>가금농장</span></li>
                    <li><span>합동도하훈련</span></li>
                    <li><span>여주산란계농장</span></li>
                    <li><span>병원성조류인플루엔자</span></li>
                    <li><span>육용오리농장</span></li>
                    <li><span>60대여성</span></li>
                    <li><span>항원검출</span></li>
                    <li><span>확진판정</span></li>
                    <li><span>해당농장</span></li>
                    <li><span>고병원성</span></li>
                    <li><span>조류인플루엔자중앙사고</span></li>
                    <li><span>머리어깨</span></li>
                    <li><span>60대노인</span></li>
                    <li><span>병원성여부</span></li>
                    <li><span>일제검사</span></li>
                    <li><span>청와대국민청원</span></li>
                    <li><span>10대들</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>지역특성화/사업</span></div>
                <ol>
                    <li><span>세종대왕</span></li>
                    <li><span>대표품종진상벼</span></li>
                    <li><span>세종대왕릉</span></li>
                    <li><span>한글날</span></li>
                    <li><span>유색벼</span></li>
                    <li><span>경기문화창조허브</span></li>
                    <li><span>흑도황도홍도백도</span></li>
                    <li><span>숭모제전</span></li>
                    <li><span>유색벼흑도황도</span></li>
                    <li><span>대왕역인근</span></li>
                    <li><span>반려동물테마파크</span></li>
                    <li><span>달궤도선</span></li>
                    <li><span>반도건설</span></li>
                    <li><span>쌀홍보</span></li>
                    <li><span>효종대왕릉</span></li>
                    <li><span>여주프리미엄아울렛</span></li>
                    <li><span>여주역세권</span></li>
                    <li><span>조선왕릉문화제</span></li>
                    <li><span>심우주안테나</span></li>
                    <li><span>복합문화공간</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정/복지</span></div>
                <ol>
                    <li><span>발달장애청년</span></li>
                    <li><span>푸르메소셜팜</span></li>
                    <li><span>봉사활동</span></li>
                    <li><span>가축분뇨공동자원</span></li>
                    <li><span>자원화시설</span></li>
                    <li><span>용인반도체클러스터</span></li>
                    <li><span>복합행정타운</span></li>
                    <li><span>스마트팜</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>천사의재능</span></li>
                    <li><span>농촌일손</span></li>
                    <li><span>공공산후조리원</span></li>
                    <li><span>행정타운건립</span></li>
                    <li><span>발달장애인</span></li>
                    <li><span>농협생명</span></li>
                    <li><span>장애인고용</span></li>
                    <li><span>기업유치</span></li>
                    <li><span>워케이션</span></li>
                    <li><span>청사건립</span></li>
                    <li><span>여주사랑카드</span></li>
                </ol>
            </div>
            `,
            이천시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>덕평물류창고화재</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>물류창고공사장</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>공공운수노조화물연대</span></li>
                    <li><span>쿠팡물류센터화재</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>서희청소년문화센터</span></li>
                    <li><span>민주노총공공운수</span></li>
                    <li><span>이천물류창고</span></li>
                    <li><span>경찰관계자</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>한익스프레스물류창고</span></li>
                    <li><span>구조대장</span></li>
                    <li><span>화재합동분향소</span></li>
                    <li><span>화재진압</span></li>
                    <li><span>중대재해기업처벌</span></li>
                    <li><span>구조작업</span></li>
                    <li><span>우레탄폼</span></li>
                    <li><span>소속화물차주</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>지역특성화/기업</span></div>
                <ol>
                    <li><span>SK하이닉스</span></li>
                    <li><span>임금님표</span></li>
                    <li><span>청년희망</span></li>
                    <li><span>뷰티레스트</span></li>
                    <li><span>SK그룹</span></li>
                    <li><span>스마트팜</span></li>
                    <li><span>캠퍼스방문</span></li>
                    <li><span>벼베기행사</span></li>
                    <li><span>중부내륙철도</span></li>
                    <li><span>모내기행사</span></li>
                    <li><span>수제맥주</span></li>
                    <li><span>재너시스</span></li>
                    <li><span>용인반도체클러스터</span></li>
                    <li><span>소재부품장비산업</span></li>
                    <li><span>전국첫벼</span></li>
                    <li><span>전국첫모내기</span></li>
                    <li><span>반도체산업</span></li>
                    <li><span>농업테마공원</span></li>
                    <li><span>무지개가래떡</span></li>
                    <li><span>농업테마공원</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>국방</span></div>
                <ol>
                    <li><span>국군의날기념식</span></li>
                    <li><span>육군특수전사령부</span></li>
                    <li><span>국군교도소</span></li>
                    <li><span>대규모항공작전훈련</span></li>
                    <li><span>육군항공사령부</span></li>
                    <li><span>아파치가디언공격헬기</span></li>
                    <li><span>특공무술경연대회</span></li>
                    <li><span>국민생명</span></li>
                    <li><span>미래국군</span></li>
                    <li><span>군관계자</span></li>
                    <li><span>특전사</span></li>
                    <li><span>탑헬리건</span></li>
                    <li><span>시누크헬기</span></li>
                    <li><span>도서지역</span></li>
                    <li><span>드론작전사령부</span></li>
                    <li><span>육군형무소</span></li>
                    <li><span>호흡감지센서</span></li>
                    <li><span>특수전사령부헬기장</span></li>
                    <li><span>공항시설</span></li>
                    <li><span>국군장병</span></li>
                </ol>
            </div>
            `,
            안성시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>윤당선인</span></li>
                    <li><span>한국정신대문제대책협의</span></li>
                    <li><span>윤의원</span></li>
                    <li><span>정의기억연대</span></li>
                    <li><span>일본군위안부피해자</span></li>
                    <li><span>자승스님</span></li>
                    <li><span>공동모금회</span></li>
                    <li><span>물류창고신축</span></li>
                    <li><span>안성쉼터</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>공직선거법위반</span></li>
                    <li><span>위안부피해자쉼터</span></li>
                    <li><span>힐링센터</span></li>
                    <li><span>창고신축공사현장</span></li>
                    <li><span>당선무효</span></li>
                    <li><span>개인계좌</span></li>
                    <li><span>선거법위반혐의</span></li>
                    <li><span>저온물류창고</span></li>
                    <li><span>중대재해처벌법</span></li>
                    <li><span>붕괴사고</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>지역사회/행정</span></div>
                <ol>
                    <li><span>과수화상병</span></li>
                    <li><span>농협청년농부사관학교</span></li>
                    <li><span>스타필드안성</span></li>
                    <li><span>미분양관리지역</span></li>
                    <li><span>쌍용더플래티넘</span></li>
                    <li><span>규제지역</span></li>
                    <li><span>용인반도체클러스터</span></li>
                    <li><span>플래티넘프리미어</span></li>
                    <li><span>탈북민</span></li>
                    <li><span>규제지역해제</span></li>
                    <li><span>국가관리묘역</span></li>
                    <li><span>민간임대아파트</span></li>
                    <li><span>수도권내륙선</span></li>
                    <li><span>평택제천고속도로</span></li>
                    <li><span>창업농지원</span></li>
                    <li><span>로열파크씨티</span></li>
                    <li><span>LS미래원</span></li>
                    <li><span>국가첨단전략산업</span></li>
                    <li><span>서울세종고속도로</span></li>
                    <li><span>조정대상지역해제</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>날씨/재해</span></div>
                <ol>
                    <li><span>피해발생</span></li>
                    <li><span>특별재난지역선포</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>산사태발생</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>산사태위기경보</span></li>
                    <li><span>복구작업</span></li>
                    <li><span>호우경보</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>폭염특보</span></li>
                    <li><span>장마전선</span></li>
                    <li><span>호우특보</span></li>
                    <li><span>비피해</span></li>
                    <li><span>4호태풍</span></li>
                    <li><span>집중호우</span></li>
                    <li><span>물폭탄</span></li>
                    <li><span>응급복구</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>호우피해</span></li>
                    <li><span>산사태취약지역</span></li>
                </ol>
            </div>
            `,
            김포시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>교통/지역발전/산업</span></div>
                <ol>
                    <li><span>김포시서울편입</span></li>
                    <li><span>김포골드라인</span></li>
                    <li><span>5호선연장</span></li>
                    <li><span>국가철도망구축계획</span></li>
                    <li><span>규제지역</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>김포한강</span></li>
                    <li><span>김포건담교통시민연대</span></li>
                    <li><span>조정대상지역지정</span></li>
                    <li><span>김포공항이전</span></li>
                    <li><span>골드라인혼잡도</span></li>
                    <li><span>세상시티풍무역</span></li>
                    <li><span>행정구역</span></li>
                    <li><span>서부권광역급행철도</span></li>
                    <li><span>새벽배송</span></li>
                    <li><span>9호선</span></li>
                    <li><span>70번버스</span></li>
                    <li><span>부천종합운동장</span></li>
                    <li><span>김포한강선</span></li>
                    <li><span>아파트값</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
                <ol>
                    <li><span>경기김포경찰서</span></li>
                    <li><span>경찰관계자</span></li>
                    <li><span>택배노조</span></li>
                    <li><span>아프리카돼지열병</span></li>
                    <li><span>택배대리점주</span></li>
                    <li><span>경찰조사</span></li>
                    <li><span>사체유기혐의</span></li>
                    <li><span>택배기사</span></li>
                    <li><span>텃밭암매장</span></li>
                    <li><span>현행범체포</span></li>
                    <li><span>암매장혐의</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>횡단보도</span></li>
                    <li><span>폭행혐의</span></li>
                    <li><span>지적장애</span></li>
                    <li><span>도로교통법</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>40대친모</span></li>
                    <li><span>입주민전용출입구</span></li>
                    <li><span>민식이법</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>북한/안보</span></div>
                <ol>
                    <li><span>북한무인기</span></li>
                    <li><span>대북전단살포</span></li>
                    <li><span>자유북한운동연합</span></li>
                    <li><span>탈북민</span></li>
                    <li><span>영공침범</span></li>
                    <li><span>염하수로항행</span></li>
                    <li><span>해병대2사단</span></li>
                    <li><span>남북교류협력법</span></li>
                    <li><span>군당국</span></li>
                    <li><span>평화의물길</span></li>
                    <li><span>대형풍선</span></li>
                    <li><span>접경지역주민</span></li>
                    <li><span>한인비행학교</span></li>
                    <li><span>무인기추정</span></li>
                    <li><span>경고방송</span></li>
                    <li><span>경고사격</span></li>
                    <li><span>남북군사협의</span></li>
                    <li><span>대북전단금지법</span></li>
                    <li><span>1달러지폐</span></li>
                    <li><span>군사경찰</span></li>
                </ol>
            </div>
            `,
            광주시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고/재해</span></div>
                <ol>
                    <li><span>일본군위안부피해자</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>불교조계종</span></li>
                    <li><span>산사태발생</span></li>
                    <li><span>김전비서관</span></li>
                    <li><span>사회복지법인</span></li>
                    <li><span>내부고발직원</span></li>
                    <li><span>위안부피해할머니</span></li>
                    <li><span>반려견</span></li>
                    <li><span>집법인</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>정의기억연대</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>공익제보자</span></li>
                    <li><span>부동산투기의혹</span></li>
                    <li><span>집시설</span></li>
                    <li><span>회삿돈</span></li>
                    <li><span>위안부피해자지원</span></li>
                    <li><span>침수피해</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>지역개발/문화</span></div>
                <ol>
                    <li><span>힐스테이트</span></li>
                    <li><span>국가철도망구축계획</span></li>
                    <li><span>광주복선전철</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>중흥S클래스</span></li>
                    <li><span>경강선경기</span></li>
                    <li><span>서울세종고속도로</span></li>
                    <li><span>판교테크노밸리</span></li>
                    <li><span>세계관악컨퍼런스</span></li>
                    <li><span>구간정체</span></li>
                    <li><span>더샵오포센트리</span></li>
                    <li><span>두산위브광주센트럴</span></li>
                    <li><span>고산2지구</span></li>
                    <li><span>태전지구</span></li>
                    <li><span>경강선연장사업</span></li>
                    <li><span>경기광주분기점</span></li>
                    <li><span>고산지구</span></li>
                    <li><span>도로연결</span></li>
                    <li><span>파크비스타</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정/노동</span></div>
                <ol>
                    <li><span>일본군위안부피해자</span></li>
                    <li><span>민주노총서비스연맹</span></li>
                    <li><span>전국택배노동조합</span></li>
                    <li><span>성남광주대단지사건</span></li>
                    <li><span>학생인권조례</span></li>
                    <li><span>무기한총파업</span></li>
                    <li><span>기림의날</span></li>
                    <li><span>광주대단지민권운동</span></li>
                    <li><span>곤지암메가허브터미널</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>택배노동자</span></li>
                    <li><span>민주노총전국택배</span></li>
                    <li><span>택배노조</span></li>
                    <li><span>에듀테크</span></li>
                    <li><span>반려동물</span></li>
                    <li><span>일본정부</span></li>
                    <li><span>노동자과로사방지</span></li>
                    <li><span>아동친화도시</span></li>
                    <li><span>광주사랑카드</span></li>
                    <li><span>택배기사</span></li>
                </ol>
            </div>
            `,
            포천시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>아프리카돼지열병</span></li>
                    <li><span>부동산투기의혹</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>투기사범특별수사대</span></li>
                    <li><span>역사예정지인근</span></li>
                    <li><span>내부정보이용</span></li>
                    <li><span>돼지농장</span></li>
                    <li><span>건물매입</span></li>
                    <li><span>토지건물</span></li>
                    <li><span>베어스타운스키장</span></li>
                    <li><span>부동산투기사범</span></li>
                    <li><span>조립식건물</span></li>
                    <li><span>외국인근로자</span></li>
                    <li><span>유기혐의</span></li>
                    <li><span>신용대출</span></li>
                    <li><span>야생멧돼지</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>시신유기</span></li>
                    <li><span>홍수주의보</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>안보</span></div>
                <ol>
                    <li><span>연합합동화력격멸훈련</span></li>
                    <li><span>포천승진훈련장</span></li>
                    <li><span>주한미군</span></li>
                    <li><span>과학화훈련장</span></li>
                    <li><span>한미연합제병협동</span></li>
                    <li><span>드론작전사령부</span></li>
                    <li><span>헬기사격훈련</span></li>
                    <li><span>아파치헬기사격</span></li>
                    <li><span>한미동맹</span></li>
                    <li><span>기동화력시범</span></li>
                    <li><span>미군장갑차</span></li>
                    <li><span>자유의방패</span></li>
                    <li><span>한미연합사단</span></li>
                    <li><span>대한민국방위산업</span></li>
                    <li><span>작전수행능력</span></li>
                    <li><span>한미연합연습</span></li>
                    <li><span>대규모기동화력</span></li>
                    <li><span>의무후송헬기</span></li>
                    <li><span>실사격훈련</span></li>
                    <li><span>방위산업전</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>지역발전/관광</span></div>
                <ol>
                    <li><span>한탄강세계지질공원</span></li>
                    <li><span>국립수목원</span></li>
                    <li><span>스마트팜</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>포천모아엘가리더스</span></li>
                    <li><span>비둘기낭</span></li>
                    <li><span>공원인증</span></li>
                    <li><span>생물권보전</span></li>
                    <li><span>포천국립수목원</span></li>
                    <li><span>광릉숲</span></li>
                    <li><span>보전지역</span></li>
                    <li><span>금강송</span></li>
                    <li><span>태봉공원</span></li>
                    <li><span>주상절리</span></li>
                    <li><span>금호어울림센트럴</span></li>
                    <li><span>자유화구역</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>지질학적가치</span></li>
                    <li><span>세종포천고속도로</span></li>
                    <li><span>드론특별</span></li>
                </ol>
            </div>
            `,
            연천군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>필승교수위</span></li>
                    <li><span>대북전단살포</span></li>
                    <li><span>재난안전대책본부</span></li>
                    <li><span>김전장관</span></li>
                    <li><span>황강댐방류</span></li>
                    <li><span>군남홍수조절댐</span></li>
                    <li><span>아프리카돼지</span></li>
                    <li><span>황강댐수문</span></li>
                    <li><span>돼지열병</span></li>
                    <li><span>군남댐수위</span></li>
                    <li><span>사전통보</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>야생멧돼지</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>최북단필승교</span></li>
                    <li><span>장마전선</span></li>
                    <li><span>무단방류</span></li>
                    <li><span>접경지역주민</span></li>
                    <li><span>북한황강댐</span></li>
                    <li><span>접경지역위기대응</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>문화/지역개발</span></div>
                <ol>
                    <li><span>전곡역제일풍경채리버파크</span></li>
                    <li><span>한탄강세계지질공원</span></li>
                    <li><span>1호선연장</span></li>
                    <li><span>재인폭포</span></li>
                    <li><span>역고드름</span></li>
                    <li><span>디지털관광주민증</span></li>
                    <li><span>참전용사</span></li>
                    <li><span>연천웰스하임</span></li>
                    <li><span>세상연천</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>추모의벽</span></li>
                    <li><span>평화의길</span></li>
                    <li><span>국가지정문화재</span></li>
                    <li><span>3호선</span></li>
                    <li><span>경원선폐터널</span></li>
                    <li><span>레클리스</span></li>
                    <li><span>현무암주상절리</span></li>
                    <li><span>지정문화재명승</span></li>
                    <li><span>두리미류도래지</span></li>
                    <li><span>개발호재</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정/안보</span></div>
                <ol>
                    <li><span>윤일병</span></li>
                    <li><span>한반도통일미래센터</span></li>
                    <li><span>인구감소지역</span></li>
                    <li><span>멸종위기야생생물</span></li>
                    <li><span>가혹행위</span></li>
                    <li><span>SK에코플랜트</span></li>
                    <li><span>유충발견</span></li>
                    <li><span>배상책임</span></li>
                    <li><span>군인권센터</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>자유의방패</span></li>
                    <li><span>이번훈련</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>선임병</span></li>
                    <li><span>멸종위기종</span></li>
                    <li><span>정수장</span></li>
                    <li><span>국립생태원</span></li>
                    <li><span>스마트팜</span></li>
                    <li><span>농촌기본소득</span></li>
                    <li><span>깔따구유충</span></li>
                </ol>
            </div>
            `,
            양평군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>안데르센공원묘원</span></li>
                    <li><span>서울양평고속도로</span></li>
                    <li><span>정인양추모</span></li>
                    <li><span>양평공흥지구</span></li>
                    <li><span>고속도로사업</span></li>
                    <li><span>양부모학대</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>여사일가</span></li>
                    <li><span>의혹제기</span></li>
                    <li><span>국토교통부장관</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>특혜의혹</span></li>
                    <li><span>구속</span></li>
                    <li><span>대안노선</span></li>
                    <li><span>경찰관계자</span></li>
                    <li><span>동물보호법위반</span></li>
                    <li><span>반려동물</span></li>
                    <li><span>학대생후</span></li>
                    <li><span>개사체</span></li>
                    <li><span>아동학대치사</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>지역개발/기업</span></div>
                <ol>
                    <li><span>비규제지역</span></li>
                    <li><span>반도유보라</span></li>
                    <li><span>경의중앙선</span></li>
                    <li><span>스마트농업지원센터</span></li>
                    <li><span>양평역한라비발디</span></li>
                    <li><span>더샵양평리버포레</span></li>
                    <li><span>국가철도망구축</span></li>
                    <li><span>양평휴먼빌센트럴</span></li>
                    <li><span>반도건설</span></li>
                    <li><span>양평다문지구</span></li>
                    <li><span>포레나양평</span></li>
                    <li><span>양평DTR점</span></li>
                    <li><span>스마트팜</span></li>
                    <li><span>규모조성</span></li>
                    <li><span>양평군세미원</span></li>
                    <li><span>2순환고속도로</span></li>
                    <li><span>양평간고속도로</span></li>
                    <li><span>연꽃감상</span></li>
                    <li><span>청약경쟁</span></li>
                    <li><span>일반분양</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>환경/행정</span></div>
                <ol>
                    <li><span>점심시간휴무</span></li>
                    <li><span>소아청소년과의원</span></li>
                    <li><span>한국투자꿈도서관</span></li>
                    <li><span>유해야생동물</span></li>
                    <li><span>하늘숲추모원</span></li>
                    <li><span>국가산림문화자산</span></li>
                    <li><span>치유의숲</span></li>
                    <li><span>임시조립주택</span></li>
                    <li><span>국립생물자원</span></li>
                    <li><span>공설화장시설</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>정신장애</span></li>
                    <li><span>동물지정</span></li>
                    <li><span>사회공헌사업</span></li>
                    <li><span>양평이아소</span></li>
                    <li><span>생물자원관</span></li>
                    <li><span>아소전원마을</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>자립준비청년</span></li>
                    <li><span>개체수</span></li>
                </ol>
            </div>
            `,
            가평군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>보험사기방지특별법위반</span></li>
                    <li><span>가평군용소계곡</span></li>
                    <li><span>살해혐의</span></li>
                    <li><span>계곡살인사건</span></li>
                    <li><span>생명보험금</span></li>
                    <li><span>구속기소</span></li>
                    <li><span>살인미수보험사기</span></li>
                    <li><span>계곡남편</span></li>
                    <li><span>살인미수</span></li>
                    <li><span>무기징역</span></li>
                    <li><span>다이빙강요</span></li>
                    <li><span>복어피</span></li>
                    <li><span>공개수배</span></li>
                    <li><span>낚시터물</span></li>
                    <li><span>남자친구</span></li>
                    <li><span>영장실질심사</span></li>
                    <li><span>남편살해</span></li>
                    <li><span>사망보험금</span></li>
                    <li><span>가스라이팅</span></li>
                    <li><span>경기도고양시삼송역</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>관광/행사</span></div>
                <ol>
                    <li><span>쥐스탱트뤼도캐나다총리</span></li>
                    <li><span>가평전투</span></li>
                    <li><span>영연방참전기념비</span></li>
                    <li><span>자전거동맹길</span></li>
                    <li><span>캠핑요리축제</span></li>
                    <li><span>캐나다전투기념비</span></li>
                    <li><span>북한강</span></li>
                    <li><span>자라섬오토캠핑장</span></li>
                    <li><span>유엔참전국자전거동맹길</span></li>
                    <li><span>가평군자라섬</span></li>
                    <li><span>피노키오와다빈치</span></li>
                    <li><span>종합체육대회</span></li>
                    <li><span>아침고요수목원</span></li>
                    <li><span>자라섬재즈페스티벌</span></li>
                    <li><span>섬남도꽃</span></li>
                    <li><span>워케이션</span></li>
                    <li><span>명품계곡길</span></li>
                    <li><span>이탈리아마을</span></li>
                    <li><span>이슬라이브페스티벌</span></li>
                    <li><span>가평전투기념식</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정/부동산</span></div>
                <ol>
                    <li><span>공동형종합장사시설건립</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>가평퍼스트원</span></li>
                    <li><span>인구감소지역</span></li>
                    <li><span>주소기반드론배송</span></li>
                    <li><span>지방소멸대응</span></li>
                    <li><span>드론배송서비스</span></li>
                    <li><span>세계평화통일가정연합</span></li>
                    <li><span>가평설악디엘</span></li>
                    <li><span>드론배달점</span></li>
                    <li><span>공동형장사</span></li>
                    <li><span>송전선로건설</span></li>
                    <li><span>비조정대상지역</span></li>
                    <li><span>불법시설물</span></li>
                    <li><span>규제지역</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>장사시설설치</span></li>
                    <li><span>소멸위험지역</span></li>
                    <li><span>창업경제타운</span></li>
                    <li><span>드론물류배송</span></li>
                </ol>
            </div>
            `,
            용인시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>테마파크/문화</span></div>
                <ol>
                    <li><span>에버랜드</span></li>
                    <li><span>삼성생명블루밍</span></li>
                    <li><span>오전경기</span></li>
                    <li><span>용인실내체육관</span></li>
                    <li><span>프로농구</span></li>
                    <li><span>한국민속촌</span></li>
                    <li><span>라이브나비체험관</span></li>
                    <li><span>여자프로농구</span></li>
                    <li><span>챔피언결정전</span></li>
                    <li><span>용인미르스타디움</span></li>
                    <li><span>용인시일자리박람회</span></li>
                    <li><span>장미에버로즈</span></li>
                    <li><span>한국호랑이</span></li>
                    <li><span>캐리비안베이</span></li>
                    <li><span>캐리비안베이파도풀</span></li>
                    <li><span>석가탄신일</span></li>
                    <li><span>머리감기체험</span></li>
                    <li><span>워터펀공연</span></li>
                    <li><span>경기도어린이박물관</span></li>
                    <li><span>놀이기구</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>부동산/지역발전</span></div>
                <ol>
                    <li><span>힐스테이트</span></li>
                    <li><span>용인반도체클러스터</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>서울세종고속도로</span></li>
                    <li><span>동탄2신도시</span></li>
                    <li><span>배후수요</span></li>
                    <li><span>수도권2순환고속도로</span></li>
                    <li><span>용인플랫폼시티</span></li>
                    <li><span>리모델링사업</span></li>
                    <li><span>층산소음저감</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>용인테크노밸리</span></li>
                    <li><span>삼성전자</span></li>
                    <li><span>판상형구조</span></li>
                    <li><span>교통호재</span></li>
                    <li><span>광교신도시</span></li>
                    <li><span>고림지구</span></li>
                    <li><span>민간임대아파트</span></li>
                    <li><span>공원특례사업</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>사건사고</span></div>
                <ol>
                    <li><span>유씨부부</span></li>
                    <li><span>아동복지법</span></li>
                    <li><span>구속기소</span></li>
                    <li><span>이모부부</span></li>
                    <li><span>유기혐의</span></li>
                    <li><span>시신훼손</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>욕조머리</span></li>
                    <li><span>중국교포</span></li>
                    <li><span>욕조물</span></li>
                    <li><span>10살짜리</span></li>
                    <li><span>뒤머리</span></li>
                    <li><span>10살조카</span></li>
                    <li><span>살해뒤</span></li>
                    <li><span>손발빨랫줄</span></li>
                    <li><span>산불대응센터</span></li>
                    <li><span>40대여성</span></li>
                    <li><span>가혹행위</span></li>
                </ol>
            </div>
            `,
            고양시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>문화/관광</span></div>
                <ol>
                    <li><span>킨텍스</span></li>
                    <li><span>CJ라이브시티</span></li>
                    <li><span>현대모터스튜디오</span></li>
                    <li><span>아웃도어캠핑레포츠페스티벌</span></li>
                    <li><span>서울모빌리티쇼</span></li>
                    <li><span>건축박람회</span></li>
                    <li><span>여성전용스포츠경기</span></li>
                    <li><span>서울국제식품산업</span></li>
                    <li><span>공공조달종합박람회</span></li>
                    <li><span>고졸인재일자리콘서트</span></li>
                    <li><span>미래차현장</span></li>
                    <li><span>페스티벌고카프</span></li>
                    <li><span>대한민국미술박람회</span></li>
                    <li><span>산업대전서울</span></li>
                    <li><span>수소사업전시회</span></li>
                    <li><span>경험형복합단지</span></li>
                    <li><span>박람회코리아나라장터</span></li>
                    <li><span>수소산업생태계</span></li>
                    <li><span>북한산국립</span></li>
                    <li><span>팝전문공연장</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>보험사기방지특별법위반</span></li>
                    <li><span>가평군용소계곡</span></li>
                    <li><span>계곡살인사건</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>화재산업</span></li>
                    <li><span>살해혐의</span></li>
                    <li><span>살인미수보험사기</span></li>
                    <li><span>초등학교교사</span></li>
                    <li><span>살인미수혐의</span></li>
                    <li><span>생명보험금</span></li>
                    <li><span>다이빙강요</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>살인사건피의자</span></li>
                    <li><span>경찰청광역수사대</span></li>
                    <li><span>오피스텔검거</span></li>
                    <li><span>복어피</span></li>
                    <li><span>배우자명의</span></li>
                    <li><span>강원양양군펜션</span></li>
                    <li><span>사망보험금</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>도시/지역개발</span></div>
                <ol>
                    <li><span>덕은지구</span></li>
                    <li><span>서울문산고속도로</span></li>
                    <li><span>3호선</span></li>
                    <li><span>아이에스BIZ타워</span></li>
                    <li><span>주거형오피스텔</span></li>
                    <li><span>경의중앙선</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>덕은리버</span></li>
                    <li><span>배후수요</span></li>
                    <li><span>향동지구</span></li>
                    <li><span>5호선</span></li>
                    <li><span>고양창릉지구</span></li>
                    <li><span>생활인프라</span></li>
                    <li><span>지축센텀가든</span></li>
                    <li><span>원당역롯데캐슬</span></li>
                    <li><span>섹션오피스</span></li>
                    <li><span>아파트단지</span></li>
                    <li><span>풍동2지구</span></li>
                    <li><span>창릉신도시</span></li>
                    <li><span>3호선신조전동차</span></li>
                </ol>
            </div>
            `,
            수원시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>문화/지역활성화</span></div>
                <ol>
                    <li><span>아쿠아플라넷광교</span></li>
                    <li><span>영통푸르지오트레센츠</span></li>
                    <li><span>삼성블루윙즈</span></li>
                    <li><span>영통푸르지오파인베르</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>배후수요</span></li>
                    <li><span>세상시티광교</span></li>
                    <li><span>1호선</span></li>
                    <li><span>경기융합타운</span></li>
                    <li><span>프로축구</span></li>
                    <li><span>수원아이파크</span></li>
                    <li><span>광교신도시</span></li>
                    <li><span>수원KT소닉붐</span></li>
                    <li><span>팔달구수원화성</span></li>
                    <li><span>주거용오피스텔</span></li>
                    <li><span>수원화성창룡문</span></li>
                    <li><span>영통아이파크캐슬</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>한국연맹회원</span></li>
                    <li><span>중흥S클래스</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
                <ol>
                    <li><span>법인카드유용의혹</span></li>
                    <li><span>공직선거법위반</span></li>
                    <li><span>태풍힌남노</span></li>
                    <li><span>변호사비대납의혹</span></li>
                    <li><span>이춘재연쇄살인</span></li>
                    <li><span>전국신천지피해자연대</span></li>
                    <li><span>차량서행</span></li>
                    <li><span>정치자금법위반</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>식중독균배양</span></li>
                    <li><span>파기환송심선고</span></li>
                    <li><span>말라리아환자</span></li>
                    <li><span>폭염특보</span></li>
                    <li><span>연쇄살인사건</span></li>
                    <li><span>대설주의보발효</span></li>
                    <li><span>20대여성</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>시신유기</span></li>
                    <li><span>경기도법인카드</span></li>
                    <li><span>강력태풍</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정/복지</span></div>
                <ol>
                    <li><span>국립농산물품질관리원</span></li>
                    <li><span>수원시자원순환센터</span></li>
                    <li><span>원산지표시점검</span></li>
                    <li><span>못골종합시장</span></li>
                    <li><span>평동새마을부녀회</span></li>
                    <li><span>수원세모녀</span></li>
                    <li><span>면접정장</span></li>
                    <li><span>육류소비증가</span></li>
                    <li><span>취업준비</span></li>
                    <li><span>영통구슈트갤러리</span></li>
                    <li><span>청나래사업</span></li>
                    <li><span>호국보훈열차</span></li>
                    <li><span>전달할삼계탕</span></li>
                    <li><span>스티로폼상자</span></li>
                    <li><span>소음피해주민</span></li>
                    <li><span>청년면접</span></li>
                    <li><span>신분당선차량기지</span></li>
                    <li><span>포장용기</span></li>
                    <li><span>배출된스티로폼</span></li>
                    <li><span>원산지위반행위</span></li>
                </ol>
            </div>
            `,
            안산시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>행정/세월호/문화</span></div>
                <ol>
                    <li><span>경기해양안전체험관</span></li>
                    <li><span>세월호참사</span></li>
                    <li><span>단원구화랑유원지</span></li>
                    <li><span>진실화해위</span></li>
                    <li><span>선감학원</span></li>
                    <li><span>아동인권침해사건</span></li>
                    <li><span>안전공원선포식</span></li>
                    <li><span>416기억식</span></li>
                    <li><span>9주기기억</span></li>
                    <li><span>민주시민교육</span></li>
                    <li><span>반월표면처리사업협동</span></li>
                    <li><span>서남봉사관</span></li>
                    <li><span>시민교육원</span></li>
                    <li><span>유해매장추정</span></li>
                    <li><span>과거사정리위원회</span></li>
                    <li><span>강제노역</span></li>
                    <li><span>유해발굴</span></li>
                    <li><span>취약계층전달</span></li>
                    <li><span>기억교실</span></li>
                    <li><span>한국근현대미술</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>사건사고/보건</span></div>
                <ol>
                    <li><span>출소</span></li>
                    <li><span>위치추적전자장치</span></li>
                    <li><span>장출혈성대장균</span></li>
                    <li><span>유튜버</span></li>
                    <li><span>12년형</span></li>
                    <li><span>성폭행범</span></li>
                    <li><span>나이지리아국적</span></li>
                    <li><span>아동성법죄자</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>안산보호관찰소</span></li>
                    <li><span>만기출소</span></li>
                    <li><span>보건당국</span></li>
                    <li><span>용혈성유독증후군</span></li>
                    <li><span>전자장치부착</span></li>
                    <li><span>경찰관계자</span></li>
                    <li><span>성폭행한혐의</span></li>
                    <li><span>해당유치원</span></li>
                    <li><span>보호감찰관</span></li>
                    <li><span>신상정보</span></li>
                    <li><span>미성년자성폭행</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>부동산/지역개발</span></div>
                <ol>
                    <li><span>반월역두산위브더센트럴</span></li>
                    <li><span>4호선</span></li>
                    <li><span>테이트라군인테라스</span></li>
                    <li><span>생활형숙박시설</span></li>
                    <li><span>생활숙박시설</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>시화호</span></li>
                    <li><span>배후수요</span></li>
                    <li><span>캠퍼스혁신파크</span></li>
                    <li><span>안산사이언스밸리</span></li>
                    <li><span>화성국제테마파크</span></li>
                    <li><span>송산그린시티</span></li>
                    <li><span>스마트제조혁신</span></li>
                    <li><span>반달섬</span></li>
                    <li><span>멀티테크노밸리</span></li>
                    <li><span>도시정비사업</span></li>
                    <li><span>안산고잔</span></li>
                    <li><span>평택시흥고속도로</span></li>
                    <li><span>스마트그린산단</span></li>
                    <li><span>웨이브파크</span></li>
                </ol>
            </div>
            `,
            부천시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>경찰관계자</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>경찰조사</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>투기의혹</span></li>
                    <li><span>전세보증금</span></li>
                    <li><span>재산피해</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>쇠구슬</span></li>
                    <li><span>현행범체포</span></li>
                    <li><span>남자친구</span></li>
                    <li><span>전자발찌</span></li>
                    <li><span>전동킥보드</span></li>
                    <li><span>전세사기</span></li>
                    <li><span>강제추행</span></li>
                    <li><span>부천대장지구</span></li>
                    <li><span>발찌훼손</span></li>
                    <li><span>여자친구</span></li>
                    <li><span>성관계</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>문화행사/지역활성화</span></div>
                <ol>
                    <li><span>한국만화박물관</span></li>
                    <li><span>도심공공주택복합사업</span></li>
                    <li><span>1호선</span></li>
                    <li><span>부천국제판타스틱영화제</span></li>
                    <li><span>부천아트센터</span></li>
                    <li><span>국가철도망구축</span></li>
                    <li><span>부천국제만화축제</span></li>
                    <li><span>7호선</span></li>
                    <li><span>세상시티</span></li>
                    <li><span>만화영상진</span></li>
                    <li><span>1인가구</span></li>
                    <li><span>도심복합사업</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>도시정비사업</span></li>
                    <li><span>공공주택지구</span></li>
                    <li><span>소규모주택정비</span></li>
                    <li><span>소사복선전철</span></li>
                    <li><span>SK그린테크노</span></li>
                    <li><span>9호선</span></li>
                    <li><span>부평역</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정</span></div>
                <ol>
                    <li><span>상병수당시범사업</span></li>
                    <li><span>시범사업지역</span></li>
                    <li><span>대기기간</span></li>
                    <li><span>주차로봇</span></li>
                    <li><span>상병수당제도</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>주차공간</span></li>
                    <li><span>상병수당신청</span></li>
                    <li><span>자원순환센터</span></li>
                    <li><span>수당지급</span></li>
                    <li><span>여성친화도시</span></li>
                    <li><span>부천페이</span></li>
                    <li><span>부상질병</span></li>
                    <li><span>지역아동센터</span></li>
                    <li><span>광역동체제</span></li>
                    <li><span>종량제봉투</span></li>
                    <li><span>스마트시티챌린지사업</span></li>
                    <li><span>최대보장기간</span></li>
                    <li><span>경기도일자리재단</span></li>
                    <li><span>근로활동불가</span></li>
                </ol>
            </div>
            `,
            성남시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고/노동</span></div>
                <ol>
                    <li><span>흉기난동사건</span></li>
                    <li><span>서현역</span></li>
                    <li><span>AK플라자</span></li>
                    <li><span>살인예고글</span></li>
                    <li><span>정자교붕괴사고</span></li>
                    <li><span>인도돌진</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>경찰관계자</span></li>
                    <li><span>분당흉기난동</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>장애발생</span></li>
                    <li><span>샤니제빵공장</span></li>
                    <li><span>SKCC판교</span></li>
                    <li><span>뇌사상태</span></li>
                    <li><span>정자교붕괴</span></li>
                    <li><span>식중독증상</span></li>
                    <li><span>20대여성</span></li>
                    <li><span>60대여성</span></li>
                    <li><span>범행동기</span></li>
                    <li><span>데이터센터화재현장</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>공직자윤리</span></div>
                <ol>
                    <li><span>화천대유</span></li>
                    <li><span>개발사업특혜의혹</span></li>
                    <li><span>대장동개발사업</span></li>
                    <li><span>의혹관련</span></li>
                    <li><span>서울중앙지검</span></li>
                    <li><span>반부패경제범죄</span></li>
                    <li><span>성남FC후원금</span></li>
                    <li><span>특혜의혹</span></li>
                    <li><span>전담수사팀</span></li>
                    <li><span>천화동인</span></li>
                    <li><span>대장동개발특혜</span></li>
                    <li><span>법인카드유용</span></li>
                    <li><span>후원금의혹</span></li>
                    <li><span>땅투기의혹</span></li>
                    <li><span>성남도시개발공사기획</span></li>
                    <li><span>반부패수사</span></li>
                    <li><span>식품연구원부지</span></li>
                    <li><span>카드유용의혹</span></li>
                    <li><span>검찰수사</span></li>
                    <li><span>후원금의혹사건</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>지역발전/행정</span></div>
                <ol>
                    <li><span>판교테크노밸리</span></li>
                    <li><span>신혼희망타운</span></li>
                    <li><span>8호선</span></li>
                    <li><span>도시정비사업</span></li>
                    <li><span>판교아이스퀘어</span></li>
                    <li><span>용인서울고속도로</span></li>
                    <li><span>산성역자이푸르지오</span></li>
                    <li><span>이편한세상금빛그랑메종</span></li>
                    <li><span>신흥2구역</span></li>
                    <li><span>민속5일</span></li>
                    <li><span>배후수요</span></li>
                    <li><span>남위례역</span></li>
                    <li><span>중대재해처벌법</span></li>
                    <li><span>홈씨씨교실</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>통합재건축</span></li>
                    <li><span>테크노밸리기업성장</span></li>
                    <li><span>1공단근린공원조성공사</span></li>
                    <li><span>종합버스터미널</span></li>
                    <li><span>공공임대주택</span></li>
                </ol>
            </div>
            `,
            안양시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>부동산/인프라</span></div>
                <ol>
                    <li><span>과천지식정보타운</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>4호선</span></li>
                    <li><span>1호선</span></li>
                    <li><span>월곶판교</span></li>
                    <li><span>평촌센텀퍼스트</span></li>
                    <li><span>안양어반포레</span></li>
                    <li><span>인덕원동탄</span></li>
                    <li><span>동탄복선전철</span></li>
                    <li><span>주거형오피스텔</span></li>
                    <li><span>생활인프라</span></li>
                    <li><span>안양역푸르지오더샵</span></li>
                    <li><span>월판선</span></li>
                    <li><span>평촌어바인퍼스트</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>판교복선전철</span></li>
                    <li><span>재개발정비사업</span></li>
                    <li><span>재건축정비사업</span></li>
                    <li><span>교통호재</span></li>
                    <li><span>정비사업</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>행정</span></div>
                <ol>
                    <li><span>노후아파트현안점검</span></li>
                    <li><span>에너지지원법관련</span></li>
                    <li><span>행정업무복합타운</span></li>
                    <li><span>공공전세주택</span></li>
                    <li><span>농립축산검역본부부지</span></li>
                    <li><span>방사성오염수해양투기반대</span></li>
                    <li><span>양묘장관계자</span></li>
                    <li><span>서민중산층주거안정지원</span></li>
                    <li><span>7단지부영아파트</span></li>
                    <li><span>대출규제</span></li>
                    <li><span>관내화단</span></li>
                    <li><span>소상공인에너지지원</span></li>
                    <li><span>복합개발용지</span></li>
                    <li><span>아파트리모델링현안</span></li>
                    <li><span>염수해양투기</span></li>
                    <li><span>꽃관리</span></li>
                    <li><span>복합체육센터</span></li>
                    <li><span>노후경유차</span></li>
                    <li><span>안양행정업무</span></li>
                    <li><span>안정지원방안</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>사건사고</span></div>
                <ol>
                    <li><span>존속상해치사혐의</span></li>
                    <li><span>경찰관계자</span></li>
                    <li><span>무속신앙</span></li>
                    <li><span>30년지기</span></li>
                    <li><span>호송버스</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>정치인재벌가</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>모친이기</span></li>
                    <li><span>차례폭행</span></li>
                    <li><span>자매범행</span></li>
                    <li><span>범행사주</span></li>
                    <li><span>아동성범죄자</span></li>
                    <li><span>존속상해교사</span></li>
                    <li><span>문자매세지</span></li>
                    <li><span>신앙의지</span></li>
                    <li><span>친모폭행</span></li>
                    <li><span>신앙심취</span></li>
                    <li><span>살해한혐의</span></li>
                    <li><span>미성년자성폭행</span></li>
                </ol>
            </div>
            `,
        },
        kangwon: {
            춘천시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>수초섬/감염병</span></div>
                <ol>
                    <li><span>인공수초섬</span></li>
                    <li><span>선박전복사고</span></li>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>경찰정</span></li>
                    <li><span>아프리카돼지열병</span></li>
                    <li><span>강원춘천시의암댐</span></li>
                    <li><span>강원춘천시의암호</span></li>
                    <li><span>의암호선박전복</span></li>
                    <li><span>수초섬고정</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>수초섬</span></li>
                    <li><span>민간고무보트</span></li>
                    <li><span>고무보트와춘천</span></li>
                    <li><span>수색작업</span></li>
                    <li><span>섬을고정</span></li>
                    <li><span>의암댐선박전복</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>경찰과소방</span></li>
                    <li><span>수초섬고박</span></li>
                    <li><span>실종자가족</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>레고랜드/관광</span></div>
                <ol>
                    <li><span>레고랜드코리아</span></li>
                    <li><span>춘천레고랜드</span></li>
                    <li><span>강원춘천시하중도레고랜드</span></li>
                    <li><span>엘리시안강촌</span></li>
                    <li><span>워케이션</span></li>
                    <li><span>놀이기구</span></li>
                    <li><span>세계태권도문화축제</span></li>
                    <li><span>글로벌테마파크</span></li>
                    <li><span>춘천마임축제</span></li>
                    <li><span>삼악산호수케이블카</span></li>
                    <li><span>어린이날</span></li>
                    <li><span>불의도시도깨비난장</span></li>
                    <li><span>춘천막국수닭갈비축제</span></li>
                    <li><span>엘리시안강촌스키장</span></li>
                    <li><span>국내첫글로벌</span></li>
                    <li><span>테마파크인레고랜드</span></li>
                    <li><span>야간개장</span></li>
                    <li><span>기구어트렉션</span></li>
                    <li><span>해적의바다</span></li>
                    <li><span>정식개장</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>지역발전/사업</span></div>
                <ol>
                    <li><span>수소에너지융복합클러스터</span></li>
                    <li><span>동서고속화철도</span></li>
                    <li><span>한국판뉴딜</span></li>
                    <li><span>디지털뉴딜</span></li>
                    <li><span>감자빵</span></li>
                    <li><span>더존비즈온강촌캠퍼스</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>과학기술정보통신부</span></li>
                    <li><span>농촌일손</span></li>
                    <li><span>수열에너지</span></li>
                    <li><span>반려동물산업</span></li>
                    <li><span>데이터댐</span></li>
                    <li><span>자체데이터센터</span></li>
                    <li><span>한국판뉴딜디지털경제</span></li>
                    <li><span>수소추출시설</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>반려동물</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>고향사랑기부금</span></li>
                    <li><span>대상자농촌지원</span></li>
                </ol>
            </div>
            `,
            원주시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고/노조</span></div>
                <ol>
                    <li><span>혐의기소</span></li>
                    <li><span>민주노총공공운수노조</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>마약음료</span></li>
                    <li><span>국민건강보험공단</span></li>
                    <li><span>혐의재판</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>일산화탄소</span></li>
                    <li><span>경찰과소방</span></li>
                    <li><span>사고경위</span></li>
                    <li><span>소금산출렁다리</span></li>
                    <li><span>1인시위</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>협박전화</span></li>
                    <li><span>실형선고</span></li>
                    <li><span>무죄선고</span></li>
                    <li><span>피해발생</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>지역발전</span></div>
                <ol>
                    <li><span>강원원주혁신도시</span></li>
                    <li><span>가명정보활용지원센터</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>원주사랑상품권</span></li>
                    <li><span>여주원주복선전철</span></li>
                    <li><span>민간공원특례사업</span></li>
                    <li><span>원주기업도시</span></li>
                    <li><span>1순위청약</span></li>
                    <li><span>드론특별자유화구역</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>미분양관리지역</span></li>
                    <li><span>지방중소도시</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>청약접수</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>청약경쟁</span></li>
                    <li><span>반도체공장유치</span></li>
                    <li><span>금융혜택</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>의료산업/감염병</span></div>
                <ol>
                    <li><span>원주세브란스기독병원</span></li>
                    <li><span>국립전문과학관</span></li>
                    <li><span>원주의료기기테크노밸리</span></li>
                    <li><span>닥터헬기운용</span></li>
                    <li><span>과학기술정보통신부</span></li>
                    <li><span>국립과학관</span></li>
                    <li><span>고병원성조류인플루엔자</span></li>
                    <li><span>원주의료기기산업</span></li>
                    <li><span>산란계농장</span></li>
                    <li><span>병원성여부</span></li>
                    <li><span>해당농장</span></li>
                    <li><span>디지털헬스케어산업</span></li>
                    <li><span>생명의료분야</span></li>
                    <li><span>강원의료기기산업협회</span></li>
                    <li><span>항원검출</span></li>
                    <li><span>의료기기기업</span></li>
                    <li><span>확진판정</span></li>
                    <li><span>조성예정</span></li>
                    <li><span>응급환자</span></li>
                    <li><span>확진사례</span></li>
                </ol>
            </div>
            `,
            강릉시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>재해</span></div>
                <ol>
                    <li><span>대형산불발생</span></li>
                    <li><span>산불피해</span></li>
                    <li><span>희망브리지전국재해구호협회</span></li>
                    <li><span>산불피해복구</span></li>
                    <li><span>경북울진삼척</span></li>
                    <li><span>소방대응3단계발령</span></li>
                    <li><span>산불진화작업</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>사회복지공동모금회</span></li>
                    <li><span>특별재난지역선포</span></li>
                    <li><span>태풍하이선</span></li>
                    <li><span>산불방지대책본부</span></li>
                    <li><span>건조경보</span></li>
                    <li><span>재산피해</span></li>
                    <li><span>강릉아이스아레나</span></li>
                    <li><span>태풍마이삭</span></li>
                    <li><span>침수피해</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>문화/관광</span></div>
                <ol>
                    <li><span>세계합창대회</span></li>
                    <li><span>경포해수욕장</span></li>
                    <li><span>워케이션</span></li>
                    <li><span>청소년올림픽대회</span></li>
                    <li><span>해맞이관광객</span></li>
                    <li><span>월화거리광장</span></li>
                    <li><span>해돋이명소</span></li>
                    <li><span>아르떼뮤지엄강릉미디어아트전시관</span></li>
                    <li><span>2024강원동계청소년올림픽대회</span></li>
                    <li><span>정동진</span></li>
                    <li><span>해맞이행사</span></li>
                    <li><span>관광거점도시</span></li>
                    <li><span>강릉아트센터</span></li>
                    <li><span>해수욕장개장</span></li>
                    <li><span>강릉단오제</span></li>
                    <li><span>숙박시설</span></li>
                    <li><span>강릉국제영화제</span></li>
                    <li><span>경포벚꽃축제</span></li>
                    <li><span>평창동계올림픽</span></li>
                    <li><span>스카이베이호텔</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>지역발전</span></div>
                <ol>
                    <li><span>후쿠시마원전오염수방류문제대책</span></li>
                    <li><span>지능형교통체계</span></li>
                    <li><span>스마트양식클러스터</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>자율주행차량시범운행지구</span></li>
                    <li><span>관광거점문화도시조성사업</span></li>
                    <li><span>유네스코창의도시</span></li>
                    <li><span>자율주행차시범운행지구</span></li>
                    <li><span>워케이션</span></li>
                    <li><span>철도건설사업</span></li>
                    <li><span>강릉페이</span></li>
                    <li><span>인구감소지역</span></li>
                    <li><span>넥스트로컬</span></li>
                    <li><span>반려동물</span></li>
                    <li><span>지방소멸대응기금</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>투명페트병재활용</span></li>
                    <li><span>지역아동센터</span></li>
                    <li><span>주유소픽업센터</span></li>
                    <li><span>청년마을</span></li>
                </ol>
            </div>
            `,
            동해시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>날씨/재해</span></div>
                <ol>
                    <li><span>건조특보</span></li>
                    <li><span>지진발생</span></li>
                    <li><span>대형산불발생</span></li>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>태풍</span></li>
                    <li><span>호우특보</span></li>
                    <li><span>산불피해</span></li>
                    <li><span>산불진화</span></li>
                    <li><span>강풍특보</span></li>
                    <li><span>화재예방</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>규모2.0이상</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>너울성파도</span></li>
                    <li><span>경북울진</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>지진위기경보</span></li>
                    <li><span>교통안전</span></li>
                    <li><span>해역에서발생</span></li>
                    <li><span>규모4.5지진</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
                <ol>
                    <li><span>망상1지구개발사업</span></li>
                    <li><span>기소/구속</span></li>
                    <li><span>강원동해안수욕장</span></li>
                    <li><span>동해지방해양경찰청</span></li>
                    <li><span>경부압박다발성손상</span></li>
                    <li><span>물놀이사고</span></li>
                    <li><span>살인혐의</span></li>
                    <li><span>안전요원</span></li>
                    <li><span>국립과학수사</span></li>
                    <li><span>동해안권경제자유구역</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>안전사고예방</span></li>
                    <li><span>무기징역</span></li>
                    <li><span>전세사기사건</span></li>
                    <li><span>폐쇄회로CCTV</span></li>
                    <li><span>전세보증금</span></li>
                    <li><span>미개장해변</span></li>
                    <li><span>건축왕</span></li>
                    <li><span>의혹제기</span></li>
                    <li><span>발목뼈가피부</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>지역발전</span></div>
                <ol>
                    <li><span>해저케이블생산공장</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>철도건설전철화사업</span></li>
                    <li><span>후쿠시마원전오염수방류</span></li>
                    <li><span>동서고속도로미착공구간</span></li>
                    <li><span>아시아최대규모해상풍력단지</span></li>
                    <li><span>어촌뉴딜300사업</span></li>
                    <li><span>실내골프연습장</span></li>
                    <li><span>제천영월구간예비타당성조사</span></li>
                    <li><span>강원남부아동보호전문</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>녹지공간</span></li>
                    <li><span>교통호재</span></li>
                    <li><span>워케이션</span></li>
                    <li><span>교통여건</span></li>
                    <li><span>국가철도공단</span></li>
                    <li><span>도째비골스카이밸리</span></li>
                    <li><span>청약통장가입기간</span></li>
                    <li><span>청약가능</span></li>
                    <li><span>분양예정</span></li>
                </ol>
            </div>
            `,
            삼척시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>날씨/재해</span></div>
                <ol>
                    <li><span>대형산불발생</span></li>
                    <li><span>경북울진삼척</span></li>
                    <li><span>전국재해구호협회</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>산불피해</span></li>
                    <li><span>산불진화작업</span></li>
                    <li><span>희망브리지전국재해</span></li>
                    <li><span>특별재난지역선포</span></li>
                    <li><span>산불피해복구</span></li>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>산불피해지역</span></li>
                    <li><span>사회복지공동모금회</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>태풍</span></li>
                    <li><span>울진국민체육대회</span></li>
                    <li><span>피해주민</span></li>
                    <li><span>산불진화헬기</span></li>
                    <li><span>사랑의열매</span></li>
                    <li><span>산불영향구역</span></li>
                    <li><span>건조한날씨</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>지역발전/복지</span></div>
                <ol>
                    <li><span>센트럴두산위브</span></li>
                    <li><span>수소추출기공장</span></li>
                    <li><span>철도건설전철화사업</span></li>
                    <li><span>수소충전인프라사업</span></li>
                    <li><span>동서고속도로미착공구간</span></li>
                    <li><span>제천영월구간예비타당성조사통과</span></li>
                    <li><span>알파룸안방대형드레스룸</span></li>
                    <li><span>4베이맞통풍구조</span></li>
                    <li><span>골드시티</span></li>
                    <li><span>수소출하센터</span></li>
                    <li><span>청년농촌보금자리</span></li>
                    <li><span>수소생산기지</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>단축될전망</span></li>
                    <li><span>녹지공간</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>1순위청약</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>침수방지시설</span></li>
                    <li><span>국산화완료</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>관광/행사</span></div>
                <ol>
                    <li><span>어촌체험휴양마을</span></li>
                    <li><span>어린이과학체험공간</span></li>
                    <li><span>탄소중립숲조성</span></li>
                    <li><span>덕봉산해안생태탐방로</span></li>
                    <li><span>워케이션</span></li>
                    <li><span>장미공원</span></li>
                    <li><span>치유의숲</span></li>
                    <li><span>덕풍계곡</span></li>
                    <li><span>태양의숲</span></li>
                    <li><span>한국어촌어항공단</span></li>
                    <li><span>맹방해수욕장</span></li>
                    <li><span>생명의숲</span></li>
                    <li><span>동부지방산림청</span></li>
                    <li><span>국유림관리소</span></li>
                    <li><span>장미축제</span></li>
                    <li><span>용현자연휴양림</span></li>
                    <li><span>빛의정원</span></li>
                    <li><span>추천웰니스관광지</span></li>
                    <li><span>계곡바우길</span></li>
                    <li><span>온라인이벤트</span></li>
                </ol>
            </div>
            `,
            태백시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>폐광도시/주민복리</span></div>
                <ol>
                    <li><span>장성광업소</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>업무협약체결</span></li>
                    <li><span>태백교정시설</span></li>
                    <li><span>폐광지역</span></li>
                    <li><span>여성친화도시</span></li>
                    <li><span>탄탄페이</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>지역경제</span></li>
                    <li><span>지역화폐</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>태백가덕산</span></li>
                    <li><span>통리탄탄파크</span></li>
                    <li><span>평생학습도시</span></li>
                    <li><span>넥스트유니콘프로젝트</span></li>
                    <li><span>에듀테크</span></li>
                    <li><span>석탄산업</span></li>
                    <li><span>지역사회</span></li>
                    <li><span>주민참여</span></li>
                    <li><span>풍력발전기</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>안보/사건사고</span></div>
                <ol>
                    <li><span>주한미군지위협정SOFA합동</span></li>
                    <li><span>한파주의보</span></li>
                    <li><span>주한미군기지</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>강원경찰청</span></li>
                    <li><span>신입여경</span></li>
                    <li><span>니블로배럭스</span></li>
                    <li><span>기지12곳</span></li>
                    <li><span>201차주한미군지위</span></li>
                    <li><span>태백경찰서소속</span></li>
                    <li><span>노키즈존</span></li>
                    <li><span>종교휴양소</span></li>
                    <li><span>반환합의</span></li>
                    <li><span>필승사격장일부</span></li>
                    <li><span>경위조사</span></li>
                    <li><span>혹한기훈련</span></li>
                    <li><span>피해여경</span></li>
                    <li><span>캠프모빌일부</span></li>
                    <li><span>캠프워커헬기장</span></li>
                    <li><span>연병장설치</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>관광/체험</span></div>
                <ol>
                    <li><span>태백산국립공원</span></li>
                    <li><span>국립공원당골광장</span></li>
                    <li><span>LG클로이가이드봇</span></li>
                    <li><span>태백산눈축제</span></li>
                    <li><span>태백고생대자연사박물관</span></li>
                    <li><span>니오와이즈</span></li>
                    <li><span>365세이프타운</span></li>
                    <li><span>겨울추억</span></li>
                    <li><span>빛공해지수</span></li>
                    <li><span>함백산은하수길</span></li>
                    <li><span>바람의언덕</span></li>
                    <li><span>안전체험관</span></li>
                    <li><span>관광택시</span></li>
                    <li><span>재난안전실증</span></li>
                    <li><span>은하수여권</span></li>
                    <li><span>단풍군락지</span></li>
                    <li><span>눈축제관광객</span></li>
                    <li><span>안내로봇</span></li>
                    <li><span>사진찍기</span></li>
                    <li><span>관광객과등산객</span></li>
                </ol>
            </div>
            `,
            정선군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>재해/채용비리</span></div>
                <ol>
                    <li><span>산림당국</span></li>
                    <li><span>산불발생</span></li>
                    <li><span>산불진화작업</span></li>
                    <li><span>중앙산불방지대책본부</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>진화헬기</span></li>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>대규모산사태발생</span></li>
                    <li><span>호우특보</span></li>
                    <li><span>기소</span></li>
                    <li><span>염전의원</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>원인과피해</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>진화인력투입</span></li>
                    <li><span>피해면적</span></li>
                    <li><span>산불현장</span></li>
                    <li><span>재판</span></li>
                    <li><span>건조한날씨</span></li>
                    <li><span>강풍주의보</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>관광/문화</span></div>
                <ol>
                    <li><span>디지털관광주민증</span></li>
                    <li><span>국가정원조성</span></li>
                    <li><span>유네스코인류무형문화유산</span></li>
                    <li><span>반려견동반여행</span></li>
                    <li><span>평창동계올림픽</span></li>
                    <li><span>추천웰니스관광지</span></li>
                    <li><span>가리왕산하봉</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>정선아리랑문화재단</span></li>
                    <li><span>사북공공도서관</span></li>
                    <li><span>2층투어버스</span></li>
                    <li><span>트레킹</span></li>
                    <li><span>문화체육관광부한국관광공사</span></li>
                    <li><span>할인혜택</span></li>
                    <li><span>무형문화재지정</span></li>
                    <li><span>정선5일장</span></li>
                    <li><span>몸마음</span></li>
                    <li><span>가리왕산국가정원</span></li>
                    <li><span>인구감소지역</span></li>
                    <li><span>억새군락지</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>지역발전/산업</span></div>
                <ol>
                    <li><span>암흑물질중성미자</span></li>
                    <li><span>폐광지역</span></li>
                    <li><span>편의점혁신점포</span></li>
                    <li><span>디지털데스크</span></li>
                    <li><span>스마트키오스크</span></li>
                    <li><span>충전소부지활용</span></li>
                    <li><span>LS일렉트릭</span></li>
                    <li><span>지하실험연구</span></li>
                    <li><span>은행업무</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>GS더프레시</span></li>
                    <li><span>독립유공자후손</span></li>
                    <li><span>직원화상</span></li>
                    <li><span>내국인카지노</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>신재생에너지사업</span></li>
                    <li><span>폐광기금</span></li>
                    <li><span>기초과학</span></li>
                    <li><span>폐광지역주민</span></li>
                    <li><span>노인요양시설</span></li>
                </ol>
            </div>
            `,
            속초시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>속초해경</span></li>
                    <li><span>속초해수욕장관광테마시설</span></li>
                    <li><span>태풍</span></li>
                    <li><span>북한소형목선</span></li>
                    <li><span>북한주민</span></li>
                    <li><span>귀순의사</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>국립수산과학원</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>폐쇄회로CCTV</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>너울성파도</span></li>
                    <li><span>심정지상태</span></li>
                    <li><span>연안구조정</span></li>
                    <li><span>복구작업</span></li>
                    <li><span>여자친구</span></li>
                    <li><span>카눈 영향</span></li>
                    <li><span>제설작업</span></li>
                    <li><span>전동킥보드</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>관광/행사</span></div>
                <ol>
                    <li><span>속초관광수산시장</span></li>
                    <li><span>스마트관광도시시범조성사업</span></li>
                    <li><span>속초해수욕장</span></li>
                    <li><span>설악산국립공원</span></li>
                    <li><span>워케이션</span></li>
                    <li><span>국립등산학교</span></li>
                    <li><span>어촌체험휴양마을</span></li>
                    <li><span>청명한가을하늘</span></li>
                    <li><span>국립공원천불동계곡</span></li>
                    <li><span>해맞이행사</span></li>
                    <li><span>아마데아호</span></li>
                    <li><span>인공암벽장</span></li>
                    <li><span>해수욕장피서객</span></li>
                    <li><span>관광객과시민</span></li>
                    <li><span>등산트레킹</span></li>
                    <li><span>실버위스퍼</span></li>
                    <li><span>국제크루즈터미널</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>청년마을</span></li>
                    <li><span>아바이마을</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>부동산</span></div>
                <ol>
                    <li><span>생활형숙박시설</span></li>
                    <li><span>속초롯데캐슬인더스카이</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>오션뷰</span></li>
                    <li><span>미분양관리지역</span></li>
                    <li><span>속초디오션</span></li>
                    <li><span>지방중소도시</span></li>
                    <li><span>반얀트리</span></li>
                    <li><span>1순위청약</span></li>
                    <li><span>분양중</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>청약경쟁</span></li>
                    <li><span>커뮤니티시설</span></li>
                    <li><span>위탁운영</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>청약접수</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>분양권전매</span></li>
                    <li><span>미분양주택</span></li>
                </ol>
            </div>
            `,
            고성군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>날씨/재해</span></div>
                <ol>
                    <li><span>대형산불발생</span></li>
                    <li><span>산불진화</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>태풍</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>국립산림과학원</span></li>
                    <li><span>건조한날씨</span></li>
                    <li><span>재난안전대책본부</span></li>
                    <li><span>너울성파도</span></li>
                    <li><span>울진삼척</span></li>
                    <li><span>산불방지대책본부</span></li>
                    <li><span>산불재난국가위기</span></li>
                    <li><span>산불피해지역</span></li>
                    <li><span>강풍주의보</span></li>
                    <li><span>화목보일러</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>재산피해</span></li>
                    <li><span>국가위기경보</span></li>
                    <li><span>잔불정리</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>안보</span></div>
                <ol>
                    <li><span>납북귀환어부직권재심청구</span></li>
                    <li><span>9.19남북군사합의위반</span></li>
                    <li><span>과학화경계시스템</span></li>
                    <li><span>합동참모본부</span></li>
                    <li><span>민간인통제선</span></li>
                    <li><span>군감시장비</span></li>
                    <li><span>노크귀순사건</span></li>
                    <li><span>해상완충구역</span></li>
                    <li><span>잠수복과오리발</span></li>
                    <li><span>단거리탄도미사일</span></li>
                    <li><span>경계태세</span></li>
                    <li><span>폐쇄회로CCTV</span></li>
                    <li><span>배수로통과</span></li>
                    <li><span>포병사격</span></li>
                    <li><span>사격훈련</span></li>
                    <li><span>국방부관계자</span></li>
                    <li><span>북한선박</span></li>
                    <li><span>통일전망대인근해안</span></li>
                    <li><span>북한주민</span></li>
                    <li><span>지상작전사령부</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>관광/문화</span></div>
                <ol>
                    <li><span>새만금세계스카우트잼버리</span></li>
                    <li><span>DMZ 평화의길</span></li>
                    <li><span>세계산림엑스포</span></li>
                    <li><span>잼버리조직위원회</span></li>
                    <li><span>전세계청소년</span></li>
                    <li><span>한국스카우트연맹</span></li>
                    <li><span>목재문화체험장</span></li>
                    <li><span>세계스카우트연맹</span></li>
                    <li><span>워케이션</span></li>
                    <li><span>코리아둘레길</span></li>
                    <li><span>해파랑길</span></li>
                    <li><span>문화교류</span></li>
                    <li><span>남파랑길</span></li>
                    <li><span>자유평화대장정</span></li>
                    <li><span>고성통일전망대</span></li>
                    <li><span>서해랑길</span></li>
                    <li><span>한반도평화프로세스</span></li>
                    <li><span>동서횡단행사</span></li>
                    <li><span>솔방울전망대</span></li>
                    <li><span>대규모국제행사</span></li>
                </ol>
            </div>
            `,
            양양군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>계곡살인사건/산불</span></div>
                <ol>
                    <li><span>보험사기방지특별법위반미수혐의</span></li>
                    <li><span>복어정소/피</span></li>
                    <li><span>강원양양군펜션</span></li>
                    <li><span>계곡살인사건</span></li>
                    <li><span>산불발생</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>생명보험금</span></li>
                    <li><span>살인미수보험사기</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>살해혐의</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>혐의기소</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>구속기소</span></li>
                    <li><span>공개수배</span></li>
                    <li><span>무기징역</span></li>
                    <li><span>헬기추락</span></li>
                    <li><span>살인사건피의자</span></li>
                    <li><span>사망보험금</span></li>
                    <li><span>행방묘연</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>오색케이블카/관광</span></div>
                <ol>
                    <li><span>설악산오색케이블카설치사업</span></li>
                    <li><span>설악산국립공원</span></li>
                    <li><span>어촌체험휴양마을</span></li>
                    <li><span>워케이션</span></li>
                    <li><span>환경영향평가재보완</span></li>
                    <li><span>중앙행정심판위원회</span></li>
                    <li><span>설치사업환경영향평가</span></li>
                    <li><span>부동의처분</span></li>
                    <li><span>환경부원주지방환경청</span></li>
                    <li><span>지방재정투자사업심사</span></li>
                    <li><span>보완요구</span></li>
                    <li><span>인스케이프양양by파르나스</span></li>
                    <li><span>오색삭도설치사업</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>공원계획변경</span></li>
                    <li><span>행정심판청구</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>보완서</span></li>
                    <li><span>국립공원공단</span></li>
                    <li><span>공원오색지구</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>양양공항/도시사업</span></div>
                <ol>
                    <li><span>항공사플라이강원</span></li>
                    <li><span>양양국제공항</span></li>
                    <li><span>스마트육상연어양식단지조성</span></li>
                    <li><span>지능형스마트관광도시</span></li>
                    <li><span>침적쓰레기 수거</span></li>
                    <li><span>기업회생신청</span></li>
                    <li><span>운항중단</span></li>
                    <li><span>국제공항모기지</span></li>
                    <li><span>운항재개</span></li>
                    <li><span>지속가능</span></li>
                    <li><span>국제선운항</span></li>
                    <li><span>동서고속화철도</span></li>
                    <li><span>에어로케이</span></li>
                    <li><span>화물운송사업</span></li>
                    <li><span>해수순환기술</span></li>
                    <li><span>양양김포</span></li>
                    <li><span>종합여객터미널</span></li>
                    <li><span>관광명소</span></li>
                    <li><span>노선운항</span></li>
                    <li><span>운항장려금</span></li>
                </ol>
            </div>
            `,
            인제군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>국방/사건사고</span></div>
                <ol>
                    <li><span>인제육군과학화전투훈련단</span></li>
                    <li><span>북한무인기</span></li>
                    <li><span>아프리카돼지열병</span></li>
                    <li><span>국방부유해발굴감식단</span></li>
                    <li><span>전투훈련진행</span></li>
                    <li><span>무기징역</span></li>
                    <li><span>영공침범</span></li>
                    <li><span>야생멧돼지</span></li>
                    <li><span>신임장교</span></li>
                    <li><span>등산로입구</span></li>
                    <li><span>징역선고</span></li>
                    <li><span>50대여성</span></li>
                    <li><span>신원확인</span></li>
                    <li><span>멧돼지폐사체</span></li>
                    <li><span>유전자시료채취</span></li>
                    <li><span>한미연합사단</span></li>
                    <li><span>살해혐의</span></li>
                    <li><span>연합KCTC훈련</span></li>
                    <li><span>경위조사</span></li>
                    <li><span>혐의기소</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>관광/행사</span></div>
                <ol>
                    <li><span>원대리자작나무숲</span></li>
                    <li><span>설악산국립공원</span></li>
                    <li><span>빙어축제</span></li>
                    <li><span>가을꽃축제</span></li>
                    <li><span>현대N페스티벌</span></li>
                    <li><span>북면용대리용대관광단지</span></li>
                    <li><span>가을꽃축제</span></li>
                    <li><span>가을정취만끽</span></li>
                    <li><span>하늘내린센터</span></li>
                    <li><span>아반떼N라인</span></li>
                    <li><span>옥스팜트레일워커</span></li>
                    <li><span>빙어낚시</span></li>
                    <li><span>타임트라이얼</span></li>
                    <li><span>인제꽃길</span></li>
                    <li><span>국내최대규모</span></li>
                    <li><span>아반떼N컵</span></li>
                    <li><span>스피디움</span></li>
                    <li><span>현대N사이클링</span></li>
                    <li><span>순백의세상</span></li>
                    <li><span>대상시상식</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>지역발전</span></div>
                <ol>
                    <li><span>사업추진</span></li>
                    <li><span>지역활력타운</span></li>
                    <li><span>스마트복합쉼터</span></li>
                    <li><span>스마트관광도시조성</span></li>
                    <li><span>외국인계절근로자</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>지방소멸위기대응</span></li>
                    <li><span>미래교육지구</span></li>
                    <li><span>평생학습도시</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>지속가능</span></li>
                    <li><span>편의시설</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>감응신호시스템</span></li>
                    <li><span>협약체결</span></li>
                    <li><span>최종선정</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>지원계획</span></li>
                    <li><span>자문건축가</span></li>
                    <li><span>도시조성사업</span></li>
                </ol>
            </div>
            `,
            홍천군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>자유북한운동연합</span></li>
                    <li><span>아프리카돼지열병</span></li>
                    <li><span>집단성폭행</span></li>
                    <li><span>민주노총공공운수노조</span></li>
                    <li><span>대북전단</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>폭염주의보</span></li>
                    <li><span>특례법위반준강간</span></li>
                    <li><span>탈북민</span></li>
                    <li><span>하이트진로강원</span></li>
                    <li><span>불법촬영물</span></li>
                    <li><span>폭염특보</span></li>
                    <li><span>성관계</span></li>
                    <li><span>유포혐의</span></li>
                    <li><span>대형풍선</span></li>
                    <li><span>야생멧돼지</span></li>
                    <li><span>돼지농장</span></li>
                    <li><span>홍수주의보</span></li>
                    <li><span>성폭력범죄</span></li>
                    <li><span>화물연대조합원</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>지역발전/관광</span></div>
                <ol>
                    <li><span>꽃뫼공원</span></li>
                    <li><span>4차국가철도망구축</span></li>
                    <li><span>소노펫클럽</span></li>
                    <li><span>홍천비발디파크</span></li>
                    <li><span>반려동물</span></li>
                    <li><span>숲조성사업</span></li>
                    <li><span>한중문화타운</span></li>
                    <li><span>도시양봉장</span></li>
                    <li><span>워터파크</span></li>
                    <li><span>별빛음악맥주축제</span></li>
                    <li><span>태양의숲</span></li>
                    <li><span>밀원숲조성</span></li>
                    <li><span>용문홍천철도</span></li>
                    <li><span>대명소노그룹</span></li>
                    <li><span>소노인터내셔널</span></li>
                    <li><span>반려견동반</span></li>
                    <li><span>겨리농경문화</span></li>
                    <li><span>힐리언스</span></li>
                    <li><span>꿀벌생태계회복</span></li>
                    <li><span>홍천트윈타워</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>복지/행정</span></div>
                <ol>
                    <li><span>여성농업인</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>특수건강검진</span></li>
                    <li><span>양수발전소건설</span></li>
                    <li><span>LG의인상</span></li>
                    <li><span>위블비즈</span></li>
                    <li><span>장애인복지</span></li>
                    <li><span>외국인계절근로자</span></li>
                    <li><span>문화청소년</span></li>
                    <li><span>복지시설</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>농촌일손</span></li>
                    <li><span>특례군법제화</span></li>
                    <li><span>봉사활동</span></li>
                    <li><span>지역농가</span></li>
                    <li><span>청년농업인</span></li>
                    <li><span>송전선로건설</span></li>
                    <li><span>체류형귀농</span></li>
                    <li><span>LG복지재단</span></li>
                    <li><span>치킨릴레이</span></li>
                </ol>
            </div>
            `,
            횡성군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>날씨/재해/사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>일산화탄소</span></li>
                    <li><span>횡성소방서</span></li>
                    <li><span>북한무인기</span></li>
                    <li><span>산사태발생</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>실종아동법</span></li>
                    <li><span>호우특보</span></li>
                    <li><span>1대추락조종사</span></li>
                    <li><span>비상탈출</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>비행단소속</span></li>
                    <li><span>일가족</span></li>
                    <li><span>아동법위반</span></li>
                    <li><span>가스폭발</span></li>
                    <li><span>폭염주의보</span></li>
                    <li><span>발생해주택</span></li>
                    <li><span>산사태경보</span></li>
                    <li><span>산지태양광건설</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>복지/지역발전</span></div>
                <ol>
                    <li><span>상생형지역</span></li>
                    <li><span>지역일자리</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>디피코</span></li>
                    <li><span>상생형일자리</span></li>
                    <li><span>소형전기화물차</span></li>
                    <li><span>국립묘지</span></li>
                    <li><span>국립호국원</span></li>
                    <li><span>횡성형일자리</span></li>
                    <li><span>송전선로건설</span></li>
                    <li><span>횡성사랑</span></li>
                    <li><span>군용기소음피해</span></li>
                    <li><span>독립유공자후손</span></li>
                    <li><span>한복교복</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>우천일반산업단지</span></li>
                    <li><span>표밀맥주</span></li>
                    <li><span>곰표</span></li>
                    <li><span>무균충전음료</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>관광</span></div>
                <ol>
                    <li><span>횡성웰리힐리</span></li>
                    <li><span>루지체험장</span></li>
                    <li><span>횡성한우</span></li>
                    <li><span>횡성호수</span></li>
                    <li><span>횡성루지</span></li>
                    <li><span>국립산림복지진흥원</span></li>
                    <li><span>고랭지토마토축제</span></li>
                    <li><span>숲체원</span></li>
                    <li><span>횡성더덕축제</span></li>
                    <li><span>힐리파크스키장</span></li>
                    <li><span>안흥찐빵축제</span></li>
                    <li><span>횡성숲</span></li>
                    <li><span>힐리스노우파크</span></li>
                    <li><span>찐빵모락모락마을</span></li>
                    <li><span>체험휴양마을</span></li>
                    <li><span>국유림명품숲</span></li>
                    <li><span>낙엽송명품숲</span></li>
                    <li><span>국제평화영화제</span></li>
                    <li><span>유산균막걸리</span></li>
                    <li><span>한우체험관</span></li>
                </ol>
            </div>
            `,
            영월군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고/군훈련</span></div>
                <ol>
                    <li><span>산불진화작업</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>산불발생</span></li>
                    <li><span>울진삼척</span></li>
                    <li><span>공군6탐색구조비행전대항공구조사</span></li>
                    <li><span>산불방지대책본부</span></li>
                    <li><span>산불진화헬기</span></li>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>사고헬기</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>민간헬기</span></li>
                    <li><span>금강송군락지</span></li>
                    <li><span>살인예고글</span></li>
                    <li><span>산악구조훈련</span></li>
                    <li><span>피해면적</span></li>
                    <li><span>안전운임</span></li>
                    <li><span>심정지상태</span></li>
                    <li><span>중앙산불방지</span></li>
                    <li><span>건조한날씨</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>감염병/유충</span></div>
                <ol>
                    <li><span>아프리카돼지열병</span></li>
                    <li><span>야생멧돼지</span></li>
                    <li><span>중앙사고수습본부</span></li>
                    <li><span>멧돼지폐사체</span></li>
                    <li><span>양돈농장</span></li>
                    <li><span>양돈농가</span></li>
                    <li><span>방역당국</span></li>
                    <li><span>돼지농장</span></li>
                    <li><span>차단방역강화</span></li>
                    <li><span>정밀검사</span></li>
                    <li><span>유충발견</span></li>
                    <li><span>농장아프리카</span></li>
                    <li><span>방역조치</span></li>
                    <li><span>깔따구유충</span></li>
                    <li><span>바이러스검출</span></li>
                    <li><span>광역울타리</span></li>
                    <li><span>발생농장</span></li>
                    <li><span>위험주의보</span></li>
                    <li><span>멧돼지개체수</span></li>
                    <li><span>방역수칙</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>지역발전/개발</span></div>
                <ol>
                    <li><span>드론배송서비스</span></li>
                    <li><span>드론실증도시구축사업</span></li>
                    <li><span>드론배달서비스</span></li>
                    <li><span>주소기반드론배송</span></li>
                    <li><span>서비스제공</span></li>
                    <li><span>별빛고운카드</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>드론배달점</span></li>
                    <li><span>지역화폐</span></li>
                    <li><span>차수시설</span></li>
                    <li><span>법정문화도시</span></li>
                    <li><span>드론활용</span></li>
                    <li><span>전용비행시험장</span></li>
                    <li><span>영월에코윈드</span></li>
                    <li><span>드론교통관리</span></li>
                    <li><span>글램핑장</span></li>
                    <li><span>드론시스템</span></li>
                    <li><span>침출수무방류</span></li>
                    <li><span>편의점업계</span></li>
                    <li><span>고향사랑기부금</span></li>
                </ol>
            </div>
            `,
            평창군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>관광/행정</span></div>
                <ol>
                    <li><span>평창평화포럼</span></li>
                    <li><span>디지털관광주민증</span></li>
                    <li><span>2024강원동계청소년올림픽대회</span></li>
                    <li><span>평창동계올림픽</span></li>
                    <li><span>워케이션</span></li>
                    <li><span>국립한국자생식물원</span></li>
                    <li><span>알펜시아컨벤션센터</span></li>
                    <li><span>평창송어축제</span></li>
                    <li><span>매그놀리아용평호텔앤리조트</span></li>
                    <li><span>평창국제평화영화제</span></li>
                    <li><span>더위사냥축제</span></li>
                    <li><span>한국수목원정원관리원</span></li>
                    <li><span>2018평창기념재단</span></li>
                    <li><span>평창올림픽</span></li>
                    <li><span>계촌클래식축제</span></li>
                    <li><span>영원한속죄</span></li>
                    <li><span>소녀상앞</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>오대산국립공원</span></li>
                    <li><span>일본정부</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>재해/사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>스키장리프트멈춤사고</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>한파특보</span></li>
                    <li><span>태풍마이삭</span></li>
                    <li><span>산불발생</span></li>
                    <li><span>경찰과소방</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>단계발령</span></li>
                    <li><span>해당영상</span></li>
                    <li><span>불법촬영물</span></li>
                    <li><span>사고원인</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>양떼목장</span></li>
                    <li><span>내사착수</span></li>
                    <li><span>사법기관</span></li>
                    <li><span>제설작업</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>농가발전/의료</span></div>
                <ol>
                    <li><span>국립축산과학원한우연구소</span></li>
                    <li><span>행복상생프로젝트</span></li>
                    <li><span>메디컬인사이트플러스뇌출혈</span></li>
                    <li><span>농가상생협약체결</span></li>
                    <li><span>지역농가</span></li>
                    <li><span>스마트팜</span></li>
                    <li><span>활용한제품</span></li>
                    <li><span>대관령한우연구소</span></li>
                    <li><span>평창군보건의료원</span></li>
                    <li><span>제품개발</span></li>
                    <li><span>축사생활</span></li>
                    <li><span>농산물활용</span></li>
                    <li><span>감자빵</span></li>
                    <li><span>농산물소비활성화</span></li>
                    <li><span>제주구좌당근</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>농촌마을</span></li>
                    <li><span>고령자복지주택</span></li>
                    <li><span>공공의료기관</span></li>
                    <li><span>노쇠예방프로그램</span></li>
                </ol>
            </div>
            `,
            화천군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>보건/의료/행정</span></div>
                <ol>
                    <li><span>아프리카돼지열병</span></li>
                    <li><span>야생멧돼지</span></li>
                    <li><span>양돈농장</span></li>
                    <li><span>양돈농가</span></li>
                    <li><span>방역당국</span></li>
                    <li><span>살처분</span></li>
                    <li><span>발생농장</span></li>
                    <li><span>해당농장</span></li>
                    <li><span>돼지농장</span></li>
                    <li><span>광역울타리</span></li>
                    <li><span>차단방역</span></li>
                    <li><span>유충발견</span></li>
                    <li><span>참전용사후손</span></li>
                    <li><span>스마트안심셔틀</span></li>
                    <li><span>출생아수</span></li>
                    <li><span>국가유공자</span></li>
                    <li><span>복합커뮤니티센터</span></li>
                    <li><span>스마트복합쉼터</span></li>
                    <li><span>에티오피아참전용사</span></li>
                    <li><span>정수장</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>안보/사건사고</span></div>
                <ol>
                    <li><span>문부교도하작전훈련</span></li>
                    <li><span>육군3기갑여단</span></li>
                    <li><span>육군2공병여단3기갑</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>산불발생</span></li>
                    <li><span>전차장갑차</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>육군7사단</span></li>
                    <li><span>폭염주의보</span></li>
                    <li><span>산불2단계</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>화천대교일원</span></li>
                    <li><span>국방개혁</span></li>
                    <li><span>유해발굴현장</span></li>
                    <li><span>북한강</span></li>
                    <li><span>화천대교인근</span></li>
                    <li><span>25전사자유해발굴</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>국방부유해발굴감식단</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>지역활성화</span></div>
                <ol>
                    <li><span>2023얼음화천산천어축제</span></li>
                    <li><span>평화의댐</span></li>
                    <li><span>산천어파크골프장</span></li>
                    <li><span>2023화천토마토축제</span></li>
                    <li><span>국내대표겨울축제</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>반려견동반</span></li>
                    <li><span>축제장</span></li>
                    <li><span>백암산케이블카</span></li>
                    <li><span>황금반지</span></li>
                    <li><span>파크골프협회</span></li>
                    <li><span>카카오메이커스</span></li>
                    <li><span>국립자연휴양림</span></li>
                    <li><span>얼음조각광장</span></li>
                    <li><span>화천사랑상품권</span></li>
                    <li><span>평화누리호</span></li>
                    <li><span>얼음낚시터</span></li>
                    <li><span>반려동물</span></li>
                    <li><span>실내얼음조각</span></li>
                    <li><span>숲속야영장</span></li>
                </ol>
            </div>
            `,
            양구군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>산불/국방부유해발국</span></div>
                <ol>
                    <li><span>산불발생</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>국방부유해발굴</span></li>
                    <li><span>신원확인</span></li>
                    <li><span>피의능선전투</span></li>
                    <li><span>전투전사</span></li>
                    <li><span>발굴감식단</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>국가유공자</span></li>
                    <li><span>산불3단계발령</span></li>
                    <li><span>국립서울현충원</span></li>
                    <li><span>유공자와유가족</span></li>
                    <li><span>산불진화</span></li>
                    <li><span>전쟁참전</span></li>
                    <li><span>가족의품</span></li>
                    <li><span>산불진화헬기</span></li>
                    <li><span>화살머리고지</span></li>
                    <li><span>국가유공자증서</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>국립대전현충원</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>특산품/농가인력</span></div>
                <ol>
                    <li><span>외국인계절근로자</span></li>
                    <li><span>생감자칩</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>국내산감자</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>농촌인력중개센터</span></li>
                    <li><span>감자원료사용</span></li>
                    <li><span>임대형스마트팜</span></li>
                    <li><span>양구사랑상품권</span></li>
                    <li><span>농가계약</span></li>
                    <li><span>감자특산지로유명</span></li>
                    <li><span>공공산후조리원</span></li>
                    <li><span>감자저장소</span></li>
                    <li><span>맛과영양</span></li>
                    <li><span>우수사례</span></li>
                    <li><span>지역농가</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>도시형인력</span></li>
                    <li><span>생산시작</span></li>
                    <li><span>농가안정</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>관광/행사</span></div>
                <ol>
                    <li><span>펀치볼둘레길</span></li>
                    <li><span>양구곰취축제</span></li>
                    <li><span>서천레포츠공원</span></li>
                    <li><span>평화의길</span></li>
                    <li><span>자생식물원</span></li>
                    <li><span>국가숲길지정</span></li>
                    <li><span>북방계식물전시원</span></li>
                    <li><span>박수근기념메달제작</span></li>
                    <li><span>산림청국립수목원</span></li>
                    <li><span>구글아트앤컬처</span></li>
                    <li><span>어린이날</span></li>
                    <li><span>양구배꼽축제</span></li>
                    <li><span>화가박수근</span></li>
                    <li><span>다양한프로그램</span></li>
                    <li><span>백두대간트레일</span></li>
                    <li><span>군립박수근미술관</span></li>
                    <li><span>축제개최</span></li>
                    <li><span>대암산용늪</span></li>
                    <li><span>축제장</span></li>
                    <li><span>지리산둘레길</span></li>
                </ol>
            </div>
            `,
            철원군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>유해발굴/안보/재해</span></div>
                <ol>
                    <li><span>화살머리고지유해발굴</span></li>
                    <li><span>국방부유해발굴감식단</span></li>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>9.19남북군사합의</span></li>
                    <li><span>한파경보</span></li>
                    <li><span>유해발굴작업</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>해상완충구역</span></li>
                    <li><span>대북전단살포</span></li>
                    <li><span>신원확인</span></li>
                    <li><span>포병사격</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>공동유해발굴</span></li>
                    <li><span>사격훈련</span></li>
                    <li><span>복구작업</span></li>
                    <li><span>특별재난지역선포</span></li>
                    <li><span>국립서울현충원</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>주한미군</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>감염병/멸종위기종</span></div>
                <ol>
                    <li><span>아프리카돼지열병</span></li>
                    <li><span>중앙사고수습본부</span></li>
                    <li><span>양돈농장</span></li>
                    <li><span>돼지농장도축장사료공장</span></li>
                    <li><span>돼지농장</span></li>
                    <li><span>야생멧돼지</span></li>
                    <li><span>멸종위기야생생물</span></li>
                    <li><span>정밀검사</span></li>
                    <li><span>발생농장</span></li>
                    <li><span>해당농장</span></li>
                    <li><span>방역당국</span></li>
                    <li><span>멸종위기종</span></li>
                    <li><span>농장에서아프리카</span></li>
                    <li><span>멧돼지폐사체</span></li>
                    <li><span>초동방역팀</span></li>
                    <li><span>농장에서사육</span></li>
                    <li><span>검사실시</span></li>
                    <li><span>역학조사반</span></li>
                    <li><span>확산방지</span></li>
                    <li><span>방역조치</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>한탄강</span></div>
                <ol>
                    <li><span>한탄강세계지질공원</span></li>
                    <li><span>철원한탄강주상절리</span></li>
                    <li><span>주상절리길</span></li>
                    <li><span>한탄강물윗길</span></li>
                    <li><span>공원인증</span></li>
                    <li><span>지질학적가치</span></li>
                    <li><span>유네스코세계</span></li>
                    <li><span>비둘기낭</span></li>
                    <li><span>분출한용암</span></li>
                    <li><span>관광자원</span></li>
                    <li><span>직탕폭포</span></li>
                    <li><span>얼음트레킹</span></li>
                    <li><span>아우라지베개용암</span></li>
                    <li><span>화강다슬기축제</span></li>
                    <li><span>은하수교</span></li>
                    <li><span>한탄강지질공원</span></li>
                    <li><span>역사문화</span></li>
                    <li><span>화적원</span></li>
                    <li><span>국기지질공원</span></li>
                    <li><span>생물권보전</span></li>
                </ol>
            </div>
            `,
        },
        chungbuk: {
            충주시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>자연재해/사건사고</span></div>
                <ol>
                    <li><span>과수화상병</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>실종아동법</span></li>
                    <li><span>럼피스킨</span></li>
                    <li><span>돼지열병</span></li>
                    <li><span>라이트월드</span></li>
                    <li><span>특별재난지역선포</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>아동법위반</span></li>
                    <li><span>야생멧돼지</span></li>
                    <li><span>복구작업</span></li>
                    <li><span>실종아동</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>멧돼지폐사체</span></li>
                    <li><span>과수농가</span></li>
                    <li><span>비피해</span></li>
                    <li><span>지원민간임대주택</span></li>
                    <li><span>토사유입</span></li>
                    <li><span>병원성조류인플루엔자</span></li>
                    <li><span>매몰작업</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>행정/지역개발</span></div>
                <ol>
                    <li><span>수소추출기</span></li>
                    <li><span>국가정원조성</span></li>
                    <li><span>온천도시지정</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>충주사랑상품권</span></li>
                    <li><span>바이오가스</span></li>
                    <li><span>복합충전소</span></li>
                    <li><span>바이오헬스국가산업단지</span></li>
                    <li><span>한화포레나</span></li>
                    <li><span>푸르지오더퍼스트</span></li>
                    <li><span>세계무술공원</span></li>
                    <li><span>수소충전인프라</span></li>
                    <li><span>수소생산</span></li>
                    <li><span>중부내륙철도</span></li>
                    <li><span>공공기관지방이전</span></li>
                    <li><span>수소차</span></li>
                    <li><span>수소산업규제자유</span></li>
                    <li><span>수소출하센터</span></li>
                    <li><span>충북충주시농업기술센터</span></li>
                    <li><span>고향사랑기부제</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>관광/행사</span></div>
                <ol>
                    <li><span>중앙경찰학교</span></li>
                    <li><span>310기졸업식</span></li>
                    <li><span>신임경찰</span></li>
                    <li><span>중원문화재단</span></li>
                    <li><span>활옥동굴</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>비내섬</span></li>
                    <li><span>국제무예센터</span></li>
                    <li><span>중원문화재연구소</span></li>
                    <li><span>국립충주박물관</span></li>
                    <li><span>국제조정경기장</span></li>
                    <li><span>제철기술복원</span></li>
                    <li><span>과학체험공간</span></li>
                    <li><span>초당옥수수</span></li>
                    <li><span>어린이과학체험</span></li>
                    <li><span>해수녹차센터</span></li>
                    <li><span>습지보호지역지정</span></li>
                    <li><span>경찰국신설</span></li>
                    <li><span>충주박물관건립</span></li>
                    <li><span>선수권대회</span></li>
                </ol>
            </div>
            `,
            제천시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>자연재해/사건사고</span></div>
                <ol>
                    <li><span>인명피해</span></li>
                    <li><span>과수화상병</span></li>
                    <li><span>아프리카돼지</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>야생멧돼지</span></li>
                    <li><span>멧돼지폐사체</span></li>
                    <li><span>한파특보</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>시멘트업계</span></li>
                    <li><span>폭염주의보</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>청풍호반케이블카</span></li>
                    <li><span>산사태발생</span></li>
                    <li><span>태풍힌남노</span></li>
                    <li><span>시멘트공장</span></li>
                    <li><span>안전운임</span></li>
                    <li><span>불법주정차</span></li>
                    <li><span>건조주의보</span></li>
                    <li><span>양돈농가</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>행정/복지</span></div>
                <ol>
                    <li><span>인구감소지역</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>디지털관광주민증</span></li>
                    <li><span>자연치유</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>자치연수원이전</span></li>
                    <li><span>제천화폐</span></li>
                    <li><span>워케이션</span></li>
                    <li><span>공공기관지방이전</span></li>
                    <li><span>주택자금지원사업</span></li>
                    <li><span>소멸위험지역</span></li>
                    <li><span>치매환자</span></li>
                    <li><span>체류형농업</span></li>
                    <li><span>체류형관광</span></li>
                    <li><span>바이오첨단농업</span></li>
                    <li><span>첨단농업복합단지</span></li>
                    <li><span>2차공공기관지방이전</span></li>
                    <li><span>여성친화도시</span></li>
                    <li><span>농업창업지원</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행사/지역개발</span></div>
                <ol>
                    <li><span>미니복합타운</span></li>
                    <li><span>국제음악영화제</span></li>
                    <li><span>제천문화재단</span></li>
                    <li><span>점말동굴</span></li>
                    <li><span>제천더프라임</span></li>
                    <li><span>문화의거리</span></li>
                    <li><span>예술의전당</span></li>
                    <li><span>한방바이오박람회</span></li>
                    <li><span>지방중소도시</span></li>
                    <li><span>명지의료재단</span></li>
                    <li><span>독립유공자후손</span></li>
                    <li><span>생활인프라</span></li>
                    <li><span>의림지역사박물관</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>업무복합시설</span></li>
                    <li><span>한국메탈실리콘</span></li>
                    <li><span>폐기물매립시설</span></li>
                    <li><span>창의캠프</span></li>
                    <li><span>의림지뜰친환경</span></li>
                    <li><span>동굴체험관</span></li>
                </ol>
            </div>
            `,
            단양군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>환경/관광</span></div>
                <ol>
                    <li><span>아프리카돼지열병</span></li>
                    <li><span>야생멧돼지</span></li>
                    <li><span>멧돼지폐사체</span></li>
                    <li><span>세계지질공원</span></li>
                    <li><span>시루섬</span></li>
                    <li><span>국가지질공원</span></li>
                    <li><span>만천하스카이워크</span></li>
                    <li><span>소백산국립공원</span></li>
                    <li><span>공원인증</span></li>
                    <li><span>수양개빛터널</span></li>
                    <li><span>섬의기적</span></li>
                    <li><span>단양황토마늘</span></li>
                    <li><span>과수화상병</span></li>
                    <li><span>유네스코세계</span></li>
                    <li><span>사체발견</span></li>
                    <li><span>고수동굴</span></li>
                    <li><span>유해야생동물</span></li>
                    <li><span>감염사례</span></li>
                    <li><span>온달동굴</span></li>
                    <li><span>단양마늘축제</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>자연재해/사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>업무개시명령</span></li>
                    <li><span>안전운임</span></li>
                    <li><span>시멘트공장</span></li>
                    <li><span>시멘트업계</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>화물연대조합원</span></li>
                    <li><span>화물연대파업</span></li>
                    <li><span>공공운수노조</span></li>
                    <li><span>호우경보</span></li>
                    <li><span>수색작업</span></li>
                    <li><span>호우특보</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>산사태발생</span></li>
                    <li><span>전면통제</span></li>
                    <li><span>장마전선</span></li>
                    <li><span>토사유출</span></li>
                    <li><span>비피해</span></li>
                    <li><span>출하중단</span></li>
                    <li><span>토사유입</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>지역개발/행정</span></div>
                <ol>
                    <li><span>디지털관광주민증</span></li>
                    <li><span>인구감소지역</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>체류형관광</span></li>
                    <li><span>생활인구</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>소멸위기</span></li>
                    <li><span>단양사랑상품권</span></li>
                    <li><span>관광자원</span></li>
                    <li><span>특례군법제화</span></li>
                    <li><span>할인혜택</span></li>
                    <li><span>지방소멸대응</span></li>
                    <li><span>관광도시</span></li>
                    <li><span>지방중소도시</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>소멸대응기금</span></li>
                    <li><span>폐기물반입세</span></li>
                    <li><span>국가지질공원</span></li>
                    <li><span>생산적일손</span></li>
                </ol>
            </div>
            `,
            영동군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>자연재해/사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>일산화탄소중독</span></li>
                    <li><span>방류량</span></li>
                    <li><span>산불발생</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>산천열차</span></li>
                    <li><span>철제구조물</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>궤도이탈</span></li>
                    <li><span>한국수자원공사</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>탈선사고</span></li>
                    <li><span>항공철도사고</span></li>
                    <li><span>복구작업</span></li>
                    <li><span>영동터널인근</span></li>
                    <li><span>철도사고조사</span></li>
                    <li><span>홍수통제소</span></li>
                    <li><span>홍수경보</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>지역발전/행정</span></div>
                <ol>
                    <li><span>일라이트</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>세계국악엑스포</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>평생학습도시</span></li>
                    <li><span>양수발전소건설</span></li>
                    <li><span>외국인계절근로자</span></li>
                    <li><span>삶의질</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>고향사랑기부금</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>고령자복지주택</span></li>
                    <li><span>신비광물</span></li>
                    <li><span>스마트농업육성</span></li>
                    <li><span>스마트복합쉼터</span></li>
                    <li><span>한국수력원자력</span></li>
                    <li><span>일라이트산업육성</span></li>
                    <li><span>중금속흡착항균</span></li>
                    <li><span>공공임대주택</span></li>
                    <li><span>인구감소</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>문화/행사</span></div>
                <ol>
                    <li><span>레인보우힐링관광지</span></li>
                    <li><span>노근리평화공원</span></li>
                    <li><span>노근리사건희생자</span></li>
                    <li><span>과일나라테마공원</span></li>
                    <li><span>물한계곡</span></li>
                    <li><span>금강유역환경청</span></li>
                    <li><span>월류봉</span></li>
                    <li><span>문화예술회관</span></li>
                    <li><span>한국와인</span></li>
                    <li><span>노근리국제평화재단</span></li>
                    <li><span>도마령</span></li>
                    <li><span>영동와인</span></li>
                    <li><span>영동와인터널</span></li>
                    <li><span>샤인머스켓</span></li>
                    <li><span>난계국악축제</span></li>
                    <li><span>쌍굴다리</span></li>
                    <li><span>한국와인대상</span></li>
                    <li><span>지리산에방사</span></li>
                    <li><span>글로벌평화포럼</span></li>
                    <li><span>영동포도축제</span></li>
                </ol>
            </div>
            `,
            보은군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>지역발전/복지</span></div>
                <ol>
                    <li><span>업무협약</span></li>
                    <li><span>고속도로건설</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>도시형농촌</span></li>
                    <li><span>평생학습도시</span></li>
                    <li><span>문화재관람료</span></li>
                    <li><span>국가지정문화재</span></li>
                    <li><span>한복교복</span></li>
                    <li><span>장애인복지</span></li>
                    <li><span>판동초등학교</span></li>
                    <li><span>국립등산학교</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>고령자복지주택</span></li>
                    <li><span>대전보은고속도</span></li>
                    <li><span>지방소멸대응</span></li>
                    <li><span>농업인공익수당</span></li>
                    <li><span>인구감소지역</span></li>
                    <li><span>초등학교학생</span></li>
                    <li><span>외국인계절근로자</span></li>
                    <li><span>인구감소</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>자연재해/사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>한파경보</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>수리티터널</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>15인승승합차</span></li>
                    <li><span>계절근로자</span></li>
                    <li><span>중대재해처벌법</span></li>
                    <li><span>저온현상</span></li>
                    <li><span>지진발생</span></li>
                    <li><span>화물차운전자</span></li>
                    <li><span>공직선거법위반</span></li>
                    <li><span>일가족</span></li>
                    <li><span>심정지상태</span></li>
                    <li><span>냉해피해</span></li>
                    <li><span>마약사범</span></li>
                    <li><span>적재물추락사고</span></li>
                    <li><span>철제코일</span></li>
                    <li><span>주택불</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>환경/관광/행사</span></div>
                <ol>
                    <li><span>아프리카돼지</span></li>
                    <li><span>야생멧돼지</span></li>
                    <li><span>속리산국립공원</span></li>
                    <li><span>속리산말티재</span></li>
                    <li><span>대추온라인축제</span></li>
                    <li><span>멧돼지폐사체</span></li>
                    <li><span>방역시설설치</span></li>
                    <li><span>양돈농장</span></li>
                    <li><span>구제역발생</span></li>
                    <li><span>보물지정</span></li>
                    <li><span>과수화상병</span></li>
                    <li><span>숲체험휴양마을</span></li>
                    <li><span>뱃들공원</span></li>
                    <li><span>솔향공원</span></li>
                    <li><span>신화여행축제</span></li>
                    <li><span>농촌체험관</span></li>
                    <li><span>국가지정문화재</span></li>
                    <li><span>알몸마라톤대회</span></li>
                    <li><span>성보박물관건립</span></li>
                    <li><span>케이블카설치</span></li>
                </ol>
            </div>
            `,
            옥천군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>자연재해/사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>한국수자원공사</span></li>
                    <li><span>전기울타리</span></li>
                    <li><span>산불발생</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>지진발생</span></li>
                    <li><span>용담댐과다방류</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>특별재난지역선포</span></li>
                    <li><span>울타리감전</span></li>
                    <li><span>방류량</span></li>
                    <li><span>폭염주의보</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>하류지역</span></li>
                    <li><span>추돌사고</span></li>
                    <li><span>폭염특보</span></li>
                    <li><span>비피해</span></li>
                    <li><span>살인미수혐의</span></li>
                    <li><span>야생동물퇴치</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>지역발전/행정</span></div>
                <ol>
                    <li><span>디지털관광주민</span></li>
                    <li><span>수소전기화물차</span></li>
                    <li><span>인구감소지역</span></li>
                    <li><span>지역아동센터</span></li>
                    <li><span>행정복지센터</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>향수OK카드</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>스마트팜</span></li>
                    <li><span>산림생명자원</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>아동친화도시</span></li>
                    <li><span>공립형지역</span></li>
                    <li><span>스마트복합쉼터</span></li>
                    <li><span>옥천테크노밸리</span></li>
                    <li><span>옥천군민도서관</span></li>
                    <li><span>지방소멸대응</span></li>
                    <li><span>화물차보급시범</span></li>
                    <li><span>아동센터건립</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>관광/문화/행사</span></div>
                <ol>
                    <li><span>전통문화체험관</span></li>
                    <li><span>향수호수길</span></li>
                    <li><span>포도복숭아축제</span></li>
                    <li><span>육영수여사생가</span></li>
                    <li><span>문화예술회관</span></li>
                    <li><span>유채꽃축제</span></li>
                    <li><span>향수옥천포도</span></li>
                    <li><span>도선운항</span></li>
                    <li><span>옥천로컬푸드직매장</span></li>
                    <li><span>국가생태관광지역</span></li>
                    <li><span>보물지정</span></li>
                    <li><span>수질보전특별대책지역</span></li>
                    <li><span>샤인머스켓</span></li>
                    <li><span>공동체라디오</span></li>
                    <li><span>지용문학공원</span></li>
                    <li><span>관광명소</span></li>
                    <li><span>황새터</span></li>
                    <li><span>옥천공설운동장</span></li>
                    <li><span>국가지정문화재</span></li>
                    <li><span>옥수수감자축제</span></li>
                </ol>
            </div>
            `,
            음성군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>부동산/지역개발</span></div>
                <ol>
                    <li><span>국립소방병원</span></li>
                    <li><span>기업복합도시</span></li>
                    <li><span>중부내륙철도</span></li>
                    <li><span>푸르지오더퍼스트</span></li>
                    <li><span>푸르지오센터피크</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>현대에너지솔루션</span></li>
                    <li><span>금왕테크노밸리</span></li>
                    <li><span>산학융합지구</span></li>
                    <li><span>국민체육센터</span></li>
                    <li><span>커뮤니티시설</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>지방중소도시</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>미분양관리지역</span></li>
                    <li><span>음성푸르지오마크베르</span></li>
                    <li><span>우미린풀하우스</span></li>
                    <li><span>전매가능</span></li>
                    <li><span>음성천연가스발전소</span></li>
                    <li><span>4차국가철도망구축</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>자연재해/사건사고</span></div>
                <ol>
                    <li><span>고병원성조류인플루엔자</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>가금농장</span></li>
                    <li><span>육용오리농장</span></li>
                    <li><span>방역당국</span></li>
                    <li><span>메추리농장</span></li>
                    <li><span>살처분</span></li>
                    <li><span>과수화상병</span></li>
                    <li><span>야생조류</span></li>
                    <li><span>아프리카돼지열병</span></li>
                    <li><span>검사진행</span></li>
                    <li><span>흡혈곤충</span></li>
                    <li><span>바이러스성질병</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>야생멧돼지</span></li>
                    <li><span>수해복구봉사</span></li>
                    <li><span>인도돌진</span></li>
                    <li><span>4대강사업</span></li>
                    <li><span>산사태위기경보</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정/행사</span></div>
                <ol>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>음성품바축제</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>여성친화도시</span></li>
                    <li><span>정주여건개선</span></li>
                    <li><span>외국인계절근로자</span></li>
                    <li><span>농촌중심지활성화</span></li>
                    <li><span>지역사랑상품권</span></li>
                    <li><span>햇사레복숭아</span></li>
                    <li><span>외국인지원센터</span></li>
                    <li><span>지역화폐</span></li>
                    <li><span>한우능력평가</span></li>
                    <li><span>고향사랑기부금</span></li>
                    <li><span>음성청결고추</span></li>
                    <li><span>음성명작페스티벌</span></li>
                    <li><span>음성교육지원</span></li>
                    <li><span>가스안전체험</span></li>
                    <li><span>친화도시조성</span></li>
                    <li><span>국제결혼지원</span></li>
                </ol>
            </div>
            `,
            진천군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>행정/복지</span></div>
                <ol>
                    <li><span>진천국가공무원인재개발원</span></li>
                    <li><span>아프간특별기여자</span></li>
                    <li><span>지방재건팀</span></li>
                    <li><span>한국직업훈련원</span></li>
                    <li><span>바그람한국병원</span></li>
                    <li><span>임시생활시설</span></li>
                    <li><span>군수송기</span></li>
                    <li><span>아동친화도시</span></li>
                    <li><span>여성친화도시</span></li>
                    <li><span>국내이송</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>친화도시조성</span></li>
                    <li><span>인천공항아프가니스탄</span></li>
                    <li><span>도의적책임</span></li>
                    <li><span>천리안위성</span></li>
                    <li><span>비자발급</span></li>
                    <li><span>지역화폐</span></li>
                    <li><span>친화도시인증</span></li>
                    <li><span>여성농업인</span></li>
                    <li><span>국가기상위성센터</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>지역개발/지역행사</span></div>
                <ol>
                    <li><span>한화큐셀</span></li>
                    <li><span>국가철도망구축</span></li>
                    <li><span>진천선수촌</span></li>
                    <li><span>수도권내륙선</span></li>
                    <li><span>국가대표선수</span></li>
                    <li><span>내륙선광역철도</span></li>
                    <li><span>체육비전보고회</span></li>
                    <li><span>태양광모듈</span></li>
                    <li><span>롯데글로벌로지스</span></li>
                    <li><span>태양광발전소</span></li>
                    <li><span>탠덤셀</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>CJ블로썸캠퍼스</span></li>
                    <li><span>미분양관리지역</span></li>
                    <li><span>비오솔</span></li>
                    <li><span>스포츠산업</span></li>
                    <li><span>지역발전</span></li>
                    <li><span>전기생산</span></li>
                    <li><span>항저우아시안게임</span></li>
                    <li><span>진천사랑상품권</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>자연재해/사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>병원성조류인플루엔자</span></li>
                    <li><span>육용오리농장</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>한성식품</span></li>
                    <li><span>과수화상병</span></li>
                    <li><span>가금농장</span></li>
                    <li><span>방역당국</span></li>
                    <li><span>공장불</span></li>
                    <li><span>항원검출</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>김치공장</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>면허취소수준</span></li>
                    <li><span>배추무</span></li>
                    <li><span>비행단소속</span></li>
                    <li><span>수색작업</span></li>
                    <li><span>도로교통법</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>완제품포장김치</span></li>
                </ol>
            </div>
            `,
            괴산군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>자연재해/사건사고</span></div>
                <ol>
                    <li><span>지진발생</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>괴산댐</span></li>
                    <li><span>과수화상병</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>규모41지진</span></li>
                    <li><span>피해복구</span></li>
                    <li><span>중앙재난안전</span></li>
                    <li><span>전자발찌훼손</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>홍수통제소</span></li>
                    <li><span>홍수주의보</span></li>
                    <li><span>구호물품</span></li>
                    <li><span>대피령</span></li>
                    <li><span>집중호우</span></li>
                    <li><span>돼지열병</span></li>
                    <li><span>댐하류지역</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>괴산수력발전소</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>문화/행사</span></div>
                <ol>
                    <li><span>세계유기농산업</span></li>
                    <li><span>유기농산업엑스포</span></li>
                    <li><span>육군학생군사</span></li>
                    <li><span>대학찰옥수수</span></li>
                    <li><span>산막이옛길</span></li>
                    <li><span>절임배추</span></li>
                    <li><span>유기농엑스포광장</span></li>
                    <li><span>괴산김장축제</span></li>
                    <li><span>황금맛찰옥수수</span></li>
                    <li><span>신임장교</span></li>
                    <li><span>학사사관</span></li>
                    <li><span>괴산고추축제</span></li>
                    <li><span>국제행사승인</span></li>
                    <li><span>문장대온천개발</span></li>
                    <li><span>농총진흥청</span></li>
                    <li><span>엑스포성공개최</span></li>
                    <li><span>천연기념물지정</span></li>
                    <li><span>문장대온천</span></li>
                    <li><span>산업엑스포조직</span></li>
                    <li><span>유기농업군</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>지역개발/행정</span></div>
                <ol>
                    <li><span>인구감소지역</span></li>
                    <li><span>미니복합타운</span></li>
                    <li><span>노지스마트농업</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>지역활력타운</span></li>
                    <li><span>농촌중심지활성화</span></li>
                    <li><span>여성친화도시</span></li>
                    <li><span>소멸대응기금</span></li>
                    <li><span>괴산메가폴리스</span></li>
                    <li><span>출산장려금</span></li>
                    <li><span>외국인계절근로자</span></li>
                    <li><span>괴산사랑상품권</span></li>
                    <li><span>평생학습도시</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>스마트팜</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>다목적체육관</span></li>
                    <li><span>산업거점단지</span></li>
                    <li><span>지방소멸위기</span></li>
                </ol>
            </div>
            `,
            증평군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>행정/지역개발</span></div>
                <ol>
                    <li><span>SK아이이테크놀로지</span></li>
                    <li><span>초등학교신설</span></li>
                    <li><span>에듀팜특구</span></li>
                    <li><span>친환경전력</span></li>
                    <li><span>여성친화도시</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>아동친화도시</span></li>
                    <li><span>중앙투자심사</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>송산초신설</span></li>
                    <li><span>장애인복지</span></li>
                    <li><span>스마트팜</span></li>
                    <li><span>미분양관리지역</span></li>
                    <li><span>증평사랑으뜸상품권</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>리튬이온배터리분리막</span></li>
                    <li><span>농촌융복합</span></li>
                    <li><span>친화도시조성</span></li>
                    <li><span>융복합산업</span></li>
                    <li><span>노인복지관</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>행사/문화</span></div>
                <ol>
                    <li><span>장사씨름대회</span></li>
                    <li><span>미루나무숲</span></li>
                    <li><span>종합스포츠센터</span></li>
                    <li><span>김득신문학관</span></li>
                    <li><span>독서왕</span></li>
                    <li><span>증평군립도서관</span></li>
                    <li><span>민속체험박물관</span></li>
                    <li><span>증평민속체험</span></li>
                    <li><span>증평인삼골</span></li>
                    <li><span>장뜰시장</span></li>
                    <li><span>좌구산휴양랜드</span></li>
                    <li><span>인삼골축제</span></li>
                    <li><span>증평들노래축제</span></li>
                    <li><span>생산적일손</span></li>
                    <li><span>인삼씨름단</span></li>
                    <li><span>문화의집</span></li>
                    <li><span>명상의집</span></li>
                    <li><span>일손봉사</span></li>
                    <li><span>단오장사씨름</span></li>
                    <li><span>두레농요시연</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>자연재해/사건사고</span></div>
                <ol>
                    <li><span>구제역발생</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>택시기사</span></li>
                    <li><span>과수화상병</span></li>
                    <li><span>한우농장</span></li>
                    <li><span>방역당국</span></li>
                    <li><span>한파경보</span></li>
                    <li><span>정밀검사</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>개도살</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>교통법위반</span></li>
                    <li><span>역학조사반</span></li>
                    <li><span>동물보호법위반</span></li>
                    <li><span>전기울타리</span></li>
                    <li><span>옹벽파손</span></li>
                    <li><span>공장불</span></li>
                    <li><span>소재한우농장</span></li>
                    <li><span>도로교통법</span></li>
                </ol>
            </div>
            `,
            청주시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>자연재해/사건사고</span></div>
                <ol>
                    <li><span>궁평2지하차도</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>변전하사</span></li>
                    <li><span>지하차도침수사고</span></li>
                    <li><span>미호천제방유실</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>구제역발생</span></li>
                    <li><span>배수작업</span></li>
                    <li><span>임시제방</span></li>
                    <li><span>수색작업</span></li>
                    <li><span>공직선거법위반</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>전동킥보드</span></li>
                    <li><span>특별재난지역선포</span></li>
                    <li><span>에코프로비엠</span></li>
                    <li><span>성전환수술</span></li>
                    <li><span>호우특보</span></li>
                    <li><span>심정지상태</span></li>
                    <li><span>공공운수노조</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>지역개발/부동산</span></div>
                <ol>
                    <li><span>LG에너지솔루션</span></li>
                    <li><span>과학기술정보통신부</span></li>
                    <li><span>다목적방사광가속기</span></li>
                    <li><span>규제지역</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>국가철도망구축</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>신영지웰푸르지오</span></li>
                    <li><span>푸르지오테크노폴리스센트럴</span></li>
                    <li><span>오창과학산업단지</span></li>
                    <li><span>오창에너지플랜트</span></li>
                    <li><span>충청권광역철도</span></li>
                    <li><span>지방중소도시</span></li>
                    <li><span>힐스테이트</span></li>
                    <li><span>조정대상지역지정</span></li>
                    <li><span>에어로폴리스</span></li>
                    <li><span>오송바이오폴리스</span></li>
                    <li><span>충청권메가시티</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>문화/행정</span></div>
                <ol>
                    <li><span>프랑스국립도서관</span></li>
                    <li><span>청주공예비엔날레</span></li>
                    <li><span>소각시설</span></li>
                    <li><span>세종대왕</span></li>
                    <li><span>국립현대미술관</span></li>
                    <li><span>고인쇄박물관</span></li>
                    <li><span>청주페이</span></li>
                    <li><span>청주고인쇄박물관</span></li>
                    <li><span>대형마트의무휴업</span></li>
                    <li><span>초정행궁</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>여성친화도시</span></li>
                    <li><span>문화제조창</span></li>
                    <li><span>문화산업진흥</span></li>
                    <li><span>시내버스준공영제</span></li>
                    <li><span>포레나도서관</span></li>
                    <li><span>행정사무감사</span></li>
                    <li><span>청원생명쌀</span></li>
                    <li><span>청원구문화제</span></li>
                    <li><span>아동친화도시</span></li>
                </ol>
            </div>
            `,
        },
        chungnam: {
            공주시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>재해/범죄</span></div>
                <ol>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>호우특보</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>기소/재판</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>금강홍수통제소</span></li>
                    <li><span>지진발생</span></li>
                    <li><span>가짜경유</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>수해복구</span></li>
                    <li><span>특별재난지역선포</span></li>
                    <li><span>재산피해</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>징역선고</span></li>
                    <li><span>1심재판부</span></li>
                    <li><span>폭염주의보</span></li>
                    <li><span>집중호우</span></li>
                    <li><span>동료재소자</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>소방의날/관광/문화</span></div>
                <ol>
                    <li><span>중앙소방학교</span></li>
                    <li><span>58주년소방의날기념식</span></li>
                    <li><span>전국소방기술경연대회</span></li>
                    <li><span>소방학교화재진압훈련장</span></li>
                    <li><span>후보생졸업및임용식</span></li>
                    <li><span>유구색동수국정원</span></li>
                    <li><span>무령왕릉과왕릉원</span></li>
                    <li><span>국립공주박물관</span></li>
                    <li><span>무령왕과왕비</span></li>
                    <li><span>무령왕릉출토유물</span></li>
                    <li><span>완전한상태로발견</span></li>
                    <li><span>계룡산국립공원</span></li>
                    <li><span>무령왕릉발굴</span></li>
                    <li><span>1계급특별승진</span></li>
                    <li><span>25대임금</span></li>
                    <li><span>아트센터고마</span></li>
                    <li><span>소방재난본부</span></li>
                    <li><span>소방공무원</span></li>
                    <li><span>화재진압전술</span></li>
                    <li><span>6개종목</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정/복지</span></div>
                <ol>
                    <li><span>공주대학교부설특수학교설립</span></li>
                    <li><span>공주대학교옥룡캠퍼스</span></li>
                    <li><span>행정수도이전</span></li>
                    <li><span>인구감소지역</span></li>
                    <li><span>소공인복합지원센터</span></li>
                    <li><span>공공기관지방이전</span></li>
                    <li><span>특수학교설립간담회</span></li>
                    <li><span>발달장애</span></li>
                    <li><span>행정수도완성</span></li>
                    <li><span>여성농업인특수건강검진</span></li>
                    <li><span>장애학생</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>청년농촌보금자리</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>장애인거주</span></li>
                    <li><span>특성화특수학교</span></li>
                    <li><span>발달장애인</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>어르신놀이터</span></li>
                    <li><span>고령친화도시</span></li>
                </ol>
            </div>
            `,
            보령시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>재해/사건사고</span></div>
                <ol>
                    <li><span>충남보령해양경찰</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>산불발생</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>화재발생</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>산불영향구역</span></li>
                    <li><span>산불3단계</span></li>
                    <li><span>대천해수욕장</span></li>
                    <li><span>지진발생</span></li>
                    <li><span>재산피해</span></li>
                    <li><span>경비함정</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>용수공급</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>지역산업/행정</span></div>
                <ol>
                    <li><span>보령해저터널개통</span></li>
                    <li><span>블루수소생산</span></li>
                    <li><span>수소생산기지</span></li>
                    <li><span>스마트팜</span></li>
                    <li><span>해양레저관광도시</span></li>
                    <li><span>한국중부발전</span></li>
                    <li><span>탈모치료비지원</span></li>
                    <li><span>보령사랑상품권</span></li>
                    <li><span>해양머드박람회</span></li>
                    <li><span>보령해양머드축제</span></li>
                    <li><span>대천해수욕장</span></li>
                    <li><span>청정수소생산</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>폐광지역</span></li>
                    <li><span>77호선</span></li>
                    <li><span>생산기지구축</span></li>
                    <li><span>최장해저터널</span></li>
                    <li><span>해양관광케이블카</span></li>
                    <li><span>블루수소플랜트</span></li>
                    <li><span>침적쓰레기</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>축제/관광</span></div>
                <ol>
                    <li><span>보령해양머드박람회</span></li>
                    <li><span>보령머드축제</span></li>
                    <li><span>대천해수욕장</span></li>
                    <li><span>어촌체험휴양마을</span></li>
                    <li><span>해양레저관광도시</span></li>
                    <li><span>보령축제관광재단</span></li>
                    <li><span>서해랑길</span></li>
                    <li><span>축제의날</span></li>
                    <li><span>문화의전당</span></li>
                    <li><span>머드의미래가치</span></li>
                    <li><span>보령머드테마파크</span></li>
                    <li><span>외국인관광객</span></li>
                    <li><span>보령머드광장</span></li>
                    <li><span>국민승리축제</span></li>
                    <li><span>신비의바닷길</span></li>
                    <li><span>관광두레피디</span></li>
                    <li><span>관광두레사업</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>생활인구</span></li>
                    <li><span>국제요트대회</span></li>
                </ol>
            </div>
            `,
            아산시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>경찰국/사건사고</span></div>
                <ol>
                    <li><span>전국경찰서장회의</span></li>
                    <li><span>특정범죄가중처벌법</span></li>
                    <li><span>민식이법</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>경찰국신설</span></li>
                    <li><span>기소/재판</span></li>
                    <li><span>어린이보호구역스쿨존</span></li>
                    <li><span>도로교통법</span></li>
                    <li><span>횡단보도</span></li>
                    <li><span>인면피해</span></li>
                    <li><span>초등학교앞</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>구속기소</span></li>
                    <li><span>집단행동</span></li>
                    <li><span>처벌강화</span></li>
                    <li><span>신설반대</span></li>
                    <li><span>야생조류분변</span></li>
                    <li><span>호우경보</span></li>
                    <li><span>안전운전의무</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>부동산</span></div>
                <ol>
                    <li><span>비규제지역</span></li>
                    <li><span>힐스테이트자이아산센텀</span></li>
                    <li><span>한국부동산원청약홈</span></li>
                    <li><span>천안한양수자인에코시티</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>1호선</span></li>
                    <li><span>1순위청약</span></li>
                    <li><span>청약경쟁</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>아산자이그랜드파크</span></li>
                    <li><span>민간임대아파트</span></li>
                    <li><span>e편한세상탕정퍼스트드림</span></li>
                    <li><span>아산탕정지구</span></li>
                    <li><span>미분양관리지역</span></li>
                    <li><span>청약접수</span></li>
                    <li><span>청약가능</span></li>
                    <li><span>19세이상</span></li>
                    <li><span>생활숙박시설</span></li>
                    <li><span>생활인프라</span></li>
                    <li><span>특별공급시작</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>지역산업/행정</span></div>
                <ol>
                    <li><span>탕정테크노일반산업단지</span></li>
                    <li><span>자립준비청년</span></li>
                    <li><span>충남자립지원전담기관</span></li>
                    <li><span>베이밸리메가시티</span></li>
                    <li><span>법곤충감정실</span></li>
                    <li><span>차량용반도체</span></li>
                    <li><span>아산디스플레이시티</span></li>
                    <li><span>과속경보시스템표지판</span></li>
                    <li><span>아산탕정지구</span></li>
                    <li><span>액정표시장치</span></li>
                    <li><span>삼성디스플레이아산</span></li>
                    <li><span>삼성희망디딤돌충남센터</span></li>
                    <li><span>사망시간</span></li>
                    <li><span>변사사건</span></li>
                    <li><span>대규모산업단지</span></li>
                    <li><span>출산장려금</span></li>
                    <li><span>곤충감정기법</span></li>
                    <li><span>준비청년간담회</span></li>
                    <li><span>개구리사다리</span></li>
                    <li><span>자립생활관</span></li>
                </ol>
            </div>
            `,
            서산시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>성범죄/사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>20전투비행단소속</span></li>
                    <li><span>기소/구속</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>인근병원이송</span></li>
                    <li><span>국방부검찰단</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>공군여성부사관사망사건</span></li>
                    <li><span>강제추행</span></li>
                    <li><span>진실화해위</span></li>
                    <li><span>군인권센터</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>2차가해</span></li>
                    <li><span>살해혐의</span></li>
                    <li><span>1심재판부</span></li>
                    <li><span>차량뒷자리</span></li>
                    <li><span>보통군사법원</span></li>
                    <li><span>청원휴가</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>인프라/지역사업</span></div>
                <ol>
                    <li><span>동서횡단철도건설</span></li>
                    <li><span>바이오웰빙연구특구</span></li>
                    <li><span>국가철도망구축계획</span></li>
                    <li><span>서산테크노밸리</span></li>
                    <li><span>서산공항건설</span></li>
                    <li><span>대산수소연료전지발전소</span></li>
                    <li><span>바이오가스화시설</span></li>
                    <li><span>부생수소</span></li>
                    <li><span>탄산화제품</span></li>
                    <li><span>대산석유화학단지</span></li>
                    <li><span>드론실증도시</span></li>
                    <li><span>민간임대아파트</span></li>
                    <li><span>배터리사업</span></li>
                    <li><span>대산그린에너지</span></li>
                    <li><span>LG에너지솔루션</span></li>
                    <li><span>공장건설</span></li>
                    <li><span>수자인에코시티</span></li>
                    <li><span>고순도수소</span></li>
                    <li><span>세계최초</span></li>
                    <li><span>수소전기트럭</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>관광/농업</span></div>
                <ol>
                    <li><span>가로림만해양정원조성사업</span></li>
                    <li><span>바이오웰빙연구특구</span></li>
                    <li><span>멸종위기야생생물</span></li>
                    <li><span>해미국제성지</span></li>
                    <li><span>청년농업인</span></li>
                    <li><span>서산공항건설</span></li>
                    <li><span>보령해저터널</span></li>
                    <li><span>가로림만해상교량건설</span></li>
                    <li><span>농업바이오단지조성</span></li>
                    <li><span>스마트팜</span></li>
                    <li><span>철새도래지</span></li>
                    <li><span>서산버드랜드</span></li>
                    <li><span>염생식물</span></li>
                    <li><span>국가해양정원</span></li>
                    <li><span>서산간척지</span></li>
                    <li><span>점박이물범</span></li>
                    <li><span>병원성조류인플루엔자</span></li>
                    <li><span>야생조류</span></li>
                    <li><span>전략작물재배</span></li>
                    <li><span>식물군락지</span></li>
                </ol>
            </div>
            `,
            태안군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>한국서부발전</span></li>
                    <li><span>서부발전</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>소형보트</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>중대재해기업처벌</span></li>
                    <li><span>호우특보</span></li>
                    <li><span>기업처벌법</span></li>
                    <li><span>보트발견</span></li>
                    <li><span>호우경보</span></li>
                    <li><span>군해경</span></li>
                    <li><span>재난안전대책본부</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>태안해경</span></li>
                    <li><span>해경관계자</span></li>
                    <li><span>중대재해법</span></li>
                    <li><span>밀입국중국인</span></li>
                    <li><span>태안밀입국</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>산업</span></div>
                <ol>
                    <li><span>드라이빙익스피리언스</span></li>
                    <li><span>시험발사</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>한국발전기술</span></li>
                    <li><span>국내최대규모</span></li>
                    <li><span>동서트레일</span></li>
                    <li><span>한국타이어앤테크놀로지</span></li>
                    <li><span>발사성공</span></li>
                    <li><span>탄두중량</span></li>
                    <li><span>주행시험장</span></li>
                    <li><span>태양광사업</span></li>
                    <li><span>뉴딜300사업</span></li>
                    <li><span>한화종합화학</span></li>
                    <li><span>안면도관광지</span></li>
                    <li><span>어촌뉴딜</span></li>
                    <li><span>주행체험시설</span></li>
                    <li><span>수소혼소발전</span></li>
                    <li><span>태안발전본부</span></li>
                    <li><span>안면도태양광</span></li>
                    <li><span>종합시험장</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>문화/행정</span></div>
                <ol>
                    <li><span>천리포수목원</span></li>
                    <li><span>해양치유센터</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>해양문화재연구소</span></li>
                    <li><span>국립해양문화재</span></li>
                    <li><span>리포해수욕장</span></li>
                    <li><span>해양치유산업</span></li>
                    <li><span>유류피해극복</span></li>
                    <li><span>안면도관광지</span></li>
                    <li><span>태안유류피해</span></li>
                    <li><span>해양치유자원</span></li>
                    <li><span>반려동물</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>발달장애</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>장애인특화</span></li>
                    <li><span>피해극복기록물</span></li>
                    <li><span>기름유출사고</span></li>
                    <li><span>반려동물친화</span></li>
                    <li><span>발달장애인</span></li>
                </ol>
            </div>
            `,
            금산군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>산불/호우</span></div>
                <ol>
                    <li><span>산불발생</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>산불3단계</span></li>
                    <li><span>방류량</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>산불영향구역</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>한국수자원공사</span></li>
                    <li><span>피해보상</span></li>
                    <li><span>피해주민</span></li>
                    <li><span>환경분쟁조정</span></li>
                    <li><span>산불진화</span></li>
                    <li><span>용담댐방류피해</span></li>
                    <li><span>건조한날씨</span></li>
                    <li><span>산불진화헬기</span></li>
                    <li><span>인삼밭</span></li>
                    <li><span>홍수관리구역</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>여신도성폭행</span></div>
                <ol>
                    <li><span>기독교복음선교회</span></li>
                    <li><span>구속기소</span></li>
                    <li><span>월명동수련원</span></li>
                    <li><span>구속/재판</span></li>
                    <li><span>금산수련원</span></li>
                    <li><span>성추행혐의</span></li>
                    <li><span>여신도성폭행</span></li>
                    <li><span>JMS총재</span></li>
                    <li><span>성폭행혐의</span></li>
                    <li><span>강제추행</span></li>
                    <li><span>준유사강간</span></li>
                    <li><span>홍콩국적여신</span></li>
                    <li><span>증인신문</span></li>
                    <li><span>호주국적</span></li>
                    <li><span>혐의부인</span></li>
                    <li><span>특정신체부위</span></li>
                    <li><span>추가기소</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>항거불능상태</span></li>
                    <li><span>20대여신</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>산업/행정</span></div>
                <ol>
                    <li><span>지방소멸대응기금</span></li>
                    <li><span>고순도수산화리튬생산</span></li>
                    <li><span>리튬플러스</span></li>
                    <li><span>인구감소지역</span></li>
                    <li><span>세상금산프라임포레</span></li>
                    <li><span>하이드로리튬생산공장</span></li>
                    <li><span>양수발전소유치</span></li>
                    <li><span>배터리급수산화리튬</span></li>
                    <li><span>금산위성센터</span></li>
                    <li><span>금산사랑상품권</span></li>
                    <li><span>하이드로리튬</span></li>
                    <li><span>탄산리튬</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>남부출장소</span></li>
                    <li><span>브이첨단소재</span></li>
                    <li><span>새뜰마을사업</span></li>
                    <li><span>KTSAT금산</span></li>
                    <li><span>배분금액</span></li>
                    <li><span>비전선포식</span></li>
                    <li><span>고향사랑기부제</span></li>
                </ol>
            </div>
            `,
            논산시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>산불/사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>호우특보</span></li>
                    <li><span>홍수경보</span></li>
                    <li><span>집중호우피해</span></li>
                    <li><span>특별재난지역선포</span></li>
                    <li><span>심정지상태</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>산사태발생</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>가짜경유</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>산불발생</span></li>
                    <li><span>재산피해</span></li>
                    <li><span>산불진화헬기</span></li>
                    <li><span>시민안전보험</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>행정/부동산</span></div>
                <ol>
                    <li><span>충남논산육군훈련소</span></li>
                    <li><span>논산아이파크</span></li>
                    <li><span>행복상생프로젝트</span></li>
                    <li><span>육사이전</span></li>
                    <li><span>지역농가</span></li>
                    <li><span>군조리로봇</span></li>
                    <li><span>조리병</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>미래교육지구</span></li>
                    <li><span>호남선고속화사업</span></li>
                    <li><span>국방미래기술</span></li>
                    <li><span>흡연허용</span></li>
                    <li><span>미래기술연구센터</span></li>
                    <li><span>푸르지오더퍼스트</span></li>
                    <li><span>수소경제도시전환</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>평생학습도시</span></li>
                    <li><span>규제지역해제</span></li>
                    <li><span>브랜드아파트</span></li>
                    <li><span>분양예정</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>관광/축제</span></div>
                <ol>
                    <li><span>탑정호출렁다리</span></li>
                    <li><span>논산탑정호</span></li>
                    <li><span>강경젓갈축제</span></li>
                    <li><span>논산아트센터</span></li>
                    <li><span>딸기향농촌테마공원</span></li>
                    <li><span>탑정호수변생태공원</span></li>
                    <li><span>상생형지역</span></li>
                    <li><span>논산딸기축제</span></li>
                    <li><span>탑정호출렁다리명칭공모전</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>지역일자리</span></li>
                    <li><span>탑정호주변</span></li>
                    <li><span>국내최장</span></li>
                    <li><span>관광명소</span></li>
                    <li><span>문화관광재단</span></li>
                    <li><span>이름공모</span></li>
                    <li><span>관광자원</span></li>
                    <li><span>논산형일자리</span></li>
                    <li><span>축제장</span></li>
                    <li><span>온빛자연휴양림</span></li>
                </ol>
            </div>
            `,
            계룡시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>국방/범죄</span></div>
                <ol>
                    <li><span>충남계룡대</span></li>
                    <li><span>계룡대공군본부</span></li>
                    <li><span>북한의핵미사일위협</span></li>
                    <li><span>국군의날</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>무기징역</span></li>
                    <li><span>홍범도장군</span></li>
                    <li><span>국회국방위원회공군본부</span></li>
                    <li><span>북한도발위협</span></li>
                    <li><span>혐의기소</span></li>
                    <li><span>과학기술강군</span></li>
                    <li><span>징역선고</span></li>
                    <li><span>단거리탄도미사일</span></li>
                    <li><span>한국형3축체계</span></li>
                    <li><span>국방혁신</span></li>
                    <li><span>사드추가배치</span></li>
                    <li><span>해공군</span></li>
                    <li><span>핵무기개발</span></li>
                    <li><span>태세유지</span></li>
                    <li><span>금100돈</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>국군의날/행사</span></div>
                <ol>
                    <li><span>국군의날기념식</span></li>
                    <li><span>계룡세계군문화엑스포</span></li>
                    <li><span>충남계룡시계룡대</span></li>
                    <li><span>국군의날미디어데이행사</span></li>
                    <li><span>계룡대대연병장</span></li>
                    <li><span>계룡문화예술의전당</span></li>
                    <li><span>1공수특전여단</span></li>
                    <li><span>태권도시범단</span></li>
                    <li><span>치유의숲</span></li>
                    <li><span>평화의하모니주제</span></li>
                    <li><span>전투기기동시범</span></li>
                    <li><span>엑스포성공개최</span></li>
                    <li><span>국군의날기념행사</span></li>
                    <li><span>군문화축제</span></li>
                    <li><span>격파시범</span></li>
                    <li><span>축하비행</span></li>
                    <li><span>산림치유프로그램</span></li>
                    <li><span>합동특공무술</span></li>
                    <li><span>멸공의횃불</span></li>
                    <li><span>특수비행팀</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>부동산/행정</span></div>
                <ol>
                    <li><span>충청권광역철도1단계사업</span></li>
                    <li><span>나라사랑보금자리사업</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>계룡한라비발디더센트럴</span></li>
                    <li><span>규제지역</span></li>
                    <li><span>평생학습도시</span></li>
                    <li><span>지방중소도시</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>계룡대실지구</span></li>
                    <li><span>참전용사</span></li>
                    <li><span>1순위청약</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>청약경쟁</span></li>
                    <li><span>계룡사랑상품권</span></li>
                    <li><span>조정대상지역선정</span></li>
                    <li><span>푸르지오더퍼스트</span></li>
                    <li><span>1인세대</span></li>
                    <li><span>커뮤니티시설</span></li>
                    <li><span>브랜드아파트</span></li>
                </ol>
            </div>
            `,
            부여군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>수해/산불</span></div>
                <ol>
                    <li><span>수해복구지원</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>폭염경보</span></li>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>수해복구봉사활동</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>호우경보</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>특별재난지역선포</span></li>
                    <li><span>집중호우피해</span></li>
                    <li><span>응급복구</span></li>
                    <li><span>재산피해</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>수색작업</span></li>
                    <li><span>피해지원</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>안전조치</span></li>
                    <li><span>산불발생</span></li>
                    <li><span>산사태발생</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>문화/관광</span></div>
                <ol>
                    <li><span>국립부여문화재연구소</span></li>
                    <li><span>수륙양용버스</span></li>
                    <li><span>발굴조사</span></li>
                    <li><span>한국전통문화대학교</span></li>
                    <li><span>백제문화단지</span></li>
                    <li><span>천연기념물지정</span></li>
                    <li><span>국가지정문화재</span></li>
                    <li><span>서동연꽃축제</span></li>
                    <li><span>국립부여박물관</span></li>
                    <li><span>부여왕릉원</span></li>
                    <li><span>부여가림성느티나무</span></li>
                    <li><span>정읍내장산단풍나무</span></li>
                    <li><span>일제강점기</span></li>
                    <li><span>부여나성</span></li>
                    <li><span>금동관음보살입상</span></li>
                    <li><span>백제역사문화</span></li>
                    <li><span>백제미소보살</span></li>
                    <li><span>한국전통문화</span></li>
                    <li><span>자연경관</span></li>
                    <li><span>백마강레저파크</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정/농업</span></div>
                <ol>
                    <li><span>지방소멸대응기금</span></li>
                    <li><span>스마트팜</span></li>
                    <li><span>공공형계절근로자</span></li>
                    <li><span>외국인계절근로자</span></li>
                    <li><span>계절근로시범사업</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>인력필요농가</span></li>
                    <li><span>지역화폐</span></li>
                    <li><span>지역중소기업혁신공모</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>결혼청착지원금</span></li>
                    <li><span>노후공공건출물</span></li>
                    <li><span>혁신공모사업</span></li>
                    <li><span>화폐인굿</span></li>
                    <li><span>스마트농업</span></li>
                    <li><span>근로자고용</span></li>
                    <li><span>일자리창출</span></li>
                    <li><span>인구감소지역</span></li>
                    <li><span>주민등록</span></li>
                    <li><span>스테비아토마토</span></li>
                </ol>
            </div>
            `,
            서천군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>호우주의보</span></li>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>대설특보</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>천둥번개동반</span></li>
                    <li><span>구속/기소</span></li>
                    <li><span>온열질환환자</span></li>
                    <li><span>주술의식</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>30대여성</span></li>
                    <li><span>퇴마의식</span></li>
                    <li><span>제설작업</span></li>
                    <li><span>폭염주의보</span></li>
                    <li><span>살해혐의</span></li>
                    <li><span>비피해</span></li>
                    <li><span>재산피해</span></li>
                    <li><span>모녀살해</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>해양쓰레기</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>갯벌/환경</span></div>
                <ol>
                    <li><span>유네스코세계자연유산등재</span></li>
                    <li><span>서천국립생태원</span></li>
                    <li><span>한국의갯벌</span></li>
                    <li><span>갯벌세계자연유산보전본부</span></li>
                    <li><span>국립해양생물자원관</span></li>
                    <li><span>멸종위기야생동물보호시설</span></li>
                    <li><span>멸종위기종</span></li>
                    <li><span>멸종위기야생생물</span></li>
                    <li><span>화산섬과용암동굴</span></li>
                    <li><span>서천갯벌</span></li>
                    <li><span>세계유산위원회</span></li>
                    <li><span>생물다양</span></li>
                    <li><span>외래야생동물보호</span></li>
                    <li><span>보편적가치</span></li>
                    <li><span>보성순천갯벌</span></li>
                    <li><span>람사르습지도시</span></li>
                    <li><span>자연보전연맹</span></li>
                    <li><span>갯벌의가치</span></li>
                    <li><span>서천특화시장</span></li>
                    <li><span>멸종위기철새</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>지역사업/개발</span></div>
                <ol>
                    <li><span>청년마을사업</span></li>
                    <li><span>시골언니프로젝트</span></li>
                    <li><span>삶기술학교</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>장항국가생태산업단지</span></li>
                    <li><span>해양바이오산업</span></li>
                    <li><span>항공보안장비시험인증센터</span></li>
                    <li><span>항만재개발기본계획</span></li>
                    <li><span>곰사육</span></li>
                    <li><span>항공보안장비</span></li>
                    <li><span>멸종위기종</span></li>
                    <li><span>바이오산업화지원</span></li>
                    <li><span>불법증식</span></li>
                    <li><span>청년여성</span></li>
                    <li><span>도시청년</span></li>
                    <li><span>귀농귀촌주택</span></li>
                    <li><span>서천사랑상품권</span></li>
                    <li><span>보호시설</span></li>
                    <li><span>웅담채취</span></li>
                    <li><span>람사르습지도시</span></li>
                </ol>
            </div>
            `,
            홍성군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>산불발생</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>산불3단계</span></li>
                    <li><span>산불영향구역</span></li>
                    <li><span>진화작업</span></li>
                    <li><span>산불진화</span></li>
                    <li><span>대형산불</span></li>
                    <li><span>산불진화헬기</span></li>
                    <li><span>재산피해</span></li>
                    <li><span>교권침해</span></li>
                    <li><span>교육활동침해</span></li>
                    <li><span>시설피해</span></li>
                    <li><span>수업중</span></li>
                    <li><span>산불피해</span></li>
                    <li><span>피해면적</span></li>
                    <li><span>산불재난특수</span></li>
                    <li><span>잔여화선</span></li>
                    <li><span>통합지휘본부</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>행정</span></div>
                <ol>
                    <li><span>서해선복선전철</span></li>
                    <li><span>4차국가철도망구축</span></li>
                    <li><span>내포신도시</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>광천김</span></li>
                    <li><span>추진중</span></li>
                    <li><span>철도망구축계획</span></li>
                    <li><span>충남혁신도시지정</span></li>
                    <li><span>장항선복선전철</span></li>
                    <li><span>이동시간</span></li>
                    <li><span>규모조성</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>국가철도공단</span></li>
                    <li><span>정주여건개선</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>이동가능</span></li>
                    <li><span>복선전철사업</span></li>
                    <li><span>화상상봉장</span></li>
                    <li><span>커뮤니티시설</span></li>
                    <li><span>운영중</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>산업/문화</span></div>
                <ol>
                    <li><span>지역주민</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>아파트매매가격</span></li>
                    <li><span>관광추진조직</span></li>
                    <li><span>매매및전세가격</span></li>
                    <li><span>지역관광추진</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>아파트매매</span></li>
                    <li><span>지역경제</span></li>
                    <li><span>넥스트로컬</span></li>
                    <li><span>거점수거센터</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>배터리재활용</span></li>
                    <li><span>아파트전세가격</span></li>
                    <li><span>사용후배터리</span></li>
                    <li><span>홍성사랑상품권</span></li>
                    <li><span>전기차폐배터리</span></li>
                    <li><span>지속가능</span></li>
                    <li><span>문화관광재단</span></li>
                    <li><span>LG에너지솔루션</span></li>
                </ol>
            </div>
            `,
            청양군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>재해/사건사고</span></div>
                <ol>
                    <li><span>인명피해</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>특별재난지역선포</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>호우특보</span></li>
                    <li><span>누적강수량</span></li>
                    <li><span>집중호우피해</span></li>
                    <li><span>심정지상태</span></li>
                    <li><span>복구작업</span></li>
                    <li><span>피해속출</span></li>
                    <li><span>장마전선</span></li>
                    <li><span>호우경보</span></li>
                    <li><span>추가피해</span></li>
                    <li><span>60대여성</span></li>
                    <li><span>사유시설피해</span></li>
                    <li><span>피해복구</span></li>
                    <li><span>주택침수</span></li>
                    <li><span>옹벽파손</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>행정/복지</span></div>
                <ol>
                    <li><span>고령자복지주택</span></li>
                    <li><span>출산장려금</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>소방시설</span></li>
                    <li><span>충남소방복합</span></li>
                    <li><span>정보화장비</span></li>
                    <li><span>사회적경제혁신타운</span></li>
                    <li><span>생활인구</span></li>
                    <li><span>인구감소</span></li>
                    <li><span>농식품바우처</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>기획교육</span></li>
                    <li><span>장비과교육</span></li>
                    <li><span>청년복합공간</span></li>
                    <li><span>은퇴자공동체마을</span></li>
                    <li><span>지역경제</span></li>
                    <li><span>삶의질</span></li>
                    <li><span>전국농어촌지역</span></li>
                    <li><span>충청소방학교</span></li>
                    <li><span>장비정비센터</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>문화/산업</span></div>
                <ol>
                    <li><span>충남도립파크골프장</span></li>
                    <li><span>파크골프협회</span></li>
                    <li><span>가축분뇨</span></li>
                    <li><span>평생학습도시</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>에너지화시설</span></li>
                    <li><span>청년마을</span></li>
                    <li><span>스마트스쿨</span></li>
                    <li><span>파크골프장</span></li>
                    <li><span>바이오가스</span></li>
                    <li><span>가축분뇨에너지</span></li>
                    <li><span>파크골프장조성</span></li>
                    <li><span>애경라일락길</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>햇빛조절</span></li>
                    <li><span>빛양</span></li>
                    <li><span>전기생산</span></li>
                    <li><span>태양광지열</span></li>
                    <li><span>스마트복합쉼터</span></li>
                    <li><span>지속가능</span></li>
                </ol>
            </div>
            `,
            예산군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>보건/사건사고</span></div>
                <ol>
                    <li><span>과수화상병발생</span></li>
                    <li><span>중앙사고수습본부</span></li>
                    <li><span>중대재해처벌법</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>산업안전보건법</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>중대재해처벌법위반여부</span></li>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>현대제철예산공장</span></li>
                    <li><span>병원성조류인플루엔자</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>방역당국</span></li>
                    <li><span>철골구조물</span></li>
                    <li><span>가금농장</span></li>
                    <li><span>재산피해</span></li>
                    <li><span>과수농가</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>혐의기소</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>인프라/행정</span></div>
                <ol>
                    <li><span>충남예산시장</span></li>
                    <li><span>삽교역신설</span></li>
                    <li><span>서해선복선전철</span></li>
                    <li><span>야생동물구조센터</span></li>
                    <li><span>SK에코플랜트</span></li>
                    <li><span>지역활력타운</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>충남혁신도시지정</span></li>
                    <li><span>그린바이오벤처캠퍼스유치</span></li>
                    <li><span>스마트팜</span></li>
                    <li><span>내포농생명</span></li>
                    <li><span>정주여건개선</span></li>
                    <li><span>예당전원마을</span></li>
                    <li><span>예산형구도심</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>집단에너지시설</span></li>
                    <li><span>지역상생프로젝트</span></li>
                    <li><span>아동친화도시</span></li>
                    <li><span>생명집적지구</span></li>
                    <li><span>산업단지조성사업</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>관광/자연</span></div>
                <ol>
                    <li><span>예산황새공원</span></li>
                    <li><span>예산시장</span></li>
                    <li><span>예당호출렁다리</span></li>
                    <li><span>스플라스리솜리조트</span></li>
                    <li><span>백종원국밥거리</span></li>
                    <li><span>예당호</span></li>
                    <li><span>내포보부상촌</span></li>
                    <li><span>황새부부</span></li>
                    <li><span>유튜브채널</span></li>
                    <li><span>사바나왕도마뱀</span></li>
                    <li><span>맥주페스티벌</span></li>
                    <li><span>자신의이름</span></li>
                    <li><span>멸종위기종</span></li>
                    <li><span>농촌체험세상</span></li>
                    <li><span>국립생태원</span></li>
                    <li><span>관광100선</span></li>
                    <li><span>호수길</span></li>
                    <li><span>방사한황새</span></li>
                    <li><span>워케이션</span></li>
                    <li><span>곱창특화거리</span></li>
                </ol>
            </div>
            `,
            당진시: `
            <div class="keyword-box">
            <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
            <ol>
                <li><span>중대재해처벌법</span></li>
                <li><span>호우주의보</span></li>
                <li><span>소방당국</span></li>
                <li><span>여자친구</span></li>
                <li><span>사고발생</span></li>
                <li><span>인명피해</span></li>
                <li><span>여자친구언니살해</span></li>
                <li><span>무기징역</span></li>
                <li><span>산림당국</span></li>
                <li><span>살해혐의</span></li>
                <li><span>산불발생</span></li>
                <li><span>산불영향구역</span></li>
                <li><span>혐의기소</span></li>
                <li><span>현대제철당진</span></li>
                <li><span>과수화상병</span></li>
                <li><span>일산화탄소</span></li>
                <li><span>바이러스성질병</span></li>
                <li><span>산불3단계</span></li>
                <li><span>산업안전보건</span></li>
                <li><span>흡혈곤충</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span class="title-number">TOPIC 2</span><span>부동산/산업</span></div>
            <ol>
                <li><span>호반써밋시그니쳐</span></li>
                <li><span>미분양관리지역</span></li>
                <li><span>당진센트럴빌르네블루</span></li>
                <li><span>열분해유공장</span></li>
                <li><span>수청2지구</span></li>
                <li><span>플라스틱재활용</span></li>
                <li><span>비규제지역</span></li>
                <li><span>해저케이블</span></li>
                <li><span>일반분양</span></li>
                <li><span>분양예정</span></li>
                <li><span>수소생산</span></li>
                <li><span>수소차</span></li>
                <li><span>수소출하센터</span></li>
                <li><span>공장건설</span></li>
                <li><span>생활인프라</span></li>
                <li><span>생활형숙박</span></li>
                <li><span>호반건설</span></li>
                <li><span>수소전소터빈</span></li>
                <li><span>중앙메디컬타워</span></li>
                <li><span>지속가능</span></li>
            </ol>
        </div>
        <div class="keyword-box">
            <div><span class="title-number">TOPIC 3</span><span>관광/문화/농업</span></div>
            <ol>
                <li><span>당진솔뫼성지</span></li>
                <li><span>버그내순례길</span></li>
                <li><span>김대건신부탄생</span></li>
                <li><span>유네스코세계기념인물선정</span></li>
                <li><span>우리나라최초의사제</span></li>
                <li><span>스마트팜</span></li>
                <li><span>유네스코인류무형문화유산</span></li>
                <li><span>기지시줄다리기박물관</span></li>
                <li><span>기지시줄다리기축제</span></li>
                <li><span>청년농업인</span></li>
                <li><span>지방소멸위험지역</span></li>
                <li><span>한국천주교</span></li>
                <li><span>200주년기념행사</span></li>
                <li><span>농업농촌</span></li>
                <li><span>행복얼라이언스</span></li>
                <li><span>물아랫마을</span></li>
                <li><span>물윗마을</span></li>
                <li><span>귀농귀촌</span></li>
                <li><span>신부생가터</span></li>
                <li><span>행사진행</span></li>
            </ol>
        </div>
            `,
            천안시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>보건/사건사고</span></div>
                <ol>
                    <li><span>기소/구속/재판</span></li>
                    <li><span>여행용가방</span></li>
                    <li><span>병원성조류인플루엔자</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>중앙사고수습본부</span></li>
                    <li><span>야생조류분변</span></li>
                    <li><span>가금/산란계농장</span></li>
                    <li><span>일산화탄소</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>아동학대치사</span></li>
                    <li><span>방역당국</span></li>
                    <li><span>심정지상태</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>여자친구</span></li>
                    <li><span>과수화상병</span></li>
                    <li><span>항원검출</span></li>
                    <li><span>무기징역</span></li>
                    <li><span>살해혐의</span></li>
                    <li><span>이별통보</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>부동산</span></div>
                <ol>
                    <li><span>한화포레나천안</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>천안한양수자인에코시티</span></li>
                    <li><span>1호선</span></li>
                    <li><span>아파트매매가격</span></li>
                    <li><span>청수행정타운</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>일반분양</span></li>
                    <li><span>반산업단지</span></li>
                    <li><span>아파트매매</span></li>
                    <li><span>1순위청약</span></li>
                    <li><span>공원특례사업</span></li>
                    <li><span>청약경쟁</span></li>
                    <li><span>커뮤니티시설</span></li>
                    <li><span>생활인프라</span></li>
                    <li><span>청약접수</span></li>
                    <li><span>조정대상지역지정</span></li>
                    <li><span>아파트전세가격</span></li>
                    <li><span>편의시설</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정/역사/행사</span></div>
                <ol>
                    <li><span>상병수당시범사업</span></li>
                    <li><span>천안시독립기념관</span></li>
                    <li><span>일본군위안부피해자기림의날기념식</span></li>
                    <li><span>권역응급의료센터</span></li>
                    <li><span>천안국립망향의동산</span></li>
                    <li><span>순국선열의날</span></li>
                    <li><span>스마트농업지원센터</span></li>
                    <li><span>천안사랑카드</span></li>
                    <li><span>스마트팜</span></li>
                    <li><span>독립유공자</span></li>
                    <li><span>공군특수비행팀</span></li>
                    <li><span>상병수당신청</span></li>
                    <li><span>흥타령춤축제</span></li>
                    <li><span>천안K컬처박람회</span></li>
                    <li><span>스타트업타운</span></li>
                    <li><span>빵의도시</span></li>
                    <li><span>아동친화도시</span></li>
                    <li><span>빵지순례</span></li>
                    <li><span>의료기관</span></li>
                    <li><span>스타트업파크</span></li>
                </ol>
            </div>
            `,
        },
        jeonbuk: {
            군산시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>원인조사</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>천리마1형</span></li>
                    <li><span>험의기소</span></li>
                    <li><span>재난안전대책본부</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>군산해양경찰서</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>중부지방</span></li>
                    <li><span>초등학교교사</span></li>
                    <li><span>호우특보</span></li>
                    <li><span>경비함정</span></li>
                    <li><span>재산피해</span></li>
                    <li><span>중국어선</span></li>
                    <li><span>호우경보</span></li>
                    <li><span>불법파견</span></li>
                    <li><span>어청도서방</span></li>
                    <li><span>인양작전</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>산업</span></div>
                <ol>
                    <li><span>현대중공업군산조선소</span></li>
                    <li><span>군산새만금</span></li>
                    <li><span>군산조선소재가동</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>새만금컨벤션센터</span></li>
                    <li><span>은파호수공원</span></li>
                    <li><span>풍림파마텍</span></li>
                    <li><span>삼양이노켐</span></li>
                    <li><span>협약체결</span></li>
                    <li><span>1순위청약</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>분양예정</span></li>
                    <li><span>재가동협약식</span></li>
                    <li><span>생활인프라</span></li>
                    <li><span>지방중소도시</span></li>
                    <li><span>세계스카우트잼버리</span></li>
                    <li><span>새만금개발청장</span></li>
                    <li><span>청약경쟁</span></li>
                    <li><span>군산신역세권</span></li>
                    <li><span>새만금육상태양광</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>지역사업</span></div>
                <ol>
                    <li><span>군산형일자리</span></li>
                    <li><span>고군산군도</span></li>
                    <li><span>공공배달앱</span></li>
                    <li><span>배달의명수</span></li>
                    <li><span>군산사랑상품권</span></li>
                    <li><span>상생형지역일자리</span></li>
                    <li><span>애디슨모터스</span></li>
                    <li><span>일자리사업</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>지역경제</span></li>
                    <li><span>민간배달앱</span></li>
                    <li><span>지역일자리</span></li>
                    <li><span>국가지질공원</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>고군산군도해역</span></li>
                    <li><span>해양문화재연구소</span></li>
                    <li><span>사업선정</span></li>
                    <li><span>지역화폐</span></li>
                    <li><span>국립해양문화재</span></li>
                    <li><span>군산사랑카드</span></li>
                </ol>
            </div>
            `,
            익산시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>익산장점마을</span></li>
                    <li><span>혐의기소</span></li>
                    <li><span>경찰조사</span></li>
                    <li><span>장점마을주민</span></li>
                    <li><span>폐쇄회로CCTV</span></li>
                    <li><span>재난안전대책본부</span></li>
                    <li><span>오거리살인사건</span></li>
                    <li><span>비료공장</span></li>
                    <li><span>재산피해</span></li>
                    <li><span>살인혐의</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>집중호우피해</span></li>
                    <li><span>집단암발병</span></li>
                    <li><span>누적강수량</span></li>
                    <li><span>호우특보</span></li>
                    <li><span>억울한옥살이</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>지역활성화</span></div>
                <ol>
                    <li><span>국가식품클러스터</span></li>
                    <li><span>민간공원특례사업</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>협약체결</span></li>
                    <li><span>두산퓨얼셀</span></li>
                    <li><span>마을자치연금</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>지하층지상</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>롯데에너지머티리얼</span></li>
                    <li><span>한국식품산업클러스터진흥원</span></li>
                    <li><span>1순위청약</span></li>
                    <li><span>청약경쟁</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>도시공원</span></li>
                    <li><span>발전용연료전지</span></li>
                    <li><span>식품산업</span></li>
                    <li><span>사업협약서</span></li>
                    <li><span>규모조성</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정/안보</span></div>
                <ol>
                    <li><span>요소수</span></li>
                    <li><span>육군부사관학교</span></li>
                    <li><span>과수화상병</span></li>
                    <li><span>익산형일자리</span></li>
                    <li><span>지역화폐</span></li>
                    <li><span>치유의숲</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>신임부사관</span></li>
                    <li><span>삶의질</span></li>
                    <li><span>2기부사관</span></li>
                    <li><span>특전부사관</span></li>
                    <li><span>근로청년수당</span></li>
                    <li><span>일자리사업</span></li>
                    <li><span>소비촉진지원금</span></li>
                    <li><span>연금지급</span></li>
                    <li><span>농촌진흥청</span></li>
                    <li><span>상생형지역</span></li>
                    <li><span>도시숲조성</span></li>
                    <li><span>지역농가</span></li>
                    <li><span>일자리창출</span></li>
                </ol>
            </div>
            `,
            정읍시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>중앙사고수습본부</span></li>
                    <li><span>가금농장</span></li>
                    <li><span>병원성조류인플루엔자</span></li>
                    <li><span>육용오리농장</span></li>
                    <li><span>혐의기소</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>예방적살처분</span></li>
                    <li><span>야생조류</span></li>
                    <li><span>고병원성</span></li>
                    <li><span>방역조치</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>내장사대웅전</span></li>
                    <li><span>재산피해</span></li>
                    <li><span>대웅전불</span></li>
                    <li><span>원인조사</span></li>
                    <li><span>살해혐의</span></li>
                    <li><span>여자친구</span></li>
                    <li><span>축산차량</span></li>
                    <li><span>건조물방화혐의</span></li>
                    <li><span>신고접수</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>산업/인프라</span></div>
                <ol>
                    <li><span>SK넥실리스</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>삶의질향상</span></li>
                    <li><span>지역사회</span></li>
                    <li><span>샘고을시장</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>생계형적합업종</span></li>
                    <li><span>지원대상</span></li>
                    <li><span>중고차시장진출</span></li>
                    <li><span>농축산용미생물</span></li>
                    <li><span>지속가능</span></li>
                    <li><span>공유가게</span></li>
                    <li><span>지역발전</span></li>
                    <li><span>완성차업체</span></li>
                    <li><span>중고차매매업</span></li>
                    <li><span>미생물산업</span></li>
                    <li><span>지원계획</span></li>
                    <li><span>미생물산업육성</span></li>
                    <li><span>완성차업계</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>문화/관광</span></div>
                <ol>
                    <li><span>동학농민혁명</span></li>
                    <li><span>농민혁명기념</span></li>
                    <li><span>내장산</span></li>
                    <li><span>동학농민군</span></li>
                    <li><span>내장산국립공원</span></li>
                    <li><span>혁명기념공원</span></li>
                    <li><span>동학농민혁명정신</span></li>
                    <li><span>혁명운동기념관</span></li>
                    <li><span>전봉준장군동상</span></li>
                    <li><span>천연기념물지정</span></li>
                    <li><span>동학농민운동</span></li>
                    <li><span>국가지정문화재</span></li>
                    <li><span>내장산문화광장</span></li>
                    <li><span>내장산단풍나무</span></li>
                    <li><span>단풍미인쌀</span></li>
                    <li><span>구절초테마공원</span></li>
                    <li><span>자연경관</span></li>
                    <li><span>단풍미인씨름</span></li>
                    <li><span>정읍시립박물관</span></li>
                    <li><span>단풍미인쇼핑몰</span></li>
                </ol>
            </div>
            `,
            남원시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>혐의기소</span></li>
                    <li><span>재산피해</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>경위조사</span></li>
                    <li><span>재난안전대책본부</span></li>
                    <li><span>육용오리농장</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>남부지방</span></li>
                    <li><span>방류량</span></li>
                    <li><span>대응2단계</span></li>
                    <li><span>호우경보</span></li>
                    <li><span>산사태발생</span></li>
                    <li><span>가금농장</span></li>
                    <li><span>이재민발생</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>관광</span></div>
                <ol>
                    <li><span>춘향영정</span></li>
                    <li><span>지리산국립공원</span></li>
                    <li><span>지역활력타운</span></li>
                    <li><span>유곡리두락리</span></li>
                    <li><span>춘향선발대회</span></li>
                    <li><span>광한루원</span></li>
                    <li><span>두락리고분군</span></li>
                    <li><span>세계유산</span></li>
                    <li><span>특별연합</span></li>
                    <li><span>지리산둘레길</span></li>
                    <li><span>달빛고속철도</span></li>
                    <li><span>공항특별법</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>고령지산동고분군</span></li>
                    <li><span>친환경전기열차</span></li>
                    <li><span>특별법동시통과</span></li>
                    <li><span>지역축제</span></li>
                    <li><span>동시통과기념행사</span></li>
                    <li><span>춘향골공설시장</span></li>
                    <li><span>업무협약체결</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행정</span></div>
                <ol>
                    <li><span>삶의질향상</span></li>
                    <li><span>남원사랑상품권</span></li>
                    <li><span>점심시간휴무</span></li>
                    <li><span>공공의대</span></li>
                    <li><span>동남원새마을금고</span></li>
                    <li><span>점심시간</span></li>
                    <li><span>드론레이싱챔피언십</span></li>
                    <li><span>성차별</span></li>
                    <li><span>특별근로감독</span></li>
                    <li><span>드론활용센터</span></li>
                    <li><span>여성직원</span></li>
                    <li><span>직장갑질</span></li>
                    <li><span>월드드론</span></li>
                    <li><span>조직문화</span></li>
                    <li><span>업무무관</span></li>
                    <li><span>드론레저스포츠</span></li>
                    <li><span>드론산업</span></li>
                    <li><span>의대정원</span></li>
                    <li><span>공공보건의료대학</span></li>
                    <li><span>의대정원확대</span></li>
                </ol>
            </div>
            `,
            김제시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>성공일소방교</span></li>
                    <li><span>주택화재현장</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>혐의기소</span></li>
                    <li><span>특별재난지역선포</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>재산피해</span></li>
                    <li><span>화재현장</span></li>
                    <li><span>의원직</span></li>
                    <li><span>농촌진흥청</span></li>
                    <li><span>농림축산식품</span></li>
                    <li><span>시의회</span></li>
                    <li><span>동료의원</span></li>
                    <li><span>집중호우피해</span></li>
                    <li><span>13개지자체</span></li>
                    <li><span>식품해양수산</span></li>
                    <li><span>농생명센터</span></li>
                    <li><span>현장순직</span></li>
                    <li><span>불륜스캔들</span></li>
                    <li><span>옥조근정훈장</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>지역사업</span></div>
                <ol>
                    <li><span>스마트팜혁신밸리</span></li>
                    <li><span>임대형스마트팜</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>김제자유무역지역</span></li>
                    <li><span>김제지평선축제</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>청년농업인</span></li>
                    <li><span>김제사랑상품권</span></li>
                    <li><span>국립새마금수목원</span></li>
                    <li><span>씨들리스</span></li>
                    <li><span>스마트농업</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>협약체결</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>상주스마트팜</span></li>
                    <li><span>청년농촌보금자리</span></li>
                    <li><span>지평선산업단지</span></li>
                    <li><span>고향사랑기부금</span></li>
                    <li><span>농촌보금자리조성</span></li>
                    <li><span>스타트업단지조성</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>산업</span></div>
                <ol>
                    <li><span>인당평균총급여액</span></li>
                    <li><span>전국평균</span></li>
                    <li><span>로얄캐닌코리아</span></li>
                    <li><span>종자생명산업</span></li>
                    <li><span>민간육종연구</span></li>
                    <li><span>종자산업</span></li>
                    <li><span>기프트하우스</span></li>
                    <li><span>10개시군구</span></li>
                    <li><span>생명산업혁신클러스터</span></li>
                    <li><span>공장신설</span></li>
                    <li><span>공장부지</span></li>
                    <li><span>육종연구단지</span></li>
                    <li><span>모듈러주택기증</span></li>
                    <li><span>재난위기가정</span></li>
                    <li><span>재정적지원</span></li>
                    <li><span>반려동물사료</span></li>
                    <li><span>국제종자박람회</span></li>
                    <li><span>근로자</span></li>
                    <li><span>국세통계연보</span></li>
                    <li><span>부익부초래</span></li>
                </ol>
            </div>
            `,
            완주군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>혐의기소</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>유기혐의</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>살해혐의</span></li>
                    <li><span>경위조사</span></li>
                    <li><span>폭염주의보</span></li>
                    <li><span>무기징역</span></li>
                    <li><span>경찰관계자</span></li>
                    <li><span>시신유기</span></li>
                    <li><span>혐의구속</span></li>
                    <li><span>사고경위</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>삼례3인조</span></li>
                    <li><span>삼례나라슈퍼</span></li>
                    <li><span>구속기소</span></li>
                    <li><span>목졸라살해</span></li>
                    <li><span>부산실종</span></li>
                    <li><span>영장신청</span></li>
                    <li><span>삼례문화예술</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>산업</span></div>
                <ol>
                    <li><span>농촌진흥청</span></li>
                    <li><span>국립원예특작과학원</span></li>
                    <li><span>화훼온실</span></li>
                    <li><span>온실연구원</span></li>
                    <li><span>완주테크노밸리</span></li>
                    <li><span>일진하이솔루스</span></li>
                    <li><span>생육상황</span></li>
                    <li><span>검사지원센터</span></li>
                    <li><span>수소용품검사</span></li>
                    <li><span>용품검사지원</span></li>
                    <li><span>수소특화국가산업단지</span></li>
                    <li><span>재배지직원</span></li>
                    <li><span>일반산업단지</span></li>
                    <li><span>충전소</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>수소용품</span></li>
                    <li><span>수소차</span></li>
                    <li><span>완주수소충전소</span></li>
                    <li><span>농가보급</span></li>
                    <li><span>국가산단조성</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>행적/복지</span></div>
                <ol>
                    <li><span>사업추진</span></li>
                    <li><span>초남이성지</span></li>
                    <li><span>복합행정타운</span></li>
                    <li><span>와일드로컬푸드축제</span></li>
                    <li><span>농촌진흥청</span></li>
                    <li><span>LG의인상</span></li>
                    <li><span>최초순교자</span></li>
                    <li><span>자두와살구</span></li>
                    <li><span>후보지선정</span></li>
                    <li><span>한국천주교최초</span></li>
                    <li><span>상생협력사업</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>지역발전</span></li>
                    <li><span>유해안치식</span></li>
                    <li><span>산업육성</span></li>
                    <li><span>살구교잡</span></li>
                    <li><span>미국가재</span></li>
                    <li><span>전북환경청</span></li>
                    <li><span>국립완주문화재</span></li>
                    <li><span>유엔아동권리협약</span></li>
                </ol>
            </div>
            `,
            진안군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>자연재해</span></div>
                <ol>
                    <li><span>용담댐</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>방류량</span></li>
                    <li><span>아침최저기온</span></li>
                    <li><span>한국수자원공사</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>호우경보</span></li>
                    <li><span>피해보상</span></li>
                    <li><span>환경분쟁조정</span></li>
                    <li><span>역고드름</span></li>
                    <li><span>재난안전대책본부</span></li>
                    <li><span>마이산</span></li>
                    <li><span>기온영하</span></li>
                    <li><span>호우특보</span></li>
                    <li><span>한파경보</span></li>
                    <li><span>한파주의보발효</span></li>
                    <li><span>암마이봉</span></li>
                    <li><span>낮최고기온</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>산업/행정</span></div>
                <ol>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>외국인계절근로자</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>드론실증도시</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>계절근로자</span></li>
                    <li><span>외국인근로자</span></li>
                    <li><span>고향사랑기부금</span></li>
                    <li><span>곤충산업거점</span></li>
                    <li><span>사업선정</span></li>
                    <li><span>계절근로자도입</span></li>
                    <li><span>지원대상</span></li>
                    <li><span>인구감소지역</span></li>
                    <li><span>거점단지조성</span></li>
                    <li><span>지역경제</span></li>
                    <li><span>스마트팜</span></li>
                    <li><span>주민지원사업</span></li>
                    <li><span>고향사랑기부</span></li>
                    <li><span>외국인계절노동자</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>관광/환경</span></div>
                <ol>
                    <li><span>산림치유원</span></li>
                    <li><span>국립지덕권</span></li>
                    <li><span>진안홍삼</span></li>
                    <li><span>운일암</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>기본설계기술제안</span></li>
                    <li><span>구조관리센터</span></li>
                    <li><span>라이브커머스</span></li>
                    <li><span>홍삼축제</span></li>
                    <li><span>기술제안입찰</span></li>
                    <li><span>치유원조성사업</span></li>
                    <li><span>멸종위기종</span></li>
                    <li><span>스마트건설기술</span></li>
                    <li><span>대표브랜드대상</span></li>
                    <li><span>김장김치</span></li>
                    <li><span>명품홍삼</span></li>
                    <li><span>자연휴양림</span></li>
                    <li><span>직영온라인쇼핑몰</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>야생동물구조</span></li>
                </ol>
            </div>
            `,
            무주군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>문화</span></div>
                <ol>
                    <li><span>태권도사관학교</span></li>
                    <li><span>태권도진흥재단</span></li>
                    <li><span>덕유산국립공원</span></li>
                    <li><span>태권도원</span></li>
                    <li><span>무주반딧불축제</span></li>
                    <li><span>향적봉</span></li>
                    <li><span>덕유산</span></li>
                    <li><span>유니크베뉴</span></li>
                    <li><span>목재친화도시</span></li>
                    <li><span>태권도박물관</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>국립공원공단</span></li>
                    <li><span>국립공원사무소</span></li>
                    <li><span>친화도시조성</span></li>
                    <li><span>오색케이블카설치</span></li>
                    <li><span>관광자원</span></li>
                    <li><span>도시조성사업</span></li>
                    <li><span>덕유산둘레길</span></li>
                    <li><span>목조구조물</span></li>
                    <li><span>국립공원케이블카</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>공공인프라</span></div>
                <ol>
                    <li><span>방류량</span></li>
                    <li><span>피해보상</span></li>
                    <li><span>침수피해</span></li>
                    <li><span>한국수자원공사</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>피해주민</span></li>
                    <li><span>무주군보건의료원</span></li>
                    <li><span>환경분쟁조정</span></li>
                    <li><span>금강홍수통제</span></li>
                    <li><span>메디컬인사이트</span></li>
                    <li><span>용담댐방류피해</span></li>
                    <li><span>외국인계절근로자</span></li>
                    <li><span>영상의료솔루션</span></li>
                    <li><span>공공의료기관</span></li>
                    <li><span>뇌출혈영상의료</span></li>
                    <li><span>인터넷드림마을</span></li>
                    <li><span>계절근로자</span></li>
                    <li><span>계절근로사업</span></li>
                    <li><span>외국인근로자</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>사건사고</span></div>
                <ol>
                    <li><span>일산화탄소</span></li>
                    <li><span>일가족</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>과수화상병</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>일산화탄소중독</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>홍수주의보</span></li>
                    <li><span>화재원인</span></li>
                    <li><span>산림당국</span></li>
                    <li><span>원인조사</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>중부지방</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>장마전선</span></li>
                    <li><span>호우경보</span></li>
                    <li><span>홍수피해</span></li>
                    <li><span>사고경위</span></li>
                    <li><span>현장감식</span></li>
                    <li><span>사전대응</span></li>
                </ol>
            </div>
            `,
            장수군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>지진발생</span></li>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>규모3.5지진</span></li>
                    <li><span>이번지진</span></li>
                    <li><span>중부지방</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>긴급재난문자</span></li>
                    <li><span>산사태발생</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>구조작업</span></li>
                    <li><span>호우특보</span></li>
                    <li><span>지진위기경보</span></li>
                    <li><span>호우경보</span></li>
                    <li><span>초등학교</span></li>
                    <li><span>미혼교사</span></li>
                    <li><span>해역발생</span></li>
                    <li><span>부적절관계</span></li>
                    <li><span>전라북도교육청</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>행정/인프라</span></div>
                <ol>
                    <li><span>특별근로감독</span></li>
                    <li><span>고령자복지주택</span></li>
                    <li><span>지방소멸대응기금</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>달빛내륙철도</span></li>
                    <li><span>사회복지시설</span></li>
                    <li><span>노동관계법위반</span></li>
                    <li><span>스마트그린도시</span></li>
                    <li><span>장수사랑상품권</span></li>
                    <li><span>고령자복지주택사업</span></li>
                    <li><span>청년단체</span></li>
                    <li><span>감독실시</span></li>
                    <li><span>청년활동가지원사업</span></li>
                    <li><span>징계요구</span></li>
                    <li><span>공공임대주택</span></li>
                    <li><span>장수농협</span></li>
                    <li><span>농민공익수당</span></li>
                    <li><span>근무지기준취업자</span></li>
                    <li><span>기회제공</span></li>
                    <li><span>수당지급</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>문화/관광</span></div>
                <ol>
                    <li><span>한우랑사과랑축제</span></li>
                    <li><span>추석선물</span></li>
                    <li><span>침령산</span></li>
                    <li><span>대적골유적</span></li>
                    <li><span>실내언덕</span></li>
                    <li><span>언덕주로개장식</span></li>
                    <li><span>장수한우</span></li>
                    <li><span>달빛고속철도</span></li>
                    <li><span>발굴조사</span></li>
                    <li><span>장수목장</span></li>
                    <li><span>집수시설</span></li>
                    <li><span>실내언덕주로</span></li>
                    <li><span>경주마전천후훈련시설</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>선물전달</span></li>
                    <li><span>고속철도특별법</span></li>
                    <li><span>장수사과</span></li>
                    <li><span>추석선물세트</span></li>
                    <li><span>고속철도건설</span></li>
                    <li><span>지역특산물</span></li>
                </ol>
            </div>
            `,
            임실군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>행정/인프라</span></div>
                <ol>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>반려동물</span></li>
                    <li><span>반려동물산업</span></li>
                    <li><span>오수의견관광지</span></li>
                    <li><span>인구감소지역</span></li>
                    <li><span>귀농귀촌</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>명견테마랜드</span></li>
                    <li><span>세계명견테마</span></li>
                    <li><span>섬진강에코뮤지엄</span></li>
                    <li><span>119안전체험관</span></li>
                    <li><span>임실사랑상품권</span></li>
                    <li><span>반려동물지원센터</span></li>
                    <li><span>펫추모공원</span></li>
                    <li><span>고향사랑기부금</span></li>
                    <li><span>지역경제</span></li>
                    <li><span>지방소멸대응</span></li>
                    <li><span>지역발전</span></li>
                    <li><span>소멸대응기금</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
                <ol>
                    <li><span>유기혐의</span></li>
                    <li><span>부산실종여성</span></li>
                    <li><span>무기징역</span></li>
                    <li><span>살해혐의</span></li>
                    <li><span>징역선고</span></li>
                    <li><span>혐의기소</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>시신유기</span></li>
                    <li><span>과수원유기</span></li>
                    <li><span>호우경보</span></li>
                    <li><span>목졸라살해</span></li>
                    <li><span>실종여성</span></li>
                    <li><span>재난안전대책본부</span></li>
                    <li><span>대설특보발효</span></li>
                    <li><span>럼피스킨</span></li>
                    <li><span>독감백신</span></li>
                    <li><span>천둥번개</span></li>
                    <li><span>독감백신접종</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>문화/관광</span></div>
                <ol>
                    <li><span>임실N치즈</span></li>
                    <li><span>임실치즈테마파크</span></li>
                    <li><span>치즈역사문화관</span></li>
                    <li><span>치즈축제</span></li>
                    <li><span>옥정호</span></li>
                    <li><span>붕어섬생태공원</span></li>
                    <li><span>옥정호붕어섬</span></li>
                    <li><span>김장페스티벌</span></li>
                    <li><span>치즈축제개막</span></li>
                    <li><span>문화관건립</span></li>
                    <li><span>출렁다리붕어섬</span></li>
                    <li><span>국가산림문화자산</span></li>
                    <li><span>축제장</span></li>
                    <li><span>임실치즈마을</span></li>
                    <li><span>대표관광지</span></li>
                    <li><span>사업선정</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>절임배추</span></li>
                    <li><span>축제개막일</span></li>
                    <li><span>최종선정</span></li>
                </ol>
            </div>
            `,
            순창군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>중앙재난안전대책본부</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>남부지방</span></li>
                    <li><span>고령운전자</span></li>
                    <li><span>중부지방</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>호우경보</span></li>
                    <li><span>호우주의보</span></li>
                    <li><span>가속페달</span></li>
                    <li><span>아침최저기온</span></li>
                    <li><span>사고발생</span></li>
                    <li><span>70대운전자</span></li>
                    <li><span>구속영장</span></li>
                    <li><span>체감온도</span></li>
                    <li><span>기온영하</span></li>
                    <li><span>병원이송</span></li>
                    <li><span>트럭운전자</span></li>
                    <li><span>운전미숙</span></li>
                    <li><span>대설특보</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>공공인프라/복지</span></div>
                <ol>
                    <li><span>달빛내륙철도</span></li>
                    <li><span>발효미생물산업</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>국가철도망구축</span></li>
                    <li><span>철도망구축계획</span></li>
                    <li><span>미생물산업진흥원</span></li>
                    <li><span>4차국가철도망구축</span></li>
                    <li><span>고령자복지주택</span></li>
                    <li><span>광주대구</span></li>
                    <li><span>달빛고속철도</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>고향사랑기부금</span></li>
                    <li><span>내륙철도건설</span></li>
                    <li><span>여성친화도시</span></li>
                    <li><span>아동행복수당</span></li>
                    <li><span>순창사랑상품권</span></li>
                    <li><span>발효미생물</span></li>
                    <li><span>유용미생물은행</span></li>
                    <li><span>지원대상</span></li>
                    <li><span>대학생생활지원금</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>관광/문화</span></div>
                <ol>
                    <li><span>평생학습도시</span></li>
                    <li><span>시골언니</span></li>
                    <li><span>강천산군립공원</span></li>
                    <li><span>체계산출렁다리</span></li>
                    <li><span>희생사건</span></li>
                    <li><span>소프트테니스팀</span></li>
                    <li><span>진실화해위</span></li>
                    <li><span>순창장류축제</span></li>
                    <li><span>시골언니프로젝트</span></li>
                    <li><span>청년여성</span></li>
                    <li><span>소프트테니스대회</span></li>
                    <li><span>민간인희생</span></li>
                    <li><span>도시언니</span></li>
                    <li><span>용궐산</span></li>
                    <li><span>진실화해</span></li>
                    <li><span>전국소프트테니스</span></li>
                    <li><span>강천힐링스파</span></li>
                    <li><span>강천산</span></li>
                    <li><span>자연경관</span></li>
                    <li><span>여자소프트테니스</span></li>
                </ol>
            </div>
            `,
            고창군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>공공인프라</span></div>
                <ol>
                    <li><span>해상풍력</span></li>
                    <li><span>디지털관광주민증</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>노을대교건설</span></li>
                    <li><span>원자력안전교부세</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>인구감소지역</span></li>
                    <li><span>고창일반산업단지</span></li>
                    <li><span>생활인구</span></li>
                    <li><span>국도국지</span></li>
                    <li><span>안전교부세신설</span></li>
                    <li><span>서남권해상</span></li>
                    <li><span>협약체결</span></li>
                    <li><span>전국원전동맥</span></li>
                    <li><span>지속가능</span></li>
                    <li><span>유산보전본부</span></li>
                    <li><span>지역경제</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>가루쌀</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>관광</span></div>
                <ol>
                    <li><span>동학농민혁명</span></li>
                    <li><span>고창방문의해</span></li>
                    <li><span>세계자연유산</span></li>
                    <li><span>상하농원</span></li>
                    <li><span>세계유산도시고창</span></li>
                    <li><span>금동신발</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>국가지정문화재</span></li>
                    <li><span>금동신발출토</span></li>
                    <li><span>고창농촌영화제</span></li>
                    <li><span>파머스빌리지</span></li>
                    <li><span>전봉준장군동상</span></li>
                    <li><span>지정예고</span></li>
                    <li><span>보물지정</span></li>
                    <li><span>세계유산위원회</span></li>
                    <li><span>봉덕리1호분</span></li>
                    <li><span>동상건립</span></li>
                    <li><span>나주정촌고분</span></li>
                    <li><span>청보리밭축제</span></li>
                    <li><span>체험형테마</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>환경/생태계</span></div>
                <ol>
                    <li><span>럼피스킨</span></li>
                    <li><span>세계자연유산</span></li>
                    <li><span>한국갯벌</span></li>
                    <li><span>독감백신</span></li>
                    <li><span>백신접종</span></li>
                    <li><span>농림축산검역본부</span></li>
                    <li><span>생물권보전</span></li>
                    <li><span>유산보전본부</span></li>
                    <li><span>자연유산보전</span></li>
                    <li><span>육용오리농장</span></li>
                    <li><span>보건당국</span></li>
                    <li><span>질병청</span></li>
                    <li><span>이상반응</span></li>
                    <li><span>유네스코</span></li>
                    <li><span>람사르습지도시</span></li>
                    <li><span>해당농장</span></li>
                    <li><span>흡혈곤충</span></li>
                    <li><span>정밀검사</span></li>
                    <li><span>유산등재</span></li>
                    <li><span>병원성조류인플루엔자</span></li>
                </ol>
            </div>
            `,
            부안군: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>행정</span></div>
                <ol>
                    <li><span>세계스카우트잼버리</span></li>
                    <li><span>새만금</span></li>
                    <li><span>온열질환자</span></li>
                    <li><span>스카우트대원</span></li>
                    <li><span>세계스카우트연맹</span></li>
                    <li><span>K팝콘서트</span></li>
                    <li><span>조기철수</span></li>
                    <li><span>잼버리프레스센터</span></li>
                    <li><span>스카우트잼버리야영장</span></li>
                    <li><span>잼버리개영식</span></li>
                    <li><span>원자력안전교부세</span></li>
                    <li><span>전주월드컵경기장</span></li>
                    <li><span>고향사랑기부제</span></li>
                    <li><span>영국스카우트대원</span></li>
                    <li><span>새만금개발청</span></li>
                    <li><span>상암월드컵경기장</span></li>
                    <li><span>안전교부세신설</span></li>
                    <li><span>슈퍼라이브</span></li>
                    <li><span>운영요원</span></li>
                    <li><span>쿨링버스</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
                <ol>
                    <li><span>소방당국</span></li>
                    <li><span>병원성조류인플루엔자</span></li>
                    <li><span>야생조류분변</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>야생조류</span></li>
                    <li><span>혐의기소</span></li>
                    <li><span>부안해경</span></li>
                    <li><span>방역당국</span></li>
                    <li><span>가금농장</span></li>
                    <li><span>경위조사</span></li>
                    <li><span>항원이검출</span></li>
                    <li><span>럼피스킨</span></li>
                    <li><span>중수본</span></li>
                    <li><span>재산피해</span></li>
                    <li><span>보건당국</span></li>
                    <li><span>의료기관</span></li>
                    <li><span>변산반도국립공원</span></li>
                    <li><span>위탁의료기관</span></li>
                    <li><span>과다투여</span></li>
                    <li><span>얀센백신</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>공공인프라</span></div>
                <ol>
                    <li><span>해상풍력</span></li>
                    <li><span>서남권해상</span></li>
                    <li><span>해상풍력실증</span></li>
                    <li><span>풍력실증단지</span></li>
                    <li><span>수소생산기지</span></li>
                    <li><span>스마트복합쉼터</span></li>
                    <li><span>동학농민혁명</span></li>
                    <li><span>청정수소생산</span></li>
                    <li><span>관광레저용지</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>새만금개발청</span></li>
                    <li><span>생산기지구축</span></li>
                    <li><span>한국판뉴딜그린에너지</span></li>
                    <li><span>해상풍력사업</span></li>
                    <li><span>수전해기반</span></li>
                    <li><span>기지구축사업</span></li>
                    <li><span>해상풍력단지</span></li>
                    <li><span>국가중요어업유산</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>뉴딜그린에너지현장방문</span></li>
                </ol>
            </div>
            `,
            전주시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
                <ol>
                    <li><span>기소/구속</span></li>
                    <li><span>살해혐의</span></li>
                    <li><span>경찰조사</span></li>
                    <li><span>소방당국</span></li>
                    <li><span>공직선거법위반</span></li>
                    <li><span>인명피해</span></li>
                    <li><span>유기혐의</span></li>
                    <li><span>경위조사</span></li>
                    <li><span>검찰송치</span></li>
                    <li><span>무기징역</span></li>
                    <li><span>범행동기</span></li>
                    <li><span>혈중알코올농도</span></li>
                    <li><span>전주을국회의원</span></li>
                    <li><span>민식이법</span></li>
                    <li><span>피해발생</span></li>
                    <li><span>도로교통법</span></li>
                    <li><span>특정경제범죄</span></li>
                    <li><span>택시기사</span></li>
                    <li><span>농도면허</span></li>
                    <li><span>불법유턴</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 2</span><span>산업/인프라</span></div>
                <ol>
                    <li><span>사업추진</span></li>
                    <li><span>탄소산업</span></li>
                    <li><span>지하층지상</span></li>
                    <li><span>업무협약체결</span></li>
                    <li><span>한국탄소산업진흥원</span></li>
                    <li><span>지역경제활성화</span></li>
                    <li><span>소부장특화단지</span></li>
                    <li><span>스토킹처벌법</span></li>
                    <li><span>규제지역</span></li>
                    <li><span>전주맛배달</span></li>
                    <li><span>비규제지역</span></li>
                    <li><span>한국부동산원</span></li>
                    <li><span>탄소융합기술원</span></li>
                    <li><span>지속가능</span></li>
                    <li><span>지역주민</span></li>
                    <li><span>지역경제</span></li>
                    <li><span>조정대상지역지정</span></li>
                    <li><span>스토킹범죄</span></li>
                    <li><span>공공배달앱</span></li>
                    <li><span>육상경기장</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>문화/관광</span></div>
                <ol>
                    <li><span>전주한옥마을</span></li>
                    <li><span>전주월드컵경기장</span></li>
                    <li><span>국립무형유산</span></li>
                    <li><span>전주국제영화제</span></li>
                    <li><span>무형유산원</span></li>
                    <li><span>K리그</span></li>
                    <li><span>한국전통문화전당</span></li>
                    <li><span>한국소리문화</span></li>
                    <li><span>동아시아문화도시</span></li>
                    <li><span>영화제개막식</span></li>
                    <li><span>세계소리축제</span></li>
                    <li><span>관광거점도시</span></li>
                    <li><span>현대울산</span></li>
                    <li><span>영화의거리</span></li>
                    <li><span>한옥마을인근</span></li>
                    <li><span>현대경기</span></li>
                    <li><span>대사습놀이전국대회</span></li>
                    <li><span>판소리명창부</span></li>
                    <li><span>디지털독립영화관</span></li>
                    <li><span>2021아시아축구연맹</span></li>
                </ol>
            </div>
            `,
        },
        jeonnam: {
            목포시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>지역발전/세월호</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>관광/행사</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>관광/사업</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>중대재해</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>산불/성범죄</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>문화/관광</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>행정/인프라</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>조류독감/사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>지역발전/농업</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>한전공대</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>양극재</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>부동산</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>날씨/사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>행정/농업</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>관광/유네스코</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>날씨/사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>지역발전</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>관광/문화</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>날씨재해</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>지역사업</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>축제/관광</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>수해/동식물</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>행사/관광</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>복리/귀농귀촌</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>누리호</span></div>
                <ol>
                    <li><span>한국형발사체누리호</span></li>
                    <li><span>우주센터</span></li>
                    <li><span>과학기술정보통신부</span></li>
                    <li><span>1/2/3차발사</span></li>
                    <li><span>한국항공우주연구원</span></li>
                    <li><span>순수국내기술</span></li>
                    <li><span>성능검증위성</span></li>
                    <li><span>누리호발사</span></li>
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
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>지역사업</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>행사/관광</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>행정/활성화</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>행정/지역발전</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>환경/관광</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>지역발전</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>축제/관광</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>묘소훼손/사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>행정/지역발전</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>문화관광/유산</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>가뭄/사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>일가족 사망사건</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>해양산업/행정</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>재해/사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>지역발전/행정</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>관광</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>재해/사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>관광/발전</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>세월호</span></div>
                <ol>
                    <li><span>세월호참사주기</span></li>
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
                <div><span class="title-number">TOPIC 1</span><span>조류독감/사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>선박/행정</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>축제/행사</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>범죄</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>공항이전/지역발전</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>날씨/환경</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>환경</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>복리/인프라</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>재해/사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>산업/행정</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>관광/축제</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>사업/행정</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>문화/관광</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>국제/안보</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>지역행사/지역발</span>전</div>
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
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>산업</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>관광</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>산업/지역발전</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>문화</span></div>
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
                    <li><span>큐K리그</span></li>
                    <li><span>생물종보전원</span></li>
                    <li><span>자작나무숲</span></li>
                    <li><span>복합휴게시설</span></li>
                    <li><span>자원봉사자</span></li>
                </ol>
            </div>
            `,
            안동시: `
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 1</span><span>문화</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>산업</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>산업/지역발전</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>문화/행정</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>산업/행정</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>지역행사</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>지역발전/행정</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>지역행사</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>농업진흥/산업</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>문화</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>환경/문화</span></div>
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
                    <li><span>오색케이블카설치</span></li>
                    <li><span>빗물지하수</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>도시인프라</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>문화/행정</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>지역행사</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>부동산</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>행정</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>지역행사/문화</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>행정</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>행정</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>산업/문화</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>사드기지</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>문화</span></div>
                <ol>
                    <li><span>남부대륙철도</span></li>
                    <li><span>성밖숲</span></li>
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
                <div><span class="title-number">TOPIC 3</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>지역행사/문화</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>상생사업/행정</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>지역행사/지역개발</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>행정</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>지역행사/관광</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>행정</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>지역발전</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>지역행사/행정</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>문화</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>산업</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>문화</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>도시인프라</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>원자력발전</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>지역행사/지역개발</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>지역행사</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>행정/지역개발</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>산업/행정</span></div>
                <ol>
                    <li><span>경상국립대학교</span></li>
                    <li><span>국토안전관리원</span></li>
                    <li><span>한국남동발전</span></li>
                    <li><span>사업추진</span></li>
                    <li><span>협약체결</span></li>
                    <li><span>업무협약</span></li>
                    <li><span>중진공</span></li>
                    <li><span>진주LH본사</span></li>
                    <li><span>중소기업벤처진흥공단</span></li>
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
                <div><span class="title-number">TOPIC 2</span><span>문화</span></div>
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
                    <li><span>공룡익룡발자국</span></li>
                    <li><span>국립현대미술관</span></li>
                </ol>
            </div>
            <div class="keyword-box">
                <div><span class="title-number">TOPIC 3</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>산업/행정</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>문화</span></div>
                <ol>
                    <li><span>욕지도</span></li>
                    <li><span>통영국제음악제</span></li>
                    <li><span>통영국제음악당</span></li>
                    <li><span>고메원도넛</span></li>
                    <li><span>윤이상국제음악콩쿠르</span></li>
                    <li><span>임윤찬</span></li>
                    <li><span>통영국제음악재단</span></li>
                    <li><span>대학축구연맹전</span></li>
                    <li><span>통영페스티벌오케스트라</span></li>
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
                <div><span class="title-number">TOPIC 1</span><span>행정</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>산업</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>문화</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>우주/항공</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>문화</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>문화</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>산업</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>산업</span></div>
                <ol>
                    <li><span>스마트팜</span></li>
                    <li><span>스마트팜혁신밸리</span></li>
                    <li><span>아리랑우주천문대</span></li>
                    <li><span>나노융합국가산업단지</span></li>
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
                <div><span class="title-number">TOPIC 2</span><span>지역행사</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>행정/인프라</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>산업</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>지역발전/행정</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>문화</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>산업/인프라</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>문화</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>산업/행정</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>문화</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>산업/행정</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>산업</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>문화/행정</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>산업/행정</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>문화</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>환경</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>문화/관광</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>산업</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>문화/관광</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>행정/지역발전</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>행정/인프라</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>지역행사</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>행정/지역발전</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>관광</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>문화/관광</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>행정/지역발전</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>문화/행정</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>산업</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>날씨/재해/사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>투자/관광/지역개발</span></div>
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
                <div><span class="title-number">TOPIC 3</span><span>행정</span></div>
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
                <div><span class="title-number">TOPIC 1</span><span>날씨/재해/사건사고</span></div>
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
                <div><span class="title-number">TOPIC 2</span><span>관광/지역개발</span></div>
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
                    <li><span>노스런던칼리지에잇스쿨</span></li>
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
                <div><span class="title-number">TOPIC 3</span><span>생태계</span></div>
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
    let sigunguSelectOption = {
        seoul: '<option value="전체">전체</option><option value="종로구">종로구</option><option value="중구">중구</option><option value="용산구">용산구</option><option value="성동구">성동구</option><option value="광진구">광진구</option><option value="동대문구">동대문구</option><option value="중랑구">중랑구</option><option value="성북구">성북구</option><option value="강북구">강북구</option><option value="도봉구">도봉구</option><option value="노원구">노원구</option><option value="은평구">은평구</option><option value="서대문구">서대문구</option><option value="마포구">마포구</option><option value="양천구">양천구</option><option value="강서구">강서구</option><option value="구로구">구로구</option><option value="금천구">금천구</option><option value="영등포구">영등포구</option><option value="동작구">동작구</option><option value="관악구">관악구</option><option value="서초구">서초구</option><option value="강남구">강남구</option><option value="송파구">송파구</option><option value="강동구">강동구</option>',
        busan: '<option value="전체">전체</option><option value="중구">중구</option><option value="서구">서구</option><option value="동구">동구</option><option value="영도구">영도구</option><option value="부산진구">부산진구</option><option value="동래구">동래구</option><option value="남구">남구</option><option value="북구">북구</option><option value="해운대구">해운대구</option><option value="기장군">기장군</option><option value="사하구">사하구</option><option value="금정구">금정구</option><option value="강서구">강서구</option><option value="연제구">연제구</option><option value="수영구">수영구</option><option value="사상구">사상구</option>',
        daegu: '<option value="전체">전체</option><option value="중구">중구</option><option value="동구">동구</option><option value="서구">서구</option><option value="남구">남구</option><option value="북구">북구</option><option value="수성구">수성구</option><option value="달서구">달서구</option><option value="달성군">달성군</option><option value="군위군">군위군</option>',
        incheon:
            '<option value="전체">전체</option><option value="중구">중구</option><option value="동구">동구</option><option value="미추홀구">미추홀구</option><option value="연수구">연수구</option><option value="남동구">남동구</option><option value="부평구">부평구</option><option value="계양구">계양구</option><option value="서구">서구</option><option value="강화군">강화군</option><option value="옹진군">옹진군</option>',
        kwangju:
            '<option value="전체">전체</option><option value="동구">동구</option><option value="서구">서구</option><option value="남구">남구</option><option value="북구">북구</option><option value="광산구">광산구</option>',
        daejeon:
            '<option value="전체">전체</option><option value="동구">동구</option><option value="중구">중구</option><option value="서구">서구</option><option value="유성구">유성구</option><option value="대덕구">대덕구</option>',
        ulsan: '<option value="전체">전체</option><option value="중구">중구</option><option value="남구">남구</option><option value="동구">동구</option><option value="북구">북구</option><option value="울주군">울주군</option>',
        sejong: '<option value="전체">전체</option><option value="세종특별자치시">세종특별자치시</option>',
        gyunggi:
            '<option value="전체">전체</option><option value="의정부시">의정부시</option><option value="광명시">광명시</option><option value="평택시">평택시</option><option value="양주시">양주시</option><option value="동두천시">동두천시</option><option value="과천시">과천시</option><option value="의왕시">의왕시</option><option value="구리시">구리시</option><option value="남양주시">남양주시</option><option value="오산시">오산시</option><option value="화성시">화성시</option><option value="시흥시">시흥시</option><option value="군포시">군포시</option><option value="하남시">하남시</option><option value="파주시">파주시</option><option value="여주시">여주시</option><option value="이천시">이천시</option><option value="안성시">안성시</option><option value="김포시">김포시</option><option value="광주시">광주시</option><option value="포천시">포천시</option><option value="연천군">연천군</option><option value="양평군">양평군</option><option value="가평군">가평군</option><option value="용인시">용인시</option><option value="고양시">고양시</option><option value="수원시">수원시</option><option value="부천시">부천시</option><option value="안산시">안산시</option><option value="성남시">성남시</option><option value="안양시">안양시</option>',
        kangwon:
            '<option value="전체">전체</option><option value="춘천시">춘천시</option><option value="원주시">원주시</option><option value="강릉시">강릉시</option><option value="동해시">동해시</option><option value="삼척시">삼척시</option><option value="태백시">태백시</option><option value="정선군">정선군</option><option value="속초시">속초시</option><option value="고성군">고성군</option><option value="양양군">양양군</option><option value="인제군">인제군</option><option value="홍천군">홍천군</option><option value="횡성군">횡성군</option><option value="영월군">영월군</option><option value="평창군">평창군</option><option value="화천군">화천군</option><option value="양구군">양구군</option><option value="철원군">철원군</option>',
        chungbuk:
            '<option value="전체">전체</option><option value="충주시">충주시</option><option value="제천시">제천시</option><option value="단양군">단양군</option><option value="영동군">영동군</option><option value="보은군">보은군</option><option value="옥천군">옥천군</option><option value="음성군">음성군</option><option value="진천군">진천군</option><option value="괴산군">괴산군</option><option value="증평군">증평군</option><option value="청주시">청주시</option>',
        chungnam:
            '<option value="전체">전체</option><option value="공주시">공주시</option><option value="보령시">보령시</option><option value="아산시">아산시</option><option value="서산시">서산시</option><option value="태안군">태안군</option><option value="금산군">금산군</option><option value="논산시">논산시</option><option value="계룡시">계룡시</option><option value="부여군">부여군</option><option value="서천군">서천군</option><option value="홍성군">홍성군</option><option value="청양군">청양군</option><option value="예산군">예산군</option><option value="당진시">당진시</option><option value="천안시">천안시</option>',
        jeonbuk:
            '<option value="전체">전체</option><option value="군산시">군산시</option><option value="익산시">익산시</option><option value="정읍시">정읍시</option><option value="남원시">남원시</option><option value="김제시">김제시</option><option value="완주군">완주군</option><option value="진안군">진안군</option><option value="무주군">무주군</option><option value="장수군">장수군</option><option value="임실군">임실군</option><option value="순창군">순창군</option><option value="고창군">고창군</option><option value="부안군">부안군</option><option value="전주시">전주시</option>',
        jeonnam:
            '<option value="전체">전체</option><option value="목포시">목포시</option><option value="여수시">여수시</option><option value="순천시">순천시</option><option value="나주시">나주시</option><option value="광양시">광양시</option><option value="담양군">담양군</option><option value="장성군">장성군</option><option value="곡성군">곡성군</option><option value="구례군">구례군</option><option value="고흥군">고흥군</option><option value="보성군">보성군</option><option value="화순군">화순군</option><option value="장흥군">장흥군</option><option value="강진군">강진군</option><option value="완도군">완도군</option><option value="해남군">해남군</option><option value="진도군">진도군</option><option value="영암군">영암군</option><option value="무안군">무안군</option><option value="영광군">영광군</option><option value="함평군">함평군</option><option value="신안군">신안군</option>',
        gyeongbuk:
            '<option value="전체">전체</option><option value="울릉군">울릉군</option><option value="경주시">경주시</option><option value="김천시">김천시</option><option value="안동시">안동시</option><option value="구미시">구미시</option><option value="영주시">영주시</option><option value="영천시">영천시</option><option value="상주시">상주시</option><option value="문경시">문경시</option><option value="예천군">예천군</option><option value="경산시">경산시</option><option value="청도군">청도군</option><option value="고령군">고령군</option><option value="성주군">성주군</option><option value="칠곡군">칠곡군</option><option value="의성군">의성군</option><option value="청송군">청송군</option><option value="영양군">영양군</option><option value="영덕군">영덕군</option><option value="봉화군">봉화군</option><option value="울진군">울진군</option><option value="포항시">포항시</option>',
        gyeongnam:
            '<option value="전체">전체</option><option value="진주시">진주시</option><option value="통영시">통영시</option><option value="고성군">고성군</option><option value="사천시">사천시</option><option value="김해시">김해시</option><option value="밀양시">밀양시</option><option value="거제시">거제시</option><option value="의령군">의령군</option><option value="함안군">함안군</option><option value="창녕군">창녕군</option><option value="양산시">양산시</option><option value="하동군">하동군</option><option value="남해군">남해군</option><option value="함양군">함양군</option><option value="산청군">산청군</option><option value="거창군">거창군</option><option value="합천군">합천군</option><option value="창원시">창원시</option>',
        jeju: '<option value="전체">전체</option><option value="제주시">제주시</option><option value="서귀포시">서귀포시</option>',
    };

    // 디바이스 PC/모바일 체크
    const checkMobile = window.matchMedia('only screen and (max-width: 800px)').matches;
    if (checkMobile) {
        issueTreeSigunguMobile();
    }
    // 실시간 가로길이 체크
    window.addEventListener('resize', function () {
        if (window.innerWidth <= 800) {
            issueTreeSigunguMobile();
        }
    });

    // 전국 버튼 이벤트
    btnCities.forEach((btnCity, btnCityidx) => {
        // 클릭 시 시군구 지도 보임
        // btnCity.onclick = function () {
        // 240517 del
        btnCity.addEventListener('click', (e) => {
            titleChange(btnCities, btnCity);
            sigunguMap.setAttribute('data-open', 'open');
            sigunguMap.setAttribute('data-inmap', btnCity.getAttribute('data-city'));
            for (let i in sigunguList) {
                if (sigunguMap.getAttribute('data-inmap') == i) {
                    sigunguLineup.innerHTML = sigunguList[i];
                }
            }
            // update-20240412
            // 1. keydown ~ keyup 변경 - 20240429 변경취소
            // 2. 추가 : 첫번째 시군구로 포커스 이동
            setTimeout(() => {
                sigunguLineup.querySelector('li:first-child button').focus();
            }, 1);
            // 시군구 키워드 숨김
            topParents.setAttribute('data-keyword', '');
            ChangeSigunguButton();
        });
        // 키보드 엔터 시 시군구 지도 보이고 포커스 이동
        //제거
    });

    // 시군구 컨텐츠 버튼 이벤트
    function ChangeSigunguButton() {
        let sigunguContents = sigunguLineup.querySelectorAll('li button');
        
        sigunguContents.forEach((sigunguContent, index) => {
            // 클릭 시 이벤트
            sigunguContent.addEventListener('click', () => {
                for (let i in sigunguContentsList) {
                    // 세종시 특수
                    if (sigunguMap.getAttribute('data-inmap') == i && i == 'sejong') {
                        // title="선택됨" 적용
                        titleChange(sigunguContents, sigunguContent);
                        // 시군구 키워드 노출
                        topParents.setAttribute('data-keyword', '5');
                        // 세종시의 타이틀, 키워드에 tabindex부여
                        const mapTitleSejong = document.querySelector('.map-keyword[data-col="5"] .map-title');
                        const mapContentSejong = document.querySelector('.map-keyword[data-col="5"] .keyword-list');
                        mapTitleSejong.setAttribute('tabindex', '0');
                        mapContentSejong.querySelectorAll('.keyword-box > div, li').forEach((el) => {
                            el.setAttribute('tabindex', '0');
                        });
                        setTimeout(() => {
                            mapTitleSejong.focus();
                        }, 1);
                        return;
                    }
                    if (sigunguMap.getAttribute('data-inmap') == i) {
                        // title="선택됨" 적용
                        titleChange(sigunguContents, sigunguContent);
                        // 시군구 키워드 노출
                        topParents.setAttribute('data-keyword', '3');
                        for (let j in sigunguContentsList[i]) {
                            if (sigunguContent.getAttribute('data-sigungu') == j) {
                                mapContent.innerHTML = sigunguContentsList[i][j];
                                // 타이틀 변경
                                for (let i in keywordCol03Title) {
                                    if (sigunguMap.getAttribute('data-inmap') == i) {
                                        mapTitle.innerHTML = `${keywordCol03Title[i]} &gt; ${j}`;
                                    }
                                }
                                // col3의 타이틀, 키워드에 tabindex부여
                                mapTitle.setAttribute('tabindex', '0');
                                mapContent.querySelectorAll('.keyword-box > div, li').forEach((el) => {
                                    el.setAttribute('tabindex', '0');
                                });
                                // 키워드 마지막 리스트에서 포커스 복귀
                                const mapContentLast = mapContent.querySelector('.keyword-box:last-child li:last-child');
                                // [D] 240315 : live 시군구 클릭 시 화면 하단으로 떨어지는 것 제거
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
            });
            // 키보드 이벤트
            // sigunguContent.addEventListener('keydown', (e) => {
                // 240517 del
            // });
        });
    }

    // 모바일
    function issueTreeSigunguMobile() {
        btnCities.forEach((btnCity, btnCityidx) => {
            btnCity.addEventListener('click', () => {
                titleChange(btnCities, btnCity);
                moSigungu.setAttribute('data-open', 'open');
                // select 박스 타이틀 변경
                for (let title in keywordCol03Title) {
                    if (btnCity.getAttribute('data-city') == title) {
                        document.querySelector('.mo-sigungu h3').innerHTML = keywordCol03Title[title];
                        document.querySelector('.mo-select label').innerHTML = keywordCol03Title[title] + ' 시군구 선택하기';
                    }
                }
                // option 값 변경
                for (let option in sigunguSelectOption) {
                    if (btnCity.getAttribute('data-city') == option) {
                        document.querySelector('#sigunguSelect').innerHTML = sigunguSelectOption[option];
                    }
                }
                setTimeout(() => {
                    document.querySelector('#sigunguSelect').focus();
                }, 1);
            });
            // btnCity.addEventListener('keydown', (e) => {
                // 240517 del
            // });
        });

        // select 에서 shift + Tab 시 지역선택으로 포커스 복귀
        // moSigungu.querySelector('select').addEventListener('keydown', (e) => {
            // 240517 del
        // });

        // select 확인 버튼 이벤트
        // 클릭 이벤트
        moSigungu.querySelector('button').addEventListener('click', () => {
            const currentCity = document.querySelector('button[title="선택됨"');
            const selectBox = document.querySelector('#sigunguSelect');
            const options = selectBox.querySelectorAll('option');
            const currentOption = selectBox.options[selectBox.selectedIndex];

            // title="선택됨" 적용
            titleChange(options, currentOption);

            // option이 '전체'일 때 select 박스로 포커스 이동
            if (currentOption.value == '전체') {
                selectBox.focus();
                currentOption.setAttribute('aria-label', '시군구를 선택해주세요.');
                return;
            }
            // 세종시 특수
            if (currentCity.getAttribute('data-city') == 'sejong') {
                // 시군구 키워드 노출
                topParents.setAttribute('data-keyword', '5');
                // 세종시의 타이틀, 키워드에 tabindex부여
                const mapTitleSejong = document.querySelector('.map-keyword[data-col="5"] .map-title');
                const mapContentSejong = document.querySelector('.map-keyword[data-col="5"] .keyword-list');
                mapTitleSejong.setAttribute('tabindex', '0');
                mapContentSejong.querySelectorAll('.keyword-box > div, li').forEach((el) => {
                    el.setAttribute('tabindex', '0');
                });
                // 첫번째 키워드에서 shift+tab 누를 시 select로 포커스 이동
                mapContentSejong.querySelector('.keyword-box > div').addEventListener('keydown', (e) => {
                    if (e.shiftKey && e.key == 'Tab') {
                        e.preventDefault();
                        selectBox.focus();
                    }
                });
                // 마지막 키워드에서 select 박스로 포커스 이동
                mapContentSejong.querySelector('.keyword-box:last-child li:last-child').addEventListener('keydown', (e) => {
                    if (!e.shiftKey && e.key == 'Tab') {
                        e.preventDefault();
                        selectBox.focus();
                    }
                });
                setTimeout(() => {
                    mapContentSejong.querySelector('.keyword-box > div').focus();
                }, 1);
                return;
            }
            for (let i in sigunguContentsList) {
                if (currentCity.getAttribute('data-city') == i) {
                    // 시군구 키워드 노출
                    topParents.setAttribute('data-keyword', '3');
                    // 시군구 키워드 변경
                    for (let j in sigunguContentsList[i]) {
                        if (currentOption.value == j) {
                            mapContent.innerHTML = sigunguContentsList[i][j];
                        }
                    }
                    // col3의 타이틀, 키워드에 tabindex부여
                    mapContent.querySelectorAll('.keyword-box > div, li').forEach((el) => {
                        el.setAttribute('tabindex', '0');
                    });
                }
            }
            setTimeout(() => {
                mapContent.querySelector('.keyword-box > div').focus();
            }, 1);
            // 첫번째 키워드에서 shift+tab 누를 시 select로 포커스 이동
            mapContent.querySelector('.keyword-box > div').addEventListener('keydown', (e) => {
                if (e.shiftKey && e.key == 'Tab') {
                    e.preventDefault();
                    selectBox.focus();
                }
            });
            // 마지막 키워드에서 tab 누를 시 select로 포커스 이동
            mapContent.querySelector('.keyword-box:last-child li:last-child').addEventListener('keydown', (e) => {
                if (!e.shiftKey && e.key == 'Tab') {
                    e.preventDefault();
                    selectBox.focus();
                }
            });
        });
        // 키보드 이벤트
        // moSigungu.querySelector('button').addEventListener('keydown', (e) => {
            // 240517 del
        // });
    }

    // footer에서 shift+Tab 입력 시 탭선택으로 포커스 이동
    // 240517 del
    // document.querySelector('.f_link_box a:first-child').addEventListener('keydown', (e) => {
    //     if (e.shiftKey && e.key == 'Tab') {
    //         e.preventDefault();
    //         goToTab();
    //     }
    // });
}

/* 공약이슈 기초자료 보기 */
function issueBasic() {
    // footer에서 shift+Tab 입력 시 탭선택으로 포커스 이동
    document.querySelector('.f_link_box a:first-child').addEventListener('keydown', (e) => {
        if (e.shiftKey && e.key == 'Tab') {
            e.preventDefault();
            goToTab();
        }
    });
}

// 지도 svg내 index 추가
function addTabindexToPolygons() {
	const polygons = document.querySelectorAll('.map-country-svg polygon');
	polygons.forEach((polygon) => {
		polygon.setAttribute('tabindex', '0');
	});
}
// function addTabindexToPolygons() {
//     let svgElement = document.querySelector('.map-country-svg');
//     let polygons = svgElement.querySelectorAll('polygon');
//     polygons.forEach((poly) => {
//         poly.setAttribute('tabindex', '0');
//     });
// }

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

// update-20240412
// function btnCity() {
//     document.querySelector('.comparativeMap');
// };
// 240517 : 전체 개선
function btnCity(btnCity) {
    titleChange(document.querySelectorAll('button[data-city]'), btnCity);
    const sigunguMap = document.querySelector('.sigungu-area');
    const sigunguLineup = sigunguMap.querySelector('.sigungu');
    const topParents = document.querySelector('.comparative');
    const mapTitle = document.querySelector('.map-keyword[data-col="1"] .map-title');
    sigunguMap.setAttribute('data-open', 'open');
    sigunguMap.setAttribute('data-inmap', btnCity.getAttribute('data-city'));
    for (let i in sigunguList) {
        if (sigunguMap.getAttribute('data-inmap') == i) {
            sigunguLineup.innerHTML = sigunguList[i];
        }
    }
    setTimeout(() => {
        sigunguLineup.querySelector('li:first-child button').focus();
    }, 1);
    // 시군구 키워드 숨김
    topParents.setAttribute('data-keyword', '');
    ChangeSigunguButton();
}

// 240517 추가
function selectSigungu(button) {
    const topParents = document.querySelector('.comparative');
    const sigunguMap = document.querySelector('.sigungu-area');
    const sigunguLineup = sigunguMap.querySelector('.sigungu');
    const mapTitle = document.querySelector('.map-keyword[data-col="1"] .map-title');
    const mapContent = document.querySelector('.map-keyword[data-col="1"] .keyword-list');
    titleChange(sigunguLineup.querySelectorAll('li button'), button);
    topParents.setAttribute('data-keyword', '3');
    const cityName = sigunguMap.getAttribute('data-inmap');
    const sigunguName = button.getAttribute('data-sigungu');
    mapContent.innerHTML = sigunguContentsList[cityName][sigunguName];
    mapTitle.innerHTML = `${keywordCol03Title[cityName]} &gt; ${sigunguName}`;
    mapTitle.setAttribute('tabindex', '0');
    mapContent.querySelectorAll('.keyword-box > div, li').forEach((el) => {
        el.setAttribute('tabindex', '0');
    });
    const mapContentLast = mapContent.querySelector('.keyword-box:last-child li:last-child');
    mapContentLast.addEventListener('keydown', (e) => {
        if (!e.shiftKey && e.key == 'Tab') {
            e.preventDefault();
            button.focus();
        }
    });
    setTimeout(() => {
        mapTitle.focus();
    }, 1);
}

// 접근성 및 요소접근을 위해 title에 '선택됨' 부여
function titleChange(remove, add) {
    remove.forEach((el) => {
        el.setAttribute('title', '');
    });
    add.setAttribute('title', '선택됨');
}

// 상단 공약이슈트리 탭으로 포커스 이동
function goToTab() {
    document.querySelector('.comparativeTab a div.on').parentElement.focus();
}

// html 로드되고 바로 실행
window.addEventListener('DOMContentLoaded', function () {
    const currentPage = this.document.querySelector('.comparative').getAttribute('data-treeTab');

    switch (Number(currentPage)) {
        case 1:
            issueTree();
            break;
        case 2:
            issueTreeSigungu();
            break;
        case 3:
            issueBasic();
            break;
    }
});

// pdf뷰어 컨트롤러 커스텀하려면 viewer.mjs 파일에서 수정
