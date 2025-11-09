'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Service Selection
    serviceType: '',
    destination: '',
    // Step 2: Dates & Guests
    startDate: '',
    endDate: '',
    adults: 2,
    children: 0,
    // Step 3: Additional Services
    tourGuide: false,
    transportation: false,
    insurance: false,
    // Step 4: Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const calculatePrice = () => {
    let basePrice = 500;
    if (formData.serviceType === 'package') basePrice = 1500;
    if (formData.serviceType === 'hotel') basePrice = 150;
    if (formData.serviceType === 'transportation') basePrice = 80;
    
    const guestMultiplier = formData.adults + formData.children * 0.7;
    let total = basePrice * guestMultiplier;
    
    if (formData.tourGuide) total += 150;
    if (formData.transportation) total += 100;
    if (formData.insurance) total += 50;
    
    return total.toFixed(2);
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      nextStep();
    } else {
      alert('Booking submitted! (This is a demo - no actual booking is made)');
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2 font-heading">Book Your Journey</h1>
          <p className="text-primary-100">Complete the form to reserve your travel experience</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              {['Service', 'Dates', 'Add-ons', 'Details'].map((label, index) => (
                <div key={index} className="flex-1 text-center">
                  <div
                    className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center font-bold ${
                      step > index + 1
                        ? 'bg-green-500 text-white'
                        : step === index + 1
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}
                  >
                    {step > index + 1 ? '✓' : index + 1}
                  </div>
                  <div className="text-sm mt-2 font-medium">{label}</div>
                </div>
              ))}
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-primary-600 rounded-full transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <Card className="p-8 mb-6">
              {/* Step 1: Service Selection */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Select Your Service</h2>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type *
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      required
                    >
                      <option value="">Choose a service...</option>
                      <option value="package">Complete Travel Package</option>
                      <option value="hotel">Hotel Only</option>
                      <option value="tour">Tour Guide Only</option>
                      <option value="transportation">Transportation Only</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Destination *
                    </label>
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      required
                    >
                      <option value="">Choose a destination...</option>
                      <option value="maldives">Maldives</option>
                      <option value="switzerland">Swiss Alps</option>
                      <option value="japan">Kyoto, Japan</option>
                      <option value="greece">Santorini, Greece</option>
                      <option value="peru">Machu Picchu, Peru</option>
                      <option value="dubai">Dubai, UAE</option>
                      <option value="bali">Bali, Indonesia</option>
                      <option value="iceland">Iceland</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 2: Dates & Guests */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Travel Dates & Guests</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Start Date *"
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      label="End Date *"
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Number of Adults *"
                      type="number"
                      name="adults"
                      min="1"
                      max="20"
                      value={formData.adults}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      label="Number of Children"
                      type="number"
                      name="children"
                      min="0"
                      max="10"
                      value={formData.children}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Additional Services */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Services</h2>
                  <div className="space-y-4">
                    <label className="flex items-start p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="checkbox"
                        name="tourGuide"
                        checked={formData.tourGuide}
                        onChange={handleChange}
                        className="mt-1 mr-3 w-5 h-5 text-primary-600"
                      />
                      <div className="flex-1">
                        <div className="font-semibold">Professional Tour Guide</div>
                        <div className="text-sm text-gray-600">Expert local guide for your trip (+$150)</div>
                      </div>
                    </label>
                    <label className="flex items-start p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="checkbox"
                        name="transportation"
                        checked={formData.transportation}
                        onChange={handleChange}
                        className="mt-1 mr-3 w-5 h-5 text-primary-600"
                      />
                      <div className="flex-1">
                        <div className="font-semibold">Airport Transportation</div>
                        <div className="text-sm text-gray-600">Round-trip airport transfers (+$100)</div>
                      </div>
                    </label>
                    <label className="flex items-start p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="checkbox"
                        name="insurance"
                        checked={formData.insurance}
                        onChange={handleChange}
                        className="mt-1 mr-3 w-5 h-5 text-primary-600"
                      />
                      <div className="flex-1">
                        <div className="font-semibold">Travel Insurance</div>
                        <div className="text-sm text-gray-600">Comprehensive travel protection (+$50)</div>
                      </div>
                    </label>
                  </div>
                </div>
              )}

              {/* Step 4: Personal Information */}
              {step === 4 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="First Name *"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      label="Last Name *"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Email Address *"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      label="Phone Number *"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Special Requests or Dietary Requirements
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      placeholder="Any special requirements or requests..."
                    />
                  </div>
                </div>
              )}
            </Card>

            {/* Price Summary */}
            <Card className="p-6 mb-6 bg-primary-50">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Price Summary</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Base Price</span>
                  <span>${calculatePrice()}</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold text-lg">
                  <span>Total Estimate</span>
                  <span className="text-primary-600">${calculatePrice()}</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-4">
                * Final price may vary based on availability and additional services
              </p>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-between gap-4">
              {step > 1 && (
                <Button type="button" variant="outline" size="lg" onClick={prevStep}>
                  Previous
                </Button>
              )}
              {step < 4 ? (
                <Button type="submit" variant="primary" size="lg" className="ml-auto">
                  Continue
                </Button>
              ) : (
                <Button type="submit" variant="primary" size="lg" className="ml-auto">
                  Complete Booking
                </Button>
              )}
            </div>
          </form>

          <div className="mt-8 text-center text-sm text-gray-600">
            <p>
              Need help? <Link href="/contact" className="text-primary-600 hover:underline">Contact our support team</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
