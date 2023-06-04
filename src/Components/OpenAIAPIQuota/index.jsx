import { useEffect, useState } from 'react'
import './index.css'

export default function OpenAIAPIQuota() {
  const [quota, setQuota] = useState({})

  const queryQuota = async key => {
    try {
      const response = await fetch(
        'https://api.chatanywhere.cn/v1/query/balance',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: key,
          },
        }
      )

      const data = await response.json()
      return data
    } catch (error) {
      console.error(error)
      throw new Error('无法获取OpenAI API配额信息。')
    }
  }

  useEffect(() => {
    const key = 'sk-TJOCMvDLTJeGiGETWchgoUFa26UhEWneZPvkCFPb1gxWaYoD'

    queryQuota(key)
      .then(data => {
        setQuota(data)
      })
      .catch(error => {
        console.error(error)
        setQuota({ error: '无法获取OpenAI API配额信息。' })
        setQuota({
          error:
            '无法获取 OpenAI API 配额信息，请检查 API key 是否正确并重试。',
        })
      })
  }, [])

  const remainingBalance = quota.balanceTotal - quota.balanceUsed
  const remainingPercentage = (remainingBalance / quota.balanceTotal) * 100

  return (
    <article className="OpenAI-API-quota">
      <h2>OpenAI API Quota</h2>

      {quota.error ? (
        <p style={{ color: 'red' }}>{quota.error}</p>
      ) : (
        <section>
          <progress
            max="100"
            value={remainingPercentage || 0}
            title={`${remainingPercentage || 0}%`}
          ></progress>

          <p>
            剩余 ${remainingBalance || 0} | {remainingPercentage || 0}%
          </p>
          <p>总额 ${quota.balanceTotal || 0}</p>
          <p>已用 ${quota.balanceUsed || 0}</p>
        </section>
      )}
    </article>
  )
}
