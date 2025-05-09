MediaSource.isTypeSupported = () => 1;

{
  let has = (a, b) => {
    switch (b) {
      case "aria-activedescendant":
      case "aria-atomic":
      case "aria-autocomplete":
      case "aria-controls":
      case "aria-describedby":
      case "aria-disabled":
      case "aria-expanded":
      case "aria-haspopup":
      case "aria-hidden":
      case "aria-label":
      case "aria-labelledby":
      case "aria-live":
      case "aria-modal":
      case "aria-multiline":
      case "aria-owns":
      case "aria-pressed":
      case "aria-relevant":
      case "aria-selected":
      case "aria-valuenow":
      case "aria-valuetext":
      case "ariaExpanded":
      case "ariaLabel":
      case "ariaLabelledBy":
      case "background":
      case "backgroundColor":
      case "backgroundImage":
      case "borderRadius":
      case "data-e2e":
      case "data-testid":
      case "e2eTag":
      case "ellipsis":
      case "ellipsisLine":
      case "ellipsisNarrow":
      case "ellipsisOnNarrow":
      case "shape":
      case "tiltX":
      case "tiltY":
      case "transparent":
      case "twist":
        return 0;
      default:
        return b in a;
    }
  }
  Object.prototype.hasOwnProperty = function (a) { return has(this, a) }
  Object.prototype.hasOwnProperty.call = has;
}

/*
IPがBotとして判定され検索が一切できなくなるため対応検討中
おそらく本来不要なリクエストをいくつか送信しないといけない

HTMLHeadElement.prototype.appendChild = a => {
  let src = a.src;
  src &&
  src[111] != "z" && // src.slice(110, 114) != "/zti" &&
  src[119] != "z" && // src.slice(118, 122) != "/zti" &&
  document.head.insertBefore(a, null);
}
{
  // Object.seal = a => a;
  // var z = {};
  Object.prototype.hasOwnProperty.call = (a, b) => {
    switch (b) {
      case "abTestVersion":
      case "alt":
      case "altKey":
      case "aria-activedescendant":
      case "aria-atomic":
      case "aria-autocomplete":
      case "aria-controls":
      case "aria-describedby":
      case "aria-disabled":
      case "aria-expanded":
      case "aria-haspopup":
      case "aria-hidden":
      case "aria-label":
      case "aria-labelledby":
      case "aria-live":
      case "aria-modal":
      case "aria-multiline":
      case "aria-owns":
      case "aria-pressed":
      case "aria-relevant":
      case "aria-selected":
      case "aria-valuenow":
      case "aria-valuetext":
      case "ariaExpanded":
      case "ariaLabel":
      case "ariaLabelledBy":
      case "autoComplete":
      case "autoFocus":
      case "background":
      case "backgroundColor":
      case "backgroundImage":
      case "borderRadius":
      case "botType":
      case "btnShow":
      case "dangerouslyExposeHtml":
      case "dangerouslySetInnerHTML":
      case "downloadLink":
      case "downloadSetting":
      case "color":
      case "content-type":
      case "contentType":
      case "ctrlKey":
      case "data-e2e":
      case "data-testid":
      case "dir":
      case "disableAutoLang":
      case "disableDownload":
      case "disabled":
      // case "draggingPercentCb":
      // case "draggingStateCb":
      case "e2eData":
      case "e2eTag":
      case "ellipsis":
      case "ellipsisLine":
      case "ellipsisNarrow":
      case "ellipsisOnNarrow":
      case "error":
      case "fetchPriority":
      // case "handleDownload":
      // case "hoverTeaReportParams":
      case "hrefLang":
      case "isAd":
      case "isAds":
      case "isAndroid":
      case "isBot":
      // case "isGuestMode": // Bug
      // case "isGuestModeUI": // Bug
      case "isIOS":
      case "isMobile":
      case "isMobileUiOptimize":
      case "isSearchEngineBot":
      // case "label":
      // case "labelType":
      case "lang":
      case "language":
      case "letterSpacing":
      case "lineClamp":
      case "loading":
      case "logger":
      // case "maskCloseable":
      case "meta":
      case "metaKey":
      case "mobileGuessSearchList":
      case "mobileSugList":
      case "muted":
      case "needAnimation":
      case "onContextMenu":
      case "onCopy":
      case "onCut":
      case "onDragEnter":
      case "onError":
      case "onPlatformChange":
      // case "onTab":
      // case "onTabChange":
      // case "onTabClick":
      // case "onTabListKeyDown":
      case "onTouchStart":
      case "onVideoError":
      case "onerror":
      case "report":
      case "reportParams":
      case "scrollWidth":
      case "scrollbar":
      case "seo_vidab":
      case "shouldReport":
      // case "rel":
      // case "redirectToHomePage":
      case "role":
      case "selectedTranslationLanguage":
      case "setPlaceholderComplete":
      case "shape":
      case "shareUrl":
      case "shiftKey":
      case "shouldAnimate":
      case "showCaption":
      case "showLogo":
      case "showRelated":
      // case "sideCar":
      case "tabIndex":
      // case "tabKey":
      case "textDecoration":
      // case "teaReport":
      // case "theme":
      case "tiltX":
      case "tiltY":
      case "title":
      case "toastDuration":
      case "toastNotShown":
      case "toastOptions":
      case "toastTheme":
      case "toasterTheme":
      case "twist":
      case "translationDisableLanguages":
      case "transparent":
      case "userAgent":
      case "volumeInfo":
      case "xmlns":
        return 0;
      case "Webapp":
      case "constructor":
      case "ja-JP":
      case "keySeparator":
      case "supportAVIF":
      case "supportWebP":
        return 1;
      default:
        // b.length > 2 && (z[b] ? ++z[b] : z[b] = 1);
        return b in a;
    }
  }
  // let p = XMLHttpRequest.prototype;
  // p.addEventListener =
  // p.removeEventListener = () => 0;
  let open = p.open;
  p.open = function (a, b, c) {
    b != "https://mon.tiktokv.com/monitor_browser/collect/batch/?biz_id=tiktok_webapp" &&
    b != "https://mon.tiktokv.com/monitor_browser/collect/batch/?biz_id=tt_pc_banner_ads" &&
    b != "https://im-api-sg.tiktok.com/v2/message/get_by_user_init" &&
    b.slice(32, 38) != "report" &&
    b != "https://mon.tiktokv.com/monitor_browser/collect/batch/?bid=tiktok_pns_web_runtime" &&
    b != "https://mon.tiktokv.com/monitor_web/settings/browser-settings?bid=tiktok_webapp&store=1" &&
      open.call(this, a, b, c);
  }
  let send = p.send;
  p.send = function (a) {
    this.readyState && send.call(this, a)
  }
  let fet = fetch;
  fetch = (a, b) => {
    let url = a.url;
    if (url) {
      let str = url.slice(32, 38);
      switch (str) {
        case "/notic":
        case "collec":
        // case "detail":
        case "e/mult":
        case "ed/ite":
        case "follow":
        // case "h/sugg":
        case "report":
        case "siness":
        case "st/fee":
          return 0;
        default:
          return fet(a, b);
      }
    }
  }
}*/