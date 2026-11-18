import { CATEGORIES_DATA } from '../data/categories';
import { CategoryItem } from '../types';

export const categoryService = {
  async getAllCategories(): Promise<CategoryItem[]> {
    return Promise.resolve([...CATEGORIES_DATA]);
  },

  async getCategoryBySlug(slug: string): Promise<CategoryItem | null> {
    const cat = CATEGORIES_DATA.find((c) => c.slug === slug);
    return Promise.resolve(cat || null);
  }
};
