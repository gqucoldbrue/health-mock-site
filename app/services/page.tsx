import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Services() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Services</h1>
          
          {/* VO2 Max Testing */}
          <div id="vo2-max" className="mb-20">
            <h2 className="text-3xl font-semibold mb-6">VO2 Max Testing</h2>
            <p className="text-gray-600 mb-6">
              VO2 max is the maximum rate of oxygen consumption during incremental exercise. Our state-of-the-art testing helps athletes and fitness enthusiasts understand their cardiovascular fitness and optimize their training regimens.
            </p>
            <Button asChild>
              <Link href="/contact">Schedule VO2 Max Test</Link>
            </Button>
          </div>

          {/* Microbiome Analysis */}
          <div id="microbiome" className="mb-20">
            <h2 className="text-3xl font-semibold mb-6">Microbiome Analysis</h2>
            <p className="text-gray-600 mb-6">
              Your gut microbiome plays a crucial role in your overall health. Our comprehensive microbiome analysis provides insights into your gut health, helping you make informed decisions about your diet and lifestyle.
            </p>
            <Button asChild>
              <Link href="/contact">Get Microbiome Analysis</Link>
            </Button>
          </div>

          {/* Genome Sequencing */}
          <div id="genome" className="mb-20">
            <h2 className="text-3xl font-semibold mb-6">Genome Sequencing</h2>
            <p className="text-gray-600 mb-6">
              Unlock the secrets of your DNA with our advanced genome sequencing service. Discover your genetic predispositions, ancestry, and potential health risks to take control of your health journey.
            </p>
            <Button asChild>
              <Link href="/contact">Explore Your Genome</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

