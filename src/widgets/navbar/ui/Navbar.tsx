import { Link } from "react-router-dom"

const Navbar: React.FC = () => {
  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/aboute'>Aboute</Link>
      </li>
      <li>
        <Link to='/blog'>Blog</Link>
      </li>
    </ul>
  )
}

export default Navbar