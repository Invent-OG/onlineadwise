export type Blog = {
  slug: string;
  title: string;
  author: string;
  authorImg: string;
  thumbnail: string;
  day: string;
  month: string;
  excerpt: string;
  content: string;
  // optional: category?: string;
};

export const blogs = [
  {
    slug: "spa-day-benefits",
    title: "Top 7 Benefits of a Relaxing Spa Day",
    author: "Amelia GREEN",
    authorImg: "https://randomuser.me/api/portraits/women/12.jpg",
    thumbnail:
      "https://images.pexels.com/photos/6621151/pexels-photo-6621151.jpeg", // spa candles + relaxation
    day: "05",
    month: "JANUARY",
    excerpt:
      "From stress relief to glowing skin, a spa day is more than just a luxury — it’s self-care.",
    content:
      "A spa day offers physical and mental rejuvenation. Massages ease muscle tension and improve circulation, while facials hydrate and restore skin health. Steam rooms and aromatherapy treatments reduce stress and support detoxification. Beyond physical benefits, spa visits enhance mood, boost confidence, and promote mindfulness. Even small rituals like a 20-minute soak or essential oil massage at home can recreate these benefits in daily life.A spa day offers physical and mental rejuvenation. Massages ease muscle tension and improve circulation, while facials hydrate and restore skin health. Steam rooms and aromatherapy treatments reduce stress and support detoxification. Beyond physical benefits, spa visits enhance mood, boost confidence, and promote mindfulness. Even small rituals like a 20-minute soak or essential oil massage at home can recreate these benefits in daily life.A spa day offers physical and mental rejuvenation. Massages ease muscle tension and improve circulation, while facials hydrate and restore skin health. Steam rooms and aromatherapy treatments reduce stress and support detoxification. Beyond physical benefits, spa visits enhance mood, boost confidence, and promote mindfulness. Even small rituals like a 20-minute soak or essential oil massage at home can recreate these benefits in daily life.",
  },
  {
    slug: "nail-art-trends-2025",
    title: "Nail Art Trends for 2025 You’ll Want to Try",
    author: "Chloe KIM",
    authorImg: "https://randomuser.me/api/portraits/women/33.jpg",
    thumbnail:
      "https://images.pexels.com/photos/3997380/pexels-photo-3997380.jpeg", // nail polish closeup
    day: "22",
    month: "FEBRUARY",
    excerpt:
      "Minimalist designs, chrome finishes, and pastel palettes — these are the hottest nail trends of 2025.",
    content:
      "Nail art continues to evolve as a form of self-expression. This year, clean minimalist lines, abstract designs, and neutral tones paired with metallic accents dominate. Chrome nails and 3D embellishments are making waves, while soft pastel palettes remain timeless. For those who love bold statements, geometric patterns and negative space art are trending. Whether at the salon or DIY at home, 2025 is all about creativity and personalization in nail care.",
  },
  {
    slug: "spa-treatments-guide",
    title: "A Beginner’s Guide to Popular Spa Treatments",
    author: "Sophia LEE",
    authorImg: "https://randomuser.me/api/portraits/women/68.jpg",
    thumbnail:
      "https://images.pexels.com/photos/3738348/pexels-photo-3738348.jpeg", // massage treatment
    day: "10",
    month: "MARCH",
    excerpt:
      "Curious about spa treatments? Here’s what to expect from massages, facials, and body therapies.",
    content:
      "Spas offer a variety of treatments tailored to relaxation and wellness. Massages target muscle tension, improve blood flow, and promote deep relaxation. Facials hydrate and detoxify, leaving skin refreshed and glowing. Body scrubs and wraps exfoliate and nourish, while hydrotherapy treatments relieve joint pain and stiffness. Beginners should start with a classic Swedish massage or hydrating facial to ease into the spa experience.",
  },
  {
    slug: "eco-friendly-salons",
    title: "Why Eco-Friendly Nail Salons Are the Future",
    author: "Lina PARK",
    authorImg: "https://randomuser.me/api/portraits/women/45.jpg",
    thumbnail:
      "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg", // eco nail salon vibe
    day: "28",
    month: "APRIL",
    excerpt:
      "Non-toxic polishes, sustainable practices, and mindful services are transforming nail salons worldwide.",
    content:
      "Modern nail salons are embracing sustainability. Non-toxic, vegan polishes are now mainstream, reducing exposure to harmful chemicals. Salons are introducing eco-friendly practices like biodegradable tools, cruelty-free products, and water-saving systems. Beyond nails, many salons now offer calming spaces with aromatherapy, meditation music, and natural decor. Choosing an eco-conscious salon not only benefits your health but also supports a greener planet.",
  },
  {
    slug: "spa-vs-home",
    title: "Spa vs. Home Rituals: Which Is Right for You?",
    author: "Isabella WONG",
    authorImg: "https://randomuser.me/api/portraits/women/29.jpg",
    thumbnail:
      "https://images.pexels.com/photos/6621173/pexels-photo-6621173.jpeg", // home spa vibe
    day: "14",
    month: "MAY",
    excerpt:
      "Professional spa treatments or DIY home rituals — discover which suits your lifestyle best.",
    content:
      "Spa treatments provide expertise, advanced technology, and a calming environment, making them ideal for deep relaxation and targeted therapies. On the other hand, home rituals like facial masks, essential oil baths, and DIY manicures are budget-friendly and accessible. Combining both is the key — visit spas for special treatments while maintaining wellness through simple at-home practices. This balance ensures consistency in self-care.",
  },
  {
    slug: "bridal-nails",
    title: "Bridal Nail Designs for the Big Day",
    author: "Olivia MARTIN",
    authorImg: "https://randomuser.me/api/portraits/women/41.jpg",
    thumbnail:
      "https://images.pexels.com/photos/7764085/pexels-photo-7764085.jpeg", // bridal nails
    day: "30",
    month: "JUNE",
    excerpt:
      "Elegant, timeless, and picture-perfect nail designs every bride should consider.",
    content:
      "On your wedding day, nails are as important as the dress. Classic French tips remain popular for their elegance, while soft pinks and nudes create a timeless look. Modern brides are embracing glitter accents, pearl embellishments, and delicate floral nail art. The key is to choose a style that complements the dress and theme, while still feeling comfortable and personal. Schedule a trial manicure before the big day to ensure perfection.",
  },
];
