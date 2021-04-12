export const formatQuantity = (quantity) => {
  return quantity.reduce((a, b) => a + parseInt(b.quantity), 0);
};

export const formatPrice = (price) => {
  return price.reduce(
    (a, b) => a + parseInt(b.quantity) * parseInt(b.price),
    0
  );
};
