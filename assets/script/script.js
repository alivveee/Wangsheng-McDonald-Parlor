const reviews = [
  {
    name: "Alif Ahmad",
    job: "Web Developer",
    image: "/assets/image/Alif Ahmad.jpg",
    review: "Wangsheng never disappoints! The restaurant's cozy setting complements its mouthwatering menu. The variety of options ensures there's something for everyone. A top pick for fast and flavorful meals! ",
  },
  {
    name: "Hanni Pham",
    job: "K-Pop Singer",
    image: "/assets/image/Hanni.jpeg",
    review: "Wangsheng excels in both ambiance and flavors. The modern decor sets the stage for a delightful meal, and the menu boasts a range of delicious, quick bites. Highly recommended! ",
  },
  {
    name: "Drake Graham",
    job: "Rapper and Singer",
    image: "/assets/image/Drake.jpeg",
    review:
      "At Wangsheng, the excellent service is matched by a menu that tantalizes taste buds. The clean, inviting atmosphere sets the stage for a quick and delightful dining experience. A fast-food haven for those who appreciate both flavor and ambiance!",
  },
  {
    name: "Yeow Ing Yee",
    job: "Lawyer",
    image: "/assets/image/YEOW ING YEE.jpeg",
    review: "Wangsheng's vibrant ambiance is a feast for the senses! The diverse menu, catering to all tastes, ensures a delightful experience. Quick, delicious bites make it a standout in the fast-food scene ",
  },
];

let i = 0; //current data
let j = reviews.length; //Total slides

let reviewContainer = document.getElementById("review-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

// Fungsi untuk menampilkan review berdasarkan indeks i dengan animasi GSAP
let displayReview = (direction) => {
  gsap.to(reviewContainer, { x: direction, opacity: 0, duration: 0.5, onComplete: updateReview });
};

// Fungsi untuk menampilkan review berikutnya
let nextReview = () => {
  i = (i + 1) % j;
  displayReview("-100%"); // Geser ke kiri
};

// Fungsi untuk menampilkan review sebelumnya
let prevReview = () => {
  i = (i - 1 + j) % j;
  displayReview("100%"); // Geser ke kanan
};

// Fungsi yang dipanggil setelah animasi selesai untuk mengganti konten dan mengatur properti kembali
let updateReview = () => {
  reviewContainer.innerHTML = `
    <p>${reviews[i].review}</p>
    <img src="${reviews[i].image}" alt="" />
    <h3>${reviews[i].name}</h3>
    <h6>${reviews[i].job}</h6>
  `;
  gsap.fromTo(reviewContainer, { x: "0", opacity: 0 }, { x: "0", opacity: 1, duration: 0.5 });
};

// Mengatur interval untuk menampilkan review setiap 3,5 detik
let intervalId = setInterval(nextReview, 3500);

// Mendengarkan klik tombol Next
nextBtn.addEventListener("click", () => {
  clearInterval(intervalId); // Menghentikan interval saat tombol Next diklik
  nextReview();
  intervalId = setInterval(nextReview, 3500); // Mengatur interval lagi setelah tombol Next diklik
});

// Mendengarkan klik tombol Prev
prevBtn.addEventListener("click", () => {
  clearInterval(intervalId); // Menghentikan interval saat tombol Prev diklik
  prevReview();
  intervalId = setInterval(nextReview, 3500); // Mengatur interval lagi setelah tombol Prev diklik
});

// Memanggil displayReview saat halaman dimuat
window.onload = displayReview;
