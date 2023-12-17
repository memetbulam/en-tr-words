import { WordOptionsProvider } from "@/contexts/WordOptionsContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WordOptionsProvider>
      <Component {...pageProps} />
    </WordOptionsProvider>
  );
}
