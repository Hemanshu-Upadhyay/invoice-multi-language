"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const Invoice = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">{t("invoice")}</h1>
          <p className="text-gray-600">#12345</p>
        </div>
        <div className="text-right">
          <h2 className="text-xl font-semibold">{t("company_name")}</h2>
          <p className="text-gray-600">123 {t("company_address")}</p>
          <p className="text-gray-600">{t("city-state")}</p>
          <p className="text-gray-600">{t("email")}: info@company.com</p>
          <p className="text-gray-600">{t("phone")}: (123) 456-7890</p>
        </div>
      </header>

      <section className="mb-8">
        <div className="flex justify-between">
          <div>
            <h3 className="text-xl font-semibold">Invoice To:</h3>
            <p className="text-gray-600">{t("client_name")}</p>
            <p className="text-gray-600">{t("client_address")}</p>
            <p className="text-gray-600">{t("city-state")}</p>
            <p className="text-gray-600">{t("email")}: client@example.com</p>
            <p className="text-gray-600">{t("phone")}: (098) 765-4321</p>
          </div>
          <div className="text-right">
            <p className="text-gray-600">
              <strong>{t("invoice_date")}</strong> 2024-08-06
            </p>
            <p className="text-gray-600">
              <strong>{t("due_date")}:</strong> 2024-08-20
            </p>
            <p className="text-gray-600">
              <strong>{t("amount_due")}:</strong> $1,200.00
            </p>
          </div>
        </div>
      </section>

      {/* Itemized List */}
      <section className="mb-8">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t("")}
                {t("description")}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t("quantity")}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t("unit_price")}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t("total")}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Service A</td>
              <td className="px-6 py-4 whitespace-nowrap">2</td>
              <td className="px-6 py-4 whitespace-nowrap">$500.00</td>
              <td className="px-6 py-4 whitespace-nowrap">$1,000.00</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Service B</td>
              <td className="px-6 py-4 whitespace-nowrap">1</td>
              <td className="px-6 py-4 whitespace-nowrap">$200.00</td>
              <td className="px-6 py-4 whitespace-nowrap">$200.00</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="flex justify-end mb-8">
        <div className="text-right">
          <p className="text-gray-600">
            <strong>{t("Subtotal")}:</strong> $1,200.00
          </p>
          <p className="text-gray-600">
            <strong>{t("tax")} (10%):</strong> $120.00
          </p>
          <p className="text-gray-600">
            <strong>{t("total")}:</strong> $1,320.00
          </p>
        </div>
      </section>
      <footer className="text-center border-t pt-4">
        <p className="text-gray-600">{t("thank_you")}</p>
      </footer>
    </div>
  );
};

export default Invoice;
