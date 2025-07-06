import { IUser, TCronHistory, TPackage } from "@/types/types";

export const user: IUser = {
  name: "John Doe",
  role: "user",
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