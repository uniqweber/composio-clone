const img_01 = "/images/home-funnel-filled.webp";
const img_02 = "/images/home-circle-filled.webp";
const img_03 = "/images/home-code-filled.webp";
const img_04 = "/images/home-gravity-filled.webp";
const img_05 = "/images/home-stack-filled.webp";

export const slides = [
    {
        id: 2,
        title: "Tool Observability",
        subtitle: "Track every tool execution and trigger event in real-time from a single, unified dashboard.",
        img: img_04,
    },
    {
        id: 3,
        title: "Plug and Play",
        subtitle: "You can us with any language, any llm and all the frameworks you love (or hate)",
        img: img_05,
    },

    {
        id: 4,
        title: "Quick to Start — Effortless to Scale",
        subtitle: "We can help you scale to billions of tool calls effortlessly",
        img: img_01,
    },
    {
        id: 5,
        title: "Agent First Documentation  ",
        subtitle: "Our docs and examples are agent first should be easy enough for humans",
        img: img_03,
    },
    {
        id: 1,
        title: "Agent Auth",
        subtitle: "Let us manage all the headaches of auth for your tools",
        img: img_02,
    },
];

export const getCarouselStyle = (index: number, currentSlide: number, totalSlides: number) => {
    let transform = "";
    let zIndex = 1;
    let border = "";
    let grayscale = "";

    const position = index - currentSlide;

    if (position === 0) {
        transform = "translateX(0px) scale(1)";
        zIndex = 5;
        border = "#7C7A78";
        grayscale = "grayscale(0%)";
    } else if (position === -1 || position === totalSlides - 1) {
        transform = "translateX(-64px) scale(0.9)";
        zIndex = 4;
        border = "#C6C3C0";
        grayscale = "grayscale(100%)";
    } else if (position === 1 || position === -(totalSlides - 1)) {
        transform = "translateX(64px) scale(0.9)";
        zIndex = 4;
        border = "#C6C3C0";
        grayscale = "grayscale(100%)";
    } else if (position === -2 || position === totalSlides - 2) {
        transform = "translateX(-122px) scale(0.8)";
        zIndex = 3;
        border = "#C6C3C0";
        grayscale = "grayscale(100%)";
    } else if (position === 2 || position === -(totalSlides - 2)) {
        transform = "translateX(122px) scale(0.8)";
        zIndex = 3;
        border = "#C6C3C0";
        grayscale = "grayscale(100%)";
    } else {
        transform = "translateX(180px) scale(0.7)";
        zIndex = 2;
        border = "#C6C3C0";
        grayscale = "grayscale(100%)";
    }

    return {transform, zIndex, border, grayscale};
};

export const codeLines = [
    "",
    "const connectionRequest = await",
    'composio.toolkits.authorize(userId, "github");',
    "",
    "const redirectUrl =",
    "connectionRequest.redirectUrl;",
    "",
    "const connectedAccount = await",
    "connectionRequest.waitForConnection();",
    "",
    "const tools = await composio.tools.get(userId, {",
    '  toolkits: ["github"],',
    "});",
    "",
    "const response = await openai.chat.completions.create(",
    "{",
    '  model: "gpt-4o-mini",',
    '  messages: [{ role: "user", content: "Star the',
    '    composio repository on GitHub" }],',
    "  tools: tools,",
    '  tool_choice: "auto",',
    "});",
];
