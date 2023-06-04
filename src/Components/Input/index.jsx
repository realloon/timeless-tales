import './index.css'

export default function Input({ value, ...rest }) {
  if (typeof value === 'boolean') {
    return <input type="checkbox" checked={value} {...rest} />
  } else {
    return <input type="text" value={value} className='input' {...rest} />
  }
}
