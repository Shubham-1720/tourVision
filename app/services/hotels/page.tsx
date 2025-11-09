import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { hotels } from '@/lib/data/hotels';

export default function HotelsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Hotels & Accommodations
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Handpicked hotels and resorts for every budget and preference
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: '⭐', title: 'Verified Reviews', text: 'Real guest reviews and ratings' },
              { icon: '💰', title: 'Best Price', text: 'Guaranteed best rates' },
              { icon: '🔒', title: 'Secure Booking', text: 'Safe and secure payment' },
              { icon: '📞', title: '24/7 Support', text: 'Always here to help' },
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

      {/* Hotels Listing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-heading">Featured Hotels</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {hotels.map((hotel) => (
              <Card key={hotel.id} hover>
                <div className="grid grid-cols-1 md:grid-cols-5">
                  <div className="relative h-64 md:h-auto md:col-span-2">
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      fill
                      className="object-cover"
                    />
                    {hotel.featured && (
                      <div className="absolute top-4 left-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-6 md:col-span-3">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{hotel.name}</h3>
                        <p className="text-sm text-gray-600">{hotel.location}</p>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 font-semibold">{hotel.rating}</span>
                        <span className="ml-1 text-sm text-gray-600">({hotel.reviewCount})</span>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-2">{hotel.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {hotel.amenities.slice(0, 4).map((amenity, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {amenity}
                        </span>
                      ))}
                      {hotel.amenities.length > 4 && (
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          +{hotel.amenities.length - 4} more
                        </span>
                      )}
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-2xl font-bold text-primary-600">${hotel.price}</p>
                        <p className="text-xs text-gray-500">per night</p>
                      </div>
                      <Link href="/booking">
                        <Button variant="primary" size="sm">
                          Book Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Looking for Something Specific?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Contact us for personalized hotel recommendations
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Get Recommendations
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
