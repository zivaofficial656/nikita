export interface ServiceItem {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  recommendedFor: string;
  durationOptions: string[];
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  tag: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'full-body-massage',
    name: 'Full Body Massage',
    shortDescription: 'A classic head-to-toe rejuvenation therapy designed to alleviate accumulated stress and restore body balance.',
    fullDescription: 'Our signature Full Body Massage provides a continuous, harmonious sequence of soothing strokes tailored to release chronic tension across every major muscle group. Experience total physical relief as gentle rhythm and therapeutic touch calm the nervous system.',
    benefits: [
      'Alleviates muscular tightness across neck, back, and legs',
      'Stimulates healthy blood and lymphatic circulation',
      'Promotes deep mental tranquility and restful sleep',
      'Leaves the skin nourished with premium botanical oils'
    ],
    recommendedFor: 'Individuals experiencing overall fatigue, work-related stress, or seeking comprehensive bodily renewal.',
    durationOptions: ['60 Minutes', '90 Minutes'],
    image: '/images/body-massage-spa-room-bengaluru.webp',
    imageAlt: 'Private full body massage suite with ambient under-bed lighting at Nikita Spa Bengaluru',
    imageWidth: 1360,
    imageHeight: 628,
    tag: 'Signature Experience'
  },
  {
    id: 'swedish-massage',
    name: 'Swedish Massage',
    shortDescription: 'Gentle, gliding strokes and light rhythmic kneading designed to optimize circulation and achieve effortless relaxation.',
    fullDescription: 'Originating from European wellness traditions, our Swedish Massage incorporates effleurage, gentle kneading, and circular frictions. This treatment warms the muscles and promotes fluid movement, making it the consummate choice for relaxation newcomers.',
    benefits: [
      'Gentle pressure ideal for sensitive or first-time guests',
      'Enhances oxygen flow and bodily flexibility',
      'Decreases cortisol levels to soothe everyday tension',
      'Relaxes stiff tendons without intense muscular pressure'
    ],
    recommendedFor: 'First-time spa visitors, professionals seeking mild-to-moderate pressure, and deep relaxation.',
    durationOptions: ['60 Minutes', '90 Minutes'],
    image: '/images/swedish-massage-room-bengaluru.webp',
    imageAlt: 'Swedish massage therapy room with calming floral ceiling design at Nikita Spa Bengaluru',
    imageWidth: 471,
    imageHeight: 1020,
    tag: 'Classic Relaxation'
  },
  {
    id: 'deep-tissue-massage',
    name: 'Deep Tissue Massage',
    shortDescription: 'Targeted firm pressure focusing on deeper muscular layers, chronic knots, and postural tension relief.',
    fullDescription: 'Focusing on the deeper layers of muscle tissue, tendons, and fascia, this specialized therapy utilizes deliberate, concentrated strokes. Our therapists work carefully to break down rigid knots, relieve chronic aches, and restore natural posture.',
    benefits: [
      'Breaks down chronic adhesions and persistent muscle knots',
      'Releases lower back stiffness and upper shoulder tension',
      'Accelerates muscular recovery after physical strain',
      'Enhances long-term postural alignment and range of motion'
    ],
    recommendedFor: 'Desk workers, athletes, and anyone enduring chronic back, shoulder, or neck stiffness.',
    durationOptions: ['60 Minutes', '90 Minutes'],
    image: '/images/deep-tissue-massage-suite-koramangala.webp',
    imageAlt: 'Deep tissue massage suite with attached private glass shower cubicle at Nikita Spa Koramangala',
    imageWidth: 1360,
    imageHeight: 628,
    tag: 'Therapeutic Tension Relief'
  },
  {
    id: 'thai-massage',
    name: 'Thai Massage',
    shortDescription: 'Ancient therapeutic stretching and rhythmic acupressure along energy pathways to revitalize body vitality.',
    fullDescription: 'Known traditionally as Nuad Bo-Rarn, Thai massage combines assisted yoga-like stretches with gentle compression along the body energy lines. Performed on a supportive comfortable mattress, this interactive therapy restores flexibility and boosts vital energy.',
    benefits: [
      'Dramatically enhances joint mobility and muscle flexibility',
      'Relieves spinal tension through assisted passive stretches',
      'Balances energy channels and re-energizes sluggish fatigue',
      'Combines gentle movement with deep mental clarity'
    ],
    recommendedFor: 'Those who enjoy active stretching, improved mobility, and energetic revitalization.',
    durationOptions: ['60 Minutes', '90 Minutes'],
    image: '/images/thai-massage-platform-suite-koramangala.webp',
    imageAlt: 'Thai massage platform bed with tranquil blue mood lighting at Nikita Spa Koramangala',
    imageWidth: 476,
    imageHeight: 1020,
    tag: 'Ancient Mobility'
  },
  {
    id: 'aromatherapy-massage',
    name: 'Aromatherapy Massage',
    shortDescription: 'Infusion of pure organic botanical essential oils harmonized with soothing strokes to balance senses and spirit.',
    fullDescription: 'A multisensory journey blending customized pure botanical essential oils—such as soothing lavender, uplifting bergamot, or grounding sandalwood—with flowing, synchronized strokes. Inhaling natural plant essences works in tandem with massage to melt anxiety.',
    benefits: [
      'Alleviates emotional strain and mental restlessness',
      'Nourishes the skin with pure plant-based botanical extracts',
      'Custom scent profiles selected based on your state of mind',
      'Restores deep inner equilibrium and peaceful mood'
    ],
    recommendedFor: 'Anyone suffering from sensory burnout, sleep disturbances, or longing for emotional calm.',
    durationOptions: ['60 Minutes', '90 Minutes'],
    image: '/images/aromatherapy-massage-room-bengaluru.webp',
    imageAlt: 'Aromatherapy massage suite with tranquil ambient lighting at Nikita Spa Bengaluru',
    imageWidth: 471,
    imageHeight: 1020,
    tag: 'Aromatic Sensory'
  },
  {
    id: 'couple-massage',
    name: 'Couple Massage',
    shortDescription: 'A serene shared wellness retreat in our private couple suite, curated for side-by-side harmonious relaxation.',
    fullDescription: 'Enjoy a luxurious, shared tranquil escape alongside your partner or loved one. Set in our softly illuminated suite with warm aromatic candles, two skilled therapists deliver synchronized treatments tailored to each individuals personal preferences.',
    benefits: [
      'Private sanctuary suite designed for shared tranquility',
      'Personalized pressure and oil selections for each partner',
      'Uninterrupted quality time free from digital distractions',
      'Complementary herbal refreshment ritual post-treatment'
    ],
    recommendedFor: 'Couples, anniversaries, celebrations, or friends wishing to unwind together in serene privacy.',
    durationOptions: ['60 Minutes', '90 Minutes'],
    image: '/images/couple-spa-room-jacuzzi-koramangala.webp',
    imageAlt: 'Private couple massage suite with twin beds and hydrotherapy jacuzzi at Nikita Spa Koramangala',
    imageWidth: 1360,
    imageHeight: 628,
    tag: 'Romantic Sanctuary'
  },
  {
    id: 'relaxation-therapy',
    name: 'Relaxation Therapy',
    shortDescription: 'A slow-paced, tranquil session curated to ease nervous fatigue and invite quiet stillness into body and mind.',
    fullDescription: 'Crafted specifically to decelerate a busy lifestyle, this gentle, unhurried therapy combines slow therapeutic cadences, warm herbal compresses, and calming pressure point touch. It encourages the body to switch effortlessly into rest-and-digest mode.',
    benefits: [
      'Soothes hyperactivity of the autonomic nervous system',
      'Warm compresses ease lingering shoulder and back heaviness',
      'Provides quiet mindfulness in an undisturbed acoustic environment',
      'Leaves you deeply centered, refreshed, and recharged'
    ],
    recommendedFor: 'Busy executives, caregivers, and anyone in need of quiet restorative downtime.',
    durationOptions: ['60 Minutes', '90 Minutes'],
    image: '/images/spa-hydrotherapy-jacuzzi-ritual-koramangala.webp',
    imageAlt: 'Relaxation therapy hydrotherapy jacuzzi bath ritual at Nikita Spa Koramangala Bengaluru',
    imageWidth: 488,
    imageHeight: 1020,
    tag: 'Restorative Care'
  }
];
