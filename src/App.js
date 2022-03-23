
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './component/NavBar';
import Home from './pages/Home';
import Layout from './component/Layout';
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <Router>
      <ChakraProvider>
        <Layout>
          <Routes>
            <Route element={<Home  />} path="/" />
          </Routes>
        </Layout>
      </ChakraProvider>
    </Router>
    
  );
}

export default App;
