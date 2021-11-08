export function formatPrice(price: number | undefined): string {
  if (!price) return ""
  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price)
  return formattedPrice
}
