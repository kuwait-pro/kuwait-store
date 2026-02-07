process.env.DIST_DIR = 'out-gitlab';
process.env.BASE_PATH = '/kuwait-store';
process.env.SITE_URL = 'https://kuwait-pro.gitlab.io/kuwait-store';
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

if (fs.existsSync('out-gitlab')) {
  fs.rmSync('out-gitlab', { recursive: true, force: true });
}

execSync('node generate-feed.js', { stdio: 'inherit' });
execSync('next build', { stdio: 'inherit' });

// Copy feed.xml
const feedSource = path.join(__dirname, 'public', 'feed.xml');
const feedDest = path.join(__dirname, 'out-gitlab', 'feed.xml');
if (fs.existsSync(feedSource)) {
  fs.copyFileSync(feedSource, feedDest);
  console.log('✅ feed.xml copied');
}

// Copy GitLab verification files from verification-files/gitlab/
const gitlabVerificationDir = path.join(__dirname, 'verification-files', 'gitlab');
if (fs.existsSync(gitlabVerificationDir)) {
  const files = fs.readdirSync(gitlabVerificationDir);
  files.forEach(file => {
    const src = path.join(gitlabVerificationDir, file);
    const dest = path.join(__dirname, 'out-gitlab', file);
    fs.copyFileSync(src, dest);
    console.log(`✅ ${file} copied to out-gitlab`);
  });
}
