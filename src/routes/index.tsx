import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { HomePage } from '../pages/Home/HomePage';
import { CompanionsPage } from '../pages/Companions/CompanionsPage';
import { ProfileDetailsPage } from '../pages/ProfileDetails/ProfileDetailsPage';
import { CategoriesPage } from '../pages/Categories/CategoriesPage';
import { CategoryDetailsPage } from '../pages/Categories/CategoryDetailsPage';
import { LocationsPage } from '../pages/Locations/LocationsPage';
import { LocationDetailsPage } from '../pages/Locations/LocationDetailsPage';
import { ServicesPage } from '../pages/Services/ServicesPage';
import { AboutPage } from '../pages/About/AboutPage';
import { GuidesPage } from '../pages/Guides/GuidesPage';
import { GuideDetailsPage } from '../pages/Guides/GuideDetailsPage';
import { ContactPage } from '../pages/Contact/ContactPage';
import { GalleryPage } from '../pages/Gallery/GalleryPage';
import { FAQPage } from '../pages/FAQ/FAQPage';
import { PrivacyPolicyPage } from '../pages/Legal/PrivacyPolicyPage';
import { TermsConditionsPage } from '../pages/Legal/TermsConditionsPage';
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="companions" element={<CompanionsPage />} />
        <Route path="companions/:id" element={<ProfileDetailsPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="categories/:slug" element={<CategoryDetailsPage />} />
        <Route path="locations" element={<LocationsPage />} />
        <Route path="locations/:slug" element={<LocationDetailsPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="guides" element={<GuidesPage />} />
        <Route path="guides/:slug" element={<GuideDetailsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms-and-conditions" element={<TermsConditionsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
