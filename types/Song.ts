import { PortableTextBlock } from "next-sanity";
import { Reference, Slug } from "sanity";

export type Song = {
    _id: string;
    _createdAt: Date;
    title: string;
    slug: Slug;
    artist: Reference;
    coverImage: string;
    spotify: string;
    youtube: string;
    appleMusic: string;
    credits: PortableTextBlock[];
}