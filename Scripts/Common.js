var uri = window.location.toString();
if (uri.indexOf("?m=1", "?m=1") > 0) {
    var cleanUri = uri.substring(0, uri.indexOf("?m=1"));
    window.history.replaceState({}, document.title, cleanUri);
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && hamburgerBtn.ariaExpanded === "true") { // Navigasi layar penuh sedang terbuka
        var navigasiLayarPenuhTutup = new bootstrap.Collapse(fullScreenNav);
        navigasiLayarPenuhTutup.hide();
        hamburgerBtn.innerHTML = "<i class='bi bi-list'/>";
        mainNav.style.backgroundColor = "#f3f3f3";
        document.body.style.overflow = "visible";
        mainNav.style.height = "44px";
        mainNav.style.visibility = "visible";
        smallScreenSearchForm.style.paddingTop = "0";
    } else if (window.innerWidth < 768 && wideScreenSearchBtn.ariaExpanded === "false") { // Tautan navigasi layar lebar disembunyikan, mulai pencarian
        var navigasiLayarLebarTutup = new bootstrap.Collapse(wideScreenNavLinks);
        navigasiLayarLebarTutup.show();
        wideScreenSearchDimBackground.style.display = "none";
        mainNav.style.backgroundColor = "#f3f3f3";
        wideScreenSearchForm.style.display = "none";
        wideScreenSearchBtn.innerHTML = "<i class='bi bi-search'/>";
        wideScreenSearchBtn.style.color = "#828282";
        document.body.style.position = "";
        document.body.style.width = "auto";
    }
    
    if (wideScreenSearchForm.offsetHeight + wideScreenSearchQuickLinks.offsetHeight + 16 > window.innerHeight) {
        wideScreenSearchQuickLinks.style.height = window.innerHeight - wideScreenSearchForm.offsetHeight - 16 + "px";
    } else {
        wideScreenSearchQuickLinks.style.height = "";
    }
});
