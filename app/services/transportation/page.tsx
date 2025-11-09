import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { vehicles } from '@/lib/data/services';

export default function TransportationPage() {
  const vehiclesByType = {
    cars: vehicles.filter((v) => v.type === 'car'),
    suvs: vehicles.filter((v) => v.type === 'suv'),
    vans: vehicles.filter((v) => v.type === 'van'),
    buses: vehicles.filter((v) => v.type === 'bus'),
    luxury: vehicles.filter((v) => v.type === 'luxury'),
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Transportation Services
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Comfortable and reliable vehicles for every journey
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: '🚗', title: 'Wide Selection', text: 'Cars, SUVs, vans, and buses' },
              { icon: '💰', title: 'Competitive Rates', text: 'Affordable hourly and daily rates' },
              { icon: '✅', title: 'Well Maintained', text: 'Regular maintenance and inspections' },
              { icon: '🛡️', title: 'Fully Insured', text: 'Comprehensive insurance coverage' },
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

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-heading">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Airport Transfers',
                description: 'Reliable pickup and drop-off services to and from the airport',
                icon: '✈️',
              },
              {
                title: 'City Tours',
                description: 'Comfortable transportation for sightseeing and city exploration',
                icon: '🏙️',
              },
              {
                title: 'Long Distance',
                description: 'Safe and comfortable vehicles for long-distance travel',
                icon: '🛣️',
              },
              {
                title: 'Group Travel',
                description: 'Spacious buses and vans for group tours and events',
                icon: '👥',
              },
              {
                title: 'Luxury Service',
                description: 'Premium vehicles with professional chauffeurs',
                icon: '⭐',
              },
              {
                title: 'Customized Routes',
                description: 'Flexible itineraries tailored to your needs',
                icon: '🗺️',
              },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Fleet */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-heading">Our Fleet</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {vehicles.map((vehicle) => (
              <Card key={vehicle.id} hover>
                <div className="grid grid-cols-1 md:grid-cols-5">
                  <div className="relative h-48 md:h-auto md:col-span-2">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:col-span-3">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{vehicle.name}</h3>
                        <p className="text-sm text-gray-600 capitalize">{vehicle.type}</p>
                      </div>
                      {vehicle.available ? (
                        <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                          Available
                        </span>
                      ) : (
                        <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">
                          Booked
                        </span>
                      )}
                    </div>
                    <p className="text-gray-700 text-sm mb-4">{vehicle.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {vehicle.capacity} passengers
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        {vehicle.luggage} bags
                      </div>
                      <div className="flex items-center text-gray-600 capitalize">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {vehicle.transmission}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        {vehicle.fuelType}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {vehicle.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="flex items-baseline gap-3">
                          <div>
                            <p className="text-xl font-bold text-primary-600">${vehicle.pricePerDay}</p>
                            <p className="text-xs text-gray-500">per day</p>
                          </div>
                          <div>
                            <p className="text-lg font-semibold text-gray-700">${vehicle.pricePerHour}</p>
                            <p className="text-xs text-gray-500">per hour</p>
                          </div>
                        </div>
                      </div>
                      <Link href="/booking">
                        <Button variant="primary" size="sm" disabled={!vehicle.available}>
                          {vehicle.available ? 'Book Now' : 'Not Available'}
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

      {/* Additional Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-heading">Additional Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Professional Drivers', description: 'Experienced and licensed drivers', icon: '👨‍✈️' },
              { title: 'GPS Navigation', description: 'All vehicles equipped with GPS', icon: '📍' },
              { title: 'Air Conditioning', description: 'Climate control for your comfort', icon: '❄️' },
              { title: 'Clean Vehicles', description: 'Thoroughly cleaned before each trip', icon: '✨' },
              { title: 'Child Seats', description: 'Available upon request', icon: '👶' },
              { title: '24/7 Support', description: 'Round-the-clock customer service', icon: '📞' },
            ].map((benefit, index) => (
              <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-md">
                <div className="text-3xl mr-4">{benefit.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Special Transportation?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Contact us for custom transportation solutions and group bookings
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Get a Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
