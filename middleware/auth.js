import { useUserStore } from "@/stores/user";
export default async function ({ $axios, $cookies, $pinia, redirect }) {
  // активуємо pinia store який нам потрібний
  const store = useUserStore($pinia);

  // якщо в pinia store є юзер то ми далі по функції не рухаємось і зупиняємо її через return
  if (store.user) {
    return;
  }

  // отримуємо token з наших кукі ( зараз токен записується в кукі при успішному логуванні юзера )
  const token = $cookies.get("token");

  if (!token) {
    // якщо не має токена в кукі, ви очищаємо user та редиректимо користувача на головну сторінку
    store.setUser(null);
    redirect("/");
    // return потрібен щоб функція далі не працювала, а зупинилась тут
    return;
  }

  // якщо token з кукі є, то ми робимо запит на /api/users/me  для отримання інформації а хто ж цей юзер з цим токеном
  try {
    const { data } = await $axios.get("/api/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    store.setUser(data);
  } catch (error) {
    // якщо ловимо помилку при запиті на /api/users/me ( типу токен з кукі баганий, чи не дійсний , чи вкрадений ) то робимо наступне
    // виводимо в консоль нам помилку
    console.log(error);
    // видаляємо цей баганий токен з кукі кліента
    $cookies.remove("token");
    // очищаємо pinia store від юзера
    store.setUser(null);
    // редиректим юзера нафіг на головну
    redirect("/");
  }
}
