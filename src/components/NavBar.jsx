import { faHouse, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
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
    </nav>
  )
}

export default NavBar
