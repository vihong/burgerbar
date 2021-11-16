export function formatPrice(price: number | undefined): string {
  if (!price) return "0,00 €"
  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price)
  return formattedPrice
}
