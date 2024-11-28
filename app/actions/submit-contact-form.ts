'use server'

import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
})

export async function submitContactForm(data: z.infer<typeof schema>) {
  const result = schema.safeParse(data)

  if (!result.success) {
    throw new Error('Invalid form data')
  }

  // Here you would typically send an email or save to a database
  console.log('Form submitted:', result.data)

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  return { success: true }
}

