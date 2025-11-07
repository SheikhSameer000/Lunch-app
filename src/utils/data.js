export const restaurants = [
  {
    id: 1,
    name: "Kolachi",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    title: "The Spirit of Karachi — Pakistani & BBQ Delights",
    timing: { open: "12:00 PM", close: "12:00 AM" },
  },
  {
    id: 2,
    name: "Cafe Aylanto",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    title: "Modern Mediterranean Dining Experience",
    timing: { open: "1:00 PM", close: "11:30 PM" },
  },
  {
    id: 3,
    name: "Butt Karahi",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
    title: "Authentic Lahori Karahi & BBQ",
    timing: { open: "12:00 PM", close: "2:00 AM" },
  },
  {
    id: 4,
    name: "Salt’n Pepper",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    title: "Classic Pakistani Fine Dining Since 1983",
    timing: { open: "12:00 PM", close: "11:00 PM" },
  },
  {
    id: 5,
    name: "OPTp",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    title: "One Potato Two Potato — Best Crispy Fries in Town",
    timing: { open: "11:00 AM", close: "12:00 AM" },
  },
  {
    id: 6,
    name: "Burger O'Clock",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    title: "Juicy Gourmet Burgers & Shakes",
    timing: { open: "12:00 PM", close: "2:00 AM" },
  },
  {
    id: 7,
    name: "Qadri Nalli Biryani",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
    title: "Famous Karachi Nalli Biryani",
    timing: { open: "11:00 AM", close: "11:00 PM" },
  },
  {
    id: 8,
    name: "Café Beirut",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    title: "Authentic Lebanese Cuisine in Lahore",
    timing: { open: "1:00 PM", close: "12:00 AM" },
  },
  {
    id: 9,
    name: "Ginsoy Extreme Chinese",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754",
    title: "Desi Chinese with a Twist",
    timing: { open: "12:00 PM", close: "11:30 PM" },
  },
  {
    id: 10,
    name: "Bundu Khan",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e",
    title: "Traditional Pakistani Cuisine & BBQ",
    timing: { open: "11:00 AM", close: "12:00 AM" },
  },
  {
    id: 11,
    name: "The Patio",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
    title: "Elegant Outdoor Dining & Fusion Food",
    timing: { open: "1:00 PM", close: "11:00 PM" },
  },
  {
    id: 12,
    name: "Café Zouk",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    title: "Trendy Urban Café — Continental & Desi Mix",
    timing: { open: "12:30 PM", close: "12:00 AM" },
  },
];

export const allRestaurantDishes = [
  {
    restaurantId: 1, // Kolachi
    dishes: [
      {
        id: 1,
        name: "Signature Chicken White Karahi",
        title: "Creamy Yogurt-Based Chicken Karahi",
        description:
          "Tender chicken cooked in a mild white gravy made with yogurt, butter, garlic, and selected spices.",
        price: 1850,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
        category: "karahi",
      },
      {
        id: 2,
        name: "Kolachi Special Malai Boti",
        title: "Soft & Creamy Charcoal Grilled Bites",
        description:
          "Boneless chicken marinated in a creamy blend of yogurt and mild spices, grilled over charcoal.",
        price: 1150,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
        category: "bbq",
      },
      {
        id: 3,
        name: "Beef Seekh Kabab",
        title: "Smoky Charcoal Grilled Seekh Kababs",
        description:
          "Juicy minced beef kababs grilled for a smoky, authentic BBQ flavor.",
        price: 950,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
        category: "bbq",
      },
      {
        id: 4,
        name: "Kolachi Chicken Handi",
        title: "Traditional Pakistani Handi",
        description:
          "Creamy tomato-based chicken handi cooked in a clay pot for authentic flavor.",
        price: 1780,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
        category: "handi",
      },
      {
        id: 5,
        name: "Beef Bihari Boti",
        title: "Tender Marinated Beef Strips",
        description:
          "Thin-cut beef strips marinated in bihari spices and grilled for a soft smoky taste.",
        price: 1100,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
        category: "bbq",
      },
      {
        id: 6,
        name: "Naan / Paratha",
        title: "Oven & Tandoor Breads",
        description:
          "Fresh baked naan, roghni naan, and crisp tandoori paratha.",
        price: 60,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
        category: "bread",
      },
    ],
  },

  {
    restaurantId: 2, // Cafe Aylanto
    dishes: [
      {
        id: 1,
        name: "Chicken Parmesan",
        title: "Crispy Parmesan Chicken Fillet",
        description:
          "Breaded chicken breast topped with marinara sauce and melted parmesan cheese, served with pasta or sautéed veggies.",
        price: 1950,
        
      },
      {
        id: 2,
        name: "Spicy Fettuccine Alfredo",
        title: "Creamy Spicy Alfredo Pasta",
        description:
          "Fettuccine pasta tossed in creamy alfredo sauce with a mild spicy kick for a balanced flavor.",
        price: 1750,
      },
      {
        id: 3,
        name: "Moroccan Chicken",
        title: "Herb-Spiced Grilled Chicken",
        description:
          "Grilled chicken marinated in Moroccan herbs, served with rice and sautéed vegetables.",
        price: 2150,
      },
    ],
  },

  {
    restaurantId: 3, // Butt Karahi
    dishes: [
      {
        id: 1,
        name: "Special Butt Chicken Karahi",
        title: "Original Lahore-Style Karahi",
        description:
          "Fresh chicken cooked in tomatoes, desi ghee, and signature Butt Karahi spices for strong traditional flavor.",
        price: 1600,
      },
      {
        id: 2,
        name: "Bone-in Mutton Karahi",
        title: "Desi Ghee Mutton Karahi",
        description:
          "Tender mutton pieces slow cooked in desi ghee with green chili and black pepper.",
        price: 2600,
      },
      {
        id: 3,
        name: "Chicken Fry Chargha",
        title: "Whole Deep-Fried Chargha",
        description:
          "Whole marinated chicken deep fried for a crispy outer layer and juicy inside.",
        price: 1500,
      },
    ],
  },

  {
    restaurantId: 4, // Salt'n Pepper
    dishes: [
      {
        id: 1,
        name: "Chicken Tandoori Handi",
        title: "Creamy Clay Pot Chicken",
        description:
          "Boneless chicken cooked in rich gravy and finished with a tandoori smokey touch.",
        price: 1550,
      },
      {
        id: 2,
        name: "Beef Achari Handi",
        title: "Tangy Pickle-Flavored Handi",
        description:
          "Spicy beef handi with pickle spices that offer a tangy and bold flavor.",
        price: 1850,
      },
      {
        id: 3,
        name: "Grilled Chicken Sandwich",
        title: "Soft Sandwich with Grilled Chicken",
        description:
          "Lightly seasoned grilled chicken served between toasted bread with sauces.",
        price: 950,
      },
    ],
  },

  {
    restaurantId: 5, // OPTp
    dishes: [
      {
        id: 1,
        name: "Crispy Fries Box",
        title: "Fresh Cut French Fries",
        description:
          "Golden crispy fries seasoned with classic OPTp spice blend.",
        price: 450,
      },
      {
        id: 2,
        name: "Zing Chicken Burger",
        title: "Crispy Zinger Style Burger",
        description:
          "Crispy chicken fillet paired with mayo and fresh lettuce in a soft bun.",
        price: 690,
      },
      {
        id: 3,
        name: "Masala Fries Bucket",
        title: "Spicy Seasoned Fries",
        description:
          "Large bucket of fries coated in OPTp’s signature masala seasoning.",
        price: 750,
      },
    ],
  },

  {
    restaurantId: 6, // Burger O'Clock
    dishes: [
      {
        id: 1,
        name: "Big Bang Burger",
        title: "Thick Juicy Beef Patty Burger",
        description:
          "A flavorful beef patty with cheese, lettuce, and signature sauce.",
        price: 890,
      },
      {
        id: 2,
        name: "Mushroom Melt Burger",
        title: "Creamy Mushroom Topped Burger",
        description:
          "Juicy patty topped with melted cheese and sautéed mushrooms.",
        price: 920,
      },
      {
        id: 3,
        name: "Zesty Chicken Crunch Burger",
        title: "Crispy Chicken Burger with Zesty Sauce",
        description:
          "Crispy chicken fillet paired with tangy and mildly spicy sauce.",
        price: 860,
      },
    ],
  },

  {
    restaurantId: 7, // Qadri Nalli Biryani
    dishes: [
      {
        id: 1,
        name: "Single Plate Nalli Biryani",
        title: "Classic Pakistani Biryani",
        description:
          "Flavorful biryani with tender beef nalli cooked in aromatic spices.",
        price: 450,
      },
      {
        id: 2,
        name: "Half Kg Nalli Biryani",
        title: "Medium Family Serving",
        description:
          "Half kg biryani cooked with bone marrow and strong spice profile.",
        price: 900,
      },
      {
        id: 3,
        name: "1 Kg Family Pack",
        title: "Large Family Biryani Portion",
        description: "1kg biryani with rich flavor and bone marrow chunks.",
        price: 1600,
      },
    ],
  },

  {
    restaurantId: 8, // Café Beirut
    dishes: [
      {
        id: 1,
        name: "Chicken Shawarma Platter",
        title: "Middle Eastern Shawarma Plate",
        description:
          "Sliced grilled chicken served with rice, garlic sauce, and bread.",
        price: 1150,
      },
      {
        id: 2,
        name: "Hummus with Pita",
        title: "Creamy Hummus Dip",
        description:
          "Blended chickpeas with tahini and olive oil served with pita bread.",
        price: 550,
      },
      {
        id: 3,
        name: "Beef Kabab with Rice",
        title: "Grilled Kababs with aromatic rice",
        description: "Charcoal-grilled beef kababs served with Lebanese rice.",
        price: 1850,
      },
    ],
  },

  {
    restaurantId: 9, // Ginsoy Extreme Chinese
    dishes: [
      {
        id: 1,
        name: "Dynamite Chicken",
        title: "Crispy Chicken in Chili Sauce",
        description: "Lightly fried chicken tossed in tangy-spicy sauce.",
        price: 950,
      },
      {
        id: 2,
        name: "Chicken Chowmein",
        title: "Chinese Stir-Fried Noodles",
        description: "Noodles stir-fried with chicken and vegetables.",
        price: 850,
      },
      {
        id: 3,
        name: "Szechuan Chicken Gravy",
        title: "Spicy Szechuan Style Gravy",
        description: "Szechuan-style spicy chicken served with gravy.",
        price: 1050,
      },
    ],
  },

  {
    restaurantId: 10, // Bundu Khan
    dishes: [
      {
        id: 1,
        name: "Chicken Reshmi Kabab",
        title: "Soft Creamy Chicken Kababs",
        description:
          "Minced chicken kababs with a creamy texture and mild spices.",
        price: 980,
      },
      {
        id: 2,
        name: "Mutton Chops BBQ",
        title: "Grilled Mutton Chops",
        description: "Tender mutton chops marinated with spices and grilled.",
        price: 2200,
      },
      {
        id: 3,
        name: "Chicken Tikka Chest",
        title: "Smoky BBQ Tikka",
        description: "Chicken chest piece marinated in BBQ spices and grilled.",
        price: 480,
      },
    ],
  },

  {
    restaurantId: 11, // The Patio
    dishes: [
      {
        id: 1,
        name: "Grilled Lemon Chicken",
        title: "Lightly Seasoned Grilled Chicken",
        description:
          "Grilled chicken breast with lemon seasoning served with rice.",
        price: 1650,
      },
      {
        id: 2,
        name: "Thai Basil Chicken Bowl",
        title: "Asian Rice Bowl",
        description: "Stir-fried chicken with basil served over jasmine rice.",
        price: 1450,
      },
      {
        id: 3,
        name: "Chicken Dynamite Pasta",
        title: "Creamy Spicy Pink Sauce Pasta",
        description:
          "Pasta tossed in creamy pink sauce with spicy chicken topping.",
        price: 1700,
      },
    ],
  },

  {
    restaurantId: 12, // Café Zouk
    dishes: [
      {
        id: 1,
        name: "Zouk Special Steak",
        title: "Signature Tender Steak",
        description: "Premium beef steak cooked to your choice with sides.",
        price: 2400,
      },
      {
        id: 2,
        name: "Creamy Tarragon Chicken",
        title: "Creamy Herb Chicken",
        description: "Chicken breast cooked in creamy tarragon sauce.",
        price: 1850,
      },
      {
        id: 3,
        name: "Peri Peri Grilled Sandwich",
        title: "Grilled Spicy Chicken Sandwich",
        description: "Grilled chicken sandwich flavored with peri peri sauce.",
        price: 960,
      },
    ],
  },
];
