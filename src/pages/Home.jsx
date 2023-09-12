// Import the useTranslation hook from the "react-i18next" library.
import { useTranslation } from "react-i18next";

// Define a functional component called "Home".
function Home() {
  // Destructure the "t" function from the useTranslation hook to access translations.
  const { t } = useTranslation();

  return (
    // Create a centered text element with a top margin and a "main" class.
    <div className="text-center mt-5 main">
      {/* Display a translated heading using the "t" function */}
      <h1>{t("home")}</h1>
    </div>
  );
}

// Export the Home component as the default export of this module.
export default Home;
