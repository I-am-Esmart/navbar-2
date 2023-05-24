import { useState } from "react"
import {
  FaBars,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa"

function App() {
  const [showIcons, setShowIcons] = useState(false)

  const show = () => {
    setShowIcons(!showIcons)
  }

  return (
    <nav>
      <div className="nav-items">
        <div className="nav-logo">My logo</div>

        {/* nav links on big screen */}
        <div className="nav-links-big-screen">
          <ul>
            <li>home</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </div>

        <div className="nav-icons">
          <ul>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaGithub />
            </li>
          </ul>
        </div>

        <FaBars className="toggle-bar" onClick={show} />
      </div>
      <div className="nav-links">
        {showIcons && (
          <ul>
            <li>home</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        )}
      </div>
    </nav>
  )
}

export default App
