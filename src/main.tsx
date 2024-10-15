import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import App from './App.tsx'
import { ContaInfo } from './pages/ContaInfo.tsx'
import { AppContextProvider } from './components/AppContextProvider.tsx'
import { Layout } from './components/Layout.tsx'
import { Conta } from './pages/Conta.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContextProvider>
      <ChakraProvider>
          <Layout>
            <Router>
              <Routes>
                  <Route path="/" element={<App />} />
                  <Route path="conta" element={<Conta />} />
                  <Route path="conta/:id" element={<ContaInfo />} />
              </Routes>
            </Router>
          </Layout>
      </ChakraProvider>
    </AppContextProvider>
  </StrictMode>,
)
