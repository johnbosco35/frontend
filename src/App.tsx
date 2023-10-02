/** @format */

import React from "react";
import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./router/MainRouter";
import { Provider } from "react-redux";
import { store } from "./components/Global/Store";
import {
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={MainRouter} />
        </Provider>
      </QueryClientProvider>
      {/* <ReactQueryDevtools /> */}
    </div>
  );
};

export default App;
