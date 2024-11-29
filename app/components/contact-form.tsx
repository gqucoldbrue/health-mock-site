'use client'

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle form submission
    console.log(values)
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          {...form.register("name")}
          id="name"
          className="w-full p-2 border rounded-md"
          placeholder="Your name"
        />
        {form.formState.errors.name && (
          <p className="text-red-500 text-sm">{form.formState.errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          {...form.register("email")}
          id="email"
          type="email"
          className="w-full p-2 border rounded-md"
          placeholder="your.email@example.com"
        />
        {form.formState.errors.email && (
          <p className="text-red-500 text-sm">{form.formState.errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          {...form.register("message")}
          id="message"
          className="w-full p-2 border rounded-md h-32"
          placeholder="Your message"
        />
        {form.formState.errors.message && (
          <p className="text-red-500 text-sm">{form.formState.errors.message.message}</p>
        )}
      </div>

      <Button type="submit">Send Message</Button>
    </form>
  )
}