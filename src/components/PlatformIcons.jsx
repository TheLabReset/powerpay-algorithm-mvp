// SVG icons inline desde simpleicons.org y branding oficial.
// No requieren instalación. Si se necesita un icono adicional, buscar en
// https://github.com/simple-icons/simple-icons/tree/develop/icons y añadir
// como componente función aquí.

// Logo "G" multicolor de Google. Lo usamos para representar Google Trends.
export const GoogleIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Google">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09 0-.73.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

// TikTok logo monochrome (Simple Icons: tiktok). Usar fill blanco sobre fondo negro.
export const TikTokIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="TikTok" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.81a8.16 8.16 0 0 0 4.77 1.52V6.88a4.85 4.85 0 0 1-1.84-.19z"/>
  </svg>
);

// Facebook/Meta "f" logo. Para el header de Meta usamos la f sobre el azul Meta.
export const MetaIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Meta" fill="currentColor">
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
  </svg>
);

// Google Analytics 4 logo oficial.
export const GA4Icon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Google Analytics">
    <path fill="#F9AB00" d="M22.84 2.998v17.999a2.983 2.983 0 0 1-5.582 1.475 2.983 2.983 0 0 0 4.499-2.574V3.973A2.983 2.983 0 0 0 17.258 1.4a2.969 2.969 0 0 1 2.59-1.402 2.983 2.983 0 0 1 2.992 3z"/>
    <path fill="#E37400" d="M14.34 8.999v11a2.983 2.983 0 1 1-5.967 0V9.179c.122-1.554 1.405-2.747 2.969-2.747a2.983 2.983 0 0 1 2.998 2.567z"/>
    <circle fill="#E37400" cx="2.983" cy="20.997" r="2.983"/>
  </svg>
);

export default { GoogleIcon, TikTokIcon, MetaIcon, GA4Icon };
