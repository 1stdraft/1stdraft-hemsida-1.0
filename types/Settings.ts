import { PortableTextBlock } from "next-sanity";

export type Settings = {
    name: string;
    slug: string;
    image: string;
    instagram: string;
    about: PortableTextBlock[];
}