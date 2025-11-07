import {TCronHistory, TDistributor, TPackage } from "@/types/types";

function randomId(): string {
  return Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
}

export const cronHistories: TCronHistory[] = [
  {
    _id: randomId(),
    domain: "example.com",
    status: 200,
    type: "default",
    success: true,
    responseTime: 185,
    message: "Operation successful.",
  },
  {
    _id: randomId(),
    domain: "test-site.org",
    status: 404,
    type: "manual",
    success: false,
    responseTime: 92,
    message: "Resource not found.",
  },
  {
    _id: randomId(),
    domain: "my-app.net",
    status: 200,
    type: "default",
    success: true,
    responseTime: 340,
    message: "Data retrieved successfully.",
  },
  {
    _id: randomId(),
    domain: "dev.io",
    status: 500,
    type: "manual",
    success: false,
    responseTime: 1200,
    message: "Internal server error.",
  },
  {
    _id: randomId(),
    domain: "production.xyz",
    status: 200,
    type: "default",
    success: true,
    responseTime: 75,
    message: "Request processed.",
  },
  {
    _id: randomId(),
    domain: "staging.info",
    status: 401,
    type: "default",
    success: false,
    responseTime: 60,
    message: "Authentication failed.",
  },
  {
    _id: randomId(),
    domain: "blog.co",
    status: 200,
    type: "manual",
    success: true,
    responseTime: 210,
    message: "Post updated.",
  },
  {
    _id: randomId(),
    domain: "dashboard.ai",
    status: 403,
    type: "manual",
    success: false,
    responseTime: 88,
    message: "Permission denied.",
  },
  {
    _id: randomId(),
    domain: "ecom.shop",
    status: 200,
    type: "default",
    success: true,
    responseTime: 99,
    message: "Order placed successfully.",
  },
  {
    _id: randomId(),
    domain: "news.site",
    status: 200,
    type: "default",
    success: true,
    responseTime: 130,
    message: "Content loaded.",
  },
  {
    _id: randomId(),
    domain: "portal.cloud",
    status: 503,
    type: "manual",
    success: false,
    responseTime: 1500,
    message: "Service unavailable.",
  },
  {
    _id: randomId(),
    domain: "docs.dev",
    status: 200,
    type: "default",
    success: true,
    responseTime: 250,
    message: "Document fetched.",
  },
  {
    _id: randomId(),
    domain: "metrics.data",
    status: 200,
    type: "manual",
    success: true,
    responseTime: 600,
    message: "Metrics retrieved.",
  },
  {
    _id: randomId(),
    domain: "backup.storage",
    status: 200,
    type: "default",
    success: true,
    responseTime: 780,
    message: "Backup completed.",
  },
  {
    _id: randomId(),
    domain: "admin.panel",
    status: 400,
    type: "manual",
    success: false,
    responseTime: 55,
    message: "Bad request parameters.",
  },
  {
    _id: randomId(),
    domain: "marketing.tools",
    status: 200,
    type: "default",
    success: true,
    responseTime: 310,
    message: "Campaign updated.",
  },
  {
    _id: randomId(),
    domain: "support.help",
    status: 200,
    type: "default",
    success: true,
    responseTime: 115,
    message: "Ticket created.",
  },
  {
    _id: randomId(),
    domain: "analytics.app",
    status: 504,
    type: "manual",
    success: false,
    responseTime: 2000,
    message: "Gateway timeout.",
  },
  {
    _id: randomId(),
    domain: "profile.me",
    status: 200,
    type: "default",
    success: true,
    responseTime: 90,
    message: "Profile loaded.",
  },
];


// ====== packages 
export const cronPackages: TPackage[] = [
  {
    "_id": "65f0e9b2a7c3d4e5f6a7b854",
    "name": "Trial",
    "validity": 2,
    "intervalInMS": 7000,
    "price": 0,
    "manualCronLimit": 0,
    "status": "unavailable"
  },
  {
    "_id": "65f0e9b2a7c3d4e5f6a7b8c9",
    "name": "Silver",
    "validity": 30,
    "intervalInMS": 7000,
    "price": 19.99,
    "manualCronLimit": 3,
    "status": "available"
  },
  {
    "_id": "65f0e9b2a7c3d4e5f6a7b8da",
    "name": "Diamond",
    "validity": 30,
    "intervalInMS": 5000,
    "price": 29.99,
    "manualCronLimit": 5,
    "status": "available"
  },
  {
    "_id": "65f0e9b2a7c3d4e5f6a7b8eb",
    "name": "Platinium",
    "validity": 30,
    "intervalInMS": 3000,
    "price": 39.99,
    "manualCronLimit": 7,
    "status": "available"
  }
]


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
