import { env } from 'next-runtime-env';

export const API_URL = env("NEXT_PUBLIC_API_URL")  as string;
