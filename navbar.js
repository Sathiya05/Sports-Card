// Sports Card & Memorabilia Marketplace Navigation Bar
// Theme: Primary Red (#C1121F), Deep Crimson Hover (#780000), Black & White

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    navbar.innerHTML = `
<nav class="fixed top-0 left-0 w-full z-50 transition-colors duration-200 bg-white/95 backdrop-blur-md border-b border-gray-200 dark:bg-[#050505]/95 dark:backdrop-blur-md dark:border-white/10">
  <div class="container mx-auto px-4 sm:px-6 xl:px-8">
    <div class="flex items-center justify-between h-20">

      <a href="index.html" class="flex items-center space-x-2 rtl:space-x-reverse">
        <i class="fas fa-layer-group text-2xl" style="color: var(--primary-red);"></i>
        <span class="text-xl font-black tracking-tight uppercase text-black dark:text-white">
          Vault<span style="color: var(--primary-red);">Card</span>
        </span>
      </a>

      <div class="hidden xl:flex flex-1 justify-center space-x-8 rtl:space-x-reverse items-center font-bold text-xs tracking-wide uppercase">
        
        <div class="relative group">
          <button class="nav-link flex items-center space-x-1 text-black dark:text-gray-300 hover:text-[#780000] dark:hover:text-white transition-colors py-2">
            <span>HOME</span>
            <i class="fas fa-chevron-down text-[10px] transition-transform duration-300 group-hover:rotate-180"></i>
          </button>
          <div class="absolute left-0 mt-2 w-40 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 shadow-lg rounded-sm invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
            <a href="index.html" class="block px-4 py-3 text-xs text-black dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#C1121F] dark:hover:text-white transition-colors">HOME 1</a>
            <a href="home2.html" class="block px-4 py-3 text-xs text-black dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#C1121F] dark:hover:text-white transition-colors">HOME 2</a>
          </div>
        </div>
        <a href="about.html" class="nav-link text-black dark:text-gray-300 hover:text-[#780000] dark:hover:text-white transition-colors py-2">About</a>

        <a href="auction.html" class="nav-link text-black dark:text-gray-300 hover:text-[#780000] dark:hover:text-white transition-colors py-2">Auctions</a>
        <a href="collections.html" class="nav-link text-black dark:text-gray-300 hover:text-[#780000] dark:hover:text-white transition-colors py-2">Collections</a>
        <a href="memarobilia.html" class="nav-link text-black dark:text-gray-300 hover:text-[#780000] dark:hover:text-white transition-colors py-2">Memorabilia</a>

        <a href="shop.html" class="nav-link text-black dark:text-gray-300 hover:text-[#780000] dark:hover:text-white transition-colors py-2">Shop</a>
                <a href="contact.html" class="nav-link text-black dark:text-gray-300 hover:text-[#780000] dark:hover:text-white transition-colors py-2">Contact</a>

        
        <div class="relative group">
          <button class="nav-link flex items-center space-x-1 text-black dark:text-gray-300 hover:text-[#780000] dark:hover:text-white transition-colors py-2">
            <span>DASHBOARD</span>
            <i class="fas fa-chevron-down text-[10px] transition-transform duration-300 group-hover:rotate-180"></i>
          </button>
          <div class="absolute left-0 mt-2 w-40 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 shadow-lg rounded-sm invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
            <a href="user.html" class="block px-4 py-3 text-xs text-black dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#C1121F] dark:hover:text-white transition-colors">User</a>
            <a href="admin.html" class="block px-4 py-3 text-xs text-black dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#C1121F] dark:hover:text-white transition-colors">Admin</a>
          </div>
        </div>

      </div>

      <div class="hidden xl:flex items-center space-x-5 rtl:space-x-reverse">
        
     

        <div class="w-px h-6 bg-gray-300 dark:bg-white/10 mx-2"></div>

        <div class="flex items-center space-x-3 rtl:space-x-reverse">
          <button id="rtlToggle" class="w-10 h-8 flex items-center justify-center text-xs font-bold text-black dark:text-white hover:text-[#C1121F] dark:hover:text-[#C1121F] transition-colors rounded-sm">
            RTL
          </button>
          <button id="darkToggle" class="text-black dark:text-white hover:text-[#C1121F] dark:hover:text-[#C1121F] transition-colors w-8 h-8 flex items-center justify-center">
            <i id="darkIcon" class="fas fa-moon text-lg"></i>
          </button>
        </div>

        <div class="flex space-x-3 rtl:space-x-reverse ml-2">
          <a href="login.html" class="px-4 py-2 text-xs font-bold uppercase tracking-wide text-white bg-[#C1121F] hover:bg-[#780000] transition-colors rounded-sm">
            Log In
          </a>
          <a href="signup.html" class="px-4 py-2 text-xs font-bold uppercase tracking-wide text-white bg-[#C1121F] hover:bg-[#780000] transition-colors rounded-sm">
            Sign Up
          </a>
        </div>
      </div>

      <div class="flex xl:hidden items-center space-x-4 text-black dark:text-white">
        
        <button id="mobileBtn" class="hover:text-[#C1121F] transition-colors">
          <i id="mobileIcon" class="fas fa-bars text-2xl"></i>
        </button>
      </div>
    </div>

    <div id="mobileMenu" class="xl:hidden hidden bg-white dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-white/10 absolute left-0 w-full shadow-xl">
      <div class="flex flex-col px-4 py-4 space-y-1 font-bold uppercase text-xs tracking-wide">
      
        
        <div class="flex flex-col">
          <button id="mobileHomeBtn" class="mobile-nav-link flex items-center justify-between text-black dark:text-gray-300 px-4 py-3 border-l-4 border-transparent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors w-full text-left">
            <span>HOME</span>
            <i id="mobileHomeIcon" class="fas fa-chevron-down text-xs transition-transform duration-200"></i>
          </button>
          <div id="mobileHomeMenu" class="hidden flex flex-col pl-8 pr-4 py-2 bg-gray-50 dark:bg-[#111111] border-l-4 border-transparent">
            <a href="index.html" class="py-2 text-xs text-black dark:text-gray-400 hover:text-[#C1121F] dark:hover:text-white">HOME 1</a>
            <a href="home2.html" class="py-2 text-xs text-black dark:text-gray-400 hover:text-[#C1121F] dark:hover:text-white">HOME 2</a>
          </div>
        </div>
        <a href="about.html" class="mobile-nav-link text-black dark:text-gray-300 px-4 py-3 border-l-4 border-transparent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">About</a>

        <a href="auction.html" class="mobile-nav-link text-black dark:text-gray-300 px-4 py-3 border-l-4 border-transparent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">Auctions</a>
        <a href="collections.html" class="mobile-nav-link text-black dark:text-gray-300 px-4 py-3 border-l-4 border-transparent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">Collections</a>
        <a href="memarobilia.html" class="mobile-nav-link text-black dark:text-gray-300 px-4 py-3 border-l-4 border-transparent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"> Memorabilia</a>
                <a href="shop.html" class="mobile-nav-link text-black dark:text-gray-300 px-4 py-3 border-l-4 border-transparent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"> Shop</a>
                <a href="contact.html" class="mobile-nav-link text-black dark:text-gray-300 px-4 py-3 border-l-4 border-transparent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"> Contact</a>

        <div class="flex flex-col">
          <button id="mobileDashBtn" class="mobile-nav-link flex items-center justify-between text-black dark:text-gray-300 px-4 py-3 border-l-4 border-transparent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors w-full text-left">
            <span>DASHBOARD</span>
            <i id="mobileDashIcon" class="fas fa-chevron-down text-xs transition-transform duration-200"></i>
          </button>
          <div id="mobileDashMenu" class="hidden flex flex-col pl-8 pr-4 py-2 bg-gray-50 dark:bg-[#111111] border-l-4 border-transparent">
            <a href="user.html" class="py-2 text-xs text-black dark:text-gray-400 hover:text-[#C1121F] dark:hover:text-white">User</a>
            <a href="admin.html" class="py-2 text-xs text-black dark:text-gray-400 hover:text-[#C1121F] dark:hover:text-white">Admin</a>
          </div>
        </div>

      </div>

      <div class="px-4 py-4 border-t border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 flex flex-col space-y-4">
        <div class="flex items-center justify-between w-full px-4">
          <button id="mobileRtlToggle" class="flex items-center justify-center w-16 h-8 text-xs font-bold text-black dark:text-white border border-gray-300 dark:border-gray-700 hover:border-[#C1121F] dark:hover:border-[#C1121F] hover:text-[#C1121F] dark:hover:text-[#C1121F] transition-colors rounded-sm">
            <span class="rtl-text">RTL</span>
          </button>
          <button id="mobileDarkToggle" class="flex items-center space-x-2 text-sm font-bold text-black dark:text-white uppercase">
            <span>Dark Mode</span>
            <i id="mobileDarkIcon" class="fas fa-moon text-lg"></i>
          </button>
        </div>

        <div class="grid grid-cols-2 gap-3 mt-2">
          <a href="login.html" class="text-center px-4 py-3 text-xs font-bold uppercase tracking-wide text-white bg-[#C1121F] rounded-sm">Log In</a>
          <a href="signup.html" class="text-center px-4 py-3 text-xs font-bold uppercase tracking-wide text-white bg-[#C1121F] rounded-sm">Sign Up</a>
        </div>
      </div>
    </div>
  </div>
</nav>
`;

    /* ===============================
       INJECT CUSTOM CSS VARIABLES & STYLES
    =============================== */
    const customStyles = document.createElement('style');
    customStyles.textContent = `
    :root {
      --primary-red: #C1121F;
      --hover-crimson: #780000;
    }

    body {
      padding-top: 5rem; /* Adjust for fixed nav */
      transition: background-color 0.2s ease, color 0.2s ease;
    }
    
    html.dark body {
      background-color: #050505; 
      color: #ffffff;
    }

    /* Desktop Active Link - Clean bottom border */
    .nav-link {
      position: relative;
    }
    .active-link {
      color: var(--primary-red) !important;
    }
    .active-link::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: var(--primary-red);
    }

    /* Mobile Active Link - Clean left border */
    .mobile-active-link {
      color: var(--primary-red) !important;
      border-left-color: var(--primary-red) !important;
      background-color: rgba(193, 18, 31, 0.05);
    }

    /* Sub-link Highlighting (Dropdowns) */
    .active-sub-link {
      color: var(--primary-red) !important;
      font-weight: 900 !important;
    }
    .mobile-active-sub-link {
      color: var(--primary-red) !important;
      background-color: rgba(193, 18, 31, 0.05);
      border-left-color: var(--primary-red) !important;
    }
  `;
    document.head.appendChild(customStyles);

    /* ===============================
       ACTIVE NAV LINK HIGHLIGHT
    =============================== */
    const currentPage = window.location.pathname.split("/").pop();
    const homePages = ['', 'index.html', './', '/'];

    function setActive() {
        const allLinks = document.querySelectorAll("nav a");
        const allButtons = document.querySelectorAll("nav button.nav-link, nav button.mobile-nav-link");

        allLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (!href) return;

            link.classList.remove("active-link", "mobile-active-link", "active-sub-link", "mobile-active-sub-link");

            const isHomeMatch = homePages.includes(currentPage) && href === 'index.html';
            if (href === currentPage || isHomeMatch) {
                if (link.classList.contains("nav-link")) {
                    link.classList.add("active-link");
                } else if (link.classList.contains("mobile-nav-link")) {
                    link.classList.add("mobile-active-link");
                } else {
                    // Dropdown/Sub-link
                    const isMobile = link.closest("#mobileMenu") !== null;
                    link.classList.add(isMobile ? "mobile-active-sub-link" : "active-sub-link");
                }
            }
        });

        allButtons.forEach(btn => {
            const isDesktop = btn.classList.contains("nav-link");
            btn.classList.remove(isDesktop ? "active-link" : "mobile-active-link");

            const dropdown = btn.nextElementSibling;
            if (dropdown) {
                const links = dropdown.querySelectorAll("a");
                let activeChild = false;
                links.forEach(l => {
                    const h = l.getAttribute("href");
                    if (h === currentPage || (homePages.includes(currentPage) && h === 'index.html')) {
                        activeChild = true;
                    }
                });
                if (activeChild) {
                    btn.classList.add(isDesktop ? "active-link" : "mobile-active-link");
                }
            }
        });
    }

    setActive();

    /* ===============================
       MOBILE MENU ACCORDIONS
    =============================== */
    const toggleAccordion = (btnId, menuId, iconId) => {
        const btn = document.getElementById(btnId);
        const menu = document.getElementById(menuId);
        const icon = document.getElementById(iconId);

        if (btn && menu && icon) {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                menu.classList.toggle("hidden");
                icon.classList.toggle("rotate-180");
            });
        }
    };

    toggleAccordion("mobileHomeBtn", "mobileHomeMenu", "mobileHomeIcon");
    toggleAccordion("mobileDashBtn", "mobileDashMenu", "mobileDashIcon");

    /* ===============================
       MOBILE MENU TOGGLE
    =============================== */
    const mobileBtn = document.getElementById("mobileBtn");
    const mobileIcon = document.getElementById("mobileIcon");
    const mobileMenu = document.getElementById("mobileMenu");

    if (mobileBtn && mobileIcon && mobileMenu) {
        mobileBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            mobileMenu.classList.toggle("hidden");

            if (mobileMenu.classList.contains("hidden")) {
                mobileIcon.className = "fas fa-bars text-2xl";
            } else {
                mobileIcon.className = "fas fa-times text-2xl text-[#C1121F]";
            }
        });

        document.addEventListener("click", function (e) {
            if (!mobileMenu.classList.contains("hidden") && !mobileBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add("hidden");
                mobileIcon.className = "fas fa-bars text-2xl";
            }
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth >= 1280) { // xl breakpoint
                mobileMenu.classList.add("hidden");
                mobileIcon.className = "fas fa-bars text-2xl";
            }
        });
    }

    /* ===============================
       RTL MODE LOGIC
    =============================== */
    const rtlToggle = document.getElementById("rtlToggle");
    const mobileRtlToggle = document.getElementById("mobileRtlToggle");

    function toggleRTL() {
        const isRTL = document.documentElement.dir === "rtl";
        document.documentElement.dir = isRTL ? "ltr" : "rtl";

        if (rtlToggle) rtlToggle.textContent = isRTL ? "RTL" : "LTR";
        const mobileRtlSpan = mobileRtlToggle?.querySelector(".rtl-text");
        if (mobileRtlSpan) mobileRtlSpan.textContent = isRTL ? "RTL" : "LTR";

        localStorage.setItem("VaultCard-rtl", !isRTL);
    }

    rtlToggle?.addEventListener("click", toggleRTL);
    mobileRtlToggle?.addEventListener("click", toggleRTL);

    const savedRTL = localStorage.getItem("VaultCard-rtl") === "true";
    if (savedRTL) {
        document.documentElement.dir = "rtl";
        if (rtlToggle) rtlToggle.textContent = "LTR";
        const mobileRtlSpan = mobileRtlToggle?.querySelector(".rtl-text");
        if (mobileRtlSpan) mobileRtlSpan.textContent = "LTR";
    }

    /* ===============================
       DARK MODE LOGIC
    =============================== */
    const darkToggle = document.getElementById("darkToggle");
    const mobileDarkToggle = document.getElementById("mobileDarkToggle");
    const darkIcon = document.getElementById("darkIcon");
    const mobileDarkIcon = document.getElementById("mobileDarkIcon");

    function updateThemeIcons(isDark) {
        if (darkIcon) darkIcon.className = isDark ? "fas fa-sun text-lg" : "fas fa-moon text-lg";
        if (mobileDarkIcon) mobileDarkIcon.className = isDark ? "fas fa-sun text-lg" : "fas fa-moon text-lg";
    }

    const savedDarkMode = localStorage.getItem("VaultCard-dark") === "true";
    if (savedDarkMode) {
        document.documentElement.classList.add("dark");
        updateThemeIcons(true);
    } else {
        document.documentElement.classList.remove("dark");
        updateThemeIcons(false);
    }

    function toggleTheme() {
        const isDark = document.documentElement.classList.toggle("dark");
        localStorage.setItem("VaultCard-dark", isDark);
        updateThemeIcons(isDark);
    }

    darkToggle?.addEventListener("click", toggleTheme);
    mobileDarkToggle?.addEventListener("click", toggleTheme);
});