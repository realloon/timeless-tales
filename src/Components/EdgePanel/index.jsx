import { getConfig } from '@vercel/edge-config'

export default function EdgePanel() {
  console.log(process.env)

  return (
    <div>
      <h2>Edge Panel</h2>
    </div>
  )
}
