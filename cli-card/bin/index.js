#!/usr/bin/env node

const readline = require('readline');

// ANSI Colors
const RESET = "\x1b[0m";
const BOLD = "\x1b[1m";
const DIM = "\x1b[2m";
const CYAN = "\x1b[38;2;56;189;248m";
const PURPLE = "\x1b[38;2;192;132;252m";
const GREEN = "\x1b[38;2;74;222;128m";
const WHITE = "\x1b[38;2;248;250;252m";
const GRAY = "\x1b[38;2;148;163;184m";
const BLUE = "\x1b[38;2;10;132;255m";
const ORANGE = "\x1b[38;2;251;146;60m";

const card = `
${BLUE}╭──────────────────────────────────────────────────────────────────────────╮${RESET}
${BLUE}│${RESET}                                                                          ${BLUE}│${RESET}
${BLUE}│${RESET}   ${BOLD}${WHITE}Yahia Bin Zaman${RESET}                                                       ${BLUE}│${RESET}
${BLUE}│${RESET}   ${CYAN}Applied AI & Full-Stack Engineer${RESET} ${DIM}|${RESET} ${PURPLE}Creative & Brand Director${RESET}         ${BLUE}│${RESET}
${BLUE}│${RESET}                                                                          ${BLUE}│${RESET}
${BLUE}│${RESET}   ${DIM}--------------------------------------------------------------------${RESET}   ${BLUE}│${RESET}
${BLUE}│${RESET}                                                                          ${BLUE}│${RESET}
${BLUE}│${RESET}   ${BOLD}${GRAY}GitHub:${RESET}    ${WHITE}https://github.com/yahiabinzaman${RESET}                          ${BLUE}│${RESET}
${BLUE}│${RESET}   ${BOLD}${GRAY}LinkedIn:${RESET}  ${WHITE}https://linkedin.com/in/yahia-mahmud-b4095b354${RESET}           ${BLUE}│${RESET}
${BLUE}│${RESET}   ${BOLD}${GRAY}Behance:${RESET}   ${WHITE}https://behance.net/yahiamahmud${RESET}                           ${BLUE}│${RESET}
${BLUE}│${RESET}   ${BOLD}${GRAY}Facebook:${RESET}  ${WHITE}https://facebook.com/YahiaBinZaman${RESET}                        ${BLUE}│${RESET}
${BLUE}│${RESET}   ${BOLD}${GRAY}Instagram:${RESET} ${WHITE}https://instagram.com/yahiabinzaman_official${RESET}              ${BLUE}│${RESET}
${BLUE}│${RESET}   ${BOLD}${GRAY}Email:${RESET}      ${GREEN}yahiabinzaman@gmail.com${RESET}                                   ${BLUE}│${RESET}
${BLUE}│${RESET}                                                                          ${BLUE}│${RESET}
${BLUE}│${RESET}   ${DIM}--------------------------------------------------------------------${RESET}   ${BLUE}│${RESET}
${BLUE}│${RESET}                                                                          ${BLUE}│${RESET}
${BLUE}│${RESET}   ${BOLD}${ORANGE}Core Specialties:${RESET}                                                     ${BLUE}│${RESET}
${BLUE}│${RESET}   • ${CYAN}AI & Agents:${RESET}      Autonomous LLM Agents, Intelligent Automation     ${BLUE}│${RESET}
${BLUE}│${RESET}   • ${WHITE}Full-Stack:${RESET}       Next.js, React, TypeScript, Node.js, Cloud DBs   ${BLUE}│${RESET}
${BLUE}│${RESET}   • ${PURPLE}Brand & Print:${RESET}    Identity Systems, Packaging, Prepress Typography ${BLUE}│${RESET}
${BLUE}│${RESET}   • ${GREEN}Video & Motion:${RESET}   Cinematic Video Editing, Motion Graphics         ${BLUE}│${RESET}
${BLUE}│${RESET}                                                                          ${BLUE}│${RESET}
${BLUE}│${RESET}   ${BOLD}${GREEN}Status:${RESET} 🟢 Open for Full-time Roles, AI Consulting & Client Projects   ${BLUE}│${RESET}
${BLUE}│${RESET}                                                                          ${BLUE}│${RESET}
${BLUE}╰──────────────────────────────────────────────────────────────────────────╯${RESET}
`;

console.log(card);
