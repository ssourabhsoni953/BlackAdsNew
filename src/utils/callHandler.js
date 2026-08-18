export const PHONE_NUMBER = "+91 62607 56736";
export const PHONE_NUMBER_RAW = "+916260756736";
export const WHATSAPP_LINK = "https://wa.me/916260756736";
export const EMAIL_ADDRESS = "contact@blackads.agency";

/**
 * Checks if the current user is visiting from a mobile or tablet device.
 */
export function isMobileDevice() {
  if (typeof window === "undefined") return false;

  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const isMobileUA =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );

  const isSmallScreenTouch =
    window.innerWidth <= 768 &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  return Boolean(isMobileUA || isSmallScreenTouch);
}

/**
 * Handles Call / Book Strategy action:
 * - On Mobile: directly triggers the native phone dialer with BlackAds number
 * - On Desktop: opens the desktop Phone popup modal
 */
export function handleCallAction(openModal) {
  if (isMobileDevice()) {
    window.location.href = `tel:${PHONE_NUMBER_RAW}`;
  } else {
    if (typeof openModal === "function") {
      openModal();
    } else {
      window.location.href = `tel:${PHONE_NUMBER_RAW}`;
    }
  }
}
