// Kalo navigasi layar lebar "Mulai Pencarian" ditutup
wideScreenNavLinks.addEventListener('hidden.bs.collapse', event => {
  // Gelapin latar belakang
  wideScreenSearchDimBackground.style.display = "block";
  // Navigasi layar lebar jadi abu-abu gelap
  mainNav.style.backgroundColor = "#dbdbdb";
  // Kotak pencarian di navigasi layar lebar muncul
  wideScreenSearchForm.style.display = "flex";
  // Tombol kaca pembesar di navigasi layar lebar kanan berubah jadi silang
  wideScreenSearchBtn.innerHTML = "<i class='bi bi-x-lg'/>";
  wideScreenSearchBtn.style.color = "#2b2b2b";
  // Fokus ke kotak pencarian navigasi layar lebar
  wideScreenSearchBar.focus();
  // Bikin webnya gak bisa di-scroll
  document.body.style.position = "fixed";
  document.body.style.width = "100%";
  // Kalo tinggi layarnya kurang, bikin area tautan cepat bisa di-scroll
  if (wideScreenSearchForm.offsetHeight + wideScreenSearchQuickLinks.offsetHeight + 16 > window.innerHeight) {
    wideScreenSearchQuickLinks.style.height = window.innerHeight - wideScreenSearchForm.offsetHeight - 16 + "px";
  }
})

// Kalo navigasi layar lebar "Selesai Pencarian" dibuka
wideScreenNavLinks.addEventListener('show.bs.collapse', event => {
  // Latar belakang gelap ilang
  wideScreenSearchDimBackground.style.display = "none";
  // Warna navigasi layar lebar balik lagi
  mainNav.style.backgroundColor = "#f3f3f3";
  // Kotak pencarian di navigasi layar lebar ilang
  wideScreenSearchForm.style.display = "none";
  // Tombol silang di navigasi layar lebar kanan balik jadi kaca pembesar
  wideScreenSearchBtn.innerHTML = "<i class='bi bi-search'/>";
  wideScreenSearchBtn.style.color = "#828282";
  // Webnya balik normal
  document.body.style.position = "";
  document.body.style.width = "auto";
  // Tinggi area tautan cepat balik normal
  wideScreenSearchQuickLinks.style.height = "";
})

// Buat buka/tutup navigasi layar penuh di layar kecil
function toggleFullScreenNav() {
  if (hamburgerBtn.ariaExpanded === "false") { // Kalo navigasi layar penuh lagi "dibuka", tutup
    hamburgerBtn.innerHTML = "<i class='bi bi-list'/>";
    mainNav.style.backgroundColor = "#f3f3f3";
    document.body.style.overflow = "visible";
  } else { // Kalo navigasi layar penuh lagi "ditutup", buka
    hamburgerBtn.innerHTML = "<i class='bi bi-x'/>";
    mainNav.style.backgroundColor = "white";
    document.body.style.overflow = "hidden";
  }
}
// Kalo kotak pencarian di navigasi layar penuh layar kecil di-klik
function smallScreenSearchBarOnfocus() {
  // Navigasi paling atas ditutup
  mainNav.style.height = "0";
  mainNav.style.visibility = "hidden";
  // Kotak pencarian di navigasi layar penuh layar kecil dibuka
  smallScreenSearchForm.style.paddingTop = "16px";
  // Ikon kaca pembesar di navigasi layar penuh layar kecil jadi abu-abu
  smallScreenSearchIcon.style.color = "#7d7d7d";
  // Tombol "Batal" di navigasi layar penuh layar kecil muncul
  smallScreenSearchCancelBtn.style.visibility = "visible";
  smallScreenSearchCancelBtn.style.width = "auto";
  smallScreenSearchCancelBtn.style.padding = "0px 8px";
  smallScreenSearchCancelBtn.style.marginLeft = "10px";
  // Judul "QUICK LINKS" di navigasi layar penuh layar kecil muncul
  smallScreenSearchQuickLinksTitle.style.visibility = "visible";
  smallScreenSearchQuickLinksTitle.style.height = "auto";
  smallScreenSearchQuickLinksTitle.style.margin = "21px 0px 5px";
  // Tautan cepat di bawah navigasi layar penuh layar kecil diatur
  const smallScreenSearchQuickLinks = document.getElementsByClassName("smallScreenSearchQuickLink");
  for (let i = 0; i < smallScreenSearchQuickLinks.length; i++) {
    smallScreenSearchQuickLinks[i].style.fontSize = "14px";
    smallScreenSearchQuickLinks[i].style.height = "43px";
    smallScreenSearchQuickLinks[i].style.lineHeight = "43px";
    smallScreenSearchQuickLinks[i].classList.replace("hoverBlack", "hoverBlue");
  }
  // Garis pemisah di bawah tautan cepat navigasi layar penuh layar kecil diatur
  const quickLinkHrs = document.getElementsByClassName("quickLinkHr");
  for (let i = 0; i < quickLinkHrs.length; i++) {
    quickLinkHrs[i].style.color = "#424245";
  }
}
// Kalo kotak pencarian di navigasi layar penuh layar kecil gak fokus lagi (kehilangan fokus)
function smallScreenSearchBarOnBlur() {
  // Navigasi paling atas dibuka lagi
  mainNav.style.height = "48px";
  mainNav.style.visibility = "visible";
  // Kotak pencarian di navigasi layar penuh layar kecil ditutup
  smallScreenSearchForm.style.paddingTop = "0";
  // Ikon kaca pembesar di navigasi layar penuh layar kecil balik lagi warnanya
  smallScreenSearchIcon.style.color = "#a5a5a5";
  // Tombol "Batal" di navigasi layar penuh layar kecil ilang
  smallScreenSearchCancelBtn.style.visibility = "hidden";
  smallScreenSearchCancelBtn.style.width = "0";
  smallScreenSearchCancelBtn.style.padding = "0";
  smallScreenSearchCancelBtn.style.marginLeft = "0";
  // Judul "QUICK LINKS" di navigasi layar penuh layar kecil ilang
  smallScreenSearchQuickLinksTitle.style.visibility = "hidden";
  smallScreenSearchQuickLinksTitle.style.height = "0";
  smallScreenSearchQuickLinksTitle.style.margin = "0px";
  // Tautan cepat di bawah navigasi layar penuh layar kecil diatur lagi
  const smallScreenSearchQuickLinks = document.getElementsByClassName("smallScreenSearchQuickLink");
  for (let i = 0; i < smallScreenSearchQuickLinks.length; i++) {
    smallScreenSearchQuickLinks[i].style.fontSize = "17px";
    smallScreenSearchQuickLinks[i].style.height = "45px";
    smallScreenSearchQuickLinks[i].style.lineHeight = "45px";
    smallScreenSearchQuickLinks[i].classList.replace("hoverBlue", "hoverBlack");
  }
  // Garis pemisah di bawah tautan cepat navigasi layar penuh layar kecil diatur lagi
  const quickLinkHrs = document.getElementsByClassName("quickLinkHr");
  for (let i = 0; i < quickLinkHrs.length; i++) {
    quickLinkHrs[i].style.color = "#d7d7d7";
  }
}
