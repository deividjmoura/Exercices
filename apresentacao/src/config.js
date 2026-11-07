const configuredAppUrl = import.meta.env.VITE_QRADMIN_APP_URL?.trim();

function getSafeAppUrl(value) {
  if (!value) return null;

  try {
    const url = new URL(value);
    return ['https:', 'http:'].includes(url.protocol) ? url.toString() : null;
  } catch {
    return null;
  }
}

export const QRADMIN_APP_URL = getSafeAppUrl(configuredAppUrl);
