export const resolveApiOrigin = () => {
  if (typeof window !== "undefined") {
    const configuredOrigin =
      window.__API_ORIGIN ||
      window.API_ORIGIN ||
      window.API_BASE_URL ||
      document?.querySelector?.('meta[name="api-origin"]')?.content;

    if (configuredOrigin) {
      return configuredOrigin;
    }
  }

  if (typeof import.meta !== "undefined" && import.meta?.env?.VITE_API_ORIGIN) {
    return import.meta.env.VITE_API_ORIGIN;
  }

  return "http://localhost:3000";
};

export const resolveApiBase = () => resolveApiOrigin().replace(/\/$/, "");
