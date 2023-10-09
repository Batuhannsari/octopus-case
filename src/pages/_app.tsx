import DummyDataContextProvider from '@/context/DummyDataContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
export default function App({ Component, pageProps }: AppProps) {

  return (
    <DummyDataContextProvider>
      <ToastContainer position="bottom-left" autoClose={2000} />
      <Component {...pageProps} />
    </DummyDataContextProvider>
  )

}
