import { useEffect } from 'react';

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (opts: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
      showPopupWidget: (url: string) => void;
    };
  }
}

export function BookDemo() {
  useEffect(() => {
    // Inject Calendly CSS
    if (!document.querySelector('link[href*="calendly.com"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }

    // Inject Calendly script (no badge widget - popup only)
    if (!document.querySelector('script[src*="calendly.com"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return null;
}

export function openCalendlyPopup() {
  window.Calendly?.showPopupWidget(
    'https://calendly.com/lashapor/consultation-with-lasha'
  );
}
