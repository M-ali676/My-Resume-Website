class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .navbar {
          transition: all 0.3s ease;
        }
        .navbar.scrolled {
          background-color: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .nav-link {
          position: relative;
        }
        .nav-link:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #6366f1;
          transition: width 0.3s ease;
        }
        .nav-link:hover:after {
          width: 100%;
        }
        .mobile-menu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
        }
        .mobile-menu.open {
          max-height: 500px;
        }
      </style>
      <nav class="navbar fixed w-full z-50 bg-white md:bg-transparent py-4 px-6 md:px-12">
        <div class="flex justify-between items-center">
          <a href="#" class="text-2xl font-bold text-indigo-600">ResumeCraft</a>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:flex space-x-8">
            <a href="#about" class="nav-link text-gray-700 hover:text-indigo-600">About</a>
            <a href="#experience" class="nav-link text-gray-700 hover:text-indigo-600">Experience</a>
            <a href="#education" class="nav-link text-gray-700 hover:text-indigo-600">Education</a>
            <a href="#projects" class="nav-link text-gray-700 hover:text-indigo-600">Projects</a>
            <a href="#contact" class="nav-link text-gray-700 hover:text-indigo-600">Contact</a>
          </div>
          
          <!-- Mobile menu button -->
          <button id="mobile-menu-button" class="md:hidden text-gray-700 focus:outline-none">
            <i data-feather="menu"></i>
          </button>
        </div>
        
        <!-- Mobile Navigation -->
        <div id="mobile-menu" class="mobile-menu md:hidden">
          <div class="pt-4 pb-2 space-y-2">
            <a href="#about" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50">About</a>
            <a href="#experience" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50">Experience</a>
            <a href="#education" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50">Education</a>
            <a href="#projects" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50">Projects</a>
            <a href="#contact" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50">Contact</a>
          </div>
        </div>
      </nav>
    `;

    // Initialize feather icons
    feather.replace();

    // Mobile menu toggle
    const mobileMenuButton = this.shadowRoot.getElementById('mobile-menu-button');
    const mobileMenu = this.shadowRoot.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const icon = mobileMenuButton.querySelector('i');
      if (mobileMenu.classList.contains('open')) {
        feather.icons['x'].toSvg().then(svg => {
          icon.outerHTML = svg;
        });
      } else {
        feather.icons['menu'].toSvg().then(svg => {
          icon.outerHTML = svg;
        });
      }
    });

    // Navbar scroll effect
    const navbar = this.shadowRoot.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
