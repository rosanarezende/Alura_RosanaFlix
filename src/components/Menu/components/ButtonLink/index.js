import React from 'react'

function ButtonLink({ children, className, href }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}

export default ButtonLink
