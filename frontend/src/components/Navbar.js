import { Link, useNavigate } from "react-router-dom"

function Navbar() {

  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <div className="navbar">
      <h1>CyberLab</h1>

      <div>
        <Link to="/">Dashboard</Link>
        <Link to="/xss">XSS</Link>
        <Link to="/sqli">SQLi</Link>

        <button onClick={logout}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar