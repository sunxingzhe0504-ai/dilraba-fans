import Script from "next/script";

/**
 * Privacy-friendly analytics — only loads when configured.
 * Plausible: set NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
 * Umami: set NEXT_PUBLIC_UMAMI_SCRIPT_URL and NEXT_PUBLIC_UMAMI_WEBSITE_ID
 */
export function Analytics() {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const umamiScript = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL;
  const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

  if (plausibleDomain) {
    return (
      <Script
        defer
        data-domain={plausibleDomain}
        src="https://plausible.io/js/script.js"
        strategy="afterInteractive"
      />
    );
  }

  if (umamiScript && umamiWebsiteId) {
    return (
      <Script
        defer
        src={umamiScript}
        data-website-id={umamiWebsiteId}
        strategy="afterInteractive"
      />
    );
  }

  return null;
}
