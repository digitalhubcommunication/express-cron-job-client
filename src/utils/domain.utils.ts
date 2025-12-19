import { CronJobRowData, IUser } from "@/types/types";

export const getAllDomains = (user: IUser | null): CronJobRowData[] => {

    if(!user) return []

    const domains: CronJobRowData[] = [];

    if (user.defaultDomains && user.defaultDomains?.length) {
        user.defaultDomains.forEach(domain => {
            // TODO: have to delete this line
            // domain.url = 'https://www.youtube.com/watch?v=ElZfdU54Cp8&ZfdU54Cp8&ZfdU54Cp8&'
            domains.push({ ...domain, cronType: 'Default' })
        })
    }

    // TODO: Have to remove this duplicate.
    if (user.defaultDomains && user.defaultDomains?.length) {
        user.defaultDomains.forEach(domain => {

             // TODO: have to delete this line
            // domain.url = 'https://www.youtube.com/watch?v=ElZfdU54Cp8&ZfdU54Cp8&ZfdU54Cp8&'
            domains.push({ ...domain, cronType: 'Default' })
        })
    }
    if (user.defaultDomains && user.defaultDomains?.length) {
        user.defaultDomains.forEach(domain => {

             // TODO: have to delete this line
            // domain.url = 'https://www.youtube.com/watch?v=ElZfdU54Cp8&ZfdU54Cp8&ZfdU54Cp8&'
            domains.push({ ...domain, cronType: 'Default' })
        })
    }
    if (user.defaultDomains && user.defaultDomains?.length) {
        user.defaultDomains.forEach(domain => {
            domains.push({ ...domain, cronType: 'Default' })
        })
    }
    if (user.defaultDomains && user.defaultDomains?.length) {
        user.defaultDomains.forEach(domain => {

             // TODO: have to delete this line
            // domain.url = 'https://www.youtube.com/watch?v=ElZfdU54Cp8&ZfdU54Cp8&ZfdU54Cp8&'
            domains.push({ ...domain, cronType: 'Default' })
        })
    }
    if (user.defaultDomains && user.defaultDomains?.length) {
        user.defaultDomains.forEach(domain => {

             // TODO: have to delete this line
            // domain.url = 'https://www.youtube.com/watch?v=ElZfdU54Cp8&ZfdU54Cp8&ZfdU54Cp8&'
            domains.push({ ...domain, cronType: 'Default' })
        })
    }
    if (user.defaultDomains && user.defaultDomains?.length) {
        user.defaultDomains.forEach(domain => {

             // TODO: have to delete this line
            // domain.url = 'https://www.youtube.com/watch?v=ElZfdU54Cp8&ZfdU54Cp8&ZfdU54Cp8&'
            domains.push({ ...domain, cronType: 'Default' })
        })
    }


    if (user.manualDomains && user.manualDomains?.length) {
        user.defaultDomains.forEach(domain => {

             // TODO: have to delete this line
            // domain.url = 'https://www.youtube.com/watch?v=ElZfdU54Cp8&ZfdU54Cp8&ZfdU54Cp8&'
            domains.push({ ...domain, cronType: 'Default' })
        })
    }
    return domains;
}