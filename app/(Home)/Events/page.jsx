import EventCard from "@/components/EventCard";
import EventRegistration from "@/components/EventRegistration";
// import { events } from "@/constants";
import { getEvent } from "@/sanity/utilsSanity";
export async function Event() {
  const events = await getEvent();

  return (
    <section className="pt-[75px] min-h-screen w-full px-4 md:px-28">
      <h1 className="md:text-4xl text-3xl font-bold font-heading text-secondary-200 mt-4 decoration-4  decoration-accent-500 underline underline-offset-8">
        Events
      </h1>

      <p className="mt-1 text-justify text-text-100 text-[14px] md:text-[18px]   ">
        At ChES, we are proud to curate a diverse calendar of events that ignite
        the enthusiasm for chemical engineering and nurture an innovative
        spirit. Annually, our society organizes a variety of engaging
        activities, with flagship events such as SIPHON, ALCHEMY, and EUREKA
        taking center stage. The remaining year is filled with workshops,
        industrial visits, Chem-E-Car Competitions, and numerous K-12
        activities.
      </p>
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event, index) => (
          <EventCard key={index} index={index} {...event} />
        ))}
      </div>
      {/* <EventRegistration /> */}
    </section>
  );
}
export default Event;
