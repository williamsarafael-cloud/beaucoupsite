// ALL EDITABLE SITE TEXT LIVES HERE (plus the page files in src/pages).
// Copy is carried over word-for-word from the original Wix site.

export const site = {
  name: 'Beaucoup Consulting',
  url: 'https://beaucoupconsult.com',
  phone: '404.938.9214',
  phoneHref: '+14049389214',
  email: 'rafael.williams@beaucoupconsult.com',
  booking: 'https://calendar.app.google/SbRcoaXmVTpSKg3N9',
  linkedin: 'https://www.linkedin.com/in/willliamsrafael/',
  founderName: 'Rafael Williams',
  founderTitle: 'Founder',
  tagline: 'Empowering People, Elevating Workplaces through Strategic HR Solutions',
  eyebrow: 'Fractional HR & DEI Consultation',
  ctaSubject: 'Let’s Collaborate: Consultation Inquiry',
};

export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
];

export const differentiators = [
  { title: 'We Speak Start-Up', text: 'With years of experience working alongside high-growth companies, we get the fast pace, the constant pivoting, and the need for agile solutions that grow with you.' },
  { title: 'We’re All about Impact', text: 'Our approach is tailored to your specific needs. We don’t just create policies; we build frameworks that empower your people, fuel innovation, and drive sustainable growth.' },
  { title: 'We Bring Real-World Expertise', text: 'From talent acquisition and culture development to DEIB initiatives and compliance, we’ve been in the trenches, solving the exact challenges you face today.' },
  { title: 'We’re Fun and Flexible', text: 'We believe HR should be as dynamic as your business—fun, flexible, and forward-thinking. We’re here to make sure your HR strategy is not just effective but also engaging and aligned with your company culture.' },
];

export const capabilities = [
  { title: 'Talent Acquisition', text: 'Identifying and recruiting top talent that aligns with your company’s vision and culture.' },
  { title: 'Employee Engagement', text: 'Nurturing a positive workplace culture that encourages collaboration and innovation, boosting productivity and retention.' },
  { title: 'Compensation & Benefits', text: 'Structuring competitive compensation packages and benefits to attract and retain top talent.' },
  { title: 'Train & Onboarding', text: 'Implementing effective onboarding and training programs to integrate new hires and foster skill development.' },
];

export interface Service {
  slug: string;
  name: string;
  short: string; // first sentence(s) used on cards
  description: string; // full original description
  deliverables: string[];
  // SEO fields written for search (edit freely)
  seoTitle: string;
  seoDescription: string;
  h1: string;
}

export const services: Service[] = [
  {
    slug: 'leadership-development',
    name: 'Leadership Development',
    short: 'Empower your leadership team to drive company growth and culture.',
    description: 'Empower your leadership team to drive company growth and culture. Establish clear goals, streamline decision-making, and align leadership with the company’s mission, vision, and values to foster a unified direction.',
    deliverables: [
      'Leadership team assessment and development',
      'Mission, vision, and values alignment workshops',
      'Organizational planning and design',
      'Leadership decision-making framework',
    ],
    seoTitle: 'Leadership Development for Startups',
    seoDescription: 'Leadership team assessment, values alignment workshops, org design and decision-making frameworks for startups and high-growth companies.',
    h1: 'Leadership Development for Startups and Growing Companies',
  },
  {
    slug: 'recruiting-strategy',
    name: 'Recruiting Strategy',
    short: 'Optimize your recruiting operations to provide a positive candidate experience while ensuring alignment with your culture and growth goals.',
    description: 'Optimize your recruiting operations to provide a positive candidate experience while ensuring alignment with your culture and growth goals. Create a compelling recruiting brand, streamline the interview process, and establish metrics to continually improve your hiring practices.',
    deliverables: [
      'End-to-end recruiting process design',
      'Job description templates',
      'Employer branding and recruiting collateral',
      'Interview training programs for hiring managers',
      'Candidate experience strategy and feedback',
    ],
    seoTitle: 'Recruiting Strategy for Startups',
    seoDescription: 'End-to-end recruiting process design, employer branding, and hiring manager interview training for startups and mid-sized companies.',
    h1: 'Recruiting Strategy for Startups and High-Growth Teams',
  },
  {
    slug: 'people-programs',
    name: 'People Programs',
    short: 'Support employees throughout their journey at your company with structured onboarding, career planning, and development programs.',
    description: 'Support employees throughout their journey at your company with structured onboarding, career planning, and development programs. Ensure managers are equipped to lead with confidence and support team growth, retention, and engagement.',
    deliverables: [
      'Comprehensive onboarding and offboarding processes',
      'Manager training programs (feedback, coaching, and performance)',
      'Total rewards strategy (compensation and benefits)',
      'Engagement survey design and follow-up strategy',
      'Career planning and goal-setting frameworks',
    ],
    seoTitle: 'People Programs & Manager Training',
    seoDescription: 'Onboarding and offboarding, manager training, total rewards, engagement surveys and career frameworks for growing companies.',
    h1: 'People Programs: Onboarding, Manager Training and Engagement',
  },
  {
    slug: 'people-operations',
    name: 'People Operations',
    short: 'Streamline and support your core people operations, from payroll to compliance.',
    description: 'Streamline and support your core people operations, from payroll to compliance. Implement policies and systems that keep your organization running smoothly and ensure that employees have the support they need to thrive.',
    deliverables: [
      'Payroll management process',
      'Benefits strategy and design',
      'People policies and employee handbooks',
      'Compliance and risk mitigation plans',
      'HR systems selection and implementation',
      'People analytics and workforce reporting',
    ],
    seoTitle: 'People Operations & HR Compliance',
    seoDescription: 'Payroll processes, benefits design, employee handbooks, compliance plans, HR systems and people analytics for startups and mid-sized companies.',
    h1: 'People Operations and HR Compliance for Growing Companies',
  },
  {
    slug: 'community',
    name: 'Community',
    short: 'Create a vibrant and connected workplace community.',
    description: 'Create a vibrant and connected workplace community. Foster engagement and connection through team events, effective communication, and rituals that reinforce your culture, whether your teams are remote, hybrid, or in-office.',
    deliverables: [
      'All-hands meeting facilitation and structure',
      'Event planning for retreats and team-building',
      'Culture norms and working standards development',
      'Remote/hybrid/office strategy planning',
      'Celebration and recognition programs',
      'Internal communication strategy and execution',
    ],
    seoTitle: 'Workplace Community & Culture',
    seoDescription: 'All-hands facilitation, retreats, culture norms, remote/hybrid strategy and recognition programs that build a connected workplace.',
    h1: 'Workplace Community and Culture for Remote, Hybrid and In-Office Teams',
  },
];

// About page. Three original tabs from the Wix site, kept in full.
export const about = {
  h1: 'About Beaucoup Consulting',
  whoWeAre:
    'Beaucoup Consulting is dedicated to transforming workplace cultures and driving strategic people operations/HR excellence. Our vision is to empower organizations by aligning talent strategies with business goals, fostering inclusive environments, and promoting continuous growth and innovation. We believe in creating workplaces where every individual feels valued, heard, and empowered to contribute their best.',
  ourImpact:
    'At Beaucoup Consulting, our mission is to empower organizations by enhancing their human capital strategies through empathetic, innovative, and tailored HR solutions. We partner with businesses to build thriving workplace cultures, ensuring that every aspect of the employee lifecycle—from talent acquisition to performance management—is optimized for success. Our goal is to drive performance, reduce turnover, and support sustainable growth through strategic HR consulting that addresses the unique needs of each organization.',
  whyNowQuote: 'When asked, “Why now?” My answer is simple: “I am the builder, fixer, and enthusiastic strategist.”',
  whyNow: [
    'I founded Beaucoup Consulting out of a deep-rooted passion for transforming HR in ways that truly matter. This journey began in Law School, where I realized my potential to significantly impact smaller, agile organizations. Start-ups need tailored HR strategies to build, scale, and sustain their teams. I leverage my extensive experience to craft solutions that address their unique challenges, from developing compliant HR policies that mitigate risk to recruiting top talent that drives innovation and market expansion. With the evolving dynamics of today’s workplace and a heightened focus on inclusivity, I saw the perfect opportunity to guide organizations through these complexities and help them thrive. My mission is clear: to empower start-ups/hyper-growth organizations by aligning their people strategy with their boldest goals and ensuring they are equipped to succeed in every aspect of their growth.',
  ],
};

export const founder = {
  name: 'Rafael Williams, MJur',
  bio: [
    'Rafael A. Williams is an experienced HR leader with over ten years in people operations and talent strategy. As the founder of Beaucoup Consulting, he specializes in helping startups and high-growth companies create effective HR frameworks that drive employee engagement and retention.',
    'At Redfin, Rafael managed employee engagement surveys, leading to a significant boost in employee satisfaction. He designed talent programs that improved feedback collection and clarified job roles, empowering teams and enhancing performance.',
    'In his role as an interim HR Business Partner at Redfin, Rafael skillfully navigated workforce changes while ensuring clear communication to maintain efficiency. He also worked closely with leadership to build a performance-driven culture based on employee insights.',
    'Rafael has extensive experience in recruitment and diversity initiatives from his time at Twitter and Microsoft. At Twitter, he successfully increased diverse senior-level hires and created impactful recruitment events. At Microsoft, he consistently exceeded university hiring targets while managing diversity-focused conferences.',
    'With a focus on fostering inclusive workplaces, Rafael combines strategic insights with a passion for people, helping organizations not only meet their goals but also create environments where employees can thrive.',
  ],
};
