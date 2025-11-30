const products = [
  {
    id: 0,
    mainSrc: "/src/assets/images/products/3.png",
    src: ["/src/assets/images/products/3.png","/src/assets/images/products/3.png","/src/assets/images/products/3.png"],
    title: "Classic Graphic Tee",
    rating: 4.5,
    cost: 220,
    discount: 40,
    description: "Soft breathable tee perfect for everyday casual wear.",
    colors: ["#00C12B", "#063AF5", "#fff"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    gender: "Men",
    type: "T-shirt-1",
    dressStyle: "Casual"
  },
  {
    id: 1,
    mainSrc: "/src/assets/images/products/4.png",
    src: ["/src/assets/images/products/4.png","/src/assets/images/products/4.png","/src/assets/images/products/4.png"],
    title: "Oversized Cotton Tee",
    rating: 4.1,
    cost: 150,
    discount: 0,
    description: "Loose-fit T-shirt made from premium cotton fabric.",
    colors: ["#F50606", "#000", "#F5DD06"],
    sizes: ["Medium", "Large", "X-Large"],
    gender: "Women",
    type: "T-shirt-2",
    dressStyle: "Street"
  },
  {
    id: 2,
    mainSrc: "/src/assets/images/products/7.png",
    src: ["/src/assets/images/products/7.png","/src/assets/images/products/7.png","/src/assets/images/products/7.png"],
    title: "Essential Sports Shorts",
    rating: 4.7,
    cost: 190,
    discount: 20,
    description: "Lightweight breathable shorts designed for training.",
    colors: ["#F57906", "#000"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    gender: "Men",
    type: "Shorts-1",
    dressStyle: "Sports"
  },
  {
    id: 3,
    mainSrc: "/src/assets/images/products/9.png",
    src: ["/src/assets/images/products/9.png","/src/assets/images/products/9.png","/src/assets/images/products/9.png"],
    title: "Classic Jogger Pants",
    rating: 4.3,
    cost: 260,
    discount: 0,
    description: "Comfortable joggers ideal for daily use.",
    colors: ["#000", "#063AF5"],
    sizes: ["Medium", "Large", "X-Large", "2X-Large"],
    gender: "Men",
    type: "Pants-1",
    dressStyle: "Casual"
  },
  {
    id: 4,
    mainSrc: "/src/assets/images/products/11.png",
    src: ["/src/assets/images/products/11.png","/src/assets/images/products/11.png","/src/assets/images/products/11.png"],
    title: "Urban Oversized Hoodie",
    rating: 4.8,
    cost: 340,
    discount: 15,
    description: "Warm fleece hoodie with a modern oversized cut.",
    colors: ["#7D06F5", "#F506A4", "#000"],
    sizes: ["Large", "X-Large", "2X-Large"],
    gender: "Women",
    type: "Hoodie-1",
    dressStyle: "Street"
  },
  {
    id: 5,
    mainSrc: "/src/assets/images/products/12.png",
    src: ["/src/assets/images/products/12.png","/src/assets/images/products/12.png","/src/assets/images/products/12.png"],
    title: "Premium Zip Hoodie",
    rating: 4.2,
    cost: 310,
    discount: 0,
    description: "Durable zip hoodie perfect for cold weather.",
    colors: ["#fff", "#000"],
    sizes: ["Medium", "Large", "X-Large"],
    gender: "Men",
    type: "Hoodie-2",
    dressStyle: "Casual"
  },
  {
    id: 6,
    mainSrc: "/src/assets/images/products/13.png",
    src: ["/src/assets/images/products/13.png","/src/assets/images/products/13.png","/src/assets/images/products/13.png"],
    title: "Slim Fit Jeans",
    rating: 4.9,
    cost: 420,
    discount: 25,
    description: "Premium denim with a clean slim silhouette.",
    colors: ["#000"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    gender: "Men",
    type: "Jeans-1",
    dressStyle: "Casual"
  },
  {
    id: 7,
    mainSrc: "/src/assets/images/products/1.png",
    src: ["/src/assets/images/products/1.png","/src/assets/images/products/1.png","/src/assets/images/products/1.png"],
    title: "Summer Tank Top",
    rating: 4.0,
    cost: 90,
    discount: 0,
    description: "Light tank top perfect for hot weather.",
    colors: ["#06CAF5", "#F506A4"],
    sizes: ["Small", "Medium"],
    gender: "Women",
    type: "Tank-1",
    dressStyle: "Gym"
  },
  {
    id: 8,
    mainSrc: "/src/assets/images/products/14.png",
    src: ["/src/assets/images/products/14.png","/src/assets/images/products/14.png","/src/assets/images/products/14.png"],
    title: "Soft Fleece Hoodie",
    rating: 4.6,
    cost: 380,
    discount: 0,
    description: "Extremely soft fleece hoodie ideal for winter.",
    colors: ["#063AF5", "#000"],
    sizes: ["Large", "X-Large", "2X-Large"],
    gender: "Men",
    type: "Hoodie-3",
    dressStyle: "Casual"
  },
  {
    id: 9,
    mainSrc: "/src/assets/images/products/2.png",
    src: ["/src/assets/images/products/2.png","/src/assets/images/products/2.png","/src/assets/images/products/2.png"],
    title: "Premium Polo Shirt",
    rating: 4.4,
    cost: 210,
    discount: 10,
    description: "Elegantly designed polo for everyday business casual outfits.",
    colors: ["#F5DD06", "#000"],
    sizes: ["Medium", "Large", "X-Large"],
    gender: "Men",
    type: "T-shirt-3",
    dressStyle: "Formal"
  },
  {
    id: 10,
    mainSrc: "/src/assets/images/products/10.png",
    src: [
      "/src/assets/images/products/10.png",
      "/src/assets/images/products/11.png",
      "/src/assets/images/products/12.png"
    ],
    title: "Urban Fit Heather Tee",
    rating: 4.5,
    cost: 260,
    discount: 40,
    description: "Soft touch heather tee for daily comfort and style.",
    colors: ["#000", "#063AF5"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    gender: "Men",
    type: "T-shirt-1",
    dressStyle: "Casual"
  },
  {
    id: 11,
    mainSrc: "/src/assets/images/products/11.png",
    src: [
      "/src/assets/images/products/11.png",
      "/src/assets/images/products/12.png",
      "/src/assets/images/products/13.png"
    ],
    title: "Essential Cotton Tee",
    rating: 3.8,
    cost: 190,
    discount: 0,
    description: "Lightweight cotton tee designed for everyday wear.",
    colors: ["#F5DD06"],
    sizes: ["Medium", "Large"],
    gender: "Women",
    type: "T-shirt-2",
    dressStyle: "Casual"
  },
  {
    id: 12,
    mainSrc: "/src/assets/images/products/12.png",
    src: [
      "/src/assets/images/products/12.png",
      "/src/assets/images/products/13.png",
      "/src/assets/images/products/14.png"
    ],
    title: "Premium Oversize Tee",
    rating: 4.6,
    cost: 310,
    discount: 25,
    description: "Oversized silhouette crafted from premium breathable fabric.",
    colors: ["#7D06F5", "#fff"],
    sizes: ["Large", "X-Large"],
    gender: "Men",
    type: "T-shirt-3",
    dressStyle: "Casual"
  },
  {
    id: 13,
    mainSrc: "/src/assets/images/products/13.png",
    src: [
      "/src/assets/images/products/13.png",
      "/src/assets/images/products/14.png",
      "/src/assets/images/products/15.png"
    ],
    title: "SportTech Performance Tee",
    rating: 4.0,
    cost: 270,
    discount: 0,
    description: "Moisture-wicking performance tee ideal for training.",
    colors: ["#F50606", "#000"],
    sizes: ["Small", "Medium", "Large"],
    gender: "Men",
    type: "T-shirt-4",
    dressStyle: "Sport"
  },
  {
    id: 14,
    mainSrc: "/src/assets/images/products/14.png",
    src: [
      "/src/assets/images/products/14.png",
      "/src/assets/images/products/15.png",
      "/src/assets/images/products/0.png"
    ],
    title: "Streetwear Bold Tee",
    rating: 4.2,
    cost: 220,
    discount: 10,
    description: "Bold printed tee for confident streetwear looks.",
    colors: ["#F506A4", "#000", "#fff"],
    sizes: ["Medium", "Large", "X-Large"],
    gender: "Women",
    type: "T-shirt-5",
    dressStyle: "Streetwear"
  },
  {
    id: 15,
    mainSrc: "/src/assets/images/products/15.png",
    src: [
      "/src/assets/images/products/15.png",
      "/src/assets/images/products/0.png",
      "/src/assets/images/products/1.png"
    ],
    title: "Minimal Essential Tee",
    rating: 3.9,
    cost: 200,
    discount: 0,
    description: "Clean and minimal tee that pairs with any outfit.",
    colors: ["#31344F", "#fff"],
    sizes: ["Small", "Medium"],
    gender: "Men",
    type: "T-shirt-1",
    dressStyle: "Minimalist"
  },
  {
    id: 16,
    mainSrc: "/src/assets/images/products/0.png",
    src: [
      "/src/assets/images/products/0.png",
      "/src/assets/images/products/1.png",
      "/src/assets/images/products/2.png"
    ],
    title: "Classic Fit Tee",
    rating: 4.4,
    cost: 240,
    discount: 15,
    description: "Classic fit tee designed for all-day comfort.",
    colors: ["#00C12B", "#000"],
    sizes: ["Medium", "Large", "X-Large"],
    gender: "Women",
    type: "T-shirt-2",
    dressStyle: "Casual"
  },
  {
    id: 17,
    mainSrc: "/src/assets/images/products/1.png",
    src: [
      "/src/assets/images/products/1.png",
      "/src/assets/images/products/2.png",
      "/src/assets/images/products/3.png"
    ],
    title: "Retro Print Tee",
    rating: 4.1,
    cost: 260,
    discount: 0,
    description: "Retro-inspired print tee with soft fabric finish.",
    colors: ["#F57906", "#063AF5"],
    sizes: ["Small", "Medium", "Large"],
    gender: "Men",
    type: "T-shirt-3",
    dressStyle: "Vintage"
  },
  {
    id: 18,
    mainSrc: "/src/assets/images/products/2.png",
    src: [
      "/src/assets/images/products/2.png",
      "/src/assets/images/products/3.png",
      "/src/assets/images/products/4.png"
    ],
    title: "Active DryFit Tee",
    rating: 4.7,
    cost: 330,
    discount: 30,
    description: "High-performance DryFit tee for training sessions.",
    colors: ["#06CAF5", "#000"],
    sizes: ["Medium", "Large"],
    gender: "Women",
    type: "T-shirt-4",
    dressStyle: "Sport"
  },
  {
    id: 19,
    mainSrc: "/src/assets/images/products/3.png",
    src: [
      "/src/assets/images/products/3.png",
      "/src/assets/images/products/4.png",
      "/src/assets/images/products/5.png"
    ],
    title: "SoftTouch Lounge Tee",
    rating: 4.3,
    cost: 210,
    discount: 0,
    description: "Ultra-soft tee perfect for lounging and relaxation.",
    colors: ["#F5DD06", "#fff"],
    sizes: ["Large", "X-Large"],
    gender: "Men",
    type: "T-shirt-5",
    dressStyle: "Loungewear"
  },
  {
    id: 20,
    mainSrc: "/src/assets/images/products/4.png",
    src: [
      "/src/assets/images/products/4.png",
      "/src/assets/images/products/5.png",
      "/src/assets/images/products/6.png"
    ],
    title: "Daily Comfort Tee",
    rating: 4.2,
    cost: 230,
    discount: 10,
    description: "Comfort-oriented tee suitable for all-day wear.",
    colors: ["#000", "#F5DD06"],
    sizes: ["Small", "Medium", "Large"],
    gender: "Women",
    type: "T-shirt-1",
    dressStyle: "Casual"
  },
  {
    id: 21,
    mainSrc: "/src/assets/images/products/5.png",
    src: [
      "/src/assets/images/products/5.png",
      "/src/assets/images/products/6.png",
      "/src/assets/images/products/7.png"
    ],
    title: "Classic Round Neck Tee",
    rating: 3.7,
    cost: 180,
    discount: 0,
    description: "Classic round-neck tee crafted for durability.",
    colors: ["#fff", "#F50606"],
    sizes: ["Medium", "Large"],
    gender: "Men",
    type: "T-shirt-2",
    dressStyle: "Casual"
  },
  {
    id: 22,
    mainSrc: "/src/assets/images/products/6.png",
    src: [
      "/src/assets/images/products/6.png",
      "/src/assets/images/products/7.png",
      "/src/assets/images/products/8.png"
    ],
    title: "Ultra Breathable Mesh Tee",
    rating: 4.6,
    cost: 320,
    discount: 28,
    description: "Breathable mesh tee perfect for warm-weather activities.",
    colors: ["#06CAF5", "#000"],
    sizes: ["Medium", "Large", "X-Large"],
    gender: "Men",
    type: "T-shirt-3",
    dressStyle: "Sport"
  },
  {
    id: 23,
    mainSrc: "/src/assets/images/products/7.png",
    src: [
      "/src/assets/images/products/7.png",
      "/src/assets/images/products/8.png",
      "/src/assets/images/products/9.png"
    ],
    title: "ColorBlock Street Tee",
    rating: 4.3,
    cost: 250,
    discount: 0,
    description: "Bold color-block tee made for streetwear outfits.",
    colors: ["#F506A4", "#063AF5"],
    sizes: ["Small", "Medium", "Large"],
    gender: "Women",
    type: "T-shirt-4",
    dressStyle: "Streetwear"
  },
  {
    id: 24,
    mainSrc: "/src/assets/images/products/8.png",
    src: [
      "/src/assets/images/products/8.png",
      "/src/assets/images/products/9.png",
      "/src/assets/images/products/10.png"
    ],
    title: "Soft-Touch Cotton Tee",
    rating: 4.0,
    cost: 210,
    discount: 0,
    description: "Soft cotton tee delivering simplicity and comfort.",
    colors: ["#00C12B", "#000", "#fff"],
    sizes: ["Medium", "Large"],
    gender: "Men",
    type: "T-shirt-5",
    dressStyle: "Minimalist"
  },
  {
    id: 25,
    mainSrc: "/src/assets/images/products/9.png",
    src: [
      "/src/assets/images/products/9.png",
      "/src/assets/images/products/10.png",
      "/src/assets/images/products/11.png"
    ],
    title: "GymFlex Training Tee",
    rating: 4.5,
    cost: 290,
    discount: 20,
    description: "Flexible and lightweight tee ideal for workouts.",
    colors: ["#F57906", "#06CAF5"],
    sizes: ["Small", "Medium", "Large"],
    gender: "Men",
    type: "T-shirt-1",
    dressStyle: "Sport"
  },
  {
    id: 26,
    mainSrc: "/src/assets/images/products/10.png",
    src: [
      "/src/assets/images/products/10.png",
      "/src/assets/images/products/11.png",
      "/src/assets/images/products/12.png"
    ],
    title: "Urban SlimFit Tee",
    rating: 3.9,
    cost: 240,
    discount: 0,
    description: "Slim-fit tee with a clean modern urban silhouette.",
    colors: ["#063AF5", "#000"],
    sizes: ["Medium", "Large", "X-Large"],
    gender: "Women",
    type: "T-shirt-2",
    dressStyle: "Streetwear"
  },
  {
    id: 27,
    mainSrc: "/src/assets/images/products/11.png",
    src: [
      "/src/assets/images/products/11.png",
      "/src/assets/images/products/12.png",
      "/src/assets/images/products/13.png"
    ],
    title: "ChillMode Oversize Tee",
    rating: 4.4,
    cost: 260,
    discount: 12,
    description: "Oversized tee for relaxed comfortable everyday fits.",
    colors: ["#fff", "#F5DD06"],
    sizes: ["Large", "X-Large"],
    gender: "Men",
    type: "T-shirt-3",
    dressStyle: "Loungewear"
  },
  {
    id: 28,
    mainSrc: "/src/assets/images/products/12.png",
    src: [
      "/src/assets/images/products/12.png",
      "/src/assets/images/products/13.png",
      "/src/assets/images/products/14.png"
    ],
    title: "Performance Aero Tee",
    rating: 4.7,
    cost: 340,
    discount: 35,
    description: "Aero-engineered tee optimized for airflow and mobility.",
    colors: ["#06CAF5", "#063AF5", "#000"],
    sizes: ["Small", "Medium", "Large"],
    gender: "Women",
    type: "T-shirt-4",
    dressStyle: "Sport"
  },
  {
    id: 29,
    mainSrc: "/src/assets/images/products/13.png",
    src: [
      "/src/assets/images/products/13.png",
      "/src/assets/images/products/14.png",
      "/src/assets/images/products/15.png"
    ],
    title: "Retro Classic Stripe Tee",
    rating: 4.1,
    cost: 220,
    discount: 0,
    description: "Striped retro tee crafted from durable cotton fabric.",
    colors: ["#F57906", "#7D06F5"],
    sizes: ["Medium", "Large"],
    gender: "Men",
    type: "T-shirt-5",
    dressStyle: "Vintage"
  },
  {
    id: 30,
    mainSrc: "/src/assets/images/products/14.png",
    src: [
      "/src/assets/images/products/14.png",
      "/src/assets/images/products/15.png",
      "/src/assets/images/products/0.png"
    ],
    title: "ActiveDry Running Tee",
    rating: 4.6,
    cost: 310,
    discount: 25,
    description: "Moisture-wicking running tee designed for high performance.",
    colors: ["#06CAF5", "#063AF5"],
    sizes: ["Small", "Medium", "Large"],
    gender: "Men",
    type: "T-shirt-1",
    dressStyle: "Sport"
  },
  {
    id: 31,
    mainSrc: "/src/assets/images/products/15.png",
    src: [
      "/src/assets/images/products/15.png",
      "/src/assets/images/products/0.png",
      "/src/assets/images/products/1.png"
    ],
    title: "PureSoft Essential Tee",
    rating: 4.0,
    cost: 200,
    discount: 0,
    description: "Ultra-soft essential tee ideal for casual everyday wear.",
    colors: ["#fff", "#000"],
    sizes: ["Medium", "Large", "X-Large"],
    gender: "Women",
    type: "T-shirt-2",
    dressStyle: "Minimalist"
  },
  {
    id: 32,
    mainSrc: "/src/assets/images/products/0.png",
    src: [
      "/src/assets/images/products/0.png",
      "/src/assets/images/products/1.png",
      "/src/assets/images/products/2.png"
    ],
    title: "StreetMotion Oversize Tee",
    rating: 4.3,
    cost: 260,
    discount: 15,
    description: "Oversized tee tailored for clean streetwear silhouettes.",
    colors: ["#F50606", "#7D06F5"],
    sizes: ["Large", "X-Large"],
    gender: "Men",
    type: "T-shirt-3",
    dressStyle: "Streetwear"
  },
  {
    id: 33,
    mainSrc: "/src/assets/images/products/1.png",
    src: [
      "/src/assets/images/products/1.png",
      "/src/assets/images/products/2.png",
      "/src/assets/images/products/3.png"
    ],
    title: "Vibe Graphic Tee",
    rating: 4.7,
    cost: 330,
    discount: 30,
    description: "Bold graphic tee made for expressive fashion lovers.",
    colors: ["#F506A4", "#063AF5", "#fff"],
    sizes: ["Small", "Medium", "Large"],
    gender: "Women",
    type: "T-shirt-4",
    dressStyle: "Casual"
  },
  {
    id: 34,
    mainSrc: "/src/assets/images/products/2.png",
    src: [
      "/src/assets/images/products/2.png",
      "/src/assets/images/products/3.png",
      "/src/assets/images/products/4.png"
    ],
    title: "Classic Fit Crew Tee",
    rating: 3.8,
    cost: 180,
    discount: 0,
    description: "Simple crew-neck tee built for comfort and longevity.",
    colors: ["#000"],
    sizes: ["Medium", "Large"],
    gender: "Men",
    type: "T-shirt-5",
    dressStyle: "Minimalist"
  },
  {
    id: 35,
    mainSrc: "/src/assets/images/products/3.png",
    src: [
      "/src/assets/images/products/3.png",
      "/src/assets/images/products/4.png",
      "/src/assets/images/products/5.png"
    ],
    title: "AirFlex Training Tee",
    rating: 4.5,
    cost: 300,
    discount: 22,
    description: "Flexible tee built for comfort during intense workouts.",
    colors: ["#06CAF5", "#F57906"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    gender: "Men",
    type: "T-shirt-1",
    dressStyle: "Sport"
  },
  {
    id: 36,
    mainSrc: "/src/assets/images/products/4.png",
    src: [
      "/src/assets/images/products/4.png",
      "/src/assets/images/products/5.png",
      "/src/assets/images/products/6.png"
    ],
    title: "RelaxFit Lounge Tee",
    rating: 4.1,
    cost: 220,
    discount: 0,
    description: "Relaxed-fit tee ideal for lounging or casual walking.",
    colors: ["#fff", "#F5DD06"],
    sizes: ["Medium", "Large"],
    gender: "Women",
    type: "T-shirt-2",
    dressStyle: "Loungewear"
  },
  {
    id: 37,
    mainSrc: "/src/assets/images/products/5.png",
    src: [
      "/src/assets/images/products/5.png",
      "/src/assets/images/products/6.png",
      "/src/assets/images/products/7.png"
    ],
    title: "TurboDry Sport Tee",
    rating: 4.8,
    cost: 350,
    discount: 40,
    description: "Premium sport tee engineered with fast-dry technology.",
    colors: ["#063AF5", "#06CAF5", "#000"],
    sizes: ["Small", "Medium", "Large"],
    gender: "Women",
    type: "T-shirt-3",
    dressStyle: "Sport"
  },
  {
    id: 38,
    mainSrc: "/src/assets/images/products/6.png",
    src: [
      "/src/assets/images/products/6.png",
      "/src/assets/images/products/7.png",
      "/src/assets/images/products/8.png"
    ],
    title: "UrbanBold Heavyweight Tee",
    rating: 4.2,
    cost: 270,
    discount: 0,
    description: "Heavyweight tee built for those who like structured fits.",
    colors: ["#7D06F5", "#F506A4"],
    sizes: ["Large", "X-Large"],
    gender: "Men",
    type: "T-shirt-4",
    dressStyle: "Streetwear"
  },
  {
    id: 39,
    mainSrc: "/src/assets/images/products/7.png",
    src: [
      "/src/assets/images/products/7.png",
      "/src/assets/images/products/8.png",
      "/src/assets/images/products/9.png"
    ],
    title: "Breeze Lite Tee",
    rating: 4.0,
    cost: 200,
    discount: 0,
    description: "Lightweight tee with excellent airflow for warm seasons.",
    colors: ["#00C12B", "#fff"],
    sizes: ["Small", "Medium"],
    gender: "Women",
    type: "T-shirt-5",
    dressStyle: "Casual"
  },
  

]


export default products