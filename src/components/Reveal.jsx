import { forwardRef } from 'react'
import { useInView } from '../hooks/useInView.js'

function Reveal(
  { as: Tag = 'div', delay = 0, className = '', children, ...rest },
  forwardedRef
) {
  const [ref, inView] = useInView()

  const setRefs = (node) => {
    ref.current = node
    if (typeof forwardedRef === 'function') forwardedRef(node)
    else if (forwardedRef) forwardedRef.current = node
  }

  return (
    <Tag
      ref={setRefs}
      className={`reveal ${inView ? 'reveal--visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default forwardRef(Reveal)
