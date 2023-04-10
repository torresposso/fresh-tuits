import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";
import Layout from "../components/Layout.tsx";

export default function AppLayout({ Component }: AppProps) {
  return (
    <html lang="es">
      <Head>
        <meta charSet="utf-8" />
        <title>Voting App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body class="bg-gray-800 text-white">
        <Layout>
          <Component />
        </Layout>
      </body>
    </html>
  );
}
