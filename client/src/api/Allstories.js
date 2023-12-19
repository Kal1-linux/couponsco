const Allstores = [
    "Alex & Alexa",
    "Agoda",
    "Aligne",
    "AttractionTickets.com",
    "Aosom UK",
    "Arteza",
    "Acnecide",
    "AndaseaT",
    "Aspire Furniture",
    "Ancestry.co.uk",
    "AOVO",
    "Astro Gaming",
    "Aurelia London",
    "AutoDesk",
    "Alibaba",
    "AbeBooks",
    "Aldo Shoes",
    "AllSole Footwear",
    "Appliances Direct",
    "Aden & Anais",
    "Anantara",
    "Ancient Greek Sandals",
    "ARRAN Sense of Scotland",
    "Alamo",
    "Allianz Assistance",
    "Allianz Musical Insurance",
    "Appleyard London",
    "Giorgio Armani Beauty",
    "A-SLIM Wallets",
    "Abstract House",
    "AEG",
    "Affordable Mac",
    "Agadon Designer Radiators",
    "Agriframes",
    "Air Malta",
    "Alexandra Sports",
    "Accor Hotels",
    "Allen Brothers",
    " American Eagle Outfitters",
    "Another Version",
    "Antonioli",
    "Argus Car Hire ",

    "BREO",
    "Brook & Wilde",
    "Barker Shoes",
    "Bloom",
    "Baabuk",
    "Banner Buzz",
    "Bonmarche",
    "BareMinerals",
    "Bier Company",
    "Bloomingdale's",
    "Blow LTD",
    "Buy Sheds Direct",
    "Best Gym Equipment",
    "BigDUG",
    "Bloom & Blossom",
    "BOY London",
    "Bedeck",
    "Bluecrest",
    "Bowers & Wilkins",
    "Briggs & Riley",
    "Bumble and Bumble",
    "Butterfly Twists",
    "Bloom & Wild",
    "Bluefin SUP",
    "Boux Avenue",
    "Burleigh",
    "Burt's Bees",
    "Butlers Farmhouse Cheeses",
    "BadRhino",
    "Bedman",
    "Bluebella",
    "Boombod",
    "Braun",
    "Busuu",
    "Buycarparts",
    "Baby Mori",
    "Barcelo Hotels and Resorts",
    "Bathroom Takeaway",
    "Beyond Retro",
    "Big Green Smile",
    "Bimuno",
    "Bodybuilding Warehouse",
    "Bogner",
    "Bower Collective",
    "Brand X",
    "Britt's Superfoods",
    "The Royal British Legion",
    "B Calm",
    "Barkings Heads",
    "Base.com",
    "Baytree Interiors",
    "Beauty Pie",
    "Ben Sherman",
    "BillyOh",
    "Bohemia Design",
    "Bohemian Brands",
    "Camping Gear",
    "Clothing Apparel",
    "Coffee Accessories",
    "Craft Supplies",
    "Camera Equipment",
    "Cycling Accessories",
    "Computer Software",
    "Cosmetics and Beauty",
    "Custom Furniture",
    "Children's Toys",
    "Casual Footwear",
    "Car Accessories",
    "Cookware and Bakeware",
    "Candles and Fragrances",
    "Cat Supplies",
    "Cardio Fitness Equipment",
    "Contemporary Art",
    "Cocktail Mixers",
    "Comic Books",
    "Classroom Supplies",
    "Cell Phone Accessories",
    "Custom Jewelry",
    "Crystal Decor",
    "Chess Sets",
    "Concert Tickets",
    "Construction Tools",
    "Craft Beers",
    "Curated Wines",
    "Contemporary Furniture",
    "Collectible Coins",
    "Cycling Apparel",
    "Culinary Gadgets",
    "CrossFit Equipment",
    "Classic Literature",
    "Custom Prints",
    "Canvas Art",
    "Climbing Gear",
    "Car Care Products",
    "Cat Furniture",
    "Calligraphy Supplies",
    "Computer Games",
    "Classic Watches",
    "Customized Gifts",
    "Cozy Blankets",
    "Ceramics and Pottery",
    "Creative Writing Books",
    "Caravan Accessories",
    "Crystal Jewelry",
    "Cocktail Glasses",
    "Cultural Artifacts",
    "Dancewear",
    "Digital Cameras",
    "Dining Room Furniture",
    "Drones and Accessories",
    "Designer Handbags",
    "Dog Supplies",
    "Dumbbells and Weights",
    "Dress Shoes",
    "Desktop Computers",
    "Daily Planners",
    "Dried Flowers",
    "Diving Equipment",
    "Decorative Pillows",
    "Data Storage Devices",
    "Dinnerware Sets",
    "Denim Clothing",
    "Dessert Ingredients",
    "DIY Craft Kits",
    "Dental Care Products",
    "Duffle Bags",
    "Decorative Lighting",
    "Dust Collectors",
    "Dry Erase Boards",
    "Digital Art Prints",
    "Disco Ball Accessories",
    "Designer Watches",
    "Dairy-Free Snacks",
    "Desktop Speakers",
    "Dry Shampoo",
    "Disinfectant Cleaners",
    "Drum Kits",
    "Dinosaur Toys",
    "Dance Music",
    "Desk Organizers",
    "Double Beds",
    "Dainty Jewelry",
    "Dollhouse Miniatures",
    "Drone Racing Gear",
    "Distilled Spirits",
    "Dance Lessons",
    "Door Decorations",
    "Decorative Planters",
    "Dried Fruit Snacks",
    "Drafting Supplies",
    "Disposable Cameras",
    "Digital Piano Keyboards",
    "Daybeds",
    "Dog Grooming Tools",
    "Electronics",
    "Exercise Equipment",
    "Eyewear",
    "Eco-Friendly Products",
    "Educational Toys",
    "Elegant Apparel",
    "Essential Oils",
    "Entertainment Systems",
    "Ethnic Decor",
    "Ergonomic Furniture",
    "Emergency Preparedness",
    "Equestrian Gear",
    "Eco-Friendly Cleaning",
    "Embroidered Apparel",
    "Exotic Plants",
    "Energy-Saving Appliances",
    "Edible Treats",
    "Enamel Jewelry",
    "Executive Gifts",
    "Electronic Gadgets",
    "Educational Software",
    "Outdoor Equipment",
    "Eco-Friendly Fashion",
    "Eco-Friendly Home Goods",
    "Edgy Fashion",
    "Engraved Gifts",
    "Edible Arrangements",
    "Expressive Art",
    "Electric Vehicles",
    "Eco-Friendly Beauty",
    "Ethical Fashion",
    "Event Tickets",
    "Exercise Apparel",
    "Educational Books",
    "Embroidery Kits",
    "Eco-Friendly Pet Supplies",
    "Elegant Home Decor",
    "Explorer Gear",
    "Energy-Efficient Lighting",
    "Exotic Cuisine Ingredients",
    "Entertaining Board Games",
    "Electronic Music",
    "Enchanting Fragrances",
    "Ethnic Cuisine Cookware",
    "Exclusive Memberships",
    "Eco-Friendly Tech Gadgets",
    "Eco-Friendly Sporting Goods",
    "Epic Adventure Books",
    "Enlightening Courses",
    "Fitness Equipment",
    "Fashion Accessories",
    "Furniture Design",
    "Fishing Gear",
    "Fragrances and Perfumes",
    "Fancy Dress Costumes",
    "Fine Jewelry",
    "Festive Decorations",
    "Food Processors",
    "Footwear Collection",
    "Film and TV Memorabilia",
    "Farmhouse Decor",
    "Floral Arrangements",
    "Face Care Products",
    "Framed Art Prints",
    "Fitness Apparel",
    "Funky Gadgets",
    "Fair Trade Goods",
    "French Cuisine Ingredients",
    "Futuristic Technology",
    "Fiction Books",
    "Fluffy Pillows",
    "Festival Tickets",
    "Farm Tools",
    "Frozen Treats",
    "Fitness Trackers",
    "Feng Shui Decor",
    "Flannel Shirts",
    "Funky Socks",
    "Fishing Tackle",
    "Face Masks",
    "Folk Music Albums",
    "Furry Friends Toys",
    "Fruit Baskets",
    "Funky Hats",
    "Fictional Art",
    "Farmyard Toys",
    "Fleece Blankets",
    "Funky Sunglasses",
    "Fishing Apparel",
    "Flower Bulbs",
    "Fresh Juices",
    "Floating Shelves",
    "Fitness Supplements",
    "Funky Backpacks",
    "Framed Certificates",
    "Feather Quills",
    "Felt Crafts",
    "Funky Wall Clocks",
    "Gardening Tools",
    "Gourmet Foods",
    "Golf Accessories",
    "Graphic Novels",
    "Gymnastics Equipment",
    "Gaming Consoles",
    "Global Cuisine Ingredients",
    "Green Energy Solutions",
    "Gelato Makers",
    "Geocaching Gear",
    "Glassware Sets",
    "Graffiti Art Supplies",
    "Gluten-Free Snacks",
    "Gadget Chargers",
    "Greek Mythology Books",
    "Golden Jewelry",
    "Gong Bath Kits",
    "Gourmet Coffee Beans",
    "Guitar Accessories",
    "Giclee Prints",
    "Gaming Chairs",
    "Gardening Apparel",
    "Glow-in-the-Dark Decor",
    "Glass Sculptures",
    "Gaming Mousepads",
    "Gourmet Tea Blends",
    "Galaxy-themed Merchandise",
    "Gentle Yoga Accessories",
    "Gourmet Popcorn Flavors",
    "Grilling Tools",
    "GPS Navigation Devices",
    "Graze Boxes",
    "Glamorous Eveningwear",
    "Gardening Books",
    "Greek Language Courses",
    "Gourmet Chocolate Assortments",
    "Glass Water Bottles",
    "Globe Replicas",
    "Gourmet Olive Oils",
    "Grooming Kits",
    "Gothic Fashion",
    "Gaming Headsets",
    "Gourmet Honey Varieties",
    "Gold Bullion Coins",
    "Green Living Guides",
    "Gaming Keyboards",
    "Gourmet Vinegars",
    "Gardening Workshops",
    "Hiking Gear",
    "Headphones",
    "Home Decor",
    "Healthy Snacks",
    "Handmade Crafts",
    "Hammocks",
    "Hats and Caps",
    "Homeschooling Supplies",
    "Herbal Teas",
    "Hockey Equipment",
    "Historical Fiction Books",
    "Hot Sauce",
    "Hair Care Products",
    "Home Gym Equipment",
    "Houseplants",
    "Horse Riding Gear",
    "High-End Fashion",
    "Home Automation Devices",
    "Hiking Boots",
    "Hydration Accessories",
    "Handbags",
    "Hoodies",
    "Home Office Furniture",
    "Halloween Costumes",
    "Healthy Cookbooks",
    "Household Cleaners",
    "Hip Hop Music",
    "Humidifiers",
    "Guitar Accessories",
    "Horse Care Products",
    "Hunting Gear",
    "Hardcover Books",
    "Home Security Systems",
    "Heart Rate Monitors",
    "Home Improvement Tools",
    "Hipster Fashion",
    "Hiking Poles",
    "Holographic Gadgets",
    "Hemp Products",
    "Honey and Sweeteners",
    "Horse Art",
    "Hiking Maps",
    "Historical Documentaries",
    "Handheld Vacuums",
    "Homebrewing Kits",
    "Headwraps",
    "High-Protein Supplements",
    "Ice Cream",
    "Indoor Plants",
    "Inflatable Furniture",
    "Italian Cuisine",
    "Illuminated Decor",
    "Interactive Games",
    "Insulated Drinkware",
    "Innovative Gadgets",
    "Irresistible Chocolates",
    "Intelligent Lighting",
    "Industrial Decor",
    "Inspiring Artwork",
    "Inclusive Fashion",
    "Iconic Perfumes",
    "Immersive Virtual Reality",
    "Innovative Kitchen Tools",
    "Intriguing Puzzle Games",
    "Indian Spices",
    "Infinity Scarves",
    "Innovative Tech Accessories",
    "Indigo Dyed Clothing",
    "Icy Cold Beverages",
    "Ingenious Home Automation",
    "Iridescent Jewelry",
    "Illustrative Wall Art",
    "Innovative Pet Products",
    "Ivory Decor Pieces",
    "Island Getaway Essentials",
    "Impressive Sound Systems",
    "Interactive Learning Toys",
    "Incredible Natural Skincare",
    "Inflatable Pool Accessories",
    "Intuitive Fitness Trackers",
    "Italian Leather Goods",
    "Ice Skating Gear",
    "Illuminating Candles",
    "Infused Herbal Teas",
    "Innovative DIY Kits",
    "Iconic Celebrity Memorabilia",
    "Intricate Handmade Crafts",
    "Innovative Smart Home Devices",
    "Irish Whiskey Collection",
    "Inspirational Yoga Gear",
    "Iron Chef-Worthy Cookware",
    "International Travel Essentials",
    "Insulated Lunch Boxes",
    "Iconic Classic Cars",
    "Innovative Outdoor Gear",
    "Interactive Science Kits",
    "Irresistible Gourmet Popcorn",
    "Jewelry",
    "Jackets",
    "Jogging Shoes",
    "Juicers",
    "Jigsaw Puzzles",
    "Japanese Cuisine",
    "Jeans",
    "Journals",
    "Jade Decor",
    "Jute Rugs",
    "Jazz Music Albums",
    "Jump Ropes",
    "Jelly Beans",
    "Jewelry Boxes",
    "Jerseys",
    "Joint Supplements",
    "Jackets for Pets",
    "Jute Bags",
    "Juggling Equipment",
    "Jazz Instruments",
    "Jellyfish Tanks",
    "Jazz Dancewear",
    "Jasmine Tea",
    "Jewelry Making Kits",
    "Jerky Snacks",
    "Japanese Ceramics",
    "Jelly Roll Quilts",
    "Jigsaw Puzzle Mats",
    "Journaling Pens",
    "Jazzercise DVDs",
    "Jet Ski Accessories",
    "Jungle Gym Equipment",
    "Jackfruit Products",
    "Java Programming Books",
    "Japanese Calligraphy Tools",
    "Jute Plant Hangers",
    "Jazz Festivals Tickets",
    "Jeweled Hair Accessories",
    "Jewelry Making Workshops",
    "Jazzercise Apparel",
    "Jumping Castles",
    "Jute Cushions",
    "Jalapeno Sauces",
    "Jazz Art Prints",
    "Jazz History Books",
    "Juggling Workshops",
    "Jute Wall Hangings",
    "Jigsaw Puzzle Tables",
    "Kitchen Appliances",
    "Kids' Fashion",
    "Knitting Supplies",
    "Kettlebells",
    "Karaoke Machines",
    "Kombucha Kits",
    "Keyboards and Mice",
    "Keto Snacks",
    "Kawaii Stationery",
    "Kiteboarding Gear",
    "Kettle Corn",
    "Korean Beauty Products",
    "Kilim Rugs",
    "Kangaroo Care Products",
    "Kombucha Teas",
    "Kickboxing Gear",
    "Knockout Watches",
    "Kumihimo Supplies",
    "Knee-high Boots",
    "Kaleidoscope Art",
    "Kids' Crafts",
    "Kart Racing Accessories",
    "Kokeshi Dolls",
    "Kitesurfing Equipment",
    "Kava Root Supplements",
    "Kawaii Plushies",
    "Knee Braces",
    "Kefir Makers",
    "Kosher Snacks",
    "Knuckle Rings",
    "Kite Photography Drones",
    "Kawaii Apparel",
    "Kebab Grills",
    "Kaleidoscope Jewelry",
    "Kidney Health Supplements",
    "Knot Tying Kits",
    "Kosher Wines",
    "Kayak Accessories",
    "Kitty Condos",
    "Kumquat Preserves",
    "Key Lime Pies",
    "Kazoo Instruments",
    "Kokedama Plants",
    "Knee-high Socks",
    "Kawaii Tattoos",
    "Karate Uniforms",
    "Kitty Costumes",
    "Kite Making Kits",
    "Laptops",
    "Lighting Fixtures",
    "Leather Goods",
    "Lawn and Garden",
    "Luggage Sets",
    "Lingerie",
    "Luxury Watches",
    "Lamps and Shades",
    "Living Room Furniture",
    "Lip Care Products",
    "Lacrosse Equipment",
    "Laundry Supplies",
    "Local Artisans",
    "Laptop Accessories",
    "Luxury Bedding",
    "Lift Chairs",
    "Lawn Care Equipment",
    "Leisurewear",
    "Letterpress Prints",
    "Locksmith Services",
    "Lunar New Year Decor",
    "Lunch Containers",
    "Laser Printers",
    "Landscape Photography",
    "Leisure Activities",
    "Lactation Support",
    "Language Learning Apps",
    "Lifestyle Magazines",
    "Laser Hair Removal",
    "Lunar Exploration",
    "Lampshades",
    "Lightweight Jackets",
    "Lighthouse Tours",
    "Laptop Stands",
    "Leather Jackets",
    "Laser Tag Equipment",
    "Lemonade Stands",
    "Leisure Travel",
    "Loose-Leaf Tea",
    "Luxury Spa Products",
    "Lemon Squeezers",
    "Lawn Mowers",
    "Lego Sets",
    "Lifestyle Blogs",
    "Lavender Products",
    "Laser Engraving Services",
    "Luxury Cars",
    "Llama-themed Merchandise",
    "Music Instruments",
    "Men's Fashion",
    "Maternity Clothing",
    "Mobile Accessories",
    "Martial Arts Gear",
    "Motorcycle Parts",
    "Movie Merchandise",
    "Mosaic Art",
    "Meditation Tools",
    "Modern Home Decor",
    "Meal Prep Containers",
    "Microbrewery Beers",
    "Magnetic Toys",
    "Metal Sculptures",
    "Museum Tickets",
    "Magic Tricks",
    "Miniature Models",
    "Monogrammed Gifts",
    "Motorcycle Apparel",
    "Mountain Biking Gear",
    "Magnetic Poetry",
    "Mens Grooming Products",
    "Matcha Tea",
    "Mason Jar Accessories",
    "Massage Oils",
    "Moccasin Slippers",
    "Motivational Books",
    "Mandala Art",
    "Modular Furniture",
    "Model Trains",
    "Magnetic Levitation Gadgets",
    "Motorcycle Accessories",
    "Mexican Cuisine Ingredients",
    "Macrame Decor",
    "Mindfulness Journals",
    "Metal Engraving Tools",
    "Mobile Gaming Accessories",
    "Metal Detecting Equipment",
    "Martial Arts Clothing",
    "Mini Greenhouses",
    "Musical Vinyl Records",
    "Mens Leather Goods",
    "Mirrored Sunglasses",
    "Multi-tool Kits",
    "Microgreen Growing Kits",
    "Modern Art Prints",
    "Magnetic Levitation Plants",
    "Mood-Enhancing Lighting",
    "Nail Care",
    "Natural Skincare",
    "Necklaces",
    "Nightwear",
    "Notebooks",
    "Nutrition Supplements",
    "Novelty Gifts",
    "Nursery Decor",
    "Non-Alcoholic Beverages",
    "Nautical Decor",
    "Noodle Bowls",
    "Nintendo Accessories",
    "Novels",
    "Nursing Bras",
    "Noise-Canceling Headphones",
    "Nail Polish",
    "Nautical Fashion",
    "Nutcrackers",
    "Nut and Seed Butters",
    "Nameplates",
    "Nesting Tables",
    "Novelty Socks",
    "Nordic Skiing Gear",
    "Nose Rings",
    "Nappy Bags",
    "Night Lights",
    "Novelty T-Shirts",
    "Nut and Bolt Sets",
    "Nesting Dolls",
    "Nail Art Kits",
    "Neon Signs",
    "Nut Chocolates",
    "Nautical Bedding",
    "Nonstick Cookware",
    "Notebook Cases",
    "Nail Clippers",
    "Napkin Rings",
    "Nerf Guns",
    "Nappy Creams",
    "Noodle Makers",
    "Nonfiction Books",
    "Nutcracker Decorations",
    "Natural Cleaning Products",
    "Nesting Bowls",
    "Ninja Blenders",
    "Nautical Wallpaper",
    "Nail Files",
    "Neck Pillows",
    "Nordic Walking Poles",
    "Nautical Art",
    "Outdoor Furniture",
    "Organic Skincare",
    "Office Supplies",
    "Oversized Clothing",
    "Oil Paintings",
    "Online Courses",
    "Open-Back Headphones",
    "Oriental Rugs",
    "Outdoor Adventure Gear",
    "Organic Tea",
    "Oversized Sunglasses",
    "Occasional Tables",
    "Olive Oil Products",
    "On-the-Go Snacks",
    "Ornamental Plants",
    "Original Artwork",
    "Over-Ear Headphones",
    "Ocean-Themed Decor",
    "Outdoor Cooking Equipment",
    "Outdoor Sports Gear",
    "Oversized Bags",
    "Organic Baby Products",
    "Office Decor",
    "One-Piece Swimsuits",
    "Oxford Shoes",
    "Off-Road Vehicles",
    "Organic Cleaning Supplies",
    "Outdoor Lighting",
    "Oversized Hoodies",
    "Oversized Wall Clocks",
    "Opera Tickets",
    "Oolong Tea",
    "Office Furniture",
    "Organic Dog Food",
    "Outdoor Camping Gear",
    "Oceanfront Retreats",
    "Off-the-Shoulder Tops",
    "Oversized Planters",
    "Ombre Wall Art",
    "Orchestra Instruments",
    "Outdoor Adventure Clothing",
    "Organic Hair Care",
    "Overnight Bags",
    "Outdoor Fitness Equipment",
    "Oversized Scarves",
    "Oval Mirrors",
    "Organic Bedding",
    "Oversized Bean Bags",
    "Online Art Classes",
    "Painting Supplies",
    "Pet Accessories",
    "Puzzle Games",
    "Power Tools",
    "Portable Electronics",
    "Protein Supplements",
    "Potted Plants",
    "Professional Books",
    "Printed Apparel",
    "Patio Furniture",
    "Photography Gear",
    "Pasta and Noodles",
    "Personal Care Products",
    "PlayStation Games",
    "Pool Accessories",
    "Pendant Necklaces",
    "Party Decorations",
    "Piano Instruments",
    "Professional Cameras",
    "Potted Herbs",
    "Pilates Equipment",
    "Premium Teas",
    "Performance Sneakers",
    "Plush Toys",
    "Paintball Gear",
    "Portable Speakers",
    "Protective Cases",
    "Piano Sheet Music",
    "Practical Gadgets",
    "Picnic Essentials",
    "Premium Chocolates",
    "Power Banks",
    "Pajama Sets",
    "Puzzle Books",
    "Pendant Lighting",
    "Plant-Based Foods",
    "Pro Skincare Products",
    "Party Games",
    "Potted Flowers",
    "Powerlifting Gear",
    "Painting Books",
    "Professional Clothing",
    "Printed Wall Art",
    "Portable Grills",
    "Pencil Art Supplies",
    "Professional Headphones",
    "Pasta Makers",
    "Personalized Gifts",
    "Patio Umbrellas",
    "Quilting Supplies",
    "Quality Watches",
    "Quick Dry Towels",
    "Quinoa Products",
    "Quirky Decor",
    "Quantum Computing",
    "Quadcopter Drones",
    "Quartz Crystals",
    "Quiet Home Appliances",
    "Quilted Bedding",
    "Quinceañera Dresses",
    "Quiver Accessories",
    "Quiz and Puzzle Games",
    "Quilt Patterns",
    "Quilted Throw Pillows",
    "Quality Bed Linens",
    "Quilted Placemats",
    "Quokka-themed Merchandise",
    "Queen-sized Mattresses",
    "Quilted Baby Blankets",
    "Quilted Pet Beds",
    "Quasar Telescopes",
    "Quince Jelly",
    "Quinoa Flour",
    "Quantum Physics Books",
    "Quilted Laptop Sleeves",
    "Quilted Tote Bags",
    "Quirky Wall Clocks",
    "Quiet Running Shoes",
    "Quinoa Salad Mixes",
    "Quilted Yoga Mats",
    "Quahog Pearls Jewelry",
    "Quick-drying Paints",
    "Quince Scented Candles",
    "Quilted Oven Mitts",
    "Quail Farming Supplies",
    "Quality Quizzes",
    "Quokka-themed Stationery",
    "Quince Liqueur",
    "Quinoa Pasta",
    "Quadruple Monitor Stands",
    "Quilted Hammocks",
    "Quilted Steering Wheel Covers",
    "Quinoa Cookbook",
    "Quokka Art Prints",
    "Quince Bonsai Trees",
    "Quiet Electric Guitars",
    "Quilted Picnic Blankets",
    "Quartz Crystal Jewelry",
    "Quality Outdoor Quoits",
    "Retro Clothing",
    "Running Shoes",
    "Rustic Decor",
    "Robotics Kits",
    "Rock Music Vinyl",
    "Reading Glasses",
    "Reusable Bags",
    "Rainwear",
    "Remote Control Toys",
    "Recycled Crafts",
    "Radiant Skincare",
    "Racing Bikes",
    "Relaxation Tools",
    "Rugs and Carpets",
    "Raspberry Pi Accessories",
    "Reptile Supplies",
    "Record Players",
    "Romantic Novels",
    "Rustic Furniture",
    "Riding Gear",
    "Retro Gaming Consoles",
    "Reusable Water Bottles",
    "Rattan Furniture",
    "Robot Vacuums",
    "Rechargeable Batteries",
    "Rock Climbing Gear",
    "Rainforest Plants",
    "Running Apparel",
    "Recipe Books",
    "Rose Gold Jewelry",
    "Rural Landscapes Art",
    "Rice Cookers",
    "Railway Models",
    "Recumbent Bikes",
    "Raw Honey",
    "Ramen Noodles",
    "Remote Working Gadgets",
    "Recycled Paper Products",
    "Rustic Lighting",
    "Resin Art Supplies",
    "Roomba Accessories",
    "Riding Lawn Mowers",
    "Rustic Kitchenware",
    "Reclaimed Wood Decor",
    "Roller Skates",
    "Rattan Planters",
    "Running Socks",
    "Reed Diffusers",
    "Rock Salt Lamps",
    "Rainbow Decor",
    "Sporting Goods",
    "Smart Home Devices",
    "Sustainable Fashion",
    "Stationery Supplies",
    "Swimwear and Accessories",
    "Snack Foods",
    "Sneakers and Footwear",
    "Self-Care Products",
    "Ski and Snowboard Gear",
    "Streetwear Clothing",
    "Smartphone Gadgets",
    "Surfing Equipment",
    "Scented Candles",
    "Sci-Fi Books",
    "Specialty Coffee",
    "Small Appliances",
    "Sculptures and Statues",
    "Solar-Powered Gadgets",
    "Science Kits",
    "Skin Care Products",
    "Sustainable Living",
    "Soccer Gear",
    "Storage Solutions",
    "Stereo Systems",
    "Silk Bedding",
    "Safety Gear",
    "Street Art Prints",
    "Summer Dresses",
    "Smartwatches",
    "Subscription Boxes",
    "Science Fiction Movies",
    "Statement Jewelry",
    "Sustainable Home Decor",
    "Smart Lighting",
    "Snowboarding Apparel",
    "Study Desks",
    "Sustainable Beauty",
    "Snorkeling Gear",
    "Smart Backpacks",
    "Swiss Watches",
    "Sleepwear Collection",
    "Seeds and Gardening",
    "Surround Sound Systems",
    "Skincare Sets",
    "Street Photography Books",
    "Safari Adventure Gear",
    "Specialty Teas",
    "Synthetic Wigs",
    "Tableware",
    "Tech Gadgets",
    "Tennis Equipment",
    "Travel Accessories",
    "Trendy Fashion",
    "Tea Blends",
    "Tool Sets",
    "Tropical Decor",
    "Toddler Toys",
    "Trekking Gear",
    "Training Equipment",
    "Tote Bags",
    "Traditional Art",
    "Tactical Gear",
    "Trendy Footwear",
    "Turntables",
    "Tactical Clothing",
    "Throw Pillows",
    "Timeless Watches",
    "Trendsetting Jewelry",
    "Turbans and Scarves",
    "Thai Cuisine Ingredients",
    "Trampoline Accessories",
    "Trendy Sunglasses",
    "Tumbling Mats",
    "Tech Books",
    "Trench Coats",
    "Telescope Accessories",
    "Trendy Stationery",
    "Toy Robots",
    "Turkish Delights",
    "Tropical Plants",
    "Textile Art",
    "Travel Books",
    "Tropical Fruits",
    "Tiki Bar Accessories",
    "Themed Board Games",
    "Tactical Knives",
    "Teak Furniture",
    "Travel Maps",
    "Turquoise Jewelry",
    "Tailoring Supplies",
    "Trendy Headphones",
    "Tango Music CDs",
    "Terrariums",
    "Truck Accessories",
    "Thai Massage Tools",
    "Track Suits",
    "Treasure Chests",
    "Trendy Backpacks",
    "Urban Fashion",
    "Unique Jewelry",
    "Unisex Accessories",
    "Underwater Photography",
    "Upcycled Decor",
    "Ultra-light Backpacks",
    "USB Gadgets",
    "Umbrella Designs",
    "Urban Gardening",
    "Unbreakable Dinnerware",
    "Unusual Art",
    "Upcycled Furniture",
    "Universal Chargers",
    "Unisex Footwear",
    "Unicorn-themed Products",
    "Ukulele Accessories",
    "Unique Watches",
    "Utility Knives",
    "Ultrasonic Aromatherapy",
    "UV Protection Clothing",
    "Upcycled Bags",
    "Unisex Fragrances",
    "Uplifting Books",
    "Unconventional Stationery",
    "Unusual Gadgets",
    "Urban Cycling Gear",
    "Upcycled Jewelry",
    "U-shaped Pillows",
    "Unicorn Merchandise",
    "Ultimate Gaming Setups",
    "Upcycled Clothing",
    "Unique Planters",
    "Under-the-bed Storage",
    "Unisex Hats",
    "Upbeat Music Albums",
    "Unusual Pet Products",
    "Uplifting Art Prints",
    "Unbreakable Phone Cases",
    "Unusual Wall Clocks",
    "Underground Music Vinyl",
    "Unique Fitness Equipment",
    "Unusual Sneaker Designs",
    "Underwater Drones",
    "Ultra-modern Lighting",
    "Unconventional Cookware",
    "Uplifting Quotes",
    "Unusual Teas",
    "Unexplored Travel Destinations",
    "Vacation Packages",
    "Vintage Clothing",
    "Vegan Beauty Products",
    "Video Game Consoles",
    "Virtual Reality Gadgets",
    "Vinyl Records",
    "Vegetarian Snacks",
    "Vehicle Parts and Accessories",
    "Vitamin Supplements",
    "Volleyball Equipment",
    "Vintage Decor",
    "Valentine's Day Gifts",
    "Vibrant Art Prints",
    "Voice Activated Devices",
    "Vegan Footwear",
    "Vineyard Tours",
    "Victorian-era Collectibles",
    "Vision Care Products",
    "Venetian Masks",
    "Vehicle Maintenance Tools",
    "Vivid Color Paintings",
    "Vegetable Seeds",
    "Vehicle Insurance Plans",
    "Vintage Watches",
    "Virtual Cooking Classes",
    "Vlogging Equipment",
    "Velvet Apparel",
    "Vitality Boosting Teas",
    "Versatile Backpacks",
    "Vintage Photography",
    "Virtual Fitness Classes",
    "Vitamin-Infused Skincare",
    "Venomous Snake Encounters",
    "Vast Mountain Landscapes",
    "Vegan Cookbooks",
    "Vivid LED Lighting",
    "Voice-controlled Smart Homes",
    "Volleyball Apparel",
    "Victorian-style Furniture",
    "Vibrating Massage Tools",
    "Volcano Exploration",
    "Vinyl Flooring Options",
    "Vintage Book Collections",
    "Vehicle Tracking Systems",
    "Vast Ocean Views",
    "Vegetable Spiralizers",
    "Vibrant Yoga Mats",
    "Vivid Sunset Photography",
    "Vegan Chocolate Delights",
    "Winter Fashion",
    "Wireless Electronics",
    "Workout Gear",
    "Wine Accessories",
    "Wall Art Decor",
    "Wooden Furniture",
    "Wrist Watches",
    "Wedding Supplies",
    "Water Sports Equipment",
    "Weightlifting Gear",
    "Woven Rugs",
    "Wellness Products",
    "Writing Instruments",
    "Wildlife Photography",
    "Wholesome Snacks",
    "Women's Activewear",
    "Woolen Blankets",
    "Wall Clocks",
    "Weekend Getaways",
    "Wireless Speakers",
    "Waffle Makers",
    "Wearable Tech",
    "Woodworking Tools",
    "Woven Baskets",
    "Wine Tasting Kits",
    "Walking Shoes",
    "Wind Instruments",
    "Work-from-home Essentials",
    "Woven Wall Hangings",
    "Weighted Blankets",
    "Wellness Retreats",
    "Web Development Books",
    "Woolen Socks",
    "Whiskey Glasses",
    "World Music",
    "Wall Paintings",
    "Winter Sports Gear",
    "Wine Cellar Accessories",
    "Women's Handbags",
    "Wok Pans",
    "Watercolor Art Supplies",
    "Wildflower Seeds",
    "Wireless Chargers",
    "Woven Scarves",
    "Wine and Cheese Sets",
    "Wooden Chess Sets",
    "Wellness Journals",
    "Wearable Art",
    "Xbox Games",
    "Xerophyte Plants",
    "X-ray Accessories",
    "Xylophone Instruments",
    "Xenon Lighting",
    "Xenophobia Books",
    "Xylitol Products",
    "Xenon Goggles",
    "X-ray Machines",
    "Xylazine Medications",
    "Xeriscape Tools",
    "X-ray Films",
    "Xenomorph Collectibles",
    "X-ray Technicians Apparel",
    "X-ray Inspection Devices",
    "Xenon Car Lights",
    "X-ray Protection Gear",
    "Xylography Art Supplies",
    "Xenon Flashlights",
    "Xerographic Printers",
    "X-ray Dyes",
    "X-ray Vision Comics",
    "Xenogenic Transplants",
    "Xylography Prints",
    "Xenon Gas Canisters",
    "X-ray Diffraction Kits",
    "Xerophyte Seeds",
    "Xenotransplantation Books",
    "X-ray Crystallography Tools",
    "Xylophonists Gear",
    "Xenon Arcade Games",
    "X-ray Markers",
    "Xerophilous Plants",
    "Xenophobia Films",
    "Xylophone Sheet Music",
    "X-ray Developers",
    "Xenon Cartridges",
    "Xerothermic Appliances",
    "X-ray Artifacts",
    "Xylography Workshops",
    "Xenolith Specimens",
    "X-ray Viewers",
    "Xerox Machines",
    "Xenophobe Board Games",
    "X-ray Emission Spectrometers",
    "Xylography Engravings",
    "Xenophiles Collectibles",
    "X-ray Fluoroscopy Kits",
    "Xerographic Toner",
    "Xylitol Chewing Gum",
    "Yoga Equipment",
    "Youth Clothing",
    "Yarn and Knitting Supplies",
    "Yummy Snacks",
    "Yellow Decor",
    "Yearly Planners",
    "Yoga Apparel",
    "Yacht Accessories",
    "Yoga Mats",
    "Youth Sports Gear",
    "Yoga Accessories",
    "Yoga Retreats",
    "Yoga DVDs",
    "Yogurt Makers",
    "Yoga Classes",
    "Yoga Books",
    "Yoga Blocks",
    "Yoga Retreat Packages",
    "Yoga Clothing",
    "Yummy Desserts",
    "Yoga Props",
    "Yoga Instructors",
    "Yoga Bolsters",
    "Yoga Blankets",
    "Yoga Wheels",
    "Yoga Retreat Apparel",
    "Yellow Fashion",
    "Youthful Skincare",
    "Yoga Meditation Accessories",
    "Yoga Retreat Destinations",
    "Yoga Bags",
    "Yoga for Beginners",
    "Yoga Therapy Books",
    "Yoga Retreat Planning",
    "Yoga Teacher Training",
    "Yoga Retreat Gear",
    "Yummy Smoothies",
    "Yoga Mat Cleaners",
    "Yoga Music",
    "Yoga Towels",
    "Yoga Philosophy Books",
    "Yoga Art Prints",
    "Yoga Apparel for Men",
    "Yoga Apparel for Women",
    "Yoga and Meditation Apps",
    "Yoga Retreat Workshops",
    "Yoga Retreat Certifications",
    "Yoga and Wellness Retreats",
    "Zen Meditation Tools",
    "Zodiac-themed Gifts",
    "Zero-Waste Products",
    "Zipline Adventure Tours",
    "Zesty Flavored Snacks",
    "Zumba Fitness Apparel",
    "Zoo Membership Subscriptions",
    "Zircon Jewelry",
    "Zesty Citrus Candles",
    "Zigzag Patterned Textiles",
    "Ziplining Gear",
    "Zephyr-inspired Home Decor",
    "Zambian Art and Crafts",
    "Zebra Print Accessories",
    "Zesty Lemonade Mixes",
    "Zithers and Accessories",
    "Zen Garden Kits",
    "Zesty Orange Skincare",
    "Zinc Supplements",
    "Zoo Animal Costumes",
    "Zombie-themed Board Games",
    "Zinfandel Wine Selections",
    "Zesty Lime-flavored Drinks",
    "Zirconium Kitchen Utensils",
    "Zoom-ready Fashion",
    "Zebrawood Furniture",
    "Zumba Dance DVDs",
    "Zero-Gravity Chairs",
    "Zesty Raspberry Sweets",
    "Zebu Leather Products",
    "Ziggurat-shaped Architecture Models",
    "Zestful Bath Bombs",
    "Zany Party Decorations",
    "Zither Sheet Music",
    "Zesty Jalapeño Snacks",
    "Zoo-themed Children's Books",
    "Zamboni-inspired Cleaning Tools",
    "Zirconium Jewelry",
    "Zesty Grapefruit Scents",
    "Zoo Animal Wall Art",
    "Zambra Dance Lessons",
    "Zesty Mango Desserts",
    "Zipline Adventure Photography",
    "Zirconium-coated Cookware",
    "Zumba Fitness Classes",
    "Zephyr-inspired Fashion",
    "Zinnia Flower Seeds",
    "Zoo Membership Gift Cards",
    "Zesty Lemon-lime Beverages",
    "0-Day Exploits",
    "3D Printing Accessories",
    "4K Monitors",
    "7-Minute Workouts",
    "8-Bit Art",
    "90s Fashion",
    "9-to-5 Essentials",
    "2-in-1 Laptops",
    "5G Technology",
    "1-Person Tents",
    "3D Animation Software",
    "4th of July Decorations",
    "80s Music Albums",
    "6-Pack Carriers",
    "3-Ingredient Recipes",
    "9-Volt Batteries",
    "0 Gravity Chairs",
    "2-Piece Swimsuits",
    "4-Season Sleeping Bags",
    "7 Wonders Board Game",
    "8-Track Tape Players",
    "90Hz Refresh Rate Phones",
    "1-Step Hair Dryers",
    "5-Panel Caps",
    "2-Drawer Nightstands",
    "4-Leaf Clover Jewelry",
    "7-Up Soda Flavors",
    "8-Ball Pool Games",
    "9-Drawer Dressers",
    "0-Calorie Sweeteners",
    "3-Tier Cake Stands",
    "4-Wheel Drive Vehicles",
    "6-String Guitars",
    "3-Point Lighting Kits",
    "9-Point AF Systems",
    "2-Carat Diamond Rings",
    "5-Star Hotels",
    "1-Click Ordering",
    "4-Door Refrigerators",
    "7-Days Detox Plans",
    "8-Bit Video Games",
    "90-Minute Delivery",
    "6-Pack Abs Workouts",
    "3D Movie Glasses",
    "9th Gen Intel Processors",
    "0-Gravity Yoga",
    "2-Tone Kitchen Cabinets",
    "4-Layer Chocolate Cakes",
    "7-Layer Bean Dips",
    "8mm Film Cameras",
    "9-Foot Christmas Trees"
]

export default Allstores;