// this page is not needed as we are rendering directly from the [locale] folder

// import initTranslations from "./i18n";
// const i18nNamespaces = ["home"];
// import ExampleClientComponent from "./components/ExampleClientComponent";
// import Header from "./components/Header";
// import TranslationsProvider from "./components/TranslationsProvider";
// import LanguageChanger from "./components/LanguageChanger";

// // Define the type for the parameters
// interface Params {
//   locale: string;
// }

// // Define the type for the props
// interface Props {
//   params: Params;
// }

// // Determine the text direction based on the locale
// const getTextDirection = (locale: string): "ltr" | "rtl" => {
//   return locale === "ar" ? "rtl" : "ltr";
// };

// const Home: React.FC<Props> = async ({ params: { locale } }) => {
//   const { t, resources } = await initTranslations(locale, i18nNamespaces);
//   const dir = getTextDirection(locale);

//   return (
//     <TranslationsProvider
//       namespaces={i18nNamespaces}
//       locale={locale}
//       resources={resources}
//     >
//       <main dir={dir}>
//         <Header />
//         <ExampleClientComponent />
//       </main>
//       <LanguageChanger />
//     </TranslationsProvider>
//   );
// };

// export default Home;
