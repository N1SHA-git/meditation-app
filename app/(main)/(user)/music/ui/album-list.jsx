"use client";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";

export function AlbumList({ albums }) {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={15}
      slidesPerView={"4.5"}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
    >
      <div className="text-black hover:text-[#69c8af] transition-colors">
        <button className="swiper-button-prev !text-inherit after:scale-[0.2] after:font-bold !h-8 !w-8 rounded-md border border-slate-400 hover:border-[#69c8af] transition-colors bg-white top-1/2 left-0 transform -translate-y-1/2 disabled:hidden"></button>
      </div>
      {albums.map((album) => (
        <SwiperSlide key={album.id}>
          <div className="flex flex-col items-center">
            <Image
              src={album.image}
              width="200"
              height="200"
              alt={album.name}
              className="object-cover"
              priority
            />
            <h3 className="w-[200px] mt-1 truncate font-light">{album.name}</h3>
            <p className="w-[200px] text-base text-gray-500 truncate font-light">
              {album.artist_name}
            </p>
          </div>
        </SwiperSlide>
      ))}
      <div className="text-black hover:text-[#69c8af] transition-colors">
        <button className="swiper-button-next !text-inherit after:scale-[0.2] after:font-bold !h-8 !w-8 rounded-md border border-slate-400 hover:border-[#69c8af] transition-colors bg-white top-1/2 right-0 transform -translate-y-1/2 disabled:hidden"></button>
      </div>
    </Swiper>
  );
}
