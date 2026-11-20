import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CANONICAL_DOMAIN } from '../utils/seoSchema';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  schema?: object | object[];
  noIndex?: boolean;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = 'spa in bangalore, best spa in bangalore, spa near me, body massage in bangalore, body massage near me, couple spa in bangalore, luxury spa in bangalore, thai massage in bangalore, full body massage in bangalore, spa in koramangala, spa in koramangala bengaluru, body massage in koramangala bengaluru, couple spa in koramangala bengaluru, luxury spa in koramangala bengaluru, thai massage in koramangala bengaluru, full body massage in koramangala bengaluru, body massage spa in koramangala',
  canonical = '/',
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  schema,
  noIndex = false
}) => {
  // Format Title
  const formattedTitle = title.includes('Nikita Spa') ? title : `${title} | Nikita Spa Koramangala, Bengaluru`;

  // Format Canonical URL (Always HTTPS and canonical domain)
  const formattedCanonical = canonical.startsWith('http')
    ? canonical
    : `${CANONICAL_DOMAIN}${canonical.startsWith('/') ? canonical : `/${canonical}`}`;

  // Format Open Graph Image
  const formattedOgImage = ogImage.startsWith('http')
    ? ogImage
    : `${CANONICAL_DOMAIN}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;

  // Google Search Console Token from env
  const gscToken = import.meta.env.VITE_GSC_VERIFICATION_TOKEN;

  return (
    <Helmet>
      {/* Title & Description */}
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Robots Directive */}
      <meta
        name="robots"
        content={noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}
      />

      {/* Canonical Link */}
      <link rel="canonical" href={formattedCanonical} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={formattedCanonical} />
      <meta property="og:image" content={formattedOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Nikita Spa" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={formattedCanonical} />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={formattedOgImage} />

      {/* Google Search Console Meta Verification */}
      {gscToken && <meta name="google-site-verification" content={gscToken} />}

      {/* Dynamic JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};
