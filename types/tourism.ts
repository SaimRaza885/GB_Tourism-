export interface Review {
  user: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Tour {
  id: number;
  name: string;
  location: string;
  description: string;
  longDescription: string;
  price: number;
  duration: string;
  image: string;
  gallery: string[];
  videoUrl: string;
  rating: number;
  reviews: Review[];
  faqs: Faq[];
  whatsapp: string;
}

export interface Attraction {
  name: string;
  desc: string;
}

export interface Destination {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  tourCount: number;
  bestTime: string;
  altitude: string;
  attractions: Attraction[];
  tags: string[];
}
