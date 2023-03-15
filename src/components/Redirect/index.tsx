import { useState, useEffect, ReactNode, memo } from 'react'
import { useRouter } from 'next/router'

export interface RedirectComponentProps {
  children: ReactNode
}

const RedirectComponent = ({ children }: RedirectComponentProps) => {
  const router = useRouter()
  const [time, setTime] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (time >= 5) {
      router.push('/carts')
    }
  }, [time, router])

  return <div>{children}</div>
}

export default memo(RedirectComponent)
