# 🍕 Cheesy Crust Pizza — Next.js Artisanal Pizzeria & Gemini AI Customer Assistant

A modern, unique, and ultra-premium **Artisanal Woodfired Pizzeria website** and **AI Customer Assistant Chatbot** built with **Next.js (App Router)**, **Vanilla CSS Design Tokens**, and **Google Gemini 3.8 Flash**.

---

## 🌟 Key Features

- **Prompt Engineering Showcase**: Demonstrates the vital difference between:
  1. **User Prompt**: What the customer types in real-time in the chat box.
  2. **System Prompt (Hidden)**: The instructions controlling the AI's **Persona & Role**, **Store Info & Menu**, and **Strict Guardrails**.
- **The 3 Pillars of Cheesy Crust System Prompt**:
  - 🎭 **Persona & Role**: Cheerful, helpful, appetizing order assistant speaking English, Urdu, and Roman Urdu.
  - 📋 **Store Info**: Large Pepperoni ($15), Medium Veggie ($12), Garlic Bread ($5), Delivery: 30–45 mins.
  - 🛡️ **Guardrails**:
    - **Never offer free items** under any circumstance.
    - **Only answer food and delivery questions** (deflects off-topic queries like coding or math).
- **Interactive System Prompt Inspector**: Dedicated modal allowing users to inspect the behind-the-scenes system instruction payload.
- **Full Fast Food Features**:
  - Filterable categorized menu with high-resolution food photography.
  - Interactive slide-over cart drawer with live subtotal and promo code (`CHEESY10` for 10% off).
  - Fast-food kitchen order tracking simulation (Received ➔ Woodfired Baking ➔ Out for 30-45m Delivery).
  - Quick action to add items directly to cart from AI chatbot responses.

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/sk5471291-stack/Cheesy-Crust-Pizza.git
cd Cheesy-Crust-Pizza
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env.local` file in the root directory:
```bash
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-3.8-flash
NEXT_PUBLIC_APP_NAME="Cheesy Crust Pizza"
```

### 4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Project Architecture

```
├── app/
│   ├── api/chat/route.js     # Next.js App Router API route for Gemini 3.8 Flash
│   ├── globals.css           # Vanilla CSS tokens, glassmorphism, animations
│   ├── layout.js             # Metadata, fonts, and responsive viewport
│   └── page.js               # Main pizzeria storefront page
├── components/
│   ├── Navbar.js             # Sticky header with cart badge and AI trigger
│   ├── Hero.js               # High-impact hero section with pizza image
│   ├── PromptArchitectureSection.js # Interactive User vs System Prompt demo
│   ├── MenuSection.js        # Categorized pizza menu with pricing
│   ├── StoreInfoSection.js   # Delivery promise, store hours, and kitchen story
│   ├── CartDrawer.js         # Slide-out interactive cart with promo codes
│   ├── OrderSuccessModal.js  # Live fast-food kitchen tracking modal
│   ├── SystemPromptModal.js  # System prompt inspector with 3-pillar breakdown
│   ├── ChatbotWidget.js      # Floating Gemini 3.8 Flash AI Assistant
│   ├── ReviewsSection.js     # Customer testimonials
│   └── Footer.js             # Store info and footer navigation
├── lib/
│   └── pizzaData.js          # Store info, system prompt, and menu data
└── public/
    └── images/               # Generated high-resolution artisanal food photos
```

---

## 📜 License
MIT
