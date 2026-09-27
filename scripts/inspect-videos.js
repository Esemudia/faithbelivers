const { execSync } = require('child_process');
const fs = require('fs');
const path = './src/assets/videos/';

const files = fs.readdirSync(path).filter(f => f.endsWith('.mp4'));
console.log('Total video files:', files.length);

const thumbDir = './src/assets/videos/thumbnails';
if (!fs.existsSync(thumbDir)) {
  fs.mkdirSync(thumbDir, { recursive: true });
}

files.forEach((f, idx) => {
  const filePath = path + f;
  try {
    const probe = execSync(`ffprobe -v error -select_streams v:0 -show_entries stream=width,height,duration,codec_name -of json "${filePath}"`, { encoding: 'utf-8' });
    const data = JSON.parse(probe);
    const s = data.streams[0] || {};
    console.log(`${idx + 1}. [${f}] => ${s.width}x${s.height}, dur: ${parseFloat(s.duration || 0).toFixed(1)}s, codec: ${s.codec_name}`);

    // Extract thumbnail frame at 1.5s
    const thumbName = `${thumbDir}/thumb-${idx + 1}.jpg`;
    execSync(`ffmpeg -y -ss 00:00:01.5 -i "${filePath}" -frames:v 1 -q:v 2 "${thumbName}"`, { stdio: 'ignore' });
  } catch (err) {
    console.error(`Error processing ${f}:`, err.message);
  }
});
