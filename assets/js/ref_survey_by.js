/* 공약이슈트리 보기 */
function issueTree() {
    const topParents = document.querySelector('.comparative');
    const mapLists = document.querySelectorAll('#map-country-svg polygon');
    // const mapTitle = document.querySelector('.map-keyword[data-col="5"]  .map-title');
    const mapTitle = document.querySelector('.map-keyword .map-title');
    const mapContent = document.querySelector('.map-keyword[data-col="5"]  .keyword-list');
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
		<li class="yongsan"><button type="button" data-sigungu="성동구">성동</button></li>
		<li class="yongsan"><button type="button" data-sigungu="광진구">광진</button></li>
		<li class="yongsan"><button type="button" data-sigungu="동대문구">동대문</button></li>
		<li class="yongsan"><button type="button" data-sigungu="중랑구">중랑</button></li>
		<li class="yongsan"><button type="button" data-sigungu="성북구">성북</button></li>
		<li class="yongsan"><button type="button" data-sigungu="강북구">강북</button></li>
		<li class="yongsan"><button type="button" data-sigungu="도봉구">도봉</button></li>
		<li class="yongsan"><button type="button" data-sigungu="노원구">노원</button></li>
		<li class="yongsan"><button type="button" data-sigungu="은평구">은평</button></li>
		<li class="yongsan"><button type="button" data-sigungu="서대문구">서대문</button></li>
		<li class="yongsan"><button type="button" data-sigungu="마포구">마포</button></li>
		<li class="yongsan"><button type="button" data-sigungu="양천구">양천</button></li>
		<li class="yongsan"><button type="button" data-sigungu="강서구">강서</button></li>
		<li class="yongsan"><button type="button" data-sigungu="구로구">구로</button></li>
		<li class="yongsan"><button type="button" data-sigungu="금천구">금천</button></li>
		<li class="yongsan"><button type="button" data-sigungu="영등포구">영등포</button></li>
		<li class="yongsan"><button type="button" data-sigungu="동작구">동작</button></li>
		<li class="yongsan"><button type="button" data-sigungu="관악구">관악</button></li>
		<li class="yongsan"><button type="button" data-sigungu="서초구">서초</button></li>
		<li class="yongsan"><button type="button" data-sigungu="강남구">강남</button></li>
		<li class="yongsan"><button type="button" data-sigungu="송파구">송파</button></li>
		<li class="yongsan"><button type="button" data-sigungu="강동구">강동</button></li>
        `,
        busan: `
        <li class="jongno"><button type="button" data-sigungu="중구">중구</a></li>
		<li class="jongno"><button type="button" data-sigungu="서구">서구</a></li>
		<li class="jongno"><button type="button" data-sigungu="동구">동구</a></li>
		<li class="jongno"><button type="button" data-sigungu="영도구">영도구</a></li>
		<li class="jongno"><button type="button" data-sigungu="부산진구">부산진구</a></li>
		<li class="jongno"><button type="button" data-sigungu="동래구">동래구</a></li>
		<li class="jongno"><button type="button" data-sigungu="남구">남구</a></li>
		<li class="jongno"><button type="button" data-sigungu="북구">북구</a></li>
		<li class="jongno"><button type="button" data-sigungu="해운대구">해운대구</a></li>
		<li class="jongno"><button type="button" data-sigungu="기장군">기장군</a></li>
		<li class="jongno"><button type="button" data-sigungu="사하구">사하구</a></li>
		<li class="jongno"><button type="button" data-sigungu="금정구">금정구</a></li>
		<li class="jongno"><button type="button" data-sigungu="강서구">강서구</a></li>
		<li class="jongno"><button type="button" data-sigungu="연제구">연제구</a></li>
		<li class="jongno"><button type="button" data-sigungu="수영구">수영구</a></li>
		<li class="jongno"><button type="button" data-sigungu="사상구">사상구</a></li>
        `,
        daegu: `
        <li class="jongno"><button type="button" data-sigungu="중구">중구</a></li>
		<li class="jongno"><button type="button" data-sigungu="동구">동구</a></li>
		<li class="jongno"><button type="button" data-sigungu="서구">서구</a></li>
		<li class="jongno"><button type="button" data-sigungu="남구">남구</a></li>
		<li class="jongno"><button type="button" data-sigungu="북구">북구</a></li>
		<li class="susung"><button type="button" data-sigungu="수성구">수성구</a></li>
		<li class="jongno"><button type="button" data-sigungu="달서구">달서구</a></li>
		<li class="jongno"><button type="button" data-sigungu="달성군">달성군</a></li>
		<li class="jongno"><button type="button" data-sigungu="군위군">군위군</a></li>
        `,
        incheon: `
        <li class="jongno"><button type="button" data-sigungu="중구">중구</a></li>
		<li class="jongno"><button type="button" data-sigungu="동구">동구</a></li>
		<li class="jongno"><button type="button" data-sigungu="미추홀구">미추홀구</a></li>
		<li class="jongno"><button type="button" data-sigungu="연수구">연수구</a></li>
		<li class="jongno"><button type="button" data-sigungu="남동구">남동구</a></li>
		<li class="jongno"><button type="button" data-sigungu="부평구">부평구</a></li>
		<li class="jongno"><button type="button" data-sigungu="계양구">계양구</a></li>
		<li class="jongno"><button type="button" data-sigungu="서구">서구</a></li>
		<li class="jongno"><button type="button" data-sigungu="강화군">강화군</a></li>
		<li class="jongno"><button type="button" data-sigungu="웅진군">웅진군</a></li>
        `,
        kwangju: `
        <li class="jongno"><button type="button" data-sigungu="동구">동구</a></li>
		<li class="jongno"><button type="button" data-sigungu="서구">서구</a></li>
		<li class="jongno"><button type="button" data-sigungu="남구">남구</a></li>
		<li class="jongno"><button type="button" data-sigungu="북구">북구</a></li>
		<li class="jongno"><button type="button" data-sigungu="중구">중구</a></li>
        `,
        daejeon: `
        <li class="jongno"><button type="button" data-sigungu="동구">동구</a></li>
		<li class="jongno"><button type="button" data-sigungu="중구">중구</a></li>
		<li class="jongno"><button type="button" data-sigungu="서구">서구</a></li>
		<li class="jongno"><button type="button" data-sigungu="유성구">유성구</a></li>
		<li class="jongno"><button type="button" data-sigungu="대덕구">대덕구</a></li>
        `,
        ulsan: `
        <li class="jongno"><button type="button" data-sigungu="중구">중구</a></li>
		<li class="jongno"><button type="button" data-sigungu="남구">남구</a></li>
		<li class="jongno"><button type="button" data-sigungu="동구">동구</a></li>
		<li class="jongno"><button type="button" data-sigungu="북구">북구</a></li>
		<li class="jongno"><button type="button" data-sigungu="울주군">울주군</a></li>
        `,
        sejong: `
        <li class="jongno"><button type="button" data-sigungu="세종특별자치시">세종특별자치시</a></li>
        `,
        gyunggi: `
        <li class="jongno"><button type="button" data-sigungu="의정부시">의정부시</a></li>
		<li class="jongno"><button type="button" data-sigungu="광명시">광명시</a></li>
		<li class="jongno"><button type="button" data-sigungu="평택시">평택시</a></li>
		<li class="jongno"><button type="button" data-sigungu="양주시">양주시</a></li>
		<li class="jongno"><button type="button" data-sigungu="동두천시">동두천시</a></li>
		<li class="jongno"><button type="button" data-sigungu="과천시">과천시</a></li>
		<li class="jongno"><button type="button" data-sigungu="의왕시">의왕시</a></li>
		<li class="jongno"><button type="button" data-sigungu="구리시">구리시</a></li>
		<li class="jongno"><button type="button" data-sigungu="남양주시">남양주시</a></li>
		<li class="jongno"><button type="button" data-sigungu="오산시">오산시</a></li>
		<li class="jongno"><button type="button" data-sigungu="화성시">화성시</a></li>
		<li class="jongno"><button type="button" data-sigungu="시흥시">시흥시</a></li>
		<li class="jongno"><button type="button" data-sigungu="군포시">군포시</a></li>
		<li class="jongno"><button type="button" data-sigungu="하남시">하남시</a></li>
		<li class="jongno"><button type="button" data-sigungu="파주시">파주시</a></li>
		<li class="jongno"><button type="button" data-sigungu="여주시">여주시</a></li>
		<li class="jongno"><button type="button" data-sigungu="이천시">이천시</a></li>
		<li class="jongno"><button type="button" data-sigungu="안성시">안성시</a></li>
		<li class="jongno"><button type="button" data-sigungu="김포시">김포시</a></li>
		<li class="jongno"><button type="button" data-sigungu="광주시">광주시</a></li>
		<li class="jongno"><button type="button" data-sigungu="포천시">포천시</a></li>
		<li class="jongno"><button type="button" data-sigungu="연천군">연천군</a></li>
		<li class="jongno"><button type="button" data-sigungu="양평군">양평군</a></li>
		<li class="jongno"><button type="button" data-sigungu="가평군">가평군</a></li>
		<li class="jongno"><button type="button" data-sigungu="용인시">용인시</a></li>
		<li class="jongno"><button type="button" data-sigungu="고양시">고양시</a></li>
		<li class="jongno"><button type="button" data-sigungu="수원시">수원시</a></li>
		<li class="jongno"><button type="button" data-sigungu="부천시">부천시</a></li>
		<li class="jongno"><button type="button" data-sigungu="안산시">안산시</a></li>
		<li class="jongno"><button type="button" data-sigungu="성남시">성남시</a></li>
		<li class="jongno"><button type="button" data-sigungu="안양시">안양시</a></li>
        `,
        kangwon: `
        <li class="jongno"><button type="button" data-sigungu="춘천시">춘천시</a></li>
		<li class="jongno"><button type="button" data-sigungu="원주시">원주시</a></li>
		<li class="jongno"><button type="button" data-sigungu="강릉시">강릉시</a></li>
		<li class="jongno"><button type="button" data-sigungu="동해시">동해시</a></li>
		<li class="jongno"><button type="button" data-sigungu="삼척시">삼척시</a></li>
		<li class="jongno"><button type="button" data-sigungu="태백시">태백시</a></li>
		<li class="jongno"><button type="button" data-sigungu="정선군">정선군</a></li>
		<li class="jongno"><button type="button" data-sigungu="속초시">속초시</a></li>
		<li class="jongno"><button type="button" data-sigungu="고성군">고성군</a></li>
		<li class="jongno"><button type="button" data-sigungu="양양군">양양군</a></li>
		<li class="jongno"><button type="button" data-sigungu="인제군">인제군</a></li>
		<li class="jongno"><button type="button" data-sigungu="홍천군">홍천군</a></li>
		<li class="jongno"><button type="button" data-sigungu="횡성군">횡성군</a></li>
		<li class="jongno"><button type="button" data-sigungu="영월군">영월군</a></li>
		<li class="jongno"><button type="button" data-sigungu="평창군">평창군</a></li>
		<li class="jongno"><button type="button" data-sigungu="화천군">화천군</a></li>
		<li class="jongno"><button type="button" data-sigungu="양구군">양구군</a></li>
		<li class="jongno"><button type="button" data-sigungu="철원군">철원군</a></li>
        `,
        chungbuk: `
        <li class="jongno"><button type="button" data-sigungu="충주시">충주시</a></li>
		<li class="jongno"><button type="button" data-sigungu="제천시">제천시</a></li>
		<li class="jongno"><button type="button" data-sigungu="단양군">단양군</a></li>
		<li class="jongno"><button type="button" data-sigungu="영동군">영동군</a></li>
		<li class="jongno"><button type="button" data-sigungu="보은군">보은군</a></li>
		<li class="jongno"><button type="button" data-sigungu="옥천군">옥천군</a></li>
		<li class="jongno"><button type="button" data-sigungu="음성군">음성군</a></li>
		<li class="jongno"><button type="button" data-sigungu="진천군">진천군</a></li>
		<li class="jongno"><button type="button" data-sigungu="괴산군">괴산군</a></li>
		<li class="jongno"><button type="button" data-sigungu="증평군">증평군</a></li>
		<li class="jongno"><button type="button" data-sigungu="청주시">청주시</a></li>
        `,
        chungnam: `
        <li class="jongno"><button type="button" data-sigungu="공주시">공주시</a></li>
		<li class="jongno"><button type="button" data-sigungu="보령시">보령시</a></li>
		<li class="jongno"><button type="button" data-sigungu="아산시">아산시</a></li>
		<li class="jongno"><button type="button" data-sigungu="서산시">서산시</a></li>
		<li class="jongno"><button type="button" data-sigungu="태안군">태안군</a></li>
		<li class="jongno"><button type="button" data-sigungu="금산군">금산군</a></li>
		<li class="jongno"><button type="button" data-sigungu="논산시">논산시</a></li>
		<li class="jongno"><button type="button" data-sigungu="계룡시">계룡시</a></li>
		<li class="jongno"><button type="button" data-sigungu="부여군">부여군</a></li>
		<li class="jongno"><button type="button" data-sigungu="서천군">서천군</a></li>
		<li class="jongno"><button type="button" data-sigungu="홍성군">홍성군</a></li>
		<li class="jongno"><button type="button" data-sigungu="청양군">청양군</a></li>
		<li class="jongno"><button type="button" data-sigungu="예산군">예산군</a></li>
		<li class="jongno"><button type="button" data-sigungu="당진시">당진시</a></li>
		<li class="jongno"><button type="button" data-sigungu="천안시">천안시</a></li>
        `,
        jeonbuk: `
        <li class="jongno"><button type="button" data-sigungu="군산시">군산시</a></li>
		<li class="jongno"><button type="button" data-sigungu="익산시">익산시</a></li>
		<li class="jongno"><button type="button" data-sigungu="정읍시">정읍시</a></li>
		<li class="jongno"><button type="button" data-sigungu="남원시">남원시</a></li>
		<li class="jongno"><button type="button" data-sigungu="김제시">김제시</a></li>
		<li class="jongno"><button type="button" data-sigungu="완주군">완주군</a></li>
		<li class="jongno"><button type="button" data-sigungu="진안군">진안군</a></li>
		<li class="jongno"><button type="button" data-sigungu="무주군">무주군</a></li>
		<li class="jongno"><button type="button" data-sigungu="장수군">장수군</a></li>
		<li class="jongno"><button type="button" data-sigungu="임실군">임실군</a></li>
		<li class="jongno"><button type="button" data-sigungu="순창군">순창군</a></li>
		<li class="jongno"><button type="button" data-sigungu="고창군">고창군</a></li>
		<li class="jongno"><button type="button" data-sigungu="부안군">부안군</a></li>
		<li class="jongno"><button type="button" data-sigungu="전주시">전주시</a></li>
        `,
        jeonnam: `
        <li class="jongno"><button type="button" data-sigungu="목포시">목포시</a></li>
		<li class="jongno"><button type="button" data-sigungu="여수시">여수시</a></li>
		<li class="jongno"><button type="button" data-sigungu="순천시">순천시</a></li>
		<li class="jongno"><button type="button" data-sigungu="나주시">나주시</a></li>
		<li class="jongno"><button type="button" data-sigungu="관양시">관양시</a></li>
		<li class="jongno"><button type="button" data-sigungu="담양군">담양군</a></li>
		<li class="jongno"><button type="button" data-sigungu="장성군">장성군</a></li>
		<li class="jongno"><button type="button" data-sigungu="곡성군">곡성군</a></li>
		<li class="jongno"><button type="button" data-sigungu="구례군">구례군</a></li>
		<li class="jongno"><button type="button" data-sigungu="고흥군">고흥군</a></li>
		<li class="jongno"><button type="button" data-sigungu="보성군">보성군</a></li>
		<li class="jongno"><button type="button" data-sigungu="화순군">화순군</a></li>
		<li class="jongno"><button type="button" data-sigungu="장흥군">장흥군</a></li>
		<li class="jongno"><button type="button" data-sigungu="강진군">강진군</a></li>
		<li class="jongno"><button type="button" data-sigungu="완도군">완도군</a></li>
		<li class="jongno"><button type="button" data-sigungu="해남군">해남군</a></li>
		<li class="jongno"><button type="button" data-sigungu="진도군">진도군</a></li>
		<li class="jongno"><button type="button" data-sigungu="영암군">영암군</a></li>
		<li class="jongno"><button type="button" data-sigungu="무안군">무안군</a></li>
		<li class="jongno"><button type="button" data-sigungu="영광군">영광군</a></li>
		<li class="jongno"><button type="button" data-sigungu="함평군">함평군</a></li>
		<li class="jongno"><button type="button" data-sigungu="신안군">신안군</a></li>
        `,
        gyeongbuk: `
        <li class="jongno"><button type="button" data-sigungu="울릉군">울릉군</a></li>
		<li class="jongno"><button type="button" data-sigungu="경주시">경주시</a></li>
		<li class="jongno"><button type="button" data-sigungu="김천시">김천시</a></li>
		<li class="jongno"><button type="button" data-sigungu="안동시">안동시</a></li>
		<li class="jongno"><button type="button" data-sigungu="구미시">구미시</a></li>
		<li class="jongno"><button type="button" data-sigungu="영주시">영주시</a></li>
		<li class="jongno"><button type="button" data-sigungu="영천시">영천시</a></li>
		<li class="jongno"><button type="button" data-sigungu="상주시">상주시</a></li>
		<li class="jongno"><button type="button" data-sigungu="문경시">문경시</a></li>
		<li class="jongno"><button type="button" data-sigungu="예천군">예천군</a></li>
		<li class="jongno"><button type="button" data-sigungu="경산시">경산시</a></li>
		<li class="jongno"><button type="button" data-sigungu="청도군">청도군</a></li>
		<li class="jongno"><button type="button" data-sigungu="고령군">고령군</a></li>
		<li class="jongno"><button type="button" data-sigungu="성주군">성주군</a></li>
		<li class="jongno"><button type="button" data-sigungu="칠곡군">칠곡군</a></li>
		<li class="jongno"><button type="button" data-sigungu="의성군">의성군</a></li>
		<li class="jongno"><button type="button" data-sigungu="청송군">청송군</a></li>
		<li class="jongno"><button type="button" data-sigungu="영양군">영양군</a></li>
		<li class="jongno"><button type="button" data-sigungu="영덕군">영덕군</a></li>
		<li class="jongno"><button type="button" data-sigungu="봉화군">봉화군</a></li>
		<li class="jongno"><button type="button" data-sigungu="울진군">울진군</a></li>
		<li class="jongno"><button type="button" data-sigungu="포항시">포항시</a></li>
        `,
        gyeongnam: `
        <li class="jongno"><button type="button" data-sigungu="진주시">진주시</a></li>
		<li class="jongno"><button type="button" data-sigungu="통영시">통영시</a></li>
		<li class="jongno"><button type="button" data-sigungu="고성군">고성군</a></li>
		<li class="jongno"><button type="button" data-sigungu="사천시">사천시</a></li>
		<li class="jongno"><button type="button" data-sigungu="김해시">김해시</a></li>
		<li class="jongno"><button type="button" data-sigungu="밀양시">밀양시</a></li>
		<li class="jongno"><button type="button" data-sigungu="거제시">거제시</a></li>
		<li class="jongno"><button type="button" data-sigungu="의령군">의령군</a></li>
		<li class="jongno"><button type="button" data-sigungu="함안군">함안군</a></li>
		<li class="jongno"><button type="button" data-sigungu="창녕군">창녕군</a></li>
		<li class="jongno"><button type="button" data-sigungu="양산시">양산시</a></li>
		<li class="jongno"><button type="button" data-sigungu="하동군">하동군</a></li>
		<li class="jongno"><button type="button" data-sigungu="남해군">남해군</a></li>
		<li class="jongno"><button type="button" data-sigungu="함양군">함양군</a></li>
		<li class="jongno"><button type="button" data-sigungu="산청군">산청군</a></li>
		<li class="jongno"><button type="button" data-sigungu="거창군">거창군</a></li>
		<li class="jongno"><button type="button" data-sigungu="합천군">합천군</a></li>
		<li class="jongno"><button type="button" data-sigungu="창원시">창원시</a></li>
        `,
        jeju: `
        <li class="jongno"><button type="button" data-sigungu="제주시">제주시</a></li>
		<li class="jongno"><button type="button" data-sigungu="서귀포시">서귀포시</a></li>
        `,
    };
    let sigunguContents_seoul = {
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
		<div class="keyword-box">
			<div><span>2</span>종로구 더미데이터</div>
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
			<div><span>3</span>종로구 더미데이터</div>
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
				<li><span>재건축단지</span></li>
			</ol>
		</div>
		<div class="keyword-box">
			<div><span>2</span>중구 더미데이터</div>
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
			<div><span>3</span>중구 더미데이터</div>
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
        `,
    };

    // svg내 polygon 이벤트
    mapLists.forEach((mapList) => {
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
                setTimeout(() => {
                    mapTitle.focus();
                }, 1);
            }
        });
    });

    // 타이틀에서 shift + Tab 입력시 포커스 복귀
    mapTitle.addEventListener('keydown', (e) => {
        if (e.shiftKey && e.key == 'Tab') {
            const currentMap = document.querySelector('polygon[title="선택됨"]');
            e.preventDefault();
            currentMap.focus();
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
                }
            }
        }
        // Tab 입력시 포커스 복귀
        if (!e.shiftKey && e.key == 'Tab') {
            e.preventDefault();
            currentMap.focus();
        }
    });

    // 시군구 뒤로가기 버튼 이벤트
    const btnMapBack = document.querySelector('.btn-map-back');
    // 클릭 시 전국지도로 돌아가기
    btnMapBack.addEventListener('click', () => {
        openControl(sigunguMap, allMap);
        const currentMap = document.querySelector('polygon[title="선택됨"]');
        setTimeout(() => {
            currentMap.focus();
        }, 1);
    });

    // 시군구 컨텐츠 버튼 이벤트
    const sigunguContents = sigunguLineup.querySelectorAll('li button');
    sigunguContents.forEach((sigunguContent) => {
        sigunguContent.addEventListener('click', () => {
            console.log('1');
            for (let i in sigunguContents_seoul) {
                if (sigunguContent.getAttribute('data-sigungu') == i) {
                    console.log(sigunguContent.getAttribute('data-sigungu'));
                    console.log(i);
                    // title="선택됨" 적용
                    titleChange(sigunguContents, sigunguContent);
                    // 시도 키워드 노출
                    topParents.setAttribute('data-keyword', '3');
                    console.log(topParents);
                    // 타이틀 변경
                    mapTitle.innerHTML = `서울별시 > ${i}`;
                    // 키워드 변경 및 지역상세보기 data값 변경
                    for (let i in keywordCol05Contents) {
                        if (mapList.getAttribute('data-area') == i) {
                            mapContent.innerHTML = keywordCol05Contents[i];
                            mapBtn.setAttribute('data-link', i);
                        }
                    }
                    setTimeout(() => {
                        mapTitle.focus();
                    }, 1);
                }
            }
        });
    });
}

/* 공약이슈 기초조사 보기 */
function issueBasic() {
    // objectGroup(); 추후 하단에 모아서 정리필요
    const mapPdf = document.querySelector('.map-pdf');
    const pdfViewer = document.querySelector('.map-pdf .pdf-viewer');
    const mapPdf02 = document.querySelector('.map-pdf02');

    // svg내 polygon 클릭시 iframe으로 포커스 이동
    mapLists.forEach((mapList) => {
        mapList.addEventListener('click', () => {
            addRemoveClass(mapLists, mapPdf);
            addRemoveClass(mapLists, mapPdf02);
            mapLists.forEach((e) => {
                e.setAttribute('title', '');
            });
            mapList.classList.add('on');
            mapList.setAttribute('title', '선택됨');
            // pdf 파일 로드된 후에 포커스가 들어가야 화면상 이동이 됨(추후 시간 조절 필요)
            setTimeout(() => {
                pdfViewer.focus();
            }, 300);
        });

        // svg내 polygon Enter/space 입력시 iframe으로 포커스 이동
        mapList.addEventListener('keydown', (e) => {
            if (e.key == 'Enter' || e.key == ' ') {
                addRemoveClass(mapLists, mapPdf);
                addRemoveClass(mapLists, mapPdf02);
                mapLists.forEach((e) => {
                    e.setAttribute('title', '');
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

    // 디자인 확정되면 위 변수들과 확인해서 제거
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

function titleChange(remove, add) {
    remove.forEach((el) => {
        el.setAttribute('title', '');
    });
    add.setAttribute('title', '선택됨');
}

// 현재 위치 확인
/* document.addEventListener('keydown', (e) => {
    console.log(document.activeElement);
}); */

// html 로드되고 바로 실행
window.addEventListener('DOMContentLoaded', function () {
    const currentPage = this.document.querySelector('.comparative').getAttribute('data-tab');

    if (currentPage == 1) {
        issueTree();
    } else if (currentPage == 2) {
        issueBasic();
    }
    // mobileChangeSigungu();
});
