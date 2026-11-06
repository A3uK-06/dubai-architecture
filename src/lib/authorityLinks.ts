export interface AuthorityReference {
  name: string;
  category: "Cadastral" | "Council" | "Architect";
  url: string;
  description: string;
}

const ARCHITECT_SITES: Record<string, string> = {
  "adrian smith": "https://smithgill.com/",
  "adrian smith + gordon gill": "https://smithgill.com/",
  "skidmore": "https://www.som.com/",
  "som": "https://www.som.com/",
  "foster": "https://www.fosterandpartners.com/",
  "norman foster": "https://www.fosterandpartners.com/",
  "zaha hadid": "https://www.zaha-hadid.com/",
  "shaun killa": "https://killadesign.com/",
  "killa": "https://killadesign.com/",
  "nikken": "https://www.nikken.co.jp/en/",
  "kohn pedersen fox": "https://www.kpf.com/",
  "kpf": "https://www.kpf.com/",
  "atkins": "https://www.atkinsrealis.com/",
  "ben van berkel": "https://www.unstudio.com/",
  "unstudio": "https://www.unstudio.com/",
  "norr": "https://norr.com/",
  "wsp": "https://www.wsp.com/",
  "ssh": "https://www.sshic.com/",
  "rsp": "https://rsp.ae/",
  "tom wright": "https://www.wkkarchitects.com/",
};

export function getArchitectWebsite(architectName: string): string {
  const lower = architectName.toLowerCase();
  for (const [key, site] of Object.entries(ARCHITECT_SITES)) {
    if (lower.includes(key)) {
      return site;
    }
  }
  return "https://www.architecture.com/"; // Royal Institute of British Architects (RIBA) default authority
}

export function getCtbuhUrl(buildingName: string): string {
  return `https://www.skyscrapercenter.com/city/dubai?query=${encodeURIComponent(buildingName)}`;
}

export function getDldRegistryUrl(): string {
  return "https://dubailand.gov.ae/en/open-data/";
}
