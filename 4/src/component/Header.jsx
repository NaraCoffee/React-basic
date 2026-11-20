import React from 'react'

const Header = ({ logo }) => {
  const menus = ['소개', '메뉴', '오시는 길']
  return (
    <header>
      {/* 로고 나오게 하기 */}
      <h1 className="logo">{logo}</h1>
      <nav>
        <ul className="nav">
          {/* menu 뿌려주기 */}
          {menus.map((menu) => (
            <li key={menu}>
              <a href="#">{menu}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
