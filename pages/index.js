import Link from 'next/link';

import { getFeaturedEvents } from '../dummy-data';

const HomePage = () => {
    const featuredEvents = getFeaturedEvents();
    
    return (
        <div>
            <h1>The Home Page</h1>
            <ul>
                <li>
                    <Link href="/events">Events</Link>
                </li>
            </ul>
        </div>
    );
}

export default HomePage;
