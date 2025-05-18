"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";

const photos = [
  "https://placehold.co/640",
  "https://placehold.co/640",
  "https://placehold.co/640",
  "https://placehold.co/640",
  "https://placehold.co/640",
  "https://placehold.co/640",
  "https://placehold.co/640",
  "https://placehold.co/640",
  "https://placehold.co/640",
  "https://placehold.co/640",
  "https://placehold.co/640",
  "https://placehold.co/640",
  "https://placehold.co/640",
  "https://placehold.co/640",
  "https://placehold.co/640",
  "https://placehold.co/640",
  "https://placehold.co/640",
  "https://placehold.co/640",
  "https://placehold.co/640",
  "https://placehold.co/640",
];

const base = "relative grid grid-cols-1 gap-2";
const md = "md:grid-cols-3 md:w-[125%] md:left-[-12.5%]";

export default function PhotosPage() {
  return (
    <div className={twMerge(base, md)}>
      {photos.map((src, idx) => (
        <Image
          key={idx}
          alt="gallery image"
          src={src}
          width="640"
          height="640"
        />
      ))}
    </div>
  );
}
