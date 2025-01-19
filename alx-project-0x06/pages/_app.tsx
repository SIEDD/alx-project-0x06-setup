// import Layout from "@/components/layouts/Layout";
// import "@/styles/globals.css";
// import type { AppProps } from "next/app";
// import CountProvider from "@/context/CountContext";  // Use default import

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <CountProvider>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </CountProvider>
//   );
// }
import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CountProvider } from "@/context/CountContext";  // Import the CountProvider

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CountProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CountProvider>
  );
}
