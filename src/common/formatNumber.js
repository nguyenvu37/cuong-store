export default function formatNumber(number) {
  return number.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });
}
