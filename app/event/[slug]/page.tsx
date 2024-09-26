import Returnbar from 'components/Returnbar'
import { ScrollProvider } from 'components/ScrollProvider'
import Link from 'next/link'
import { PortableText } from 'next-sanity'
import { getEvent, getEvents } from 'sanity-utils'

type Props = {
  params: { slug: string }
}

import type { Metadata } from 'next'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const event = await getEvent(params.slug)
  return {
    title: event.title,
  }
}

export async function generateStaticParams() {
  const events = await getEvents()

  return events.map((event) => ({
    slug: event.slug.current,
  }))
}


export default async function EventPage({ params }: Props) {
  const slug = params.slug

  const event = await getEvent(slug)


  return (
    <ScrollProvider>
      <div>
        <Returnbar />

        <div className="h-[75vh] flex justify-center items-center ">
          <div className="mx-2 md:w-2/3 flex flex-col">
            <div className="flex justify-between py-3 items-baseline">
              <div>
                <h1 className="font-bold text-5xl ">{event.title}</h1>
              </div>
              <div>
                <h1 className="md:text-xl">{event.date}</h1>
              </div>
            </div>

            <div>
              <PortableText value={event.about} />

              {/* {event.link 
                ? <Link href={event.link}>Read more here</Link>
                : null
                } */}
            </div>
          </div>
        </div>
      </div>
    </ScrollProvider>
  )
}
