const spreadPositions = {
  1: ["Focus"],
  3: ["Past", "Present", "Next Step"],
  5: ["Root", "Challenge", "Action", "Support", "Outcome"],
  7: ["Signal", "Block", "Hidden", "Action", "Support", "Shift", "Outcome"],
  10: ["Now", "Crossing", "Foundation", "Recent", "Crown", "Near", "Self", "Environment", "Hope", "Outcome"],
};

const majors = [
  ["0", "The Fool", "Major", "Start something without overthinking.", "Reduce commitments before starting anything new.", "young figure stepping off a glowing ledge"],
  ["I", "The Magician", "Major", "Use existing tools or resources.", "Remove tools that create friction.", "table with four glowing symbolic tools"],
  ["II", "The High Priestess", "Major", "Choose the task you feel drawn to.", "Investigate what you have been avoiding.", "veiled figure between two pillars"],
  ["III", "The Empress", "Major", "Do something comforting or creative.", "Remove overstimulation.", "glowing garden and flowing fabrics"],
  ["IV", "The Emperor", "Major", "Define boundaries or a clear plan.", "Loosen a rigid routine.", "throne with structured geometric forms"],
  ["V", "The Hierophant", "Major", "Study a reference or tutorial.", "Break a rule that no longer serves you.", "sage figure with an open book"],
  ["VI", "The Lovers", "Major", "Pick one task to commit to.", "End a conflicting commitment.", "two figures beneath a shared aura"],
  ["VII", "The Chariot", "Major", "Take decisive action.", "Stop forcing progress.", "chariot pulled by dual energies"],
  ["VIII", "Strength", "Major", "Work calmly and consistently.", "Rest before continuing.", "figure calming a glowing lion"],
  ["IX", "The Hermit", "Major", "Work alone or in silence.", "Seek guidance from someone else.", "lantern in a dark landscape"],
  ["X", "Wheel of Fortune", "Major", "Pivot to a different task.", "Stick with your current path.", "floating celestial wheel"],
  ["XI", "Justice", "Major", "Prioritise based on impact.", "Reconsider a choice.", "softly glowing scales"],
  ["XII", "The Hanged One", "Major", "Look at a problem from a new angle.", "Act immediately instead of thinking.", "serene suspended figure with halo"],
  ["XIII", "Death", "Major", "Remove something from your to-do list.", "Revive a discarded idea.", "white rose and transformative silhouette"],
  ["XIV", "Temperance", "Major", "Mix work with rest.", "Commit wholly to one thing.", "light pouring between two vessels"],
  ["XV", "The Devil", "Major", "Break a bad productivity habit.", "Remove guilt around resting.", "glowing chains breaking"],
  ["XVI", "The Tower", "Major", "Change direction drastically.", "Stabilise chaos.", "cracked tower with lightning"],
  ["XVII", "The Star", "Major", "Do something uplifting.", "Reduce unrealistic expectations.", "star pouring light"],
  ["XVIII", "The Moon", "Major", "Examine emotional blocks.", "Return to practical tasks.", "moonlit pool and twin towers"],
  ["XIX", "The Sun", "Major", "Recognise progress.", "Stop chasing perfection.", "radiant sun with joyful symbols"],
  ["XX", "Judgement", "Major", "Review your progress or inbox.", "Stop over-reviewing and act.", "glowing horn above rising figures"],
  ["XXI", "The World", "Major", "Finish a major task.", "Break the task into smaller steps.", "figure framed by a glowing wreath"],
];

const suits = {
  Wands: [
    ["Ace", "Start a small action", "Prepare instead of acting", "single glowing wand igniting fire"],
    ["Two", "Plan your next two steps", "Reduce choices", "two crossed wands forming a path"],
    ["Three", "Visualise your outcome", "Simplify expectations", "three wands facing a bright horizon"],
    ["Four", "Celebrate a micro-win", "Remove distractions", "four wands forming a celebratory arch"],
    ["Five", "Compete with yourself using a timer", "Stop unnecessary friction", "five playful chaotic wands"],
    ["Six", "Share progress", "Stop seeking validation", "victory wand with laurel"],
    ["Seven", "Defend your focus", "Let go of resistance", "wand atop a glowing hill"],
    ["Eight", "Do rapid-fire tasks", "Slow your pace", "eight wands shooting through air"],
    ["Nine", "Persevere for one last push", "Rest immediately", "wounded wand standing firm"],
    ["Ten", "Delegate or drop tasks", "Break burden into smaller parts", "bundle of ten heavy glowing wands"],
  ],
  Cups: [
    ["Ace", "Do something emotionally nourishing", "Identify what is draining you", "single glowing cup overflowing with light"],
    ["Two", "Connect with someone", "Set emotional boundaries", "two cups meeting gently"],
    ["Three", "Take a social micro-break", "Avoid overstimulation", "three cups in celebration"],
    ["Four", "Re-evaluate boredom or resistance", "Say yes to something new", "cup offered by a glowing hand"],
    ["Five", "Process a disappointment", "Reframe loss", "three spilled cups beside two glowing cups"],
    ["Six", "Return to something nostalgic", "Remove outdated habits", "childhood cups with flowers"],
    ["Seven", "Choose one idea only", "Stop fantasising", "seven floating glowing cups"],
    ["Eight", "Walk away from low-value tasks", "Revisit a neglected task", "figure leaving eight cups"],
    ["Nine", "Treat yourself", "Reduce indulgence", "nine cups floating joyfully"],
    ["Ten", "Appreciate your environment", "Reset domestic space", "rainbow arch of glowing cups"],
  ],
  Swords: [
    ["Ace", "Make a clear decision", "Avoid overthinking", "single glowing sword upright"],
    ["Two", "Pause before deciding", "Unblock stalled thought", "blindfold and two crossed swords"],
    ["Three", "Name your frustration", "Heal a misunderstanding", "heart pierced by glowing blades"],
    ["Four", "Take a mental rest", "Return from burnout", "swords resting beside a quiet figure"],
    ["Five", "Quit a losing battle", "Fix a small conflict", "chaotic sword scene simplified"],
    ["Six", "Shift into calmer thinking", "Face the issue instead of escaping", "boat crossing glowing waters"],
    ["Seven", "Work discreetly or privately", "Be transparent", "swords being carried away quietly"],
    ["Eight", "Release self-imposed limits", "Redefine the problem", "bound figure surrounded by swords"],
    ["Nine", "Acknowledge anxiety", "Reduce catastrophising", "figure waking from a glowing nightmare"],
    ["Ten", "Let a mental cycle end", "Recovery begins", "sword-ridden silhouette dissolving into light"],
  ],
  Pentacles: [
    ["Ace", "Do one practical task", "Delay material decisions", "single glowing pentacle coin"],
    ["Two", "Balance two responsibilities", "Drop one", "infinity loop juggling pentacles"],
    ["Three", "Collaborate", "Work alone", "three pentacles forming a structure"],
    ["Four", "Protect your time and energy", "Loosen your grip", "figure holding four coins tightly"],
    ["Five", "Ask for help", "Self-reliance restored", "two figures near a glowing window"],
    ["Six", "Give or receive support", "Rebalance giving", "scales with coins glowing"],
    ["Seven", "Evaluate long-term progress", "Stop checking results", "pentacles growing on a bush"],
    ["Eight", "Practice a skill", "Stop perfectionism", "apprentice crafting glowing coins"],
    ["Nine", "Enjoy the fruits of productivity", "Simplify luxury", "garden with nine glowing coins"],
    ["Ten", "Organise long-term systems", "Rebuild the foundation", "family legacy with glowing pentacles"],
  ],
};

const suitThemes = {
  Major: { accent: "#f3c766", base: "#e9d096", wash: "#fff1c0", text: "#251507", symbol: "#875d16" },
  Wands: { accent: "#f2995a", base: "#f3b06a", wash: "#ffe1a4", text: "#2c1307", symbol: "#c74d26" },
  Cups: { accent: "#50d4da", base: "#96dfe2", wash: "#e1fff4", text: "#061d23", symbol: "#1699b4" },
  Swords: { accent: "#d977c7", base: "#d9c2f0", wash: "#fff0ff", text: "#25122b", symbol: "#8d4db6" },
  Pentacles: { accent: "#8dde93", base: "#cae7a5", wash: "#f3ffd6", text: "#112513", symbol: "#568c34" },
};

const suitDetails = {
  Major: {
    lens: "archetype-level energy",
    domain: "the larger pattern behind your day",
    advice: "Treat this as the weather of the reading: it colors the other cards and asks for a conscious choice.",
  },
  Wands: {
    lens: "action and momentum",
    domain: "movement, courage, timing, and follow-through",
    advice: "This card is about converting energy into motion without letting urgency run the whole room.",
  },
  Cups: {
    lens: "emotional signal",
    domain: "mood, connection, inner resistance, and recovery",
    advice: "This card asks you to notice how the task feels, because the emotional texture is part of the instruction.",
  },
  Swords: {
    lens: "clarity and thought",
    domain: "decisions, mental loops, communication, and perspective",
    advice: "This card points to the story you are telling yourself and asks whether that story is still useful.",
  },
  Pentacles: {
    lens: "practical grounding",
    domain: "time, materials, habits, money, body, and real-world systems",
    advice: "This card wants a concrete next move that can be seen, scheduled, cleaned up, finished, or maintained.",
  },
};

const deck = [
  ...majors.map(([rank, name, suit, upright, reversed, image]) => ({
    id: slugify(name),
    rank,
    name,
    suit,
    upright,
    reversed,
    image,
  })),
  ...Object.entries(suits).flatMap(([suit, cards]) =>
    cards.map(([rank, upright, reversed, image]) => ({
      id: slugify(`${rank} of ${suit}`),
      rank,
      suit,
      name: rank === "Ace" ? `Ace of ${suit}` : `${rank} of ${suit}`,
      upright,
      reversed,
      image,
    }))
  ),
].map((card) => ({
  ...card,
  imageFiles: cardImageFiles(card.name),
}));

const state = {
  count: 3,
  shuffled: false,
  reading: [],
  question: "",
  activeCardId: "",
  codexPage: 0,
};

const appShell = document.querySelector(".app-shell");
const spread = document.querySelector("#spread");
const readingPanel = document.querySelector("#readingPanel");
const readingReport = document.querySelector("#readingReport");
const readingTitle = document.querySelector("#readingTitle");
const countValue = document.querySelector("#countValue");
const deckTotal = document.querySelector("#deckTotal");
const deckStack = document.querySelector("#deckStack");
const questionInput = document.querySelector("#questionInput");
const shareButton = document.querySelector("#shareButton");
const shareStatus = document.querySelector("#shareStatus");
const countOptions = Array.from(document.querySelectorAll(".count-option"));
const codexModal = document.querySelector("#codexModal");
const codexGrid = document.querySelector("#codexGrid");
const codexDetail = document.querySelector("#codexDetail");
const codexPageLabel = document.querySelector("#codexPageLabel");
const codexPageSize = 15;

deckTotal.textContent = deck.length;

function setCount(nextCount) {
  state.count = Math.max(1, Math.min(10, nextCount));
  countValue.textContent = state.count;
  countOptions.forEach((option) => {
    option.classList.toggle("is-active", Number(option.dataset.count) === state.count);
  });
}

function shuffleDeck() {
  state.shuffled = true;
  deckStack.classList.remove("is-shuffling");
  void deckStack.offsetWidth;
  deckStack.classList.add("is-shuffling");
  readingTitle.textContent = "The deck is awake. Draw when ready.";
  window.setTimeout(() => deckStack.classList.remove("is-shuffling"), 1700);
}

function drawReading() {
  if (!state.shuffled) {
    shuffleDeck();
  }

  state.question = questionInput.value.trim();
  const pool = [...deck];
  state.reading = Array.from({ length: state.count }, (_, index) => {
    const cardIndex = Math.floor(Math.random() * pool.length);
    const card = pool.splice(cardIndex, 1)[0];
    return {
      ...card,
      position: spreadPositions[state.count][index] || `Card ${index + 1}`,
      orientation: Math.random() > 0.32 ? "Upright" : "Reversed",
      spreadId: `${card.id}-${index}`,
    };
  });

  readingTitle.textContent = `${state.count}-card reading revealed.`;
  renderSpread();
  renderReadingReport();
  updateShareState("Reading ready to share.");
  showMeaning(state.reading[0]);
}

function resetReading() {
  state.shuffled = false;
  state.reading = [];
  state.question = "";
  state.activeCardId = "";
  questionInput.value = "";
  readingTitle.textContent = "Shuffle, then draw your reading.";
  renderSpread();
  readingPanel.innerHTML = `
    <p class="empty-kicker">Hover a revealed card</p>
    <h3>Card meanings appear here.</h3>
    <p>Choose a count, add an intention if you want, shuffle the deck, then draw. Each card carries an upright or reversed task from your Zaney Tarot system.</p>
  `;
  renderReadingReport();
  updateShareState("");
}

function renderSpread() {
  spread.innerHTML = "";

  if (!state.reading.length) {
    spread.innerHTML = `
      <div class="placeholder">
        <h3>The table is clear.</h3>
        <p>Select a reading size, shuffle the deck, and draw your next task path.</p>
      </div>
    `;
    return;
  }

  state.reading.forEach((card, index) => {
    const theme = suitThemes[card.suit];
    const article = document.createElement("article");
    article.className = "tarot-card";
    article.dataset.spreadId = card.spreadId;
    article.tabIndex = 0;
    article.style.setProperty("--card-accent", theme.accent);
    article.style.setProperty("--card-base", theme.base);
    article.style.setProperty("--card-wash", theme.wash);
    article.style.setProperty("--card-text", theme.text);
    article.style.setProperty("--card-symbol", theme.symbol);
    article.style.setProperty("--card-art", cardArt(card.suit, index));
    setCardImageProperties(article, card);
    article.style.animationDelay = `${index * 70}ms`;
    article.innerHTML = `
      <span class="generated-card-art" aria-hidden="true"></span>
      <span class="card-position">${card.position}</span>
      <span class="card-index"><span>${card.rank}</span><span>${card.suit}</span></span>
      <span class="card-name">${card.name}</span>
      <span class="card-orientation">${card.orientation}</span>
      <button type="button" aria-label="Show ${card.name} meaning"></button>
    `;
    article.addEventListener("mouseenter", () => showMeaning(card));
    article.addEventListener("focus", () => showMeaning(card));
    article.querySelector("button").addEventListener("click", () => showMeaning(card));
    spread.appendChild(article);
  });
}

function cardArt(suit, index) {
  const art = {
    Major: [
      "radial-gradient(circle at 50% 48%, #ffd86e 0 9%, transparent 10%), linear-gradient(150deg, #5ba0ff 0 48%, #f0ca65 49% 54%, #22376e 55%)",
      "radial-gradient(circle at 55% 42%, #ffffff 0 13%, transparent 14%), linear-gradient(140deg, #25345f, #78d3e9 52%, #ffe3a2)",
    ],
    Wands: [
      "linear-gradient(90deg, transparent 44%, #7b391d 45% 55%, transparent 56%), radial-gradient(circle at 50% 24%, #ffec8a 0 12%, #ef743f 13% 25%, transparent 26%), linear-gradient(#ffe29a, #f08b58)",
      "repeating-linear-gradient(70deg, transparent 0 18px, #7b391d 19px 25px), linear-gradient(#ffcd7e, #e8754d)",
    ],
    Cups: [
      "radial-gradient(ellipse at 50% 35%, #eefcff 0 23%, transparent 24%), linear-gradient(90deg, transparent 38%, #208ea2 39% 61%, transparent 62%), linear-gradient(#d6fff9, #71cfd7)",
      "radial-gradient(circle at 38% 35%, #ffffff 0 10%, transparent 11%), radial-gradient(circle at 62% 35%, #ffffff 0 10%, transparent 11%), linear-gradient(#cffff4, #62c3d7)",
    ],
    Swords: [
      "linear-gradient(90deg, transparent 47%, #6b438d 48% 52%, transparent 53%), linear-gradient(35deg, transparent 43%, #ffffff 44% 48%, transparent 49%), linear-gradient(#ffe7ff, #bfa0e5)",
      "repeating-linear-gradient(135deg, transparent 0 22px, #704b91 23px 27px), linear-gradient(#ffd8f6, #b9b1f0)",
    ],
    Pentacles: [
      "radial-gradient(circle at 50% 44%, #fff5a8 0 20%, #78b95c 21% 27%, transparent 28%), linear-gradient(#f4ffd4, #9ed68f)",
      "radial-gradient(circle at 32% 36%, #fff5a8 0 10%, transparent 11%), radial-gradient(circle at 68% 55%, #fff5a8 0 10%, transparent 11%), linear-gradient(#e8ffd0, #95d28a)",
    ],
  };
  return art[suit][index % 2];
}

function showMeaning(card) {
  state.activeCardId = card.spreadId;
  document.querySelectorAll(".tarot-card").forEach((element) => {
    element.classList.toggle("is-selected", element.dataset.spreadId === card.spreadId);
  });
  const current = punctuate(card.orientation === "Upright" ? card.upright : card.reversed);
  const uprightDetail = buildCardDescription(card, "Upright");
  const reversedDetail = buildCardDescription(card, "Reversed");
  readingPanel.innerHTML = `
    <p class="empty-kicker">${card.position} / ${card.suit}</p>
    <h3>${card.name}</h3>
    <p class="reading-focus">${current}</p>
    <div class="meaning-stack">
      <div class="meaning-block ${card.orientation === "Upright" ? "is-current" : ""}">
        <strong><span>Upright</span><i aria-hidden="true">Sun</i></strong>
        <p>${uprightDetail}</p>
      </div>
      <div class="meaning-block ${card.orientation === "Reversed" ? "is-current" : ""}">
        <strong><span>Reversed</span><i aria-hidden="true">Moon</i></strong>
        <p>${reversedDetail}</p>
      </div>
    </div>
    <p class="prompt-line"><span class="meta-label">Visual cue</span><br>${card.image}</p>
  `;
}

function renderReadingReport() {
  if (!state.reading.length) {
    readingReport.innerHTML = `
      <p class="empty-kicker">Whole Reading</p>
      <h3>Report appears after a draw.</h3>
      <p>Once the cards are revealed, this panel will pull the spread together into one interpretation.</p>
    `;
    return;
  }

  const report = buildReadingReport(state.reading);
  const question = state.question ? `<p class="question-line"><span>Intention</span>${escapeHtml(state.question)}</p>` : "";
  readingReport.innerHTML = `
    <p class="empty-kicker">Whole Reading</p>
    <h3>${report.title}</h3>
    ${question}
    <p class="report-lead">${report.lead}</p>
    <div class="report-grid" aria-label="Reading pattern summary">
      <div class="report-card">
        <span>Dominant current</span>
        <strong>${report.dominantCurrent}</strong>
        <p>${report.dominantMeaning}</p>
      </div>
      <div class="report-card">
        <span>Orientation</span>
        <strong>${report.orientation}</strong>
        <p>${report.orientationMeaning}</p>
      </div>
      <div class="report-card">
        <span>Flow</span>
        <strong>${report.flowTitle}</strong>
        <p>${report.flow}</p>
      </div>
    </div>
    <ol class="report-steps">
      ${report.steps.map((step) => `<li>${step}</li>`).join("")}
    </ol>
    <p class="prompt-line"><span class="meta-label">Integration</span><br>${report.integration}</p>
  `;
}

function updateShareState(message) {
  shareButton.disabled = !state.reading.length;
  shareStatus.textContent = message;
}

async function shareReading() {
  if (!state.reading.length) {
    updateShareState("Draw a reading first.");
    return;
  }

  const text = buildShareText();
  const url = window.location.href;

  try {
    if (navigator.share) {
      await navigator.share({
        title: "Zaney Tarot reading",
        text,
        url,
      });
      updateShareState("Reading shared.");
      return;
    }

    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(`${text}\n\n${url}`);
      updateShareState("Reading copied.");
      return;
    }

    updateShareState("Copy unavailable in this browser.");
  } catch (error) {
    updateShareState("Share cancelled.");
  }
}

function buildShareText() {
  const report = buildReadingReport(state.reading);
  const question = state.question ? [`Intention: ${state.question}`, ""] : [];
  const cards = state.reading.map((card) => {
    const task = punctuate(card.orientation === "Upright" ? card.upright : card.reversed);
    return `${card.position}: ${card.name} (${card.orientation}) - ${task}`;
  });

  return [
    "Zaney Tarot",
    `${state.reading.length}-card reading`,
    "",
    ...question,
    ...cards,
    "",
    `Whole reading: ${report.lead}`,
    `Integration: ${report.integration}`,
  ].join("\n");
}

function buildReadingReport(reading) {
  const suitCounts = reading.reduce((counts, card) => {
    counts[card.suit] = (counts[card.suit] || 0) + 1;
    return counts;
  }, {});
  const sortedSuits = Object.entries(suitCounts).sort((a, b) => b[1] - a[1]);
  const topCount = sortedSuits[0][1];
  const dominantSuits = sortedSuits.filter(([, count]) => count === topCount).map(([suit]) => suit);
  const dominantLabel = dominantSuits.length === 1 ? dominantSuits[0] : formatList(dominantSuits);
  const dominantDetails = suitDetails[dominantSuits[0]];
  const reversedCount = reading.filter((card) => card.orientation === "Reversed").length;
  const uprightCount = reading.length - reversedCount;
  const first = reading[0];
  const middle = reading[Math.floor((reading.length - 1) / 2)];
  const last = reading[reading.length - 1];
  const spreadName = `${reading.length}-card spread report`;

  return {
    title: spreadName,
    lead: `This reading gathers ${reading.length} cards into one pattern. It leans toward ${dominantLabel.toLowerCase()} energy, so the strongest through-line is ${dominantDetails.domain}.`,
    dominantCurrent: `${dominantLabel} x${topCount}`,
    dominantMeaning: `Read this as ${dominantDetails.lens}. ${dominantDetails.advice}`,
    orientation: `${uprightCount} upright / ${reversedCount} reversed`,
    orientationMeaning: orientationReport(uprightCount, reversedCount),
    flowTitle: reading.length === 1 ? "Single focus" : `${first.position} to ${last.position}`,
    flow:
      reading.length === 1
        ? `${first.name} is the whole message: ${lowercaseTask(first)}.`
        : `The spread opens with ${first.name}, turns through ${middle.name}, and lands on ${last.name}. That suggests moving from ${lowercaseTask(first)} toward ${lowercaseTask(last)}.`,
    steps: reading.map((card) => {
      const details = suitDetails[card.suit];
      return `<strong>${card.position}:</strong> ${card.name} (${card.orientation}) points to ${lowercaseTask(card)}. Through ${details.lens}, it speaks to ${details.domain}.`;
    }),
    integration: buildIntegrationLine(reading, first, middle, last),
  };
}

function orientationReport(uprightCount, reversedCount) {
  if (reversedCount === 0) {
    return "The spread is direct and outward-facing. Treat the guidance as ready to act on now.";
  }
  if (uprightCount === 0) {
    return "Every card is reversed, so the report is mostly about blocks, hidden needs, or energy that wants to be restored before action.";
  }
  if (reversedCount > uprightCount) {
    return "Reversed cards outweigh the upright cards, so the reading asks for repair, reflection, and clearing friction before pushing forward.";
  }
  if (uprightCount > reversedCount) {
    return "Upright cards lead the spread, with reversals acting as warnings or pressure points to handle gently.";
  }
  return "Upright and reversed cards are balanced, so the reading mixes action with reflection in equal measure.";
}

function buildIntegrationLine(reading, first, middle, last) {
  if (reading.length === 1) {
    return `Let ${first.name} be the whole prompt today: ${punctuate(lowercaseTask(first))}`;
  }

  const middlePhrase = middle === first || middle === last ? "" : ` Let ${middle.name} be the hinge of the reading: ${punctuate(lowercaseTask(middle))}`;
  return `Start with ${first.name}: ${punctuate(lowercaseTask(first))}${middlePhrase} Finish with ${last.name}: ${punctuate(lowercaseTask(last))}`;
}

function lowercaseTask(card) {
  const task = card.orientation === "Upright" ? card.upright : card.reversed;
  return task.charAt(0).toLowerCase() + task.slice(1).replace(/[.!?]$/, "");
}

function formatList(items) {
  if (items.length <= 1) {
    return items[0] || "";
  }
  if (items.length === 2) {
    return `${items[0]} and ${items[1]}`;
  }
  return `${items.slice(0, -1).join(", ")}, and ${items.at(-1)}`;
}

function openCodex() {
  codexModal.hidden = false;
  renderCodex();
  document.querySelector("#codexCloseButton").focus();
}

function closeCodex() {
  codexModal.hidden = true;
  document.querySelector("#codexButton").focus();
}

function renderCodex() {
  const pages = Math.ceil(deck.length / codexPageSize);
  state.codexPage = Math.max(0, Math.min(pages - 1, state.codexPage));
  const pageCards = deck.slice(state.codexPage * codexPageSize, (state.codexPage + 1) * codexPageSize);
  codexGrid.innerHTML = "";

  pageCards.forEach((card, index) => {
    const theme = suitThemes[card.suit];
    const button = document.createElement("button");
    button.className = "codex-card";
    button.type = "button";
    button.setAttribute("aria-label", `Show ${card.name}`);
    button.style.setProperty("--card-accent", theme.accent);
    button.style.setProperty("--card-base", theme.base);
    button.style.setProperty("--card-wash", theme.wash);
    button.style.setProperty("--card-text", theme.text);
    button.style.setProperty("--card-symbol", theme.symbol);
    button.style.setProperty("--card-art", cardArt(card.suit, index));
    setCardImageProperties(button, card);
    button.innerHTML = `
      <span class="generated-card-art" aria-hidden="true"></span>
      <span class="codex-rank">${card.rank}</span>
      <span class="codex-suit">${card.suit}</span>
      <span class="codex-name">${card.name}</span>
    `;
    button.addEventListener("mouseenter", () => renderCodexDetail(card));
    button.addEventListener("focus", () => renderCodexDetail(card));
    button.addEventListener("click", () => renderCodexDetail(card));
    codexGrid.appendChild(button);
  });

  codexPageLabel.textContent = `Page ${state.codexPage + 1}/${pages}`;
  document.querySelector("#codexPrevButton").disabled = state.codexPage === 0;
  document.querySelector("#codexNextButton").disabled = state.codexPage === pages - 1;
  renderCodexDetail(pageCards[0]);
}

function renderCodexDetail(card) {
  codexDetail.innerHTML = `
    <p class="empty-kicker">${card.suit}</p>
    <h3>${card.name}</h3>
    <p>${card.image}</p>
    <div class="meaning-stack">
      <div class="meaning-block is-current">
        <strong><span>Upright</span><i aria-hidden="true">Task</i></strong>
        <p>${buildCardDescription({ ...card, position: "Codex", orientation: "Upright" }, "Upright")}</p>
      </div>
      <div class="meaning-block">
        <strong><span>Reversed</span><i aria-hidden="true">Shadow</i></strong>
        <p>${buildCardDescription({ ...card, position: "Codex", orientation: "Reversed" }, "Reversed")}</p>
      </div>
    </div>
  `;
}

function buildCardDescription(card, orientation) {
  const details = suitDetails[card.suit];
  const task = orientation === "Upright" ? card.upright : card.reversed;
  const balance =
    orientation === card.orientation
      ? "Because this is the face shown in your spread, give it priority before you move to the next card."
      : "Keep this as the shadow meaning: it shows what can happen if the card's lesson gets ignored or overdone.";

  return `${punctuate(task)} In the ${card.position} position, ${card.name} reads as ${details.lens} around ${details.domain}. ${details.advice} ${balance}`;
}

function punctuate(text) {
  return /[.!?]$/.test(text) ? text : `${text}.`;
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function cardImageFiles(cardName) {
  const slug = slugify(cardName);
  return {
    anime: `assets/cards-generated/${slug}.png`,
    portrait: `assets/cards-portrait/${slug}.png`,
    minimal: `assets/cards-minimal/${slug}.png`,
    manga: `assets/cards-manga/${slug}.png`,
    "pixel-sheet": `assets/cards-pixel-sheet/${slug}.png`,
    "silver-pendant": `assets/cards-silver-pendant/${slug}.png`,
  };
}

function setCardImageProperties(element, card) {
  Object.entries(card.imageFiles).forEach(([style, file]) => {
    element.style.setProperty(`--card-image-${style}`, `url("${file}")`);
  });
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

document.querySelector("#decreaseCards").addEventListener("click", () => setCount(state.count - 1));
document.querySelector("#increaseCards").addEventListener("click", () => setCount(state.count + 1));
document.querySelector("#shuffleButton").addEventListener("click", shuffleDeck);
document.querySelector("#drawButton").addEventListener("click", drawReading);
document.querySelector("#resetButton").addEventListener("click", resetReading);
shareButton.addEventListener("click", shareReading);
document.querySelector("#visualModeSelect").addEventListener("change", (event) => {
  appShell.dataset.visualMode = event.target.value;
});
document.querySelector("#designSelect").addEventListener("change", (event) => {
  appShell.dataset.design = event.target.value;
});
document.querySelector("#cardStyleSelect").addEventListener("change", (event) => {
  appShell.dataset.cardStyle = event.target.value;
});
document.querySelector("#tableSelect").addEventListener("change", (event) => {
  appShell.dataset.table = event.target.value;
});
document.querySelector("#codexButton").addEventListener("click", openCodex);
document.querySelector("#codexCloseButton").addEventListener("click", closeCodex);
document.querySelector("#codexPrevButton").addEventListener("click", () => {
  state.codexPage -= 1;
  renderCodex();
});
document.querySelector("#codexNextButton").addEventListener("click", () => {
  state.codexPage += 1;
  renderCodex();
});
codexModal.addEventListener("click", (event) => {
  if (event.target === codexModal) {
    closeCodex();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !codexModal.hidden) {
    closeCodex();
  }
});

countOptions.forEach((option) => {
  option.addEventListener("click", () => setCount(Number(option.dataset.count)));
});

setCount(state.count);
renderSpread();
updateShareState("");
