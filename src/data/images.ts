/**
 * All image URLs and paths live here.
 * Drop Olea's real photos into src/assets/ and update the paths below.
 * Placeholders match studio services: face, laser, nails, lashes, massage.
 */

export type SiteImage = {
  src: string
  alt: string
  width?: number
  height?: number
}

export const images = {
  hero: {
    src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=2000&q=80',
    alt: 'Calm facial treatment in soft studio light',
    width: 2000,
    height: 1333,
  },
  intro: {
    src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80',
    alt: 'Clean manicure detail with soft neutral polish',
    width: 1200,
    height: 1500,
  },
  rituals: {
    face: {
      src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80',
      alt: 'Facial cleansing and skin care',
      width: 900,
      height: 1100,
    },
    laser: {
      src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80',
      alt: 'Modern aesthetic treatment room for laser care',
      width: 900,
      height: 1100,
    },
    nails: {
      src: 'https://images.unsplash.com/photo-1631730486572-226b1e126218?auto=format&fit=crop&w=900&q=80',
      alt: 'Manicure and pedicure nail care',
      width: 900,
      height: 1100,
    },
    brows: {
      src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80',
      alt: 'Brow and lash lamination detail',
      width: 900,
      height: 1100,
    },
    body: {
      src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80',
      alt: 'Massage table prepared for body treatments',
      width: 900,
      height: 1100,
    },
  },
  gallery: [
    {
      src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=80',
      alt: 'Polished nails in soft daylight',
    },
    {
      src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1000&q=80',
      alt: 'Facial care with calm, unhurried hands',
    },
    {
      src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
      alt: 'Brow and lash tools beside a mirror',
    },
    {
      src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80',
      alt: 'Spa towels ready for massage',
    },
    {
      src: 'https://images.unsplash.com/photo-1631730486572-226b1e126218?auto=format&fit=crop&w=1000&q=80',
      alt: 'Soft nail detail after manicure',
    },
    {
      src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80',
      alt: 'Treatment bed dressed for facial care',
    },
    {
      src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1000&q=80',
      alt: 'Hands receiving oil care during a treatment',
    },
    {
      src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80',
      alt: 'Clean aesthetic studio for laser epilation',
    },
    {
      src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1000&q=80',
      alt: 'Skincare products used in facial treatments',
    },
    {
      src: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80',
      alt: 'Creams and cotton pads for facial cleansing',
    },
    {
      src: 'https://images.unsplash.com/photo-1607779097040-26be259829fa?auto=format&fit=crop&w=1000&q=80',
      alt: 'Nail polish bottles ready for manicure',
    },
    {
      src: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1000&q=80',
      alt: 'Calm studio textures with soft shadows',
    },
  ] as SiteImage[],
  instagram: [
    {
      src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80',
      alt: 'Instagram: manicure with clean polish',
    },
    {
      src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
      alt: 'Instagram: brow and lash care',
    },
    {
      src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80',
      alt: 'Instagram: facial cleansing treatment',
    },
    {
      src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80',
      alt: 'Instagram: relaxing massage setup',
    },
    {
      src: 'https://images.unsplash.com/photo-1631730486572-226b1e126218?auto=format&fit=crop&w=600&q=80',
      alt: 'Instagram: soft nail detail',
    },
    {
      src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
      alt: 'Instagram: calm facial treatment room',
    },
  ] as SiteImage[],
  about: {
    story: {
      src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80',
      alt: 'Olea studio treatment space in soft light',
      width: 1400,
      height: 900,
    },
  },
} as const
