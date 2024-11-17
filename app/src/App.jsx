import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { useState } from 'react'
import './App.css'

import { apiConfig } from './app.config'


const queryClient = new QueryClient()

function App() {
  const [count, setCount] = useState(0)

  return (
    <QueryClientProvider client={queryClient}>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Incident />
    </QueryClientProvider>

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



