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
  overview: string;
  categories?: string[];
  eligibility: string[];
  timeLimit: string;
  rules: string[];
  judging: { criterion: string; weight: string }[];
  importantNotes: string[];
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
    overview: "Celebrate classical, folk, western, and fusion dance forms. Express tradition with modern energy.",
    categories: ["Solo (3-4 min)", "Group (5-7 min, 6-12 members)"],
    eligibility: ["Open to all PUC students", "Traditional, contemporary, or fusion styles welcome"],
    timeLimit: "Solo: 3-4 min | Group: 5-7 min | Setup: 1 min",
    rules: [
      "Music: MP3 via USB + backup copy required",
      "No explicit content in lyrics or choreography",
      "Wooden stage with wash and spotlights provided",
      "Up to 4 vocal mics available"
    ],
    judging: [
      { criterion: "Technique & Skill", weight: "30%" },
      { criterion: "Choreography & Creativity", weight: "25%" },
      { criterion: "Expression & Energy", weight: "20%" },
      { criterion: "Synchronization (Group)", weight: "15%" },
      { criterion: "Theme & Costume", weight: "10%" }
    ],
    importantNotes: [
      "Props must be self-managed and stage-safe",
      "Arrive 30 minutes before slot for sound check"
    ],
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
    overview: "Indian classical, semi-classical, folk, indie, and fusion vocal performances.",
    categories: ["Solo Vocal", "Duet Vocal"],
    eligibility: ["PUC students with vocal talent", "Any Indian language or fusion style"],
    timeLimit: "Solo/Duet: 3-4 min",
    rules: [
      "Bring your own track or perform with provided tabla/keyboard",
      "No explicit content",
      "2 DI channels and 3 vocal mics provided"
    ],
    judging: [
      { criterion: "Sur & Taal (Pitch & Rhythm)", weight: "35%" },
      { criterion: "Expression & Emotion", weight: "20%" },
      { criterion: "Arrangement & Creativity", weight: "20%" },
      { criterion: "Originality", weight: "15%" },
      { criterion: "Stage Presence", weight: "10%" }
    ],
    importantNotes: [
      "Sound check 20 minutes prior",
      "Track must be in MP3 format on USB"
    ],
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
    overview: "Band performances celebrating Indian classical, fusion, and contemporary music.",
    categories: ["Instrumental Solo", "Band (3-6 members, 6-8 min)"],
    eligibility: ["PUC students", "Any combination of vocals and instruments"],
    timeLimit: "Band: 6-8 min",
    rules: [
      "Backline: Keyboard stand, cajon/tabla stands, 2 DI, 3 vocal mics",
      "Bring own instruments (except keyboard/cajon)",
      "No pre-recorded tracks except backing track"
    ],
    judging: [
      { criterion: "Sur & Taal", weight: "35%" },
      { criterion: "Expression", weight: "20%" },
      { criterion: "Arrangement", weight: "20%" },
      { criterion: "Originality", weight: "15%" },
      { criterion: "Stagecraft & Ensemble", weight: "10%" }
    ],
    importantNotes: [
      "Technical rider must be submitted 48 hours in advance",
      "Instrument setup time: 5 minutes max"
    ],
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
    overview: "Oxford-style debate with ethics focus. Prelims prepared, semis & finals impromptu.",
    categories: ["Teams of Two", "Prelims: Prepared | Semis & Finals: Impromptu"],
    eligibility: ["PUC students", "Fluency in English or Hindi"],
    timeLimit: "Constructive: 5 min | Rebuttal: 3 min | POIs allowed after 1 min",
    rules: [
      "Prelims: Motion released 24 hours prior",
      "Semis & Finals: Motion revealed 30 minutes before round",
      "POIs (Points of Information) permitted after first minute"
    ],
    judging: [
      { criterion: "Argumentation & Logic", weight: "30%" },
      { criterion: "Evidence & Research", weight: "20%" },
      { criterion: "Rebuttal & Refutation", weight: "25%" },
      { criterion: "Rhetoric & Delivery", weight: "15%" },
      { criterion: "Etiquette & Decorum", weight: "10%" }
    ],
    importantNotes: [
      "Sample motions: 'Duty must outrank desire' | 'Cultural preservation should guide tech policy'",
      "Final round judged by expert panel"
    ]
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
    overview: "On-spot painting, rangoli, and poster creation echoing Karma • Dharma.",
    categories: ["Canvas (A2)", "Rangoli (1.5×1.5 m)", "Poster (A3)"],
    eligibility: ["PUC students", "All skill levels welcome"],
    timeLimit: "120 minutes",
    rules: [
      "Theme: Karma • Dharma",
      "Base supplies provided (canvas, rangoli powder, poster sheets)",
      "Bring own colors, brushes, and tools",
      "Work must be original and created on-spot"
    ],
    judging: [
      { criterion: "Composition & Layout", weight: "30%" },
      { criterion: "Theme Interpretation", weight: "30%" },
      { criterion: "Technique & Skill", weight: "25%" },
      { criterion: "Originality", weight: "15%" }
    ],
    importantNotes: [
      "Workspace assigned on arrival",
      "All materials subject to inspection (no pre-made work)"
    ],
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
    overview: "24-hour campus challenge + themed on-spot brief.",
    categories: ["Mobile Photography", "DSLR/Mirrorless"],
    eligibility: ["PUC students", "Own camera or smartphone required"],
    timeLimit: "24-hour challenge window",
    rules: [
      "Basic edits only (exposure, crop, color correction)",
      "Submit RAW + JPEG",
      "Geo-tag and metadata required",
      "No stock images or AI-generated content"
    ],
    judging: [
      { criterion: "Storytelling & Narrative", weight: "30%" },
      { criterion: "Composition & Framing", weight: "25%" },
      { criterion: "Technical Quality", weight: "25%" },
      { criterion: "Theme Adherence", weight: "20%" }
    ],
    importantNotes: [
      "Theme brief released at inauguration",
      "Submission deadline: 24 hours post-release",
      "Model release forms required if people are featured"
    ],
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
    overview: "Personality pageant celebrating talent, grace, and social awareness.",
    categories: ["Mr Rythm", "Miss Rythm"],
    eligibility: ["PUC students", "Confidence, talent, and social awareness"],
    timeLimit: "Ethnic Walk (3 min) | Talent (2-3 min) | Q&A (2 min) | Ramp Finale (5 min)",
    rules: [
      "Ethnic Walk: Traditional Indian attire",
      "Talent Round: Any talent (2-3 min performance)",
      "Q&A: Questions on ethics, values, and social responsibility",
      "Ramp Finale: Western/fusion attire"
    ],
    judging: [
      { criterion: "Poise & Confidence", weight: "25%" },
      { criterion: "Talent Performance", weight: "30%" },
      { criterion: "Communication & Articulation", weight: "25%" },
      { criterion: "Social Impact & Awareness", weight: "20%" }
    ],
    importantNotes: [
      "Attire for both rounds must be appropriate and elegant",
      "Talent props must be self-managed"
    ],
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
    overview: "Campus-wide clues inspired by epics and virtues.",
    eligibility: ["PUC students", "Teams of 4-6"],
    timeLimit: "90 minutes",
    rules: [
      "Clues based on Indian epics, ethics, and virtues",
      "Stay within designated campus zones",
      "Marshals stationed for safety and guidance",
      "No restricted areas; follow all safety protocols"
    ],
    judging: [
      { criterion: "Speed & Efficiency", weight: "40%" },
      { criterion: "Teamwork & Strategy", weight: "30%" },
      { criterion: "Clue Interpretation", weight: "20%" },
      { criterion: "Sportsmanship", weight: "10%" }
    ],
    importantNotes: [
      "First-aid stations available throughout campus",
      "Mobile phones allowed only for emergency contact"
    ]
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
    overview: "BGMI (squads), FC-25 (1v1), Valorant (5v5).",
    categories: ["BGMI Squads (4 players)", "FC-25 1v1", "Valorant 5v5"],
    eligibility: ["PUC students", "Own device or use provided setups"],
    timeLimit: "Tournament format: Double-elimination | Finals: Best-of-three",
    rules: [
      "Standard competitive settings for all games",
      "Anti-cheat software enabled",
      "All participants must verify game accounts",
      "No external assistance during matches"
    ],
    judging: [
      { criterion: "Skill & Strategy", weight: "50%" },
      { criterion: "Teamwork & Communication", weight: "30%" },
      { criterion: "Sportsmanship", weight: "20%" }
    ],
    importantNotes: [
      "Game IDs and rank verification required during registration",
      "Matches refereed by certified admins"
    ],
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
    overview: "Nukkad natak on civic responsibility and ethics.",
    eligibility: ["PUC students", "Teams of 8-18"],
    timeLimit: "12-15 minutes",
    rules: [
      "Theme: Civic responsibility, ethics, and social change",
      "Minimal props allowed",
      "Percussion instruments permitted (no electronic amplification)",
      "Performance in open quadrangle space"
    ],
    judging: [
      { criterion: "Message & Relevance", weight: "30%" },
      { criterion: "Ensemble Performance", weight: "30%" },
      { criterion: "Acting & Expression", weight: "25%" },
      { criterion: "Audience Impact", weight: "15%" }
    ],
    importantNotes: [
      "Script must be submitted 24 hours in advance",
      "All props must be safe and eco-friendly"
    ]
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
    overview: "'Roots & Ramps' (ethnic silhouettes) | 'Neo-Dharma' (sustainable modern).",
    categories: ["Roots & Ramps (Ethnic)", "Neo-Dharma (Sustainable Modern)"],
    eligibility: ["PUC students", "Teams of 8-12 models + 1 stylist"],
    timeLimit: "8-10 minutes",
    rules: [
      "Two themes: Traditional ethnic wear + Sustainable contemporary fashion",
      "All outfits must be original or ethically sourced",
      "Music track on USB (edited to match show duration)",
      "Backstage setup allowed 15 minutes before slot"
    ],
    judging: [
      { criterion: "Styling & Design", weight: "25%" },
      { criterion: "Cohesion & Theme", weight: "25%" },
      { criterion: "Craftsmanship & Detail", weight: "20%" },
      { criterion: "Walk & Music Sync", weight: "20%" },
      { criterion: "Theme Interpretation", weight: "10%" }
    ],
    importantNotes: [
      "Stylist statement (200 words) on sustainability and inspiration required",
      "Runway is 40 feet long with professional lighting"
    ],
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
    overview: "Cross-discipline surprise challenge revealed on Day 2. High-energy, friendly, and safe.",
    eligibility: ["Participants from at least 2 different events", "Teams of 3-5"],
    timeLimit: "Challenge duration announced on Day 2",
    rules: [
      "Details revealed on Day 2 afternoon",
      "Friendly, creative, and safe challenges",
      "No prior preparation; all materials provided on-spot",
      "Emphasis on collaboration and creativity over competition"
    ],
    judging: [
      { criterion: "Creativity & Innovation", weight: "40%" },
      { criterion: "Collaboration & Teamwork", weight: "30%" },
      { criterion: "Feasibility & Execution", weight: "20%" },
      { criterion: "Presentation", weight: "10%" }
    ],
    importantNotes: [
      "Participants from multiple events encouraged",
      "Challenge is designed to be fun, safe, and inclusive"
    ]
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
