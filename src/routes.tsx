import { createBrowserRouter } from 'react-router';
import Root from './Root';
import Home from './pages/Home';
import About from './pages/About';
import Sermons from './pages/Sermons';
import Live from './pages/Live';
import Events from './pages/Events';
import Prayer from './pages/Prayer';
import Ministries from './pages/Ministries';
import Give from './pages/Give';
import Testimonies from './pages/Testimonies';
import Contact from './pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'sermons', Component: Sermons },
      { path: 'live', Component: Live },
      { path: 'events', Component: Events },
      { path: 'prayer', Component: Prayer },
      { path: 'ministries', Component: Ministries },
      { path: 'give', Component: Give },
      { path: 'testimonies', Component: Testimonies },
      { path: 'contact', Component: Contact },
    ],
  },
]);
