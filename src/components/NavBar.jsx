import { faHouse, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  return (
    <nav>
      <FontAwesomeIcon className='navIcon' icon={faHouse} />
      <FontAwesomeIcon className='navIcon' icon={faList} />
    </nav>
  )
}

export default NavBar
