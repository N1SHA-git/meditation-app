import axios from "axios";

const jamendoClient = axios.create({
  baseURL: "https://api.jamendo.com/v3.0", // Базовый URL Jamendo
  params: {
    client_id: process.env.NEXT_PUBLIC_JAMENDO_CLIENT_ID, // Ваш ключ API
  },
});

export default jamendoClient;
