import dynamic from "next/dynamic";
import { SessionProvider } from "next-auth/react";
// import "@/styles/toolStyles.css";
import { SWRConfig } from "swr";
// import { LocaleProvider, LocaleContext } from '../context/LocaleContext';
// import LocaleAlert from "@/components/Locale/LocaleAlert";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import fetchJson from "@/lib/iron-session/fetchJson";

const TopProgressBar = dynamic(
  () => {
    return import("@/components/TopProgressBar");
  },
  { ssr: false }
);
const AppToaster = dynamic(
  () => {
    return import("@/components/AppToaster");
  },
  { ssr: false }
);

import "../styles/index.scss";
import "../styles/toolStyles.css";
import { Inter } from "next/font/google";

const font = Inter({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

function App({ Component, pageProps: { session, ...pageProps } }) {
  const { locale } = useRouter();

  return (
    <IntlProvider
      key={locale || "en-US"}
      defaultLocale="en-US"
      locale={"en-US"}
    >
      <>
        <TopProgressBar />
        <SWRConfig
          value={{
            fetcher: fetchJson,
            onError: (err) => {
              console.error(err);
            },
          }}
        >
          <SessionProvider session={session} refetchInterval={5 * 60}>
            <div className={font.className}>
              <Component {...pageProps} />
            </div>
          </SessionProvider>
        </SWRConfig>
        <AppToaster />
      </>
    </IntlProvider>
  );
}

export default App;
