import './index.css'

export default function Aside({ asideIsShow = true }) {
  return (
    <aside className={`aside ${!asideIsShow ? 'collapsed' : ''}`}>
      <div className="container">
        <h2>some text</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          laboriosam doloribus a pariatur cupiditate error tenetur molestiae
          itaque voluptate ratione! Minima laborum earum perferendis a fugiat
          quae ratione maiores in!
        </p>
        <ul>
          <li>Home</li>
          <li>Project</li>
          <li>About</li>
        </ul>
      </div>
    </aside>
  )
}
