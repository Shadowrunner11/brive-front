import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "react-auth-kit";
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { Router } from "./routes";

const queryClient = new QueryClient();

// TODO: create loading
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Cargando...</div>}>
        <AuthProvider authType="localstorage" authName="_auth">
          <RouterProvider router={Router} />
        </AuthProvider>
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
