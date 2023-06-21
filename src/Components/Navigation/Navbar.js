import React from 'react'
import styled from 'styled-components'
import avatar from '../../img/avatar.png'
import { signout } from '../../utils/Icons'
import { menuItems } from '../../utils/menuItems'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar({ active, setActive }) {
  const user = useSelector((state) => state.user.user)

  return (
    <NavStyled>
      <div className='user-con'>
        <img src={avatar} alt='' />
        <div className='text'>
          <h2>{user?.username}</h2>
          <p>Kucing Finance</p>
        </div>
      </div>
      <ul className='menu-items'>
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => {
                console.log(setActive)
                setActive(item.id)
              }}
              className={active === item.id ? 'active' : ''}
            >
              {item.icon}
              <span>
                <Link to={'/' + item.title}>{item.title}</Link>
              </span>
            </li>
          )
        })}
      </ul>
      <div className='bottom-nav'>
        <li>{signout} Sign Out</li>
      </div>
    </NavStyled>
  )
}

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 320px;
  height: 100%;
  background: rgba(252, 246, 249, 0.6);
  backdrop-filter: blur(4.5px);
  border: 3px solid #ffffff;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid #ffffff;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
    h2 {
      color: rgba(34, 34, 96, 1);
    }
    p {
      color: rgba(34, 34, 96, 0.6);
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      -ms-layout-grid-line: none;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: rgba(34, 34, 96, 0.6);
      padding-left: 1rem;
      position: relative;
      i {
        color: rgba(34, 34, 96, 0.6);
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
    }
    a{
      color: rgba(34, 34, 96, 0.6);
      text-decoration : none ;
    }
  }

  .active {
    color: rgba(34, 34, 96, 1) !important;
    i {
      color: rgba(34, 34, 96, 1) !important;
    }
    a{
      color: rgba(34, 34, 96, 1);
      text-decoration : none ;
    }
  }
`

export default Navbar
