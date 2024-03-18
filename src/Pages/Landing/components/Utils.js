export const getCardCount = (width) => {
  if (width <= 576) return 1;
  if (width > 576 && width <= 992) return 2;
  if (width > 992 && width <= 1200) return 3;
  if (width > 1200) return 4;
};

export const getTestimonialCardCount = (width) => {
  if (width <= 576) return 1;
  if (width > 576 && width <= 992) return 2;
  if (width > 992 ) return 3;
};
