import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18next from "i18next";

function Header() {
  // Initialize translation function using useTranslation hook
  const { t } = useTranslation();

  // Function to handle language change
  const handleClick = (e) => {
    // Change the language using i18next based on the selected value
    i18next.changeLanguage(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        {t("welcome")} {/* Translate and display "Welcome" */}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ml-2">
            <Link to="/about" className="nav-link">
              {t("about")} {/* Translate and display "About" */}
            </Link>
          </li>
          <li className="nav-item">
            <select
              className="nav-link bg-dark border-0 ml-2"
              onChange={(e) => handleClick(e)}
            >
              <option value="en">English</option> {/* Language options */}
              <option value="hi">हिंदी</option>
              <option value="sa">Sanskrit</option>
              <option value="gr">German</option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
