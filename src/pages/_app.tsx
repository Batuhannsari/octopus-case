import DummyDataContextProvider from '@/context/DummyDataContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <DummyDataContextProvider>
      <Component {...pageProps} />
    </DummyDataContextProvider>
  )

}
