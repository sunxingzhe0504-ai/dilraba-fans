/** Returns true during Dilraba's birthday week (May 28 – June 7). */
export function isBirthdaySeason(date = new Date()): boolean {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  if (month === 5 && day >= 28) return true;
  if (month === 6 && day <= 7) return true;
  return false;
}
