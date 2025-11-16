import React from 'react'
import './footer.css'

const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <h3 className="brand-title">Blogify</h3>
          <p className="brand-sub">Real stories, real people — read, learn, share.</p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/posts">Posts</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        <div className="site-footer__subscribe">
          <form className="subscribe-form" onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="newsletter" className="sr-only">Subscribe to our newsletter</label>
            <input id="newsletter" name="newsletter" type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="site-footer__social">
          <span className="social-label">Follow</span>
          <div className="social-links">
            <a href="#" aria-label="Twitter" title="Twitter" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M22 5.92c-.63.28-1.3.46-2 .54a3.5 3.5 0 0 0-6 3.18 9.9 9.9 0 0 1-7.2-3.65 3.49 3.49 0 0 0 1.08 4.66c-.52 0-1.02-.16-1.45-.4v.04a3.5 3.5 0 0 0 2.8 3.43c-.37.1-.76.15-1.16.15-.28 0-.55-.03-.82-.08a3.5 3.5 0 0 0 3.27 2.43A7 7 0 0 1 3 18.58 9.86 9.86 0 0 0 8.29 20c6.02 0 9.33-4.98 9.33-9.3v-.42A6.7 6.7 0 0 0 22 5.92z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" aria-label="GitHub" title="GitHub" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.74.08-.74 1.2.08 1.84 1.24 1.84 1.24 1.08 1.86 2.84 1.32 3.53 1 .1-.78.42-1.32.76-1.63-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" title="LinkedIn" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.8v1.6h.06c.53-1 1.82-2.05 3.74-2.05 4 0 4.74 2.6 4.74 6v7.45H19V16.5c0-2.5-.04-5.74-3.5-5.74-3.5 0-4 2.7-4 5.5V21H9z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="site-footer__bar">
        <small>© {year} Blogify. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
