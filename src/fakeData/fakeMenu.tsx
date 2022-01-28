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
    imageSource: "/images/burger1.png",
    title: "Burger Meal",
    price: 5.2,
    quantity: 1,
    isAvailable: isProductAvailable.YES,
    isAdvertised: isProductAdvertised.NO,
  },
  {
    id: 2,
    imageSource: "/images/burger6.png",
    title: "Vegan Burger",
    price: 5.7,
    quantity: 0,
    isAvailable: isProductAvailable.YES,
    isAdvertised: isProductAdvertised.NO,
  },
  {
    id: 3,
    imageSource: "/images/burger3.png",
    title: "Chicken Burger",
    price: 5.2,
    quantity: 0,
    isAvailable: isProductAvailable.YES,
    isAdvertised: isProductAdvertised.NO,
  },
  {
    id: 4,
    imageSource: "/images/drink1.png",
    title: "Coke 25cl",
    price: 5.2,
    quantity: 0,
    isAvailable: isProductAvailable.YES,
    isAdvertised: isProductAdvertised.NO,
  },
  {
    id: 5,
    imageSource: "/images/drink2.png",
    title: "Pepsi 25cl",
    price: 6.2,
    quantity: 0,
    isAvailable: isProductAvailable.YES,
    isAdvertised: isProductAdvertised.NO,
  },
  {
    id: 6,
    imageSource: "/images/drink3.png",
    title: "Iced Tea 25cl",
    price: 6.2,
    quantity: 0,
    isAvailable: isProductAvailable.YES,
    isAdvertised: isProductAdvertised.NO,
  },
  {
    id: 7,
    imageSource: "/images/frites1.png",
    title: "Frites Paprika",
    price: 6.2,
    quantity: 0,
    isAvailable: isProductAvailable.YES,
    isAdvertised: isProductAdvertised.NO,
  }, // excellent for debugging CardPrimary image
  {
    id: 8,
    imageSource: "/images/frites2.png",
    title: "New York Fries",
    price: 6.2,
    quantity: 0,
    isAvailable: isProductAvailable.YES,
    isAdvertised: isProductAdvertised.NO,
  }, // excellent for debugging CardPrimary image
  {
    id: 9,
    imageSource: "/images/wedges1.png",
    title: "Potatoes",
    price: 6.2,
    quantity: 0,
    isAvailable: isProductAvailable.YES,
    isAdvertised: isProductAdvertised.NO,
  }, // excellent for debugging CardPrimary image
  {
    id: 10,
    imageSource: "/images/ice-cream.png",
    title: "Glaces artisanales",
    price: 6.2,
    quantity: 0,
    isAvailable: isProductAvailable.YES,
    isAdvertised: isProductAdvertised.NO,
  }, // excellent for debugging CardPrimary image
]
