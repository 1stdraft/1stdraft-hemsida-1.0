import Link from 'next/link'
import { PortableText, PortableTextBlock } from 'next-sanity'
import { getLatestEvents } from 'sanity-utils'

import { EventCard, WhenInView } from './Reveal'
import { TransitionLink } from './TransitionLink'

export default async function EventsSection() {
  const events = await getLatestEvents()

  return (
    <div id="events" className="my-[10vh] flex items-center mx-4">
      <div className="grid md:grid-cols-3 gap-3">
        {events.map((event, i) => (
          // <EventCard key={i} idx={i} className="" >

          // <Link href={`/event/${event.slug}`}>
          // <div  className="p-5" >

          // <div className="" >
          //     <h2 className="font-bold text-4xl">{event.title}</h2>
          //     <h3> {event.date} </h3>
          // </div>
          // <div>
          //     <PortableText value={event.about} />
          // </div>

          // </div>
          // </Link>
          // </EventCard>

          <EventCard
            key={i}
            idx={i}
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg "
          >
            <>
              <TransitionLink href={`/event/${event.slug}`}>
                <h3 className="text-2xl font-bold tracking-tight text-black">
                  {event.title}
                </h3>
              </TransitionLink>
              <h5
                className="text-gray-500 my-1
                    "
              >
                {event.date}
              </h5>
              <div className="mb-3 font-normal text-gray-700 line-clamp-4">
                <PortableText value={event.about} />
              </div>
              <TransitionLink
                href={`/event/${event.slug}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-slate-100 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </TransitionLink>
            </>
          </EventCard>
        ))}
      </div>
    </div>
  )
}
