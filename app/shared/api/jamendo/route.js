// /app/api/jamendo/route.js
import { NextResponse } from "next/server";

export async function GET(req) {
  const JAMENDO_API_URL = "https://api.jamendo.com/v3.0/albums";
  const API_KEY = process.env.NEXT_PUBLIC_JAMENDO_CLIENT_ID; // Используйте переменные окружения для защиты ключа

  const { searchParams } = new URL(req.url); // Получение параметров запроса из URL
  const tag = searchParams.get("tag") || "";
  const albumId = searchParams.get("albumId");

  try {
    let response;
    if (tag) {
      response = await fetch(
        `${JAMENDO_API_URL}/musicinfo?client_id=${API_KEY}&format=json&tag=${tag}&limit=20`,
        { next: { revalidate: 21600 } },
      );
    } else {
      response = await fetch(
        `${JAMENDO_API_URL}/tracks?client_id=${API_KEY}&format=json&id=${albumId}`,
        { next: { revalidate: 21600 } },
      );
    }

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch data from Jamendo" },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data); // Отправляем данные клиенту
  } catch (error) {
    console.error("Error fetching Jamendo data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
