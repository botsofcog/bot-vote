import Head from "next/head";
import Link from "next/link";
import { routes } from "../components/Sidebar";
export default function Home() {
  return (
    <>
      <Head>
        <title>BOTS OF COG VOTE</title>
        <meta name="description" content="Use your COGz Coins to Vote on The COGverse!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-10">
       BOTS OF COG Voting dApp<br />
        {routes.map((route, i) => (
          <Link key={i} href={route.path}><a className="block text-primary">{route.name}</a></Link>
        ))}
        <Link href="/404"><a className="text-primary block">404 page</a></Link>
        <Link href="/login"><a className="text-primary block">Login page</a></Link>
      </main>
    </>
  );
}
