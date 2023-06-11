import { faHouse, faList, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from 'react-router-dom';

const NavBar = ({ setHidde }) => {
 
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (route) => {
    navigate(route);
  }

  const openCreate = (e) => {
    e.preventDefault();
    setHidde(false);
  }

  return (
    <nav>
      <FontAwesomeIcon className='navIcon' icon={faHouse} onClick={(e) => {
        e.preventDefault();
        handleNavigate('/');
      }} />
      <FontAwesomeIcon className='navIcon' icon={faList} onClick={(e) => {
        e.preventDefault();
        handleNavigate('/products');
      }} />
      {location.pathname === '/products' && <button className='btn btn-create' onClick={(e) => openCreate(e)}><FontAwesomeIcon icon={faPlus} /></button>}
    </nav>
  )
}

export default NavBar
