import { getEvent } from "sanity-utils"

type Props = {
    params: { slug: string }
}

export default async function EventPage({params}: Props) {


    const event = await getEvent(params.slug)

    return (
        <div>
            <h1>{event.title}</h1>
        </div>
    )
}