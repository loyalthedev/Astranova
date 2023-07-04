import '@/styles/globals.scss';
import localFont from 'next/font/local';
import { Inter, Work_Sans } from 'next/font/google';
import Head from 'next/head';

const libertadMono = localFont({
  src: [
    {
      path: './fonts/libertadMono/LibertadMono-Light.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/libertadMono/LibertadMono-Thin.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/libertadMono/LibertadMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/libertadMono/LibertadMono-Medium.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/libertadMono/LibertadMono-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/libertadMono/LibertadMono-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-libertad',
});
const chakraPetch = localFont({
  src: [
    {
      path: './fonts/Chakra_Petch/ChakraPetch-Light.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/Chakra_Petch/ChakraPetch-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Chakra_Petch/ChakraPetch-Medium.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Chakra_Petch/ChakraPetch-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Chakra_Petch/ChakraPetch-SemiBold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-chakra',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-workSans',
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Astranova</title>
        <link rel='icon' sizes='any' href='/logo.png' />
      </Head>
      <main
        className={`${libertadMono.variable} ${chakraPetch.variable} ${inter.variable} ${workSans.variable} scrollbar-hide`}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}
