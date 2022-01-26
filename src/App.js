import "./App.css";
import Home from "./Components/Home/Home";
import SignUp from "./Components/Authentication/SignUp";
import SignIn from "./Components/Authentication/SignIn";
import { UserAuthContextProvider } from "./Components/Contexts/AuthContext";
import { useState, createContext } from "react";
import ProtectedRoute from "./Components/ProtectedRoute";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeSwitch from "./Features/ThemeSwitch";
import Dashboard from "./Components/Dashboard/Dashboard";
import darkScrollbar from "@mui/material/darkScrollbar";
import Nav from "./Components/Nav/Nav";
import Forgot from "./Components/Authentication/Forgot";
import Settings from "./Components/Settings/Settings";

const ThemeContext = createContext();

function App() {
  const [toggleDark, settoggleDark] = useState(
    JSON.parse(localStorage.getItem("toggleDark"))
  );

  const myTheme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: toggleDark ? darkScrollbar() : null,
        },
      },
    },
    palette: {
      mode: toggleDark ? "dark" : "light",
      primary: {
        main: "#ff1744",
      },
      secondary: {
        main: "#880e4f",
      },
    },
  });

  return (
    <Router>
      <ThemeProvider theme={myTheme}>
        <CssBaseline />
        <ThemeSwitch
          toggleDark={toggleDark}
          settoggleDark={settoggleDark}
          className="theme-btn"
        />
        <UserAuthContextProvider>
          <Nav />
          <Routes>
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="forgot" element={<Forgot />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </UserAuthContextProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
