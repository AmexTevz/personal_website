const params = new URLSearchParams(window.location.search);

if (params.get("sent") === "1") {
  const form = document.getElementById("contact-form");
  const thanks = document.getElementById("thanks");
  if (form) form.hidden = true;
  if (thanks) thanks.hidden = false;
}

document.querySelectorAll("#site-menu .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("site-menu");
    if (menu && menu.classList.contains("show") && window.bootstrap) {
      window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
