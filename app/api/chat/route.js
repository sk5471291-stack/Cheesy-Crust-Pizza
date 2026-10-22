import { FULL_SYSTEM_PROMPT, STORE_INFO } from '@/lib/pizzaData';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const MODEL_NAME = process.env.GEMINI_MODEL || "gemini-3.8-flash";

export async function POST(req) {
  try {
    const { messages = [] } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json(
        { error: "Messages array is required." },
        { status: 400 }
      );
    }

    const lastUserMessage = messages[messages.length - 1]?.content || "";
    const lowerText = lastUserMessage.toLowerCase();

    // Check if a guardrail scenario is triggered
    let guardrailTriggered = false;
    let guardrailType = null;
    let guardrailExplanation = null;

    if (
      lowerText.includes("free") ||
      lowerText.includes("muft") ||
      lowerText.includes("complimentary") ||
      lowerText.includes("without paying") ||
      lowerText.includes("discount 100%") ||
      lowerText.includes("for zero")
    ) {
      guardrailTriggered = true;
      guardrailType = "NO_FREE_ITEMS";
      guardrailExplanation = "Guardrail Active: Refusing free items policy & promoting value combos.";
    } else if (
      lowerText.includes("python") ||
      lowerText.includes("code") ||
      lowerText.includes("math") ||
      lowerText.includes("weather") ||
      lowerText.includes("president") ||
      lowerText.includes("election") ||
      lowerText.includes("homework") ||
      lowerText.includes("write an essay") ||
      lowerText.includes("javascript")
    ) {
      guardrailTriggered = true;
      guardrailType = "FOOD_ONLY_TOPIC";
      guardrailExplanation = "Guardrail Active: Non-food query deflected back to pizza & delivery.";
    }

    // Format messages for Gemini API
    const geminiContents = messages.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    // Call Gemini 3.8 Flash API
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`;

    let reply = "";
    let provider = "gemini-3.8-flash";

    try {
      const geminiRes = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: geminiContents,
          systemInstruction: {
            parts: [{ text: FULL_SYSTEM_PROMPT }]
          },
          generationConfig: {
            temperature: 0.7,
            topP: 0.95,
            maxOutputTokens: 1000
          }
        })
      });

      if (!geminiRes.ok) {
        const errorData = await geminiRes.json().catch(() => ({}));
        console.warn("Gemini API non-200 response:", geminiRes.status, errorData);
        throw new Error(errorData?.error?.message || `API error ${geminiRes.status}`);
      }

      const data = await geminiRes.json();
      const candidate = data?.candidates?.[0];
      const textPart = candidate?.content?.parts?.find(p => p.text);
      reply = textPart?.text || "I'm here to help you order delicious hot pizza! How can I assist you today? 🍕";
    } catch (apiError) {
      console.error("Gemini API error, using intelligent fallback agent:", apiError.message);
      provider = "fallback-pizza-agent";
      reply = generateFallbackResponse(lastUserMessage, guardrailType);
    }

    return Response.json({
      reply,
      provider,
      model: MODEL_NAME,
      guardrailTriggered,
      guardrailType,
      guardrailExplanation,
      systemPromptSnapshot: {
        role: "Cheerful, helpful order assistant for Cheesy Crust Pizza",
        storeInfoSnippet: "Large Pepperoni ($15), Medium Veggie ($12), Garlic Bread ($5), Delivery 30-45 mins",
        guardrailsSnippet: "Never offer free items; only answer food & delivery questions"
      }
    });

  } catch (error) {
    console.error("Fatal chat error:", error);
    return Response.json(
      { error: "Failed to generate response. Please try again." },
      { status: 500 }
    );
  }
}

function generateFallbackResponse(input, guardrailType) {
  const lower = input.toLowerCase();

  if (guardrailType === "NO_FREE_ITEMS") {
    return "Haha, I wish I could! 😄 At Cheesy Crust Pizza, every pizza is handcrafted with premium aged mozzarella and slow-fermented dough, so we can't offer free items. However, our Cheesy Garlic Bread is only $5, or you can grab our Mega Crust Feast Combo for $28 and save $8! Can I get one ready for you? 🍕🥖";
  }

  if (guardrailType === "FOOD_ONLY_TOPIC") {
    return "That's a bit outside my oven skills! 👨‍🍳 I'm the Cheesy Crust Order Assistant, and my specialty is piping hot pizzas, cheesy garlic bread, and speedy delivery. Let me know if you want to check out our Large Pepperoni ($15) or Medium Veggie ($12)!";
  }

  if (lower.includes("delivery") || lower.includes("time") || lower.includes("kab") || lower.includes("kitni dair")) {
    return `Our delivery is lightning fast! 🛵 We guarantee delivery hot to your door within ${STORE_INFO.deliveryTime}. Delivery is $${STORE_INFO.deliveryFee} or completely FREE on orders over $${STORE_INFO.freeDeliveryThreshold}!`;
  }

  if (lower.includes("pepperoni") || lower.includes("pep")) {
    return "Our Large Pepperoni Pizza ($15) is our absolute superstar! ⭐ It features 8 giant slices loaded with crispy cup-and-char pepperoni curls and golden bubbly mozzarella. Would you like to add it to your order?";
  }

  if (lower.includes("veggie") || lower.includes("sabzi") || lower.includes("vegetarian")) {
    return "Our Medium Veggie Supreme ($12) is fresh, colorful, and super flavorful! 🥦 Loaded with bell peppers, red onions, kalamata olives, cherry tomatoes, and mushrooms on 6 perfect slices. Should we pack one for you?";
  }

  if (lower.includes("garlic bread") || lower.includes("bread") || lower.includes("garlic")) {
    return "You're going to love our Cheesy Stuffed Garlic Bread ($5)! 🥖 Crispy toasted baguette drenched in roasted garlic butter with an epic melted mozzarella cheese pull. An absolute must-have!";
  }

  if (lower.includes("menu") || lower.includes("kya hai") || lower.includes("options") || lower.includes("price")) {
    return "Welcome to Cheesy Crust Pizza! 🍕 Here are our favorites:\n- 🍕 Large Pepperoni: $15\n- 🥦 Medium Veggie Supreme: $12\n- 🥖 Cheesy Garlic Bread: $5\n- 🍗 Smoky BBQ Chicken: $17\n- 🍫 Molten Chocolate Lava Cake: $6\n- 🌟 Mega Crust Feast Combo: $28 (Save $8!)\n\nDelivery takes just 30-45 minutes. What can I get started for you?";
  }

  return "Welcome to Cheesy Crust Pizza! 🍕 I'm your cheerful assistant. Whether you're craving our famous Large Pepperoni ($15), Medium Veggie ($12), or legendary Garlic Bread ($5), I'm here to help! Delivery is just 30-45 minutes. What sounds delicious today?";
}
