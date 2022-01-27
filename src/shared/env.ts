const env = import.meta.env

export const isDevMode = env.NODE_ENV === "development";
export const isTestMode = env.NODE_ENV === "test";
export const apiUrl = env.API_URL || "";
