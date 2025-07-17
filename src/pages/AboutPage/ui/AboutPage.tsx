import { useTranslation } from "react-i18next"

const AboutPage = () => {
  const {t} = useTranslation("about");

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum tempora quisquam placeat hic labore! Facere perferendis possimus doloremque, in necessitatibus recusandae veniam ab optio aliquam quasi unde vitae, totam iure.
      </p>
    </div>
  )
}

export default AboutPage