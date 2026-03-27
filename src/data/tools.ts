export type ToolCategory =
  | "All Tools"
  | "Image Generation"
  | "Code Assistants"
  | "Writing"
  | "Video"
  | "Audio"
  | "Productivity";

export type PricingModel = "Free" | "Freemium" | "Paid" | "Beta";

export interface Tool {
  id: string; // fallback
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  websiteUrl: string;
  category: ToolCategory;
  pricing: PricingModel;
  tags: string[];
  features: string[];
  pros: string[];
  cons: string[];
  verified?: boolean;
  featured: boolean;
  addedAt: string;
  iconType: "image" | "material-symbol";
  iconValue: string;
  iconBgColor?: string;
  iconTextColor?: string;
}

export const tools: Tool[] = [
  {
    id: "midjourney",
    slug: "midjourney",
    name: "Midjourney",
    tagline: "High-quality AI image generation",
    description: "High-quality AI image generation via Discord. Known for artistic and photorealistic outputs.",
    longDescription: "Midjourney is an independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species. Their main product is an AI program that generates images from natural language descriptions, widely celebrated for its artistic flair and photorealistic fidelity.",
    websiteUrl: "https://midjourney.com",
    category: "Image Generation",
    pricing: "Paid",
    tags: ["Image Generation", "AI Art", "Discord"],
    features: ["Discord Integration", "High Resolution Upscaling", "Custom Ratios", "V6 Photorealism"],
    pros: ["Extremely high artistic quality", "Vast community", "Continuous updates"],
    cons: ["Requires Discord interface", "No robust API", "Strict content filters"],
    verified: true,
    featured: true,
    addedAt: "2024-01-15T00:00:00Z",
    iconType: "image",
    iconValue: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkyKNDYt5h7YocCPpQpw6S8p8aw_sjdgYfATlwJQ4I7j_zOMyO_VvZexrQuGV1WZjQEbz7KIXhrMwxQgPJhiyZK_l1574vSL4vbQmfItLWZhkOWHdjvohUewOb2Tm408ydzsaii49zywulLMuq4KSQThpUBCfEIA6ZqHoNCioL_V6lSOfrRrLVScCrX7TAcU2OEkl45cv_byIzg-V7k-iEF-5G0WpCWWEozW7UtAXtZo_c7TjsKxd4X4fEtdNM_6FxK9zMC8k7i4U",
  },
  {
    id: "cursor",
    slug: "cursor",
    name: "Cursor",
    tagline: "The AI-first code editor",
    description: "The AI-first code editor. Built to make you extraordinarily productive with Copilot++ and Chat.",
    longDescription: "Cursor is a fork of VS Code tailored specifically for AI-driven software development. It features advanced auto-complete via Copilot++, multi-file reasoning, and an integrated chat system that understands your entire codebase out of the box.",
    websiteUrl: "https://cursor.sh",
    category: "Code Assistants",
    pricing: "Freemium",
    tags: ["Development", "IDE", "Code Assistant"],
    features: ["Copilot++", "Codebase Chat", "Command K editing", "VS Code Extension Compatibility"],
    pros: ["Familiar VS Code UI", "Understands full codebase context", "Fast inline code generation"],
    cons: ["Premium tier needed for optimal models", "Occasional context window limits"],
    verified: false,
    featured: true,
    addedAt: "2024-02-01T00:00:00Z",
    iconType: "material-symbol",
    iconValue: "code",
  },
  {
    id: "chatgpt",
    slug: "chatgpt",
    name: "ChatGPT",
    tagline: "Conversational AI model",
    description: "Conversational AI model developed by OpenAI capable of generating human-like text responses.",
    longDescription: "ChatGPT is OpenAI's flagship conversational interface. Using the GPT-4 infrastructure, it can draft emails, write code, answer questions, analyze data, and engage in meaningful, context-aware dialogue over extended conversational sessions.",
    websiteUrl: "https://chat.openai.com",
    category: "Writing",
    pricing: "Freemium",
    tags: ["LLM", "Chatbot", "Writing", "General Purpose"],
    features: ["GPT-4o access", "Data Analysis", "Image Generation (DALL-E 3)", "Custom GPTs"],
    pros: ["Industry-leading models", "Versatile capabilities", "Excellent mobile app"],
    cons: ["Knowledge cutoff limitations without internet", "Subscription required for peak times"],
    verified: true,
    featured: true,
    addedAt: "2023-11-01T00:00:00Z",
    iconType: "material-symbol",
    iconValue: "chat",
    iconBgColor: "bg-[#10A37F]",
    iconTextColor: "text-white",
  },
  {
    id: "runway-gen-2",
    slug: "runway-gen-2",
    name: "Runway Gen-2",
    tagline: "Next generation text-to-video",
    description: "Text-to-video and image-to-video generation platform with advanced editing capabilities.",
    longDescription: "Runway Gen-2 is a revolutionary multi-modal AI system that generates novel videos with text, images, or video clips. It offers cinematic control via motion brushes and camera movements, serving as a comprehensive suite for modern video creators.",
    websiteUrl: "https://runwayml.com",
    category: "Video",
    pricing: "Freemium",
    tags: ["Video Generation", "Animation", "VFX"],
    features: ["Text to Video", "Image to Video", "Motion Brush", "Director Mode"],
    pros: ["Leading video generation quality", "Robust web-based editing suite", "Precise motion controls"],
    cons: ["Credit system can be expensive", "Generations are relatively short"],
    verified: false,
    featured: false,
    addedAt: "2024-03-01T00:00:00Z",
    iconType: "material-symbol",
    iconValue: "movie",
  },
  {
    id: "elevenlabs",
    slug: "elevenlabs",
    name: "ElevenLabs",
    tagline: "Realistic text-to-speech",
    description: "Realistic text-to-speech and voice cloning software for creators and publishers.",
    longDescription: "ElevenLabs provides the most realistic AI speech software available today. Utilizing deep learning technology, it can clone voices from a few minutes of audio and render incredibly lifelike voiceovers capturing nuanced human emotion and intonation.",
    websiteUrl: "https://elevenlabs.io",
    category: "Audio",
    pricing: "Freemium",
    tags: ["TTS", "Voice Cloning", "Audio"],
    features: ["Voice Cloning", "Multilingual TTS", "Emotion rendering", "Projects workspace"],
    pros: ["Unmatched voice realism", "Fast generation speeds", "Easy to use UI"],
    cons: ["Character limits on free tier", "Cloning requires paid tier"],
    verified: false,
    featured: false,
    addedAt: "2024-02-15T00:00:00Z",
    iconType: "material-symbol",
    iconValue: "mic",
  },
  {
    id: "vercel-v0",
    slug: "vercel-v0",
    name: "Vercel v0",
    tagline: "Generative UI system",
    description: "Generative UI system by Vercel. Describe an interface, and it generates React/Tailwind code.",
    longDescription: "Vercel v0 utilizes AI to generate copy-and-paste ready React components. By simply describing the UI you want in natural language, v0 produces accessible, responsive components using shadcn/ui and Tailwind CSS.",
    websiteUrl: "https://v0.dev",
    category: "Code Assistants",
    pricing: "Beta",
    tags: ["UI Generation", "React", "Frontend"],
    features: ["Instant Component Generation", "Shadcn underlying framework", "Iteration via chat", "Version history"],
    pros: ["Saves hours of boilerplate UI coding", "Outputs production-ready markup", "Easy copy/paste integrations"],
    cons: ["Sometimes hallucinates complex interactivity", "Requires tweaking for custom design systems"],
    verified: false,
    featured: false,
    addedAt: "2024-03-10T00:00:00Z",
    iconType: "material-symbol",
    iconValue: "data_object",
  },
  {
    id: "notion-ai",
    slug: "notion-ai",
    name: "Notion AI",
    tagline: "Connected workspace AI assistant",
    description: "Connected AI assistant built directly into your Notion workspace to write, edit, and summarize.",
    longDescription: "Notion AI is deeply integrated into the Notion ecosystem, allowing users to leverage language models directly on their existing notes and databases. It can summarize long documents, extract action items, and generate new content without leaving the workspace.",
    websiteUrl: "https://notion.so",
    category: "Productivity",
    pricing: "Paid",
    tags: ["Note-taking", "Workspace", "Writing"],
    features: ["Document Summarization", "Action item extraction", "Tone adjustment", "Translation"],
    pros: ["Seamless UX integration", "Works directly on your data", "Clean interface"],
    cons: ["Requires existing Notion setup", "Additional subscription on top of premium workspace"],
    verified: false,
    featured: false,
    addedAt: "2024-01-20T00:00:00Z",
    iconType: "material-symbol",
    iconValue: "edit_document",
  },
  {
    id: "krea",
    slug: "krea",
    name: "Krea",
    tagline: "Real-time AI for creatives",
    description: "Real-time AI generation tool for creative professionals, featuring upscaling and custom model training.",
    longDescription: "Krea represents a new paradigm in real-time creative tools. It pairs live drawing boards with latent diffusion models, allowing instantaneous visualization as you sketch. Beyond real-time generation, it offers unparalleled upscaling and image enhancement features.",
    websiteUrl: "https://krea.ai",
    category: "Image Generation",
    pricing: "Freemium",
    tags: ["Real-time Generation", "Upscaling", "Design"],
    features: ["Real-time canvas rendering", "AI Upscaling", "Pattern Generation", "Live camera to image"],
    pros: ["Incredibly fast visual feedback", "Best-in-class upscaler", "Intuitive canvas tooling"],
    cons: ["Can be intensive on local resources occasionally", "Slight learning curve for real-time prompting"],
    verified: false,
    featured: false,
    addedAt: "2024-03-05T00:00:00Z",
    iconType: "material-symbol",
    iconValue: "brush",
  },
  {
    id: "perplexity",
    slug: "perplexity",
    name: "Perplexity",
    tagline: "AI-powered search engine",
    description: "AI-powered search engine that provides direct answers with citations from the web.",
    longDescription: "Perplexity AI is a conversational search engine acting an an alternative to traditional Google search. It synthesizes real-time web results to provide comprehensive answers, strictly citing its sources as inline footnotes for verification and deeper diving.",
    websiteUrl: "https://perplexity.ai",
    category: "Productivity",
    pricing: "Freemium",
    tags: ["Search", "Research", "LLM"],
    features: ["Real-time web search", "Source citations", "Pro search mode", "Copilot clarification"],
    pros: ["Excellent for research", "Reduces hallucinations via strict citing", "Fast and ad-free experience"],
    cons: ["Less effective for purely creative writing", "Pro search limits on free tier"],
    verified: true,
    featured: false,
    addedAt: "2024-02-10T00:00:00Z",
    iconType: "material-symbol",
    iconValue: "auto_awesome",
  }
];

export function getAllTools(): Tool[] {
  return tools;
}

export function getFeaturedTools(): Tool[] {
  return tools.filter(t => t.featured);
}

export function getRecentTools(): Tool[] {
  // Sort descending by addedAt
  return [...tools].sort((a, b) => new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime());
}

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find(t => t.slug === slug);
}

export function getToolsByCategory(categorySlug: string): Tool[] {
  return tools.filter(t => t.category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "") === categorySlug);
}

export function getAllCategories(): ToolCategory[] {
  return ["All Tools", "Image Generation", "Code Assistants", "Writing", "Video", "Audio", "Productivity"];
}
