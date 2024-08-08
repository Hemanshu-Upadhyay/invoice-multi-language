import ExampleClientComponent from "../components/ExampleClientComponent";
import TranslationsProvider from "../components/TranslationsProvider";
import initTranslations from "../i18n";
const i18nNamespaces = ["home", "header"];
import Header from "../components/Header";
import Invoice from "../components/invoice";

interface Params {
  locale: string;
}

interface Props {
  params: Params;
}

const getTextDirection = (locale: string): "ltr" | "rtl" => {
  return locale === "ar" ? "rtl" : "ltr";
};

const Home: React.FC<Props> = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const dir = getTextDirection(locale);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main dir={dir}>
        <Header />
        {/* <h1 className="  text-3xl   font">{t("header")}</h1> */}
        <Invoice />
        <ExampleClientComponent />
      </main>
    </TranslationsProvider>
  );
};

export default Home;
