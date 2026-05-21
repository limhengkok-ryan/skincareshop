import { Link } from "react-router-dom";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="fixed top-0 w-full z-50 glass-nav shadow-sm">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-earth-text">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <Link className="font-headline-md text-headline-md font-bold text-earth-text" to="/">The Little Trooper</Link>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link className="text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md" to="/">Home</Link>
            <Link className="text-secondary hover:text-primary transition-colors font-body-md text-body-md" to="/products">Products</Link>
            <Link className="text-secondary hover:text-primary transition-colors font-body-md text-body-md" to="/our-story">Story</Link>
            <Link className="text-secondary hover:text-primary transition-colors font-body-md text-body-md" to="/the-science">Science</Link>
            <Link className="text-secondary hover:text-primary transition-colors font-body-md text-body-md" to="/testimonials">Testimonials</Link>
            <Link className="text-secondary hover:text-primary transition-colors font-body-md text-body-md" to="/contact">Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="text-earth-text hover:opacity-80 transition-opacity">
              <span className="material-symbols-outlined">shopping_bag</span>
            </button>
            <button className="text-earth-text hover:opacity-80 transition-opacity">
              <span className="material-symbols-outlined">person</span>
            </button>
          </div>
        </div>
      </header>
      <main className="pt-20">{children}</main>
      <footer className="bg-surface-container dark:bg-surface-container-high py-16">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-12">
            <div className="md:col-span-1">
              <div className="font-headline-md text-headline-md font-bold text-earth-text mb-6">The Little Trooper</div>
              <p className="text-secondary text-body-md mb-6">Providing high-quality skincare built for sensitive skins and the healing journey of TSW.</p>
              <div className="flex gap-4">
                <a className="text-earth-text hover:text-primary transition-colors" href="https://www.facebook.com/thelittletroopersg">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path></svg>
                </a>
                <a className="text-earth-text hover:text-primary transition-colors" href="https://www.instagram.com/thelittletroopersg">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-earth-text uppercase tracking-widest mb-6">Quick Links</h4>
              <ul className="space-y-3 font-body-md text-body-md text-secondary">
                <li><Link className="hover:text-primary transition-colors" to="/">Home</Link></li>
                <li><Link className="hover:text-primary transition-colors" to="/products">Our Products</Link></li>
                <li><Link className="hover:text-primary transition-colors" to="/our-story">Our Story</Link></li>
                <li><Link className="hover:text-primary transition-colors" to="/the-science">The Science</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-earth-text uppercase tracking-widest mb-6">Policy</h4>
              <ul className="space-y-3 font-body-md text-body-md text-secondary">
                <li><a className="hover:text-primary transition-colors" href="/policies/privacy-policy">Privacy Policy</a></li>
                <li><a className="hover:text-primary transition-colors" href="/pages/disclaimer">Disclaimer</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Shipping Info</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Wholesale</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-earth-text uppercase tracking-widest mb-6">Location</h4>
              <div className="flex items-center gap-2 text-secondary mb-4">
                <span className="material-symbols-outlined text-sm">public</span>
                <span>Singapore | SGD $</span>
              </div>
              <p className="text-body-md text-secondary">Built for sensitive skins by parents who care.</p>
            </div>
          </div>
          <div className="pt-8 border-t border-outline-variant/30 text-center">
            <p className="text-label-sm text-label-sm text-secondary">
              © 2024 The Little Trooper. All rights reserved. Built for sensitive skins.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
