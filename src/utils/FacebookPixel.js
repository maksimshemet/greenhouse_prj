export const initFacebookPixel = () => {
    // The pixel is already initialized in index.html
  };
  
  export const fbq = (...args) => {
    if (window.fbq) {
      window.fbq(...args);
    }
  };
  
  export const trackPageView = () => {
    fbq('track', 'PageView');
  };
  
  export const trackEvent = (event, data = {}) => {
    fbq('track', event, data);
  };