import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

export default function Home() {
  const Map = React.useMemo(
    () =>
      dynamic(
        () => import("@/components/Map"), // replace '@components/map' with your component's location
        {
          loading: () => <p>Loading...</p>,
          ssr: false, // This line is important. It's what prevents server-side render
        }
      ),
    [
      /* list variables which should trigger a re-render here */
    ]
  );

  return (
    <section style={{ height: `calc(100vh - 10.5rem)` }}>
      <Head>
        <title>Mi Barrio | Barrio Proyecto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-full">
        <Map />
      </div>
    </section>
  );
}
