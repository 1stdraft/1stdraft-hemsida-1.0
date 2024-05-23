import {
    apiVersion,
    dataset,
    DRAFT_MODE_ROUTE,
    projectId,
  } from 'lib/sanity.api'

import { createClient, groq } from 'next-sanity'
import { Artist } from 'types/Artist'
import { Settings } from 'types/Settings'
import imageUrlBuilder from '@sanity/image-url'

const urlBuilder = imageUrlBuilder({ 
    projectId: projectId,
    dataset: dataset
});

export function urlFor(source) {
    return urlBuilder.image(source);
}

export async function getArtists(): Promise<Artist[]> {
    const client = createClient({
        projectId: projectId,
        dataset: dataset,
        apiVersion: apiVersion
    })

    return client.fetch(
        groq`*[_type == "artist"] | order(name asc){
            _id,
            _createdAt,
            name,
            slug,
            image,
            instagram,
            about
        }`
    )
    
}

export async function getArtist(slug: string): Promise<Artist> {
    const client = createClient({
        projectId: projectId,
        dataset: dataset,
        apiVersion: apiVersion
    })

    return client.fetch(
        groq`*[_type == "artist" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            slug,
            image,
            instagram,
            about[]
        }`,
        { slug }
    )
    
}

export async function getSettings(): Promise<Settings[]> {
    const client = createClient({
        projectId: projectId,
        dataset: dataset,
        apiVersion: apiVersion
    })

    return client.fetch(
        groq`*[_type == "artist"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            instagram,
            about
        }`
    )
    
}


