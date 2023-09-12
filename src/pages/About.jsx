// Import the useTranslation hook from the "react-i18next" library.
import { useTranslation } from "react-i18next";

// Define a functional component called "About".
function About() {
  // Destructure the "t" function from the useTranslation hook.
  const { t } = useTranslation();

  return (
    <div className="container">
      {/* Create a card element */}
      <div class="card mt-5">
        <div className="card-title text-center">
          {/* Display a translated heading using the "t" function */}
          <h2>{t("brief")}</h2>
          {/* Display an image with an alt text, the source of the image is translated */}
          <img id="image" src={t("image")} alt="" />
        </div>
        <div className="card-body">
          {/* Display a translated content text using the "t" function */}
          <h3 className="content">{t("content")}</h3>
        </div>
      </div>
    </div>
  );
}

// Export the About component as the default export of this module.
export default About;
