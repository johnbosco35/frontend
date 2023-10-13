/** @format */

import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./router/MainRouter";
import { Provider } from "react-redux";
import { store } from "./components/Global/Store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <div>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={MainRouter} />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </Provider>
    </div>
  );
};

export default App;
