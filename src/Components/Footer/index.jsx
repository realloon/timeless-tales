// 
import './index.css'

export default function Footer({ title = 'Page Title', name = 'name' }) {
  return (
    <footer className='footer'>
      <section className='copyright'>
        <h2>{title}</h2>
        <p>
          Copyright © {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </section>
      <section>
        <nav>
          Github
        </nav>
      </section>
    </footer>
  )
}
