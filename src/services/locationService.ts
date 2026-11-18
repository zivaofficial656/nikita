import { LOCATIONS_DATA } from '../data/locations';
import { LocationItem } from '../types';

export const locationService = {
  async getAllLocations(): Promise<LocationItem[]> {
    return Promise.resolve([...LOCATIONS_DATA]);
  },

  async getLocationBySlug(slug: string): Promise<LocationItem | null> {
    const loc = LOCATIONS_DATA.find((l) => l.slug === slug);
    return Promise.resolve(loc || null);
  }
};
