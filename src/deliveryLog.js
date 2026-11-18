import { appendFileSync, readFileSync, existsSync } from 'node:fs';
const FILE = process.env.DELIVERY_LOG || 'deliveries.jsonl';
export function record(event, status) {
  appendFileSync(FILE, JSON.stringify({ at: new Date().toISOString(), event, status }) + '\n');
}
export function recent(n = 50) {
  if (!existsSync(FILE)) return [];
  return readFileSync(FILE, 'utf8').trim().split('\n').filter(Boolean).slice(-n).map((l) => JSON.parse(l));
}
