'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is too short').max(80),
  email: z.string().email('Enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
});

export async function submitContact(formData: FormData) {
  const parsed = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0].message };
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseKey) {
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { error } = await supabase.from('contact_messages').insert([parsed.data]);
    if (error) {
      return { ok: false, error: 'Database error while saving message.' };
    }
  }

  return { ok: true };
}
