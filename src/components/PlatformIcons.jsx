// SVG icons inline desde simpleicons.org — versión monochrome.
// Cada componente respeta `currentColor` y se pinta con `text-white` (o el
// color que se quiera) sin wrapper. No requieren instalación.
// Si se necesita un icono adicional, buscar en
// https://github.com/simple-icons/simple-icons/tree/develop/icons y añadir
// como componente función aquí.

// Logo "G" de Google (Simple Icons: google) — single path monochrome
export const GoogleIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Google" fill="currentColor">
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
  </svg>
);

// TikTok logo (Simple Icons: tiktok) — single path monochrome
export const TikTokIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="TikTok" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.81a8.16 8.16 0 0 0 4.77 1.52V6.88a4.85 4.85 0 0 1-1.84-.19z"/>
  </svg>
);

// Facebook "f" logo (Simple Icons: facebook) — single path monochrome
export const MetaIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Meta" fill="currentColor">
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
  </svg>
);

// Google Analytics 4 logo (Simple Icons: googleanalytics) — monochrome
export const GA4Icon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Google Analytics" fill="currentColor">
    <path d="M22.84 2.998v17.999a2.983 2.983 0 0 1-5.582 1.475 2.983 2.983 0 0 0 4.499-2.574V3.973A2.983 2.983 0 0 0 17.258 1.4a2.969 2.969 0 0 1 2.59-1.402 2.983 2.983 0 0 1 2.992 3z"/>
    <path d="M14.34 8.999v11a2.983 2.983 0 1 1-5.967 0V9.179c.122-1.554 1.405-2.747 2.969-2.747a2.983 2.983 0 0 1 2.998 2.567z"/>
    <circle cx="2.983" cy="20.997" r="2.983"/>
  </svg>
);

export default { GoogleIcon, TikTokIcon, MetaIcon, GA4Icon };
