//난독화
//https://javascriptobfuscator.com/Javascript-Obfuscator.aspx

// 브라우저가 HTML을 전부 읽고 DOM 트리를 완성하는 즉시 발생합니다.
window.addEventListener("DOMContentLoaded", () => {
  // 화면 키다운 이벤트
  document.addEventListener("keydown", function (event) {
    // F4 키 눌렸을 때
    if (event.keyCode == 115) {
      document.querySelector("#searchword").value = "";
      document.querySelector("#searchword").focus();
      document.querySelector("#searchword").placeholder = "";

    }
  });

  const chkList = document.getElementsByName("chk");
  for (chk of chkList) {
    // localStorage 기준으로 체크박스 값 세팅
    chk.checked = localStorage.getItem(chk.getAttribute("id")) === "true";
    // 체크박스 값 변경 이벤트
    chk.addEventListener("change", function (event) {
      localStorage.setItem(this.getAttribute("id"), this.checked);
    });
  }

  // '전체선택' 체크박스 값 변경 이벤트
  const chkAll = document.querySelector("#chkAll");
  chkAll.addEventListener("change", function (event) {
    const chkList = document.getElementsByName("chk");
    for (chk of chkList) {
      if (chkAll.checked !== chk.checked) chk.click();
    }
    localStorage.setItem(chkAll.getAttribute("id"), chkAll.checked);
  });
});

// HTML로 DOM 트리를 만드는 게 완성되었을 뿐만 아니라 이미지, 스타일시트 같은 외부 자원도 모두 불러오는 것이 끝났을 때 발생합니다.
window.addEventListener("load", () => {
  // 검색창 포커스
  document.querySelector("#searchword").focus();
//  openpopup();
});

// 검색필드 엔터키시 검색 실행
function enterkey() {
  if (window.event.keyCode == 13) {
    search();
  }
}



// 검색 함수
function search() {
  // 검색어 입력 여부 검사
  const searchword = document.querySelector("#searchword").value;
  if (!searchword) return false;

  // 체크박스 선택 여부 검사
  let cnt = 0;
  const chkList = document.getElementsByName("chk");
  for (chk of chkList) if (chk.checked) cnt++;
  if (cnt == 0) {
    alert("체크박스를 선택하세요.");
    return false;
  }

  // URL
  let url = "";

  // 패밀리팜
  const chkFamily = document.querySelector("#chkFamily").checked;
  if (chkFamily) {
    url = "http://family-pharm.co.kr/web_order/order_search.asp";
    const family = window.open(
      url +
        "?gb=1&se=1&page=1&goods_name=" +
        escape(searchword) +
        "&cust_name=&page=1&gb=&cust_name2=&",
      " :: Family Pharm :: "
    );
  }

  // 지오영
  const chkGeo = document.querySelector("#chkGeo").checked;
  if (chkGeo) {
    url = "https://order.geoweb.kr";
    const geoweb = window.open(
      url + "?goods_name=" + encodeURIComponent(searchword),
      "24시간 365일 실시간 주문 지오웹"
    );
  }

  // 한미몰
  const chkHmp = document.querySelector("#chkHmp").checked;
  if (chkHmp) {
    url = "https://www.hmpmall.co.kr/search/searchTwoStepList.do";
    const hmpmall = window.open(
      url + "?productName=" + encodeURIComponent(searchword),
      "HMP몰"
    );
  }

  // 일동몰
  const chkIldong = document.querySelector("#chkIldong").checked;
  if (chkIldong) {
    url = "https://www.ildongshop.com/w/product/searchProductList.do";
    const ildong = window.open(
      encodeURI(url + "?searchChk=‘상품명’&mainSchValue=" + searchword),
      "일동 SHOP"
    );
  }

  // 재상팜
  const chkJesang = document.querySelector("#chkJesang").checked;
  if (chkJesang) {
    url = "http://pharmjs.co.kr/web_order/order_search.asp";
    const jesang = window.open(
      url +
        "?gb=1&se=1&page=1&goods_name=" +
        escape(searchword) +
        "&cust_name=&page=1&gb=&cust_name2=&",
      " (주)재상팜 "
    );
    //?gb=1&se=1&page=1&il=1
  }

  // 나우팜
  const chkNow = document.querySelector("#chkNow").checked;
  if (chkNow) {
    url = "http://www.nowph.co.kr/web_order/order_search.asp";
    const nowp = window.open(
      url +
        "?gb=1&se=1&page=1&goods_name=" +
        escape(searchword) +
        "&cust_name=&page=1&gb=&cust_name2=&",
      "::: (주)나우팜 ::"
    );
    //http://www.nowph.co.kr/web_order/order_search.asp?gb=1&se=1&page=1&il=1
  }

  // 더샵
  const chkTheShop = document.querySelector("#chkTheShop").checked;
  if (chkTheShop) {
    url = "https://www.shop.co.kr/front/theshop/goods/search/search_list";
    const shop = window.open(
      url + "?searchKey=goodsNm&searchVal=" + encodeURIComponent(searchword),
      "theSHOP"
    );
  }

  // 백제
  const chkIbjp = document.querySelector("#chkIbjp").checked;
  if (chkIbjp) {
    url = "http://www.ibjp.co.kr/ord/comOrd.act";
    const chkIbjp = window.open(
      url +
        "?H_SORT_GB=AVAIL_STOCK&H_SEARCH_GB=ITEM_NM&H_SEARCH_NM=&H_SEARCH_MAKER=&SEL_ITEM_CD=&SEL_MONTH=-3&PAGE_ITEM=&PAGE_HISTORY=1&PAGE_PER_CNT=100&PAGE_OFFSET_CNT=&TOTAL_CNT=0&BASKET_GB_CD=01&SAVE_ITEM_CD=&SAVE_ITEM_GB_CD=&ITEM_QTY=&ORD_WP2_AMT=&SEARCH_GB=ITEM_NM&SEARCH_NM=&SEARCH_MAKER=&SORT_GB=AVAIL_STOCK&goods_name=" +
        encodeURIComponent(searchword),
      "웹주문 시스템"
    );
  }

  // 팜스넷
  const chkPharmsnet = document.querySelector("#chkPharmsnet").checked;
  if (chkPharmsnet) {
    url = "http://www.pharmsnet.com/web/mall/jsp/b_mall.jsp";
    const pharmsnet = window.open(
      url + "?goods_name=" + encodeURIComponent(searchword),
      "팜스넷 - 제일 좋은 파트너"
    );
  }

  // 팜스트리트
  const chkPharmStreet = document.querySelector("#chkPharmStreet").checked;
  if (chkPharmStreet) {
    url = "https://www.pharm-street.com/search/searchPage";
    const pharmStreet = window.open(
      encodeURI(url + "?query=" + searchword) +
        "&top_collection=c_goods&top_totalCount=10&top_searchField=GOOD_ID%2CGOOD_NM_WEB%2F100%2CGOOD_NM_WEB_KMA%2F100%2CGOOD_NM_WEB_NON_BLANK%2F100%2CGOOD_NM_WEB_CHOSUNG%2F100%2CGOOD_NM_ENG%2CGOOD_NM_ENG_KMA%2CMAKER_NM_KOR%2F50%2CMAKER_NM_KOR_KMA%2F50%2CINSURANCE_CD%2CINSURANCE_CD_MATRIX%2CEFFECT_TXT%2CEFFECT_TXT%2CCONSTRUCT_TXT%2CCONSTRUCT_TXT_KMA%2CEFFECT_TXT_KMA%2CGOOD_STD%2CSEARCH_WORD%2CMAKER_NM_ENG&top_sort=ORDERBY1%2FASC%2CORDERBY2%2FASC%2CORDERBY3%2FASC%2CRANK%2FDESC%2CGOOD_NM_WEB%2FASC%2CORDER_CNT%2FDESC%2CGOOD_DV_CD%2FASC%2CPACK_CNT%2FASC&top_tabId=c_goods_1&collection=c_goods&recommendKeywordType=0&recommendKeywordURL=&recommendKeyword=&temp_cnt=0&seleted_goods_name=&cursorPos=0&cursorPosRecent=0",
      "팜스트리트"
    );
  }

  // 유팜몰
  const chkUpharm = document.querySelector("#chkUpharm").checked;
  if (chkUpharm) {
    url = "http://www.upharmmall.co.kr/Search/Search.aspx";
    const upharm = window.open(
      url + "?keyword=" + encodeURIComponent(searchword),
      "유팜몰"
    );
  }

  // 바로팜
  const chkBaro = document.querySelector("#chkBaro").checked;
  if (chkBaro) {
    url = "https://www.baropharm.com/order";
    const baro = window.open(
      url + "?q=" + encodeURIComponent(searchword),
      "바로팜"
    );
  }

  // 파라미터전송 후 검색 필드 지움
  // document.querySelector("#searchword").value = "";
}
// 홈페이지 오픈될 때 다른 웹페이지 팝업
function openpopup() {
  // 패밀리팜
  const chkFamily_open = document.querySelector("#chkFamily").checked;
  if (chkFamily_open) {
    url_open = "http://family-pharm.co.kr/";
    let family_open = window.open(
      url_open, " :: Family Pharm :: "
    );
  }

  // 지오영
  const chkGeo_open = document.querySelector("#chkGeo").checked;
  if (chkGeo_open) {
    url_open = "https://order.geoweb.kr";
    let geoweb_open = window.open(
      url_open,
      "24시간 365일 실시간 주문 지오웹"
    );
  }

  // 한미몰
  const chkHmp_open = document.querySelector("#chkHmp").checked;
  if (chkHmp_open) {
    url_open = "https://www.hmpmall.co.kr/";
    let hmpmall_open = window.open(
      url_open,
      "HMP몰"
    );
  }

  // 일동몰
  const chkIldong_open = document.querySelector("#chkIldong").checked;
  if (chkIldong_open) {
    url_open = "https://www.ildongshop.com/";
    let ildong_open = window.open(
      encodeURI(url_open),
      "일동 SHOP"
    );
  }

  // 재상팜
  const chkJesang_open = document.querySelector("#chkJesang").checked;
  if (chkJesang_open) {
    url_open = "http://pharmjs.co.kr/";
    let jesang_open = window.open(
      url_open,
      " (주)재상팜 "
    );
    //?gb=1&se=1&page=1&il=1
  }

  // 나우팜
  const chkNow_open = document.querySelector("#chkNow").checked;
  if (chkNow_open) {
    url_open = "http://www.nowph.co.kr/";
    let nowp_open = window.open(
      url_open,
      "::: (주)나우팜 ::"
    );
    //http://www.nowph.co.kr/web_order/order_search.asp?gb=1&se=1&page=1&il=1
  }

  // 더샵
  const chkTheShop_open = document.querySelector("#chkTheShop").checked;
  if (chkTheShop_open) {
    url_open = "https://www.shop.co.kr/";
    let shop_open = window.open(
      url_open,
      "theSHOP"
    );
  }

  // 백제
  const chkIbjp_open = document.querySelector("#chkIbjp").checked;
  if (chkIbjp_open) {
    url_open = "http://www.ibjp.co.kr/";
    let chkIbjp_open = window.open(
      url_open,
      "웹주문 시스템"
    );
  }

  // 팜스넷
  const chkPharmsnet_open = document.querySelector("#chkPharmsnet").checked;
  if (chkPharmsnet_open) {
    url_open = "http://www.pharmsnet.com/";
    let pharmsnet_open = window.open(
      url_open,
      "팜스넷 - 제일 좋은 파트너"
    );
  }

  // 팜스트리트
  const chkPharmStreet_open = document.querySelector("#chkPharmStreet").checked;
  if (chkPharmStreet_open) {
    url_open = "https://www.pharm-street.com/";
    let pharmStreet_open = window.open(
      encodeURI(url_open,
      "팜스트리트"
    ));
  }

  // 유팜몰
  const chkUpharm_open = document.querySelector("#chkUpharm").checked;
  if (chkUpharm_open) {
    url_open = "http://www.upharmmall.co.kr/";
    let upharm_open = window.open(
      url_open,
      "유팜몰"
    );
  }

  // 바로팜
  const chkBaro_open = document.querySelector("#chkBaro").checked;
  if (chkBaro_open) {
    url_open = "https://www.baropharm.com/";
    let baro_open = window.open(
      url_open,
      "바로팜"
    );
  }

}
