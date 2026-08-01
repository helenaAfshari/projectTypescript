import React, { JSX } from 'react'

type Article={
    // روی ریکت نود بزارم همه چی میتونم بهش پاس بدم متن یا تگ ها یا...
    children: React.ReactNode
}
export default function Article({children} : Article) {
  return (
    <div>
        {children}
    </div>
  )
}
