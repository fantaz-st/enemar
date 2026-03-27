import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import PsychologyAltRoundedIcon from "@mui/icons-material/PsychologyAltRounded";
import ModelTrainingRoundedIcon from "@mui/icons-material/ModelTrainingRounded";
import ScienceRoundedIcon from "@mui/icons-material/ScienceRounded";
import CompareArrowsRoundedIcon from "@mui/icons-material/CompareArrowsRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";

const workPackages = {
  hr: {
    eyebrow: "Radni paketi",
    title: "Struktura istraživanja",
    lead: "Projekt EnEMar organiziran je kroz šest međusobno povezanih radnih paketa koji obuhvaćaju analizu, modeliranje, validaciju i komunikaciju rezultata.",
    more: "Saznaj više",
    items: [
      {
        key: "WP1",
        title: "Analiza i klasifikacija mjera",
        text: "Sustavna analiza i klasifikacija postojećih mjera za povećanje energetske učinkovitosti i smanjenje emisija u pomorskom prometu.",
        href: "/hr/radni-paketi/analiza-i-klasifikacija-mjera",
        icon: <InsightsRoundedIcon />,
      },
      {
        key: "WP2",
        title: "Istraživanje ponašanja pomoraca",
        text: "Ispitivanje razine svijesti pomoraca o energetskoj učinkovitosti, mogućnostima uštede energije i čimbenicima odgovornog ponašanja.",
        href: "/hr/radni-paketi/istrazivanje-ponasanja-pomoraca",
        icon: <PsychologyAltRoundedIcon />,
      },
      {
        key: "WP3",
        title: "Analitičke i numeričke simulacije",
        text: "Modeliranje i simuliranje učinaka odabranih mjera s ciljem procjene povećanja energetske učinkovitosti na razini broda i flote.",
        href: "/hr/radni-paketi/analiticke-i-numericke-simulacije",
        icon: <ModelTrainingRoundedIcon />,
      },
      {
        key: "WP4",
        title: "Eksperimentalna validacija",
        text: "Eksperimentalna provjera i potvrda rezultata dobivenih analizama i simulacijama u kontekstu stvarne primjene.",
        href: "/hr/radni-paketi/eksperimentalna-validacija",
        icon: <ScienceRoundedIcon />,
      },
      {
        key: "WP5",
        title: "TtW evaluacija i usporedba mjera",
        text: "Usporedba učinkovitosti različitih mjera kroz Tank-to-Wake pristup i procjenu njihove primjenjivosti u praksi.",
        href: "/hr/radni-paketi/ttw-evaluacija",
        icon: <CompareArrowsRoundedIcon />,
      },
      {
        key: "WP6",
        title: "Preporuke i komunikacija rezultata",
        text: "Izrada preporuka za povećanje energetske učinkovitosti i smanjenje emisija te komunikacija projektnih rezultata prema dionicima.",
        href: "/hr/radni-paketi/preporuke-i-komunikacija",
        icon: <CampaignRoundedIcon />,
      },
    ],
  },

  en: {
    eyebrow: "Work Packages",
    title: "Research Structure",
    lead: "The EnEMar project is organised through six interconnected work packages covering analysis, modelling, validation, and communication of results.",
    more: "Learn more",
    items: [
      {
        key: "WP1",
        title: "Analysis and classification of measures",
        text: "Systematic analysis and classification of existing measures for improving energy efficiency and reducing emissions in maritime transport.",
        href: "/en/work-packages/analysis-and-classification-of-measures",
        icon: <InsightsRoundedIcon />,
      },
      {
        key: "WP2",
        title: "Research on seafarers’ behaviour",
        text: "Assessment of seafarers’ awareness of energy efficiency, energy-saving opportunities, and factors influencing responsible behaviour.",
        href: "/en/work-packages/research-on-seafarers-behaviour",
        icon: <PsychologyAltRoundedIcon />,
      },
      {
        key: "WP3",
        title: "Analytical and numerical simulations",
        text: "Modelling and simulation of selected measures to assess energy-efficiency improvements at ship and fleet level.",
        href: "/en/work-packages/analytical-and-numerical-simulations",
        icon: <ModelTrainingRoundedIcon />,
      },
      {
        key: "WP4",
        title: "Experimental validation",
        text: "Experimental verification and validation of results obtained through analyses and simulations in a real-world context.",
        href: "/en/work-packages/experimental-validation",
        icon: <ScienceRoundedIcon />,
      },
      {
        key: "WP5",
        title: "TtW evaluation and comparison",
        text: "Comparison of different measures through a Tank-to-Wake approach and evaluation of their practical applicability.",
        href: "/en/work-packages/ttw-evaluation",
        icon: <CompareArrowsRoundedIcon />,
      },
      {
        key: "WP6",
        title: "Recommendations and communication",
        text: "Preparation of recommendations for improving energy efficiency and reducing emissions, alongside communication of project results.",
        href: "/en/work-packages/recommendations-and-communication",
        icon: <CampaignRoundedIcon />,
      },
    ],
  },
};

export default workPackages;
