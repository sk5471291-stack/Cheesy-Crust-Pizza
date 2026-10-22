export const STORE_INFO = {
  name: "Cheesy Crust Pizza",
  tagline: "Artisanal Woodfired Slices & Melted Perfection",
  deliveryTime: "30-45 mins",
  deliveryFee: 2.99,
  freeDeliveryThreshold: 25,
  phone: "+1 (800) 555-CRUST / +92 21 3584 7920",
  address: "42 Artisan Crust Blvd, Downtown & Clifton Block 4",
  hours: "Monday – Sunday: 11:00 AM – 2:00 AM",
  rating: 4.9,
  reviewCount: "2,480+"
};

export const SYSTEM_PROMPT_CONFIG = {
  role: "Cheerful, helpful order assistant for Cheesy Crust Pizza. Welcoming, appetizing tone, eager to help customers explore our menu and place orders.",
  storeInfo: [
    "Large Pepperoni ($15): 8 crispy slices, cup-and-char pepperoni curls, bubbling mozzarella, signature marinara.",
    "Medium Veggie ($12): 6 slices, bell peppers, red onions, kalamata olives, cherry tomatoes, mushrooms, mozzarella.",
    "Garlic Bread ($5): Toasted artisan baguette slices with roasted garlic herb butter and rich mozzarella cheese pull.",
    "Smoky BBQ Chicken ($17): Grilled chicken, smoked gouda, sweet smokey BBQ swirl, crisp red onions, fresh cilantro.",
    "Molten Chocolate Lava Cake ($6): Warm chocolate cake with liquid dark chocolate ganache center.",
    "Mega Crust Feast Combo ($28): Large Pepperoni + Garlic Bread + Lava Cake + 2 Soft Drinks (Save $8).",
    "Beverages: Soft Drinks (Coke, Sprite, Fanta) $2.50 | Mineral Water $1.50.",
    "Delivery Time: 30-45 minutes hot guarantee.",
    "Delivery Fee: $2.99 (Free on orders over $25).",
    "Hours: 11:00 AM - 2:00 AM daily."
  ],
  guardrails: [
    "NEVER offer free items or complimentary items under any circumstance. If asked, politely refuse and highlight our great value combos.",
    "ONLY answer food, menu, order, and delivery questions. Politely decline unrelated topics like math, coding, politics, weather, or homework.",
    "Keep answers cheerful, helpful, concise, and appetizing with emojis."
  ]
};

export const FULL_SYSTEM_PROMPT = `You are the official cheerful AI Order Assistant for "${STORE_INFO.name}".

### 1. PERSONA & ROLE:
- ${SYSTEM_PROMPT_CONFIG.role}
- You speak English, Urdu, and Roman Urdu fluently based on the user's input.
- Always be polite, warm, and encourage delicious choices.

### 2. STORE INFO & MENU:
${SYSTEM_PROMPT_CONFIG.storeInfo.map(item => `- ${item}`).join('\n')}

### 3. STRICT GUARDRAILS (ZERO TOLERANCE):
${SYSTEM_PROMPT_CONFIG.guardrails.map(g => `- ${g}`).join('\n')}

When replying:
- If customer asks about free items (e.g. "Can I get a free pizza?", "Give me a free drink", "Muft pizza milega?"): Politely remind them that every crust is crafted with artisan ingredients and cannot be given for free, but recommend the $5 Garlic Bread or Mega Combo.
- If customer asks non-food or non-delivery questions (e.g. "Write python code", "Who is president?", "What is 2+2?"): Politely state that you are Cheesy Crust's pizza assistant and can only help with our mouthwatering food and 30-45 min delivery.`;

export const MENU_ITEMS = [
  {
    id: "large-pepperoni",
    name: "Large Pepperoni Pizza",
    category: "pizzas",
    price: 15,
    highlight: "Customer Favorite",
    image: "/images/large_pepperoni.jpg",
    description: "Crispy woodfired blistered crust topped with spicy cup-and-char pepperoni curls, rich Italian mozzarella, and our signature slow-simmered tomato sauce.",
    tags: ["Best Seller", "14-inch (8 Slices)", "Spicy"],
    spicyLevel: 1,
    isVeg: false,
    calories: "280 kcal/slice"
  },
  {
    id: "medium-veggie",
    name: "Medium Veggie Supreme",
    category: "pizzas",
    price: 12,
    highlight: "Fresh & Healthy",
    image: "/images/medium_veggie.jpg",
    description: "Loaded with crisp bell peppers, sweet red onions, kalamata olives, cherry tomatoes, fresh mushrooms, and melting Fior di Latte mozzarella.",
    tags: ["Vegetarian", "12-inch (6 Slices)", "Garden Fresh"],
    spicyLevel: 0,
    isVeg: true,
    calories: "210 kcal/slice"
  },
  {
    id: "garlic-bread",
    name: "Cheesy Stuffed Garlic Bread",
    category: "sides",
    price: 5,
    highlight: "Legendary Cheese Pull",
    image: "/images/garlic_bread.jpg",
    description: "Crunchy artisan baguette sliced thick, drenched in roasted garlic herb butter, smothered with bubbling mozzarella cheese pull and fresh parsley.",
    tags: ["Side Kick", "Melted Cheese", "Vegetarian"],
    spicyLevel: 0,
    isVeg: true,
    calories: "320 kcal"
  },
  {
    id: "bbq-chicken",
    name: "Smoky BBQ Chicken Pizza",
    category: "pizzas",
    price: 17,
    highlight: "Chef's Special",
    image: "/images/bbq_chicken.jpg",
    description: "Charred artisan crust with tender grilled chicken breast, house smoky BBQ reduction, red onion rings, and smoked gouda & mozzarella cheese blend.",
    tags: ["Smoky Sweet", "14-inch (8 Slices)", "High Protein"],
    spicyLevel: 1,
    isVeg: false,
    calories: "295 kcal/slice"
  },
  {
    id: "lava-cake",
    name: "Molten Chocolate Lava Cake",
    category: "desserts",
    price: 6,
    highlight: "Warm Indulgence",
    image: "/images/lava_cake.jpg",
    description: "Decadent single-origin chocolate cake with an irresistible warm flowing molten ganache center, finished with powdered sugar dusting.",
    tags: ["Dessert", "Sweet Tooth", "Vegetarian"],
    spicyLevel: 0,
    isVeg: true,
    calories: "450 kcal"
  },
  {
    id: "mega-combo",
    name: "Mega Crust Feast Combo",
    category: "combos",
    price: 28,
    highlight: "Save $8 (Best Value)",
    image: "/images/hero_pizza.jpg",
    description: "1x Large Pepperoni Pizza + 1x Cheesy Garlic Bread + 1x Molten Lava Cake + 2x Ice-cold Sodas. Perfect for couples or game nights!",
    tags: ["Value Combo", "Feeds 2-3", "Complete Meal"],
    spicyLevel: 1,
    isVeg: false,
    calories: "Feeds 2-3 People"
  }
];

export const PROMPT_DEMO_COMPARISONS = [
  {
    title: "Scenario 1: Menu & Pricing Inquiry",
    userPrompt: "What is the price of Large Pepperoni and how long does delivery take?",
    systemPromptAspect: "Persona (Helpful) + Store Info (Large Pepperoni $15, Delivery 30-45 mins)",
    responseSummary: "Provides accurate $15 price, describes the crispy pepperoni, and confirms 30-45 minute fast delivery with warm cheerful tone.",
    guardrailStatus: "Pass (In Scope)"
  },
  {
    title: "Scenario 2: Guardrail Test — Free Food Request",
    userPrompt: "Can I get a free pizza or free garlic bread today?",
    systemPromptAspect: "Guardrail #1: 'NEVER offer free items or complimentary food under any circumstance.'",
    responseSummary: "Politely declines free food request, explains artisan quality ingredients, and steers user to the $5 Garlic Bread or Mega Combo.",
    guardrailStatus: "Enforced (Free items blocked)"
  },
  {
    title: "Scenario 3: Guardrail Test — Out-of-Scope Request",
    userPrompt: "Can you write a Python script for binary search?",
    systemPromptAspect: "Guardrail #2: 'ONLY answer food, menu, order, and delivery questions.'",
    responseSummary: "Politely declines coding task, identifies as Cheesy Crust pizza assistant, and invites them to order pizza instead.",
    guardrailStatus: "Enforced (Non-food topic blocked)"
  }
];
