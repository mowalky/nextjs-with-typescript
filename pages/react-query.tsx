import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

const ReactQuery = () => {
  return (
    <QueryClientProvider client={queryClient}>ReactQuery</QueryClientProvider>
  );
};

export default ReactQuery;
