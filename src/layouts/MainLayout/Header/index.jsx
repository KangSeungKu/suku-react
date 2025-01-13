import './Header.css'
import Menu from "./Menu"
import Nav from "./Nav"

const Header = () => {
  return (
    <div className="header">
      <Nav/>
      <Menu/>
    </div>
  )
}

export default Header