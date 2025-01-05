Object.seal = a => a;
MediaSource.isTypeSupported = () => 1;

navigator.sendBeacon =
XMLHttpRequest.prototype.addEventListener =
XMLHttpRequest.prototype.removeEventListener = () => 0;



Node.prototype.addEventListener = function (a, b, c) {
  switch (a) {
    case "Error":
    case "MSFullscreenChange":
    case "MSPointerDown":
    case "MSPointerMove":
    case "auxclick":
    case "contextmenu":
    case "copy":
    case "cut":
    case "dblclick":
    case "drag":
    case "dragend":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "drop":
    case "dragstart":
    case "error":
    case "gotpointercapture":
    case "lostpointercapture":
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
      break;
    default:
      addEventListener.call(this, a, b, c);
  }
}
Node.prototype.removeEventListener = function (a, b, c) {
  switch (a) {
    case "Error":
    case "MSFullscreenChange":
    case "MSPointerDown":
    case "MSPointerMove":
    case "contextmenu":
    case "error":
    case "mozfullscreenchange":
    case "visibilitychange":
    case "webkitbeginfullscreen":
    case "webkitendfullscreen":
    case "webkitfullscreenchange":
      break;
    default:
      removeEventListener.call(this, a, b, c);
  }
}
HTMLElement.prototype.setAttribute = function (a, b) {
  switch (a) {
    case "alt":
    case "aria-atomic":
    case "aria-autocomplete":
    case "aria-controls":
    case "aria-expanded":
    case "aria-describedby":
    case "aria-disabled":
    case "aria-haspopup":
    case "aria-label":
    case "aria-labelledby":
    case "aria-live":
    case "aria-modal":
    case "aria-pressed":
    case "aria-relevant":
    case "aria-selected":
    case "aria-valuenow":
    case "aria-valuetext":
    case "content":
    case "decoding":
    // case "data-webpack":
    case "fetchpriority":
    case "hrefLang":
    case "letter-spacing":
    case "loading":
    case "role":
    case "tabindex":
    case "title":
      break;
    case "class":
      this.className = b;
      break;
    case "id":
    case "height":
    case "href":
    case "srcSet":
    case "target":
    case "width":
      this[a] = b;
      break;
    default:
      Element.prototype.setAttribute.call(this, a, b);
  }
}
HTMLHeadElement.prototype.appendChild = a => {
  let src = a.src;
  src &&
  src[111] != "z" && // src.slice(110, 114) != "/zti" &&
  src[119] != "z" && // src.slice(118, 122) != "/zti" &&
  document.head.insertBefore(a, null);
}
{
  let open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (a, b, c) {
    return b != "https://mon.tiktokv.com/monitor_browser/collect/batch/?biz_id=tiktok_webapp" &&
      b != "https://mon.tiktokv.com/monitor_browser/collect/batch/?biz_id=tt_pc_banner_ads" &&
      b != "https://im-api-sg.tiktok.com/v2/message/get_by_user_init" &&
      b.slice(32, 38) != "report" &&
      b != "https://mon.tiktokv.com/monitor_browser/collect/batch/?bid=tiktok_pns_web_runtime" &&
      b != "https://mon.tiktokv.com/monitor_web/settings/browser-settings?bid=tiktok_webapp&store=1" &&
      open.call(this, a, b, c);
  }
  let fet = fetch;
  fetch = (a, b) => {
    let url = a.url;
    return url && url.slice(32, 38) != "report" &&
      fet(a, b);
  }
}