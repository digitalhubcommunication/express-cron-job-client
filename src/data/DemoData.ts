import {TCronHistory, TDistributor, TPackage } from "@/types/types";

function randomId(): string {
  return Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
}

// distributors
export const distributors: TDistributor[] = [
  {
    "_id": "dstr001abc",
    "name": "Global Tech Solutions",
    "phone": "+11234567890",
    "whatsApp": "+11234567890",
    "faceebook": "https://facebook.com/globaltech",
    "telegram": "https://t.me/globaltechsupport",
    "siteUrl": "https://globaltech.com"
  },
  {
    "_id": "dstr002def",
    "name": "Innovate Digital",
    "phone": "+442012345678",
    "whatsApp": "+442012345678",
    "faceebook": "https://facebook.com/innovatedigital",
    "telegram": "https://t.me/innovatedigital",
    "siteUrl": "https://innovatedigital.co.uk"
  },
  {
    "_id": "dstr003ghi",
    "name": "East Asia Connect",
    "phone": "+8613901234567",
    "whatsApp": "+8613901234567",
    "faceebook": "https://facebook.com/eastasiaconnect",
    "telegram": "https://t.me/eastasiaconnect",
    "siteUrl": "https://eastasiaconnect.cn"
  },
  {
    "_id": "dstr004jkl",
    "name": "African Innovations",
    "phone": "+27712345678",
    "whatsApp": "+27712345678",
    "faceebook": "https://facebook.com/africaninnovations",
    "telegram": "https://t.me/africaninnovations",
    "siteUrl": "https://africaninnovations.africa"
  },
  {
    "_id": "dstr005mno",
    "name": "Oceanic Networks",
    "phone": "+61412345678",
    "whatsApp": "+61412345678",
    "faceebook": "https://facebook.com/oceanicnetworks",
    "telegram": "https://t.me/oceanicnetworks",
    "siteUrl": "https://oceanicnet.au"
  },
  {
    "_id": "dstr006pqr",
    "name": "American Solutions",
    "phone": "+5511987654321",
    "whatsApp": "+5511987654321",
    "faceebook": "https://facebook.com/samsolutions",
    "telegram": "https://t.me/samsolutions",
    "siteUrl": "https://samsolutions.br"
  }
]



// country code and country data
export const countries = [
  // Common countries, starting with US for default
  { name: 'Bangladesh', code: 'BD', dialCode: '+880', flag: '🇧🇩', format: /^\d{10}$/, example: 'e.g., 1712345678' },
  { name: 'United States', code: 'US', dialCode: '+1', flag: '🇺🇸', format: /^\d{10}$/, example: 'e.g., 5551234567' }, 
  { name: 'Canada', code: 'CA', dialCode: '+1', flag: '🇨🇦', format: /^\d{10}$/, example: 'e.g., 5551234567' },
  { name: 'United Kingdom', code: 'GB', dialCode: '+44', flag: '🇬🇧', format: /^\d{9,10}$/, example: 'e.g., 7700900000' }, 
  { name: 'India', code: 'IN', dialCode: '+91', flag: '🇮🇳', format: /^\d{10}$/, example: 'e.g., 9876543210' }, 
  { name: 'Germany', code: 'DE', dialCode: '+49', flag: '🇩🇪', format: /^\d{8,11}$/, example: 'e.g., 3012345678' },
  { name: 'Australia', code: 'AU', dialCode: '+61', flag: '🇦🇺', format: /^\d{9}$/, example: 'e.g., 412345678' },
  { name: 'Japan', code: 'JP', dialCode: '+81', flag: '🇯🇵', format: /^\d{10,11}$/, example: 'e.g., 9012345678' }, 
  { name: 'Brazil', code: 'BR', dialCode: '+55', flag: '🇧🇷', format: /^\d{10,11}$/, example: 'e.g., 11987654321' },
  
  // Other countries added for better coverage
  { name: 'Afghanistan', code: 'AF', dialCode: '+93', flag: '🇦🇫', format: /^\d{9}$/, example: 'e.g., 701234567' },
  { name: 'Albania', code: 'AL', dialCode: '+355', flag: '🇦🇱', format: /^\d{8,9}$/, example: 'e.g., 691234567' },
  { name: 'Algeria', code: 'DZ', dialCode: '+213', flag: '🇩🇿', format: /^\d{9}$/, example: 'e.g., 555123456' },
  { name: 'Argentina', code: 'AR', dialCode: '+54', flag: '🇦🇷', format: /^\d{10,11}$/, example: 'e.g., 1123456789' },
  { name: 'Austria', code: 'AT', dialCode: '+43', flag: '🇦🇹', format: /^\d{10,11}$/, example: 'e.g., 6641234567' },
  { name: 'Belgium', code: 'BE', dialCode: '+32', flag: '🇧🇪', format: /^\d{8,9}$/, example: 'e.g., 471234567' },
  { name: 'Chile', code: 'CL', dialCode: '+56', flag: '🇨🇱', format: /^\d{8,9}$/, example: 'e.g., 912345678' },
  { name: 'China', code: 'CN', dialCode: '+86', flag: '🇨🇳', format: /^\d{11}$/, example: 'e.g., 13812345678' },
  { name: 'Colombia', code: 'CO', dialCode: '+57', flag: '🇨🇴', format: /^\d{10}$/, example: 'e.g., 3001234567' },
  { name: 'Denmark', code: 'DK', dialCode: '+45', flag: '🇩🇰', format: /^\d{8}$/, example: 'e.g., 12345678' },
  { name: 'Egypt', code: 'EG', dialCode: '+20', flag: '🇪🇬', format: /^\d{10}$/, example: 'e.g., 1001234567' },
  { name: 'France', code: 'FR', dialCode: '+33', flag: '🇫🇷', format: /^\d{9}$/, example: 'e.g., 612345678' },
  { name: 'Greece', code: 'GR', dialCode: '+30', flag: '🇬🇷', format: /^\d{10}$/, example: 'e.g., 6941234567' },
  { name: 'Hong Kong', code: 'HK', dialCode: '+852', flag: '🇭🇰', format: /^\d{8}$/, example: 'e.g., 12345678' },
  { name: 'Indonesia', code: 'ID', dialCode: '+62', flag: '🇮🇩', format: /^\d{9,12}$/, example: 'e.g., 81234567890' },
  { name: 'Ireland', code: 'IE', dialCode: '+353', flag: '🇮🇪', format: /^\d{9}$/, example: 'e.g., 871234567' },
  { name: 'Israel', code: 'IL', dialCode: '+972', flag: '🇮🇱', format: /^\d{9}$/, example: 'e.g., 501234567' },
  { name: 'Italy', code: 'IT', dialCode: '+39', flag: '🇮🇹', format: /^\d{9,10}$/, example: 'e.g., 3331234567' },
  { name: 'Kenya', code: 'KE', dialCode: '+254', flag: '🇰🇪', format: /^\d{9,10}$/, example: 'e.g., 701234567' },
  { name: 'Malaysia', code: 'MY', dialCode: '+60', flag: '🇲🇾', format: /^\d{9,10}$/, example: 'e.g., 121234567' },
  { name: 'Mexico', code: 'MX', dialCode: '+52', flag: '🇲🇽', format: /^\d{10}$/, example: 'e.g., 5512345678' },
  { name: 'Netherlands', code: 'NL', dialCode: '+31', flag: '🇳🇱', format: /^\d{9}$/, example: 'e.g., 612345678' },
  { name: 'New Zealand', code: 'NZ', dialCode: '+64', flag: '🇳🇿', format: /^\d{8,9}$/, example: 'e.g., 211234567' },
  { name: 'Nigeria', code: 'NG', dialCode: '+234', flag: '🇳🇬', format: /^\d{10}$/, example: 'e.g., 8031234567' },
  { name: 'Norway', code: 'NO', dialCode: '+47', flag: '🇳🇴', format: /^\d{8}$/, example: 'e.g., 12345678' },
  { name: 'Pakistan', code: 'PK', dialCode: '+92', flag: '🇵🇰', format: /^\d{10}$/, example: 'e.g., 3001234567' },
  { name: 'Peru', code: 'PE', dialCode: '+51', flag: '🇵🇪', format: /^\d{9}$/, example: 'e.g., 987654321' },
  { name: 'Philippines', code: 'PH', dialCode: '+63', flag: '🇵🇭', format: /^\d{10}$/, example: 'e.g., 9171234567' },
  { name: 'Poland', code: 'PL', dialCode: '+48', flag: '🇵🇱', format: /^\d{9}$/, example: 'e.g., 501234567' },
  { name: 'Portugal', code: 'PT', dialCode: '+351', flag: '🇵🇹', format: /^\d{9}$/, example: 'e.g., 911234567' },
  { name: 'Russia', code: 'RU', dialCode: '+7', flag: '🇷🇺', format: /^\d{10}$/, example: 'e.g., 9031234567' },
  { name: 'Saudi Arabia', code: 'SA', dialCode: '+966', flag: '🇸🇦', format: /^\d{9}$/, example: 'e.g., 501234567' },
  { name: 'Singapore', code: 'SG', dialCode: '+65', flag: '🇸🇬', format: /^\d{8}$/, example: 'e.g., 81234567' },
  { name: 'South Africa', code: 'ZA', dialCode: '+27', flag: '🇿🇦', format: /^\d{9}$/, example: 'e.g., 721234567' },
  { name: 'South Korea', code: 'KR', dialCode: '+82', flag: '🇰🇷', format: /^\d{10,11}$/, example: 'e.g., 1012345678' },
  { name: 'Spain', code: 'ES', dialCode: '+34', flag: '🇪🇸', format: /^\d{9}$/, example: 'e.g., 600123456' },
  { name: 'Sweden', code: 'SE', dialCode: '+46', flag: '🇸🇪', format: /^\d{10}$/, example: 'e.g., 701234567' },
  { name: 'Switzerland', code: 'CH', dialCode: '+41', flag: '🇨🇭', format: /^\d{9}$/, example: 'e.g., 791234567' },
  { name: 'Thailand', code: 'TH', dialCode: '+66', flag: '🇹🇭', format: /^\d{9,10}$/, example: 'e.g., 812345678' },
  { name: 'Turkey', code: 'TR', dialCode: '+90', flag: '🇹🇷', format: /^\d{10}$/, example: 'e.g., 5321234567' },
  { name: 'Ukraine', code: 'UA', dialCode: '+380', flag: '🇺🇦', format: /^\d{9}$/, example: 'e.g., 501234567' },
  { name: 'United Arab Emirates', code: 'AE', dialCode: '+971', flag: '🇦🇪', format: /^\d{9}$/, example: 'e.g., 501234567' },
  { name: 'Venezuela', code: 'VE', dialCode: '+58', flag: '🇻🇪', format: /^\d{10}$/, example: 'e.g., 4141234567' },
  { name: 'Vietnam', code: 'VN', dialCode: '+84', flag: '🇻🇳', format: /^\d{9,10}$/, example: 'e.g., 901234567' },
];