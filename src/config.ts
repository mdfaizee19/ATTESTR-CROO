import 'dotenv/config';
import type { Logger } from '@croo-network/sdk';

function redactSecrets(value: unknown): unknown {
  if (typeof value === 'string') {
    return value.replace(/([?&](?:key|token|apikey|api_key|secret)=)[^&\s'"]+/gi, '$1[REDACTED]');
  }
  if (Array.isArray(value)) return value.map(redactSecrets);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, redactSecrets(v)]));
  }
  return value;
}

const redactingLogger: Logger = {
  info: (message, ...args) => console.info(message, ...args.map(redactSecrets)),
  warn: (message, ...args) => console.warn(message, ...args.map(redactSecrets)),
  error: (message, ...args) => console.error(message, ...args.map(redactSecrets)),
  debug: (message, ...args) => console.debug(message, ...args.map(redactSecrets)),
};

export const CROO_CONFIG = {
  baseURL: process.env.CROO_API_URL ?? 'https://api.croo.network',
  wsURL: process.env.CROO_WS_URL ?? 'wss://api.croo.network/ws',
  logger: redactingLogger,
};

export const USDC_ADDRESS = '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913';

export function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}
