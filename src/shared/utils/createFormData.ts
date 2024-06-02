export const createFormData = (data: any): FormData => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (!data[key] || Number.isNaN(data[key])) {
      return;
    }
    if (Array.isArray(data[key])) {
      for (let i = 0; i < data[key].length; i++) {
        formData.append(`${key}[]`, data[key][i]);
      }
      return;
    }
    formData.set(key, data[key]);
  });

  return formData;
};
