import isMobile from "ismobilejs";

/** モバイル端末かどうかを判定する */
export const isMobileDevice = () => {
  const userAgent = isMobile(window.navigator);
  return userAgent.apple.phone || userAgent.android.phone;
};
