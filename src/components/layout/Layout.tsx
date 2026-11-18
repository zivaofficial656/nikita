import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { AgeVerificationBanner } from '../common/AgeVerificationBanner';
import { ScrollToTop } from './ScrollToTop';
import { FloatingContactDock } from './FloatingContactDock';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-ivory text-black selection:bg-burgundy selection:text-white pb-16 sm:pb-0">
      <ScrollToTop />
      <AgeVerificationBanner />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingContactDock />
    </div>
  );
};
