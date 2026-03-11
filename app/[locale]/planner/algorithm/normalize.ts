export default function normalize(
  value: number,
  min: number,
  max: number
): number {

  if (max === min) return 0;

  return (value - min) / (max - min);
}