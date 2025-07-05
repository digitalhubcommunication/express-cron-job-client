import { FC } from "react";

export type TSidebarLink = {
    label: string;
    Icon: FC;
    to: string;
}

export type TLink = {
    label: string;
    to: string;
}

export type UserRole = 'admin' | 'user';
export type SubscriptionType = 'silver' | 'gold' | 'diamond' | 'trial';

export type TDomain = {
    status: 'enabled' | 'disabled';
    url: string;
    _id: string;
};

export type TManualDomain = {
    status: 'enabled' | 'disabled';
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
    type: SubscriptionType;
    manualCronLimit: number;
}

interface Profile {
    avatarUrl?: string;
    bio?: string;
}

export interface IUser {
    name: string;
    email: string;
    username: string;
    mobile: number;
    status: 'pending' | 'enabled' | 'disabled' | "deleted" | "blocked";
    role: UserRole;
    domain: string;
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
    cronType: 'Default' | 'Manual';
    status: 'enabled' | 'disabled';
}



export type TCronHistory = {
    _id: string;
    domain: string;
    status: number;
    type: 'manual' | "default";
    success: boolean;
    responseTime: number;
    message: string;
}