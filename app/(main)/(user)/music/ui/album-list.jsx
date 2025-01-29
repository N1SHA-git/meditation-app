"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export function AlbumList({ albums }) {
  return (
    <Swiper spaceBetween={15} slidesPerView={"4.5"}>
      {albums.map((album) => (
        <SwiperSlide key={album.id}>
          <div className="flex flex-col items-center">
            <Image
              src={album.image}
              width="200"
              height="200"
              alt={album.name}
              className="rounded-lg object-cover"
              priority
            />
            <h3 className="w-[200px] mt-1  truncate">{album.name}</h3>
            <p className="w-[200px] text-base text-gray-500 truncate">
              {album.artist_name}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
