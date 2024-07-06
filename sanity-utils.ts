import imageUrlBuilder from '@sanity/image-url'
import {
    apiVersion,
    dataset,
    DRAFT_MODE_ROUTE,
    projectId,
  } from 'lib/sanity.api'
import { createClient, groq } from 'next-sanity'
import { Artist } from 'types/Artist'
import { Event } from 'types/Event'
import { Setting } from 'types/Setting'
import { Song } from 'types/Song'

const urlBuilder = imageUrlBuilder({ 
    projectId: projectId,
    dataset: dataset
});

const client = createClient({
    projectId: projectId,
    dataset: dataset,
    apiVersion: apiVersion
})

export function urlFor(source) {
    return urlBuilder.image(source);
}

export async function getArtists(): Promise<Artist[]> {

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
    return client.fetch(
        groq`*[_type == "artist" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            slug,
            image,
            "imageUrl": image.asset->_ref,
            instagram,
            spotify,
            about[]
        }`,
        { slug }
    )
    
}

export async function getSongs(): Promise<Song[]> {
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

export async function getEvent(slug: string): Promise<Event> {

    return client.fetch(
        groq`*[_type == "event" && slug.current == $slug][0]  {
        title,
        about,
        link,
        "slug": slug.current,
        date
        }`,
        { slug }
    )
}

export async function getLatestEvents(): Promise<Event[]> {

    return client.fetch(
        groq`*[_type == "event"] | order(_createdAt desc)[0..5]{
        title,
        about,
        link,
        "slug": slug.current,
        date
        }`
    )
}

export async function getEvents(): Promise<Event[]> {

    return client.fetch(
        groq`*[_type == "event"] | order(_createdAt desc){
        title,
        about,
        link,
        "slug": slug.current,
        date
        }`
    )
}

export async function getSettings(): Promise<Setting> {


    return await client.fetch(groq`*[_type == "settings"][0]{
        title,
        about,
        description,
        email
        }`)

    
}


