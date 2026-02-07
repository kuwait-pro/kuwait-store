process.env.DIST_DIR = 'out-cloudflare';
process.env.BASE_PATH = '';
process.env.SITE_URL = 'https://kuwait-store.storesads.shop';
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

if (fs.existsSync('out-cloudflare')) {
  fs.rmSync('out-cloudflare', { recursive: true, force: true });
}

execSync('node generate-feed.js', { stdio: 'inherit' });
execSync('next build', { stdio: 'inherit' });

// Copy feed.xml
const feedSource = path.join(__dirname, 'public', 'feed.xml');
const feedDest = path.join(__dirname, 'out-cloudflare', 'feed.xml');
if (fs.existsSync(feedSource)) {
  fs.copyFileSync(feedSource, feedDest);
  console.log('✅ feed.xml copied');
}

// Copy Cloudflare verification files from verification-files/cloudflare/
const cloudflareVerificationDir = path.join(__dirname, 'verification-files', 'cloudflare');
if (fs.existsSync(cloudflareVerificationDir)) {
  const files = fs.readdirSync(cloudflareVerificationDir);
  files.forEach(file => {
    const src = path.join(cloudflareVerificationDir, file);
    const dest = path.join(__dirname, 'out-cloudflare', file);
    fs.copyFileSync(src, dest);
    console.log(`✅ ${file} copied to out-cloudflare`);
  });
}
