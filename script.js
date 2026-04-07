// ================= STICKY HEADER =================
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight * 0.6) {
    header.classList.add("show");
  } else {
    header.classList.remove("show");
  }
});


// ================= HERO IMAGE SLIDER =================
const images = [
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900",
  "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=900",
  "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=900"
];

let currentIndex = 0;
const mainImg = document.getElementById("mainImg");

// NEXT IMAGE
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  mainImg.src = images[currentIndex];
}

// PREVIOUS IMAGE
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  mainImg.src = images[currentIndex];
}

// THUMBNAIL CLICK
function changeImage(el) {
  mainImg.src = el.src;
}


// ================= CAROUSEL =================
const carousel = document.querySelector(".carousel");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

// Safety check (important for interview quality)
if (carousel && nextBtn && prevBtn) {
  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({
      left: 300,
      behavior: "smooth"
    });
  });

  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({
      left: -300,
      behavior: "smooth"
    });
  });
}
// ================= FAQ TOGGLE =================
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    
    // Close all
    faqItems.forEach(i => i.classList.remove("active"));

    // Open clicked
    item.classList.add("active");
  });
});
// ================= APPLICATION CAROUSEL =================
const appCarousel = document.querySelector(".apps-carousel");
const appNext = document.querySelector(".app-next");
const appPrev = document.querySelector(".app-prev");

if (appCarousel && appNext && appPrev) {
  appNext.addEventListener("click", () => {
    appCarousel.scrollBy({ left: 320, behavior: "smooth" });
  });

  appPrev.addEventListener("click", () => {
    appCarousel.scrollBy({ left: -320, behavior: "smooth" });
  });
}
// ================= PROCESS TABS =================
// ================= PROCESS TABS =================
const tabs = document.querySelectorAll(".tab");

const data = [
  {
    title: "High-Grade Raw Material Selection",
    desc: "Vacuum sizing tanks ensure precise outer diameter while maintaining perfect roundness.",
    points: ["PE100 grade material", "Optimal molecular weight distribution"],
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700"
  },
  {
    title: "Extrusion Process",
    desc: "Molten material is shaped into pipes with precision.",
    points: ["Uniform thickness", "Smooth finish"],
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700"
  },
  {
    title: "Cooling",
    desc: "Cooling tanks stabilize pipe dimensions.",
    points: ["Controlled cooling", "Maintains strength"],
    img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=700"
  },
  {
    title: "Sizing",
    desc: "Ensures accurate diameter.",
    points: ["Precision control", "Consistent sizing"],
    img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=700"
  },
  {
    title: "Quality Control",
    desc: "Every pipe is tested.",
    points: ["Leak testing", "Durability checks"],
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=700"
  },
  {
    title: "Marking",
    desc: "Branding and tracking.",
    points: ["Batch info", "Traceability"],
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700"
  },
  {
    title: "Cutting",
    desc: "Pipes cut to size.",
    points: ["Precision cuts", "Smooth edges"],
    img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=700"
  },
  {
    title: "Packaging",
    desc: "Ready for delivery.",
    points: ["Safe packaging", "Transport ready"],
    img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=700"
  }
];

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const i = tab.dataset.tab;

    document.getElementById("title").innerText = data[i].title;
    document.getElementById("desc").innerText = data[i].desc;
    document.getElementById("img").src = data[i].img;

    document.getElementById("points").innerHTML =
      data[i].points.map(p => `<li>${p}</li>`).join("");
  });
});