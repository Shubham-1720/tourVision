import Image from 'next/image';
import Link from 'next/link';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface DestinationCardProps {
  destination: {
    id: string;
    name: string;
    slug: string;
    shortDescription: string;
    image: string;
    type: string;
    budget: string;
  };
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Card hover>
      <div className="relative h-64">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium capitalize">
          {destination.budget}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
          <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded capitalize">
            {destination.type}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {destination.shortDescription}
        </p>
        <Link href={`/destinations/${destination.slug}`}>
          <Button variant="outline" size="sm" className="w-full">
            Explore Destination
          </Button>
        </Link>
      </div>
    </Card>
  );
}
