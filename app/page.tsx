import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import DestinationCard from '@/components/features/DestinationCard';
import PackageCard from '@/components/features/PackageCard';
import TestimonialSlider from '@/components/features/TestimonialSlider';
import { destinations } from '@/lib/data/destinations';
import { packages } from '@/lib/data/packages';
import { testimonials } from '@/lib/data/services';

export default function HomePage() {
  const featuredDestinations = destinations.slice(0, 6);
  const featuredPackages = packages.filter(pkg => pkg.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920"
            alt="Travel hero"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading animate-fade-in">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-in">
            Experience the world with TourVision - Your perfect travel partner for unforgettable journeys
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Link href="/destinations">
              <Button variant="primary" size="lg">
                Explore Destinations
              </Button>
            </Link>
            <Link href="/services/packages">
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-600">
                View Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive travel solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Expert Tour Guides',
                description: 'Professional guides for national and international tours',
                icon: '🧭',
                href: '/services/tour-guide',
              },
              {
                title: 'Premium Hotels',
                description: 'Handpicked accommodations for every budget',
                icon: '🏨',
                href: '/services/hotels',
              },
              {
                title: 'Transportation',
                description: 'Comfortable vehicles from cars to luxury coaches',
                icon: '🚗',
                href: '/services/transportation',
              },
              {
                title: 'Travel Packages',
                description: 'Complete packages with everything included',
                icon: '📦',
                href: '/services/packages',
              },
            ].map((service, index) => (
              <Link key={index} href={service.href}>
                <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Popular Destinations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore breathtaking locations around the world
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/destinations">
              <Button variant="outline" size="lg">
                View All Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Special Offers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Exclusive travel packages at unbeatable prices
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/services/packages">
              <Button variant="primary" size="lg">
                Explore All Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Why Choose TourVision
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make your travel dreams come true
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '10+ Years Experience',
                description: 'Trusted by thousands of travelers worldwide',
                icon: '⭐',
              },
              {
                title: '24/7 Support',
                description: 'Our team is always here to help you',
                icon: '💬',
              },
              {
                title: 'Best Price Guarantee',
                description: 'Competitive prices with no hidden fees',
                icon: '💰',
              },
              {
                title: 'Curated Experiences',
                description: 'Handpicked destinations and activities',
                icon: '✨',
              },
              {
                title: 'Safety First',
                description: 'Your safety is our top priority',
                icon: '🛡️',
              },
              {
                title: 'Easy Booking',
                description: 'Simple and secure booking process',
                icon: '📱',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              What Our Travelers Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real experiences from real travelers
            </p>
          </div>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50,000+', label: 'Happy Travelers' },
              { value: '150+', label: 'Destinations' },
              { value: '1,000+', label: 'Tour Packages' },
              { value: '98%', label: 'Satisfaction Rate' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              Stay Updated with Travel Deals
            </h2>
            <p className="mb-8 text-primary-100">
              Subscribe to our newsletter and get exclusive offers and travel inspiration
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <Button variant="secondary" size="lg" type="submit">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
