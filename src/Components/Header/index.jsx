// 资源
import aside from '../../icons/aside.svg'
import set from '../../icons/set.svg'
// 组件
import Button from 'Components/Button'
//
import { useCallback, useEffect, useRef, useState } from 'react'
// 样式
import './index.css'

export default function Header({ title = 'Page Title', toggleAside }) {
  const [isSticky, setIsSticky] = useState(false)
  const prevIsStickyRef = useRef(false)

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      const isSticky = window.pageYOffset > 0
      if (isSticky !== prevIsStickyRef.current) {
        setIsSticky(isSticky)
        prevIsStickyRef.current = isSticky
      }
    })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  const handleClick = () => {
    toggleAside()
  }

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <Button
        handleClick={handleClick}
        type="icon"
        content="侧边栏"
        img={aside}
      ></Button>
      <h1>{title}</h1>
      <nav>
        <Button type="icon" content="设置" img={set}></Button>
      </nav>
    </header>
  )
}