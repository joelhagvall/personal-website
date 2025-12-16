export interface Publication {
  title: string;
  description: string;
  urn: string;
  urnUrl: string;
  pdfUrl: string;
  year: number;
}

export const publications: Publication[] = [
  {
    title:
      "Analyzing Cybercrime Services and Trust Dynamics on the Dark Web: A Case Study of DarkDock Marketplace",
    description:
      "Bachelor thesis written by me and co author covering different aspects of cybercrimes present on the Tor network, published in 2024.",
    urn: "urn:nbn:se:su:diva-233982",
    urnUrl:
      "https://su.diva-portal.org/smash/record.jsf?pid=diva2%3A1955538&dswid=-9467",
    pdfUrl: "/media/bachelor-thesis.pdf",
    year: 2024,
  },
];
