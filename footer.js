// Sports Card & Memorabilia Marketplace Footer
// Theme: Primary Red (#C1121F), Deep Crimson Hover (#780000), Black & White

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
<footer class="w-full transition-colors duration-200 bg-white dark:bg-[#050505] border-t-4" style="border-top-color: var(--primary-red);">
  
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

      <div class="lg:col-span-4 lg:pr-8">
        <a href="index.html" class="flex items-center space-x-2 rtl:space-x-reverse mb-6">
          <i class="fas fa-layer-group text-3xl" style="color: var(--primary-red);"></i>
          <span class="text-2xl font-black tracking-tight uppercase text-black dark:text-white">
            Vault<span style="color: var(--primary-red);">Card</span>
          </span>
        </a>
        <p class="text-sm font-semibold text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          The premier destination for graded vintage, modern prospects, and authenticated memorabilia. Buy, sell, and bid with absolute confidence.
        </p>
        
        <div class="flex gap-3">
          <a href="#" class="social-btn w-10 h-10 flex items-center justify-center rounded-sm transition-all duration-200 text-black dark:text-white border border-gray-300 dark:border-gray-700 hover:text-white hover:border-transparent bg-gray-50 dark:bg-[#0a0a0a]">
            <i class="fab fa-instagram text-lg"></i>
          </a>
          <a href="#" class="social-btn w-10 h-10 flex items-center justify-center rounded-sm transition-all duration-200 text-black dark:text-white border border-gray-300 dark:border-gray-700 hover:text-white hover:border-transparent bg-gray-50 dark:bg-[#0a0a0a]">
            <i class="fab fa-twitter text-lg"></i>
          </a>
          <a href="#" class="social-btn w-10 h-10 flex items-center justify-center rounded-sm transition-all duration-200 text-black dark:text-white border border-gray-300 dark:border-gray-700 hover:text-white hover:border-transparent bg-gray-50 dark:bg-[#0a0a0a]">
            <i class="fab fa-youtube text-lg"></i>
          </a>
        
        </div>
      </div>

      <div class="lg:col-span-2">
        <h3 class="text-sm font-black mb-6 uppercase tracking-widest text-black dark:text-white">Marketplace</h3>
        <ul class="space-y-4 text-sm font-bold">
          <li><a href="auctions.html" class="footer-link text-gray-600 dark:text-gray-400">Auctions</a></li>
          <li><a href="collections.html" class="footer-link text-gray-600 dark:text-gray-400">Collections</a></li>
          <li><a href="shop.html" class="footer-link text-gray-600 dark:text-gray-400">Shop</a></li>
          <li><a href="memorabilia.html" class="footer-link text-gray-600 dark:text-gray-400">Memorabilia</a></li>
          <li><a href="contact.html" class="footer-link text-gray-600 dark:text-gray-400">Contact</a></li>
        </ul>
      </div>
      
      <div class="lg:col-span-2">
        <h3 class="text-sm font-black mb-6 uppercase tracking-widest text-black dark:text-white">Services</h3>
        <ul class="space-y-4 text-sm font-bold">
          <li><a href="grading.html" class="footer-link text-gray-600 dark:text-gray-400">PSA/BGS Grading</a></li>
          <li><a href="authentication.html" class="footer-link text-gray-600 dark:text-gray-400">Authentication</a></li>
          <li><a href="vault.html" class="footer-link text-gray-600 dark:text-gray-400">The Vault</a></li>
          <li><a href="shipping.html" class="footer-link text-gray-600 dark:text-gray-400">Shipping Info</a></li>
          <li><a href="support.html" class="footer-link text-gray-600 dark:text-gray-400">Help & Support</a></li>
        </ul>
      </div>

      <div class="lg:col-span-4">
        <h3 class="text-sm font-black mb-6 uppercase tracking-widest text-black dark:text-white">The Hit List</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 font-semibold mb-5 leading-relaxed">
          Get weekly alerts on high-value auction blocks, exclusive sealed wax drops, and hobby news.
        </p>

        <form class="flex flex-col gap-3" id="newsletterForm">
          <div class="relative">
            <input type="email" placeholder="ENTER EMAIL ADDRESS" class="w-full px-4 py-3.5 bg-gray-100 dark:bg-[#0a0a0a] text-black dark:text-white text-xs font-bold uppercase tracking-wider border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-[#C1121F] dark:focus:border-[#C1121F] transition-colors rounded-sm">
            <i class="fas fa-envelope absolute right-4 top-4 text-gray-400"></i>
          </div>
          <button type="submit" class="w-full px-6 py-3.5 text-xs font-black uppercase tracking-widest text-white bg-[#C1121F] hover:bg-[#780000] transition-colors duration-200 rounded-sm">
            Subscribe Now
          </button>
        </form>
      </div>

    </div>
  </div>

  <div class="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0a0a0a]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row gap-4 justify-between items-center text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wide">
      
      <div class="flex items-center gap-2">
        <p>© 2026 VaultCard Marketplace. All rights reserved.</p>
      </div>


      <div class="flex gap-6">
        <a href="#" class="hover:text-[#C1121F] transition-colors duration-200">Privacy</a>
        <a href="#" class="hover:text-[#C1121F] transition-colors duration-200">Terms</a>
        <a href="#" class="hover:text-[#C1121F] transition-colors duration-200">Sitemap</a>
      </div>
    </div>
  </div>
</footer>
`;

  /* ===============================
     FOOTER INTERACTIVITY
  =============================== */
  
  // Newsletter form submission
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        // Minimalist alert suited for the theme
        alert('SUCCESS: You are now subscribed to The Hit List alerts.');
        emailInput.value = '';
      } else {
        alert('ERROR: Please enter a valid email address.');
      }
    });
  }

  /* ===============================
     RTL SUPPORT (Flipping Icons/Layouts)
  =============================== */
  function updateFooterRTL() {
    const isRTL = document.documentElement.dir === 'rtl';
    const footer = document.querySelector('footer');
    
    if (isRTL) {
      footer?.classList.add('rtl');
    } else {
      footer?.classList.remove('rtl');
    }
  }

  // Observe if the user toggles RTL from the navbar
  const rtlObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'dir') {
        updateFooterRTL();
      }
    });
  });

  rtlObserver.observe(document.documentElement, { attributes: true });
  updateFooterRTL();

  /* ===============================
     INJECT CUSTOM STYLES
  =============================== */
  const footerStyles = document.createElement('style');
  footerStyles.textContent = `
    :root {
      --primary-red: #C1121F;
      --hover-crimson: #780000;
    }

    /* Minimalist Link Hover Animation (Left Red Border indicator) */
    .footer-link {
      display: inline-block;
      position: relative;
      transition: color 0.2s ease;
      padding-left: 0;
    }

    .footer-link::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 2px;
      background-color: var(--primary-red);
      transition: width 0.2s ease;
    }

    .footer-link:hover {
      color: var(--primary-red) !important;
      padding-left: 12px;
    }
    
    .footer-link:hover::before {
      width: 6px;
    }

    /* RTL specific hover animation */
    footer.rtl .footer-link {
      padding-left: 0;
      padding-right: 0;
    }

    footer.rtl .footer-link::before {
      left: auto;
      right: 0;
    }

    footer.rtl .footer-link:hover {
      padding-left: 0;
      padding-right: 12px;
    }

    /* Social Button Hover Effect */
    .social-btn:hover {
      background-color: var(--primary-red) !important;
      border-color: var(--primary-red) !important;
    }
  `;
  document.head.appendChild(footerStyles);
});