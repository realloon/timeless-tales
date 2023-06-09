import Header from './Components/Header'
import Aside from 'Components/Aside'
import Footer from 'Components/Footer'
import Button from 'Components/Button'
import ConfigPanel from 'Components/ConfigPanel'

import { useState } from 'react'
// 样式表
import './App.css'

export default function App() {
  const [asideIsShow, setAsideIsShow] = useState(false)
  const [configPanelIsShow, setConfigPanelIsShow] = useState(true)

  const toggleAside = () => {
    setAsideIsShow(!asideIsShow)
  }

  const toggleConfigPanel = () => {
    setConfigPanelIsShow(!configPanelIsShow)
  }

  return (
    <div className="App">
      <Header
        title={'Timeless Tales'}
        {...{ toggleAside, toggleConfigPanel }}
      />
      <div className="wrapper">
        <Aside {...{ asideIsShow }} />

        <main>
          <Button content="按钮" type="text" />

          {configPanelIsShow && <ConfigPanel />}
        </main>
      </div>
      <Footer title="Timeless Tales" name="Realloon"></Footer>
    </div>
  )
}
