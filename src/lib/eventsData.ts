export interface EventCoordinator {
  name: string;
  phone: string;
}

export interface EventData {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  category: string;
  teamSize?: string;
  image: string;
  coordinators: EventCoordinator[];
  formUrl: string; // Placeholder for Google Form
  timeLimit?: string;
  technicalRequirements?: string[];
}

export const eventsData: EventData[] = [
  {
    id: "dance",
    title: "Nritya Kala",
    slug: "nritya-kala",
    subtitle: "Solo & Group Dance",
    category: "Solo/Team",
    teamSize: "Solo or 6-12 (Group)",
    image: "nritya-kala",
    coordinators: [{ name: "Karthik", phone: "7338128020" }],
    formUrl: "#dance-form",
    technicalRequirements: ["MP3 format", "USB backup", "Mic requirements in advance"]
  },
  {
    id: "solo-singing",
    title: "Sur Tattva",
    slug: "sur-tattva",
    subtitle: "Solo Singing",
    category: "Solo",
    image: "sur-tattva",
    coordinators: [{ name: "Joey", phone: "7406165866" }],
    formUrl: "#solo-singing-form",
    technicalRequirements: ["MP3 track", "USB backup"]
  },
  {
    id: "group-singing",
    title: "Sangeetvatika",
    slug: "sangeetvatika",
    subtitle: "Group Singing",
    category: "Team",
    teamSize: "3-6 members",
    image: "sangeetvatika",
    coordinators: [{ name: "Joey", phone: "7406165866" }],
    formUrl: "#group-singing-form",
    technicalRequirements: ["Instrument list in advance", "Backing track on USB if needed"]
  },
  {
    id: "debate",
    title: "Vakya Yuddha",
    slug: "vakya-yuddha",
    subtitle: "Debate",
    category: "Team",
    teamSize: "2 members",
    image: "vakya-yuddha",
    coordinators: [{ name: "BakirKhan", phone: "7618782715" }],
    formUrl: "#debate-form",
  
  },
  {
    id: "arts",
    title: "Kala Pradarshan",
    slug: "kala-pradarshan",
    subtitle: "Arts",
    category: "Solo",
    image: "kala-pradarshan",
    coordinators: [{ name: "Aishwarya H", phone: "7204505342" }],
    formUrl: "#arts-form",
    technicalRequirements: ["Bring own colors and tools", "Base materials provided"]
  },
  {
    id: "photography",
    title: "Chitraloka",
    slug: "chitraloka",
    subtitle: "Photography",
    category: "Solo",
    image: "chitraloka",
    coordinators: [{ name: "Anup G", phone: "8951631714" }],
    formUrl: "#photography-form",
    technicalRequirements: ["Camera/smartphone", "Editing software (optional)", "File format: RAW + JPEG"]
  },
  {
    id: "mr-miss",
    title: "Karmakshetra",
    slug: "karmakshetra",
    subtitle: "Mr & Miss Rythm",
    category: "Solo",
    image: "karmakshetra",
    coordinators: [{ name: "Sanjana", phone: "8073239250" }],
    formUrl: "#mr-miss-form",
    technicalRequirements: ["Own music track for talent round (USB)", "Two outfit changes"]
  },
  {
    id: "treasure-hunt",
    title: "Vijaya Margah",
    slug: "vijaya-margah",
    subtitle: "Treasure Hunt",
    category: "Team",
    teamSize: "4-6 members",
    image: "vijaya-margah",
    coordinators: [
      { name: "Sujal S", phone: "9113228210" },
      { name: "Shubham B", phone: "9731251623" },
      { name: "Prathamesh K", phone: "7338330755" },
      { name: "Suprit", phone: "6361062015" }
    ],
    formUrl: "#treasure-hunt-form",
    
  },
  {
    id: "gaming",
    title: "Yuddha Kshetra",
    slug: "yuddha-kshetra",
    subtitle: "Gaming",
    category: "Team",
    teamSize: "Varies by game",
    image: "yuddha-kshetra",
    coordinators: [
      { name: "Prathamesh S", phone: "9980628947" },
      { name: "Sakshi A", phone: "9632354078" }
    ],
    formUrl: "#gaming-form",
    technicalRequirements: ["Game account verification", "Device (or use provided PCs/consoles)"]
  },
  {
    id: "street-play",
    title: "Janajagruti",
    slug: "janajagruti",
    subtitle: "Street Play",
    category: "Team",
    teamSize: "8-18 members",
    image: "janajagruti",
    coordinators: [{ name: "Arun T", phone: "8431026141" }],
    formUrl: "#street-play-form",
    
  },
  {
    id: "fashion-show",
    title: "Rupotsavah",
    slug: "rupotsavah",
    subtitle: "Fashion Show",
    category: "Team",
    teamSize: "8-12 models + 1 stylist",
    image: "rupotsavah",
    coordinators: [{ name: "Shrushti B", phone: "7019938439" }],
    formUrl: "#fashion-show-form",
    technicalRequirements: ["Music track (USB)", "Outfit change backstage", "Lighting brief"]
  },
  {
    id: "special-round",
    title: "Dharma Chakra",
    slug: "dharma-chakra",
    subtitle: "Special Round",
    category: "Team",
    teamSize: "3-5 members from different events",
    image: "special-round",
    coordinators: [{ name: "Om U", phone: "7996613799" }],
    formUrl: "#special-round-form",
    
  }
];

export const getEventBySlug = (slug: string) => {
  return eventsData.find(event => event.slug === slug);
};

export const getWhatsAppMessage = (eventTitle: string, coordinatorName: string) => {
  return encodeURIComponent(
    `Hello ${coordinatorName}, I'd like to register for ${eventTitle} at Rythm 2025.\n\nName: [Your Name]\nInstitute: [Your College]\nCourse/Year: [Your Year]\nCategory/Team size: [Details]\nQuestions: [If any]`
  );
};
