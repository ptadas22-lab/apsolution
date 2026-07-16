const fs = require('fs');
const path = require('path');

const profilesDir = path.join(__dirname, 'src', 'lib', 'businessProfiles');
const files = [
  'salon.ts', 'restaurant.ts', 'clinic.ts', 'gym.ts', 'retail.ts', 'manufacturing.ts', 'professional.ts', 'other.ts'
];

files.forEach(file => {
  const filePath = path.join(profilesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(/}\\n};/g, '}\n};');
  
  fs.writeFileSync(filePath, content);
  console.log('Fixed', file);
});
