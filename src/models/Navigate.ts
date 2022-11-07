export interface INavigate {
    items: Iitems[]
    count?: number
    title: string
    image?: string
}

export interface Iitems {
    id: number
    title: string
    link?: string
}