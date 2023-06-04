import Header from './Components/Header'
import Aside from 'Components/Aside'
import Input from 'Components/Input'
import Button from 'Components/Button'
import ConfigPanel from 'Components/ConfigPanel'

import { useState } from 'react'
// 样式表
import './App.css'

export default function App() {
  const [asideIsShow, setAsideIsShow] = useState(false)

  const toggleAside = () => {
    setAsideIsShow(!asideIsShow)
  }

  return (
    <div className="App">
      <Header title={'Timeless Tales'} {...{ toggleAside }}></Header>
      <div className="wrapper">
        <Aside {...{ asideIsShow }}></Aside>

        <main>
          <Button content={'按钮'} type="text"></Button>

          <ConfigPanel></ConfigPanel>
        </main>
      </div>
    </div>
  )
}
