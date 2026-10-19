import { images } from './images'

/** High-quality SVG mark from the Olea identity (vector — crisp at any size). */
export const LOGO_MARK_SRC = '/brand/logo-mark.svg'

export type Lang = 'en' | 'ka'
export type Theme = 'light' | 'dark'

export const siteMeta = {
  name: 'Olea',
  fullName: 'Olea Aesthetic & Beauty',
  logoMarkSrc: LOGO_MARK_SRC,
  logoReady: true,

  social: {
    instagram: {
      handle: '@the_olea_',
      href: 'https://www.instagram.com/the_olea_/',
    },
    facebook: {
      href: 'https://www.facebook.com/p/OLEA-61582363402228/',
    },
  },

  contact: {
    addressLine1: '3b Kaspi St',
    addressLine2: 'Tbilisi',
    addressQuery: '3b Kaspi St, Tbilisi',
    phoneDisplay: '577 65 22 44',
    phoneHref: 'tel:+995577652244',
    email: 'aminashvili9@gmail.com',
    emailHref: 'mailto:aminashvili9@gmail.com',
    rating: 5,
    ratingMax: 5,
  },

  bookPath: '/book',

  rituals: [
    { id: 'face', image: images.rituals.face, to: '/treatments#face' },
    { id: 'laser', image: images.rituals.laser, to: '/treatments#laser' },
    { id: 'nails', image: images.rituals.nails, to: '/treatments#nails' },
    { id: 'brows', image: images.rituals.brows, to: '/treatments#brows' },
    { id: 'body', image: images.rituals.body, to: '/treatments#body' },
  ],

  book: {
    timeSlots: [
      '10:00',
      '10:30',
      '11:00',
      '11:30',
      '12:00',
      '12:30',
      '13:00',
      '13:30',
      '14:00',
      '14:30',
      '15:00',
      '15:30',
      '16:00',
      '16:30',
      '17:00',
      '17:30',
      '18:00',
      '18:30',
      '19:00',
      '19:30',
      '20:00',
      '20:30',
    ],
    unavailableSlotIndexes: [2, 5, 8, 11, 14, 18],
  },

  galleryImages: images.gallery,
  homeGalleryImages: images.gallery.slice(0, 10),
  instagramImages: images.instagram,
  heroImage: images.hero,
  introImage: images.intro,
  aboutImage: images.about.story,
} as const

type Copy = {
  bookCta: string
  nav: { label: string; to: string }[]
  skipToContent: string
  themeLight: string
  themeDark: string
  langEn: string
  langKa: string
  contact: {
    addressLine1: string
    addressLine2: string
    hours: { days: string; time: string }[]
    ratingLabel: string
  }
  social: { instagram: string; facebook: string }
  home: {
    hero: {
      line1: string
      line2: string
      subline: string
      primaryCta: string
      secondaryCta: string
    }
    intro: { eyebrow: string; heading: string; body: string; cta: string }
    ritualsHeading: { eyebrow: string; title: string; subtitle: string }
    statement: string
    galleryHeading: { eyebrow: string; title: string; linkLabel: string }
    testimonialsHeading: { eyebrow: string; title: string }
    instagramHeading: { eyebrow: string; title: string }
    visitHeading: { eyebrow: string; title: string }
    contactCta: string
  }
  rituals: Record<
    string,
    { name: string; description: string; fromPrice: string }
  >
  treatmentsPage: {
    eyebrow: string
    title: string
    subtitle: string
    bookThis: string
    readyTitle: string
  }
  treatments: Record<
    string,
    {
      ritualName: string
      items: Record<
        string,
        { name: string; description: string; duration: string; price: string }
      >
    }
  >
  testimonials: { id: string; quote: string; name: string }[]
  about: {
    title: string
    storyHeading: string
    story: string[]
    philosophyHeading: string
    philosophy: string
    values: { title: string; body: string }[]
  }
  book: {
    title: string
    demoNote: string
    steps: string[]
    chooseTreatment: string
    dateTime: string
    nextDays: string
    availableTimes: string
    yourDetails: string
    notesOptional: string
    review: string
    confirm: string
    continue: string
    back: string
    confirmationTitle: string
    confirmationBody: string
    backHome: string
    summaryTitle: string
    notSelected: string
    labels: {
      treatment: string
      when: string
      details: string
      name: string
      phone: string
      email: string
      notes: string
    }
    errors: {
      name: string
      phone: string
      emailRequired: string
      emailInvalid: string
    }
  }
  contactPage: {
    title: string
    intro: string
    studio: string
    writeToUs: string
    formNote: string
    name: string
    email: string
    message: string
    send: string
    thankYou: string
    formSuccess: string
    backHome: string
    errors: { name: string; email: string; emailInvalid: string; message: string }
  }
  galleryPage: { title: string; intro: string; eyebrow: string }
  map: { title: string; loadHint: string; directions: string }
  footer: {
    blurb: string
    visit: string
    explore: string
    newsletterLabel: string
    newsletterPlaceholder: string
    newsletterNote: string
    newsletterJoin: string
    copyright: string
    quickLinks: { label: string; to: string }[]
  }
  notFound: {
    code: string
    title: string
    body: string
    home: string
  }
  pages: Record<string, { title: string }>
}

const en: Copy = {
  bookCta: 'Book now',
  nav: [
    { label: 'Treatments', to: '/treatments' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ],
  skipToContent: 'Skip to content',
  themeLight: 'Light mode',
  themeDark: 'Dark mode',
  langEn: 'English',
  langKa: 'Georgian',
  contact: {
    addressLine1: '3b Kaspi St',
    addressLine2: 'Tbilisi',
    hours: [{ days: 'Monday – Sunday', time: '10:00 AM – 9:00 PM' }],
    ratingLabel: '5/5 from early client reviews',
  },
  social: {
    instagram: '@the_olea_',
    facebook: 'Olea on Facebook',
  },
  home: {
    hero: {
      line1: 'CALM BEAUTY',
      line2: 'in the heart of Tbilisi',
      subline:
        'Facial care, diode laser, nails, lashes, and massage on Kaspi Street.',
      primaryCta: 'Book now',
      secondaryCta: 'View treatments',
    },
    intro: {
      eyebrow: 'Olea',
      heading: 'A quiet studio for real results.',
      body: 'Olea Aesthetic & Beauty is a small studio in Tbilisi. We focus on facial cleansing, diode laser epilation, manicure and pedicure, brow and lash care, massage, and practical nail courses — clear work, no rush.',
      cta: 'Our story',
    },
    ritualsHeading: {
      eyebrow: 'Services',
      title: 'What we offer',
      subtitle: 'Ten focused treatments. Choose what you need.',
    },
    statement: 'Clean work. Honest advice. Beauty without the rush.',
    galleryHeading: {
      eyebrow: 'Gallery',
      title: 'Inside the studio',
      linkLabel: 'View all',
    },
    testimonialsHeading: {
      eyebrow: 'Reviews',
      title: 'What our clients say',
    },
    instagramHeading: {
      eyebrow: 'Follow us',
      title: 'On Instagram',
    },
    visitHeading: {
      eyebrow: 'Visit',
      title: 'Find us',
    },
    contactCta: 'Contact us',
  },
  rituals: {
    face: {
      name: 'Face',
      description: 'Cleansing, plasmolifting, and contour threads.',
      fromPrice: 'From 50 ₾',
    },
    laser: {
      name: 'Laser',
      description: '3-wavelength diode epilation on a 2025 machine.',
      fromPrice: 'From 15 ₾',
    },
    nails: {
      name: 'Nails',
      description: 'Manicure, pedicure, and training courses.',
      fromPrice: 'From 20 ₾',
    },
    brows: {
      name: 'Brows & Lashes',
      description: 'Lamination and Botox for brows or lashes.',
      fromPrice: 'From 75 ₾',
    },
    body: {
      name: 'Body',
      description: 'Anti-cellulite and full-body relaxing massage.',
      fromPrice: 'From 50 ₾',
    },
  },
  treatmentsPage: {
    eyebrow: 'Menu',
    title: 'Treatments',
    subtitle: 'Our full list of services at Olea in Tbilisi.',
    bookThis: 'Book this',
    readyTitle: 'Ready to book?',
  },
  treatments: {
    face: {
      ritualName: 'Face',
      items: {
        'face-cleansing': {
          name: 'Superficial or deep facial cleansing',
          description:
            'A light surface cleanse or a deeper treatment for tired, congested skin.',
          duration: '60–90 min',
          price: '50 ₾',
        },
        plasmolifting: {
          name: 'Plasmolifting',
          description:
            'Platelet-rich plasma care to support skin renewal and a fresher look.',
          duration: '45–60 min',
          price: '90 ₾',
        },
        'face-threads': {
          name: 'Hyaluronic acid threads for facial contouring',
          description:
            'Thread placement with hyaluronic acid to refine the facial oval.',
          duration: '60–90 min',
          price: '1,800 ₾',
        },
      },
    },
    laser: {
      ritualName: 'Laser epilation',
      items: {
        'diode-laser': {
          name: 'Diode laser hair removal (3-wavelength, 2025)',
          description:
            'Hair removal with a current 3-wavelength diode machine for precise epilation.',
          duration: '15–45 min',
          price: '15 ₾',
        },
      },
    },
    nails: {
      ritualName: 'Manicure & pedicure',
      items: {
        'manicure-pedicure': {
          name: 'Pedicure or manicure',
          description: 'Careful nail care for hands or feet with a clean finish.',
          duration: '60–75 min',
          price: '45 ₾',
        },
        'classic-nails': {
          name: 'Classic manicure or pedicure',
          description: 'Classic technique for hands or feet, with polish if you wish.',
          duration: '45–60 min',
          price: '20 ₾',
        },
        'nails-course': {
          name: 'Manicure or pedicure training course',
          description:
            'A practical learning course for manicure or pedicure skills.',
          duration: 'Full course',
          price: '450 ₾',
        },
      },
    },
    brows: {
      ritualName: 'Brows & lashes',
      items: {
        'brows-lashes': {
          name: 'Eyebrow or eyelash lamination and Botox',
          description:
            'Lamination and Botox for brows or lashes — soft shape and lasting definition.',
          duration: '60–75 min',
          price: '75 ₾',
        },
      },
    },
    body: {
      ritualName: 'Massage',
      items: {
        anticellulite: {
          name: 'Anti-cellulite massage',
          description:
            'Focused work on a problem area, or a full-body anti-cellulite session.',
          duration: '45–90 min',
          price: '50 ₾',
        },
        'relaxing-massage': {
          name: 'Full-body relaxing massage',
          description: 'A full-body massage for rest and quiet recovery.',
          duration: '60–90 min',
          price: '100 ₾',
        },
      },
    },
  },
  testimonials: [
    {
      id: 't1',
      quote:
        'I came for a facial cleanse and left with clear advice and soft, calm skin. The studio feels quiet and careful.',
      name: 'Nino M.',
    },
    {
      id: 't2',
      quote:
        'Laser sessions are quick and professional. They explained everything before we started — no pressure, just good work.',
      name: 'Ana K.',
    },
    {
      id: 't3',
      quote:
        'My manicure lasted beautifully, and the brow lamination looked natural. I will book the relaxing massage next.',
      name: 'Tamar L.',
    },
  ],
  about: {
    title: 'About Olea',
    storyHeading: 'Named for the olive tree',
    story: [
      'Olea is an aesthetic and beauty studio in Tbilisi, on Kaspi Street.',
      'We keep the menu focused: facial care, diode laser, nails, brows and lashes, massage, and training courses.',
      'The name comes from the olive tree — steady growth and quiet strength. That is the pace we work at.',
    ],
    philosophyHeading: 'How we work',
    philosophy:
      'Clear procedures. Careful technique. Honest recommendations — only what you need.',
    values: [
      {
        title: 'Care',
        body: 'We take time with each guest and each step of the treatment.',
      },
      {
        title: 'Clarity',
        body: 'You hear what we recommend and why — in plain language.',
      },
      {
        title: 'Calm',
        body: 'A small studio where you can slow down and feel comfortable.',
      },
    ],
  },
  book: {
    title: 'Book now',
    demoNote:
      'This is a demo booking flow. Nothing is saved or sent. Call or write to confirm a real appointment.',
    steps: ['Treatment', 'Date & time', 'Your details', 'Confirm'],
    chooseTreatment:
      'Choose a treatment. It may already be selected if you came from the menu.',
    dateTime: 'Date & time',
    nextDays: 'Next 30 days. Some slots are marked unavailable for the demo.',
    availableTimes: 'Available times',
    yourDetails: 'Your details',
    notesOptional: 'Notes (optional)',
    review: 'Review & confirm',
    confirm: 'Confirm booking',
    continue: 'Continue',
    back: 'Back',
    confirmationTitle: 'Request ready.',
    confirmationBody:
      'In a live booking system this would reach Olea. For now, please call 577 65 22 44 or email aminashvili9@gmail.com to confirm.',
    backHome: 'Back to home',
    summaryTitle: 'Your booking',
    notSelected: 'Not selected',
    labels: {
      treatment: 'Treatment',
      when: 'When',
      details: 'Details',
      name: 'Name',
      phone: 'Phone',
      email: 'Email',
      notes: 'Notes',
    },
    errors: {
      name: 'Name is required.',
      phone: 'Enter a valid phone number.',
      emailRequired: 'Email is required.',
      emailInvalid: 'Enter a valid email.',
    },
  },
  contactPage: {
    title: 'Contact',
    intro: 'Write to us, call, or visit the studio on Kaspi Street.',
    studio: 'Studio',
    writeToUs: 'Write to us',
    formNote:
      'This form stays on your device. For a real message, email aminashvili9@gmail.com.',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send message',
    thankYou: 'Thank you',
    formSuccess:
      'Thank you. Nothing was sent from this page. Please reach us at aminashvili9@gmail.com or 577 65 22 44.',
    backHome: 'Back to home',
    errors: {
      name: 'Please enter your name.',
      email: 'Please enter your email.',
      emailInvalid: 'Please enter a valid email.',
      message: 'Please write a short message (at least 10 characters).',
    },
  },
  galleryPage: {
    eyebrow: 'Studio',
    title: 'Gallery',
    intro: 'Nails, lashes, facial care, massage, and the calm mood of Olea.',
  },
  map: {
    title: 'Map',
    loadHint: 'Tap to load the map for 3b Kaspi St, Tbilisi',
    directions: 'Get directions',
  },
  footer: {
    blurb: 'Aesthetic and beauty studio in Tbilisi — calm care on Kaspi Street.',
    visit: 'Visit',
    explore: 'Explore',
    newsletterLabel: 'Newsletter',
    newsletterPlaceholder: 'Your email',
    newsletterNote: 'Visual only — nothing is submitted.',
    newsletterJoin: 'Join',
    copyright: `© ${new Date().getFullYear()} Olea Aesthetic & Beauty. All rights reserved.`,
    quickLinks: [
      { label: 'Treatments', to: '/treatments' },
      { label: 'Gallery', to: '/gallery' },
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'Book now', to: '/book' },
    ],
  },
  notFound: {
    code: '404',
    title: 'Page not found',
    body: 'This page does not exist. Go home or book a treatment.',
    home: 'Back to home',
  },
  pages: {
    home: { title: 'Olea Aesthetic & Beauty — Tbilisi' },
    treatments: { title: 'Treatments — Olea' },
    gallery: { title: 'Gallery — Olea' },
    about: { title: 'About — Olea' },
    contact: { title: 'Contact — Olea' },
    book: { title: 'Book now — Olea' },
    notFound: { title: 'Page not found — Olea' },
  },
}

const ka: Copy = {
  bookCta: 'დაჯავშნა',
  nav: [
    { label: 'პროცედურები', to: '/treatments' },
    { label: 'გალერეა', to: '/gallery' },
    { label: 'ჩვენს შესახებ', to: '/about' },
    { label: 'კონტაქტი', to: '/contact' },
  ],
  skipToContent: 'მთავარ კონტენტზე გადასვლა',
  themeLight: 'ნათელი თემა',
  themeDark: 'მუქი თემა',
  langEn: 'ინგლისური',
  langKa: 'ქართული',
  contact: {
    addressLine1: 'კასპის ქ. 3ბ',
    addressLine2: 'თბილისი',
    hours: [{ days: 'ორშაბათი – კვირა', time: '10:00 – 21:00' }],
    ratingLabel: 'შეფასება 5/5 — პირველი კლიენტების მიხედვით',
  },
  social: {
    instagram: '@the_olea_',
    facebook: 'Olea Facebook-ზე',
  },
  home: {
    hero: {
      line1: 'მშვიდი სილამაზე',
      line2: 'თბილისის გულში',
      subline:
        'სახის მოვლა, დიოდური ეპილაცია, მანიკური, წარბები და მასაჟი კასპის ქუჩაზე.',
      primaryCta: 'დაჯავშნა',
      secondaryCta: 'პროცედურები',
    },
    intro: {
      eyebrow: 'Olea',
      heading: 'პატარა სტუდია, ნათელი შედეგი.',
      body: 'Olea Aesthetic & Beauty — ესთეტიკისა და სილამაზის სტუდია თბილისში. გთავაზობთ სახის წმენდას, დიოდურ ეპილაციას, მანიკურსა და პედიკურს, წარბებისა და წამწამების მოვლას, მასაჟს და ფრჩხილების კურსებს.',
      cta: 'ჩვენს შესახებ',
    },
    ritualsHeading: {
      eyebrow: 'მომსახურება',
      title: 'რას გთავაზობთ',
      subtitle: 'ათი პროცედურა. აირჩიეთ ის, რაც გჭირდებათ.',
    },
    statement: 'სუფთა სამუშაო. გულწრფელი რჩევა. სილამაზე აჩქარების გარეშე.',
    galleryHeading: {
      eyebrow: 'გალერეა',
      title: 'სტუდიაში',
      linkLabel: 'ყველას ნახვა',
    },
    testimonialsHeading: {
      eyebrow: 'შეფასებები',
      title: 'რას ამბობენ კლიენტები',
    },
    instagramHeading: {
      eyebrow: 'გამოგვყევით',
      title: 'Instagram-ზე',
    },
    visitHeading: {
      eyebrow: 'ვიზიტი',
      title: 'მოგვძებნეთ',
    },
    contactCta: 'კონტაქტი',
  },
  rituals: {
    face: {
      name: 'სახე',
      description: 'წმენდა, პლაზმოლიფტინგი და სახის ოვალის კორექცია.',
      fromPrice: 'დან 50 ₾',
    },
    laser: {
      name: 'ლაზერი',
      description: 'სამსხივიანი დიოდური ეპილაცია 2025 წლის აპარატით.',
      fromPrice: 'დან 15 ₾',
    },
    nails: {
      name: 'ფრჩხილები',
      description: 'მანიკური, პედიკური და სასწავლო კურსები.',
      fromPrice: 'დან 20 ₾',
    },
    brows: {
      name: 'წარბები და წამწამები',
      description: 'ლამინირება და ბოტოქსი წარბებისთვის ან წამწამებისთვის.',
      fromPrice: 'დან 75 ₾',
    },
    body: {
      name: 'სხეული',
      description: 'ანტიცელულიტური და სარელაქსაციო მასაჟი.',
      fromPrice: 'დან 50 ₾',
    },
  },
  treatmentsPage: {
    eyebrow: 'მენიუ',
    title: 'პროცედურები',
    subtitle: 'Olea-ს სრული სია თბილისში.',
    bookThis: 'დაჯავშნა',
    readyTitle: 'მზად ხართ დასაჯავშნად?',
  },
  treatments: {
    face: {
      ritualName: 'სახე',
      items: {
        'face-cleansing': {
          name: 'სახის ზედაპირული ან ღრმა წმენდა',
          description:
            'მსუბუქი ზედაპირული წმენდა ან უფრო ღრმა პროცედურა დაღლილი კანისთვის.',
          duration: '60–90 წთ',
          price: '50 ₾',
        },
        plasmolifting: {
          name: 'პლაზმოლიფტინგი',
          description:
            'პლაზმოლიფტინგი კანის განახლებისა და უფრო სუფთა იერისთვის.',
          duration: '45–60 წთ',
          price: '90 ₾',
        },
        'face-threads': {
          name: 'სახის ოვალის კორექცია ჰიალურონის მჟავის ძაფებით',
          description:
            'ძაფები ჰიალურონის მჟავით სახის ოვალის კორექციისთვის.',
          duration: '60–90 წთ',
          price: '1,800 ₾',
        },
      },
    },
    laser: {
      ritualName: 'დიოდური ეპილაცია',
      items: {
        'diode-laser': {
          name: 'დიოდური ეპილაცია 3 სხივიანი 2025 წლის აპარატით',
          description:
            'თმის მოცილება სამსხივიანი დიოდური აპარატით — ზუსტი და ეფექტური ეპილაცია.',
          duration: '15–45 წთ',
          price: '15 ₾',
        },
      },
    },
    nails: {
      ritualName: 'მანიკური და პედიკური',
      items: {
        'manicure-pedicure': {
          name: 'პედიკური ან მანიკური',
          description: 'ფრჩხილების მოვლა ხელებზე ან ფეხებზე — სუფთა ფორმა და მოწესრიგებული იერი.',
          duration: '60–75 წთ',
          price: '45 ₾',
        },
        'classic-nails': {
          name: 'კლასიკური მანიკური ან პედიკური',
          description:
            'კლასიკური ტექნიკა ხელებისთვის ან ფეხებისთვის, სურვილისამებრ ლაქით.',
          duration: '45–60 წთ',
          price: '20 ₾',
        },
        'nails-course': {
          name: 'მანიკურის ან პედიკურის შემსწავლელი კურსი',
          description:
            'პრაქტიკული კურსი მანიკურში ან პედიკურში.',
          duration: 'სრული კურსი',
          price: '450 ₾',
        },
      },
    },
    brows: {
      ritualName: 'წარბები და წამწამები',
      items: {
        'brows-lashes': {
          name: 'წარბის ან წამწამის ლამინირება, ბოტოქსი',
          description:
            'ლამინირება და ბოტოქსი წარბებისთვის ან წამწამებისთვის — რბილი ფორმა და ხანგრძლივი შედეგი.',
          duration: '60–75 წთ',
          price: '75 ₾',
        },
      },
    },
    body: {
      ritualName: 'მასაჟი',
      items: {
        anticellulite: {
          name: 'ანტიცელულიტური მასაჟი',
          description:
            'მუშაობა პრობლემურ ზონაზე ან მთლიან სხეულზე.',
          duration: '45–90 წთ',
          price: '50 ₾',
        },
        'relaxing-massage': {
          name: 'მთლიანი სხეულის სარელაქსაციო მასაჟი',
          description: 'სრული სხეულის მასაჟი დასვენებისა და განტვირთვისთვის.',
          duration: '60–90 წთ',
          price: '100 ₾',
        },
      },
    },
  },
  testimonials: [
    {
      id: 't1',
      quote:
        'სახის წმენდაზე მოვედი და კარგი რჩევაც მივიღე. კანი მშვიდი და სუფთა იყო. სტუდია ძალიან სასიამოვნოა.',
      name: 'ნინო მ.',
    },
    {
      id: 't2',
      quote:
        'ლაზერული ეპილაცია სწრაფი და პროფესიონალური იყო. ყველაფერი წინასწარ ამიხსნეს — ზეწოლა არ ყოფილა.',
      name: 'ანა კ.',
    },
    {
      id: 't3',
      quote:
        'მანიკური დიდხანს გაძლო, წარბების ლამინირება ბუნებრივად გამოიყურება. შემდეგ მასაჟსაც დავჯავშნი.',
      name: 'თამარ ლ.',
    },
  ],
  about: {
    title: 'Olea-ს შესახებ',
    storyHeading: 'სახელი ზეთისხილის ხისგან',
    story: [
      'Olea — ესთეტიკისა და სილამაზის სტუდია თბილისში, კასპის ქუჩაზე.',
      'მენიუ მარტივია და გასაგები: სახის მოვლა, დიოდური ლაზერი, ფრჩხილები, წარბები და წამწამები, მასაჟი და სასწავლო კურსები.',
      'სახელი მომდინარეობს ზეთისხილის ხიდან — მშვიდი ძალა და სტაბილური ზრდა. ასეთივე ტემპით ვმუშაობთ.',
    ],
    philosophyHeading: 'როგორ ვმუშაობთ',
    philosophy:
      'გასაგები პროცედურები. ფრთხილი ტექნიკა. გულწრფელი რჩევა — მხოლოდ ის, რაც გჭირდებათ.',
    values: [
      {
        title: 'ზრუნვა',
        body: 'თითოეულ სტუმარს და პროცედურის თითოეულ ეტაპს საკმარის დროს ვუთმობთ.',
      },
      {
        title: 'სიცხადე',
        body: 'გეტყვით, რას გირჩევთ და რატომ — მარტივი ენით.',
      },
      {
        title: 'სიმშვიდე',
        body: 'პატარა სტუდია, სადაც შეგიძლიათ დაისვენოთ და კომფორტულად იგრძნოთ თავი.',
      },
    ],
  },
  book: {
    title: 'დაჯავშნა',
    demoNote:
      'ეს დემო ჯავშანია. მონაცემები არ ინახება. რეალური ვიზიტისთვის დაგვირეკეთ ან მოგვწერეთ.',
    steps: ['პროცედურა', 'თარიღი და დრო', 'თქვენი მონაცემები', 'დადასტურება'],
    chooseTreatment:
      'აირჩიეთ პროცედურა. თუ მენიუდან მოხვედით, ის უკვე შეიძლება მონიშნული იყოს.',
    dateTime: 'თარიღი და დრო',
    nextDays: 'შემდეგი 30 დღე. დემოში ზოგიერთი საათი მიუწვდომელია.',
    availableTimes: 'თავისუფალი საათები',
    yourDetails: 'თქვენი მონაცემები',
    notesOptional: 'შენიშვნა (არასავალდებულო)',
    review: 'გადახედვა და დადასტურება',
    confirm: 'ჯავშნის დადასტურება',
    continue: 'გაგრძელება',
    back: 'უკან',
    confirmationTitle: 'მოთხოვნა მზადაა.',
    confirmationBody:
      'რეალურ სისტემაში ეს Olea-ს გაეგზავნებოდა. ახლა დაგვირეკეთ 577 65 22 44 ან მოგვწერეთ aminashvili9@gmail.com.',
    backHome: 'მთავარ გვერდზე',
    summaryTitle: 'თქვენი ჯავშანი',
    notSelected: 'არ არის არჩეული',
    labels: {
      treatment: 'პროცედურა',
      when: 'დრო',
      details: 'დეტალები',
      name: 'სახელი',
      phone: 'ტელეფონი',
      email: 'ელფოსტა',
      notes: 'შენიშვნა',
    },
    errors: {
      name: 'სახელი აუცილებელია.',
      phone: 'შეიყვანეთ სწორი ტელეფონის ნომერი.',
      emailRequired: 'ელფოსტა აუცილებელია.',
      emailInvalid: 'შეიყვანეთ სწორი ელფოსტა.',
    },
  },
  contactPage: {
    title: 'კონტაქტი',
    intro: 'მოგვწერეთ, დაგვირეკეთ ან გვეწვიეთ კასპის ქუჩაზე.',
    studio: 'სტუდია',
    writeToUs: 'მოგვწერეთ',
    formNote:
      'ეს ფორმა მხოლოდ თქვენს მოწყობილობაზე რჩება. რეალური შეტყობინებისთვის: aminashvili9@gmail.com.',
    name: 'სახელი',
    email: 'ელფოსტა',
    message: 'შეტყობინება',
    send: 'გაგზავნა',
    thankYou: 'გმადლობთ',
    formSuccess:
      'გმადლობთ. ამ გვერდიდან არაფერი გაიგზავნა. დაგვიკავშირდით: aminashvili9@gmail.com ან 577 65 22 44.',
    backHome: 'მთავარ გვერდზე',
    errors: {
      name: 'გთხოვთ, შეიყვანოთ სახელი.',
      email: 'გთხოვთ, შეიყვანოთ ელფოსტა.',
      emailInvalid: 'გთხოვთ, შეიყვანოთ სწორი ელფოსტა.',
      message: 'გთხოვთ, დაწეროთ მოკლე შეტყობინება (მინიმუმ 10 სიმბოლო).',
    },
  },
  galleryPage: {
    eyebrow: 'სტუდია',
    title: 'გალერეა',
    intro: 'ფრჩხილები, წარბები, სახის მოვლა, მასაჟი და Olea-ს მშვიდი განწყობა.',
  },
  map: {
    title: 'რუკა',
    loadHint: 'დააჭირეთ რუკის ჩასატვირთად — კასპის ქ. 3ბ, თბილისი',
    directions: 'მიმართულება',
  },
  footer: {
    blurb: 'ესთეტიკისა და სილამაზის სტუდია თბილისში — კასპის ქუჩა.',
    visit: 'ვიზიტი',
    explore: 'ნავიგაცია',
    newsletterLabel: 'სიახლეები',
    newsletterPlaceholder: 'თქვენი ელფოსტა',
    newsletterNote: 'მხოლოდ ვიზუალური ველი — არაფერი იგზავნება.',
    newsletterJoin: 'გაწევრიანება',
    copyright: `© ${new Date().getFullYear()} Olea Aesthetic & Beauty. ყველა უფლება დაცულია.`,
    quickLinks: [
      { label: 'პროცედურები', to: '/treatments' },
      { label: 'გალერეა', to: '/gallery' },
      { label: 'ჩვენს შესახებ', to: '/about' },
      { label: 'კონტაქტი', to: '/contact' },
      { label: 'დაჯავშნა', to: '/book' },
    ],
  },
  notFound: {
    code: '404',
    title: 'გვერდი ვერ მოიძებნა',
    body: 'ასეთი გვერდი არ არსებობს. დაბრუნდით მთავარზე ან დაჯავშნეთ პროცედურა.',
    home: 'მთავარ გვერდზე',
  },
  pages: {
    home: { title: 'Olea Aesthetic & Beauty — თბილისი' },
    treatments: { title: 'პროცედურები — Olea' },
    gallery: { title: 'გალერეა — Olea' },
    about: { title: 'ჩვენს შესახებ — Olea' },
    contact: { title: 'კონტაქტი — Olea' },
    book: { title: 'დაჯავშნა — Olea' },
    notFound: { title: 'გვერდი ვერ მოიძებნა — Olea' },
  },
}

export const copy: Record<Lang, Copy> = { en, ka }

export function getMapsEmbedUrl(addressQuery: string): string {
  const q = encodeURIComponent(addressQuery)
  return `https://maps.google.com/maps?q=${q}&t=&z=16&ie=UTF8&iwloc=&output=embed`
}

export function getMapsDirectionsUrl(addressQuery: string): string {
  const q = encodeURIComponent(addressQuery)
  return `https://www.google.com/maps/dir/?api=1&destination=${q}`
}

export type TreatmentRef = {
  id: string
  ritualId: string
  name: string
  description: string
  duration: string
  price: string
}

export function findTreatment(
  lang: Lang,
  id: string,
): TreatmentRef | undefined {
  const t = copy[lang].treatments
  for (const [ritualId, group] of Object.entries(t)) {
    const item = group.items[id]
    if (item) {
      return { id, ritualId, ...item }
    }
  }
  return undefined
}
