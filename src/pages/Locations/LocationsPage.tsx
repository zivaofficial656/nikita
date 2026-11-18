import React from 'react';
import { LOCATIONS_DATA } from '../../data/locations';
import { LocationCard } from '../../components/locations/LocationCard';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Compass } from 'lucide-react';

export const LocationsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumb items={[{ label: 'Bangalore Enclaves' }]} />

      <div className="mt-4 mb-12">
        <SectionHeading
          subtitle="Silicon Plateau Neighborhoods"
          title="Bangalore Enclaves & Districts"
          description="From the colonial avenues and UB City rooftops of MG Road to the cosmopolitan dining scene of Indiranagar and high-tech hotel pavilions of Whitefield, discover companions attuned to Bangalore’s distinct social rhythms."
          align="left"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {LOCATIONS_DATA.map((loc) => (
          <LocationCard key={loc.id} location={loc} />
        ))}
      </div>

      {/* City Guide Info Banner */}
      <div className="mt-16 bg-white rounded-3xl p-6 sm:p-10 border border-gold-300 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-burgundy">
            <Compass className="w-4 h-4 text-gold-600" />
            <span>Public Meeting Protocol</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-black">
            Public Venue Rendezvous Across All Bangalore Enclaves
          </h3>
          <p className="text-sm text-black leading-relaxed font-normal">
            For security, mutual peace of mind, and mutual comfort, all initial companionship introductions in Bengaluru must occur in public, verified luxury commercial venues—such as five-star hotel lounges, fine dining bistros, or private social clubs. Private residence meetings for first introductions are strictly prohibited.
          </p>
        </div>

        <div className="lg:col-span-4 bg-ivory-100 p-5 rounded-2xl border border-borderCream text-xs text-black space-y-2">
          <span className="font-bold block text-burgundy uppercase tracking-wider">Top Recommended Spots:</span>
          <ul className="space-y-1.5 text-black font-normal">
            <li>• UB City Dining Promenade (Central)</li>
            <li>• The Leela Palace Royal Ballroom (East)</li>
            <li>• 100 Feet Road Cocktail Lounges (Indiranagar)</li>
            <li>• The Ritz-Carlton Lantern Terrace (MG Road)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
