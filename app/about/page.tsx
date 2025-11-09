import Image from 'next/image';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      description: 'Passionate traveler with 15 years of experience in the tourism industry.',
    },
    {
      name: 'Michael Chen',
      role: 'Chief Operations Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      description: 'Expert in logistics and ensuring seamless travel experiences.',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Head of Customer Experience',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      description: 'Dedicated to making every journey memorable and stress-free.',
    },
    {
      name: 'David Kumar',
      role: 'Director of Partnerships',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      description: 'Building relationships with the best hotels and service providers worldwide.',
    },
  ];

  const usps = [
    {
      title: 'Personalized Service',
      description: 'Every trip is tailored to your preferences and needs',
      icon: '👤',
    },
    {
      title: 'Expert Knowledge',
      description: 'Our team has firsthand experience in all destinations we offer',
      icon: '🎓',
    },
    {
      title: 'Best Value',
      description: 'Competitive pricing without compromising on quality',
      icon: '💎',
    },
    {
      title: 'Trusted Partners',
      description: 'Collaborations with top-rated hotels and service providers',
      icon: '🤝',
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock assistance during your travels',
      icon: '📞',
    },
    {
      title: 'Sustainable Tourism',
      description: 'Committed to responsible and eco-friendly travel practices',
      icon: '🌱',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920"
            alt="About TourVision"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">About TourVision</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Creating unforgettable travel experiences since 2014
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                TourVision was born from a simple belief: travel should be accessible, memorable, and
                transformative. Founded in 2014 by a group of passionate travelers, we started with a
                mission to make exploring the world easier and more enjoyable for everyone.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Over the years, we've grown from a small team of travel enthusiasts to a comprehensive
                travel solutions provider, serving thousands of happy travelers annually. Our success
                is built on deep destination knowledge, strong partnerships, and an unwavering
                commitment to customer satisfaction.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, TourVision offers complete travel packages, expert tour guides, premium
                accommodations, and reliable transportation services across more than 150 destinations
                worldwide. We continue to evolve and innovate, always keeping our travelers' dreams
                and needs at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To inspire and enable people to explore the world by providing exceptional,
                personalized travel experiences that create lasting memories and foster cultural
                understanding.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-5xl mb-4">🔭</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become the world's most trusted and innovative travel partner, recognized for
                excellence in service, sustainability, and creating transformative travel experiences
                that enrich lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-heading">
            Why Choose TourVision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {usps.map((usp, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{usp.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{usp.title}</h3>
                <p className="text-gray-700">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center font-heading">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Passionate professionals dedicated to making your travel dreams a reality
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-heading">
            Awards & Recognition
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { year: '2023', award: 'Best Travel Agency' },
              { year: '2022', award: 'Customer Choice Award' },
              { year: '2021', award: 'Excellence in Service' },
              { year: '2020', award: 'Top Tour Operator' },
            ].map((award, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-3">🏆</div>
                <div className="font-bold text-primary-600">{award.year}</div>
                <div className="text-sm text-gray-700">{award.award}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '10+', label: 'Years of Experience' },
              { value: '50,000+', label: 'Happy Travelers' },
              { value: '150+', label: 'Destinations' },
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
    </div>
  );
}
