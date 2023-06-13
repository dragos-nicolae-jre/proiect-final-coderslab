import images from "./images"

const wines = [
  {
    title: "Chapel Hill Shiraz",
    price: "$56",
    tags: "AU | Bottle",
  },
  {
    title: "Catena Malbee",
    price: "$59",
    tags: "AU | Bottle",
  },
  {
    title: "La Vieillw Rose",
    price: "$44",
    tags: "FR | 750 ml",
  },
  {
    title: "Rhino Pale Ale",
    price: "$31",
    tags: "CA | 750 ml",
  },
  {
    title: "Irish Guinness",
    price: "$26",
    tags: "IE | 750 ml",
  },
]

const cocktails = [
  {
    title: "Aperol Spritz",
    price: "$20",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "$16",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "$10",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "$31",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "$26",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
]

const awards = [
  {
    imgUrl: images.award02,
    title: "Weekend Brunchies",
    subtitle: "Two years of winning 'Weekend Brunchies Edition' ",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "The best of 'Rising Star' Bistro in 2017",
  },
  {
    imgUrl: images.award05,
    title: "AAA Hospitality",
    subtitle: "Performance Waiters, Skilled and Trainabled",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "The most delicious and presentable dishes for Brunchies in 2018",
  },
]

export default { wines, cocktails, awards }
