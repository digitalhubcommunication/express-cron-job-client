import React from 'react'
import { ThemeProvider } from './provider/ThemeProvider'
import ReduxProvider from './provider/reduxProvider'

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ReduxProvider>
        <BrowserRouter>
          <App />

          {/* ======  DOM components ======= */}
          <BodyEventListeners />
          <ModalPortal />
          <ReactToastifyMessage />
        </BrowserRouter>
      </ReduxProvider>
    </ThemeProvider>
  )
}
