import Button from 'Components/Button'
//
import github from 'icons/github.svg'
//
import './index.css'

export default function Footer({ title = 'Page Title', name = 'name' }) {
  return (
    <footer className="footer">
      <section className="about">
        <nav>
          <Button
            type="icon"
            content="Github"
            img={github}
            handleClick={() => {
              window.open('https://github.com/realloon/timeless-tales')
            }}
          ></Button>
        </nav>
      </section>
      <section className="copyright">
        <h2>{title}</h2>
        <p>
          Copyright © {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </section>
    </footer>
  )
}
