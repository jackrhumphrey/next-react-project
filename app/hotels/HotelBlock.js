"use client";
import Image from "next/image";

export default function HotelBlock({ id, name, capacity }) {
  console.log(id);
  const imageLoader = ({ src }) => {
    return `./hotels/${src}.jpg`;
  };
  return (
    <div>
      <h2>{name}</h2>
      <p>capacity: {capacity}</p>
      <Image src={id} width={300} height={200} loader={imageLoader} />
    </div>
  );
}
