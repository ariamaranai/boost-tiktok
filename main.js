MediaSource.isTypeSupported = () => 1;
HTMLHeadElement.prototype.appendChild = a => {
  let src = a.src;
  src &&
  src[111] != "z" && // src.slice(110, 114) != "/zti" &&
  src[119] != "z" && // src.slice(118, 122) != "/zti" &&
  document.head.insertBefore(a, null);
}
{
  Object.seal = a => a;
  let p = XMLHttpRequest.prototype;
  navigator.sendBeacon =
  p.addEventListener =
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
}