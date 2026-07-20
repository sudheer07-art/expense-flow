import api from "./api";


// ===============================
// Get Monthly Report
// ===============================

export const getMonthlyReport = async (
  month,
  year
) => {
  const response = await api.get(
    "/reports/monthly",
    {
      params: {
        month,
        year,
      },
    }
  );

  return response.data;
};


// ===============================
// Get Yearly Report
// ===============================

export const getYearlyReport = async (
  year
) => {
  const response = await api.get(
    "/reports/yearly",
    {
      params: {
        year,
      },
    }
  );

  return response.data;
};


// ===============================
// Download Monthly PDF
// ===============================

export const downloadMonthlyPdf = async (
  month,
  year
) => {
  const response = await api.get(
    "/reports/monthly/pdf",
    {
      params: {
        month,
        year,
      },

      responseType: "blob",
    }
  );

  return response;
};


// ===============================
// Download Monthly Excel
// ===============================

export const downloadMonthlyExcel = async (
  month,
  year
) => {
  const response = await api.get(
    "/reports/monthly/excel",
    {
      params: {
        month,
        year,
      },

      responseType: "blob",
    }
  );

  return response;
};