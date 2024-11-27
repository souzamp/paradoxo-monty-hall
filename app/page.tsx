import Link from "next/link"

export default function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "70px", backgroundColor: "#de5d5d" }}>

      <Link href="/jogo">
        <h1>Let's Play a Game !!!</h1>
      </Link>
    </div>
  );
}