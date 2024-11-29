import ContactForm from '@/app/components/contact-form'

export const metadata = {
  title: 'Contact | Health Testing Services',
  description: 'Get in touch with us to learn more about our health testing services',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Contact Us</h1>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}