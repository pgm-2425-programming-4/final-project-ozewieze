import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PaginatedBacklog from './components/PaginatedBacklog/PaginatedBacklog';
import './App.css';
import './reset.css';
import './variables.css';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaginatedBacklog />
    </QueryClientProvider>
  );
}

export default App;
