import './index.css'

export default function Input({ value, name, ...rest }) {
  const type = typeof value === 'boolean' ? 'checkbox' : 'text' // TODO: 添加更多类型判断

  if (type === 'checkbox') {
    return (
      <div className="switch">
        <input
          type="checkbox"
          name={name}
          id={name}
          checked={value}
          {...rest}
        />
        <label htmlFor={name}></label>
      </div>
    )
  } else {
    return (
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        className="input"
        {...rest}
      />
    )
  }
}
