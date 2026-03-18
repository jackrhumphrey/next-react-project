import HotelBlock from "./HotelBlock";

async function getData() {
  const res = await fetch("https://snowtooth-hotel-api.fly.dev");
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Hello hotels</h1>
        {data.map((hotel) => (
          <HotelBlock
            key={hotel.id}
            id={hotel.id}
            name={hotel.name}
            capacity={hotel.capacity}
          />
        ))}
      </main>
    </div>
  );
}
