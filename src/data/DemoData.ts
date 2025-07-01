import { IUser } from "@/types/types";

export const user:IUser = {
    name: "John Doe",
    role:"user",
    status:'enabled',
    domain: "example.com",
    defaultDomains: [
      {
        _id:"34234",
        status: "enabled",
        url: "example.com",
      },
      {
        _id:"3444334",
        status: "enabled",
        url: "example.com",
      },
    ],
allowedToAddManualDomains:true,
email:"example.gmail.com",
manualCronCount:5,
mobile:4342410433,
notificationPreferences:{
  telegram:true,
  email:true
},
packageExpiresAt:new Date(),
profile:{
  avatarUrl:undefined,
  bio:"Short bio of the user"
},
subscription:{
  type:"trial",
  manualCronLimit:0
},
telegramConnected:false,
twoFactorEnabled:false,
username:'example.user',
manualDomains:undefined,
telegramId:undefined,
  };