export function formatPrice(priceToFormat: number | string | undefined): string {
  let price = priceToFormat

  if (!price) return "0,00 €"
  if (typeof price === "string") price = parseFloat(price.replace(",", "."))

  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price)
  return formattedPrice
}
