// Returns true only when we are confident the visitor is on a phone.
// Anything uncertain (desktop, laptop, tablet, unknown) returns false,
// so those visitors stay on the SmartSense QR page.
export function isPhone(): boolean {
  try {
    if (typeof window === "undefined" || typeof navigator === "undefined") return false;

    const uaData = (navigator as Navigator & { userAgentData?: { mobile?: boolean } }).userAgentData;
    const ua = navigator.userAgent || "";
    const uaSaysPhone =
      typeof uaData?.mobile === "boolean"
        ? uaData.mobile
        : /iPhone|iPod|Windows Phone|IEMobile|BlackBerry|Opera Mini/i.test(ua) ||
          (/Android/i.test(ua) && /Mobile/i.test(ua));
    if (!uaSaysPhone) return false;

    const coarse = window.matchMedia?.("(pointer: coarse)").matches === true;
    if (!coarse) return false;

    const shortSide = Math.min(window.screen?.width || 0, window.screen?.height || 0);
    return shortSide > 0 && shortSide < 600;
  } catch {
    return false;
  }
}
