"use client";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import Link from "next/link";

export function AlbumList({ albums }) {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={15}
      slidesPerView={"4"}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
    >
      <div className="text-black hover:text-[#69c8af] transition-colors">
        <button
          className="swiper-button-prev !text-inherit after:scale-[0.2] 
        after:font-bold !h-8 !w-8 rounded-md border border-slate-400 
        hover:border-[#69c8af] bg-white top-1/2 
        transform -translate-y-1/2 disabled:hidden"
        >
          <p className="sr-only">Back</p>
        </button>
      </div>
      {albums.map((album) => (
        <SwiperSlide key={album.id}>
          <Link
            href={`music/album/${album.id}?tag=${album.tag}`}
            className="flex flex-col items-center"
          >
            <Image
              src={album.image}
              width="200"
              height="200"
              alt={album.name}
              className="object-cover shadow-lg hover:shadow-black/60 shadow-black/40"
              priority
            />
            <h3 className="w-[200px] mt-1 truncate font-light">{album.name}</h3>
            <p className="w-[200px] text-base text-gray-500 truncate font-light">
              {album.artist_name}
            </p>
          </Link>
        </SwiperSlide>
      ))}
      <div className="text-black hover:text-[#69c8af]">
        <button
          className="swiper-button-next !text-inherit after:scale-[0.2] 
        after:font-bold !h-8 !w-8 rounded-md border border-slate-400 
        hover:border-[#69c8af] bg-white top-1/2 
        transform -translate-y-1/2  disabled:hidden"
        >
          <p className="sr-only">Next</p>
        </button>
      </div>
    </Swiper>
  );
}
