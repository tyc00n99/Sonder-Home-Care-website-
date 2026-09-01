// Sends form submissions to the agency inbox via FormSubmit's AJAX endpoint.
// Static-site friendly: no server, no API keys. The inbox owner activates
// forwarding once by clicking the confirmation email FormSubmit sends on
// the first submission.
const ENDPOINT = 'https://formsubmit.co/ajax/admin@sonderhomecaremn.com';

export async function submitForm(fields) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ _template: 'table', _captcha: 'false', ...fields }),
  });
  if (!res.ok) throw new Error('submit failed: ' + res.status);
  const data = await res.json();
  if (!(data.success === 'true' || data.success === true)) {
    throw new Error('submit rejected');
  }
}
