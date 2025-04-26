import { Link } from 'react-router'
import { useState, useEffect } from 'react';

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll) {
      setIsHidden(true);
    } else if (currentScroll < lastScroll) {
      setIsHidden(false);
    }
    setLastScroll(currentScroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll, , isHidden]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isHidden ? 'hide' : ''}`}>
        <nav>
          <button className={`menu-btn ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            {isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          </button>
            <ul className={`${isMenuOpen ? 'open' : ''}`}>
                <li className='nav-link'><Link to='' onClick={toggleMenu}>Главная</Link></li>
                <li className='nav-link'><Link to='events' onClick={toggleMenu}>Мероприятия</Link></li>
                <li className='nav-link'><Link to='contacts' onClick={toggleMenu}>Контакты</Link></li>
                <li className='nav-link'><Link to='about' onClick={toggleMenu}>О школе</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header