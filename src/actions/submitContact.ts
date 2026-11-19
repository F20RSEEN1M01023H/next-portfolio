'use server';

export async function submitContact(formData: FormData) {
  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const message = String(formData.get('message') || '').trim();

  if (!name || !email || !message) {
    return { ok: false, error: 'Please fill out all fields.' };
  }

  // Replace with Resend/Nodemailer or Supabase insert when ready
  console.log(`[Portfolio Contact] ${name} (${email}): ${message}`);

  return { ok: true };
}
