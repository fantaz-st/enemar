const site = {
  name: "EnEMar",
  description: "Energetska učinkovitost i smanjenje emisija štetnih plinova u pomorskom prometu",
  locale: "hr",

  menu: {
    hr: "main-menu-hr",
    en: "main-menu-en",
  },

  header: {
    sticky: true,
    transparent: false,
    textColorInvert: false,
    height: 72,
    solidOnScroll: true,
    solidOnScrollOffset: 12,
  },

  footer: {
    variant: "simple",

    summary: {
      title: "EnEMar",
      text: {
        hr: "Energetska učinkovitost i smanjenje emisija štetnih plinova u pomorskom prometu",
        en: "Energy efficiency and reduction of harmful gas emissions in maritime transport",
      },
    },

    links: [
      { label: "PFST", href: "https://www.pfst.unist.hr" },
      { label: "University of Split", href: "https://www.unist.hr" },
    ],

    copyright: {
      owner: {
        hr: "Sveučilište u Splitu, Pomorski fakultet",
        en: "Faculty of Maritime Studies, University of Split",
      },
      year: "auto",
    },
  },

  backToTop: {
    enabled: true,
    showAfter: 300,
    position: "right",
  },

  project: {
    title: {
      hr: "EnEMar – Energetska učinkovitost i smanjenje emisija štetnih plinova u pomorskom prometu primjenom integriranih tehničkih i operativnih mjera",
      en: "EnEMar – Energy efficiency and reduction of harmful gas emissions in maritime transport through integrated technical and operational measures",
    },

    acronym: "EnEMar",

    coordinator: {
      hr: "Pomorski fakultet, Sveučilište u Splitu",
      en: "Faculty of Maritime Studies, University of Split",
    },

    lead: {
      hr: "doc. dr. sc. Zdeslav Jurić",
      en: "Assist. Prof. Zdeslav Jurić, PhD",
    },

    funding: {
      hr: "NPOO - programski ugovori",
      en: "NPOO - programme contracts",
    },

    value: "211.283,10 €",

    duration: {
      hr: "1. listopada 2025. – 30. rujna 2029.",
      en: "1 October 2025 – 30 September 2029",
    },

    shortDescription: {
      hr: "Projekt istražuje i uspoređuje tehnološke i operativne mjere za povećanje energetske učinkovitosti i smanjenje emisija štetnih plinova u pomorskom prometu.",
      en: "The project investigates and compares technological and operational measures aimed at improving energy efficiency and reducing harmful gas emissions in maritime transport.",
    },

    description: {
      hr: `Pomorski promet čini značajan udio u globalnim emisijama stakleničkih plinova (GHG), uslijed korištenja fosilnih goriva poput HFO-a i MDO-a. Sukladno novim međunarodnim i europskim propisima, uključujući ažuriranu IMO GHG strategiju iz 2023., EU ETS, FuelEU Maritime te mjeru u razmatranju GHG Fuel Intensity (GFI), brodarski sektor je pod sve većim pritiskom da poveća energetsku učinkovitost i smanji emisije.

Cilj projekta EnEMar je istražiti i usporediti tehnološke i operativne mjere koje vode prema dekarbonizaciji pomorskog prometa. Projekt uključuje analizu primjene tehničkih i operativnih mjera na brodovima, modeliranje mjera za povećanje energetske učinkovitosti te razvoj smjernica za donošenje odluka u brodarskoj praksi.

Dubinskom analizom postojećih rješenja, uključujući TtW analizu i aktualna istraživanja, odredit će se učinci pojedinih mjera, njihove prednosti i nedostaci te izvedivost njihove implementacije u industriji. Fokus projekta je na energetskoj učinkovitosti brodova i posljedičnom smanjenju emisija štetnih plinova.

Očekivani rezultati uključuju komparativnu analizu operativno-tehničkih mjera kao osnovu za odlučivanje brodovlasnicima, regulatorima i industrijskim partnerima.`,
      en: `Maritime transport accounts for a significant share of global greenhouse gas (GHG) emissions due to the use of fossil fuels such as HFO and MDO. In line with new international and European regulations, including the updated IMO GHG Strategy from 2023, EU ETS, FuelEU Maritime, and the proposed GHG Fuel Intensity (GFI) measure, the shipping sector is under growing pressure to improve energy efficiency and reduce emissions.

The goal of the EnEMar project is to investigate and compare technological and operational measures leading to the decarbonisation of maritime transport. The project includes the analysis of the application of technical and operational measures on ships, the modelling of measures for improving energy efficiency, and the development of guidelines to support decision-making in shipping practice.

Through an in-depth analysis of existing solutions, including TtW analysis and current research, the project will determine the effects of individual measures, their advantages and disadvantages, and the feasibility of their implementation in the industry. The project focuses on ship energy efficiency and the resulting reduction of harmful gas emissions.

Expected results include a comparative analysis of operational and technical measures as a basis for decision-making for shipowners, regulators, and industry partners.`,
    },

    workPackages: [
      {
        slug: "analiza-i-klasifikacija-mjera",
        short: "WP1",
        title: {
          hr: "Analiza i klasifikacija mjera energetske učinkovitosti",
          en: "Analysis and classification of energy efficiency measures",
        },
        description: {
          hr: "Sustavna analiza i klasifikacija postojećih mjera za povećanje energetske učinkovitosti i smanjenje emisija u pomorskom prometu.",
          en: "Systematic analysis and classification of existing measures for improving energy efficiency and reducing emissions in maritime transport.",
        },
      },
      {
        slug: "istrazivanje-ponasanja-pomoraca",
        short: "WP2",
        title: {
          hr: "Istraživanje ponašanja pomoraca",
          en: "Research on seafarers’ behaviour",
        },
        description: {
          hr: "Utvrđivanje razine svijesti pomoraca o energetskoj učinkovitosti, mogućnostima uštede energije i čimbenicima koji utječu na energetski odgovorno ponašanje.",
          en: "Assessment of seafarers’ awareness of energy efficiency, energy-saving opportunities, and factors influencing energy-responsible behaviour.",
        },
      },
      {
        slug: "analiticke-i-numericke-simulacije",
        short: "WP3",
        title: {
          hr: "Analitičke i numeričke simulacije",
          en: "Analytical and numerical simulations",
        },
        description: {
          hr: "Modeliranje i simuliranje učinaka odabranih mjera s ciljem procjene povećanja energetske učinkovitosti na razini broda i/ili flote.",
          en: "Modelling and simulation of selected measures to assess improvements in energy efficiency at ship and/or fleet level.",
        },
      },
      {
        slug: "eksperimentalna-validacija",
        short: "WP4",
        title: {
          hr: "Eksperimentalna validacija",
          en: "Experimental validation",
        },
        description: {
          hr: "Eksperimentalna provjera i potvrda rezultata dobivenih analizama i simulacijama u kontekstu stvarne primjene.",
          en: "Experimental verification and validation of results obtained through analyses and simulations in the context of real-world application.",
        },
      },
      {
        slug: "ttw-evaluacija",
        short: "WP5",
        title: {
          hr: "TtW evaluacija i usporedba mjera",
          en: "TtW evaluation and comparison of measures",
        },
        description: {
          hr: "Usporedba učinkovitosti različitih mjera kroz Tank-to-Wake pristup i procjenu njihove primjenjivosti u praksi.",
          en: "Comparison of different measures through a Tank-to-Wake approach and evaluation of their practical applicability.",
        },
      },
      {
        slug: "preporuke-i-komunikacija",
        short: "WP6",
        title: {
          hr: "Izrada preporuka mjera i komunikacija rezultata",
          en: "Development of measure recommendations and communication of results",
        },
        description: {
          hr: "Izrada preporuka za povećanje energetske učinkovitosti i smanjenje emisija te komunikacija i diseminacija projektnih rezultata prema dionicima iz struke.",
          en: "Preparation of recommendations for improving energy efficiency and reducing emissions, along with communication and dissemination of project results to professional stakeholders.",
        },
      },
    ],
  },
};

export default site;
