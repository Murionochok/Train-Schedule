export default function Home() {
  return (
    <main className="flex justify-center items-center h-full pb-4 ">
      <video autoPlay muted loop id="myVideo" width={"1200px"}>
        <source src="http://localhost:3001/train.mp4" type="video/mp4" />
      </video>
    </main>
  );
}
