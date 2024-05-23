import { getArtists } from 'sanity-utils'
import { Artist } from 'types/Artist';

export default async function AritstsSection() {
    const artists = await getArtists();
    return (
        <div>
        {artists.map((artist) => (
            <div key={artist._id}>
                {artist.name}
            </div>
        ))}
        </div>
    )
}
