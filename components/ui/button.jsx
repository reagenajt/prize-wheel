// In components/ui/button.jsx
import React from 'react'

const Button = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
})
Button.displayName = "Button"

export { Button }

// In components/ui/card.jsx
const Card = ({ className, ...props }) => {
  return (
    <div
      className={`rounded-xl border bg-card text-card-foreground shadow ${className}`}
      {...props}
    />
  )
}

const CardHeader = ({ className, ...props }) => {
  return (
    <div
      className={`flex flex-col space-y-1.5 p-6 ${className}`}
      {...props}
    />
  )
}

const CardContent = ({ className, ...props }) => {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props} />
  )
}

export { Card, CardHeader, CardContent }