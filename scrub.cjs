const fs = require('fs');
let content = fs.readFileSync('public/index.html', 'utf8');

// Replacements
const replacements = [
    [/dental/g, 'medical'],
    [/Dental/g, 'Medical'],
    [/dentist/g, 'doctor'],
    [/Dentist/g, 'Doctor'],
    [/tooth/gi, 'health'],
    [/teeth/gi, 'patients'],
    [/smile/g, 'care'],
    [/Smile/g, 'Care'],
    [/oral/g, 'overall'],
    [/Oral/g, 'Overall'],
    [/BDS, MDS/g, 'MD, DM'],
    [/Pedodontics/g, 'Cardiology'],
    [/Govt\. Medical College, Bangalore/g, 'Govt. Medical College'], // just in case
    [/Govt\. Dental College/g, 'Govt. Medical College'],
    [/Invisalign, implants, veneers, patients whitening/gi, 'Cardiology, Pathology, Health Checkups'],
    [/Invisalign, implants, veneers, teeth whitening/gi, 'Cardiology, Pathology, Health Checkups'],
    [/Medical Implants/g, 'Health Checkups'],
    [/Patients Whitening/gi, 'Pathology Tests'],
    [/patients whitening/gi, 'pathology tests'],
    [/Complete patients whitening treatment/g, 'Complete pathology checkup'],
    [/Medical implant restoration/g, 'Medical health restoration'],
    [/Medical surgeon/gi, 'Medical Specialist'],
    [/medical tools and handpieces/g, 'medical diagnostic equipment']
];

for (let [pattern, replacement] of replacements) {
    content = content.replace(pattern, replacement);
}

fs.writeFileSync('public/index.html', content);
console.log("Scrubbed successfully.");
