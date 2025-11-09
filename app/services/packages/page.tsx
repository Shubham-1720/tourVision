import Link from 'next/link';
import PackageCard from '@/components/features/PackageCard';
import Button from '@/components/ui/Button';
import { packages } from '@/lib/data/packages';

export default function PackagesPage() {
  const packagesByType = {
    featured: packages.filter((pkg) => pkg.featured),
    luxury: packages.filter((pkg) => pkg.type === 'luxury'),
    adventure: packages.filter((pkg) => pkg.type === 'adventure'),
    family: packages.filter((pkg) => pkg.type === 'family'),
    couple: packages.filter((pkg) => pkg.type === 'couple'),
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Travel Packages
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            All-inclusive packages designed for unforgettable experiences
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: '✈️', title: 'All-Inclusive', text: 'Everything you need in one package' },
              { icon: '💰', title: 'Best Value', text: 'Save up to 30% vs booking separately' },
              { icon: '🎯', title: 'Curated', text: 'Expertly designed itineraries' },
              { icon: '🛡️', title: 'Flexible', text: 'Easy modifications and cancellations' },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-heading">Featured Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packagesByType.featured.map((pkg) => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* All Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-heading">All Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find the Perfect Package?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Let us create a custom itinerary just for you
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Request Custom Package
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
