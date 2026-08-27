import { NextRequest, NextResponse } from "next/server"

const PROMPTS: Record<string, (brand: string, productHint: string) => string> = {
  preopt: (brand, productHint) =>
    `You are an AI SMS agent for ${brand}, a ${productHint} brand. Write a short, natural SMS conversation between the AI agent and a customer who opted into SMS but hasn't purchased yet. The agent's goal is to understand the customer's goal and convert them to a subscription. Keep it realistic, conversational, max 5 exchanges. No emojis. Brand voice: direct, helpful, not pushy. Return JSON: { "messages": [{"role":"agent","text":"..."},{"role":"customer","text":"..."},...] }`,
  cart: (brand, productHint) =>
    `You are an AI SMS agent for ${brand}, a ${productHint} brand. Write a natural SMS conversation triggered 90 minutes after cart abandonment. The agent asks what stopped them (not a discount push), uncovers an objection, and converts to subscription. Max 5 exchanges. No emojis. Return JSON: { "messages": [{"role":"agent","text":"..."},{"role":"customer","text":"..."},...] }`,
  post: (brand, productHint) =>
    `You are an AI SMS agent for ${brand}, a ${productHint} brand. Write a natural SMS conversation sent 48 hours after a one-time purchase. Starts as a customer service check-in, transitions naturally to a subscription offer. Max 5 exchanges. No emojis. Return JSON: { "messages": [{"role":"agent","text":"..."},{"role":"customer","text":"..."},...] }`,
  day18: (brand, productHint) =>
    `You are an AI SMS agent for ${brand}, a ${productHint} brand. Write a natural SMS conversation at day 18 post-purchase. Customer is approaching the end of their supply. Agent checks in on results and transitions to a subscription reorder. Max 5 exchanges. No emojis. Return JSON: { "messages": [{"role":"agent","text":"..."},{"role":"customer","text":"..."},...] }`,
  failed: (brand, productHint) =>
    `You are an AI SMS agent for ${brand}, a ${productHint} brand. Write a short, natural voice call script / SMS conversation for a failed subscription payment recovery. Tone: helpful heads-up, not collections. Resolve the payment and confirm the shipment. Max 4 exchanges. No emojis. Return JSON: { "messages": [{"role":"agent","text":"..."},{"role":"customer","text":"..."},...] }`,
  cancel: (brand, productHint) =>
    `You are an AI SMS agent for ${brand}, a ${productHint} brand. Write a natural SMS conversation when a customer initiates cancellation. Agent asks one question to identify the real reason, then offers the right retention response (pause, frequency change, or swap — not just a discount). Max 5 exchanges. No emojis. Return JSON: { "messages": [{"role":"agent","text":"..."},{"role":"customer","text":"..."},...] }`,
}

export async function POST(req: NextRequest) {
  const { convKey, brand, productHint } = await req.json()

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: "API key not configured" }, { status: 500 })
  }

  const promptFn = PROMPTS[convKey]
  if (!promptFn) {
    return NextResponse.json({ error: "Unknown conversation key" }, { status: 400 })
  }

  const prompt = promptFn(brand, productHint)

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 800,
        system:
          "You generate realistic AI sales conversations for DTC subscription brands. Always return valid JSON only with no markdown or preamble.",
        messages: [{ role: "user", content: prompt }],
      }),
    })

    if (!res.ok) {
      return NextResponse.json({ error: "Upstream error" }, { status: 502 })
    }

    const data = await res.json()
    const text = data.content?.[0]?.text || ""
    const clean = text.replace(/```json|```/g, "").trim()
    const parsed = JSON.parse(clean)
    return NextResponse.json(parsed)
  } catch {
    return NextResponse.json({ error: "Failed to generate conversation" }, { status: 500 })
  }
}
