import { getLatestEvents } from "sanity-utils"
import { PortableText, PortableTextBlock } from "next-sanity";
import { EventCard, WhenInView } from "./Reveal";
import Link from 'next/link'




export default async function EventsSection() {

    const events = await getLatestEvents();

    
    return (
        <div id="events" className="h-[75vh] flex items-center">
            <div className="grid md:grid-cols-3">
            {events.map((event, i) => ( 
                <EventCard key={i} idx={i} >
             
                <Link href={`/event/${event.slug}`}>
                <div  className="p-5" >
                
                <div className="" >
                    <h2 className="font-bold text-4xl">{event.title}</h2>
                    <h3> {event.date} </h3>
                </div>
                <div>
                    <PortableText value={event.about} />
                </div>
                
                </div>
                </Link>
                </EventCard>
            
            ))}

            </div>
        </div>
    )
    
};