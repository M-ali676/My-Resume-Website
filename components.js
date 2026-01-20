class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .footer {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
        }
        .social-icon {
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          transform: translateY(-3px);
        }
      </style>
      <footer class="footer text-white py-12">
        <div class="container mx-auto px-6">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="mb-6 md:mb-0">
              <h2 class="text-2xl font-bold mb-2">[Your Name]</h2>
              <p class="opacity-80">Professional [Your Title]</p>
            </div>
            
            <div class="mb-6 md:mb-0">
              <h3 class="text-lg font-semibold mb-3">Quick Links</h3>
              <ul class="space-y-2">
                <li><a href="#about" class="opacity-80 hover:opacity-100 transition">About</a></li>
                <li><a href="#experience" class="opacity-80 hover:opacity-100 transition">Experience</a></li>
                <li><a href="#projects" class="opacity-80 hover:opacity-100 transition">Projects</a></li>
                <li><a href="#contact" class="opacity-80 hover:opacity-100 transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold mb-3">Connect With Me</h3>
              <div class="flex space-x-4">
                <a href="#" class="social-icon bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-20">
                  <i data-feather="linkedin"></i>
                </a>
                <a href="#" class="social-icon bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-20">
                  <i data-feather="github"></i>
                </a>
                <a href="#" class="social-icon bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-20">
                  <i data-feather="twitter"></i>
                </a>
                <a href="#" class="social-icon bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-20">
                  <i data-feather="mail"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div class="border-t border-white border-opacity-20 mt-8 pt-8 text-center opacity-80">
            <p>&copy; <span id="current-year"></span> [Your Name]. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;

    // Initialize feather icons
    feather.replace();
  }
}

customElements.define('custom-footer', CustomFooter);
