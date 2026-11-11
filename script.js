const filterButtons = document.querySelectorAll(".filter-btn");
const menuItems = document.querySelectorAll(".menu-item");
const emptyMessage = document.getElementById("menuEmpty");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove("is-active"));
    button.classList.add("is-active");

    let visibleCount = 0;
    menuItems.forEach((item) => {
      const show = filter === "all" || item.dataset.category === filter;
      item.classList.toggle("is-hidden", !show);
      if (show) visibleCount += 1;
    });

    emptyMessage.classList.toggle("is-hidden", visibleCount > 0);
  });
});
