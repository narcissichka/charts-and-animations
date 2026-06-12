export const cardsListItems = [
  [
    {
      id: "insecurity-card-1-item-1",
      text: "First impressions matter",
    },
    {
      id: "insecurity-card-1-item-2",
      text: "It has a considerable impact on interpersonal interactions",
    },
    {
      id: "insecurity-card-1-item-3",
      text: "Small improvements can drastically impact quality of life",
    },
  ],
  [
    {
      id: "insecurity-card-2-item-1",
      text: "Not chasing unrealistic standards",
    },
    {
      id: "insecurity-card-2-item-2",
      text: "Not trying to look like someone else",
    },
    {
      id: "insecurity-card-2-item-3",
      text: "Not seeking perfection",
    },
    {
      id: "insecurity-card-2-item-4",
      text: "Aiming only for a better version of yourself",
    },
  ],
];

export const insecurityCardsData = (className: string) => [
  { listItems: cardsListItems[0], className, title: "Consider this..." },
  {
    listItems: cardsListItems[1],
    className,
    title: "The key is approaching it intelligently",
  },
];
