import { PortableTextBlock } from "next-sanity";
import { Slug } from "sanity";

export type Artist = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: Slug;
    image: string;
    imageUrl: string;
    instagram: string;
    spotify: string;
    youtube: string;
    about: PortableTextBlock[];
}