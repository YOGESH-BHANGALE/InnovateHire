export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatCounter(value: number, pad = 2) {
  return String(value).padStart(pad, "0");
}

export function formatSectionIndex(index: number) {
  return `/${String(index).padStart(2, "0")}`;
}
