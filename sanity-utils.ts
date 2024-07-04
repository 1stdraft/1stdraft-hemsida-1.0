import imageUrlBuilder from '@sanity/image-url'
import {
    apiVersion,
    dataset,
    DRAFT_MODE_ROUTE,
    projectId,
  } from 'lib/sanity.api'
import { createClient, groq } from 'next-sanity'
import { Artist } from 'types/Artist'
import { Setting } from 'types/Setting'
import { Song } from 'types/Song'

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
            spotify,
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
            spotify,
            about[]
        }`,
        { slug }
    )
    
}

export async function getSongs(): Promise<Song[]> {
    const client = createClient({
        projectId: projectId,
        dataset: dataset,
        apiVersion: apiVersion
    })

    return client.fetch(
        groq`*[_type == "song"] | order(releasedate desc)[0..4]{
            _id,
            _createdAt,
            title,
            slug,
            artist,
            coverImage,
            youtube,
            spotify,
            releasedate,
            credits
        }`
    )
    
}

export async function getSongsFromArtist(index: string): Promise<Song[]> {
    const client = createClient({
        projectId: projectId,
        dataset: dataset,
        apiVersion: apiVersion
    })

    return client.fetch(
        groq`*[_type == "song" && references("${index}")] | order(releasedate desc){
            title,
            slug,
            coverImage,
            "imageUrl": coverImage.asset->url
        }`
    )
    
}

export async function getAllSongs(): Promise<Song[]> {
    const client = createClient({
        projectId: projectId,
        dataset: dataset,
        apiVersion: apiVersion
    })

    return client.fetch(
        groq`*[_type == "song"] | order(releasedate desc){
            _id,
            _createdAt,
            title,
            slug,
            artist,
            coverImage,
            youtube,
            spotify,
            releasedate,
            credits
        }`
    )
    
}


export async function getSong(slug: string): Promise<Song> {
    const client = createClient({
        projectId: projectId,
        dataset: dataset,
        apiVersion: apiVersion
    })

    return client.fetch(
        groq`*[_type == "song" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            slug,
            "name": artist->name,
            "artistSlug": artist->slug.current,
            coverImage,
            youtube,
            spotify,
            releasedate,
            credits[]
        }`,
        { slug }
    )
    
}

export async function getSettings(): Promise<Setting> {
    const client = createClient({
        projectId: projectId,
        dataset: dataset,
        apiVersion: apiVersion
    })

    return await client.fetch(groq`*[_type == "settings"][0]{
        title,
        about,
        description,
        about
        }`) || {}

    
}


