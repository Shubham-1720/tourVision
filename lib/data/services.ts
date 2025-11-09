export interface Vehicle {
  id: string;
  name: string;
  type: 'car' | 'suv' | 'van' | 'bus' | 'luxury';
  capacity: number;
  luggage: number;
  description: string;
  image: string;
  pricePerDay: number;
  pricePerHour: number;
  features: string[];
  transmission: 'automatic' | 'manual';
  fuelType: string;
  available: boolean;
}

export const vehicles: Vehicle[] = [
  {
    id: '1',
    name: 'Sedan Economy',
    type: 'car',
    capacity: 4,
    luggage: 2,
    description: 'Comfortable sedan perfect for city tours and short trips',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
    pricePerDay: 45,
    pricePerHour: 8,
    features: ['Air Conditioning', 'GPS', 'Bluetooth', 'USB Charging'],
    transmission: 'automatic',
    fuelType: 'Petrol',
    available: true,
  },
  {
    id: '2',
    name: 'Luxury Sedan',
    type: 'luxury',
    capacity: 4,
    luggage: 3,
    description: 'Premium sedan with leather interior and advanced features',
    image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800',
    pricePerDay: 120,
    pricePerHour: 20,
    features: ['Leather Seats', 'Sunroof', 'Premium Audio', 'WiFi', 'GPS'],
    transmission: 'automatic',
    fuelType: 'Hybrid',
    available: true,
  },
  {
    id: '3',
    name: 'SUV',
    type: 'suv',
    capacity: 7,
    luggage: 4,
    description: 'Spacious SUV ideal for families and group tours',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800',
    pricePerDay: 85,
    pricePerHour: 15,
    features: ['7 Seats', 'Air Conditioning', '4WD', 'GPS', 'Large Boot'],
    transmission: 'automatic',
    fuelType: 'Diesel',
    available: true,
  },
  {
    id: '4',
    name: 'Mini Van',
    type: 'van',
    capacity: 9,
    luggage: 6,
    description: 'Perfect for group travel with ample space for passengers and luggage',
    image: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800',
    pricePerDay: 95,
    pricePerHour: 16,
    features: ['9 Seats', 'AC', 'Entertainment System', 'GPS', 'Extra Storage'],
    transmission: 'automatic',
    fuelType: 'Diesel',
    available: true,
  },
  {
    id: '5',
    name: 'Luxury Van',
    type: 'van',
    capacity: 8,
    luggage: 6,
    description: 'Premium van with reclining seats and luxury amenities',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800',
    pricePerDay: 150,
    pricePerHour: 25,
    features: ['Leather Reclining Seats', 'Entertainment', 'WiFi', 'Mini Bar', 'Privacy Glass'],
    transmission: 'automatic',
    fuelType: 'Diesel',
    available: true,
  },
  {
    id: '6',
    name: 'Tourist Bus',
    type: 'bus',
    capacity: 25,
    luggage: 20,
    description: 'Comfortable bus for large group tours and events',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800',
    pricePerDay: 250,
    pricePerHour: 40,
    features: ['25 Seats', 'AC', 'PA System', 'Large Luggage Space', 'Reclining Seats'],
    transmission: 'manual',
    fuelType: 'Diesel',
    available: true,
  },
  {
    id: '7',
    name: 'Luxury Coach',
    type: 'bus',
    capacity: 35,
    luggage: 30,
    description: 'Premium coach with entertainment and comfort features for long journeys',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800',
    pricePerDay: 400,
    pricePerHour: 65,
    features: ['35 Seats', 'Entertainment', 'WiFi', 'Restroom', 'Refreshments', 'Reclining Seats'],
    transmission: 'automatic',
    fuelType: 'Diesel',
    available: true,
  },
];

export interface TourGuide {
  id: string;
  name: string;
  image: string;
  specialization: string[];
  languages: string[];
  experience: number;
  rating: number;
  reviewCount: number;
  description: string;
  pricePerDay: number;
  tours: 'national' | 'international' | 'both';
  available: boolean;
}

export const tourGuides: TourGuide[] = [
  {
    id: '1',
    name: 'John Martinez',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    specialization: ['Adventure Tours', 'Mountain Trekking', 'Wildlife'],
    languages: ['English', 'Spanish', 'French'],
    experience: 12,
    rating: 4.9,
    reviewCount: 256,
    description: 'Passionate adventure guide with extensive experience in mountain trekking and wildlife tours across South America and Europe.',
    pricePerDay: 150,
    tours: 'international',
    available: true,
  },
  {
    id: '2',
    name: 'Sarah Chen',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    specialization: ['Cultural Tours', 'Historical Sites', 'Food Tours'],
    languages: ['English', 'Mandarin', 'Japanese', 'Korean'],
    experience: 8,
    rating: 4.8,
    reviewCount: 342,
    description: 'Cultural enthusiast specializing in Asian heritage sites and culinary experiences. Expert in Japanese and Chinese cultural tours.',
    pricePerDay: 130,
    tours: 'international',
    available: true,
  },
  {
    id: '3',
    name: 'Ahmed Hassan',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    specialization: ['Desert Safari', 'Middle East Tours', 'Luxury Travel'],
    languages: ['English', 'Arabic', 'French'],
    experience: 15,
    rating: 4.9,
    reviewCount: 189,
    description: 'Expert in Middle Eastern destinations with deep knowledge of desert landscapes and luxury travel experiences.',
    pricePerDay: 180,
    tours: 'international',
    available: true,
  },
  {
    id: '4',
    name: 'Emily Thompson',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    specialization: ['Beach Destinations', 'Island Hopping', 'Water Sports'],
    languages: ['English', 'Portuguese', 'Spanish'],
    experience: 10,
    rating: 4.7,
    reviewCount: 298,
    description: 'Tropical paradise specialist with expertise in island destinations, snorkeling, and marine life experiences.',
    pricePerDay: 140,
    tours: 'international',
    available: true,
  },
  {
    id: '5',
    name: 'Rajesh Kumar',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    specialization: ['National Parks', 'Heritage Sites', 'Spiritual Tours'],
    languages: ['English', 'Hindi', 'Tamil'],
    experience: 18,
    rating: 4.8,
    reviewCount: 421,
    description: 'Veteran guide with comprehensive knowledge of Indian heritage, temples, and national parks. Specializes in spiritual journeys.',
    pricePerDay: 100,
    tours: 'national',
    available: true,
  },
  {
    id: '6',
    name: 'Maria Rodriguez',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
    specialization: ['Wine Tours', 'Culinary Experiences', 'European Culture'],
    languages: ['English', 'Spanish', 'Italian', 'French'],
    experience: 9,
    rating: 4.9,
    reviewCount: 267,
    description: 'Culinary and wine expert offering immersive gastronomic tours across Europe with focus on local traditions.',
    pricePerDay: 160,
    tours: 'international',
    available: true,
  },
];

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
  tour: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Michael Stevens',
    location: 'New York, USA',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    rating: 5,
    text: 'TourVision made our Maldives honeymoon absolutely perfect! The resort was stunning, and every detail was taken care of. Highly recommend!',
    tour: 'Maldives Luxury Escape',
    date: '2024-10-15',
  },
  {
    id: '2',
    name: 'Sophie Martinez',
    location: 'London, UK',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    rating: 5,
    text: 'The European tour was incredible! Our guide was knowledgeable, hotels were excellent, and the itinerary was well-planned. Best vacation ever!',
    tour: 'European Highlights',
    date: '2024-09-22',
  },
  {
    id: '3',
    name: 'David Park',
    location: 'Seoul, South Korea',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
    rating: 5,
    text: 'Cherry blossom tour in Kyoto was magical! The ryokan experience and cultural activities exceeded all expectations. Thank you TourVision!',
    tour: 'Kyoto Cherry Blossom',
    date: '2024-04-10',
  },
  {
    id: '4',
    name: 'Emma Wilson',
    location: 'Sydney, Australia',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
    rating: 4,
    text: 'Bali cultural journey was amazing! Loved visiting the temples and rice terraces. The guides were friendly and very informative.',
    tour: 'Bali Cultural Journey',
    date: '2024-08-05',
  },
  {
    id: '5',
    name: 'James Anderson',
    location: 'Toronto, Canada',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
    rating: 5,
    text: 'Iceland adventure was the trip of a lifetime! Glacier hiking, Northern Lights, and stunning landscapes. Everything was perfectly organized.',
    tour: 'Iceland Adventure',
    date: '2024-02-18',
  },
  {
    id: '6',
    name: 'Lisa Chen',
    location: 'Singapore',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    rating: 5,
    text: 'Kenya safari exceeded all expectations! Saw the Big Five, experienced Maasai culture, and the accommodations were luxurious. Unforgettable!',
    tour: 'Kenya Safari Adventure',
    date: '2024-07-30',
  },
];
