#!/usr/bin/env node

// ANSI Colors
const RESET = "\x1b[0m";
const BOLD = "\x1b[1m";
const DIM = "\x1b[2m";
const ITALIC = "\x1b[3m";

// Custom TrueColor / 256 Colors
const CYAN = "\x1b[38;2;56;189;248m";
const VIOLET = "\x1b[38;2;168;85;247m";
const EMERALD = "\x1b[38;2;52;211;153m";
const WHITE = "\x1b[38;2;248;250;252m";
const SILVER = "\x1b[38;2;203;213;225m";
const MUTED = "\x1b[38;2;100;116;139m";
const ACCENT = "\x1b[38;2;10;132;255m";

function stripAnsi(str) {
  return str.replace(/\x1b\[[0-9;]*m/g, "");
}

function printBox(lines, width = 74) {
  const top = `${ACCENT}╭${"─".repeat(width)}╮${RESET}`;
  const bottom = `${ACCENT}╰${"─".repeat(width)}╯${RESET}`;
  const divider = `${ACCENT}├${"─".repeat(width)}┤${RESET}`;

  console.log("\n" + top);
  for (const line of lines) {
    if (line === "---") {
      console.log(divider);
    } else {
      const plain = stripAnsi(line);
      const padding = Math.max(0, width - plain.length - 2);
      console.log(`${ACCENT}│${RESET} ${line}${" ".repeat(padding)} ${ACCENT}│${RESET}`);
    }
  }
  console.log(bottom + "\n");
}

const content = [
  `${BOLD}${WHITE}  ⚡ YAHIA BIN ZAMAN${RESET}`,
  `  ${CYAN}Applied AI & Full-Stack Engineer${RESET} ${MUTED}|${RESET} ${VIOLET}Brand & Print Director${RESET}`,
  `  ${DIM}Architecting Autonomous AI Systems & Scalable Digital Products${RESET}`,
  "---",
  `  ${BOLD}${SILVER}GitHub    :${RESET} ${WHITE}https://github.com/yahiabinzaman${RESET}`,
  `  ${BOLD}${SILVER}LinkedIn  :${RESET} ${WHITE}https://linkedin.com/in/yahia-mahmud-b4095b354${RESET}`,
  `  ${BOLD}${SILVER}Behance   :${RESET} ${WHITE}https://behance.net/yahiamahmud${RESET}`,
  `  ${BOLD}${SILVER}Facebook  :${RESET} ${WHITE}https://facebook.com/YahiaBinZaman${RESET}`,
  `  ${BOLD}${SILVER}Instagram :${RESET} ${WHITE}https://instagram.com/yahiabinzaman_official${RESET}`,
  `  ${BOLD}${SILVER}Email     :${RESET} ${EMERALD}yahiamahmud10@gmail.com${RESET}`,
  "---",
  `  ${BOLD}${CYAN}Core Domains:${RESET}`,
  `  ${EMERALD}●${RESET} ${BOLD}Applied AI${RESET}      ${MUTED}❯${RESET} Autonomous Agents, LLM Pipelines, Automation`,
  `  ${CYAN}●${RESET} ${BOLD}Full-Stack${RESET}      ${MUTED}❯${RESET} Next.js, React, TypeScript, Node.js, Cloud DBs`,
  `  ${VIOLET}●${RESET} ${BOLD}Brand & Print${RESET}   ${MUTED}❯${RESET} Visual Identity, Prepress, Typography, Packaging`,
  `  ${WHITE}●${RESET} ${BOLD}Motion Design${RESET}   ${MUTED}❯${RESET} Premiere Pro, After Effects, Cinematic Edits`,
  "---",
  `  ${BOLD}${EMERALD}Status:${RESET} 🟢 ${BOLD}Available for Full-time Roles, AI Consulting & Projects${RESET}`,
  `  ${DIM}Quick Run: npx github:yahiabinzaman/yahiabinzaman${RESET}`
];

printBox(content, 78);
