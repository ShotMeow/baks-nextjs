import type { ColorSchemeSwitcherType } from "../types";

const LS_COLOR_SCHEME_KEY = "baks:scheme";

export function applyScheme(
  scheme: ColorSchemeSwitcherType,
  persist = false,
): void {
  document.documentElement.setAttribute("class", scheme);
  localStorage.setItem(LS_COLOR_SCHEME_KEY, scheme);
}

export function getSystemScheme(): ColorSchemeSwitcherType {
  return window.matchMedia("(prefers-color-scheme:dark)").matches
    ? "dark"
    : "light";
}

export function getSavedScheme(): ColorSchemeSwitcherType | null {
  return localStorage.getItem(LS_COLOR_SCHEME_KEY) as ColorSchemeSwitcherType;
}

export function colorSchemeInitialize(): void {
  applyScheme(getSavedScheme() || getSystemScheme());
}
