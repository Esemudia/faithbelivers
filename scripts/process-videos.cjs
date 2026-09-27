const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const videoDir = './src/assets/videos';

const videoMapping = [
  {
    oldFile: 'WhatsApp Video 2026-09-21 at 21.04.28.mp4',
    newFile: 'church-welcome-hosts.mp4',
    title: 'Welcome to Faith Believers Ministry',
    desc: 'Our church hosts welcome you warmly and introduce our services and vision of Freedom in Christ.',
    category: 'Welcome',
    thumbTime: '00:00:02',
  },
  {
    oldFile: 'WhatsApp Video 2026-09-21 at 21.02.53.mp4',
    newFile: 'congregational-worship-prayer.mp4',
    title: 'Congregational Deep Worship & Prayer',
    desc: 'The entire congregation in awe of God, lifting hands in deep spiritual worship and intercession.',
    category: 'Worship',
    thumbTime: '00:00:02',
  },
  {
    oldFile: 'WhatsApp Video 2026-09-21 at 21.16.37.mp4',
    newFile: 'joyful-praise-celebration.mp4',
    title: 'Joyful Praise & Celebration Session',
    desc: 'High praise, joyful singing, and congregational dancing celebrating the goodness of the Lord.',
    category: 'Praise',
    thumbTime: '00:00:03',
  },
  {
    oldFile: 'WhatsApp Video 2026-09-20 at 18.54.01.mp4',
    newFile: 'live-choir-instrumentals.mp4',
    title: 'Live Choir & Instrumentalists in Action',
    desc: 'Anointed musicians, keyboardist, drummers, and vocalists leading the church into God\'s presence.',
    category: 'Music',
    thumbTime: '00:00:02',
  },
  {
    oldFile: 'WhatsApp Video 2026-09-20 at 18.53.59 (1).mp4',
    newFile: 'altar-praise-singing.mp4',
    title: 'Altar Praise & Celebration',
    desc: 'Vibrant praise ministration at the altar leading the church in praise and joy.',
    category: 'Praise',
    thumbTime: '00:00:02',
  },
  {
    oldFile: 'WhatsApp Video 2026-09-21 at 21.04.03.mp4',
    newFile: 'praise-leader-ministry.mp4',
    title: 'High Praise Exhortation',
    desc: 'Powerful song ministration charging the congregation with spiritual energy and thanksgiving.',
    category: 'Praise',
    thumbTime: '00:00:02',
  },
  {
    oldFile: 'WhatsApp Video 2026-09-20 at 18.54.10.mp4',
    newFile: 'thanksgiving-dance-procession.mp4',
    title: 'Thanksgiving Dance & Offering Procession',
    desc: 'Members joyfully rejoicing, dancing, and bringing thanksgiving offerings before the Lord.',
    category: 'Celebration',
    thumbTime: '00:00:03',
  },
  {
    oldFile: 'WhatsApp Video 2026-09-20 at 18.53.59 (2).mp4',
    newFile: 'pastoral-pulpit-ministry.mp4',
    title: 'Ministry at the Sacred Pulpit',
    desc: 'Spiritual leadership and apostolic declarations at the altar pulpit.',
    category: 'Sermon',
    thumbTime: '00:00:02',
  },
  {
    oldFile: 'WhatsApp Video 2026-09-21 at 21.07.16.mp4',
    newFile: 'altar-intercession-prayer.mp4',
    title: 'Altar Intercession & Deliverance Prayer',
    desc: 'Laying on of hands, spiritual warfare, and prophetic deliverance prayers at the altar.',
    category: 'Deliverance',
    thumbTime: '00:00:02',
  },
  {
    oldFile: 'WhatsApp Video 2026-09-20 at 18.53.59.mp4',
    newFile: 'congregation-prayer-service.mp4',
    title: 'Sunday Service Devotion & Prayer',
    desc: 'Believers joined in fellowship, waiting upon God in prayer and holy reverence.',
    category: 'Worship',
    thumbTime: '00:00:02',
  },
  {
    oldFile: 'WhatsApp Video 2026-09-20 at 18.53.58 (2).mp4',
    newFile: 'youth-choir-fellowship.mp4',
    title: 'Youth & Choir Worship Moments',
    desc: 'Youth department and choir members lifting their voices in devotion and faith.',
    category: 'Youth',
    thumbTime: '00:00:02',
  },
  {
    oldFile: 'WhatsApp Video 2026-09-20 at 18.53.58 (1).mp4',
    newFile: 'fellowship-greeting-moment.mp4',
    title: 'Warm Fellowship & Member Greeting',
    desc: 'A joyful congregation filled with love, warmth, and Christian fellowship.',
    category: 'Fellowship',
    thumbTime: '00:00:01',
  },
  {
    oldFile: 'WhatsApp Video 2026-09-20 at 18.53.58.mp4',
    newFile: 'church-family-welcome.mp4',
    title: 'Faith Believers Family Joy',
    desc: 'Smiles, warmth, and the tangible presence of God\'s love in the church auditorium.',
    category: 'Fellowship',
    thumbTime: '00:00:01',
  },
];

async function main() {
  console.log('Processing and enhancing 13 church videos...');

  // Ensure posters directory exists
  const posterDir = path.join(videoDir, 'posters');
  if (!fs.existsSync(posterDir)) {
    fs.mkdirSync(posterDir, { recursive: true });
  }

  for (let i = 0; i < videoMapping.length; i++) {
    const item = videoMapping[i];
    const oldPath = path.join(videoDir, item.oldFile);
    const newPath = path.join(videoDir, item.newFile);
    const posterPath = path.join(posterDir, item.newFile.replace('.mp4', '-poster.jpg'));

    if (!fs.existsSync(oldPath)) {
      console.log(`Skipping ${item.oldFile} (not found, might have been already renamed)`);
      continue;
    }

    console.log(`[${i + 1}/${videoMapping.length}] Enhancing ${item.oldFile} -> ${item.newFile}...`);

    // Enhance video with ffmpeg:
    // - contrast=1.06, brightness=0.02, saturation=1.12, unsharp for crispness
    // - x264 fast preset, crf 23, yuv420p for 100% universal browser compatibility
    // - aac audio 128k
    // - +faststart for instant web streaming
    const ffmpegCmd = `ffmpeg -y -i "${oldPath}" -vf "eq=contrast=1.06:brightness=0.02:saturation=1.12,unsharp=3:3:0.6:3:3:0.0" -c:v libx264 -preset fast -crf 23 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart "${newPath}"`;
    execSync(ffmpegCmd, { stdio: 'ignore' });

    // Generate enhanced poster image
    const posterCmd = `ffmpeg -y -ss ${item.thumbTime} -i "${newPath}" -vf "eq=contrast=1.06:brightness=0.02:saturation=1.12,unsharp=3:3:0.8:3:3:0.0" -frames:v 1 -q:v 2 "${posterPath}"`;
    execSync(posterCmd, { stdio: 'ignore' });

    // Remove old file
    fs.unlinkSync(oldPath);
    console.log(`  ✓ Created ${item.newFile} and poster.`);
  }

  // Clean up any temporary files
  const tempFiles = [
    path.join(videoDir, 'test-enhanced.mp4'),
  ];
  tempFiles.forEach(f => {
    if (fs.existsSync(f)) fs.unlinkSync(f);
  });
  const oldThumbDir = path.join(videoDir, 'thumbnails');
  if (fs.existsSync(oldThumbDir)) {
    fs.rmSync(oldThumbDir, { recursive: true, force: true });
  }

  console.log('✓ All 13 videos enhanced, renamed, and poster images generated successfully!');
}

main().catch(console.error);
