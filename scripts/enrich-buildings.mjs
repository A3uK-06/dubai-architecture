import fs from 'fs';

const engineeringData = {
  "burj-khalifa": {
    mainContractor: "Samsung C&T / BESIX / Arabtec Joint Venture",
    structuralEngineer: "Bill Baker / Skidmore, Owings & Merrill (SOM) & Hyder Consulting",
    mepEngineer: "Skidmore, Owings & Merrill (SOM)",
    urbanIntegration: "Connected via climatized metro link to Dubai Mall & Burj Khalifa/Dubai Mall Metro Station"
  },
  "emirates-towers": {
    mainContractor: "Al Ghurair Multiplex",
    structuralEngineer: "Hyder Consulting & Norr Group",
    mepEngineer: "Drake & Scull International",
    urbanIntegration: "Direct metro air-conditioned bridge to Emirates Towers Metro Station & DIFC gate"
  },
  "burj-al-arab": {
    mainContractor: "Murray & Roberts / Al Habtoor Engineering",
    structuralEngineer: "Atkins Global",
    mepEngineer: "Atkins Global",
    urbanIntegration: "Private causeway connection to Jumeirah Beach Road and Madinat Jumeirah"
  },
  "cayan-tower": {
    mainContractor: "Arabtec Construction",
    structuralEngineer: "Skidmore, Owings & Merrill (SOM)",
    mepEngineer: "Khatib & Alami",
    urbanIntegration: "Direct exit to Marina Walk and Dubai Tram Marina Towers station"
  },
  "museum-of-the-future": {
    mainContractor: "BAM International",
    structuralEngineer: "Buro Happold Engineering",
    mepEngineer: "Buro Happold Engineering",
    urbanIntegration: "Direct 212-meter pedestrian skybridge to Emirates Towers Metro Station"
  },
  "one-zaabeel": {
    mainContractor: "ALEC Engineering & Contracting",
    structuralEngineer: "Nikken Sekkei & WSP Middle East",
    mepEngineer: "WSP Middle East",
    urbanIntegration: "Elevated skyway bridge link to Dubai World Trade Centre & Max Metro Station"
  },
  "atlantis-the-royal": {
    mainContractor: "Six Construct (BESIX) / Ssangyong Engineering JV",
    structuralEngineer: "WSP Middle East",
    mepEngineer: "WSP Middle East",
    urbanIntegration: "Connected to Palm Jumeirah Monorail Crescent loop"
  },
  "princess-tower": {
    mainContractor: "Arabian Construction Company (ACC)",
    structuralEngineer: "Adnan Saffarini Office",
    mepEngineer: "National Engineering Bureau (NEB)",
    urbanIntegration: "Direct front-row frontage on Al Sufouh Tram Line & Marina Walk"
  },
  "marina-101": {
    mainContractor: "Sheffield Holdings / TAV Construction",
    structuralEngineer: "National Engineering Bureau (NEB)",
    mepEngineer: "National Engineering Bureau (NEB)",
    urbanIntegration: "Fast egress via King Salman Bin Abdulaziz Al Saud St"
  },
  "address-downtown": {
    mainContractor: "Arabtec Construction",
    structuralEngineer: "Atkins Global",
    mepEngineer: "Atkins Global",
    urbanIntegration: "Direct enclosed skybridge to Dubai Mall Fashion Avenue"
  },
  "almas-tower": {
    mainContractor: "Taisei Corporation / Arabian Construction Company (ACC)",
    structuralEngineer: "Atkins Global",
    mepEngineer: "Atkins Global",
    urbanIntegration: "Centrally positioned on JLT East Lake with direct footbridges to DMCC Metro Station"
  },
  "the-index-tower": {
    mainContractor: "Multiplex Constructions",
    structuralEngineer: "Foster + Partners & Halvorson and Partners",
    mepEngineer: "Foster + Partners & Battle McCarthy",
    urbanIntegration: "Direct internal airbridge connection to DIFC Gate Avenue concourse"
  },
  "wasl-tower": {
    mainContractor: "Arabtec / China State Construction (CSCEC)",
    structuralEngineer: "Werner Sobek Engineering",
    mepEngineer: "Werner Sobek Engineering",
    urbanIntegration: "Direct frontage on Sheikh Zayed Road with direct pedestrian access to Financial Centre Metro"
  },
  "burj-binghatti-jacob-co": {
    mainContractor: "Binghatti Contracting",
    structuralEngineer: "Binghatti Engineering Consulting & Thornton Tomasetti",
    mepEngineer: "Speirs Major & Binghatti In-House",
    urbanIntegration: "Direct access to Al Khail Road and Business Bay water canal water taxis"
  },
  "ciel-tower": {
    mainContractor: "China Railway 18th Bureau Group",
    structuralEngineer: "NORR Group Consultants",
    mepEngineer: "NORR Group Consultants",
    urbanIntegration: "Located adjacent to Marina Walk and Dubai Marina Tram station"
  },
  "franck-muller-aeternitas": {
    mainContractor: "London Gate Contracting",
    structuralEngineer: "WSP Middle East",
    mepEngineer: "Hilson Moran",
    urbanIntegration: "Positioned on Marina North corridor with swift access to Sheikh Zayed Road E11"
  },
  "il-primo": {
    mainContractor: "TAV Construction",
    structuralEngineer: "WSP Middle East",
    mepEngineer: "WSP Middle East",
    urbanIntegration: "Prime address directly opposite Dubai Opera on Mohammed Bin Rashid Boulevard"
  },
  "the-opus": {
    mainContractor: "Multiplex Constructions",
    structuralEngineer: "Buro Happold Engineering",
    mepEngineer: "Buro Happold Engineering",
    urbanIntegration: "Direct frontage on Al A'amal Street with quick link to Business Bay Metro"
  },
  "uptown-tower": {
    mainContractor: "BESIX (Six Construct)",
    structuralEngineer: "Adrian Smith + Gordon Gill Architecture & Thornton Tomasetti",
    mepEngineer: "Adrian Smith + Gordon Gill",
    urbanIntegration: "Central anchor of Uptown Dubai with direct highway ramps to First Al Khail St"
  },
  "sobha-seahaven": {
    mainContractor: "Sobha Constructions",
    structuralEngineer: "P&T Group",
    mepEngineer: "Sobha Engineering",
    urbanIntegration: "Frontline position on Dubai Harbour Marina Boulevard with yacht berths"
  },
  "the-palm-tower": {
    mainContractor: "Trojan General Contracting",
    structuralEngineer: "RSP Architects Planners & Engineers",
    mepEngineer: "RSP Engineering",
    urbanIntegration: "Integrated with Nakheel Mall and direct covered bridge to Palm Monorail"
  },
  "five-jumeirah-village": {
    mainContractor: "China State Construction Engineering Corporation (CSCEC)",
    structuralEngineer: "Atkins Global",
    mepEngineer: "Atkins Global",
    urbanIntegration: "Immediate vehicular egress to Al Khail Road (E44) and Hessa Street (D61)"
  },
  "vela-by-omniyat": {
    mainContractor: "Omniyat In-House / Roberts Construction",
    structuralEngineer: "Foster + Partners & Buro Happold",
    mepEngineer: "Buro Happold",
    urbanIntegration: "Direct private marina berth on Marasi Bay canal with water limousine transit"
  },
  "dubai-creek-residences": {
    mainContractor: "Al Basti & Muktha (ABM)",
    structuralEngineer: "SSH Design",
    mepEngineer: "SSH Design",
    urbanIntegration: "Frontline promenade position on Creek Marina with RTA water taxi station"
  },
  "address-sky-view": {
    mainContractor: "Arabian Construction Company (ACC)",
    structuralEngineer: "Skidmore, Owings & Merrill (SOM)",
    mepEngineer: "Skidmore, Owings & Merrill (SOM)",
    urbanIntegration: "Enclosed air-conditioned travelator bridge directly into Burj Khalifa/Dubai Mall Metro"
  },
  "mercedes-benz-places": {
    mainContractor: "Binghatti Contracting",
    structuralEngineer: "Binghatti Engineering & Thornton Tomasetti",
    mepEngineer: "Binghatti MEP Division",
    urbanIntegration: "Situated on Mohammed Bin Rashid Boulevard within 4 minutes walking distance to Dubai Mall"
  }
};

let bFile = fs.readFileSync('src/data/buildings.ts', 'utf8');

for (const [id, data] of Object.entries(engineeringData)) {
  const targetPattern = new RegExp(`(id:\\s*["']${id}["'][\\s\\S]*?structuralSystem:\\s*["'][^"']+["'],)`);
  const match = bFile.match(targetPattern);
  if (match) {
    const replacement = `${match[1]}
    mainContractor: "${data.mainContractor}",
    structuralEngineer: "${data.structuralEngineer}",
    mepEngineer: "${data.mepEngineer}",
    urbanIntegration: "${data.urbanIntegration}",`;
    bFile = bFile.replace(match[1], replacement);
    console.log(`Enriched: ${id}`);
  } else {
    console.warn(`Target not found for: ${id}`);
  }
}

fs.writeFileSync('src/data/buildings.ts', bFile, 'utf8');
console.log('Successfully enriched buildings.ts with comprehensive engineering credentials!');
