"use client";

import { useTranslation } from "react-i18next";

export default function ExampleClientComponent() {
  const { t } = useTranslation();

  return <h1 className="  text-3xl">{t("greeting")}</h1>;
}
