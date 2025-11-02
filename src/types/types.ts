import { FC } from "react";

export type TSidebarLink = {
  label: string;
  Icon: FC;
  to: string;
};

export type TLink = {
  label: string;
  to: string;
};

export type UserRole = "admin" | "user";
export type SubscriptionType = "silver" | "gold" | "diamond" | "trial";

export type TDomain = {
  status: "enabled" | "disabled";
  url: string;
  _id: string;
};

export type TManualDomain = {
  status: "enabled" | "disabled";
  url: string;
  title: string;
  executionTime: number;
  _id: string;
};

interface NotificationPreferences {
  telegram: boolean;
  email: boolean;
}

interface SubscriptionInfo {
  createdAt: string;
  intervalInMs: number;
  manualCronLimit: number;
  name: string;
  price: number;
  status: "enabled" | "disabled";
  updatedAt: Date;
  validity: number;
  _id: string;
}

interface Profile {
  avatarUrl?: string;
  bio?: string;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  username: string;
  mobile: string;
  status: "pending" | "enabled" | "disabled" | "deleted" | "blocked";
  role: UserRole;
  domain: string;
  accessToken: string;
  refreshToken: string;
  defaultDomains: TDomain[];
  manualDomains?: TManualDomain[];
  telegramId?: string;
  telegramConnected: boolean;
  packageExpiresAt: string;
  subscription: SubscriptionInfo;
  manualCronCount: number;
  allowedToAddManualDomains: boolean;
  notificationPreferences: NotificationPreferences;
  twoFactorEnabled: boolean;
  profile: Profile;
}

// --- Table Row Data Structure ---
export interface CronJobRowData {
  _id: string;
  url: string;
  cronType: "Default" | "Manual";
  status: "enabled" | "disabled";
}

export type TCronHistory = {
  _id: string;
  domain: string;
  status: number;
  type: "manual" | "default";
  success: boolean;
  responseTime: number;
  message: string;
};

// package type
export type TPackage = {
  _id: string;
  name: string;
  validity: number;
  intervalInMS: number;
  price: number;
  manualCronLimit: number;
  status: "available" | "unavailable";
};

export type TDistributor = {
  _id: string;
  name: string;
  phone: string;
  whatsApp: string;
  faceebook: string;
  telegram: string;
  siteUrl: string;
};

export type TFeature = {
  title: string;
  Icon: FC;
  des: string;
};

// user lists
export type TUserFilter =
  | "name"
  | "email"
  | "status"
  | "domain"
  | "subscription";

export type TUserRole = "admin" | "user";

export type TDecodedToken = {
  role: TUserRole;
  id: string;
  email: string;
  exp: number;
  iat: number;
};


export interface ICronLog {
  _id: string;
  userId: string;
  domain: string;
  domainType: "default" | "manual" | ""; // empty string for “all” case
  message: string;
  status: number;
  responseTime: number;
  timestamp: string; // ISO string
  createdAt: string;
  updatedAt: string;
  __v: number;
}
