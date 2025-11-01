MediaSource.isTypeSupported = () => 1;
{
  // var z = {};
  let has = (a, b) => {
    switch (b) {
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
      case "autoPlay":
      case "background":
      case "backgroundColor":
      case "backgroundImage":
      case "borderRadius":
      case "color":
      case "ctrlKey":
      case "dangerouslyExposeHtml":
      case "dangerouslySetInnerHTML":
      case "data-e2e":
      case "data-testid":
      case "decoding":
      case "dir":
      case "disabled":
      case "downloadLink":
      case "downloadSetting":
      case "e2eData":
      case "e2eTag":
      case "ellipsis":
      case "ellipsisLine":
      case "ellipsisNarrow":
      case "ellipsisOnNarrow":
      case "fetchPriority":
      case "isAndroid":
      case "isIOS":
      case "isMobile":
      case "isMobileUiOptimize":
      case "language":
      case "letterSpacing":
      case "lineClamp":
      case "loading":
      case "meta":
      case "metaKey":
      case "muted":
      case "onContextMenu":
      case "onCopy":
      case "onCut":
      case "onError":
      case "onTouchStart":
      case "onerror":
      case "shape":
      case "shareUrl":
      case "shiftKey":
      case "supportWebP":
      case "tabIndex":
      case "textDecoration":
      // case "textDirection":
      case "tiltX":
      case "tiltY":
      case "title":
      case "transparent":
      case "twist":
      case "volume":
      case "volumeInfo":
      case "xmlns":
        return 0;
      case "isDark":
      case "ja-JP":
      case "supportAVIF":
        return 1;
      default:
        // b && typeof b == "string" && b.length > 2 && (z[b] ??= 0, ++z[b]);
        return b in a;
    }
  }
  Object.prototype.hasOwnProperty = function (a) { return has(this, a) }
  Object.prototype.hasOwnProperty.call = has;
}