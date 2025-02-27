MediaSource.isTypeSupported = () => 1;
{
  let p = Node.prototype;
  let o = Object;
  let blockElement;

  o.seal = a => a;
  p.addEventListener = function (a, b, c) {
    switch (a) {
      case "MSFullscreenChange":
      case "MSPointerDown":
      case "MSPointerMove":
      case "animationend":
      case "animationiteration":
      case "animationstart":
      case "auxclick":
      case "copy":
      case "contextmenu":
      case "cut":
      case "dblclick":
      case "drag":
      case "dragend":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "dragstart":
      case "drop":
      case "error":
      case "gotpointercapture":
      case "lostpointercapture":
      case "lowdecode":
      case "mouseenter":
      case "mouseleave":
      case "mouseout":
      case "mouseover":
      case "mozfullscreenchange":
      case "paste":
      case "selectionchange":
      case "touchcancel":
      case "touchend":
      case "touchmove":
      case "touchstart":
      case "visibilitychange":
      case "webkitbeginfullscreen":
      case "webkitendfullscreen":
      case "webkitfullscreenchange":
        return 0;
      default:
        addEventListener.call(this, a, b, c);
    }
  }
  p.removeEventListener = function (a, b, c) {
    switch (a) {
      case "MSFullscreenChange":
      case "MSPointerDown":
      case "MSPointerMove":
      case "contextmenu":
      case "error":
      case "touchmove":
      case "mozfullscreenchange":
      case "visibilitychange":
      case "volumechange":
      case "webkitbeginfullscreen":
      case "webkitendfullscreen":
      case "webkitfullscreenchange":
        return 0;
      default:
        removeEventListener.call(this, a, b, c);
    }
  }
  HTMLElement.prototype.setAttribute = function (a, b) {
    switch (a) {
      case "aria-modal":
      case "aria-valuenow":
      case "aria-valuetext":
      case "content":
      // case "data-webpack":
      case "hrefLang":
      case "letter-spacing":
      case "shape":
        return 0;
      case "class":
        return this.className = b;
      case "id":
      case "height":
      case "srcSet":
      case "target":
      case "width":
        return this[a] = b;
      case "rel":
        blockElement = this;
        b  == "stylesheet" && (this.rel = "stylesheet");
        return 0;
      case "href":
        return this.tagName != "LINK" || blockElement?.rel == "stylesheet" && (this.href = b);
      default:
        Element.prototype.setAttribute.call(this, a, b);
    }
  }
  o.prototype.hasOwnProperty = function (a) {
    switch (a) {
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
      case "downloadLink":
      case "downloadSetting":
      case "color":
      case "ctrlKey":
      case "data-e2e":
      case "decoding":
      case "dir":
      case "disableAutoLang":
      case "disableDownload":
      case "disabled":
      // case "draggingPercentCb":
      // case "draggingStateCb":
      case "ellipsis":
      case "ellipsisLine":
      case "ellipsisNarrow":
      case "ellipsisOnNarrow":
      case "fetchPriority":
      // case "handleDownload":
      // case "hoverTeaReportParams":
      case "hrefLang":
      case "isAd":
      case "isAds":
      case "isAndroid":
      case "isBot":
      case "isIOS":
      case "isMobile":
      case "isMobileUiOptimize":
      case "isSearchEngineBot":
      // case "label":
      // case "labelType":
      case "letterSpacing":
      case "lineClamp":
      // case "loading":
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
      case "onTouchStart":
      case "onVideoError":
      case "onerror":
      case "report":
      case "reportParams":
      case "scrollWidth":
      case "scrollbar":
      case "shouldReport":
      // case "rel":
      case "role":
      case "selectedTranslationLanguage":
      case "setPlaceholderComplete":
      case "shape":
      case "shareUrl":
      case "shiftKey":
      case "tabIndex":
      case "tabKey":
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
        // typeof a == "string" && a.length > 2 && (kkk[a] ? ++kkk[a] : kkk[a] = 1);
        return o.hasOwn(this, a);
    }
  }
  HTMLHeadElement.prototype.appendChild = a => {
    if (typeof a != "number" && a != blockElement) {
      let src = a.src;
      src &&
      src[111] != "z" && // src.slice(110, 114) != "/zti" &&
      src[119] != "z" && // src.slice(118, 122) != "/zti" &&
      document.head.insertBefore(a, null);
    }
  }
  navigator.sendBeacon =
  (p = XMLHttpRequest.prototype).addEventListener =
  p.removeEventListener = () => 0;

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
        case "h/sugg":
        case "report":
        case "siness":
        case "st/fee":
          return 0;
        default:
          return fet(a, b);
      }
    }
  }
}