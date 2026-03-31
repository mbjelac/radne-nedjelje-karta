export async function handler(event) {
  const url = event.queryStringParameters?.url;
  if (!url) {
    return { statusCode: 400, body: 'Missing url parameter' };
  }

  const res = await fetch(url);
  const body = await res.text();

  return {
    statusCode: res.status,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
    body,
  };
}
