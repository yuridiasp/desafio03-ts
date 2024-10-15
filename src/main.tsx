import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'

import { AppContextProvider } from './components/AppContextProvider.tsx'
import { Layout } from './components/Layout.tsx'
import { MainRoutes } from './routes/routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContextProvider>
      <ChakraProvider>
            <Router>
              <Layout>
                <MainRoutes />
              </Layout>
            </Router>
      </ChakraProvider>
    </AppContextProvider>
  </StrictMode>,
)
