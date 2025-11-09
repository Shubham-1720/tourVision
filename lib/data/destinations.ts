export interface Destination {
  id: string;
  name: string;
  slug: string;
  country: string;
  region: string;
  description: string;
  shortDescription: string;
  image: string;
  images: string[];
  highlights: string[];
  bestTimeToVisit: string;
  type: 'beach' | 'mountain' | 'city' | 'cultural' | 'adventure' | 'wildlife';
  budget: 'low' | 'medium' | 'high';
  season: 'spring' | 'summer' | 'fall' | 'winter' | 'all';
  attractions: {
    name: string;
    description: string;
  }[];
  packages: string[]; // package IDs
}

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Maldives',
    slug: 'maldives',
    country: 'Maldives',
    region: 'South Asia',
    description: 'The Maldives is a tropical paradise known for its pristine white sandy beaches, crystal-clear turquoise waters, and vibrant coral reefs. Perfect for honeymoons, diving, and ultimate relaxation.',
    shortDescription: 'Tropical paradise with pristine beaches and crystal-clear waters',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800',
    images: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800',
      'https://images.unsplash.com/photo-1589197331516-8c179744d21e?w=800',
    ],
    highlights: [
      'Overwater bungalows',
      'World-class diving and snorkeling',
      'Luxury resorts',
      'Marine life encounters',
      'Romantic sunset cruises',
    ],
    bestTimeToVisit: 'November to April',
    type: 'beach',
    budget: 'high',
    season: 'winter',
    attractions: [
      {
        name: 'Male City',
        description: 'The bustling capital with colorful buildings and local markets',
      },
      {
        name: 'Banana Reef',
        description: 'Famous dive site with diverse marine life',
      },
      {
        name: 'Artificial Beach',
        description: 'Popular beach for swimming and water sports',
      },
    ],
    packages: ['1', '2'],
  },
  {
    id: '2',
    name: 'Swiss Alps',
    slug: 'swiss-alps',
    country: 'Switzerland',
    region: 'Europe',
    description: 'Experience the majestic beauty of the Swiss Alps with snow-capped mountains, charming villages, world-class skiing, and breathtaking scenic train rides through mountain passes.',
    shortDescription: 'Majestic mountains with skiing and scenic train rides',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800',
    images: [
      'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800',
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    ],
    highlights: [
      'World-class skiing',
      'Scenic train journeys',
      'Mountain hiking trails',
      'Charming alpine villages',
      'Swiss chocolate and cheese',
    ],
    bestTimeToVisit: 'December to March (skiing), June to September (hiking)',
    type: 'mountain',
    budget: 'high',
    season: 'all',
    attractions: [
      {
        name: 'Matterhorn',
        description: 'Iconic pyramid-shaped mountain peak',
      },
      {
        name: 'Jungfraujoch',
        description: 'Top of Europe - highest railway station in Europe',
      },
      {
        name: 'Interlaken',
        description: 'Adventure capital between two lakes',
      },
    ],
    packages: ['3', '5'],
  },
  {
    id: '3',
    name: 'Kyoto',
    slug: 'kyoto-japan',
    country: 'Japan',
    region: 'Asia',
    description: 'Ancient capital of Japan, Kyoto offers a glimpse into traditional Japanese culture with thousands of temples, beautiful gardens, geisha districts, and seasonal cherry blossoms.',
    shortDescription: 'Ancient temples and traditional Japanese culture',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800',
    images: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800',
      'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800',
      'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
    ],
    highlights: [
      'Fushimi Inari Shrine',
      'Bamboo forest',
      'Traditional tea ceremonies',
      'Cherry blossom viewing',
      'Geisha districts',
    ],
    bestTimeToVisit: 'March to May (cherry blossoms), October to November (autumn colors)',
    type: 'cultural',
    budget: 'medium',
    season: 'spring',
    attractions: [
      {
        name: 'Fushimi Inari Taisha',
        description: 'Famous shrine with thousands of red torii gates',
      },
      {
        name: 'Kinkaku-ji',
        description: 'Golden Pavilion temple surrounded by gardens',
      },
      {
        name: 'Arashiyama Bamboo Grove',
        description: 'Towering bamboo forest pathway',
      },
    ],
    packages: ['4', '6'],
  },
  {
    id: '4',
    name: 'Santorini',
    slug: 'santorini-greece',
    country: 'Greece',
    region: 'Europe',
    description: 'Iconic Greek island famous for its white-washed buildings, blue-domed churches, stunning sunsets, and volcanic beaches. Perfect for romantic getaways and wine tasting.',
    shortDescription: 'White-washed buildings and stunning Mediterranean sunsets',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800',
    images: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800',
      'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800',
    ],
    highlights: [
      'Oia sunset views',
      'Volcanic beaches',
      'Wine tasting tours',
      'Caldera cruise',
      'Traditional Greek cuisine',
    ],
    bestTimeToVisit: 'April to November',
    type: 'beach',
    budget: 'medium',
    season: 'summer',
    attractions: [
      {
        name: 'Oia Village',
        description: 'Picturesque village with world-famous sunset views',
      },
      {
        name: 'Red Beach',
        description: 'Unique volcanic red sand beach',
      },
      {
        name: 'Akrotiri',
        description: 'Ancient Minoan city ruins',
      },
    ],
    packages: ['7'],
  },
  {
    id: '5',
    name: 'Machu Picchu',
    slug: 'machu-picchu-peru',
    country: 'Peru',
    region: 'South America',
    description: 'Ancient Incan citadel set high in the Andes Mountains. One of the New Seven Wonders of the World, offering breathtaking views and rich historical significance.',
    shortDescription: 'Ancient Incan citadel in the Andes Mountains',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800',
    images: [
      'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800',
      'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800',
      'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800',
    ],
    highlights: [
      'Inca Trail trek',
      'Ancient ruins exploration',
      'Mountain scenery',
      'Cultural heritage',
      'Andean wildlife',
    ],
    bestTimeToVisit: 'April to October',
    type: 'cultural',
    budget: 'medium',
    season: 'all',
    attractions: [
      {
        name: 'Sun Gate',
        description: 'Traditional entrance to Machu Picchu on Inca Trail',
      },
      {
        name: 'Huayna Picchu',
        description: 'Mountain peak overlooking the ruins',
      },
      {
        name: 'Temple of the Sun',
        description: 'Semicircular temple with astronomical significance',
      },
    ],
    packages: ['8'],
  },
  {
    id: '6',
    name: 'Dubai',
    slug: 'dubai-uae',
    country: 'UAE',
    region: 'Middle East',
    description: 'Ultra-modern city known for luxury shopping, futuristic architecture, vibrant nightlife, and desert adventures. Home to the world\'s tallest building, Burj Khalifa.',
    shortDescription: 'Modern metropolis with luxury shopping and iconic architecture',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
    images: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800',
      'https://images.unsplash.com/photo-1559603101-f64be8c0d551?w=800',
    ],
    highlights: [
      'Burj Khalifa',
      'Desert safari',
      'Luxury shopping malls',
      'Palm Jumeirah',
      'Traditional souks',
    ],
    bestTimeToVisit: 'November to March',
    type: 'city',
    budget: 'high',
    season: 'winter',
    attractions: [
      {
        name: 'Burj Khalifa',
        description: 'World\'s tallest building with observation decks',
      },
      {
        name: 'Dubai Mall',
        description: 'Largest shopping mall in the world',
      },
      {
        name: 'Dubai Fountain',
        description: 'World\'s largest choreographed fountain system',
      },
    ],
    packages: ['1', '9'],
  },
  {
    id: '7',
    name: 'Bali',
    slug: 'bali-indonesia',
    country: 'Indonesia',
    region: 'Southeast Asia',
    description: 'Indonesian paradise island known for its forested volcanic mountains, iconic rice paddies, beaches, coral reefs, and rich spiritual culture with ancient temples.',
    shortDescription: 'Tropical island with temples, rice terraces, and beaches',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
    images: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
      'https://images.unsplash.com/photo-1555400082-f101eed1c5f5?w=800',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800',
    ],
    highlights: [
      'Ubud rice terraces',
      'Ancient temples',
      'Beach clubs',
      'Yoga retreats',
      'Traditional dance performances',
    ],
    bestTimeToVisit: 'April to October',
    type: 'beach',
    budget: 'low',
    season: 'summer',
    attractions: [
      {
        name: 'Tanah Lot Temple',
        description: 'Ancient Hindu temple on a rock formation',
      },
      {
        name: 'Tegalalang Rice Terrace',
        description: 'Famous stepped rice paddies',
      },
      {
        name: 'Monkey Forest',
        description: 'Sacred forest sanctuary with hundreds of monkeys',
      },
    ],
    packages: ['2', '10'],
  },
  {
    id: '8',
    name: 'Iceland',
    slug: 'iceland',
    country: 'Iceland',
    region: 'Europe',
    description: 'Land of fire and ice, featuring dramatic volcanic landscapes, geysers, hot springs, glaciers, and the magical Northern Lights. Perfect for adventure seekers and nature lovers.',
    shortDescription: 'Volcanic landscapes, geysers, and Northern Lights',
    image: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=800',
    images: [
      'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=800',
      'https://images.unsplash.com/photo-1533669604364-9b09473b89a6?w=800',
      'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=800',
    ],
    highlights: [
      'Northern Lights',
      'Blue Lagoon',
      'Glacier hiking',
      'Volcanic landscapes',
      'Midnight sun',
    ],
    bestTimeToVisit: 'June to August (midnight sun), September to March (Northern Lights)',
    type: 'adventure',
    budget: 'high',
    season: 'all',
    attractions: [
      {
        name: 'Golden Circle',
        description: 'Route covering Þingvellir, Geysir, and Gullfoss',
      },
      {
        name: 'Blue Lagoon',
        description: 'Geothermal spa with milky blue waters',
      },
      {
        name: 'Jökulsárlón',
        description: 'Glacier lagoon with floating icebergs',
      },
    ],
    packages: ['5'],
  },
  {
    id: '9',
    name: 'Safari Kenya',
    slug: 'safari-kenya',
    country: 'Kenya',
    region: 'Africa',
    description: 'Experience authentic African safari with incredible wildlife viewing, the Great Migration, Maasai culture, and stunning landscapes from savannas to beaches.',
    shortDescription: 'Authentic African safari with Big Five wildlife',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    images: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
      'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800',
      'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800',
    ],
    highlights: [
      'Big Five wildlife',
      'Great Migration',
      'Maasai Mara',
      'Hot air balloon safari',
      'Maasai cultural experience',
    ],
    bestTimeToVisit: 'July to October (Great Migration)',
    type: 'wildlife',
    budget: 'high',
    season: 'summer',
    attractions: [
      {
        name: 'Maasai Mara Reserve',
        description: 'Famous for the Great Migration and big cats',
      },
      {
        name: 'Amboseli National Park',
        description: 'Elephants with Mount Kilimanjaro backdrop',
      },
      {
        name: 'Lake Nakuru',
        description: 'Flamingo-filled soda lake',
      },
    ],
    packages: ['11'],
  },
  {
    id: '10',
    name: 'New York City',
    slug: 'new-york-city',
    country: 'USA',
    region: 'North America',
    description: 'The city that never sleeps offers world-class museums, Broadway shows, diverse neighborhoods, iconic landmarks, and unmatched dining and shopping experiences.',
    shortDescription: 'Iconic city with museums, Broadway, and diverse culture',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800',
    images: [
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800',
      'https://images.unsplash.com/photo-1546436836-07a91091f160?w=800',
      'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=800',
    ],
    highlights: [
      'Statue of Liberty',
      'Central Park',
      'Broadway shows',
      'World-class museums',
      'Diverse food scene',
    ],
    bestTimeToVisit: 'April to June, September to November',
    type: 'city',
    budget: 'high',
    season: 'all',
    attractions: [
      {
        name: 'Statue of Liberty',
        description: 'Iconic symbol of freedom and democracy',
      },
      {
        name: 'Times Square',
        description: 'Bright lights and Broadway theaters',
      },
      {
        name: 'Metropolitan Museum of Art',
        description: 'One of the world\'s largest art museums',
      },
    ],
    packages: ['12'],
  },
  {
    id: '11',
    name: 'Paris',
    slug: 'paris-france',
    country: 'France',
    region: 'Europe',
    description: 'The City of Light captivates with its art, architecture, cuisine, and romance. Home to the Eiffel Tower, world-class museums, and charming cafés along the Seine.',
    shortDescription: 'City of Light with art, architecture, and romance',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
    images: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
      'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800',
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800',
    ],
    highlights: [
      'Eiffel Tower',
      'Louvre Museum',
      'Notre-Dame Cathedral',
      'Seine River cruises',
      'French cuisine',
    ],
    bestTimeToVisit: 'April to June, September to October',
    type: 'city',
    budget: 'high',
    season: 'all',
    attractions: [
      {
        name: 'Eiffel Tower',
        description: 'Iconic iron lattice tower',
      },
      {
        name: 'Louvre Museum',
        description: 'World\'s largest art museum, home to Mona Lisa',
      },
      {
        name: 'Arc de Triomphe',
        description: 'Monument honoring French military victories',
      },
    ],
    packages: ['3', '13'],
  },
  {
    id: '12',
    name: 'Patagonia',
    slug: 'patagonia',
    country: 'Argentina/Chile',
    region: 'South America',
    description: 'Vast wilderness at the southern tip of South America, featuring dramatic mountains, glaciers, pristine lakes, and unique wildlife. A paradise for outdoor enthusiasts.',
    shortDescription: 'Dramatic wilderness with glaciers and mountains',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800',
    images: [
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800',
      'https://images.unsplash.com/photo-1490927376554-25d980fce2c2?w=800',
      'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800',
    ],
    highlights: [
      'Torres del Paine',
      'Perito Moreno Glacier',
      'Hiking and trekking',
      'Wildlife viewing',
      'Pristine landscapes',
    ],
    bestTimeToVisit: 'October to April',
    type: 'adventure',
    budget: 'medium',
    season: 'summer',
    attractions: [
      {
        name: 'Torres del Paine',
        description: 'National park with iconic granite towers',
      },
      {
        name: 'Perito Moreno Glacier',
        description: 'Massive glacier accessible by walkways',
      },
      {
        name: 'Fitz Roy',
        description: 'Stunning mountain peak for climbers and hikers',
      },
    ],
    packages: ['8'],
  },
];
