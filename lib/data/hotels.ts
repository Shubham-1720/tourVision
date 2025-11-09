export interface Hotel {
  id: string;
  name: string;
  slug: string;
  location: string;
  destinationId: string;
  description: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  amenities: string[];
  roomTypes: {
    name: string;
    description: string;
    price: number;
    capacity: number;
    amenities: string[];
  }[];
  policies: {
    checkIn: string;
    checkOut: string;
    cancellation: string;
  };
  featured: boolean;
}

export const hotels: Hotel[] = [
  {
    id: '1',
    name: 'Seaside Paradise Resort',
    slug: 'seaside-paradise-resort',
    location: 'Maldives',
    destinationId: '1',
    description: 'Luxury overwater villas with direct ocean access, world-class spa, and gourmet dining. Experience the ultimate Maldivian paradise.',
    rating: 4.9,
    reviewCount: 342,
    price: 650,
    originalPrice: 800,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800',
    ],
    amenities: [
      'Overwater Villas',
      'Private Beach',
      'Infinity Pool',
      'Spa & Wellness Center',
      'Water Sports Center',
      'Multiple Restaurants',
      'Bar & Lounge',
      'Free WiFi',
      'Airport Transfer',
      'Diving Center',
    ],
    roomTypes: [
      {
        name: 'Beach Villa',
        description: 'Spacious beachfront villa with direct beach access',
        price: 450,
        capacity: 2,
        amenities: ['King Bed', 'Private Terrace', 'Ocean View', 'Mini Bar'],
      },
      {
        name: 'Overwater Villa',
        description: 'Stunning overwater villa with glass floor panels',
        price: 650,
        capacity: 2,
        amenities: ['King Bed', 'Glass Floor', 'Direct Ocean Access', 'Private Deck'],
      },
      {
        name: 'Sunset Pool Villa',
        description: 'Luxury villa with private infinity pool',
        price: 950,
        capacity: 2,
        amenities: ['King Bed', 'Private Pool', 'Butler Service', 'Sunset View'],
      },
    ],
    policies: {
      checkIn: '2:00 PM',
      checkOut: '12:00 PM',
      cancellation: 'Free cancellation up to 7 days before check-in',
    },
    featured: true,
  },
  {
    id: '2',
    name: 'Alpine Peaks Hotel',
    slug: 'alpine-peaks-hotel',
    location: 'Swiss Alps, Switzerland',
    destinationId: '2',
    description: 'Charming alpine hotel with breathtaking mountain views. Perfect location for skiing in winter and hiking in summer.',
    rating: 4.7,
    reviewCount: 289,
    price: 280,
    originalPrice: 350,
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800',
    images: [
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
    ],
    amenities: [
      'Ski-in/Ski-out',
      'Indoor Pool',
      'Spa & Sauna',
      'Mountain View Restaurant',
      'Bar',
      'Free WiFi',
      'Ski Equipment Rental',
      'Fitness Center',
      'Free Parking',
    ],
    roomTypes: [
      {
        name: 'Standard Room',
        description: 'Cozy room with mountain views',
        price: 180,
        capacity: 2,
        amenities: ['Queen Bed', 'Mountain View', 'Heating', 'WiFi'],
      },
      {
        name: 'Junior Suite',
        description: 'Spacious suite with separate living area',
        price: 280,
        capacity: 3,
        amenities: ['King Bed', 'Living Area', 'Balcony', 'Mini Bar'],
      },
      {
        name: 'Family Suite',
        description: 'Two-bedroom suite perfect for families',
        price: 420,
        capacity: 5,
        amenities: ['2 Bedrooms', 'Kitchenette', 'Large Balcony', 'Living Room'],
      },
    ],
    policies: {
      checkIn: '3:00 PM',
      checkOut: '11:00 AM',
      cancellation: 'Free cancellation up to 3 days before check-in',
    },
    featured: true,
  },
  {
    id: '3',
    name: 'Traditional Kyoto Ryokan',
    slug: 'traditional-kyoto-ryokan',
    location: 'Kyoto, Japan',
    destinationId: '3',
    description: 'Authentic Japanese ryokan with tatami rooms, kaiseki dining, and traditional onsen. Experience Japanese hospitality at its finest.',
    rating: 4.8,
    reviewCount: 456,
    price: 320,
    image: 'https://images.unsplash.com/photo-1583470790878-4a0f8a0f0f1c?w=800',
    images: [
      'https://images.unsplash.com/photo-1583470790878-4a0f8a0f0f1c?w=800',
      'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?w=800',
    ],
    amenities: [
      'Traditional Onsen',
      'Kaiseki Dining',
      'Tea Ceremony Room',
      'Japanese Garden',
      'Free WiFi',
      'Yukata Robes',
      'Private Onsen (select rooms)',
      'Cultural Activities',
    ],
    roomTypes: [
      {
        name: 'Standard Tatami Room',
        description: 'Traditional Japanese room with futon bedding',
        price: 220,
        capacity: 2,
        amenities: ['Tatami Flooring', 'Futon', 'Garden View', 'Shared Onsen'],
      },
      {
        name: 'Deluxe Room with Private Onsen',
        description: 'Spacious room with private outdoor bath',
        price: 320,
        capacity: 2,
        amenities: ['Private Onsen', 'Garden View', 'Tea Set', 'Premium Amenities'],
      },
      {
        name: 'Suite with Garden',
        description: 'Large suite with private garden access',
        price: 480,
        capacity: 4,
        amenities: ['Private Garden', 'Living Area', 'Private Onsen', 'Premium Service'],
      },
    ],
    policies: {
      checkIn: '3:00 PM',
      checkOut: '10:00 AM',
      cancellation: 'Free cancellation up to 5 days before check-in',
    },
    featured: true,
  },
  {
    id: '4',
    name: 'Santorini Sunset Villa',
    slug: 'santorini-sunset-villa',
    location: 'Santorini, Greece',
    destinationId: '4',
    description: 'Luxury cave hotel carved into the cliffs of Oia. Stunning caldera views and infinity pools make this the perfect romantic getaway.',
    rating: 4.9,
    reviewCount: 521,
    price: 420,
    originalPrice: 550,
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800',
    images: [
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    ],
    amenities: [
      'Infinity Pool',
      'Caldera View',
      'Restaurant',
      'Bar',
      'Spa Services',
      'Free WiFi',
      'Concierge Service',
      'Airport Transfer',
    ],
    roomTypes: [
      {
        name: 'Cave Room',
        description: 'Traditional cave room with caldera view',
        price: 280,
        capacity: 2,
        amenities: ['Queen Bed', 'Caldera View', 'Private Terrace', 'Jacuzzi'],
      },
      {
        name: 'Honeymoon Suite',
        description: 'Romantic suite with private plunge pool',
        price: 420,
        capacity: 2,
        amenities: ['King Bed', 'Private Plunge Pool', 'Outdoor Jacuzzi', 'Sunset View'],
      },
      {
        name: 'Presidential Villa',
        description: 'Ultimate luxury with private infinity pool',
        price: 850,
        capacity: 4,
        amenities: ['2 Bedrooms', 'Private Pool', 'Butler Service', 'Outdoor Dining Area'],
      },
    ],
    policies: {
      checkIn: '2:00 PM',
      checkOut: '11:00 AM',
      cancellation: 'Free cancellation up to 7 days before check-in',
    },
    featured: true,
  },
  {
    id: '5',
    name: 'Bali Beach Resort',
    slug: 'bali-beach-resort',
    location: 'Bali, Indonesia',
    destinationId: '7',
    description: 'Tropical paradise resort on Seminyak Beach. Modern luxury meets Balinese culture with excellent dining and wellness facilities.',
    rating: 4.6,
    reviewCount: 387,
    price: 195,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800',
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800',
    ],
    amenities: [
      'Beachfront',
      'Multiple Pools',
      'Spa & Wellness',
      '4 Restaurants',
      'Beach Club',
      'Yoga Studio',
      'Kids Club',
      'Free WiFi',
      'Water Sports',
    ],
    roomTypes: [
      {
        name: 'Deluxe Room',
        description: 'Modern room with garden or pool view',
        price: 145,
        capacity: 2,
        amenities: ['King Bed', 'Balcony', 'WiFi', 'Mini Bar'],
      },
      {
        name: 'Beachfront Suite',
        description: 'Spacious suite with direct beach access',
        price: 195,
        capacity: 3,
        amenities: ['King Bed', 'Living Area', 'Beach Access', 'Premium Amenities'],
      },
      {
        name: 'Pool Villa',
        description: 'Private villa with plunge pool',
        price: 350,
        capacity: 4,
        amenities: ['Private Pool', '2 Bedrooms', 'Kitchen', 'Butler Service'],
      },
    ],
    policies: {
      checkIn: '2:00 PM',
      checkOut: '12:00 PM',
      cancellation: 'Free cancellation up to 2 days before check-in',
    },
    featured: false,
  },
  {
    id: '6',
    name: 'Dubai Luxury Hotel',
    slug: 'dubai-luxury-hotel',
    location: 'Dubai, UAE',
    destinationId: '6',
    description: '5-star luxury on Palm Jumeirah with private beach, world-class dining, and stunning Dubai skyline views.',
    rating: 4.8,
    reviewCount: 612,
    price: 380,
    originalPrice: 480,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    ],
    amenities: [
      'Private Beach',
      'Infinity Pool',
      'Luxury Spa',
      '6 Restaurants',
      'Nightclub',
      'Fitness Center',
      'Kids Club',
      'Concierge',
      'Valet Parking',
    ],
    roomTypes: [
      {
        name: 'Deluxe Room',
        description: 'Elegant room with city or sea view',
        price: 280,
        capacity: 2,
        amenities: ['King Bed', 'City View', 'WiFi', 'Smart TV'],
      },
      {
        name: 'Palm Sea View Suite',
        description: 'Luxurious suite with panoramic sea views',
        price: 380,
        capacity: 3,
        amenities: ['King Bed', 'Living Area', 'Sea View', 'Mini Bar'],
      },
      {
        name: 'Royal Suite',
        description: 'Ultimate luxury with private butler',
        price: 1200,
        capacity: 4,
        amenities: ['3 Bedrooms', 'Private Pool', 'Butler Service', 'Premium Dining'],
      },
    ],
    policies: {
      checkIn: '3:00 PM',
      checkOut: '12:00 PM',
      cancellation: 'Free cancellation up to 48 hours before check-in',
    },
    featured: false,
  },
];
