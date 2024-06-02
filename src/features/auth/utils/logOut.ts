export const logOut = () => {
  localStorage.removeItem("jwtToken"); // Удаляем токен из хранилища
  window.dispatchEvent(new Event("storage")); // Вызываем ивент обновления хранилища
};
