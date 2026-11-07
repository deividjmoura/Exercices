import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

function getPublicOrigin(value) {
  if (!value) return null;

  try {
    const url = new URL(value);
    return ['https:', 'http:'].includes(url.protocol) ? url.origin : null;
  } catch {
    return null;
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  const publicOrigin = getPublicOrigin(process.env.VITE_SITE_URL ?? env.VITE_SITE_URL);
  const socialImagePlugin = {
    name: 'qradmin-social-image-origin',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        if (!publicOrigin) return html;
        return html.replace(/content="(?:\.\/|\/)og-image\.svg"/g, `content="${publicOrigin}/og-image.svg"`);
      },
    },
  };

  return {
    base: './',
    plugins: [react(), socialImagePlugin],
    server: {
      host: '0.0.0.0',
      port: 5173,
      allowedHosts: ['.e2b.app', 'localhost', '127.0.0.1'],
    },
    preview: {
      host: '0.0.0.0',
      port: 4173,
      allowedHosts: ['.e2b.app', 'localhost', '127.0.0.1'],
    },
  };
});
