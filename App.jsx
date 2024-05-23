import Header from "./components/Header.jsx";
import "./App.css";

import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
};

export default App;

// allcountriesdetailsreact.netlify.app
