// Import all enhanced video files
import welcomeVideo from '../assets/videos/church-welcome-hosts.mp4';
import worshipVideo from '../assets/videos/congregational-worship-prayer.mp4';
import praiseVideo from '../assets/videos/joyful-praise-celebration.mp4';
import choirVideo from '../assets/videos/live-choir-instrumentals.mp4';
import altarPraiseVideo from '../assets/videos/altar-praise-singing.mp4';
import praiseLeaderVideo from '../assets/videos/praise-leader-ministry.mp4';
import thanksgivingVideo from '../assets/videos/thanksgiving-dance-procession.mp4';
import pulpitVideo from '../assets/videos/pastoral-pulpit-ministry.mp4';
import deliveranceVideo from '../assets/videos/altar-intercession-prayer.mp4';
import devotionVideo from '../assets/videos/congregation-prayer-service.mp4';
import youthVideo from '../assets/videos/youth-choir-fellowship.mp4';
import greetingVideo from '../assets/videos/fellowship-greeting-moment.mp4';
import joyVideo from '../assets/videos/church-family-welcome.mp4';

// Import all video poster images
import welcomePoster from '../assets/videos/posters/church-welcome-hosts-poster.jpg';
import worshipPoster from '../assets/videos/posters/congregational-worship-prayer-poster.jpg';
import praisePoster from '../assets/videos/posters/joyful-praise-celebration-poster.jpg';
import choirPoster from '../assets/videos/posters/live-choir-instrumentals-poster.jpg';
import altarPraisePoster from '../assets/videos/posters/altar-praise-singing-poster.jpg';
import praiseLeaderPoster from '../assets/videos/posters/praise-leader-ministry-poster.jpg';
import thanksgivingPoster from '../assets/videos/posters/thanksgiving-dance-procession-poster.jpg';
import pulpitPoster from '../assets/videos/posters/pastoral-pulpit-ministry-poster.jpg';
import deliverancePoster from '../assets/videos/posters/altar-intercession-prayer-poster.jpg';
import devotionPoster from '../assets/videos/posters/congregation-prayer-service-poster.jpg';
import youthPoster from '../assets/videos/posters/youth-choir-fellowship-poster.jpg';
import greetingPoster from '../assets/videos/posters/fellowship-greeting-moment-poster.jpg';
import joyPoster from '../assets/videos/posters/church-family-welcome-poster.jpg';

export interface ChurchVideo {
  id: string;
  title: string;
  desc: string;
  category: 'Welcome' | 'Worship' | 'Praise' | 'Music' | 'Celebration' | 'Sermon' | 'Deliverance' | 'Youth' | 'Fellowship';
  src: string;
  poster: string;
  duration: string;
  featured?: boolean;
}

export const churchVideos: ChurchVideo[] = [
  {
    id: 'welcome-hosts',
    title: 'Official Welcome to Faith Believers Ministry',
    desc: 'Our church hosts warmly welcome you and introduce the glorious vision of Freedom in Christ.',
    category: 'Welcome',
    src: welcomeVideo,
    poster: welcomePoster,
    duration: '1:46',
    featured: true,
  },
  {
    id: 'congregational-worship',
    title: 'Congregational Deep Worship & Prayer',
    desc: 'The entire congregation in deep reverence, lifting hands in heartfelt spiritual worship.',
    category: 'Worship',
    src: worshipVideo,
    poster: worshipPoster,
    duration: '0:21',
    featured: true,
  },
  {
    id: 'joyful-praise',
    title: 'High Praise & Congregational Celebration',
    desc: 'The entire sanctuary rejoicing with clapping, dancing, and high praise to the Almighty.',
    category: 'Praise',
    src: praiseVideo,
    poster: praisePoster,
    duration: '0:38',
    featured: true,
  },
  {
    id: 'live-choir',
    title: 'Live Choir, Keyboard & Drum Ministry',
    desc: 'Anointed instrumentalists and vocalists creating an atmosphere of vibrant praise.',
    category: 'Music',
    src: choirVideo,
    poster: choirPoster,
    duration: '0:23',
    featured: true,
  },
  {
    id: 'altar-praise',
    title: 'Altar Praise & Dynamic Singing',
    desc: 'Spirited praise ministration at the altar lifting the church into divine joy.',
    category: 'Praise',
    src: altarPraiseVideo,
    poster: altarPraisePoster,
    duration: '0:34',
  },
  {
    id: 'praise-leader',
    title: 'Anointed Praise Exhortation',
    desc: 'High praise leader charging the congregation with spiritual energy and thanksgiving.',
    category: 'Praise',
    src: praiseLeaderVideo,
    poster: praiseLeaderPoster,
    duration: '0:44',
  },
  {
    id: 'thanksgiving-dance',
    title: 'Thanksgiving Offering & Dance Procession',
    desc: 'Church members joyfully dancing and rejoicing with gratitude in their hearts.',
    category: 'Celebration',
    src: thanksgivingVideo,
    poster: thanksgivingPoster,
    duration: '0:38',
    featured: true,
  },
  {
    id: 'pastoral-pulpit',
    title: 'Ministry at the Sacred Pulpit',
    desc: 'Spiritual leadership and apostolic declarations at the altar pulpit.',
    category: 'Sermon',
    src: pulpitVideo,
    poster: pulpitPoster,
    duration: '0:39',
  },
  {
    id: 'altar-deliverance',
    title: 'Altar Intercession & Deliverance Prayer',
    desc: 'Fervent prayer, laying on of hands, and deliverance ministration for God\'s people.',
    category: 'Deliverance',
    src: deliveranceVideo,
    poster: deliverancePoster,
    duration: '0:42',
    featured: true,
  },
  {
    id: 'congregation-devotion',
    title: 'Sunday Worship & Devotion',
    desc: 'Believers standing united in holy devotion and communion with God.',
    category: 'Worship',
    src: devotionVideo,
    poster: devotionPoster,
    duration: '0:28',
  },
  {
    id: 'youth-choir',
    title: 'Youth & Choir Devotion',
    desc: 'Youth department and choir members lifting their voices in devotion and faith.',
    category: 'Youth',
    src: youthVideo,
    poster: youthPoster,
    duration: '0:35',
  },
  {
    id: 'fellowship-greeting',
    title: 'Warm Christian Fellowship & Greeting',
    desc: 'A loving church family welcoming one another in the love of Jesus.',
    category: 'Fellowship',
    src: greetingVideo,
    poster: greetingPoster,
    duration: '0:17',
  },
  {
    id: 'family-joy',
    title: 'Joy in the House of the Lord',
    desc: 'Smiles, warmth, and the tangible presence of God\'s love in the auditorium.',
    category: 'Fellowship',
    src: joyVideo,
    poster: joyPoster,
    duration: '0:17',
  },
];
