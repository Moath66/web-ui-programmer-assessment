const menuToggle = document.querySelector(".menu-toggle");
const navContent = document.querySelector(".nav-content");
const navLinks = document.querySelectorAll(".nav-links a");

const productsContainer = document.querySelector("#productsGrid");
const searchInput = document.querySelector("#searchInput");
const categoryButtons = document.querySelectorAll(".category-card");

const products = [
  {
    id: 1,
    name: "سماعات لاسلكية",
    category: "الصوتيات",
    description: "صوت عالي الجودة مع خاصية عزل الضوضاء.",
    price: 129,
    icon: "🎧",
  },
  {
    id: 2,
    name: "ساعة ذكية",
    category: "الساعات الذكية",
    description: "ابقَ متصلًا وتابع نشاطك اليومي بسهولة.",
    price: 199,
    icon: "⌚",
  },
  {
    id: 3,
    name: "لابتوب خفيف",
    category: "أجهزة الكمبيوتر",
    description: "أداء قوي وخفيف للعمل والإبداع.",
    price: 899,
    icon: "💻",
  },
  {
    id: 4,
    name: "لوحة مفاتيح ميكانيكية",
    category: "الإكسسوارات",
    description: "تجربة كتابة مريحة وسريعة للاستخدام اليومي.",
    price: 89,
    icon: "⌨️",
  },
  {
    id: 5,
    name: "ماوس لاسلكي",
    category: "الإكسسوارات",
    description: "تصميم مريح ودقة عالية للعمل والألعاب.",
    price: 59,
    icon: "🖱️",
  },
  {
    id: 6,
    name: "سماعة مكتبية",
    category: "الصوتيات",
    description: "صوت واضح وتصميم أنيق للمكتب والمنزل.",
    price: 149,
    icon: "🔊",
  },
];

function renderProducts(productsList) {
  if (productsList.length === 0) {
    productsContainer.innerHTML = `
      <div class="no-results">
        <p>لم يتم العثور على منتجات.</p>
      </div>
    `;

    return;
  }

  productsContainer.innerHTML = productsList
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-image" aria-hidden="true">
            ${product.icon}
          </div>

          <div class="product-info">
            <p class="product-category">${product.category}</p>

            <h3>${product.name}</h3>

            <p>${product.description}</p>

            <strong>${product.price}$</strong>
          </div>
        </article>
      `,
    )
    .join("");
}

function closeMobileMenu() {
  navContent.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "فتح قائمة التنقل");
  menuToggle.textContent = "☰";
}

menuToggle.addEventListener("click", () => {
  const isOpen = navContent.classList.toggle("is-open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "إغلاق قائمة التنقل" : "فتح قائمة التنقل",
  );

  menuToggle.textContent = isOpen ? "×" : "☰";
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.trim().toLowerCase();

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
    );
  });

  renderProducts(filteredProducts);
});

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.category;

    const filteredProducts =
      selectedCategory === "all"
        ? products
        : products.filter((product) => product.category === selectedCategory);

    renderProducts(filteredProducts);

    document.querySelector("#products").scrollIntoView({
      behavior: "smooth",
    });
  });
});

renderProducts(products);
