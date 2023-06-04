export default function getInputType(value) {
  let type
  if (typeof value === 'boolean') {
    type = 'boolean'
  } else if (typeof value === 'number') {
    if (value < 20) {
      type = 'range'
    } else {
      type = 'number'
    }
  } else if (Array.isArray(value)) {
    type = 'checkbox'
  } else if (/^#([0-9A-F]{3}){1,2}$/i.test(value)) {
    type = 'color'
  } else {
    type = 'text'
  }
  return type
}

// FIXME: input 控件在修改后会变成字符串类型，不通过匹配
