
import { WeddingEvent } from './types';

export const COLORS = {
  primary: '#800000', // Deep Maroon
  secondary: '#FFD700', // Gold
  accent: '#FF8C00', // Dark Orange/Saffron
  background: '#FDF5E6', // Old Lace
  text: '#4A0E0E', // Darker Maroon for text
};

export const WEDDING_DATE = new Date('2026-08-15T01:05:00');

export const WEDDING_EVENTS: WeddingEvent[] = [
  {
    id: 'haldi',
    name: 'Haldi Ceremony',
    date: 'Thursday, August 13, 2026',
    time: '02:00 PM onwards',
    venue: "Groom's House, Yeguvathotlipalli",
    description: 'A traditional pre-wedding ritual of applying sacred turmeric and oils, marking the commencement of wedding celebrations.',
    icon: '✨',
    color: '#FFD700'
  },
  {
    id: 'reception',
    name: 'Reception',
    date: 'Friday, August 14, 2026',
    time: 'Evening 05:00 PM onwards',
    venue: 'Polam Siddareddy Function Hall, Kokkanti Cross',
    description: 'Join us for an evening of celebration with dinner and blessings.',
    icon: '🥂',
    color: '#C0C0C0'
  },
  {
    id: 'muhurtham',
    name: 'Subha Muhurtham',
    date: 'Saturday, August 15, 2026',
    time: 'Early Morning 01:05 AM - 01:49 AM (Vrushaba Lagnam)',
    venue: 'Polam Siddareddy Function Hall, Kokkanti Cross, Pin - 515571',
    description: 'The sacred moment of union where Manikanta & Shalini tie the knot in the presence of family and the divine.',
    icon: '🔥',
    color: '#800000'
  }
];

export const SLOKAS = [
  "వక్రతుండ మహాకాయ సూర్యకోటి సమప్రభ। నిర్విఘ్నం కురు మే దేవ సర్వకార్యేషు సర్వదా॥",

  "ఓం సహ నావవతు। సహ నౌ భునక్తు। సహ వీర్యం కరవావహై। తేజస్వి నావధీతమస్తు మా విద్విషావహై॥",

  "యదేతద్ధృదయం తవ తదస్తు హృదయం మమ। యదిదం హృదయం మమ తదస్తు హృదయం తవ॥"
];

export const HORIZONTAL_IMAGES = [
  { url: '/1.jpeg' },
  { url: '/22.jpeg' },
  { url: '/33.jpeg' },
  { url: '/44.jpeg' },
  { url: '/5.jpeg' },
];



