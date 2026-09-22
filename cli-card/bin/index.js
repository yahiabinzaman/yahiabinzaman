#!/usr/bin/env node

// ANSI Styling
const RESET = "\x1b[0m";
const BOLD = "\x1b[1m";
const DIM = "\x1b[2m";

// Premium Colors
const CYAN = "\x1b[38;2;56;189;248m";
const VIOLET = "\x1b[38;2;168;85;247m";
const EMERALD = "\x1b[38;2;52;211;153m";
const WHITE = "\x1b[38;2;248;250;252m";
const SILVER = "\x1b[38;2;203;213;225m";
const MUTED = "\x1b[38;2;100;116;139m";
const ACCENT = "\x1b[38;2;10;132;255m";
const AMBER = "\x1b[38;2;251;191;36m";

// Universal Terminal Column Width Calculator
function getTerminalWidth(str) {
  // Strip ANSI color escape codes
  let clean = str.replace(/\x1b\[[0-9;]*m/g, "");
  // Strip variation selectors & zero-width characters (U+FE00 through U+FE0F, zero-width spaces)
  clean = clean.replace(/[\uFE00-\uFE0F\u200B-\u200D\u2060]/g, "");

  let width = 0;
  for (const char of clean) {
    const cp = char.codePointAt(0);
    // 2-column emojis and wide symbols
    if (
      (cp >= 0x1F300 && cp <= 0x1FAFF) ||
      (cp >= 0x1F000 && cp <= 0x1F2FF) ||
      (cp >= 0x2600 && cp <= 0x27BF) ||
      ["⚡", "🟢", "🚀", "🎨", "🛠", "💼", "🏭"].includes(char)
    ) {
      width += 2;
    } else {
      width += 1;
    }
  }
  return width;
}

function printBox(lines, width = 86) {
  const top = `${ACCENT}╭${"─".repeat(width)}╮${RESET}`;
  const bottom = `${ACCENT}╰${"─".repeat(width)}╯${RESET}`;
  const divider = `${ACCENT}├${"─".repeat(width)}┤${RESET}`;

  console.log("\n" + top);
  for (const line of lines) {
    if (line === "---") {
      console.log(divider);
    } else {
      const visualWidth = getTerminalWidth(line);
      const padding = Math.max(0, width - visualWidth - 2);
      console.log(`${ACCENT}│${RESET} ${line}${" ".repeat(padding)} ${ACCENT}│${RESET}`);
    }
  }
  console.log(bottom + "\n");
}

const content = [
  `${BOLD}${WHITE}  ⚡ YAHIA BIN ZAMAN${RESET}`,
  `  ${CYAN}Applied AI & Full-Stack Engineer${RESET} ${MUTED}|${RESET} ${VIOLET}Creative & Brand Director${RESET}`,
  `  ${DIM}Managing Incharge @ Colorlab (8+ Years) | Software & Systems Architect${RESET}`,
  "---",
  `  ${BOLD}${SILVER}GitHub    :${RESET} ${WHITE}https://github.com/yahiabinzaman${RESET}`,
  `  ${BOLD}${SILVER}LinkedIn  :${RESET} ${WHITE}https://linkedin.com/in/yahia-mahmud-b4095b354${RESET}`,
  `  ${BOLD}${SILVER}Behance   :${RESET} ${WHITE}https://behance.net/yahiamahmud${RESET}`,
  `  ${BOLD}${SILVER}Facebook  :${RESET} ${WHITE}https://facebook.com/YahiaBinZaman${RESET}`,
  `  ${BOLD}${SILVER}Instagram :${RESET} ${WHITE}https://instagram.com/yahiabinzaman_official${RESET}`,
  `  ${BOLD}${SILVER}Email     :${RESET} ${EMERALD}yahiamahmud10@gmail.com${RESET}`,
  "---",
  `  ${BOLD}${AMBER}🚀 Flagship Software & Enterprise Systems:${RESET}`,
  `  ${CYAN}> ColorLab Workspace${RESET}   ${MUTED}::${RESET} Custom ERP OS: Costing, Prepress, Ledger & CRM`,
  `  ${VIOLET}> Borno for macOS${RESET}      ${MUTED}::${RESET} 1st zero-latency Unicode + Bijoy keyboard for Mac`,
  `  ${EMERALD}> Vector Toolkit Pro${RESET}   ${MUTED}::${RESET} Automation & prepress color suite for Illustrator`,
  `  ${WHITE}> DisplayFlow${RESET}          ${MUTED}::${RESET} macOS multi-display & workspace manager`,
  `  ${AMBER}> Shop Cherlina${RESET}        ${MUTED}::${RESET} Founder & Lead Full-Stack E-Commerce Architect`,
  "---",
  `  ${BOLD}${CYAN}🛠️ Core Superpowers & Leadership:${RESET}`,
  `  ${SILVER}- 8+ Years Design Leadership @ Colorlab (Managing Incharge / Ex-MD)${RESET}`,
  `  ${SILVER}- End-to-End Hybrid Engineering: Prepress & Print ➔ AI & Next.js Systems${RESET}`,
  "---",
  `  ${BOLD}${EMERALD}Status:${RESET} 🟢 ${BOLD}Available for Senior Roles, AI Architecture & High-Impact Projects${RESET}`,
  `  ${DIM}Run anytime: npx github:yahiabinzaman/yahiabinzaman${RESET}`
];

printBox(content, 86);
