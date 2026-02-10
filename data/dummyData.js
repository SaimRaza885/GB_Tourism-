export const destinations = [
  {
    id: "hunza",
    name: "Hunza Valley",
    description: "The land of longevity and ancient forts.",
    longDescription: "Hunza Valley is a mountainous valley in the Gilgit-Baltistan region of Pakistan. Known for its breathtaking scenery, ancient forts, and the legendary hospitality of its people, Hunza is often referred to as 'Heaven on Earth'. The valley is surrounded by several high peaks, including Rakaposhi, Hunza Peak, and Ladyfinger Peak. Karimabad (formerly Baltit) is the main town and a hub for tourists, offering vibrant bazaars and cultural experiences.",
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
    longDescription: "Skardu is the capital of Baltistan and the gateway to some of the highest peaks in the world, including K2. It is a land of dramatic landscapes, from the cold Katpana Desert to the turquoise Satpara Lake. Shigar Valley and Khaplu are nearby historical hubs with stunning palaces and mosques. Skardu is a trekking and mountaineering paradise, serving as the base for expeditions to the Baltoro Glacier.",
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
    longDescription: "Gilgit City is the administrative capital of Gilgit-Baltistan and a historical crossroads on the ancient Silk Road. It is a vibrant commercial center surrounded by majestic mountains. The city is famous for its polo matches, historic suspension bridges, and the nearby Naltar Valley. Gilgit serves as the central hub connecting all other valleys of the region.",
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
    longDescription: "Ghizer is a land of peace and natural beauty, often called the 'Land of Lakes'. The Gilgit River flows through it, creating lush green landscapes and perfect spots for fishing. Phander Valley in Ghizer is particularly famous for its spectacular Khalti Lake and vibrant autumn colors. It is less crowded than Hunza, offering a more serene experience for travelers.",
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
    longDescription: "Astore Valley is a large valley running from the south of Gilgit to the Deosai Plains. It is known for its lush green meadows, dense forests, and the magnificent Rama Lake. Astore provides one of the access routes to the base camps of Nanga Parbat, the 'Killer Mountain'. The region is a favorite for trekkers and nature enthusiasts seeking raw, un-commercialized beauty.",
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
  },
]

export const tours = [
  {
    id: 1,
    name: "Hunza Valley Explorer",
    location: "Hunza Valley",
    description:
      "Experience the breathtaking beauty of Hunza Valley with stunning views of Rakaposhi and ancient forts.",
    longDescription:
      "Embark on an unforgettable journey to the majestic Hunza Valley, often referred to as 'Heaven on Earth'. This immersive tour takes you through the heart of the Karakoram range. You will witness the sunrise over the golden peaks of Rakaposhi, explore the ancient Altit and Baltit Forts that stand as sentinels of history, and walk through the vibrant bazaars of Karimabad. Experience the legendary hospitality of the Hunza people and taste the delicious local cuisine, including the famous apricot cake. The tour also includes a visit to the sacred rocks of Hunza and the mesmerizing Attabad Lake.",
    price: 25000,
    duration: "3 Days",
    image: "/jj.jpg?height=600&width=800",
    gallery: [
      "/jj.jpg?height=600&width=800",
      "/b.jpg?height=600&width=800",
      "/rakaposhi.jpg?height=600&width=800",
      "/naltar.jpg?height=600&width=800",
      "/lake1.avif?height=600&width=800",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Attabad.jpg/800px-Attabad.jpg",
    ],
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
    rating: 4.9,
    reviews: [
      {
        user: "Sarah Jenkins",
        rating: 5,
        date: "October 15, 2025",
        comment: "Absolutely magical! The views were unreal and the guide was fantastic.",
      },
      {
        user: "Ali Raza",
        rating: 4,
        date: "September 2, 2025",
        comment: "Great trip, but the travel time was a bit long. Worth it for the destination though!",
      },
    ],
    faqs: [
      { question: "What is the best time to visit?", answer: "The best time to visit Hunza is from April to October. Cherry blossom season is in April, while autumn colors peak in October." },
      { question: "Is it family-friendly?", answer: "Yes, this tour is very suitable for families. The travel is comfortable and the activities are moderate." },
      { question: "What type of vehicle is used?", answer: "We use Toyota Prados or similar 4x4 vehicles for maximum comfort and safety on mountain roads." }
    ],
    whatsapp: "+923001234567",
  },
  {
    id: 2,
    name: "Fairy Meadows Trek",
    location: "Fairy Meadows",
    description: "Trek to the magical Fairy Meadows with stunning views of Nanga Parbat, the killer mountain.",
    longDescription:
      "Challenge yourself with a trek to the legendary Fairy Meadows, a lush green plateau situated at the foot of Nanga Parbat, the ninth highest mountain in the world. This adventure begins with a thrilling jeep ride from Raikot Bridge followed by a scenic hike. Spend your nights in cozy wooden cottages or camps under the starlit sky, with the imposing 'Killer Mountain' watching over you. This tour is perfect for nature lovers and adventure enthusiasts seeking solitude and raw beauty.",
    price: 35000,
    duration: "4 Days",
    image: "/b.jpg?height=600&width=800",
    gallery: [
      "/b.jpg?height=600&width=800",
      "/naltar.jpg?height=600&width=800",
      "/jj.jpg?height=600&width=800",
      "/rakaposhi.jpg?height=600&width=800",
      "/lake1.avif?height=600&width=800",
    ],
    videoUrl: "https://www.youtube.com/embed/H9-OOl_9r6I?si=nlb0NWdLYIcOM3Ih",
    rating: 4.8,
    reviews: [
      {
        user: "Mike T.",
        rating: 5,
        date: "August 20, 2025",
        comment: "A life-changing experience. The hike is tough but the destination is paradise.",
      },
    ],
    faqs: [
      { question: "How difficult is the trek?", answer: "The trek is moderate. It takes about 2-3 hours from Fairy Point. Horses are also available for those who cannot walk." },
      { question: "Is there electricity?", answer: "Electricity is available for limited hours via generators. We recommend bringing power banks." },
      { question: "Is camping gear provided?", answer: "Yes, we provide high-quality camping gear including sleeping bags and mats. You can also opt for wooden cottages." }
    ],
    whatsapp: "+923001234567",
  },
  {
    id: 3,
    name: "Attabad Lake Adventure",
    location: "Attabad Lake",
    description: "Enjoy boating and scenic views at the turquoise Attabad Lake formed by a landslide.",
    longDescription:
      "Discover the mesmerizing turquoise waters of Attabad Lake, a natural wonder created by a massive landslide in 2010. This tour offers a perfect blend of relaxation and adventure. Enjoy jet skiing, boating, and fishing in the crystal-clear waters. The surrounding mountains reflect beautifully in the lake, creating a photographer's paradise. We will also visit the nearby Passu Cones and the suspended Hussaini Bridge for a thrill.",
    price: 18000,
    duration: "2 Days",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Attabad.jpg/800px-Attabad.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Attabad.jpg/800px-Attabad.jpg",
      "/lake1.avif?height=600&width=800",
      "/jj.jpg?height=600&width=800",
      "/b.jpg?height=600&width=800",
      "/rakaposhi.jpg?height=600&width=800",
    ],
    videoUrl: "https://www.youtube.com/embed/H9-OOl_9r6I?si=nlb0NWdLYIcOM3Ih",
    rating: 4.7,
    reviews: [],
    faqs: [
      { question: "Can we swim in the lake?", answer: "The water is very cold and deep. Swimming is generally not recommended without proper safety gear and supervision." },
      { question: "Are life jackets provided?", answer: "Yes, safety is our priority. Life jackets are mandatory for all water activities." },
      { question: "Is there mobile network coverage?", answer: "Yes, SCOM network works well in this area. Other networks might have limited connectivity." }
    ],
    whatsapp: "+923001234567",
  },
  {
    id: 4,
    name: "Naltar Valley Tour",
    location: "Naltar Valley",
    description: "Visit the colorful Naltar Lakes surrounded by pine forests and snow-capped peaks.",
    longDescription:
      "Escape to the secluded Naltar Valley, famous for its colorful lakes, dense pine forests, and ski resort. This valley is a hidden gem in Gilgit-Baltistan. You will visit the three famous lakes of Naltar: Blue Lake, Strangi Lake, and Bodroko Lake. The jeep track to Naltar is an adventure in itself. In winter, it transforms into a skiing haven, while summer offers lush green meadows and blooming flowers.",
    price: 22000,
    duration: "2 Days",
    image: "/naltar.jpg?height=600&width=800",
    gallery: [
      "/naltar.jpg?height=600&width=800",
      "/b.jpg?height=600&width=800",
      "/jj.jpg?height=600&width=800",
      "/lake1.avif?height=600&width=800",
    ],
    videoUrl: "https://www.youtube.com/embed/H9-OOl_9r6I?si=nlb0NWdLYIcOM3Ih",
    rating: 4.6,
    reviews: [
      {
        user: "Fatima K.",
        rating: 5,
        date: "July 10, 2025",
        comment: "The colors of the lakes are unbelievable. Photos don't do it justice!",
      },
    ],
    faqs: [
      { question: "Is the road to Naltar safe?", answer: "The road is a jeep track and can be bumpy, but our expert local drivers ensure a safe journey." },
      { question: "Can we ski there?", answer: "Yes, specifically in winter (January-February). We can arrange ski equipment upon request." },
      { question: "Are there hotels in Naltar?", answer: "There are limited guest houses and a PAF resort. Booking in advance is recommended." }
    ],
    whatsapp: "+923001234567",
  },
  {
    id: 5,
    name: "Khunjerab Pass Expedition",
    location: "Khunjerab Pass",
    description: "Journey to the highest paved international border crossing in the world at 4,693m.",
    longDescription:
      "Travel to the roof of the world at Khunjerab Pass, the Pakistan-China border. At 4,693 meters, it is the highest paved international border crossing in the world. The journey along the Karakoram Highway is spectacular, passing through the Khunjerab National Park where you might spot Ibex, Marco Polo sheep, or even a Snow Leopard. Stand at the majestic border gate and experience the thrill of high altitude.",
    price: 45000,
    duration: "5 Days",
    image: "/lake1.avif?height=600&width=800",
    gallery: [
      "/lake1.avif?height=600&width=800",
      "/jj.jpg?height=600&width=800",
      "/rakaposhi.jpg?height=600&width=800",
      "/b.jpg?height=600&width=800",
      "/naltar.jpg?height=600&width=800",
    ],
    videoUrl: "https://www.youtube.com/embed/H9-OOl_9r6I?si=nlb0NWdLYIcOM3Ih", rating: 4.9,
    reviews: [],
    faqs: [
      { question: "Do we need a visa to visit the border?", answer: "No visa is required to visit the border gate from the Pakistan side, but you cannot cross into China without one." },
      { question: "Is altitude sickness a concern?", answer: "Since we ascend to 4,700m, some people may feel short of breath. We utilize a gradual ascent to help acclimatization." },
      { question: "Is it open all year?", answer: "The pass is usually closed for traffic from November to April due to heavy snow." }
    ],
    whatsapp: "+923001234567",
  },
  {
    id: 6,
    name: "Deosai Plains Safari",
    location: "Deosai National Park",
    description: "Explore the second highest plateau in the world, home to Himalayan brown bears.",
    longDescription:
      "Venture into the mystical Deosai Plains, known as the 'Land of Giants'. This is the second-highest plateau in the world, covered in lush grass and wildflowers in summer. It is a sanctuary for the Himalayan Brown Bear. Camp by the serene Sheosar Lake, watch the golden marmots play, and enjoy the absolute silence of this high-altitude wilderness. The starry nights here are unparalleled.",
    price: 40000,
    duration: "4 Days",
    image: "/rakaposhi.jpg?height=600&width=800",
    gallery: [
      "/rakaposhi.jpg?height=600&width=800",
      "/b.jpg?height=600&width=800",
      "/jj.jpg?height=600&width=800",
      "/lake1.avif?height=600&width=800",
      "/naltar.jpg?height=600&width=800",
    ],
    videoUrl: "https://www.youtube.com/embed/H9-OOl_9r6I?si=nlb0NWdLYIcOM3Ih", rating: 4.8,
    reviews: [],
    faqs: [
      { question: "Will we see bears?", answer: "Deosai is a bear sanctuary, but sightings are not guaranteed as they are wild animals. Best chances are early morning or evening." },
      { question: "How cold does it get?", answer: "It can get very cold at night, even in summer. Temperatures can drop near freezing. Warm clothing is essential." },
      { question: "Are there restrooms?", answer: "Facilities are very basic in Deosai. We use camping toilets or designated areas." }
    ],
    whatsapp: "+923001234567",
  },
]

export const packages = [
  {
    id: 1,
    name: "Complete Gilgit-Baltistan Package",
    location: "Multiple Locations",
    description:
      "All-inclusive 10-day tour covering Hunza, Skardu, Fairy Meadows, and Deosai with accommodation and meals.",
    longDescription:
      "The ultimate Gilgit-Baltistan experience! This comprehensive 10-day package covers all the major highlights of the region. From the historical forts of Hunza to the cold desert of Skardu, and from the fairy-tale meadows of Nanga Parbat to the vast plains of Deosai. We take care of everything - luxury transport, top-tier accommodation, all meals, and guided tours. Just pack your bags and get ready for the trip of a lifetime.",
    price: 150000,
    duration: "10 Days",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Attabad.jpg/800px-Attabad.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Attabad.jpg/800px-Attabad.jpg",
      "/jj.jpg?height=600&width=800",
      "/rakaposhi.jpg?height=600&width=800",
    ],
    videoUrl: "https://www.youtube.com/embed/H9-OOl_9r6I?si=nlb0NWdLYIcOM3Ih",
    rating: 5.0,
    reviews: [
      {
        user: "John D.",
        rating: 5,
        date: "June 2025",
        comment: "Flawless execution. We saw everything we wanted to see and more.",
      }
    ],
    whatsapp: "+923001234567",
    includes: ["Accommodation", "Meals", "Transport", "Guide", "Jeep Rentals", "Entry Tickets"],
    itinerary: [
      { "day": 1, "title": "Arrival in Gilgit", "desc": "Pick up from airport, transfer to hotel, rest." },
      { "day": 2, "title": "Move to Hunza", "desc": "Drive to Hunza, stop at Rakaposhi view point." },
      { "day": 3, "title": "Hunza Exploration", "desc": "Visit Forts and Eagles Nest." },
      { "day": 4, "title": "Attabad Lake", "desc": "Boating and drive to Passu." },
      { "day": 5, "title": "Travel to Skardu", "desc": "Long drive to Skardu via Juglot." },
      { "day": 6, "title": "Shangrila Resort", "desc": "Visit Lower Kachura Lake." },
      { "day": 7, "title": "Deosai Plains", "desc": "Day trip to Deosai." },
      { "day": 8, "title": "Shigar Fort", "desc": "Visit Shigar fort and cold desert." },
      { "day": 9, "title": "Return to Gilgit", "desc": "Drive back to Gilgit." },
      { "day": 10, "title": "Departure", "desc": "Drop off at airport." }
    ],
    faqs: [
      { question: "Are flights included?", answer: "Flights are not included in the base price but can be arranged upon request." },
      { question: "What kind of hotels?", answer: "We provide 3-4 star standard hotels. Luxury upgrades are available." },
      { question: "Is it safe for solo travelers?", answer: "Yes, absolutely. Our guides are professionals and the region is very safe." }
    ]
  },
  {
    id: 2,
    name: "Honeymoon Special Package",
    location: "Hunza & Skardu",
    description: "Romantic 7-day getaway with luxury hotels, private transfers, and candlelight dinners.",
    longDescription:
      "Celebrate your love amidst the mountains. This package is specially curated for couples, focusing on privacy, luxury, and romance. Stay in the best honeymoon suites, enjoy private jeep rides, and dine under the stars. We handle all the logistics so you can focus on each other. Includes a special photography session at a scenic location.",
    price: 120000,
    duration: "7 Days",
    image: "/hotel.jpg?height=600&width=800",
    gallery: [
      "/hotel.jpg?height=600&width=800",
      "/b.jpg?height=600&width=800",
      "/naltar.jpg?height=600&width=800",
    ],
    videoUrl: "https://www.youtube.com/embed/H9-OOl_9r6I?si=nlb0NWdLYIcOM3Ih",
    rating: 4.9,
    reviews: [],
    whatsapp: "+923001234567",
    includes: ["Luxury Stay", "Private Car", "Meals", "Activities", "Candlelight Dinner", "Photography"],
    itinerary: [
      { "day": 1, "title": "Welcome", "desc": "VIP pick up and check-in to luxury suite." },
      { "day": 2, "title": "Hunza", "desc": "Relaxed tour of Hunza." },
      { "day": 3, "title": "Private Boat Ride", "desc": "Attabad Lake private boat." },
      { "day": 4, "title": "Leisure", "desc": "Free day for shopping/relaxing." },
      { "day": 5, "title": "Skardu", "desc": "Fly/Drive to Skardu." },
      { "day": 6, "title": "Shangrila", "desc": "Romantic dinner at Shangrila." },
      { "day": 7, "title": "Departure", "desc": "Gift hamper and drop off." }
    ],
    faqs: [
      { question: "Can we customize the itinerary?", answer: "Yes, this package is fully customizable to suit your pace and preferences." },
      { question: "Is a photographer included?", answer: "Yes, a professional photographer for a 2-hour couple shoot is included." },
      { question: "What meals are included?", answer: "Breakfast and dinner are included. We can also arrange special lunch dates." }
    ]
  },
  {
    id: 3,
    name: "Adventure Trekking Package",
    location: "K2 Base Camp",
    description: "Epic 14-day trek to K2 Base Camp for experienced trekkers seeking ultimate adventure.",
    longDescription:
      "For the brave and the bold. Trek to the base of the Savage Mountain, K2. This is a rigorous 14-day expedition involving high-altitude trekking, camping on glaciers, and crossing high passes. You will tread on the Baltoro Glacier, see the Concordia amphitheater of peaks, and stand at the foot of the world's second-highest mountain. Includes professional high-altitude guides and full porter support.",
    price: 250000,
    duration: "14 Days",
    image: "/b.jpg?height=600&width=800",
    gallery: [
      "/b.jpg?height=600&width=800",
      "/lake1.avif?height=600&width=800",
      "/jj.jpg?height=600&width=800",
    ],
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
    rating: 4.8,
    reviews: [],
    whatsapp: "+923001234567",
    includes: ["Camping Gear", "Porters", "Permits", "Meals", "Oxygen Support", "Glacier Guide"],
    itinerary: [
      { "day": 1, "title": "Skardu", "desc": "Briefing at Ministry of Tourism." },
      { "day": 2, "title": "Askole", "desc": "Jeep drive to Askole." },
      { "day": 3, "title": "Jhola", "desc": "Trek start." },
      { "day": 4, "title": "Paiyu", "desc": "Trek to Paiyu." },
      { "day": 5, "title": "Rest Day", "desc": "Acclimatization." },
      { "day": 6, "title": "Urdukas", "desc": "Trek on Baltoro Glacier." },
      { "day": 7, "title": "Goro II", "desc": "Camp on glacier." },
      { "day": 8, "title": "Concordia", "desc": "Arrival at Concordia." },
      { "day": 9, "title": "K2 Base Camp", "desc": "Day trip to Base Camp." },
      { "day": 10, "title": "Return", "desc": "Begin return journey." },
      { "day": 14, "title": "Skardu", "desc": "Arrival back in Skardu." }
    ],
    faqs: [
      { question: "What fitness level is required?", answer: "High fitness level is required. Previous trekking experience is highly recommended." },
      { question: "What about altitude sickness?", answer: "We have rest days for acclimatization and carry emergency oxygen." },
      { question: "Is insurance required?", answer: "Yes, travel insurance covering helicopter rescue is mandatory." }
    ]
  },
]

export const cars = [
  {
    id: 1,
    name: "Toyota Land Cruiser SUV",
    type: "4x4 SUV",
    description: "Perfect for rough mountain terrain with AC and comfortable seating for 7 passengers.",
    pricePerDay: 15000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAV3tlpXgUyJaSUnliILyWBd8O8ZHV2FecWA&s",
    seats: 7,
    whatsapp: "+923001234567",
  },
  {
    id: 2,
    name: "Toyota Corolla",
    type: "Sedan",
    description: "Economical sedan suitable for paved roads with AC and comfortable city travel.",
    pricePerDay: 6000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTk7up4ByTv5RJUuxCpmID8Xig1N_zteHakg&s",
    seats: 4,
    whatsapp: "+923001234567",
  },
  {
    id: 3,
    name: "Toyota Hiace",
    type: "Van",
    description: "Spacious van ideal for group travel with 12 seats and luggage space.",
    pricePerDay: 12000,
    image: "https://cache3.pakwheels.com/system/car_generation_pictures/3877/original/front_end.jpg?1451548930",
    seats: 12,
    whatsapp: "+923001234567",
  },
  {
    id: 4,
    name: "Suzuki Mehran",
    type: "Compact",
    description: "Budget-friendly compact car for short trips around the city.",
    pricePerDay: 3500,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU2Pynv158eb6i3-gsouhPvtEf6lE2X9laxw&s",
    seats: 4,
    whatsapp: "+923001234567",
  },
]

export const services = [
  {
    id: 1,
    title: "All You Need",
    description: "From flights, stays, to sights, just count on our complete products.",
    icon: "briefcase",
  },
  {
    id: 2,
    title: "Flexible Booking",
    description: "From flights, stays, to sights, just count on our complete products.",
    icon: "calendar",
  },
  {
    id: 3,
    title: "Secure Payment",
    description: "From flights, stays, to sights, just count on our complete products.",
    icon: "shield",
  },
]

export const testimonials = [
  {
    id: 1,
    name: "Ahmed Khan",
    avatar: "/Ellipse.png?height=60&width=60",
    rating: 5,
    text: "I love Gilgit Tourism, this is the best place to buy tickets and help you find your dream holiday in the mountains!",
  },
  {
    id: 2,
    name: "Sarah Williams",
    avatar: "/Ellipse.png?height=60&width=60",
    rating: 5,
    text: "Amazing experience! The Hunza Valley tour was absolutely breathtaking. Highly recommend their services.",
  },
  {
    id: 3,
    name: "Irfan Rahmat",
    avatar: "/Ellipse.png?height=60&width=60",
    rating: 5,
    text: "Best travel agency for Gilgit-Baltistan. Professional guides and well-organized trips!",
  },
]

export const stats = [
  { value: "200+", label: "Holiday Packages" },
  { value: "450", label: "Taxi/Cabs" },
  { value: "10", label: "Premium Airlines" },
  { value: "12k+", label: "Happy Customers" },
]

export const features = [
  {
    id: 1,
    title: "Select many locations",
    description: "Choose your favorite location",
    icon: "location",
    color: "primary",
  },
  {
    id: 2,
    title: "Schedule your trip",
    description: "Set the date you prefer",
    icon: "calendar",
    color: "secondary",
  },
  {
    id: 3,
    title: "Big discounts",
    description: "Get discounts for every service",
    icon: "discount",
    color: "accent",
  },
]
export const hotels = [
  {
    id: 1,
    name: "Serena Hotel Gilgit",
    location: "Gilgit",
    price: 15000,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    description: "Luxury stay in the heart of Gilgit with stunning mountain views.",
    longDescription: "Nestled in the foothills of the Karakoram mountain range, Gilgit Serena Hotel stands on six acres of land. The hotel offers a breathtaking view of Gilgit town, the surrounding mountains, and the junction of the Gilgit and Hunza Rivers. Experience unparalleled luxury and traditional hospitality in our elegantly appointed rooms and suites.",
    amenities: ["Free WiFi", "Mountain View", "Restaurant", "Parking", "Fitness Center", "Meeting Rooms"],
    type: "Luxury",
    rooms: [
      { type: "Deluxe Room", price: 15000, capacity: "2 Adults", description: "Elegant room with mountain views and modern amenities." },
      { type: "Executive Suite", price: 25000, capacity: "2 Adults, 1 Child", description: "Spacious suite with a separate living area and premium views." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2050&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 2,
    name: "Hunza Serena Inn",
    location: "Hunza Valley",
    price: 18000,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2050&auto=format&fit=crop",
    description: "Experience the majestic views of Rakaposhi and Ultar Sar from your balcony.",
    longDescription: "Located in the ancient town of Karimabad, Hunza Serena Inn is spread over six acres of landscaped gardens, offering a stunning views of the Hunza Valley and its surrounding peaks. The hotel is designed in the style of a traditional fort and offers guests a unique blend of comfort and cultural immersion.",
    amenities: ["Free WiFi", "Garden", "Restaurant", "Balcony", "Guided Tours", "Cultural Nights"],
    type: "Luxury",
    rooms: [
      { type: "Standard Room", price: 18000, capacity: "2 Adults", description: "Comfortable room with traditional decor and valley views." },
      { type: "Luxury Suite", price: 30000, capacity: "2 Adults, 2 Children", description: "The ultimate luxury experience with panoramic views of Rakaposhi." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2050&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 3,
    name: "Luxus Hunza Attabad Lake",
    location: "Attabad Lake",
    price: 35000,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
    description: "Premium lake-view suites overlooking the turquoise waters of Attabad Lake.",
    longDescription: "Luxus Hunza is a one-of-a-kind resort built on the shores of the world-famous Attabad Lake. Each suite offers an unobstructed view of the turquoise water and the rugged mountains of the Karakoram range. Modern luxury meets natural wonder in this exclusive mountain getaway.",
    amenities: ["Boating", "Restaurant", "WiFi", "Modern Decor", "private deck", "Jet Skiing"],
    type: "Resort",
    rooms: [
      { type: "Lake View Suite", price: 35000, capacity: "2 Adults", description: "Stunning suite with floor-to-ceiling windows and a private deck overlooking the lake." },
      { type: "Presidential Villa", price: 65000, capacity: "4 Adults", description: "Two-bedroom villa with a private lounge and exclusive lake access." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2050&auto=format&fit=crop"
    ]
  },
  {
    id: 4,
    name: "Fairy Meadows Cottages",
    location: "Fairy Meadows",
    price: 8000,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop",
    description: "Traditional log cabins at the base of Nanga Parbat.",
    longDescription: "Experience the true essence of mountain living at the Fairy Meadows Cottages. Located at the base of the mighty Nanga Parbat, our traditional log cabins offer a cozy retreat after a day of hiking and exploration. Enjoy the crackling bonfire and the starlit sky in one of the world's most beautiful locations.",
    amenities: ["Bonfire", "Traditional Food", "Hiking Access", "Local Guides", "Camping Gear"],
    type: "Heritage",
    rooms: [
      { type: "Wooden Cabin", price: 8000, capacity: "3 Adults", description: "Traditional wooden cabin with basic amenities and stunning views of Nanga Parbat." },
      { type: "Family Suite", price: 12000, capacity: "5 Adults", description: "Larger cabin suitable for families or groups of friends." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 5,
    name: "The Eagle's Nest",
    location: "Duikar, Hunza",
    price: 12000,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
    description: "Situated at the highest point in Hunza Valley, offering breathtaking sunrise views.",
    longDescription: "The Eagle's Nest is famous for its panoramic views of the Hunza Valley and several 7,000m+ peaks. Located in Duikar, the highest village in Hunza, the hotel is the perfect spot for photographers and nature lovers wishing to witness the magic of sunrise and sunset over the Karakoram.",
    amenities: ["Panoramic View", "WiFi", "Café", "Library", "Gift Shop"],
    type: "Standard",
    rooms: [
      { type: "Standard Room", price: 12000, capacity: "2 Adults", description: "Comfortable room with amazing views of the valley." },
      { type: "Deluxe Family Room", price: 18000, capacity: "4 Adults", description: "Spacious room designed for families with children." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 6,
    name: "Winter Glamp Skardu",
    location: "Skardu",
    price: 25000,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop",
    description: "Luxury pods in the cold desert of Skardu, perfect for stargazing.",
    longDescription: "Winter Glamp offers a unique glamping experience in the heart of the Katpana Desert, also known as the Cold Desert of Skardu. Our luxury pods are designed for comfort and stargazing, offering a warm and cozy retreat in a rugged landscape.",
    amenities: ["Heated Pods", "Stargazing", "WiFi", "Desert Safaris", "Bonfire"],
    type: "Resort",
    rooms: [
      { type: "Glamping Pod", price: 25000, capacity: "2 Adults", description: "Luxury pod with a clear roof for stargazing and modern interior." },
      { type: "Family Pod", price: 35000, capacity: "4 Adults", description: "Larger pod with additional sleeping space and a small lounge area." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop"
    ]
  },
]

export const guides = [
  {
    id: 1,
    name: "Irfan Ali",
    specialization: "Mountain Trekking",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    experience: "10+ Years",
    rating: 4.9,
    languages: ["English", "Urdu", "Burushaski"],
    areasCovered: ["Hunza", "Skardu", "Gojal"],
    description: "Irfan is a seasoned trekker with over a decade of experience leading expeditions across the Karakoram range. His deep knowledge of the terrain and commitment to safety make him one of the most sought-after guides in the region.",
    skills: ["First Aid", "Rock Climbing", "Navigation", "Weather Forecasting"],
    gallery: [
      "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 2,
    name: "Zahid Hunzai",
    specialization: "Cultural Photography",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    experience: "8 Years",
    rating: 4.8,
    languages: ["English", "Urdu", "Shina"],
    areasCovered: ["Gilgit", "Ghizer", "Hunza"],
    description: "Zahid is not just a guide but a visual storyteller. He specializes in cultural and landscape photography, helping tourists capture the soul of Gilgit-Baltistan through their lenses.",
    skills: ["Portrait Photography", "Post-Processing", "Historical Knowledge", "Storytelling"],
    gallery: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2050&auto=format&fit=crop"
    ]
  },
  {
    id: 3,
    name: "Maria Khan",
    specialization: "Local History & Flora",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    experience: "5 Years",
    rating: 4.7,
    languages: ["English", "Urdu", "Khowar"],
    areasCovered: ["Phander", "Gupis", "Astore"],
    description: "Maria is passionate about the unique biodiversity and history of the northern areas. Her tours are educational and immersive, focusing on the hidden gems and local legends.",
    skills: ["Botanical Identification", "Historical Research", "Public Speaking", "Child-Friendly Tours"],
    gallery: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 4,
    name: "Shahid Karim",
    specialization: "Off-Road Expeditions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    experience: "12+ Years",
    rating: 4.9,
    languages: ["English", "Urdu", "Wakhi"],
    areasCovered: ["Chapursan", "Misgar", "Shimshal"],
    description: "Shahid is an expert in off-road driving and remote valley exploration. He has a knack for finding the most isolated and beautiful spots that few tourists ever get to see.",
    skills: ["4x4 Driving", "Vehicle Repair", "Camping Logistics", "Local Diplomacy"],
    gallery: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop"
    ]
  },
]


