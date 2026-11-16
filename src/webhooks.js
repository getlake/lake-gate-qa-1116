// Tiny webhook sender used as a target for lake-gate plans.
export async function deliver(url, payload) {
  const res = await fetch(url, { method: 'POST', body: JSON.stringify(payload) });
  return res.ok;
}
