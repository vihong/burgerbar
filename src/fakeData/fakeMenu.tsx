import { isProductAdvertised, isProductAvailable } from "enums"

export const fakeMenu1 = [
  {
    id: 1,
    imageSource: "/images/burger1.png",
    title: "Burger 1",
    price: 5.2,
    quantity: 1,
    isAvailable: isProductAvailable.YES,
    isAdvertised: isProductAdvertised.NO,
  },
  {
    id: 2,
    imageSource: "/images/burger2.png",
    title: "Burger 2",
    price: 7.5,
    quantity: 0,
    isAvailable: isProductAvailable.YES,
    isAdvertised: isProductAdvertised.NO,
  },
]

export const fakeMenu2 = [
  {
    id: 1,
    imageSource: "/images/burger-bacon-egg.png",
    title: "Burger Smoke BBQ",
    price: 5.5,
    quantity: 1,
    isAvailable: isProductAvailable.YES,
    isAdvertised: isProductAdvertised.NO,
  },
  {
    id: 2,
    imageSource: "/images/burger-vegan.png",
    title: "Vegan Burger",
    price: 5.4,
    quantity: 0,
    isAvailable: isProductAvailable.YES,
    isAdvertised: isProductAdvertised.NO,
  },
  {
    id: 3,
    imageSource: "/images/burger3.png",
    title: "Burger poulet",
    price: 5.3,
    quantity: 0,
    isAvailable: isProductAvailable.YES,
    isAdvertised: isProductAdvertised.NO,
  },
  {
    id: 4,
    imageSource: "/images/drink1.png",
    title: "Coke 25cl",
    price: 3.5,
    quantity: 0,
    isAvailable: isProductAvailable.YES,
    isAdvertised: isProductAdvertised.NO,
  },
  {
    id: 5,
    imageSource: "/images/drink2.png",
    title: "Pepsi 25cl",
    price: 3.4,
    quantity: 0,
    isAvailable: isProductAvailable.YES,
    isAdvertised: isProductAdvertised.NO,
  },
  {
    id: 6,
    imageSource: "/images/drink3.png",
    title: "Iced Tea 25cl",
    price: 3.3,
    quantity: 0,
    isAvailable: isProductAvailable.YES,
    isAdvertised: isProductAdvertised.NO,
  },
  {
    id: 7,
    imageSource: "/images/frites1.png",
    title: "Frites Paprika",
    price: 2.5,
    quantity: 0,
    isAvailable: isProductAvailable.YES,
    isAdvertised: isProductAdvertised.NO,
  }, // excellent for debugging CardPrimary image
  {
    id: 8,
    imageSource: "/images/fries3.png",
    title: "New York Fries",
    price: 3.1,
    quantity: 0,
    isAvailable: isProductAvailable.YES,
    isAdvertised: isProductAdvertised.NO,
  }, // excellent for debugging CardPrimary image
  {
    id: 9,
    imageSource: "/images/wedges1.png",
    title: "Crispy Potatoes",
    price: 3.7,
    quantity: 0,
    isAvailable: isProductAvailable.YES,
    isAdvertised: isProductAdvertised.NO,
  }, // excellent for debugging CardPrimary image
  {
    id: 10,
    imageSource: "/images/ice-cream.png",
    title: "Glaces artisanales",
    price: 4.0,
    quantity: 0,
    isAvailable: isProductAvailable.YES,
    isAdvertised: isProductAdvertised.NO,
  }, // excellent for debugging CardPrimary image
]
