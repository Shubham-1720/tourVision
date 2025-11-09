'use client';

import { useState, useMemo } from 'react';
import DestinationCard from '@/components/features/DestinationCard';
import { destinations } from '@/lib/data/destinations';

export default function DestinationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [budgetFilter, setBudgetFilter] = useState('all');
  const [seasonFilter, setSeasonFilter] = useState('all');

  const filteredDestinations = useMemo(() => {
    return destinations.filter((dest) => {
      const matchesSearch =
        dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.region.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = typeFilter === 'all' || dest.type === typeFilter;
      const matchesBudget = budgetFilter === 'all' || dest.budget === budgetFilter;
      const matchesSeason = seasonFilter === 'all' || dest.season === seasonFilter || dest.season === 'all';

      return matchesSearch && matchesType && matchesBudget && matchesSeason;
    });
  }, [searchTerm, typeFilter, budgetFilter, seasonFilter]);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Explore Destinations
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Discover amazing places around the world
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white shadow-md sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="beach">Beach</option>
              <option value="mountain">Mountain</option>
              <option value="city">City</option>
              <option value="cultural">Cultural</option>
              <option value="adventure">Adventure</option>
              <option value="wildlife">Wildlife</option>
            </select>
            <select
              value={budgetFilter}
              onChange={(e) => setBudgetFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Budgets</option>
              <option value="low">Budget-Friendly</option>
              <option value="medium">Mid-Range</option>
              <option value="high">Luxury</option>
            </select>
            <select
              value={seasonFilter}
              onChange={(e) => setSeasonFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Seasons</option>
              <option value="spring">Spring</option>
              <option value="summer">Summer</option>
              <option value="fall">Fall</option>
              <option value="winter">Winter</option>
            </select>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredDestinations.length} of {destinations.length} destinations
            </p>
          </div>
          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No destinations found matching your criteria. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
