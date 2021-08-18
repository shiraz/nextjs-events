import { Fragment } from 'react';
import { useRouter } from 'next/router';

import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';

import ErrorAlert from '../../components/ui/error-alert';

import { getEventById } from '../../dummy-data'; 

const EventDetailPage = () => {
    const router = useRouter();
    const { query: {
        eventId
    }} = router;
    const event = getEventById(eventId);

    if (!event) {
        return <p>No event found!</p>
    }

    return (
        <Fragment>
            <EventSummary title={event.title} />
            <EventLogistics date={event.date} address={event.location} image={event.image} alt={event.title} />
            <EventContent>
                <ErrorAlert><p>{event.description}</p></ErrorAlert>
            </EventContent>
        </Fragment>
    );
}

export default EventDetailPage;