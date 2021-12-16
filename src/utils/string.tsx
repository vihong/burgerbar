export function convertStringToBoolean(input: string | undefined): boolean {
  if (typeof input === "boolean") return input
  return input === "true"
}
