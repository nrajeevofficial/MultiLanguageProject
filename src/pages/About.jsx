import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <div className="container ">
      <div class="card mt-5">
        <div className="card-title text-center">
          <h2>{t("brief")}</h2>
          <img id="image" src={t("image")} alt="" />
        </div>
        <div className="card-body">
          <h3 className="content">{t("content")}</h3>
        </div>
      </div>
    </div>
  );
}

export default About;
