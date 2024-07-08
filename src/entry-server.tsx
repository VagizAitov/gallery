import React from 'react'
import { type RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

export function render(_url: string, _ssrManifest?: string, options?: RenderToPipeableStreamOptions) {
  
  return renderToPipeableStream(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>,
    options
  )
}
