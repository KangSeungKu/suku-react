import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Nav.css';
import { faBagShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <div className="container">
        <p>Logo</p>
        <div className="right">
            <FontAwesomeIcon size='xl' color='white' icon={faMagnifyingGlass}/>
            <FontAwesomeIcon size='xl' color='white' icon={faBagShopping}/>
        </div>
    </div>
  )
}

export default Nav