export const isDevMode = process.env.NODE_ENV === "development";
export const isTestMode = process.env.NODE_ENV === "test";

export const apiUrl = process.env.API_URL || "http://localhost:3001";
