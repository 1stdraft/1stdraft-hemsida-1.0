import { PortableTextBlock } from "next-sanity";

export type Setting = {
    title: string;
    description: PortableTextBlock[];
    image: string;
    instagram: string;
    about: PortableTextBlock[];
}