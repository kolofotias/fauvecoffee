import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import theme from './theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Cart from './pages/Cart';
import Admin from './pages/Admin';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider options={theme.config}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Router>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
