import { COMPANIONS_DATA } from '../data/companions';
import { Companion } from '../types';

export const companionService = {
  // Simulates async API call with fallbacks for standalone Vite demo
  async getAllCompanions(): Promise<Companion[]> {
    return Promise.resolve([...COMPANIONS_DATA]);
  },

  async getCompanionById(id: string): Promise<Companion | null> {
    const companion = COMPANIONS_DATA.find((c) => c.id === id);
    return Promise.resolve(companion || null);
  },

  async getCompanionsByLocation(locationSlug: string): Promise<Companion[]> {
    const list = COMPANIONS_DATA.filter((c) => c.locationSlug === locationSlug);
    return Promise.resolve(list);
  },

  async getCompanionsByCategory(categorySlug: string): Promise<Companion[]> {
    const list = COMPANIONS_DATA.filter((c) => c.categorySlugs.includes(categorySlug));
    return Promise.resolve(list);
  },

  async searchCompanions(params: {
    location?: string;
    category?: string;
    query?: string;
  }): Promise<Companion[]> {
    let results = [...COMPANIONS_DATA];

    if (params.location && params.location !== 'all') {
      results = results.filter((c) => c.locationSlug === params.location);
    }

    if (params.category && params.category !== 'all') {
      results = results.filter((c) => c.categorySlugs.includes(params.category!));
    }

    if (params.query && params.query.trim()) {
      const q = params.query.toLowerCase().trim();
      results = results.filter((c) =>
        c.name.toLowerCase().includes(q) ||
        c.location.toLowerCase().includes(q) ||
        c.bio.toLowerCase().includes(q) ||
        c.interests.some((i) => i.toLowerCase().includes(q)) ||
        c.servicesOffered.some((s) => s.toLowerCase().includes(q))
      );
    }

    return Promise.resolve(results);
  }
};
