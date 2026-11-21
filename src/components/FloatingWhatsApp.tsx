import React from 'react';
import { FloatingContactButtons } from './FloatingContactButtons';

/**
 * Re-exporting FloatingContactButtons to maintain backward compatibility
 * while providing both Call and WhatsApp floating buttons.
 */
export const FloatingWhatsApp: React.FC = () => {
  return <FloatingContactButtons />;
};
