import { getEnvOrThrow } from "../tools";

export const apiURL = getEnvOrThrow('VITE_API_URL');

