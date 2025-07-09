import { IUser, TCronHistory, TDistributor, TPackage } from "@/types/types";

export const user: IUser = {
  name: "John Doe",
  role: "admin",
  status: 'enabled',
  domain: "example.com",
  defaultDomains: [
    {
      _id: "34234",
      status: "enabled",
      url: "example.com",
    },
    {
      _id: "3444334",
      status: "enabled",
      url: "example.com",
    },
  ],
  allowedToAddManualDomains: true,
  email: "example.gmail.com",
  manualCronCount: 5,
  mobile: 4342410433,
  notificationPreferences: {
    telegram: true,
    email: true
  },
  packageExpiresAt: new Date().toISOString(),
  profile: {
    avatarUrl: undefined,
    bio: "Short bio of the user"
  },
  subscription: {
    type: "trial",
    manualCronLimit: 0
  },
  telegramConnected: false,
  twoFactorEnabled: false,
  username: 'example.user',
  manualDomains: [
    {
      _id: "md1",
      status: "enabled",
      url: "manual1.com",
      title: "Manual Domain 1",
      executionTime: 120
    },
    {
      _id: "md2",
      status: "disabled",
      url: "longmanualdomain12.com",
      title: "Manual Domain 2",
      executionTime: 300
    },
    {
      _id: "md3",
      status: "enabled",
      url: "anotherlongdomain34.net",
      title: "Manual Domain 3",
      executionTime: 45
    },
    {
      _id: "md4",
      status: "enabled",
      url: "manual4.dev",
      title: "Manual Domain 4",
      executionTime: 200
    }
  ],
  telegramId: undefined,
};




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
  export const cronPackages:TPackage[] = [
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
    "intervalInMS": 7000,
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
export const distributors:TDistributor[] = [
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





// TODO: 
// ========= demo uses data ========
export const demoUsers:IUser[] = [
  {
    "name": "Alice Smith",
    "email": "alice.smith@example.com",
    "username": "alicesmith",
    "mobile": 1700123456,
    "status": "enabled",
    "role": "user",
    "domain": "example.com",
    "defaultDomains": [
      {
        "status": "enabled",
        "url": "https://www.example.com",
        "_id": "d1a1b1c1d1e1"
      },
      {
        "status": "disabled",
        "url": "https://www.anothersite.org",
        "_id": "d2a2b2c2d2e2"
      }
    ],
    "manualDomains": [
      {
        "status": "enabled",
        "url": "https://manualsite1.net",
        "title": "Manual Site One",
        "executionTime": 120,
        "_id": "m1a1b1c1d1e1"
      }
    ],
    "telegramId": "alice_tg",
    "telegramConnected": true,
    "packageExpiresAt": "2025-12-31T23:59:59Z",
    "subscription": {
      "type": "gold",
      "manualCronLimit": 10
    },
    "manualCronCount": 5,
    "allowedToAddManualDomains": true,
    "notificationPreferences": {
      "telegram": true,
      "email": true
    },
    "twoFactorEnabled": true,
    "profile": {
      "avatarUrl": "https://placehold.co/150x150/007bff/ffffff?text=AS",
      "bio": "Enthusiastic user of the platform."
    }
  },
  {
    "name": "Bob Johnson",
    "email": "bob.johnson@example.com",
    "username": "bobjohnson",
    "mobile": 1700234567,
    "status": "enabled",
    "role": "user",
    "domain": "test.org",
    "defaultDomains": [
      {
        "status": "enabled",
        "url": "https://www.test.org",
        "_id": "d3a3b3c3d3e3"
      }
    ],
    "telegramConnected": false,
    "packageExpiresAt": "2025-11-15T12:00:00Z",
    "subscription": {
      "type": "silver",
      "manualCronLimit": 3
    },
    "manualCronCount": 2,
    "allowedToAddManualDomains": true,
    "notificationPreferences": {
      "telegram": false,
      "email": true
    },
    "twoFactorEnabled": false,
    "profile": {}
  },
  {
    "name": "Charlie Brown",
    "email": "charlie.brown@example.com",
    "username": "charlieb",
    "mobile": 1700345678,
    "status": "enabled",
    "role": "user",
    "domain": "mysite.net",
    "defaultDomains": [
      {
        "status": "enabled",
        "url": "https://www.mysite.net",
        "_id": "d4a4b4c4d4e4"
      }
    ],
    "manualDomains": [
      {
        "status": "enabled",
        "url": "https://projectx.com",
        "title": "Project X",
        "executionTime": 300,
        "_id": "m2a2b2c2d2e2"
      },
      {
        "status": "disabled",
        "url": "https://oldproject.io",
        "title": "Old Project",
        "executionTime": 60,
        "_id": "m3a3b3c3d3e3"
      }
    ],
    "telegramConnected": true,
    "packageExpiresAt": "2026-01-20T10:30:00Z",
    "subscription": {
      "type": "diamond",
      "manualCronLimit": 20
    },
    "manualCronCount": 8,
    "allowedToAddManualDomains": true,
    "notificationPreferences": {
      "telegram": true,
      "email": true
    },
    "twoFactorEnabled": true,
    "profile": {
      "bio": "Loves automating tasks."
    }
  },
  {
    "name": "Diana Prince",
    "email": "diana.prince@example.com",
    "username": "wonderwoman",
    "mobile": 1700456789,
    "status": "enabled",
    "role": "user",
    "domain": "hero.org",
    "defaultDomains": [
      {
        "status": "enabled",
        "url": "https://www.hero.org",
        "_id": "d5a5b5c5d5e5"
      }
    ],
    "telegramConnected": false,
    "packageExpiresAt": "2025-09-01T08:00:00Z",
    "subscription": {
      "type": "trial",
      "manualCronLimit": 1
    },
    "manualCronCount": 0,
    "allowedToAddManualDomains": false,
    "notificationPreferences": {
      "telegram": false,
      "email": false
    },
    "twoFactorEnabled": false,
    "profile": {
      "avatarUrl": "https://placehold.co/150x150/ff0000/ffffff?text=DP"
    }
  },
  {
    "name": "Eve Adams",
    "email": "eve.adams@example.com",
    "username": "evea",
    "mobile": 1700567890,
    "status": "disabled",
    "role": "user",
    "domain": "disabled.com",
    "defaultDomains": [
      {
        "status": "disabled",
        "url": "https://www.disabled.com",
        "_id": "d6a6b6c6d6e6"
      }
    ],
    "telegramConnected": false,
    "packageExpiresAt": "2024-06-01T00:00:00Z",
    "subscription": {
      "type": "silver",
      "manualCronLimit": 3
    },
    "manualCronCount": 1,
    "allowedToAddManualDomains": false,
    "notificationPreferences": {
      "telegram": false,
      "email": true
    },
    "twoFactorEnabled": false,
    "profile": {}
  },
  {
    "name": "Frank White",
    "email": "frank.white@example.com",
    "username": "frankw",
    "mobile": 1700678901,
    "status": "enabled",
    "role": "user",
    "domain": "devsite.io",
    "defaultDomains": [
      {
        "status": "enabled",
        "url": "https://www.devsite.io",
        "_id": "d7a7b7c7d7e7"
      }
    ],
    "manualDomains": [
      {
        "status": "enabled",
        "url": "https://staging.dev",
        "title": "Staging Env",
        "executionTime": 90,
        "_id": "m4a4b4c4d4e4"
      }
    ],
    "telegramConnected": true,
    "packageExpiresAt": "2026-03-01T14:00:00Z",
    "subscription": {
      "type": "gold",
      "manualCronLimit": 10
    },
    "manualCronCount": 7,
    "allowedToAddManualDomains": true,
    "notificationPreferences": {
      "telegram": true,
      "email": true
    },
    "twoFactorEnabled": true,
    "profile": {
      "bio": "Developer and automation enthusiast."
    }
  },
  {
    "name": "Grace Green",
    "email": "grace.green@example.com",
    "username": "graceg",
    "mobile": 1700789012,
    "status": "pending",
    "role": "user",
    "domain": "newuser.com",
    "defaultDomains": [],
    "telegramConnected": false,
    "packageExpiresAt": "2025-08-01T00:00:00Z",
    "subscription": {
      "type": "trial",
      "manualCronLimit": 1
    },
    "manualCronCount": 0,
    "allowedToAddManualDomains": false,
    "notificationPreferences": {
      "telegram": false,
      "email": true
    },
    "twoFactorEnabled": false,
    "profile": {}
  },
  {
    "name": "Harry Black",
    "email": "harry.black@example.com",
    "username": "harryb",
    "mobile": 1700890123,
    "status": "enabled",
    "role": "user",
    "domain": "corporate.com",
    "defaultDomains": [
      {
        "status": "enabled",
        "url": "https://www.corporate.com",
        "_id": "d8a8b8c8d8e8"
      }
    ],
    "telegramConnected": true,
    "packageExpiresAt": "2026-06-30T23:59:59Z",
    "subscription": {
      "type": "diamond",
      "manualCronLimit": 20
    },
    "manualCronCount": 15,
    "allowedToAddManualDomains": true,
    "notificationPreferences": {
      "telegram": true,
      "email": true
    },
    "twoFactorEnabled": true,
    "profile": {
      "avatarUrl": "https://placehold.co/150x150/000000/ffffff?text=HB",
      "bio": "Business user focused on efficiency."
    }
  },
  {
    "name": "Ivy Blue",
    "email": "ivy.blue@example.com",
    "username": "ivyb",
    "mobile": 1700901234,
    "status": "enabled",
    "role": "user",
    "domain": "personal.blog",
    "defaultDomains": [
      {
        "status": "enabled",
        "url": "https://www.personal.blog",
        "_id": "d9a9b9c9d9e9"
      }
    ],
    "telegramConnected": false,
    "packageExpiresAt": "2025-10-01T09:00:00Z",
    "subscription": {
      "type": "silver",
      "manualCronLimit": 3
    },
    "manualCronCount": 3,
    "allowedToAddManualDomains": false,
    "notificationPreferences": {
      "telegram": false,
      "email": true
    },
    "twoFactorEnabled": false,
    "profile": {}
  },
  {
    "name": "Jack Red",
    "email": "jack.red@example.com",
    "username": "jackr",
    "mobile": 1700012345,
    "status": "blocked",
    "role": "user",
    "domain": "blocked.site",
    "defaultDomains": [
      {
        "status": "disabled",
        "url": "https://www.blocked.site",
        "_id": "d10a10b10c10d10e10"
      }
    ],
    "telegramConnected": false,
    "packageExpiresAt": "2023-01-01T00:00:00Z",
    "subscription": {
      "type": "trial",
      "manualCronLimit": 1
    },
    "manualCronCount": 0,
    "allowedToAddManualDomains": false,
    "notificationPreferences": {
      "telegram": false,
      "email": false
    },
    "twoFactorEnabled": false,
    "profile": {}
  },
  {
    "name": "Karen Yellow",
    "email": "karen.yellow@example.com",
    "username": "kareny",
    "mobile": 1700112233,
    "status": "enabled",
    "role": "user",
    "domain": "design.studio",
    "defaultDomains": [
      {
        "status": "enabled",
        "url": "https://www.design.studio",
        "_id": "d11a11b11c11d11e11"
      }
    ],
    "manualDomains": [
      {
        "status": "enabled",
        "url": "https://client-a.com",
        "title": "Client A Project",
        "executionTime": 180,
        "_id": "m5a5b5c5d5e5"
      },
      {
        "status": "enabled",
        "url": "https://client-b.net",
        "title": "Client B Site",
        "executionTime": 240,
        "_id": "m6a6b6c6d6e6"
      }
    ],
    "telegramConnected": true,
    "packageExpiresAt": "2026-04-20T16:00:00Z",
    "subscription": {
      "type": "gold",
      "manualCronLimit": 10
    },
    "manualCronCount": 6,
    "allowedToAddManualDomains": true,
    "notificationPreferences": {
      "telegram": true,
      "email": true
    },
    "twoFactorEnabled": true,
    "profile": {
      "avatarUrl": "https://placehold.co/150x150/ffc107/000000?text=KY",
      "bio": "Creative designer and web manager."
    }
  },
  {
    "name": "Liam Orange",
    "email": "liam.orange@example.com",
    "username": "liamo",
    "mobile": 1700223344,
    "status": "enabled",
    "role": "user",
    "domain": "ecom.shop",
    "defaultDomains": [
      {
        "status": "enabled",
        "url": "https://www.ecom.shop",
        "_id": "d12a12b12c12d12e12"
      }
    ],
    "telegramConnected": false,
    "packageExpiresAt": "2025-11-01T10:00:00Z",
    "subscription": {
      "type": "silver",
      "manualCronLimit": 3
    },
    "manualCronCount": 1,
    "allowedToAddManualDomains": true,
    "notificationPreferences": {
      "telegram": false,
      "email": true
    },
    "twoFactorEnabled": false,
    "profile": {}
  },
  {
    "name": "Mia Purple",
    "email": "mia.purple@example.com",
    "username": "miap",
    "mobile": 1700334455,
    "status": "enabled",
    "role": "user",
    "domain": "community.forum",
    "defaultDomains": [
      {
        "status": "enabled",
        "url": "https://www.community.forum",
        "_id": "d13a13b13c13d13e13"
      }
    ],
    "manualDomains": [],
    "telegramConnected": true,
    "packageExpiresAt": "2026-02-10T11:00:00Z",
    "subscription": {
      "type": "diamond",
      "manualCronLimit": 20
    },
    "manualCronCount": 10,
    "allowedToAddManualDomains": true,
    "notificationPreferences": {
      "telegram": true,
      "email": true
    },
    "twoFactorEnabled": true,
    "profile": {
      "bio": "Active community member."
    }
  },
  {
    "name": "Noah Pink",
    "email": "noah.pink@example.com",
    "username": "noahp",
    "mobile": 1700445566,
    "status": "deleted",
    "role": "user",
    "domain": "olddomain.xyz",
    "defaultDomains": [
      {
        "status": "disabled",
        "url": "https://www.olddomain.xyz",
        "_id": "d14a14b14c14d14e14"
      }
    ],
    "telegramConnected": false,
    "packageExpiresAt": "2024-01-01T00:00:00Z",
    "subscription": {
      "type": "trial",
      "manualCronLimit": 1
    },
    "manualCronCount": 0,
    "allowedToAddManualDomains": false,
    "notificationPreferences": {
      "telegram": false,
      "email": false
    },
    "twoFactorEnabled": false,
    "profile": {}
  },
  {
    "name": "Olivia Teal",
    "email": "olivia.teal@example.com",
    "username": "oliviat",
    "mobile": 1700556677,
    "status": "enabled",
    "role": "user",
    "domain": "portfolio.me",
    "defaultDomains": [
      {
        "status": "enabled",
        "url": "https://www.portfolio.me",
        "_id": "d15a15b15c15d15e15"
      }
    ],
    "manualDomains": [
      {
        "status": "enabled",
        "url": "https://my-side-project.app",
        "title": "Side Project",
        "executionTime": 60,
        "_id": "m7a7b7c7d7e7"
      }
    ],
    "telegramConnected": true,
    "packageExpiresAt": "2025-12-01T09:00:00Z",
    "subscription": {
      "type": "gold",
      "manualCronLimit": 10
    },
    "manualCronCount": 3,
    "allowedToAddManualDomains": true,
    "notificationPreferences": {
      "telegram": true,
      "email": true
    },
    "twoFactorEnabled": true,
    "profile": {
      "avatarUrl": "https://placehold.co/150x150/008080/ffffff?text=OT",
      "bio": "Showcasing my work."
    }
  },
  {
    "name": "Peter Cyan",
    "email": "peter.cyan@example.com",
    "username": "peterc",
    "mobile": 1700667788,
    "status": "enabled",
    "role": "user",
    "domain": "news.site",
    "defaultDomains": [
      {
        "status": "enabled",
        "url": "https://www.news.site",
        "_id": "d16a16b16c16d16e16"
      }
    ],
    "telegramConnected": false,
    "packageExpiresAt": "2025-09-15T13:00:00Z",
    "subscription": {
      "type": "silver",
      "manualCronLimit": 3
    },
    "manualCronCount": 0,
    "allowedToAddManualDomains": true,
    "notificationPreferences": {
      "telegram": false,
      "email": true
    },
    "twoFactorEnabled": false,
    "profile": {}
  },
  {
    "name": "Quinn Magenta",
    "email": "quinn.magenta@example.com",
    "username": "quinnm",
    "mobile": 1700778899,
    "status": "enabled",
    "role": "user",
    "domain": "creative.space",
    "defaultDomains": [
      {
        "status": "enabled",
        "url": "https://www.creative.space",
        "_id": "d17a17b17c17d17e17"
      }
    ],
    "manualDomains": [
      {
        "status": "enabled",
        "url": "https://art-gallery.com",
        "title": "Art Gallery",
        "executionTime": 150,
        "_id": "m8a8b8c8d8e8"
      }
    ],
    "telegramConnected": true,
    "packageExpiresAt": "2026-01-01T00:00:00Z",
    "subscription": {
      "type": "diamond",
      "manualCronLimit": 20
    },
    "manualCronCount": 12,
    "allowedToAddManualDomains": true,
    "notificationPreferences": {
      "telegram": true,
      "email": true
    },
    "twoFactorEnabled": true,
    "profile": {
      "bio": "Exploring new ideas."
    }
  },
  {
    "name": "Rachel Brown",
    "email": "rachel.brown@example.com",
    "username": "rachelb",
    "mobile": 1700889900,
    "status": "enabled",
    "role": "user",
    "domain": "blogging.platform",
    "defaultDomains": [
      {
        "status": "enabled",
        "url": "https://www.blogging.platform",
        "_id": "d18a18b18c18d18e18"
      }
    ],
    "telegramConnected": false,
    "packageExpiresAt": "2025-10-20T17:00:00Z",
    "subscription": {
      "type": "silver",
      "manualCronLimit": 3
    },
    "manualCronCount": 2,
    "allowedToAddManualDomains": true,
    "notificationPreferences": {
      "telegram": false,
      "email": true
    },
    "twoFactorEnabled": false,
    "profile": {}
  },
  {
    "name": "Sam Grey",
    "email": "sam.grey@example.com",
    "username": "samg",
    "mobile": 1700990011,
    "status": "enabled",
    "role": "user",
    "domain": "tech.solutions",
    "defaultDomains": [
      {
        "status": "enabled",
        "url": "https://www.tech.solutions",
        "_id": "d19a19b19c19d19e19"
      }
    ],
    "manualDomains": [
      {
        "status": "enabled",
        "url": "https://internal-tool.dev",
        "title": "Internal Tool",
        "executionTime": 45,
        "_id": "m9a9b9c9d9e9"
      }
    ],
    "telegramConnected": true,
    "packageExpiresAt": "2026-05-01T08:00:00Z",
    "subscription": {
      "type": "gold",
      "manualCronLimit": 10
    },
    "manualCronCount": 9,
    "allowedToAddManualDomains": true,
    "notificationPreferences": {
      "telegram": true,
      "email": true
    },
    "twoFactorEnabled": true,
    "profile": {
      "avatarUrl": "https://placehold.co/150x150/808080/ffffff?text=SG",
      "bio": "Providing technical solutions."
    }
  },
  {
    "name": "Tina Gold",
    "email": "tina.gold@example.com",
    "username": "tinag",
    "mobile": 1700001122,
    "status": "enabled",
    "role": "user",
    "domain": "fashion.blog",
    "defaultDomains": [
      {
        "status": "enabled",
        "url": "https://www.fashion.blog",
        "_id": "d20a20b20c20d20e20"
      }
    ],
    "telegramConnected": false,
    "packageExpiresAt": "2025-11-25T14:00:00Z",
    "subscription": {
      "type": "silver",
      "manualCronLimit": 3
    },
    "manualCronCount": 1,
    "allowedToAddManualDomains": true,
    "notificationPreferences": {
      "telegram": false,
      "email": true
    },
    "twoFactorEnabled": false,
    "profile": {}
  },
  {
    "name": "Uma Violet",
    "email": "uma.violet@example.com",
    "username": "umav",
    "mobile": 1700102030,
    "status": "enabled",
    "role": "user",
    "domain": "travel.guide",
    "defaultDomains": [
      {
        "status": "enabled",
        "url": "https://www.travel.guide",
        "_id": "d21a21b21c21d21e21"
      }
    ],
    "manualDomains": [
      {
        "status": "enabled",
        "url": "https://local-attractions.info",
        "title": "Local Attractions",
        "executionTime": 75,
        "_id": "m10a10b10c10d10e10"
      }
    ],
    "telegramConnected": true,
    "packageExpiresAt": "2026-03-15T10:00:00Z",
    "subscription": {
      "type": "diamond",
      "manualCronLimit": 20
    },
    "manualCronCount": 18,
    "allowedToAddManualDomains": true,
    "notificationPreferences": {
      "telegram": true,
      "email": true
    },
    "twoFactorEnabled": true,
    "profile": {
      "bio": "Exploring the world."
    }
  }
]
