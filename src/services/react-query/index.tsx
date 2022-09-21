import { ReactChild } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

const ReactQueryProvider = ({children} : { children: ReactChild }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default ReactQueryProvider;