import { MdAdminPanelSettings } from "react-icons/md";
import { Link } from 'react-router'
const Footer = () => {
  let windowWidth = window.innerWidth;

  const normalContent = (
    <>
      <div className="nav-link">
          <p>Телефон</p>
          <a href="tel:84754528475">8 (475) 452-84-75</a>
      </div>
      <div className="nav-link">
          <p>E-mail</p>
          <a href="mailto:mailto:michschool9@obr.g45.tambov.gov.ru">
          michschool9@obr.g45.tambov.gov.ru
          </a>
      </div>
      <div className="nav-link">
        <Link to="admin" style={{background: "none", display: "block"}}><MdAdminPanelSettings style={{color: "#9370DB", width: 60, height: 60}} /></Link>
      </div>
    </>
  );
  const minWidthContent = (
    <>
    <div className="nav-link">
                <a href="tel:84754528475">Телефон&#128222;</a>
            </div>
            <div className="nav-link">
                <a href="mailto:mailto:michschool9@obr.g45.tambov.gov.ru">E-mail&#128231;</a>
            </div>
            <div className="nav-link">
              <Link to="admin" style={{background: "none", display: "block", padding: "0"}}><MdAdminPanelSettings style={{color: "#9370DB", width: 40, height: 40}} /></Link>
            </div>
    </>
  )

  return (
    <footer className='footer'>
      {
        windowWidth > 700 ? normalContent : minWidthContent
      }
    </footer>
  )
}

export default Footer