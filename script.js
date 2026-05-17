const fs = require('fs');
const path = require('path');

const componentMappings = {
  'layout': ['Header.tsx', 'Footer.tsx', 'PageBanner.tsx', 'PageHeader.tsx'],
  'home': ['HeroSection.tsx', 'HotelSection.tsx', 'DestinationsSection.tsx', 'PackagesSection.tsx', 'TrustSection.tsx', 'FeaturesSection.tsx', 'ServicesGrid.tsx', 'ServicesSection.tsx', 'StatsSection.tsx', 'TestimonialsSection.tsx', 'CarRentalBanner.tsx', 'BlogSection.tsx'],
  'tours': ['ListingCard.tsx', 'GalleryViewer.tsx'],
  'shared': ['SectionHeading.tsx', 'BookingButton.tsx', 'BookingForm.tsx', 'BookingModal.tsx'],
  'blog': ['BlogCard.tsx', 'GuidesTeaser.tsx']
};

for (const [folder, files] of Object.entries(componentMappings)) {
  for (const file of files) {
    const oldPath = path.join('components', file);
    const newPath = path.join('components', folder, file);
    if (fs.existsSync(oldPath)) {
      fs.renameSync(oldPath, newPath);
      console.log('Moved', file, 'to', folder);
    }
  }
}

function updateImportsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  // Update component imports
  for (const [folder, files] of Object.entries(componentMappings)) {
    for (const file of files) {
      const componentName = file.replace('.tsx', '');
      const regex1 = new RegExp(`from ['"](@/)?components/${componentName}['"]`, 'g');
      const regex2 = new RegExp(`from ['"]\\.\\.?/components/${componentName}['"]`, 'g');
      
      if (regex1.test(content) || regex2.test(content)) {
        content = content.replace(regex1, `from "@/components/${folder}/${componentName}"`);
        content = content.replace(regex2, `from "@/components/${folder}/${componentName}"`);
        changed = true;
      }
    }
  }

  // Update data imports
  const dataRegex = /from ['"](@\/)?data\/dummyData['"]/g;
  if (dataRegex.test(content)) {
    content = content.replace(dataRegex, 'from "@/data/index"');
    changed = true;
  }
  const dataRegex2 = /from ['"]\.\.\/data\/dummyData['"]/g;
  if (dataRegex2.test(content)) {
    content = content.replace(dataRegex2, 'from "@/data/index"');
    changed = true;
  }
  const blogDataRegex = /from ['"](@\/)?data\/blogPosts['"]/g;
  if (blogDataRegex.test(content)) {
    content = content.replace(blogDataRegex, 'from "@/data/blogPosts"');
    changed = true;
  }
  const blogDataRegex2 = /from ['"]\.\.\/data\/blogPosts['"]/g;
  if (blogDataRegex2.test(content)) {
    content = content.replace(blogDataRegex2, 'from "@/data/blogPosts"');
    changed = true;
  }

  // Add next/image and replace img with Image
  if (content.includes('<img ') && !content.includes('from "next/image"') && !content.includes("from 'next/image'")) {
    content = 'import Image from "next/image";\n' + content;
    changed = true;
  }
  
  if (content.includes('<img ')) {
    content = content.replace(/<img\s([^>]+)>/g, (match, p1) => {
      let attrs = p1;
      if (!attrs.includes('alt=')) attrs += ' alt="Image"';
      if (!attrs.includes('width=')) attrs += ' width={1200}';
      if (!attrs.includes('height=')) attrs += ' height={800}';
      // Ensure closing tag
      if (!attrs.endsWith('/')) attrs += ' /';
      return `<Image ${attrs}>`;
    });
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      updateImportsInFile(fullPath);
    }
  }
}

processDirectory('app');
processDirectory('components');
console.log('Imports and Image tags updated');
