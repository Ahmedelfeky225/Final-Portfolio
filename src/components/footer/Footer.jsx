import "./footer.css"
const Footer = () => {
  return (
    <footer className="flex">
        <ul className="links flex">
          <li>
          <a href="#about">About</a>
          </li>
          <li>
          <a href="#projects">Projects</a>
          </li>
          <li>
          <a href="#overview">Overview</a>
          </li>
          <li>
          <a href="#contact">contact</a>
          </li>
        </ul>
        <p className="copy"> Designed and Developed by Ahmed Elfeky © 2025 </p>
    </footer>
  )
}

export default Footer