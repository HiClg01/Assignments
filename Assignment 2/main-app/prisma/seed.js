// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

// const products = [
//   // 1. Electronics
//   {
//     name: "Sony Bravia 55-inch 4K TV",
//     description: "Ultra HD Smart Google TV with vibrant colors and Dolby Vision.",
//     price: 699,
//     category: "Electronics",
//     image: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg"
//   },
//   {
//     name: "HP Pavilion Gaming Laptop",
//     description: "Ryzen 5, 16GB RAM, GTX 1650, great for mid-range gaming.",
//     price: 799,
//     category: "Electronics",
//     image: "https://m.media-amazon.com/images/I/81pezrPSgOL._AC_UY327_FMwebp_QL65_.jpg"
//   },

//   // 2. Mobile & Accessories
//   {
//     name: "OnePlus Nord CE 3 Lite",
//     description: "Smooth 120Hz display, Snapdragon chipset, and 108MP camera.",
//     price: 245,
//     category: "Mobile & Accessories",
//     image: "https://m.media-amazon.com/images/I/61QRgOgBx0L._AC_UY327_FMwebp_QL65_.jpg"
//   },
//   {
//     name: "Spigen Mobile Back Cover",
//     description: "Shock-absorbing TPU case for Samsung Galaxy phones.",
//     price: 18,
//     category: "Mobile & Accessories",
//     image: "https://m.media-amazon.com/images/I/71K+OeR7G2L._AC_UY327_FMwebp_QL65_.jpg"
//   },

//   // 3. Clothing & Accessories
//   {
//     name: "Levi’s Men's Slim Fit Jeans",
//     description: "Stylish stretchable denim with a sleek fit.",
//     price: 45,
//     category: "Clothing & Accessories",
//     image: "https://m.media-amazon.com/images/I/71Ba6+qN9ML._AC_UL480_FMwebp_QL65_.jpg"
//   },
//   {
//     name: "Women's Cotton Kurta",
//     description: "Elegant floral print kurta made of soft cotton fabric.",
//     price: 29,
//     category: "Clothing & Accessories",
//     image: "https://m.media-amazon.com/images/I/81HY6yNZBFL._AC_UL480_FMwebp_QL65_.jpg"
//   },

//   // 4. Shoes
//   {
//     name: "Adidas Running Shoes",
//     description: "High-performance running shoes with comfortable grip.",
//     price: 70,
//     category: "Shoes",
//     image: "https://m.media-amazon.com/images/I/51m8uHgF8LL._AC_UL480_FMwebp_QL65_.jpg"
//   },
//   {
//     name: "Skechers Women Sneakers",
//     description: "Memory foam insoles for all-day comfort.",
//     price: 59,
//     category: "Shoes",
//     image: "https://m.media-amazon.com/images/I/71O5dk9DeXL._AC_UL480_FMwebp_QL65_.jpg"
//   },

//   // 5. Watches
//   {
//     name: "Fossil Gen 6 Smartwatch",
//     description: "WearOS smartwatch with heart tracking and AMOLED display.",
//     price: 299,
//     category: "Watches",
//     image: "https://m.media-amazon.com/images/I/61VSXBIgNCL._AC_UL480_FMwebp_QL65_.jpg"
//   },
//   {
//     name: "Titan Analog Men's Watch",
//     description: "Classic design with leather strap and round dial.",
//     price: 89,
//     category: "Watches",
//     image: "https://m.media-amazon.com/images/I/61fX-R4ZP8L._AC_UL480_FMwebp_QL65_.jpg"
//   },

//   // 6. Jewellery
//   {
//     name: "Sukkhi Gold Plated Necklace",
//     description: "Traditional Indian wedding jewelry set with earrings.",
//     price: 39,
//     category: "Jewellery",
//     image: "https://m.media-amazon.com/images/I/71kj4h4h44L._AC_UL480_FMwebp_QL65_.jpg"
//   },
//   {
//     name: "Sterling Silver Stud Earrings",
//     description: "Elegant CZ stone earrings for formal and casual wear.",
//     price: 24,
//     category: "Jewellery",
//     image: "https://m.media-amazon.com/images/I/51m9TqQZb-L._AC_UL480_FMwebp_QL65_.jpg"
//   },

//   // 7. Beauty & Personal Care
//   {
//     name: "L'Oreal Paris Face Serum",
//     description: "Hyaluronic acid based serum for hydrated glowing skin.",
//     price: 19,
//     category: "Beauty & Personal Care",
//     image: "https://m.media-amazon.com/images/I/61hR0H0Bu3L._AC_UL480_FMwebp_QL65_.jpg"
//   },
//   {
//     name: "Philips Hair Dryer",
//     description: "Compact and efficient 1200W hair dryer with 3 settings.",
//     price: 29,
//     category: "Beauty & Personal Care",
//     image: "https://m.media-amazon.com/images/I/71Zq7vR2s8L._AC_UL480_FMwebp_QL65_.jpg"
//   },

//   // 8. Health & Household
//   {
//     name: "Dettol Disinfectant Liquid",
//     description: "Multipurpose cleaner for home hygiene and protection.",
//     price: 5,
//     category: "Health & Household",
//     image: "https://m.media-amazon.com/images/I/61-7hxhGOvL._AC_UL480_FMwebp_QL65_.jpg"
//   },
//   {
//     name: "Dr. Trust Blood Pressure Monitor",
//     description: "Accurate automatic BP monitor with large LCD display.",
//     price: 39,
//     category: "Health & Household",
//     image: "https://m.media-amazon.com/images/I/71xz46lIX9L._AC_UL480_FMwebp_QL65_.jpg"
//   },

//   // 9. Home & Kitchen
//   {
//     name: "Milton Thermosteel Flask",
//     description: "1L hot and cold stainless steel flask with cup lid.",
//     price: 15,
//     category: "Home & Kitchen",
//     image: "https://m.media-amazon.com/images/I/61d8EH-U8xL._AC_UL480_FMwebp_QL65_.jpg"
//   },
//   {
//     name: "Cello Non-Stick Cookware Set",
//     description: "5-piece induction base cookware set with glass lids.",
//     price: 49,
//     category: "Home & Kitchen",
//     image: "https://m.media-amazon.com/images/I/71Fb7oKZKnL._AC_UL480_FMwebp_QL65_.jpg"
//   },

//   // 10. Furniture
//   {
//     name: "Nilkamal Plastic Chair",
//     description: "Durable molded chair for indoor/outdoor use.",
//     price: 19,
//     category: "Furniture",
//     image: "https://m.media-amazon.com/images/I/51oNqvW1RyL._AC_UL480_FMwebp_QL65_.jpg"
//   },
//   {
//     name: "Wakefit Memory Foam Mattress",
//     description: "Orthopedic 6-inch mattress with breathable fabric.",
//     price: 199,
//     category: "Furniture",
//     image: "https://m.media-amazon.com/images/I/71i2NA-n+lL._AC_UL480_FMwebp_QL65_.jpg"
//   },

//   // 11. Grocery & Gourmet Foods
//   {
//     name: "Tata Sampann Toor Dal",
//     description: "Unpolished dal with natural goodness intact.",
//     price: 3,
//     category: "Grocery & Gourmet Foods",
//     image: "https://m.media-amazon.com/images/I/71MsfzZsh2L._AC_UL480_FMwebp_QL65_.jpg"
//   },
//   {
//     name: "Hershey’s Chocolate Syrup",
//     description: "Classic chocolate syrup for milkshakes and desserts.",
//     price: 4,
//     category: "Grocery & Gourmet Foods",
//     image: "https://m.media-amazon.com/images/I/71lMwnvRCmL._AC_UL480_FMwebp_QL65_.jpg"
//   },

//   // 12. Pet Supplies
//   {
//     name: "Pedigree Adult Dog Food",
//     description: "Complete & balanced meal with chicken and veggies.",
//     price: 9,
//     category: "Pet Supplies",
//     image: "https://m.media-amazon.com/images/I/91g0mhvLvGL._AC_UL480_FMwebp_QL65_.jpg"
//   },
//   {
//     name: "Drools Cat Food",
//     description: "Real ocean fish based dry cat food for shiny coat.",
//     price: 7,
//     category: "Pet Supplies",
//     image: "https://m.media-amazon.com/images/I/61klsY+lvvL._AC_UL480_FMwebp_QL65_.jpg"
//   },

//   // 13. Toys & Games
//   {
//     name: "Rubik's Cube 3x3",
//     description: "Original stickerless speed cube puzzle toy.",
//     price: 6,
//     category: "Toys & Games",
//     image: "https://m.media-amazon.com/images/I/61xIzeXXpyL._AC_UL480_FMwebp_QL65_.jpg"
//   },
//   {
//     name: "UNO Cards",
//     description: "Classic family card game by Mattel.",
//     price: 4,
//     category: "Toys & Games",
//     image: "https://m.media-amazon.com/images/I/81gN3EMz5cL._AC_UL480_FMwebp_QL65_.jpg"
//   },

//   // 14. Baby Products
//   {
//     name: "Himalaya Baby Lotion",
//     description: "Gentle moisturizer for baby’s soft skin.",
//     price: 3,
//     category: "Baby Products",
//     image: "https://m.media-amazon.com/images/I/61iT1HY+5yL._AC_UL480_FMwebp_QL65_.jpg"
//   },
//   {
//     name: "Pampers Diapers Pants XL",
//     description: "Up to 12 hours of dryness with aloe lotion.",
//     price: 18,
//     category: "Baby Products",
//     image: "https://m.media-amazon.com/images/I/71fuWyGEsmL._AC_UL480_FMwebp_QL65_.jpg"
//   },
//   // 15. Sports & Outdoors
//   {
//     name: "Nivia Football",
//     description: "Durable rubberized football for outdoor training.",
//     price: 12,
//     category: "Sports & Outdoors",
//     image: "https://m.media-amazon.com/images/I/91kY92nPFjL._AC_UL480_FMwebp_QL65_.jpg"
//   },
//   {
//     name: "Cosco Badminton Racket",
//     description: "Lightweight graphite frame racket with full cover.",
//     price: 22,
//     category: "Sports & Outdoors",
//     image: "https://m.media-amazon.com/images/I/61OpzDcrsBL._AC_UL480_FMwebp_QL65_.jpg"
//   },

//   // 16. Fitness Equipment
//   {
//     name: "Cockatoo Adjustable Dumbbells",
//     description: "Set of adjustable steel dumbbells for home workouts.",
//     price: 49,
//     category: "Fitness Equipment",
//     image: "https://m.media-amazon.com/images/I/61KnFqN9hTL._AC_UL480_FMwebp_QL65_.jpg"
//   },
//   {
//     name: "Boldfit Yoga Mat",
//     description: "Non-slip mat for yoga, pilates, and stretching.",
//     price: 15,
//     category: "Fitness Equipment",
//     image: "https://m.media-amazon.com/images/I/61pqsmH3Z-L._AC_UL480_FMwebp_QL65_.jpg"
//   },

//   // 17. Automotive
//   {
//     name: "Michelin Tyre Inflator",
//     description: "Digital inflator for car and bike tires with pressure gauge.",
//     price: 42,
//     category: "Automotive",
//     image: "https://m.media-amazon.com/images/I/81M9hwU8B1L._AC_UL480_FMwebp_QL65_.jpg"
//   },
//   {
//     name: "3M Car Wash Shampoo",
//     description: "Premium car shampoo with high foaming formula.",
//     price: 6,
//     category: "Automotive",
//     image: "https://m.media-amazon.com/images/I/61MCXy9GOzL._AC_UL480_FMwebp_QL65_.jpg"
//   },

//   // 18. Industrial & Scientific
//   {
//     name: "Bosch Laser Distance Meter",
//     description: "Accurate digital distance measurement up to 40m.",
//     price: 55,
//     category: "Industrial & Scientific",
//     image: "https://m.media-amazon.com/images/I/61YiRHHqRPL._AC_UL480_FMwebp_QL65_.jpg"
//   },
//   {
//     name: "Digital Vernier Caliper",
//     description: "Stainless steel caliper for precision measurement.",
//     price: 20,
//     category: "Industrial & Scientific",
//     image: "https://m.media-amazon.com/images/I/51+0NaRVvXL._AC_UL480_FMwebp_QL65_.jpg"
//   },

//   // 19. Office Products
//   {
//     name: "HP DeskJet Ink Advantage Printer",
//     description: "Compact all-in-one color printer for home and office.",
//     price: 59,
//     category: "Office Products",
//     image: "https://m.media-amazon.com/images/I/71nwnHTsyOL._AC_UL480_FMwebp_QL65_.jpg"
//   },
//   {
//     name: "Kangaro Stapler Set",
//     description: "Standard stapler with pins and remover.",
//     price: 4,
//     category: "Office Products",
//     image: "https://m.media-amazon.com/images/I/61M48ScLQhL._AC_UL480_FMwebp_QL65_.jpg"
//   },

//   // 20. Musical Instruments
//   {
//     name: "Yamaha Acoustic Guitar",
//     description: "Full-sized 6-string acoustic guitar with smooth finish.",
//     price: 129,
//     category: "Musical Instruments",
//     image: "https://m.media-amazon.com/images/I/71hxLZt0EDL._AC_UL480_FMwebp_QL65_.jpg"
//   },
//   {
//     name: "Casio Electronic Keyboard",
//     description: "61-key keyboard with rhythms, tones, and learning modes.",
//     price: 99,
//     category: "Musical Instruments",
//     image: "https://m.media-amazon.com/images/I/71DgF+Jt4ZL._AC_UL480_FMwebp_QL65_.jpg"
//   },

//   // 21. Garden & Outdoors
//   {
//     name: "TrustBasket Gardening Tool Kit",
//     description: "Set of 5 tools for home gardening and planting.",
//     price: 10,
//     category: "Garden & Outdoors",
//     image: "https://m.media-amazon.com/images/I/91EUvZzDN0L._AC_UL480_FMwebp_QL65_.jpg"
//   },
//   {
//     name: "Kraft Seeds Pot Planters",
//     description: "Set of colorful plastic pots for indoor and balcony plants.",
//     price: 8,
//     category: "Garden & Outdoors",
//     image: "https://m.media-amazon.com/images/I/81Oih7XJY0L._AC_UL480_FMwebp_QL65_.jpg"
//   },
//   // 22. Tools & Home Improvement
//   {
//     name: "Black+Decker Cordless Drill",
//     description: "Compact 12V drill machine for household tasks.",
//     price: 45,
//     category: "Tools & Home Improvement",
//     image: "https://m.media-amazon.com/images/I/71gEVXh+0kL._AC_UL480_FMwebp_QL65_.jpg"
//   },
//   {
//     name: "Taparia Screwdriver Set",
//     description: "Durable magnetic tip screwdrivers in plastic box.",
//     price: 6,
//     category: "Tools & Home Improvement",
//     image: "https://m.media-amazon.com/images/I/71l6K8aW9+L._AC_UL480_FMwebp_QL65_.jpg"
//   },

//   // 23. Video Games
//   {
//     name: "God of War Ragnarok - PS5",
//     description: "Epic Norse mythology action-adventure game.",
//     price: 49,
//     category: "Video Games",
//     image: "https://m.media-amazon.com/images/I/81E1fz67uPL._AC_UL480_FMwebp_QL65_.jpg"
//   },
//   {
//     name: "Minecraft for PC",
//     description: "Explore, build and survive in a blocky open world.",
//     price: 26,
//     category: "Video Games",
//     image: "https://m.media-amazon.com/images/I/61m4vDLge+L._AC_UL480_FMwebp_QL65_.jpg"
//   },

//   // 24. Movies & TV Shows
//   {
//     name: "The Dark Knight Blu-ray",
//     description: "Christopher Nolan's iconic Batman trilogy installment.",
//     price: 10,
//     category: "Movies & TV Shows",
//     image: "https://m.media-amazon.com/images/I/81AJdOIEIhL._AC_UL480_FMwebp_QL65_.jpg"
//   },
//   {
//     name: "Avengers Endgame DVD",
//     description: "Epic conclusion to the Infinity Saga from Marvel.",
//     price: 8,
//     category: "Movies & TV Shows",
//     image: "https://m.media-amazon.com/images/I/91YvC02NQKL._AC_UL480_FMwebp_QL65_.jpg"
//   },

//   // 25. Software
//   {
//     name: "Microsoft Office 2021",
//     description: "Lifetime license for Word, Excel, and PowerPoint.",
//     price: 149,
//     category: "Software",
//     image: "https://m.media-amazon.com/images/I/71qycUZXd7L._AC_UL480_FMwebp_QL65_.jpg"
//   },
//   {
//     name: "Norton 360 Antivirus",
//     description: "1-year security suite for PC & mobile devices.",
//     price: 29,
//     category: "Software",
//     image: "https://m.media-amazon.com/images/I/61fR+McJhQL._AC_UL480_FMwebp_QL65_.jpg"
//   },

//   // 26. Luggage & Bags
//   {
//     name: "Safari Polycarbonate Trolley",
//     description: "Hard-shell 55cm cabin-size luggage with TSA lock.",
//     price: 59,
//     category: "Luggage & Bags",
//     image: "https://m.media-amazon.com/images/I/81iTC56UyOL._AC_UL480_FMwebp_QL65_.jpg"
//   },
//   {
//     name: "Skybags Casual Backpack",
//     description: "Stylish 35L backpack for school and college.",
//     price: 22,
//     category: "Luggage & Bags",
//     image: "https://m.media-amazon.com/images/I/71Vkdcipz0L._AC_UL480_FMwebp_QL65_.jpg"
//   },

//   // 27. Handmade Products
//   {
//     name: "Terracotta Wall Hanging",
//     description: "Ethnic hand-painted clay wall décor art.",
//     price: 15,
//     category: "Handmade Products",
//     image: "https://m.media-amazon.com/images/I/81M6qUEPSqL._AC_UL480_FMwebp_QL65_.jpg"
//   },
//   {
//     name: "Macrame Plant Hanger",
//     description: "Handwoven cotton hanger for indoor plants.",
//     price: 12,
//     category: "Handmade Products",
//     image: "https://m.media-amazon.com/images/I/71KDMzvAmGL._AC_UL480_FMwebp_QL65_.jpg"
//   },

//   // 28. Stationery & School Supplies
//   {
//     name: "Classmate Spiral Notebook",
//     description: "300-page ruled notebook with quality paper.",
//     price: 3,
//     category: "Stationery & School Supplies",
//     image: "https://m.media-amazon.com/images/I/71H36rNn7UL._AC_UL480_FMwebp_QL65_.jpg"
//   },
//   {
//     name: "Camlin Kokuyo Geometry Box",
//     description: "Complete metal box set for school geometry work.",
//     price: 2,
//     category: "Stationery & School Supplies",
//     image: "https://m.media-amazon.com/images/I/71ydPLnS4pL._AC_UL480_FMwebp_QL65_.jpg"
//   }
// ];

// async function main() {
//   await prisma.product.createMany({ data: products });
//   console.log('✅ Seeded products successfully!');
// }

// main()
//   .catch((e) => {
//     console.error('❌ Error seeding:', e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
