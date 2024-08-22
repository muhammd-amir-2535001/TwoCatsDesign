const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Form submitted!');
  // You can add your form submission logic here
});



document.addEventListener("alpine:init", () => {
Alpine.store("accordion", {
    tab: 0
});

Alpine.data("accordion", (idx) => ({
    init() {
    this.idx = idx;
    },
    idx: -1,
    handleClick() {
    this.$store.accordion.tab =
        this.$store.accordion.tab === this.idx ? 0 : this.idx;
    },
    handleRotate() {
    return this.$store.accordion.tab === this.idx ? "-rotate-180" : "";
    },
    handleToggle() {
    return this.$store.accordion.tab === this.idx
        ? `max-height: ${this.$refs.tab.scrollHeight}px`
        : "";
    }
}));
});

document.addEventListener('DOMContentLoaded', function() {
  const servicesBtn = document.getElementById('services-btn');
  const dropdownMenu = document.getElementById('dropdown-menu');
  
  servicesBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default action of the link
    dropdownMenu.classList.toggle('hidden'); // Toggles the visibility of the dropdown
  });

  // Optional: Close the dropdown when clicking outside
  document.addEventListener('click', function(event) {
    if (!servicesBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.add('hidden');
    }
  });
});
