import { PortableTextBlock } from "next-sanity";

export type Artist = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    image: string;
    instagram: string;
    spotify: string;
    about: PortableTextBlock[];
}