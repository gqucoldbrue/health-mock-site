import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Unlock Your Body's Potential</h1>
            <p className="text-xl md:text-2xl mb-8">Discover your VO2 max, microbiome profile, and genetic blueprint.</p>
            <Button asChild size="lg">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* VO2 Max Testing */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">VO2 Max Testing</h3>
              <p className="text-gray-600 mb-4">Measure your cardiovascular fitness and optimize your training.</p>
              <Link href="/services#vo2-max" className="text-blue-600 hover:underline">Learn more</Link>
            </div>
            {/* Microbiome Analysis */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Microbiome Analysis</h3>
              <p className="text-gray-600 mb-4">Understand your gut health and improve your overall wellbeing.</p>
              <Link href="/services#microbiome" className="text-blue-600 hover:underline">Learn more</Link>
            </div>
            {/* Genome Sequencing */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Genome Sequencing</h3>
              <p className="text-gray-600 mb-4">Explore your genetic makeup and personalize your health journey.</p>
              <Link href="/services#genome" className="text-blue-600 hover:underline">Learn more</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your Health?</h2>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

