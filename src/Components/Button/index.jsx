import './index.css'

export default function Button({
  type = 'normal',
  content = 'Button',
  img,
  handleClick = () => {},
  ...rest
}) {
  let buttonView = content

  if (type === 'icon') {
    buttonView = <img src={img} alt={content} />
  }

  return (
    <button
      onClick={event => handleClick(event)}
      className={`btn ${type}-btn`}
      {...rest}
    >
      {buttonView}
    </button>
  )
}
