import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { MantineProvider } from '@mantine/core';

import { apiConfig } from './app.config'
import { Example } from './Table.tsx';


const queryClient = new QueryClient()

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <QueryClientProvider client={queryClient}>
        <MantineProvider>
          <Incident/>
          <Example />
        </MantineProvider>
      </QueryClientProvider>
    </>
  )
}

function Incident() {
  const { isPending, error, data } = useQuery({
    queryKey: ['incident'],
    queryFn: () =>
      fetch(
        '/api/now/table/incident?sysparm_limit=1',
        {
          headers: apiConfig.serviceNowHeaders
        }
      ).then((res) =>
        res.json(),
      ),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>{data.result[0].number}</h1>
    </div>
  )
}

export default App
