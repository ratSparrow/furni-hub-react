import "./Header.css"

function Header() {
  return (
    <div>
      <header className="header-container">
        <nav>
          <ul>
            <li className="menu-item">
              <a href="#home">Home</a>
            </li>
            <li className="menu-item">
              <a href="#contact">Contact</a>
            </li>
            <li className="menu-item">
              <a href="/about">About</a>
            </li>
            <li className="menu-item">
              <a href="#blog">Blog</a>
            </li>
            <li className="menu-item">
              <a href="#product">Product</a>
            </li>
            <li className="menu-item">
              <button>
                <span>Login</span>
                <i className="fa-solid fa-right-to-bracket"></i>
              </button>
            </li>
            <li className="menu-item">
              <button>
                <span>Logout</span>
                <i className="fa-solid fa-right-to-bracket"></i>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header