import React, { useEffect, useRef } from 'react'

type NavbarProps = {
  navOpen: boolean
}

const Navbar: React.FC<NavbarProps> = ({ navOpen }) => {
  const lastActiveLink = useRef<HTMLAnchorElement | null>(null)
  const activeBox = useRef<HTMLDivElement | null>(null)

  const initActiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px'
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px'
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px'
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px'
    }
  }

  useEffect(initActiveBox, [])
  window.addEventListener('resize',initActiveBox)

  const activeCurrentLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = event.target as HTMLAnchorElement
    if (!target || !activeBox.current) return

    lastActiveLink.current?.classList.remove('active')
    target.classList.add('active')
    lastActiveLink.current = target

    activeBox.current.style.top = target.offsetTop + 'px'
    activeBox.current.style.left = target.offsetLeft + 'px'
    activeBox.current.style.width = target.offsetWidth + 'px'
    activeBox.current.style.height = target.offsetHeight + 'px'
  }

  const navItems: {
    label: string
    link: string
    className: string
  }[] = [
    { label: 'Главная', link: '#home', className: 'nav-link active' },
    { label: 'Обо мне', link: '#about', className: 'nav-link' },
    { label: 'Работы', link: '#work', className: 'nav-link' },
    { label: 'Отзывы', link: '#reviews', className: 'nav-link' },
  ]

  return (
    <nav className={`navbar ${navOpen ? 'active' : ''}`}>
      {navItems.map(({ label, link, className }) => (
        <a
          href={link}
          key={label}
          ref={label === 'Главная' ? lastActiveLink : undefined}
          className={className}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  )
}

export default Navbar
