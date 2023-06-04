// 同步加载配置文件
import config from 'config/config.json'
// 子组件
import Input from 'Components/Input'
// hooks
import { useState } from 'react'
//
import './index.css'

export default function ConfigPanel() {
  const [configData, setConfigData] = useState(config)

  const handleChange = (section, key, event) => {
    const { value, checked, type } = event.target
    const changedValue = type === 'checkbox' ? checked : value // 终于解决问题了

    setConfigData(prevState => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [key]: {
          ...prevState[section][key],
          value: changedValue, // <---- 原来坏门在这！
        },
      },
    }))
  }

  const handleSave = event => {
    event.preventDefault()

    // 模拟 api
    console.log('wanna save:')
    console.log(configData)
  }

  return (
    <form onSubmit={event => handleSave(event)} className="config-panel">
      <h2>Config</h2>
      {Object.keys(configData).map(section => (
        <fieldset key={section}>
          <legend>{section}</legend>
          {Object.keys(configData[section]).map(key => {
            const { value, description } = configData[section][key]

            return (
              <div className="config-item" key={key}>
                <div className="config-item-wrapper">
                  <h3>
                    Editor: <label htmlFor={key}>{key}</label>
                  </h3>
                  <p>{description}</p>
                </div>

                <Input
                  name={key}
                  value={value}
                  title={description}
                  onChange={event => handleChange(section, key, event)}
                ></Input>
              </div>
            )
          })}
        </fieldset>
      ))}
      <input type="submit" value="Save" />
    </form>
  )
}
