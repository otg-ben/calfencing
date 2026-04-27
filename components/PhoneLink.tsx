'use client'

export function PhoneLink({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <a
      href="tel:415-472-1419"
      className={className}
      onClick={() => {
        window.gtag?.('event', 'conversion', {
          send_to: 'AW-1040856089/N3XsCKeez6McEJnoqPAD',
        })
      }}
    >
      {children ?? '415-472-1419'}
    </a>
  )
}
