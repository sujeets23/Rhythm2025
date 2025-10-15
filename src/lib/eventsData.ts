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
  categories?: { label: string; formUrl: string; teamSize?: string }[];
  rules?: string;
}
export const eventsData: EventData[] = [
  {
    id: "solo-dance",
    title: "Nritya Kala (Solo)",
    slug: "nritya-kala-solo",
    subtitle: "Solo Dance",
    category: "Solo",
    image: "solo dancing",
    coordinators: [{ name: "Karthik", phone: "7338128020" }],
    formUrl: "#dance-solo-form",
    technicalRequirements: ["MP3 format", "USB backup", "Mic requirements in advance"],
    teamSize: "1 performer",
    rules: `\n## 💃 **SOLO DANCE RULES & REGULATIONS** 💃\n\n### **Performance Guidelines:**\n* **Time Limit:** 3-5 minutes per performance\n* **Music Format:** MP3 format required with USB backup\n* **Mic Requirements:** Inform coordinators in advance about mic needs\n* **Reporting Time:** Be present 15 minutes before the event starts\n\n### **General Rules:**\n* Original choreography encouraged but not mandatory\n* Costumes and props are allowed but must be safe\n* No offensive or inappropriate content\n* Respect college property and environment\n* Judges' decision will be final and binding\n\n### **Technical Requirements:**\n* Bring music in MP3 format\n* USB backup recommended\n* Inform about any special lighting or mic requirements beforehand\n`
  },
  {
    id: "group-dance",
    title: "Nritya Kala (Group)",
    slug: "nritya-kala-group",
    subtitle: "Group Dance",
    category: "Group",
    image: "group dance",
    coordinators: [{ name: "Karthik", phone: "7338128020" }],
    formUrl: "#dance-group-form",
    technicalRequirements: ["MP3 format", "USB backup", "Mic requirements in advance"],
    teamSize: "6-12 members",
    rules: `\n## 💃 **GROUP DANCE RULES & REGULATIONS** 💃\n\n### **Team Formation:**\n* **Team Size:** 6-12 members only\n* **Registration:** Teams must be registered before the event starts\n* **Team Name:** Each team must choose a unique team name\n\n### **Performance Guidelines:**\n* **Time Limit:** 4-6 minutes per performance\n* **Music Format:** MP3 format required with USB backup\n* **Mic Requirements:** Inform coordinators in advance about mic needs\n* **Reporting Time:** Be present 15 minutes before the event starts\n\n### **General Rules:**\n* Original choreography encouraged but not mandatory\n* Team coordination and synchronization will be judged\n* Costumes and props are allowed but must be safe\n* No offensive or inappropriate content\n* Respect college property and environment\n* Judges' decision will be final and binding\n\n### **Technical Requirements:**\n* Bring music in MP3 format\n* USB backup recommended\n* Inform about any special lighting or mic requirements beforehand\n`
  },
  {
    id: "solo-singing",
    title: "Sur Tattva",
    slug: "sur-tattva",
    subtitle: "Solo Singing",
    category: "Solo",
    image: "solo singing",
    coordinators: [{ name: "Joey", phone: "7406165866" }],
    formUrl: "#solo-singing-form",
    technicalRequirements: ["MP3 track", "USB backup"],
    timeLimit: "3–5 minutes (+1 min instrument setup)",
    rules: `\n## 🎤 **SOLO SINGING**\n\n### **ROUNDS**\n\n**Round 1 – Random of Your Choice**\n\n> Sing any song of your choice. Show your style and vocal range!\n\n**Round 2 – Mashup Round**\n\n> Create a mashup including the **given artist (from chits)** and **selected languages**. Be creative and blend smoothly!\n\n**Round 3 – Face Off**\n\n> The top finalists go head-to-head in a musical face-off. Bring your best energy and stage presence!\n\n### **RULES & REGULATIONS**\n\n* **Time Limit:** 3–5 minutes\n* **Instrument Setup Time:** Additional 1 minute if using instruments\n* **Languages:** English, Hindi, Kannada\n* **Reporting Time:** Be present **15 minutes before** the event starts\n* **Conduct:** Use of inappropriate or abusive language will lead to disqualification\n* **Instruments:** Inform the in-charge beforehand about any instruments you are bringing\n* **Karaoke:** Allowed\n* **Judging:** Judges' decision will be **final and binding**\n`
  },
  {
    id: "group-singing",
    title: "Sangeetvatika",
    slug: "sangeetvatika",
    subtitle: "Group Singing",
    category: "Group",
    teamSize: "4-8 members",
    image: "group singing",
    coordinators: [{ name: "Joey", phone: "7406165866" }],
    formUrl: "#group-singing-form",
    technicalRequirements: ["Instrument list in advance", "Backing track on USB if needed"],
    timeLimit: "3–5 minutes (+2 min setup)",
    rules: `\n## 🎵 **GROUP SINGING**\n\n### **ROUNDS**\n\n**Round 1 – Power Jam (of Your Choice)**\n\n> Perform a powerful group number that showcases your team's harmony and coordination.\n\n**Round 2 – Battle of Bands**\n\n> Groups compete head-to-head in an electrifying musical showdown. Creativity, teamwork, and energy will win the stage!\n\n### **RULES & REGULATIONS**\n\n* **Group Size:** Minimum 4 – Maximum 8 members\n* **Time Limit:** 3–5 minutes (+2 minutes for setup)\n* **Languages:** English, Hindi, Kannada\n* **Reporting Time:** Be present **15 minutes before** the event starts\n* **Conduct:** Use of inappropriate or abusive language will lead to disqualification\n* **Instruments:** Inform the in-charge beforehand; groups must bring their own instruments\n* **Karaoke:** Not allowed\n* **Judging:** Judges' decision will be **final and binding**\n`
  },
  {
    id: "debate",
    title: "Vakya Yuddha",
    slug: "vakya-yuddha",
    subtitle: "Debate",
    category: "Team",
    teamSize: "2 members",
    image: "debate",
    coordinators: [{ name: "BakirKhan", phone: "7618782715" }],
    formUrl: "#debate-form",
    rules: `\n## 🗣️ **DEBATE RULES & REGULATIONS** 🗣️\n\n### **Team Formation:**\n* **Team Size:** 2 members only (1 speaker + 1 researcher)\n* **Registration:** Teams must be registered before the event starts\n* **Team Name:** Each team must choose a unique team name\n\n### **Format:**\n* **Style:** Parliamentary debate format\n* **Time Limit:** 5 minutes for constructive speech, 3 minutes for rebuttal\n* **Topics:** Current affairs, social issues, and general knowledge topics\n* **Language:** English, Hindi, or Kannada\n\n### **General Rules:**\n* Research and preparation time will be provided\n* No use of electronic devices during the debate\n* Respectful discourse is mandatory\n* No personal attacks or offensive language\n* Stick to the topic and provide logical arguments\n* Judges' decision will be final and binding\n\n### **Evaluation Criteria:**\n* Content and argument quality\n* Delivery and presentation skills\n* Rebuttal and counter-arguments\n* Time management\n* Respect for opponents\n`
  },
  {
    id: "arts",
    title: "Kala Pradarshan",
    slug: "kala-pradarshan",
    subtitle: "Arts",
    category: "Solo",
    image: "arts",
    coordinators: [{ name: "R K Aditya", phone: "8919419327" }],
    formUrl: "#arts-form",
    technicalRequirements: ["Bring own colors and tools", "Base materials provided"],
    rules: `\n## 🎨 **ARTS RULES & REGULATIONS** 🎨\n\n### **Participation:**\n* **Format:** Individual participation only\n* **Registration:** Participants must register before the event starts\n* **Reporting Time:** Be present 15 minutes before the event starts\n\n### **Materials & Tools:**\n* **Participants:** Must bring their own colors, brushes, and tools\n* **Organizers:** Will provide base materials (canvas/paper)\n* **Additional:** Any special materials must be brought by participants\n\n### **Time & Format:**\n* **Duration:** 2-3 hours for completion\n* **Theme:** Will be announced on the spot\n* **Style:** Any art style is allowed (drawing, painting, sketching)\n\n### **General Rules:**\n* Original artwork only - no copying or tracing\n* Respect the workspace and clean up after completion\n* No offensive or inappropriate content\n* Artwork becomes property of the organizers for display\n* Judges' decision will be final and binding\n\n### **Evaluation Criteria:**\n* Creativity and originality\n* Technical skill and technique\n* Adherence to theme\n* Overall aesthetic appeal\n* Time management\n`
  },
  {
    id: "photography",
    title: "Chitraloka",
    slug: "chitraloka",
    subtitle: "Photography",
    category: "Solo",
    image: "photograpgy",
    coordinators: [{ name: "Anup G", phone: "8951631714" }],
    formUrl: "#photography-form",
    technicalRequirements: ["Camera/smartphone", "Editing software (optional)", "File format: RAW + JPEG"],
    rules: `\n## 📸 **PHOTOGRAPHY RULES & REGULATIONS** 📸\n\n### **Participation:**\n* **Format:** Individual participation only\n* **Registration:** Participants must register before the event starts\n* **Reporting Time:** Be present 15 minutes before the event starts\n\n### **Equipment & Requirements:**\n* **Camera:** DSLR, mirrorless, or smartphone (any camera allowed)\n* **File Format:** Submit in RAW + JPEG format\n* **Editing:** Basic editing software allowed (optional)\n* **Storage:** Bring your own memory cards/storage devices\n\n### **Competition Format:**\n* **Theme:** Will be announced on the spot\n* **Duration:** 2-3 hours for shooting\n* **Location:** College campus and nearby areas\n* **Submission:** Digital submission required\n\n### **General Rules:**\n* Original photographs only - no stock images or internet downloads\n* Respect privacy and obtain permission for portraits\n* No inappropriate or offensive content\n* Follow campus rules and regulations\n* Respect other participants and college property\n* Judges' decision will be final and binding\n\n### **Evaluation Criteria:**\n* Technical quality (focus, exposure, composition)\n* Creativity and artistic vision\n* Adherence to theme\n* Originality and uniqueness\n* Overall impact and appeal\n`
  },
  {
    id: "mr-miss",
    title: "Karmakshetra",
    slug: "karmakshetra",
    subtitle: "Mr & Miss Rythm",
    category: "Solo",
    image: "mr and miss",
    coordinators: [{ name: "R K Aditya", phone: "8919419327" }],
    formUrl: "#mr-miss-form",
    technicalRequirements: ["Own music track for talent round (USB)", "Two outfit changes"],
    rules: `\n## 👑 **MR & MISS RYTHM RULES & REGULATIONS** 👑\n\n### **Participation:**\n* **Format:** Individual participation (Male and Female categories)\n* **Registration:** Participants must register before the event starts\n* **Reporting Time:** Be present 30 minutes before the event starts\n\n### **Rounds:**\n* **Round 1:** Introduction and Walk (30 seconds)\n* **Round 2:** Talent Round (2-3 minutes)\n* **Round 3:** Q&A Round (1-2 minutes)\n* **Round 4:** Final Walk with Theme Outfit\n\n### **Requirements:**\n* **Music:** Bring your own music track for talent round on USB\n* **Outfits:** Two outfit changes required\n* **Talent:** Any talent allowed (singing, dancing, acting, etc.)\n\n### **General Rules:**\n* Professional and respectful behavior expected\n* No offensive or inappropriate content\n* Respect fellow participants and judges\n* Follow dress code and grooming standards\n* Time limits must be strictly followed\n* Judges' decision will be final and binding\n\n### **Evaluation Criteria:**\n* Personality and confidence\n* Stage presence and poise\n* Talent and creativity\n* Communication skills\n* Overall presentation and style\n`
  },
  {
    id: "treasure-hunt",
    title: "Vijaya Margah",
    slug: "vijaya-margah",
    subtitle: "Treasure Hunt",
    category: "Team",
    teamSize: "4 members",
    image: "treasure hunt",
    coordinators: [
      { name: "Sujal S", phone: "9113228210" },
      { name: "Shubham B", phone: "9731251623" },
      { name: "Prathamesh K", phone: "7338330755" },
      { name: "Suprit", phone: "6361062015" }
    ],
    formUrl: "#treasure-hunt-form",
    rules: `\n## 🏴‍☠️ **TREASURE HUNT** 🏴‍☠️\n\n### 👥 **Team Formation**\n\n1. Each team must consist of **4 members only**.\n2. Teams should be formed and registered before the event starts.\n3. Once registered, team composition cannot be changed.\n4. Every team must choose a unique team name.\n\n### 🚫 **General Rules**\n\n1. Use of mobile phones, smartwatches, or any electronic devices is **strictly prohibited**.\n2. Internet search or outside help is not allowed during the game.\n3. Fair play is expected from all participants — no tampering, damaging, or hiding clues meant for others.\n4. Teams must follow the order of clues; skipping any clue will lead to disqualification.\n5. Participants must respect college property and environment at all times.\n6. Any form of cheating or misbehavior will result in immediate disqualification.\n7. No abusive, offensive, or disrespectful language or behavior will be tolerated.\n\n### 🏆 **Judging & Disqualification**\n\n* Decision of the judges is **final and binding**.\n* Teams violating any rules will be disqualified without warning.\n`
  },
  {
    id: "gaming",
    title: "Yuddha Kshetra",
    slug: "yuddha-kshetra",
    subtitle: "Gaming",
    category: "Team",
    teamSize: "Varies by game",
    image: "gaming",
    coordinators: [{ name: "Prathamesh S", phone: "9980628947" }],
    formUrl: "#gaming-form",
    technicalRequirements: ["Game account verification", "Device (or use provided PCs/consoles)"],
    rules: `\n## 🎮 **GAMING RULES & REGULATIONS** 🎮\n\n### **Team Formation:**\n* **Team Size:** Varies by game (solo, duo, squad formats)\n* **Registration:** Teams must be registered before the event starts\n* **Game Accounts:** Must have verified game accounts\n\n### **Games & Format:**\n* **Games:** Multiple games will be featured (to be announced)\n* **Format:** Tournament style with elimination rounds\n* **Duration:** Multiple rounds throughout the event\n\n### **Equipment & Requirements:**\n* **Devices:** Bring your own device OR use provided PCs/consoles\n* **Accounts:** Game account verification required\n* **Internet:** Stable internet connection provided\n* **Peripherals:** Bring your own gaming peripherals if preferred\n\n### **General Rules:**\n* Fair play and sportsmanship expected\n* No cheating, hacking, or exploiting game bugs\n* Respect fellow players and organizers\n* Follow game-specific rules and regulations\n* No inappropriate usernames or behavior\n* Judges' decision will be final and binding\n\n### **Technical Rules:**\n* No use of unauthorized software or modifications\n* Stable internet connection required\n* Backup devices recommended\n* Report technical issues immediately\n\n### **Evaluation Criteria:**\n* Game performance and skill\n* Team coordination and strategy\n* Fair play and sportsmanship\n* Overall tournament ranking\n`
  },
  {
    id: "street-play",
    title: "Janajagruti",
    slug: "janajagruti",
    subtitle: "Street Play",
    category: "Team",
    teamSize: "7-10 performers",
    image: "street play",
    coordinators: [{ name: "Arun T", phone: "8431026141" }],
    formUrl: "#street-play-form",
    rules: `\n## 🎭 **STREET PLAY RULES AND REGULATIONS** 🎭\n\n### 1. **Eligibility & Team Composition**\n* Minimum team members: **7**. Maximum: **10 performers on stage**.\n* Each team must register by the deadline with team name, leader's name, contact.\n\n### 2. **Content**\n* Content must be socially responsible and non-obscene. No abusive language, hate speech, or content that targets a gender, community, religion, or individual.\n* **Languages:** Hindi, Marathi, English. Organizers reserve the right to disqualify objectionable content.\n* Political campaigning for a party or candidate is not allowed.\n\n### 3. **Time Limit**\n* **Maximum performance time:** 12 minutes.\n* **Minimum performance time:** 7 minutes.\n* Time starts when the team signals "start" to the stage manager or first performer crosses the performance boundary.\n* **Penalty:** Plays running under the minimum may be penalized at judges' discretion.\n\n### 4. **Stage, Performance Area & Equipment**\n* Performance area is an open space (markings will be provided). Teams must adapt to the given area.\n* Use of microphones/mics are **not allowed**.\n* Teams may bring portable, props and simple instruments.\n* Large/rigid sets, open flames, fireworks, smoke machines, or any hazardous device are strictly prohibited.\n* Use of live animals is prohibited.\n\n### 5. **Props, Costumes & Safety**\n* Props are allowed but must be safe. Pointed or dangerous props (blades, replicas that look like real weapons without prior permission) are banned.\n* Teams are responsible for their props and must remove them immediately after performance.\n* Performers must ensure any stunts/choreography are safe; organizer's medical team may refuse risky acts.\n\n### 6. **Judging & Criteria**\n* Judge's decision is **final**.\n\n### 7. **Disqualification**\nA team can be disqualified for:\n* Use of obscene/vulgar content or hate speech.\n* Use of prohibited props (firearms, real drugs, explosives).\n* Violence or threats toward audience or other teams.\n* Excessive delay or failure to appear when scheduled without valid reason.\n\n### 8. **Performance Order & Call Time**\n* Performance order will be announced on same event day. Teams must report at least **30 minutes prior** to their scheduled slot.\n* Late arrivals may be moved down the order or penalized.\n\n### 9. **Miscellaneous**\n* Keep the performance area clean. Dispose of waste in designated bins. Teams causing damage will be held accountable.\n* Event staff/volunteers instructions must be followed at all times.\n`
  },
  {
    id: "surprise-rounds",
    title: "Dharma Chakra",
    slug: "dharma-chakra",
    subtitle: "Surprise Rounds",
    category: "Team",
    teamSize: "5-10 members",
    image: "surprise round",
    coordinators: [{ name: "Om U", phone: "7996613799" }],
    formUrl: "#special-round-form",
    rules: `\n## 🎯 **SURPRISE ROUNDS RULES AND REGULATIONS** 🎯\n\n### 1. **Team Composition:**\n* Each team must consist of **5 to 10 members**. Every team should register within the deadline, providing the team name, leader's name, and contact details.\n\n### 2. **Discipline & Respect:**\n* Participants must maintain respect towards all event heads, volunteers, and fellow participants. Any form of misbehavior or argument with the organizers will lead to disqualification.\n\n### 3. **Content & Language:**\n* Performances or activities must be socially responsible and free from vulgar, abusive, or discriminatory content. Avoid hate speech, personal attacks, or content targeting any gender, community, or religion.\n\n### 4. **Use of Mobile Phones:**\n* The use of mobile phones during the event is **strictly prohibited**, unless explicitly permitted by event heads for specific rounds or purposes.\n\n### 5. **Props, Dress Code & Safety:**\n* Props are allowed but must be safe and non-hazardous. Sharp objects, flames, or dangerous materials are not allowed. Participants must wear comfortable clothing and shoes, as some rounds may involve physical activities.\n\n### 6. **Time & Punctuality:**\n* Teams must report at least **30 minutes before** their scheduled slot. Delays without valid reasons may result in penalties or disqualification. Each round will have a specific time limit announced beforehand.\n\n### 7. **Judging & Decision:**\n* The decision of the judges and event heads will be **final and binding**. No requests for changes or arguments regarding results will be entertained.\n\n### 8. **Cleanliness & Conduct:**\n* Keep the event area clean and organized. Dispose of waste properly. Any team causing damage to property or violating the rules will be held accountable.\n`
  },
  {
    id: "quiz",
    title: "Quiz Master",
    slug: "quiz-master",
    subtitle: "Quiz Competition",
    category: "Team",
    teamSize: "2-4 members",
    image: "quiz",
    coordinators: [{ name: "Quiz Incharge", phone: "0000000000" }],
    formUrl: "#quiz-form",
    rules: `\n## 🧠 **QUIZ RULES & REGULATIONS** 🧠\n\n### **Team Formation:**\n* **Team Size:** 2-4 members per team\n* **Registration:** Teams must be registered before the event starts\n* **Team Name:** Each team must choose a unique team name\n\n### **Format:**\n* **Style:** Written quiz followed by buzzer round\n* **Duration:** 45 minutes written + 30 minutes buzzer\n* **Questions:** General knowledge, current affairs, science, sports, entertainment\n* **Language:** Questions in English, answers in English/Hindi/Kannada\n\n### **Rounds:**\n* **Round 1:** Written Quiz (30 questions)\n* **Round 2:** Rapid Fire (10 questions)\n* **Round 3:** Buzzer Round (elimination)\n\n### **General Rules:**\n* No electronic devices allowed during the quiz\n* No talking or discussion between teams\n* Respect fellow participants and organizers\n* Answer within the given time limit\n* Judges' decision will be final and binding\n\n### **Evaluation Criteria:**\n* Accuracy of answers\n* Speed in buzzer round\n* Team coordination\n* Overall performance\n`
  },
  {
    id: "fashion-show",
    title: "Rupotsavah",
    slug: "rupotsavah",
    subtitle: "Fashion Show",
    category: "Team",
    teamSize: "8-12 models + 1 stylist",
    image: "fashion show",
    coordinators: [{ name: "R K Aditya", phone: "8919419327" }],
    formUrl: "#fashion-show-form",
    technicalRequirements: ["Music track (USB)", "Outfit change backstage", "Lighting brief"],
    rules: `\n## 👗 **FASHION SHOW RULES & REGULATIONS** 👗\n\n### **Team Formation:**\n* **Team Size:** 8-12 models + 1 stylist\n* **Registration:** Teams must be registered before the event starts\n* **Team Name:** Each team must choose a unique team name\n\n### **Rounds:**\n* **Round 1:** Theme Walk (30 seconds per model)\n* **Round 2:** Outfit Change & Final Walk (1 minute per model)\n* **Round 3:** Group Formation & Finale\n\n### **Requirements:**\n* **Music:** Bring music track on USB (2-3 minutes duration)\n* **Outfits:** Two outfit changes required\n* **Stylist:** One stylist per team to assist with changes\n* **Backstage:** Outfit change area will be provided\n\n### **General Rules:**\n* Professional and respectful behavior expected\n* No offensive or inappropriate outfits or content\n* Respect fellow participants and organizers\n* Follow runway guidelines and timing\n* No smoking or alcohol backstage\n* Judges' decision will be final and binding\n\n### **Technical Requirements:**\n* Music track in MP3 format on USB\n* Outfit change facilities backstage\n* Lighting requirements to be discussed beforehand\n* Hair and makeup to be done by teams\n\n### **Evaluation Criteria:**\n* Style and presentation\n* Coordination and synchronization\n* Creativity and theme adherence\n* Confidence and stage presence\n* Overall team performance\n`
  },
  
];

export const getEventBySlug = (slug: string) => {
  return eventsData.find(event => event.slug === slug);
};

export const getWhatsAppMessage = (eventTitle: string, coordinatorName: string) => {
  return encodeURIComponent(
    `Hello ${coordinatorName}, I'd like to register for ${eventTitle} at Rythm 2025.\n\nName: [Your Name]\nInstitute: [Your College]\nCourse/Year: [Your Year]\nCategory/Team size: [Details]\nQuestions: [If any]`
  );
};
