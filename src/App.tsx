import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import all 7 pages for routing
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Campus from "./pages/Campus";
import Contact from "./pages/Contact";

// Import global layout components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Initialize QueryClient for data fetching (can be used later)
const queryClient = new QueryClient();

const App = () => {
  console.log('App initialized with 7 core routes');

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="flex min-h-screen flex-col bg-background text-foreground font-sans">
          <Header />
            <main className="flex-1 w-full mx-auto max-w-[1440px]">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/campus" element={<Campus />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          <Footer />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;