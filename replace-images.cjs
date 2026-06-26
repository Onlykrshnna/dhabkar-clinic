const fs = require('fs');
let html = fs.readFileSync('public/index.html', 'utf8');

const replacements = [
    [/\.\/assets\/images\/docter_with_group\.avif/g, 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop'],
    [/\.\/assets\/images\/docter_with_patient\.avif/g, 'https://images.unsplash.com/photo-1551076805-e1869043e560?q=80&w=800&auto=format&fit=crop'],
    [/\.\/assets\/images\/clinic_image\.avif/g, 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop'],
    [/\.\/assets\/images\/docter_image\.avif/g, 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop'],
    [/\.\/assets\/images\/patients-before\.png/g, 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop'],
    [/\.\/assets\/images\/patients-after\.png/g, 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop']
];

for (let [pattern, replacement] of replacements) {
    html = html.replace(pattern, replacement);
}

fs.writeFileSync('public/index.html', html);
console.log("Images replaced successfully.");
