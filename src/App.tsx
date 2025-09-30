import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import queryClient from "./api/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import WeatherGrid from "./components/WeatherGrid";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools />
      <Header />
      <Hero />
      <WeatherGrid />
      {/* <GetData /> */}
    </QueryClientProvider>
  );
}

export default App;
