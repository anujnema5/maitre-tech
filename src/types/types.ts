export type THeaderLinks = {
    title: string,
    href: string
}[];

export type TCoverImages = {
    src: string,
    alt: string
}[];

export type TInfoHeader = {
    title: string;
    phoneNumber: {
        icon: string;
        numbers: string[];
    };
    mail: string;
    socialIcons: {
        title: string;
        href: string;
        icon: string;
    }[];
}
