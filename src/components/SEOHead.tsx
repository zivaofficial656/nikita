import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = "Spa in Koramangala, Best Spa in Koramangala Bengaluru, Spa in Bangalore, Massage Centre in Koramangala, Full Body Massage in Koramangala, Luxury Spa in Bengaluru, Massage Services in Bangalore",
  canonical = "https://nikitaspa.com/",
  ogImage = "/images/n15.webp"
}) => {
  const fullTitle = title.includes("Nikita Spa") ? title : `${title} | Nikita Spa Koramangala, Bengaluru`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};
