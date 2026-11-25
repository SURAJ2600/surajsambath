export const profile = {
  name: 'Suraj Sambath Kumar',
  role: 'Senior Android Engineer',
  location: 'Kerala, India',
  locationNote: 'Working in Kuala Lumpur, Malaysia with Mindvalley for the last 4 years',
  url: 'https://suraj2600.github.io/surajsambath/',
  email: 'surajsambathkumar@gmail.com',
  phone: '+91 94465 23374',
  github: 'https://github.com/SURAJ2600',
  linkedin: 'https://linkedin.com/in/surajsambath',
  resume: 'https://drive.google.com/uc?export=download&id=1T4yPFUjSs8GnruRjivYJPCCXiaD9Qw9G',
  summary:
    'Senior Android engineer with 10 years of Kotlin and Java. I led the mobile platform team at Mindvalley, owning media playback, performance and release infrastructure for apps with millions of users. Now building Vibrantly, an AI health app, across mobile, web and backend.',
}

export const stats = [
  { value: '10', unit: 'yrs', label: 'Android experience' },
  { value: '99.6', unit: '%', label: 'Crash-free sessions' },
  { value: '30', unit: '%', label: 'Faster cold start' },
  { value: '5M+', unit: '', label: 'Downloads on apps I shipped' },
]

export const skills = [
  { group: 'Languages', items: ['Kotlin', 'Java', 'JavaScript', 'TypeScript', 'XML'] },
  {
    group: 'Android',
    items: [
      'Jetpack Compose',
      'ExoPlayer / Media3',
      'Coroutines',
      'Room',
      'DataStore',
      'Multi-module',
      'Baseline Profiles',
    ],
  },
  {
    group: 'Architecture',
    items: ['Clean Architecture', 'MVVM', 'SOLID', 'KMM', 'Design Patterns'],
  },
  {
    group: 'Web & Cross-platform',
    items: ['Next.js', 'React', 'Node.js', 'React Native', 'Kotlin Multiplatform', 'Tailwind'],
  },
  {
    group: 'AI-assisted Dev',
    items: ['Claude / Claude Code', 'Cursor', 'Agent SDK', 'MCP servers', 'Prompt engineering'],
  },
  {
    group: 'CI/CD & Tooling',
    items: ['Bitrise', 'GitHub Actions', 'Gradle', 'Ktlint', 'Danger'],
  },
  {
    group: 'Testing',
    items: ['JUnit5', 'Mockk', 'Espresso', 'Appium', 'WebDriverIO'],
  },
  {
    group: 'Networking & DI',
    items: ['Retrofit', 'Apollo GraphQL', 'Dagger-Hilt', 'Koin'],
  },
  {
    group: 'Platforms',
    items: ['Firebase', 'RevenueCat', 'Amplitude', 'SauceLab'],
  },
]

export type Experience = {
  company: string
  url?: string
  roles: { title: string; period: string }[]
  highlights: string[]
}

export const experience: Experience[] = [
  {
    company: 'Mindvalley',
    url: 'https://www.mindvalley.com',
    roles: [
      { title: 'Senior Software Engineer — Vibrantly (AI Health App)', period: '2026 — Present' },
      { title: 'Senior Android Developer', period: '2023 — 2026' },
      { title: 'Android Developer', period: '2020 — 2023' },
    ],
    highlights: [
      'Building Vibrantly, an AI health app: LLM-driven conversational onboarding, Adapty subscriptions and top-up credits with a PostgreSQL webhook backend, and a 12-service → modular-monolith migration on Cloud Run.',
      'Led and mentored a mobile platform team of 4 engineers: technical decisions, code reviews, engineering standards.',
      'Own core Android platform components — media playback, performance infrastructure, build optimization — across multiple high-traffic apps.',
      'Worked on the login module built on Auth0 (Okta).',
      'Released the Mindvalley Android app end to end on Google Play: testing tracks, staged rollouts, target SDK and Data safety policy fixes.',
      'Re-architected video/audio playback with ExoPlayer + Media3: reusable media libraries, downloads, advanced playback controls. Significant stability gains on low-end devices.',
      'Lifted crash-free sessions from 97% → 99.6% by stabilizing high-risk modules, raising unit test coverage, and hardening error handling.',
      'Cut app cold-start by 30% using Baseline Profiles and startup optimization.',
      'Integrated Jetpack Compose into production features through reusable composables.',
      'Tuned CI/CD on Bitrise + GitHub Actions, reducing build times 15% via caching and automated quality gates.',
      'Fixed a hard-to-reproduce background audio failure on older Samsung devices (pre-Android 9) using Media3 playback resumption.',
      'Built GitHub Actions pipelines that version and publish internal SDKs to JFrog Artifactory.',
      'Built a Kotlin Multiplatform PoC for shared user-account logic across Android and iOS.',
      'Introduced AI-assisted engineering with Claude Code skills and hooks (coding standards, Compose, lint/ktlint, scripted releases).',
    ],
  },
  {
    company: 'Rapid Value Solutions (Aspire Systems)',
    url: 'https://www.aspiresys.com',
    roles: [{ title: 'Software Developer', period: '2019 — 2020' }],
    highlights: [
      'Improved performance and feature stability on the Falabella e-commerce app (5M+ downloads).',
      'Re-engineered login and registration on MVVM — 15% perf improvement, fewer ANRs.',
      'Migrated DI from Dagger to Koin, lifting developer productivity by ~50%.',
    ],
  },
  {
    company: 'Entri',
    url: 'https://entri.app',
    roles: [{ title: 'Product Engineer (Android)', period: '2019' }],
    highlights: [
      'Shipped Android features for exam-prep and community learning (5M+ downloads).',
      'Built scalable features on MVVM with a modular design.',
      'Improved stability via unit testing and tight product/design collaboration.',
    ],
  },
  {
    company: '2Base Technologies',
    url: 'https://www.2basetechnologies.com',
    roles: [{ title: 'Software Developer', period: '2017 — 2019' }],
    highlights: [
      'Developed and maintained Android apps across agile teams.',
      'Focused on scalable, maintainable code practices.',
    ],
  },
]

export type Project = {
  name: string
  tagline: string
  downloads?: string
  url?: string
  tags: string[]
}

export const projects: Project[] = [
  {
    name: 'Vibrantly',
    tagline:
      'AI health app — food logging, blood work analysis and LLM chat. Built conversational onboarding, subscriptions and top-up credits across mobile, web and backend.',
    tags: ['React Native', 'LLM', 'Adapty', 'Cloud Run'],
  },
  {
    name: 'More on GitHub',
    tagline: 'Open-source contributions, side projects and experiments.',
    url: 'https://github.com/SURAJ2600',
    tags: ['Open source', 'Kotlin', 'TypeScript'],
  },
  {
    name: 'Mindvalley',
    tagline:
      'Personal-growth platform — owned media playback, performance infrastructure, build optimization.',
    downloads: '1M+',
    url: 'https://play.google.com/store/apps/details?id=com.mindvalley.mva',
    tags: ['ExoPlayer/Media3', 'Compose', 'KMM', 'Baseline Profiles'],
  },
  {
    name: 'Falabella',
    tagline:
      'Latin-America e-commerce app — re-engineered login/registration and migrated DI to Koin.',
    downloads: '5M+',
    url: 'https://play.google.com/store/apps/details?id=com.falabella.falabellaApp',
    tags: ['MVVM', 'Koin', 'Performance'],
  },
  {
    name: 'Entri',
    tagline: 'Exam-preparation and community learning platform with modular Android features.',
    downloads: '5M+',
    url: 'https://play.google.com/store/apps/details?id=me.entri.entrime&hl=en',
    tags: ['MVVM', 'Modular', 'Testing'],
  },
]

export const education = [
  {
    school: 'University of Calicut — College of Applied Science, IHRD',
    degree: 'BSc Computer Science (Minor: Mathematics, Electronics)',
    period: '2013 — 2016',
    notes: 'College Chairman (2015–2016) • Placement Director',
  },
]

export const certifications = [
  { name: 'Namaste AI Course', issuer: 'NamasteDev', year: '2026' },
  { name: 'Certified Professional Android Developer', issuer: 'MindOrks', year: '2020' },
  { name: 'Android Developer Nanodegree Scholar', issuer: 'Google / Udacity', year: '2017' },
]
