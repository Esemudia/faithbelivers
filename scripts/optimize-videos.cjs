const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const dir = path.resolve('src/assets/videos');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.mp4'));

console.log(`Starting web stream optimization for ${files.length} videos...`);

for (const file of files) {
  const input = path.join(dir, file);
  const temp = path.join(dir, `opt-${file}`);

  const initialSize = (fs.statSync(input).size / (1024 * 1024)).toFixed(2);
  
  // Universal web-safe encoding:
  // - H.264 Baseline profile / Level 3.1 for 100% universal mobile and web compatibility
  // - yuv420p color space
  // - CRF 25 with maxrate 1200k bufsize 2400k
  // - AAC stereo audio at 96k
  // - movflags +faststart for instant progressive streaming
  const cmd = `ffmpeg -y -i "${input}" -c:v libx264 -profile:v baseline -level 3.1 -pix_fmt yuv420p -crf 25 -maxrate 1200k -bufsize 2400k -c:a aac -b:a 96k -movflags +faststart "${temp}"`;
  
  execSync(cmd, { stdio: 'pipe' });
  
  fs.unlinkSync(input);
  fs.renameSync(temp, input);
  
  const finalSize = (fs.statSync(input).size / (1024 * 1024)).toFixed(2);
  console.log(`✓ ${file}: ${initialSize} MB -> ${finalSize} MB`);
}

console.log('Video optimization completed successfully!');
