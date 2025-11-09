import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Button from '@/components/ui/Button';
import PackageCard from '@/components/features/PackageCard';
import { destinations } from '@/lib/data/destinations';
import { packages } from '@/lib/data/packages';

export async function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}

export default function DestinationDetailPage({ params }: { params: { slug: string } }) {
  const destination = destinations.find((d) => d.slug === params.slug);

  if (!destination) {
    notFound();
  }

  const relatedPackages = packages.filter((pkg) =>
    pkg.destinations.includes(destination.id)
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Image */}
      <section className="relative h-[500px]">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12 text-white">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full capitalize">
                {destination.type}
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full capitalize">
                {destination.budget} Budget
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 font-heading">
              {destination.name}
            </h1>
            <p className="text-xl text-white/90">{destination.country} • {destination.region}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About {destination.name}</h2>
                <p className="text-gray-700 leading-relaxed">{destination.description}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Highlights</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {destination.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-primary-600 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Attractions</h2>
                <div className="space-y-4">
                  {destination.attractions.map((attraction, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {attraction.name}
                      </h3>
                      <p className="text-gray-700">{attraction.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Image Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {destination.images.map((image, index) => (
                    <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`${destination.name} ${index + 1}`}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Travel Information</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Best Time to Visit</div>
                    <div className="font-semibold text-gray-900">{destination.bestTimeToVisit}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Region</div>
                    <div className="font-semibold text-gray-900">{destination.region}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Budget</div>
                    <div className="font-semibold text-gray-900 capitalize">{destination.budget}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Type</div>
                    <div className="font-semibold text-gray-900 capitalize">{destination.type}</div>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <Link href="/booking">
                    <Button variant="primary" className="w-full">
                      Book Your Trip
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Packages */}
      {relatedPackages.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-heading">
              Available Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPackages.map((pkg) => (
                <PackageCard key={pkg.id} package={pkg} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
