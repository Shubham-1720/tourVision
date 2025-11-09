import Image from 'next/image';
import Link from 'next/link';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface PackageCardProps {
  package: {
    id: string;
    name: string;
    slug: string;
    shortDescription: string;
    image: string;
    duration: string;
    price: number;
    originalPrice?: number;
    type: string;
    difficulty: string;
  };
}

export default function PackageCard({ package: pkg }: PackageCardProps) {
  const discount = pkg.originalPrice
    ? Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)
    : 0;

  return (
    <Card hover>
      <div className="relative h-64">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {discount > 0 && (
          <div className="absolute top-4 left-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            {discount}% OFF
          </div>
        )}
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium capitalize">
          {pkg.type}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {pkg.shortDescription}
        </p>
        <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {pkg.duration}
          </div>
          <div className="flex items-center capitalize">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {pkg.difficulty}
          </div>
        </div>
        <div className="flex items-end justify-between mb-4">
          <div>
            <p className="text-2xl font-bold text-primary-600">${pkg.price}</p>
            {pkg.originalPrice && (
              <p className="text-sm text-gray-500 line-through">${pkg.originalPrice}</p>
            )}
          </div>
          <p className="text-xs text-gray-500">per person</p>
        </div>
        <Link href={`/services/packages/${pkg.slug}`}>
          <Button variant="primary" size="sm" className="w-full">
            View Package
          </Button>
        </Link>
      </div>
    </Card>
  );
}
