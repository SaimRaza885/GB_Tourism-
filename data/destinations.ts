import { Destination, Attraction } from "@/types";


export const destinations: Destination[] = [
  {
    id: "hunza",
    name: "Hunza Valley",
    description: "The land of longevity and ancient forts.",
    longDescription: "Hunza Valley is a mountainous valley in the Gilgit-Baltistan region of Pakistan...",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
    tourCount: 12,
    bestTime: "April to October",
    altitude: "2,438m",
    attractions: [
      { name: "Baltit Fort", desc: "A 700-year-old fort inspired by Tibetan architecture." },
      { name: "Attabad Lake", desc: "A stunning turquoise lake formed by a massive landslide." },
      { name: "Eagle's Nest", desc: "The best viewpoint for sunrise and sunset over the valley." },
      { name: "Passu Cones", desc: "The iconic jagged peaks along the Karakoram Highway." }
    ],
    tags: ["Culture", "History", "Photography", "Adventure"]
  },
  {
    id: "skardu",
    name: "Skardu",
    description: "Gateway to the world's highest peaks.",
    longDescription: "Skardu is the capital of Baltistan and the gateway to some of the highest peaks...",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    tourCount: 15,
    bestTime: "June to September",
    altitude: "2,228m",
    attractions: [
      { name: "Deosai Plains", desc: "The second-highest plateau in the world, a bear sanctuary." },
      { name: "Shangrila Resort", desc: "Famous for the heart-shaped Lower Kachura Lake." },
      { name: "Katpana Desert", desc: "One of the highest cold deserts in the world." },
      { name: "Shigar Fort", desc: "A beautifully restored 17th-century palace." }
    ],
    tags: ["Mountaineering", "Trekking", "Lakes", "Desert"]
  },
  {
    id: "gilgit",
    name: "Gilgit City",
    description: "The historic hub of the northern areas.",
    longDescription: "Gilgit City is the administrative capital of Gilgit-Baltistan...",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    tourCount: 8,
    bestTime: "March to November",
    altitude: "1,500m",
    attractions: [
      { name: "Naltar Valley", desc: "Home to colorful lakes and a stunning ski resort." },
      { name: "Kargah Buddha", desc: "A 7th-century rock-carved Buddha image." },
      { name: "Gilgit River", desc: "Perfect for riverside evening walks and trout fishing." },
      { name: "Dannyore Suspension Bridge", desc: "An architectural marvel over the Gilgit River." }
    ],
    tags: ["Business", "Transit", "Silk Road", "Polo"]
  },
  {
    id: "ghizer",
    name: "Ghizer Valley",
    description: "Crystal clear rivers and colorful lakes.",
    longDescription: "Ghizer is a land of peace and natural beauty...",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop",
    tourCount: 6,
    bestTime: "May to October",
    altitude: "2,000m - 3,000m",
    attractions: [
      { name: "Phander Lake", desc: "One of the most serene and beautiful lakes in Pakistan." },
      { name: "Khalti Lake", desc: "Deep blue lake famous for trout fishing." },
      { name: "Ishkoman Valley", desc: "A transition point between Gilgit and Chitral." },
      { name: "Gupis Fort", desc: "A historical site overlooking the valley." }
    ],
    tags: ["Fishing", "Lakes", "Relaxation", "Hidden Gem"]
  },
  {
    id: "astore",
    name: "Astore & Rama",
    description: "Lush meadows at the base of Nanga Parbat.",
    longDescription: "Astore Valley is a large valley running from the south of Gilgit...",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop",
    tourCount: 5,
    bestTime: "June to September",
    altitude: "2,600m - 3,500m",
    attractions: [
      { name: "Rama Meadows", desc: "Lush green plateau surrounded by pine forests." },
      { name: "Rama Lake", desc: "A crystal clear lake reflecting Nanga Parbat." },
      { name: "Tarashing Valley", desc: "The gateway to the Rupal Face of Nanga Parbat." },
      { name: "Minimarg", desc: "A stunning high-altitude meadow near the line of control." }
    ],
    tags: ["Trekking", "Wilderness", "Nanga Parbat", "Forests"]
  }
];
