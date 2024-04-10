import '@/public/fonts/font.css';
import '@/styles/reset.css';
import '@/styles/globals.css';
import '@/styles/colors.css';
import '@/styles/utility.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import ReactModal from 'react-modal';
import { QueryClient, QueryClientProvider } from 'react-query';

import ModalProvider from '@/contexts/ModalProvider';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  // 모달이 활성화될 때 애플리케이션의 "#modal-root"를 제외한 나머지 부분에 대한 접근을 차단
  ReactModal.setAppElement('#modal-root');

  return (
    <>
      <Head>
        <title>Linkbrary</title>
        <meta name="description" content="Linkbrary" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </QueryClientProvider>
    </>
  );
}
