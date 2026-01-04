function orderNow(product) {
  let phone = "2001206561893";
  let message = `السلام عليكم، عايز سعر الجملة لمنتج: ${product}`;
  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
