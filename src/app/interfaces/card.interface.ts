export interface Card {
    nombre: string;
    descripcion: string;
    socialLinks: SocialLinks;
    bgImg: string;
}

export interface SocialLinks {
    facebook?: string;
    instagram?: string;
    website?: string;
    tiktok?: string;
}