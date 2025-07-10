import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieListPage from "./pages/Home";
import FavoritesPage from "./pages/Favorites";
import LoginPage from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";
import Header from "./components/Header"; 

function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/favorites" element={
          <PrivateRoute>
            <FavoritesPage />
          </PrivateRoute>
        } />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
