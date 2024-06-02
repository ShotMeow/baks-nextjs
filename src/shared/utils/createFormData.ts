export const createFormData = (data: any): FormData => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    // Если элемент отриацительный или является Not a Number (NaN)
    if (!data[key] || Number.isNaN(data[key])) {
      return;
    }

    // Если элемент является массивом
    if (Array.isArray(data[key])) {
      for (let i = 0; i < data[key].length; i++) {
        formData.append(`${key}[]`, data[key][i]); // Передаем элементы в виде массива
      }
      return;
    }

    formData.set(key, data[key]);
  });

  return formData;
};
