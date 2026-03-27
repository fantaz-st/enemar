import PolicyRoundedIcon from "@mui/icons-material/PolicyRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
const about = {
  hr: {
    eyebrow: "O projektu",
    title: "Istraživanje i dekarbonizacija",
    lead: "Projekt EnEMar istražuje tehnološke i operativne mjere koje vode prema dekarbonizaciji pomorskog prometa, s naglaskom na energetsku učinkovitost, modeliranje i smanjenje emisija štetnih plinova.",
    blocks: [
      {
        key: "01",
        title: "Kontekst i regulativa",
        text: "Pomorski sektor suočen je s rastućim zahtjevima novih međunarodnih i europskih propisa, uključujući IMO GHG strategiju, EU ETS i FuelEU Maritime, uz i dalje značajnu ovisnost o fosilnim gorivima.",
        icon: <PolicyRoundedIcon />,
      },
      {
        key: "02",
        title: "Integrirani pristup",
        text: "Projekt povezuje analizu postojećih mjera, TtW evaluaciju, numeričko modeliranje i procjenu stvarne primjenjivosti mjera na razini broda i flote.",
        icon: <HubRoundedIcon />,
      },
      {
        key: "03",
        title: "Cilj i izvrsnost",
        text: "EnEMar razvija komparativnu osnovu za donošenje odluka u brodarskoj praksi te istodobno potiče znanstvenu izvrsnost, otvorenu znanost i suradnju s industrijom.",
        icon: <AutoGraphRoundedIcon />,
      },
    ],
  },
  en: {
    eyebrow: "About the Project",
    title: "Research & Decarbonization",
    lead: "The EnEMar project investigates technological and operational measures leading to the decarbonisation of maritime transport, with a focus on energy efficiency, modelling, and the reduction of harmful emissions.",
    blocks: [
      {
        key: "01",
        title: "Context & Regulation",
        text: "The maritime sector is facing growing demands from new international and European regulations, including the IMO GHG Strategy, EU ETS, and FuelEU Maritime, while still relying heavily on fossil fuels.",
        icon: <PolicyRoundedIcon />,
      },
      {
        key: "02",
        title: "Integrated Approach",
        text: "The project connects the analysis of existing measures, TtW evaluation, numerical modelling, and assessment of practical applicability at ship and fleet level.",
        icon: <HubRoundedIcon />,
      },
      {
        key: "03",
        title: "Goal & Excellence",
        text: "EnEMar develops a comparative basis for decision-making in shipping practice while also promoting scientific excellence, open science, and collaboration with industry stakeholders.",
        icon: <AutoGraphRoundedIcon />,
      },
    ],
  },
};

export default about;
