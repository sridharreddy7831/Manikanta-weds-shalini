
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
    time: '09:00 AM onwards',
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
  { url: '/11.jpeg' },
  { url: '/12.jpeg' },
  { url: '/13.jpg' },
];

export const VERTICAL_IMAGES = [
  { url: '/2.jpg' },
  { url: '/5.jpg' },
  { url: '/00.jpg' },
];

