import Image from "next/image"

export function VideoCard({youtubeThumbnail, title}) {
  return (
    <button className="w-[420px] h-[230px] transition-all hover:shadow-lg hover:shadow-[#000000] hover:opacity-80 rounded-2xl">
      <Image src={youtubeThumbnail} alt={title} width="380" height="260" className="inset-0 w-full h-full object-cover rounded-2xl"/>
    </button>
  )
}