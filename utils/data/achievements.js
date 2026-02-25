export const achievementsData = [

  // ─── AWARDS ──────────────────────────────────────────────────────────────
  {
    id: 1,
    category: 'award',
    title: 'Won Ideathon',
    organization: 'GSSSIETW',
    date: 'Feb 2023',
    description: 'Secured 1st place at the Ideathon by pitching an innovative mobile-first platform to track and monitor maternal health and pregnancy milestones. The concept addressed critical gaps in prenatal care accessibility, presenting a scalable digital solution to improve health outcomes for expectant mothers.',
  },
  {
    id: 2,
    category: 'award',
    title: 'February Best Teacher',
    organization: 'U&I NGO',
    date: 'Feb 2024',
    description: 'Awarded "Best Teacher of the Month" by U&I NGO in recognition of exceptional dedication to volunteer teaching. Commended for designing engaging lesson plans, fostering curiosity in underprivileged students, and consistently going beyond the curriculum to make learning impactful and accessible.',
  },
  {
    id: 3,
    category: 'award',
    title: 'Emerging Leader',
    organization: 'U&I NGO',
    date: 'Feb 2025',
    description: 'Honored with the Emerging Leader award by U&I NGO for demonstrating outstanding leadership potential and sustained commitment to community service. Recognized for proactively taking initiative, mentoring fellow volunteers, and driving meaningful impact within the organization\'s educational programs.',
  },

  // ─── LEADERSHIPS ─────────────────────────────────────────────────────────
  {
    id: 4,
    category: 'leaderships',
    title: 'Google Developer Student Club Lead',
    organization: 'Google',
    date: '2024–2025',
    description: 'Selected as the Google Developer Student Club (GDSC) Lead for 2024–25, responsible for building a community of 200+ student developers. Organized hands-on workshops, tech talks, and hackathons on topics including AI/ML, cloud computing, and web development. Facilitated collaboration between students and industry professionals to bridge the gap between academia and real-world tech.',
  },
  {
    id: 5,
    category: 'leaderships',
    title: 'Graduate Student Ambassador',
    organization: 'Boston University',
    date: 'Sep 2025 – Present',
    description: 'Elected as a Graduate Student Ambassador for Boston University\'s Graduate Remote Scholars (GRS) program. Represent and advocate for the graduate student community through outreach, mentorship, and campus engagement initiatives — serving as a point of connection between incoming students and university resources.',
  },

  // ─── RESEARCH PAPERS ─────────────────────────────────────────────────────
  {
    id: 6,
    category: 'research paper',
    title: 'Automated Result Analysis: PDF Extraction, Database Storage, and Reporting with Python',   // ← update with actual title
    organization: 'Springer- awaiting',  // ← update
    date: '2025',
    description: 'The analysis of student results from PDF files is often tedious and prone to manual data entry and validation errors, making it a time-consuming process. This study proposes an automated system to extract, store, and analyze results, therebystreamlining the entire process.',
    link: '',
  },

  // ─── HACKATHONS ──────────────────────────────────────────────────────────
  {
    id: 7,
    category: 'hackathon',
    title: 'Technoverse — Top 10 of 121 Teams',
    organization: 'Cognizant',
    date: '2024',
    description: 'Ranked in the Top 10 out of 121 competing teams at Technoverse, Cognizant\'s flagship hackathon. Developed "Serene Settings," an AI-powered interior design application that generates personalized room layouts, furniture suggestions, and color palettes based on client inputs such as room dimensions, style preferences, and budget.',
  },
  {
    id: 8,
    category: 'hackathon',
    title: 'Symbiot ',
    organization: 'Cognizant',
    date: '2022 and 2023',
    description: 'Participated in Symbiot, a hackathon organized by VVCE focusing on innovative solutions for real-world problems. Collaborated with a team to develop a prototype addressing key challenges in the tech industry.',
  },
  // ─── WORKSHOPS ───────────────────────────────────────────────────────────
  {
    id: 9,
    category: 'workshops',
    title: 'Artificial Intelligence with Machine Learning',
    organization: 'IISc Bangalore',
    date: '',
    description: 'Attended an intensive workshop on Artificial Intelligence and Machine Learning at the Indian Institute of Science (IISc), Bangalore — one of India\'s premier research institutions. Gained deep theoretical and practical exposure to ML algorithms, neural network architectures, and real-world AI applications.',
  },
  {
    id: 10,
    category: 'workshops',
    title: 'Tech-Bytes',
    organization: 'GSSSIETW',
    date: '',
    description: 'Participated in Tech-Bytes, a technical workshop series organized at GSSSIETW covering emerging technologies and software development practices. Engaged in hands-on sessions, collaborative problem-solving activities, and knowledge-sharing discussions with peers and industry experts.',
  },

  // ─── CONFERENCES ─────────────────────────────────────────────────────────
  {
    id: 11,
    category: 'conferences',
    title: 'TRAI Conference',
    organization: 'Telecom Regulatory Authority of India',
    date: '',
    description: 'Attended a conference organized by the Telecom Regulatory Authority of India (TRAI) focusing on the evolving landscape of telecommunications, digital policy, and technology regulation in India. Gained insight into emerging trends in spectrum management, broadband policy, and the intersection of AI with telecom infrastructure.',
  },
  {
    id: 12,
    category: 'conferences',
    title: 'WEB3: RE-INVENT',
    organization: 'Devfolio',
    date: '',
    description: 'Participated in WEB3: RE-INVENT, a conference hosted on Devfolio exploring the frontiers of Web3 technology, decentralized applications, blockchain infrastructure, and the future of the open internet. Connected with builders, founders, and developers shaping the next generation of the web.',
  },

];

export const achievementCategories = [
  { key: 'all',            label: 'All' },
  { key: 'leaderships',   label: 'Leaderships' },
  { key: 'award',          label: 'Awards' },
  { key: 'hackathon',      label: 'Hackathons' },
  { key: 'research paper', label: 'Research Papers' },
  { key: 'workshops',      label: 'Workshops' },
  { key: 'conferences',    label: 'Conferences' },
];
