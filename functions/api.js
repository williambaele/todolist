export async function fetchJSON (url, options = {}) {
  const headers = {Acccept: 'application/json', ...options.headers}
  const r = await fetch(url, {...options, headers})
  if(r.ok) {
    return r.json()
  }
  throw new Error('Impossible de contacter le serveur', {cause: r})
}
