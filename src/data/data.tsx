import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Hitesh Pursani',
  description: "Site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Hitesh Pursani.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Pune based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Accenture Ltd</strong> helping build a modern, mobile-first, domain
        registrar and site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Java</strong>,
        plucking my <strong className="text-stone-100">Guitar</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Pune City</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hitesh Pursani, with 17 years' expertise in Java, React, Typescript, Struts, Spring, SpringBoot, Hibernate, PL/SQL, excels in Banking, 
  Telecom, Insurance, Healthcare, and R&D. Managed diverse projects with onsite presence.`,
  aboutItems: [
    {label: 'Location', text: 'Pune, MH, India', Icon: MapIcon},
    {label: 'Age', text: '38', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian / Asian', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Guitar, Music', Icon: SparklesIcon},
    {label: 'Study', text: 'Barkatullah University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Accenture Ltd.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Marathi',
        level: 4,
      },
      {
        name: 'Hindi',
        level: 10,
      },
      {
        name: 'German',
        level: 1,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 7,
      },
      {
        name: 'Java',
        level: 8,
      },
      {
        name: 'SpringBoot',
        level: 8,
      },
      {
        name: 'Oracle',
        level: 6,
      },
      {
        name: 'Angular',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 2,
      },
      {
        name: 'Swift',
        level: 1,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'ETL Developer',
    description: 'Working for one of the biggest Insurance client to maintain and enhance the ETL Tool to maintain a reporting system using DataVault 2.0 Concepts.',
    url: 'https://hitesh-pursani.vercel.app',
    image: porfolioImage1,
  },
  {
    title: 'Java Full Stack Developer',
    description: 'Employed as a full stack developer, proficient in utilizing Spring Boot for backend development and AngularJS for frontend tasks. Additionally, experienced in implementing Cassandra for database management and Hazelcast for caching purposes. Skilled in working with Docker containers and Kubernetes for efficient orchestration of applications.',
    url: 'https://www.techmahindra.com',
    image: porfolioImage2,
  },
  {
    title: 'Java and Struts Developer',
    description: 'Engaged in dual roles as a UI Developer and a Struts backend developer, facilitating EJB calls for backend operations and managing data processing from the existing backend system. Led the transition of the UI framework from Struts 1 to Struts 2 while actively involved in UI enhancement, Struts, and EJB API integration.',
    url: 'https://www.techmahindra.com',
    image: porfolioImage2,
  },
  {
    title: 'Production Support Analyst',
    description: 'Employed as a Production Support Analyst at a leading APAC Investment Bank renowned for its research reports. Managed day-to-day operations encompassing 24x7 support and participated in numerous migrations and DR cutover activities. Additionally, had the privilege of traveling onsite to facilitate knowledge transfer sessions.',
    url: 'https://www.tcs.com/',
    image: porfolioImage3,
  },
  {
    title: 'Web Developer',
    description: 'Participated in a development endeavor aimed at receiving a 270-request through HTTPS POST method, followed by ensuring HIPAA compliance. Subsequently, facilitated the conversion to a 271 response utilizing a Client Web Service within JCAPS (Enterprise Application Integration Tool).',
    url: 'https://atos.net/en/',
    image: porfolioImage4,
  },
  {
    title: 'Middleware Developer',
    description: 'As it was an enhancement project, I focused on analyzing the existing defect flow, addressing defects, distributing various issues to the team, assisting in their resolution, and directly reporting progress to the client.',
    url: 'https://atos.net/en/',
    image: porfolioImage5,
  },
  {
    title: 'Frontend Developer',
    description: 'The client sought to improve their current website by enhancing user-friendliness, delivering an exceptional user experience, and simplifying its complexity compared to its previous state.',
    url: 'https://atos.net/en/',
    image: porfolioImage6,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2007',
    location: 'Sadhu Vaswani College, Barkatullah University, Bhopal',
    title: 'Bachelors of Computer Application',
    content: <p>During my college experience, I gained academic knowledge, developed critical thinking and 
      communication skills, honed time management and teamwork abilities,
       and gained cultural awareness. These skills have been invaluable in shaping my personal and professional growth.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2021 - Present',
    location: 'Accenture Ltd.',
    title: 'Engineering Manager',
    content: (
      <p>
        Engaged in Safe Agile practices and utilized Java 17, spearheading a successful migration from Java 8 to Java 17 as part of the Eclipse Upgrade Project. Facilitated numerous Safe Agile Ceremonies and efficiently managed production tasks, earning high praise from the client. Proficiently worked with Java, xText, and xTend within the DataVault 2.0 environment on Oracle 19c..
      </p>
    ),
  },
  {
    date: 'January 2015 - April 2021',
    location: 'Tech Mahindra',
    title: 'Full Stack Developer (Associate Tech Specialist)',
    content: (
      <p>
        Employed as a full stack developer and spearheaded a team of six resources, utilizing Scrum Agile methodologies as an individual contributor. Led migration efforts from Struts 1.0 to Struts 2.0 before transitioning to Responsive Web Design (RWD) with AngularJS. Contributed to the migration from Restful APIs to Spring Boot microservices. Additionally, gained valuable experience through direct client engagement in the USA for over two years.
      </p>
    ),
  },
  {
    date: 'August 2012 - January 2015',
    location: 'Tata Consultancy Services',
    title: 'Production Support Analyst (I.T. Analyst)',
    content: (
      <p>
        Employed in production support, specifically back-office support, for a leading investment bank in Asia renowned globally for its research reports. Responsibilities encompassed daily operational support and overseeing the 24x7 support roster. Managed team operations while addressing tickets and offering call support to front and middle office teams as needed.
      </p>
    ),
  },
  {
    date: 'November 2007 - July 2012',
    location: 'Syntel Ltd',
    title: 'Analyst Programmer',
    content: (
      <p>
        Commenced professional journey as a trainee, undergoing comprehensive training in Java and associated technologies. Primarily focused on Java 1.6 and UI technologies, particularly within the Struts framework. Earned accolades from diverse clients for consistently meeting deadlines, swiftly acquiring new technologies, and effectively implementing them. Engaged in research and development initiatives, actively participating in Request for Information and proposals, resulting in successful outcomes.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Miss Y',
      text: 'Hitesh exhibits dedication and exceptional leadership abilities. Our collaboration with him on the XXXX Project showcased not only his technical proficiency but also his adept leadership skills. He consistently delivers on assigned tasks and goes the extra mile to assist the team in resolving issues, demonstrating both his extensive experience and commendable qualities.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Mr. X',
      text: 'Hitesh embodies a rare combination of unwavering dedication and remarkable leadership acumen. Throughout our collaboration on the XXXX Project, he not only showcased his technical prowess but also demonstrated a natural flair for effective leadership. His consistent delivery on tasks, coupled with a proactive approach to supporting team members, sets him apart. Hitesh'+"'"+'s outstanding performance is a testament to his extensive experience and admirable qualities, making him a valued asset to any project.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Mr. Z',
      text: 'I'+"'"+'ve had the pleasure of collaborating with Hitesh Pursani and can confidently say He excel in his role. He brings a unique blend of expertise and creativity to his work, consistently delivering impressive results. Hitesh Pursani is a natural leader who fosters collaboration and drives success. I highly recommend Hitesh for any project or role requiring top-notch talent.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'pursani9@gmail.com',
      href: 'mailto:pursani9@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Pune MH, India',
      href: 'https://maps.app.goo.gl/HRdrW2tb9nNuHfj86',
    },
    {
      type: ContactType.Instagram,
      text: '@hiteshpursani',
      href: 'https://www.instagram.com/hiteshpursani/',
    },
    {
      type: ContactType.Github,
      text: 'pursani9',
      href: 'https://github.com/pursani9',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/pursani9'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/5940109/hitesh-pursani'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/hitesh-pursani-7b78a915/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/hiteshpursani/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/pursani9'},
];
