# TourVision - Tour and Travels Website

A fully responsive, feature-rich travel website built with Next.js 14, TypeScript, and Tailwind CSS. TourVision offers comprehensive travel services including tour guides, accommodations, transportation, and complete travel packages.

![TourVision](https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=400&fit=crop)

## 🌟 Features

### Core Features
- **Homepage** with hero section, services overview, featured destinations, testimonials, and newsletter subscription
- **Destinations Catalog** with advanced filtering (type, budget, season) and individual detail pages
- **Travel Packages** with curated itineraries, pricing, and booking options
- **Service Pages** for tour guides, hotels, transportation, and complete packages
- **About Us** page with company story, team members, and USPs
- **Contact Page** with form, office locations, Google Maps integration, and FAQ section
- **Multi-step Booking System** with price calculation and form validation

### Technical Features
- **Next.js 14 App Router** with server and client components
- **TypeScript** for type safety
- **Tailwind CSS** for responsive styling
- **Image Optimization** with next/image
- **SEO Optimized** with proper meta tags
- **Fully Responsive** design (mobile, tablet, desktop)
- **Smooth Animations** and transitions
- **Accessible** with ARIA labels and keyboard navigation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd /Users/shubhamkushwaha/Desktop/tourVision
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
tourVision/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx               # Root layout with Navbar & Footer
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles
│   ├── about/                   # About Us page
│   ├── destinations/            # Destinations catalog
│   │   ├── page.tsx            # Destinations list with filters
│   │   └── [slug]/             # Individual destination pages
│   ├── services/                # Service pages
│   │   ├── packages/           # Travel packages
│   │   ├── tour-guide/         # Tour guide services (to be implemented)
│   │   ├── hotels/             # Hotel listings (to be implemented)
│   │   └── transportation/     # Transportation services (to be implemented)
│   ├── contact/                 # Contact page with form & map
│   └── booking/                 # Multi-step booking system
├── components/                   # React components
│   ├── ui/                      # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Textarea.tsx
│   │   └── Modal.tsx
│   ├── layout/                  # Layout components
│   │   ├── Navbar.tsx          # Sticky navigation with dropdowns
│   │   └── Footer.tsx          # Footer with links & newsletter
│   └── features/                # Feature-specific components
│       ├── DestinationCard.tsx
│       ├── PackageCard.tsx
│       └── TestimonialSlider.tsx
├── lib/                         # Utilities and data
│   ├── data/                    # Mock data
│   │   ├── destinations.ts     # 12 destinations with full details
│   │   ├── packages.ts         # 13 travel packages
│   │   ├── hotels.ts           # 6 hotel listings
│   │   └── services.ts         # Tour guides, vehicles, testimonials
│   └── utils/                   # Utility functions (to be added)
├── public/                      # Static assets
│   └── images/                  # Image assets
├── styles/                      # Additional styles
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.mjs              # Next.js configuration
└── package.json                 # Dependencies and scripts
```

## 🎨 Design Features

### Color Palette
- **Primary Blue**: #1890ff (buttons, links, accents)
- **Secondary Blue**: #0ea5e9 (gradients, hover states)
- **Accent Orange**: #f97316 (highlights, special offers)
- **Neutral Grays**: For text and backgrounds

### Typography
- **Headings**: Montserrat (bold, modern)
- **Body**: Inter (clean, readable)

### Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 📊 Data Structure

### Destinations (12 total)
- Maldives, Swiss Alps, Kyoto, Santorini, Machu Picchu, Dubai, Bali, Iceland, Kenya Safari, New York City, Paris, Patagonia
- Each with images, highlights, attractions, and best time to visit

### Travel Packages (13 total)
- Range from $1,299 to $4,599
- Types: Luxury, Adventure, Cultural, Family, Couple
- Includes detailed itineraries and pricing

### Hotels (6 properties)
- Locations across Maldives, Switzerland, Japan, Greece, Bali, Dubai
- Multiple room types with amenities and policies

### Services
- 6 professional tour guides with specializations
- 7 vehicle options (cars, SUVs, vans, buses)
- 6 customer testimonials

## 🔧 Key Components

### Navigation (Navbar)
- Sticky header with dropdown menus
- Mobile-responsive hamburger menu
- Active link highlighting
- Smooth scroll behavior

### Forms
- Contact form with validation
- Multi-step booking form
- Newsletter subscription
- Error handling and success states

### Cards
- Destination cards with hover effects
- Package cards with pricing and discounts
- Hotel cards with ratings and amenities
- Testimonial slider with auto-rotation

## 🌐 Pages Overview

### Homepage (`/`)
- Hero section with CTA buttons
- Services overview (4 main services)
- Featured destinations (6 cards)
- Special offers/packages
- Why choose us section
- Testimonials slider
- Statistics showcase
- Newsletter signup

### Destinations (`/destinations`)
- Filterable destination catalog
- Search by name/location
- Filter by type, budget, season
- Dynamic destination detail pages

### Services
- **Packages** (`/services/packages`): All-inclusive travel packages
- **Tour Guides** (to be implemented): National & international guides
- **Hotels** (to be implemented): Accommodation listings
- **Transportation** (to be implemented): Vehicle rentals

### About Us (`/about`)
- Company story and mission
- Team member profiles
- Why choose us (USPs)
- Awards and certifications
- Company statistics

### Contact (`/contact`)
- Contact form with validation
- Office location with Google Maps
- Business hours and contact info
- FAQ section

### Booking (`/booking`)
- 4-step booking process:
  1. Service selection
  2. Dates and guests
  3. Additional services
  4. Personal information
- Real-time price calculation
- Progress indicator
- Form validation

## 🚧 To Be Implemented

The following pages/features can be added:
- Individual service detail pages (tour guides, hotels, transportation)
- User authentication and accounts
- Payment integration
- Blog section
- Gallery page
- Reviews and ratings system
- Multi-language support (i18n)
- Dark mode
- Advanced search with filters
- Wishlist/favorites
- Live chat widget

## 📱 Responsive Design

The website is fully responsive across all devices:
- **Mobile**: Optimized touch interactions, hamburger menu, stacked layouts
- **Tablet**: Grid layouts, improved spacing
- **Desktop**: Full navigation, multi-column layouts, hover effects

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Alt text for all images
- Sufficient color contrast ratios

## ⚡ Performance

- Image optimization with Next.js Image component
- Code splitting with App Router
- Lazy loading for images and components
- Optimized bundle size
- Fast page transitions

## 🧪 Testing

To test the website:
1. Navigate through all pages using the navigation menu
2. Test responsive design by resizing browser window
3. Fill out forms (contact, booking) to test validation
4. Use filters on the destinations page
5. Check mobile menu functionality
6. Test keyboard navigation

## 📝 Scripts

```bash
# Development
npm run dev        # Start development server

# Production
npm run build      # Build for production
npm start          # Start production server

# Linting (if configured)
npm run lint       # Run ESLint
```

## 🛠️ Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Inter, Montserrat)
- **Icons**: SVG icons (inline)
- **Images**: Unsplash (external URLs)

## 📦 Dependencies

```json
{
  "next": "^16.0.1",
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "typescript": "^5.9.3",
  "tailwindcss": "^4.1.17",
  "autoprefixer": "^10.4.21",
  "postcss": "^8.5.6"
}
```

## 🎯 Future Enhancements

1. **Backend Integration**: Connect to a real API or database
2. **Payment Gateway**: Integrate Stripe or PayPal
3. **User Accounts**: Registration, login, booking history
4. **Admin Panel**: Manage content, bookings, users
5. **Real-time Availability**: Check hotel/package availability
6. **Reviews System**: User reviews and ratings
7. **Blog**: Travel tips and destination guides
8. **Email Notifications**: Booking confirmations and updates
9. **Social Sharing**: Share destinations and packages
10. **Advanced Analytics**: Track user behavior and conversions

## 🤝 Contributing

This is a demo project for TourVision travel website. To contribute:
1. Make your changes
2. Test thoroughly across different devices
3. Ensure code follows TypeScript and React best practices
4. Update documentation as needed

## 📄 License

This project is created for demonstration purposes.

## 📞 Support

For questions or issues:
- Email: info@tourvision.com
- Phone: +1 (555) 123-4567
- Website: /contact

## 🎉 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons created with SVG
- Fonts from [Google Fonts](https://fonts.google.com)

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

Visit the live site at [http://localhost:3000](http://localhost:3000) after running `npm run dev`
