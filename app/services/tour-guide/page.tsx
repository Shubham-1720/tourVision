import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { tourGuides } from '@/lib/data/services';

export default function TourGuidePage() {
  const internationalGuides = tourGuides.filter((g) => g.tours === 'international' || g.tours === 'both');
  const nationalGuides = tourGuides.filter((g) => g.tours === 'national' || g.tours === 'both');

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Expert Tour Guides
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Professional guides to make your journey unforgettable
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: '🎓', title: 'Certified Experts', text: 'Licensed and experienced professionals' },
              { icon: '🌍', title: 'Local Knowledge', text: 'Deep understanding of destinations' },
              { icon: '🗣️', title: 'Multilingual', text: 'Guides speaking multiple languages' },
              { icon: '⭐', title: 'Highly Rated', text: 'Top-rated by travelers' },
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

      {/* International Guides */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-heading">International Tour Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internationalGuides.map((guide) => (
              <Card key={guide.id} hover>
                <div className="relative h-64">
                  <Image
                    src={guide.image}
                    alt={guide.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{guide.name}</h3>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center text-yellow-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 font-semibold text-gray-900">{guide.rating}</span>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">({guide.reviewCount} reviews)</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-2">{guide.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-900 mb-1">Specialization:</p>
                    <div className="flex flex-wrap gap-2">
                      {guide.specialization.map((spec, index) => (
                        <span key={index} className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-900 mb-1">Languages:</p>
                    <p className="text-sm text-gray-600">{guide.languages.join(', ')}</p>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-2xl font-bold text-primary-600">${guide.pricePerDay}</p>
                      <p className="text-xs text-gray-500">per day</p>
                    </div>
                    <div className="text-sm text-gray-600">
                      {guide.experience} years exp.
                    </div>
                  </div>
                  <Link href="/booking">
                    <Button variant="primary" size="sm" className="w-full">
                      Book Guide
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* National Guides */}
      {nationalGuides.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-heading">National Tour Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nationalGuides.map((guide) => (
                <Card key={guide.id} hover>
                  <div className="relative h-64">
                    <Image
                      src={guide.image}
                      alt={guide.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{guide.name}</h3>
                    <div className="flex items-center mb-3">
                      <div className="flex items-center text-yellow-400">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 font-semibold text-gray-900">{guide.rating}</span>
                      </div>
                      <span className="ml-2 text-sm text-gray-600">({guide.reviewCount} reviews)</span>
                    </div>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-2">{guide.description}</p>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Specialization:</p>
                      <div className="flex flex-wrap gap-2">
                        {guide.specialization.map((spec, index) => (
                          <span key={index} className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Languages:</p>
                      <p className="text-sm text-gray-600">{guide.languages.join(', ')}</p>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-2xl font-bold text-primary-600">${guide.pricePerDay}</p>
                        <p className="text-xs text-gray-500">per day</p>
                      </div>
                      <div className="text-sm text-gray-600">
                        {guide.experience} years exp.
                      </div>
                    </div>
                    <Link href="/booking">
                      <Button variant="primary" size="sm" className="w-full">
                        Book Guide
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Tour?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Our guides can create personalized itineraries just for you
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Request Custom Tour
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
