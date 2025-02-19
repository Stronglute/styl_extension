const image = document.getElementById("base")
window.addEventListener('message', e => {
  if (e.data["id"] === "cutoutAction") {
    switch (e.data["content"]["action"]) {
      case "showTop":
        image.style.maskImage = "url(https://cdn.lookbook.stylar.com/c55dd838-ff6e-4f5f-8cab-bc763e941765)"
        break;
      case "showBottom":
        image.style.maskImage = "url(https://cdn.lookbook.stylar.com/32d58c69-855d-48de-b43d-3ebd0ee8d85b)"
        break;
    }
  }
});
