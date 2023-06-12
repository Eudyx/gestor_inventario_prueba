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
      {/* navigate to home */}
      <FontAwesomeIcon className='navIcon' icon={faHouse} onClick={(e) => {
        e.preventDefault();
        handleNavigate('/');
      }} />
      {/* navigate to home */}

      {/* navigate to products details */}
      <FontAwesomeIcon className='navIcon' icon={faList} onClick={(e) => {
        e.preventDefault();
        handleNavigate('/products');
      }} />
      {/* navigate to products details */}

      {/* Button to create a new product */}
      {
        // detecting the location to show the button only if you are in prodcuts details section
      location.pathname === '/products' && <button className='btn btn-create' onClick={(e) => openCreate(e)}><FontAwesomeIcon icon={faPlus} /></button>
      }
      {/* Button to create a new product */}
    </nav>
  )
}

export default NavBar
