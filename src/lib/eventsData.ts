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
  formUrl: string; // Google Form URL for registrations
  timeLimit?: string;
  technicalRequirements?: string[];
  categories?: { label: string; formUrl: string; teamSize?: string }[];
  rules?: string;
}
export const eventsData: EventData[] = [
  {
    id: "solo-dance",
    title: "Nritya Bhava",
    slug: "nritya-kala-solo",
    subtitle: "Solo Dance",
    category: "Solo",
    image: "solo dancing",
    coordinators: [{ name: "Karthik", phone: "7338128020" }],
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe4ecP2WI2Y7gRGi9e5_pK4LUkpIBPnDGrCRHW--a4gTelEzA/viewform?usp=header",
    technicalRequirements: ["MP3 format", "USB backup", "Mic requirements in advance"],
    teamSize: "1 performer",
    categories: [
      {
        label: "Classical",
        formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe4ecP2WI2Y7gRGi9e5_pK4LUkpIBPnDGrCRHW--a4gTelEzA/viewform?usp=header",
        teamSize: "1 performer"
      },
      {
        label: "Western",
        formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe4ecP2WI2Y7gRGi9e5_pK4LUkpIBPnDGrCRHW--a4gTelEzA/viewform?usp=header",
        teamSize: "1 performer"
      }
    ],
    rules: `\n## 💃 **SOLO DANCE RULES & REGULATIONS** 💃\n\n### **General Rules:**\n1. The event will consist of two rounds - Round 1 and Round 2.\n2. Round 1 will be an elimination round.\n3. Round 2 will be conducted on Day 2 for the participants selected in Round 1.\n4. Participants must submit their track (MP3 Format) to the organizers at least 2 days before the event.\n5. Participants must be present at the given reporting time.\n6. The judges' decision will be final.\n\n### **🎭 CLASSICAL CATEGORY:**\n1. Each participant should perform 3 to 5 minutes of classical dance in any recognized Indian classical style.\n2. Costumes should be decent and appropriate.\n3. Songs with vulgar, offensive, or inappropriate lyrics are strictly prohibited.\n4. Participants must submit their track (MP3 Format) to the organizers at least 2 days before the event.\n5. Use of props is allowed, but participants must manage their own setup and clearance within the given time.\n6. Exceeding the time limit or violating any rule may lead to deduction of marks or disqualification.\n7. The decision of the judges will be final.\n\n### **🎵 WESTERN CATEGORY:**\n1. Each participant should perform 3 to 5 minutes of freestyle dance.\n2. Costumes should be decent and appropriate.\n3. Songs with vulgar, offensive, or inappropriate lyrics are strictly prohibited.\n4. Participants must submit their track (MP3 Format) to the organizers at least 2 days before the event.\n5. Use of props is allowed, but participants must manage their own setup and clearance within the given time.\n6. Exceeding the time limit or violating any rule may lead to deduction of marks or disqualification.\n7. The decision of the judges will be final.\n`
  },
  {
    id: "group-dance",
    title: "Taalksheetra",
    slug: "nritya-kala-group",
    subtitle: "Group Dance",
    category: "Group",
    image: "group dance",
    coordinators: [{ name: "Karthik", phone: "7338128020" }],
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe4ecP2WI2Y7gRGi9e5_pK4LUkpIBPnDGrCRHW--a4gTelEzA/viewform?usp=header",
    technicalRequirements: ["MP3 format", "USB backup", "Mic requirements in advance"],
    teamSize: "7-9 members",
    rules: `\n## 💃 **GROUP DANCE RULES & REGULATIONS** 💃\n\n### **General Rules:**\n1. The event will consist of two rounds - Round 1 and Round 2.\n2. Round 1 will be an elimination round.\n3. Round 2 will be conducted on Day 2 for the teams selected in Round 1.\n4. Teams must submit their track (MP3 Format) to the organizers at least 2 days before the event.\n5. Participants must be present at the given reporting time.\n6. The judges' decision will be final.\n\n### **Performance Requirements:**\nEach participating group must convey a story, message, or concept through their performance using dance as the primary medium of expression. The performance should narrate a clear storyline emotional, social, mythological, or imaginative using movements, expressions, formations, and music.\n\nThe act should look like a dance performance, not a drama or skit. Excessive dialogues, long narrations, or acting sequences without dance movements are not allowed.\n\n### **Rules & Regulations:**\n1. **Time Limit:** The time limit for the performance is 4 to 6 minutes, including stage setup and exit.\n2. **Team Size:** Each team must have a minimum of 7 and a maximum of 9 participants.\n3. **Props:** Use of props is allowed, but teams must manage their own setup and clearance within the given time.\n4. **Costumes:** Costumes should be decent and appropriate.\n5. **Music:** Songs with vulgar, offensive, or inappropriate lyrics are strictly prohibited. Teams must submit their track (MP3 Format) to the organizers at least 2 days before the event.\n6. **Penalties:** Exceeding the time limit or violating any rule may lead to deduction of marks or disqualification.\n7. **Decision:** The decision of the judges will be final.\n`
  },
  {
    id: "solo-singing",
    title: "Sur Tattva",
    slug: "sur-tattva",
    subtitle: "Solo Singing",
    category: "Solo",
    image: "solo singing",
    coordinators: [{ name: "Joey", phone: "7406165866" }],
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe4ecP2WI2Y7gRGi9e5_pK4LUkpIBPnDGrCRHW--a4gTelEzA/viewform?usp=header",
    technicalRequirements: ["MP3 track", "USB backup"],
    timeLimit: "3–5 minutes (+1 min instrument setup)",
    rules: `\n## 🎤 **SOLO SINGING**\n\n### **ROUNDS**\n\n**Round 1 – Random of Your Choice**\n\n> Sing any song of your choice. Show your style and vocal range!\n\n**Round 2 – Mashup Round**\n\n> Create a mashup including the **given artist (from chits)** and **selected languages**. Be creative and blend smoothly!\n\n**Round 3 – Face Off**\n\n> The top finalists go head-to-head in a musical face-off. Bring your best energy and stage presence!\n\n### **RULES & REGULATIONS**\n\n* **Time Limit:** 3–5 minutes\n* **Instrument Setup Time:** Additional 1 minute if using instruments\n* **Languages:** English, Hindi, Kannada\n* **Reporting Time:** Be present **15 minutes before** the event starts\n* **Conduct:** Use of inappropriate or abusive language will lead to disqualification\n* **Instruments:** Inform the in-charge beforehand about any instruments you are bringing\n* **Karaoke:** Allowed\n* **Judging:** Judges' decision will be **final and binding**\n\n### Note\n- Karaoke is allowed.\n`
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
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe4ecP2WI2Y7gRGi9e5_pK4LUkpIBPnDGrCRHW--a4gTelEzA/viewform?usp=header",
    technicalRequirements: ["Instrument list in advance"],
    timeLimit: "3–5 minutes (+2 min setup)",
    rules: `\n## 🎵 **GROUP SINGING**\n\n### **ROUNDS**\n\n**Round 1 – Power Jam (of Your Choice)**\n\n> Perform a powerful group number that showcases your team's harmony and coordination.\n\n**Round 2 – Battle of Bands**\n\n> Groups compete head-to-head in an electrifying musical showdown. Creativity, teamwork, and energy will win the stage!\n\n### **RULES & REGULATIONS**\n\n* **Group Size:** Minimum 4 – Maximum 8 members\n* **Time Limit:** 3–5 minutes (+2 minutes for setup)\n* **Languages:** English, Hindi, Kannada\n* **Reporting Time:** Be present **15 minutes before** the event starts\n* **Instruments:** Minimum **two instruments** required; inform the in-charge beforehand. Groups must bring their own instruments\n* **Conduct:** Use of inappropriate or abusive language will lead to disqualification\n* **Karaoke:** Not allowed\n* **Judging:** Judges' decision will be **final and binding**\n`
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
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe4ecP2WI2Y7gRGi9e5_pK4LUkpIBPnDGrCRHW--a4gTelEzA/viewform?usp=header",
    rules: `\n## 🗣️ **DEBATE RULES & REGULATIONS** 🗣️\n\n### **Team Formation:**\n* **Team Size:** 2 members only (1 speaker + 1 researcher)\n* **Registration:** Teams must be registered before the event starts\n* **Team Name:** Each team must choose a unique team name\n\n### **Format:**\n* **Style:** Parliamentary debate format\n* **Time Limit:** 5 minutes for constructive speech, 3 minutes for rebuttal\n* **Topics:** Current affairs, social issues, and general knowledge topics\n* **Language:** **English only**\n\n### **General Rules:**\n* Research and preparation time will be provided\n* No use of electronic devices during the debate\n* Respectful discourse is mandatory\n* No personal attacks or offensive language\n* Stick to the topic and provide logical arguments\n* Judges' decision will be final and binding\n\n### **Evaluation Criteria:**\n* Content and argument quality\n* Delivery and presentation skills\n* Rebuttal and counter-arguments\n* Time management\n* Respect for opponents\n`
  },
  {
    id: "arts",
    title: "Karmachitra",
    slug: "kala-pradarshan",
    subtitle: "Arts",
    category: "Solo",
    image: "arts",
    coordinators: [{ name: "R K Aditya", phone: "8919419327" }],
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe4ecP2WI2Y7gRGi9e5_pK4LUkpIBPnDGrCRHW--a4gTelEzA/viewform?usp=header",
    technicalRequirements: ["Bring own paints/brushes/palette", "Canvas provided in final round"],
    rules: `\n## 🎨 Event: **Karmachitra (कर्मचित्र) — Canvas of Karma**\n\n### ROUND 1: Face Painting — Rules & Guidelines\n1. **Theme:** Theme will be given on the spot. Paint according to the given theme.\n2. **Team Composition:** Each team can have **2 members** — one painter and one model.\n3. **Time Limit:** **60 minutes** total.\n4. **Materials:** Participants must bring their own paints, brushes, etc.\n5. **Restrictions:** No use of stencils or printed stickers.\n6. **Judging:** Judges’ decision will be final.\n\n### FINAL ROUND: Canvas Painting — Rules & Guidelines\n1. **Theme:** Will be given on the spot. Create artwork based on the theme.\n2. **Participation:** **Individual** competition.\n3. **Time Limit:** **2 hours**.\n4. **Materials:** Bring your own colors, brushes, and palette.\n5. **Allowed Media:** Watercolors, acrylics, poster colors, or oil paints. **Only the canvas will be provided.**\n6. **On-the-spot:** Artwork must be done on the spot during the event.\n7. **Judging:** Judges’ decision will be final.\n`
  },
  {
    id: "photography",
    title: "Chitraloka",
    slug: "chitraloka",
    subtitle: "Photography and Videography",
    category: "Team",
    teamSize: "3-4 members (including models)",
    image: "photograpgy",
    coordinators: [{ name: "Anup G", phone: "8951631714" }],
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe4ecP2WI2Y7gRGi9e5_pK4LUkpIBPnDGrCRHW--a4gTelEzA/viewform?usp=header",
    technicalRequirements: ["Any camera or mobile allowed", "Tripod/lighting/props permitted"],
    rules: `\n## 📸 **PHOTOGRAPHY & VIDEOGRAPHY — RULES**\n\n### THEME FOR ROUND 1 — “Power of Expression.”\nParticipants must visually depict a strong emotion or story through their photos.\n- Focus on emotions: anger, joy, peace, pain, pride, etc. (**creativity matters**)\n- The model’s face and body language tell the story.\n\n### Team\n- Each team must consist of **3–4 members**, including **one or more models**, who will be photographed by the team’s photographers.\n\n### Preparation\n- Models are requested to come prepared (**outfits, makeup, styling, etc.**) to the location.\n\n### Equipment\n- Any equipment such as **camera, mobile, tripod, lighting, or props** is allowed.\n\n### Location\n- Photoshoot must be done **within the campus premises**.\n\n### Theme Alignment\n- The model’s expressions, styling, and outfit must **align with the theme**.\n\n### GENERAL RULES\n- Team size: **min 3, max 4** participants.\n1. Participants must **report by 9:30 AM** for registration and briefing. The event will begin **sharp at 10:00 AM** (both days).\n2. Teams must maintain decorum and **avoid disturbing other ongoing events**.\n3. **Late submissions will not be accepted**.\n4. **Judges’ decision will be final**.\n5. Participants are requested to **manage their own accommodation** arrangements.\n6. Details of the **rest of the rounds will be disclosed on the spot**.\n`
  },
  {
    id: "mr-miss",
    title: "Karmakshetra",
    slug: "karmakshetra",
    subtitle: "Mr & Miss",
    category: "Solo",
    image: "mr and miss",
    coordinators: [{ name: "R K Aditya", phone: "8919419327" }],
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe4ecP2WI2Y7gRGi9e5_pK4LUkpIBPnDGrCRHW--a4gTelEzA/viewform?usp=header",
    rules: `\n## 👑 **MR & MISS — RULES & REGULATIONS** 👑\n\n### I. General Rules\n- **Mobile Phone Usage:** The use of mobile phones is strictly prohibited during the event.\n- **Language Policy:** The use of vulgar or offensive language is not permitted anywhere in the campus.\n- **Accommodation:** Participants are responsible for managing their own accommodation.\n\n### II. Event Specifics\n- **Personal Items:** Participants are encouraged to carry a book, pen, and a comfortable pair of shoes (optional).\n- **Meals/Snacks:** Kindly carry your lunch box or snacks, as there will be multiple rounds throughout the day.\n- **Dress Code (Day 2):** On Day 2, participants are requested to come in **formal attire** (preferably).\n\n### III. Judging & Conduct\n- **Conflict Resolution:** Any arguments with faculty members or volunteers will not be tolerated.\n- **Rule Violations:** Violating any rules will lead to disqualification.\n- **Final Decision:** The decisions made by the judges will be **final and binding**.\n`
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
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe4ecP2WI2Y7gRGi9e5_pK4LUkpIBPnDGrCRHW--a4gTelEzA/viewform?usp=header",
    rules: `\n## 🏴‍☠️ **TREASURE HUNT** 🏴‍☠️\n\n### 👥 **Team Formation**\n\n1. Each team must consist of **4 members only**.\n2. Teams should be formed and registered before the event starts.\n3. Once registered, team composition cannot be changed.\n4. Every team must choose a unique team name.\n\n### 🚫 **General Rules**\n\n1. Use of mobile phones, smartwatches, or any electronic devices is **strictly prohibited**.\n2. Internet search or outside help is not allowed during the game.\n3. Fair play is expected from all participants — no tampering, damaging, or hiding clues meant for others.\n4. Teams must follow the order of clues; skipping any clue will lead to disqualification.\n5. Participants must respect college property and environment at all times.\n6. Any form of cheating or misbehavior will result in immediate disqualification.\n7. No abusive, offensive, or disrespectful language or behavior will be tolerated.\n\n### 🏆 **Judging & Disqualification**\n\n* Decision of the judges is **final and binding**.\n* Teams violating any rules will be disqualified without warning.\n`
  },
  {
    id: "gaming",
    title: "Samarspotnda",
    slug: "yuddha-kshetra",
    subtitle: "Gaming",
    category: "Team",
    teamSize: "Varies by game",
    image: "gaming",
    coordinators: [{ name: "Prathamesh S", phone: "9980628947" }],
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe4ecP2WI2Y7gRGi9e5_pK4LUkpIBPnDGrCRHW--a4gTelEzA/viewform?usp=header",
    technicalRequirements: ["Mobile devices only (no emulators)", "Verified in-game accounts"],
    rules: `\n## 🛡️ **Simple BGMI Rules**\n\n### ✅ **Basic Rules**\n\n1. **Squad only** (4 players per team).\n2. Only play on **mobile devices** (no emulator).\n3. **No hacking, teaming, or glitching**.\n4. **Respect all players** – no abuse, toxic behavior, or cheating.\n5. Must join the lobby **on time**.\n6. Use your **registered in-game name (IGN)**.\n7. **Kill stealing is allowed** – it's part of the game.\n\n### 🗺️ **Maps & Mode**\n\n* **TPP only**\n* Maps used: **Erangel**, **Miramar**, **Sanhok**\n* Custom Room Matches (3–5)\n\n### 🎮 **Final Round Notice**\n\n> 🏆 **The Final Round Will Be Played on PS5**\n\nDetails will be shared with qualifying teams before the final match.\n\n### ❌ **Disqualification Reasons**\n\n* Using hacks or mods\n* Teaming with other squads\n* Using bugs or glitches to gain advantage\n* Disrespecting organizers or other players\n* Playing with an unregistered player\n\n---\n\n## 🔥 **Free Fire Rules**\n\nOnly college students with valid ID cards can participate.\n\nEach team must have 4 players.\n\nMobile phones only (no emulators, triggers, or controllers).\n\nPlayers must use their own Free Fire accounts.\n\nCustom Room Matches (Battle Royale or Clash Squad – decided by organizers).\n\nRoom ID and password will be shared before each match.\n\nNo hacking, teaming, or cheating of any kind.\n\nNo abusive language or toxic behavior in chat or voice.\n\nIf caught cheating, the entire team will be disqualified.\n\nPlayers must join the room within 5 minutes of ID sharing.\n\nNo rematch for network or device issues.\n\nAdmin decisions are final in all disputes.\n\nPoints will be based on kills + placement/rank.\n\nFinals will decide the winners.\n\nMaintain proper behavior during the event.\n\nFollow instructions from coordinators and referees.\n\nPrizes and certificates will be given to the winning teams.\n\nFinal round will be played in PS5.\n`
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
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe4ecP2WI2Y7gRGi9e5_pK4LUkpIBPnDGrCRHW--a4gTelEzA/viewform?usp=header",
    rules: `\n## 🎭 **STREET PLAY RULES AND REGULATIONS** 🎭\n\n### 1. Eligibility & Team Composition\nMinimum team members: **7**. Maximum: **10 performers on stage**.\nEach team must register by the deadline with team name, leader’s name, contact.\n\n### 2. Content\nContent must be socially responsible and non-obscene. No abusive language, hate speech, or content that targets a gender, community, religion, or individual. **Languages:** Hindi, English. Organizers reserve the right to disqualify objectionable content.\nPolitical campaigning for a party or candidate is not allowed.\n\n### 3. Time Limit\nMaximum performance time: **12 minutes**.\nMinimum performance time: **7 minutes**.\nTime starts when the team signals “start” to the stage manager or first performer crosses the performance boundary.\n**Penalty:** Plays running under the minimum may be penalized at judges’ discretion.\n\n### 4. Stage, Performance Area & Equipment\nPerformance area is an open space (markings will be provided). Teams must adapt to the given area.\nUse of microphones/mics are **not allowed**.\nTeams may bring portable, props and simple instruments.\nLarge/rigid sets, open flames, fireworks, smoke machines, or any hazardous device are strictly prohibited.\nUse of live animals is prohibited.\n\n### 5. Props, Costumes & Safety\nProps are allowed but must be safe. Pointed or dangerous props (blades, replicas that look like real weapons without prior permission) are banned.\nTeams are responsible for their props and must remove them immediately after performance.\nPerformers must ensure any stunts/choreography are safe; organizer’s medical team may refuse risky acts.\n\n### 6. Judging & Criteria\nJudge's decision is **final**.\n\n### 7. Disqualification\nA team can be disqualified for:\nUse of obscene/vulgar content or hate speech.\nUse of prohibited props (firearms, real drugs, explosives).\nViolence or threats toward audience or other teams.\nExcessive delay or failure to appear when scheduled without valid reason.\n\n### 8. Performance Order & Call Time\nPerformance order will be announced on same event day. Teams must report at least **30 minutes prior** to their scheduled slot.\nLate arrivals may be moved down the order or penalized.\n\n### 9. Miscellaneous\nKeep the performance area clean. Dispose of waste in designated bins. Teams causing damage will be held accountable.\nEvent staff/volunteers instructions must be followed at all times.\n`
  },
  {
    id: "surprise-rounds",
    title: "Rahasya",
    slug: "dharma-chakra",
    subtitle: "Surprise Event",
    category: "Team",
    teamSize: "5-10 members",
    image: "surprise round",
    coordinators: [{ name: "Om U", phone: "7996613799" }],
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe4ecP2WI2Y7gRGi9e5_pK4LUkpIBPnDGrCRHW--a4gTelEzA/viewform?usp=header",
    rules: `\n## 🎯 **SURPRISE EVENT RULES AND REGULATIONS** 🎯\n\n### 1. **Team Composition:**\n* Each team must consist of **5 to 10 members**. Every team should register within the deadline, providing the team name, leader's name, and contact details.\n\n### 2. **Discipline & Respect:**\n* Participants must maintain respect towards all event heads, volunteers, and fellow participants. Any form of misbehavior or argument with the organizers will lead to disqualification.\n\n### 3. **Content & Language:**\n* Performances or activities must be socially responsible and free from vulgar, abusive, or discriminatory content. Avoid hate speech, personal attacks, or content targeting any gender, community, or religion.\n\n### 4. **Use of Mobile Phones:**\n* The use of mobile phones during the event is **strictly prohibited**, unless explicitly permitted by event heads for specific rounds or purposes.\n\n### 5. **Props, Dress Code & Safety:**\n* Props are allowed but must be safe and non-hazardous. Sharp objects, flames, or dangerous materials are not allowed. Participants must wear comfortable clothing and shoes, as some rounds may involve physical activities.\n\n### 6. **Time & Punctuality:**\n* Teams must report at least **30 minutes before** their scheduled slot. Delays without valid reasons may result in penalties or disqualification. Each round will have a specific time limit announced beforehand.\n\n### 7. **Judging & Decision:**\n* The decision of the judges and event heads will be **final and binding**. No requests for changes or arguments regarding results will be entertained.\n\n### 8. **Cleanliness & Conduct:**\n* Keep the event area clean and organized. Dispose of waste properly. Any team causing damage to property or violating the rules will be held accountable.\n`
  },
  {
    id: "quiz",
    title: "Jnyana Dhara",
    slug: "quiz-master",
    subtitle: "Quiz Competition",
    category: "Solo",
    teamSize: "Individual",
    image: "quiz",
    coordinators: [{ name: "Quiz Incharge", phone: "0000000000" }],
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe4ecP2WI2Y7gRGi9e5_pK4LUkpIBPnDGrCRHW--a4gTelEzA/viewform?usp=header",
    rules: `\n## 🧠 Quiz: **Jnyana Dhara (ज्ञान धारा)** — Rules & Regulations\n\n### 📍 General Guidelines\n1. The competition is open to all students of the college.\n2. **Participation is individual** — no teams allowed.\n3. Each participant must register **in advance** before the event begins.\n4. Participants must carry their **college ID cards** for verification.\n\n### ⚙ Competition Format\nThe quiz will consist of **three rounds**:\n- **Round 1 — Preliminary Round**\n- **Round 2 — Semi-Final Round**\n- **Round 3 — Final Round**\n\n### ⏱ Rules During the Quiz\n1. Mobile phones, smartwatches, and electronic gadgets are **strictly prohibited**.\n2. Each question must be answered within the **given time limit**.\n3. **No negative marking** unless announced before the round.\n4. **No discussion** or assistance from the audience.\n5. The **quizmaster’s decision is final** and binding in all cases.\n\n### 🏆 Judging\n- Judge’s/Quiz Master’s decision is **final**.\n`
  },
  {
    id: "fashion-show",
    title: "Rupotsavah",
    slug: "rupotsavah",
    subtitle: "Fashion Show",
    category: "Team",
      teamSize: "7–11 members (incl. showstopper)",
    image: "fashion show",
    coordinators: [{ name: "R K Adithya", phone: "8919419327" }],
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe4ecP2WI2Y7gRGi9e5_pK4LUkpIBPnDGrCRHW--a4gTelEzA/viewform?usp=header",
      timeLimit: "6+1 minutes (+2 min setup/clearance)",
      technicalRequirements: [
        "Submit MP3 music track 2 days prior",
        "Carry USB backup of music",
        "Props must be safe; remove after performance",
        "Changing rooms provided; maintain cleanliness",
        "Share lighting brief in advance if needed"
      ],
      rules: `\n## 👗 **Fashion Show – “Rupotsavah (रूपोत्सवः)”**\n\n**Theme:** “Karma–Dharma” — harmony between one’s actions and righteousness.\n\n### **General Guidelines**\n1. Each team must consist of **7–11 members** (one will be the **showstopper**).\n2. The central theme is **“Karma–Dharma”** and must be reflected in costumes, expressions, and performance.\n3. Teams must creatively express the theme through **costumes, expressions, choreography, and a short act**.\n4. **Reporting Time:** All participants must report **at least 1 hour before** the event for registration, music submission, and stage briefing.\n5. **Late entries will not be permitted** once the event starts.\n\n### **Performance Rules**\n1. Each team will have a total of **6 + 1 minutes** to perform.\n2. Teams must perform a **short act (≥ 1 minute)** during the ramp walk to enhance storytelling and theme expression.\n3. Teams must submit their **music track (MP3 format)** to the organizers **at least 2 days** before the event.\n4. **Vulgarity, indecent gestures, or offensive music** will lead to immediate disqualification.\n5. **Props are allowed** but must be safe and must be removed immediately after the performance.\n6. The walk, choreography, and act must **clearly reflect the “Karma–Dharma”** theme.\n7. An additional **2 minutes** will be provided to each team for **stage setup and clearance**.\n\n### **Costume and Theme Presentation**\n1. Costumes should be **appropriate, elegant, and meaningful**, representing the values of **Karma (action)** and **Dharma (duty/righteousness)**.\n2. Participants are encouraged to use **creative, handmade materials**.\n3. All outfits and performances must **maintain cultural and moral decency**.\n4. **Changing rooms** will be provided — maintain discipline and cleanliness backstage.\n\n### **Judging Criteria**\n- **Interpretation of the theme — “Karma–Dharma”**\n- **Creativity and originality of costumes**\n- **Stage presence and confidence**\n- **Choreography, coordination, and synchronization**\n- **Inclusion and execution of a 1-minute act related to the theme**\n- **Overall impact and presentation**\n\n### **Disqualification Criteria**\n- Exceeding the **time limit**\n- Use of **inappropriate language, music, or gestures**\n- **Indiscipline or misbehavior** on or off stage\n- **Not following the given theme** or event guidelines\n\n### **Final Decision**\n- The **judges’ decision** will be final and binding.\n- The **organizing committee** reserves the right to modify the rules if required.\n\n✨ **Fashion Show Name:** Rupotsavah (रूपोत्सवः) — A Celebration of Grace, Style, and Tradition.\n`
  },
  
];

export const getEventBySlug = (slug: string) => {
  return eventsData.find(event => event.slug === slug);
};

export const getWhatsAppMessage = (eventTitle: string, coordinatorName: string) => {
  return encodeURIComponent(
    `Hello ${coordinatorName}, I'd like to register for ${eventTitle} at Rhythm 2025.\n\nName: [Your Name]\nInstitute: [Your College]\nCourse/Year: [Your Year]\nCategory/Team size: [Details]\nQuestions: [If any]`
  );
};
