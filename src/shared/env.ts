const env = import.meta.env

export const isDevMode = env.NODE_ENV === "development";
export const isTestMode = env.NODE_ENV === "local";
export const apiUrl = env.VITE_API_URL;
