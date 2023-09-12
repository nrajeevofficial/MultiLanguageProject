import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  return (
    <div className="text-center mt-5 main">
      <h1>{t("home")}</h1>
    </div>
  );
}

export default Home;
