export function greetByTime(): string {
  const now: Date = new Date();
  const hour: number = now.getHours();

  if (hour >= 5 && hour < 12) {
    return "Good Morning!";
  }
  if (hour >= 12 && hour < 18) {
    return "Good Afternoon!";
  }
  return "Good Evening!";
}
