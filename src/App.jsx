import React, { useState } from 'react';
import { Coffee, ShoppingCart, Sun, Moon } from 'lucide-react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900' 
        : 'bg-gradient-to-br from-purple-50 to-blue-50'
    }`}>
      <Navbar 
        setCurrentPage={setCurrentPage} 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
      />
      {currentPage === 'home' && <HomePage isDark={isDark} />}
      {currentPage === 'about' && <AboutPage isDark={isDark} />}
      {currentPage === 'shop' && <ShopPage isDark={isDark} />}
    </div>
  );
};

const Navbar = ({ setCurrentPage, isDark, toggleTheme }) => {
  return (
    <nav className={`${
      isDark 
        ? 'bg-white/10 border-purple-800' 
        : 'bg-white/80 border-purple-100'
    } border-b backdrop-blur-sm sticky top-0 z-50`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div 
          className="flex items-center space-x-2 cursor-pointer" 
          onClick={() => setCurrentPage('home')}
        >
          <Coffee size={24} className={isDark ? 'text-white' : 'text-purple-600'} />
          <span className={`text-xl font-bold bg-gradient-to-r ${
            isDark
              ? 'from-purple-400 to-blue-400'
              : 'from-purple-600 to-blue-600'
          } text-transparent bg-clip-text`}>
            Fauve Coffee
          </span>
        </div>
        <div className="flex items-center space-x-8">
          <button 
            onClick={() => setCurrentPage('home')} 
            className={`${
              isDark 
                ? 'text-white/70 hover:text-white' 
                : 'text-gray-600 hover:text-purple-600'
            } transition-colors`}
          >
            Home
          </button>
          <button 
            onClick={() => setCurrentPage('shop')} 
            className={`${
              isDark 
                ? 'text-white/70 hover:text-white' 
                : 'text-gray-600 hover:text-purple-600'
            } transition-colors`}
          >
            Shop
          </button>
          <button 
            onClick={() => setCurrentPage('about')} 
            className={`${
              isDark 
                ? 'text-white/70 hover:text-white' 
                : 'text-gray-600 hover:text-purple-600'
            } transition-colors`}
          >
            About
          </button>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${
              isDark 
                ? 'hover:bg-white/10' 
                : 'hover:bg-purple-50'
            } transition-colors`}
          >
            {isDark ? (
              <Sun size={20} className="text-white" />
            ) : (
              <Moon size={20} className="text-purple-600" />
            )}
          </button>
          <ShoppingCart className={isDark ? 'text-white' : 'text-purple-600'} />
        </div>
      </div>
    </nav>
  );
};

const HomePage = ({ isDark }) => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-16">
        <h1 className={`text-5xl font-bold mb-4 bg-gradient-to-r ${
          isDark
            ? 'from-purple-400 via-blue-400 to-pink-400'
            : 'from-purple-600 via-blue-600 to-pink-600'
        } text-transparent bg-clip-text`}>
          Welcome to Fauve Coffee
        </h1>
        <p className={isDark ? 'text-xl text-white/70' : 'text-xl text-gray-600'}>
          Artisanal Coffee Roasted in Berlin
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Card className={`${
          isDark
            ? 'bg-white/10 border-purple-800 text-white'
            : 'bg-white/50 border-purple-100'
        } backdrop-blur-sm hover:shadow-lg transition-all`}>
          <CardContent className="p-8">
            <div className="mb-4">
              <Coffee className={isDark ? 'w-12 h-12 text-purple-400' : 'w-12 h-12 text-purple-600'} />
            </div>
            <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
              Our Coffee Van
            </h2>
            <p className={isDark ? 'text-white/70' : 'text-gray-600'}>
              Track our mobile coffee van serving fresh brews across Berlin. 
              Follow us on social media for daily locations.
            </p>
            <Button 
              className={`mt-6 ${
                isDark
                  ? 'bg-gradient-to-r from-purple-400 to-blue-400'
                  : 'bg-gradient-to-r from-purple-600 to-blue-600'
              } text-white hover:opacity-90`}
            >
              Find Us Today
            </Button>
          </CardContent>
        </Card>
        
        <Card className={`${
          isDark
            ? 'bg-white/10 border-purple-800 text-white'
            : 'bg-white/50 border-purple-100'
        } backdrop-blur-sm hover:shadow-lg transition-all`}>
          <CardContent className="p-8">
            <div className="mb-4">
              <Coffee className={isDark ? 'w-12 h-12 text-blue-400' : 'w-12 h-12 text-blue-600'} />
            </div>
            <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
              Shop Online
            </h2>
            <p className={isDark ? 'text-white/70' : 'text-gray-600'}>
              Discover our curated selection of specialty coffee beans, 
              delivered fresh to your door within 24 hours of roasting.
            </p>
            <Button 
              className={`mt-6 ${
                isDark
                  ? 'bg-gradient-to-r from-blue-400 to-pink-400'
                  : 'bg-gradient-to-r from-blue-600 to-pink-600'
              } text-white hover:opacity-90`}
            >
              Shop Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const AboutPage = ({ isDark }) => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className={`text-4xl font-bold mb-8 bg-gradient-to-r ${
          isDark
            ? 'from-purple-400 to-pink-400'
            : 'from-purple-600 to-pink-600'
        } text-transparent bg-clip-text`}>
          About Fauve Coffee
        </h1>
        
        <div className="mb-12">
          <div className={`rounded-xl overflow-hidden mb-6 ${
            isDark ? 'border-purple-800' : 'border-purple-100'
          } border`}>
            <img 
              src="/placeholder.jpg"
              alt="Founder"
              className="w-full object-cover"
            />
          </div>
          
          <h2 className={`text-2xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>Our Story</h2>
          <p className={`${
            isDark ? 'text-white/70' : 'text-gray-600'
          } mb-4 leading-relaxed`}>
            Founded in 2022 by Sarah Weber, Fauve Coffee began as a passion project 
            in a small corner of Prenzlauer Berg. After years of experience in 
            specialty coffee shops across Melbourne and Berlin, Sarah decided to 
            bring her unique perspective on coffee to the streets of Berlin.
          </p>
          
          <p className={`${
            isDark ? 'text-white/70' : 'text-gray-600'
          } mb-4 leading-relaxed`}>
            The name "Fauve" draws inspiration from the early 20th-century art 
            movement known for its bold, unconventional use of color - much like 
            our approach to coffee roasting and brewing.
          </p>
        </div>
      </div>
    </div>
  );
};

const ShopPage = ({ isDark }) => {
  const products = [
    {
      id: 1,
      name: "Ethiopia Yirgacheffe",
      price: 16.90,
      description: "Floral and citrus notes with a tea-like body",
      image: "/placeholder.jpg"
    },
    {
      id: 2,
      name: "Colombia Supremo",
      price: 15.90,
      description: "Caramel sweetness with a nutty finish",
      image: "/placeholder.jpg"
    },
    {
      id: 3,
      name: "House Blend",
      price: 14.90,
      description: "Balanced and smooth with chocolate notes",
      image: "/placeholder.jpg"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className={`text-4xl font-bold mb-8 bg-gradient-to-r ${
        isDark
          ? 'from-purple-400 to-blue-400'
          : 'from-purple-600 to-blue-600'
      } text-transparent bg-clip-text`}>
        Our Coffee
      </h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        {products.map(product => (
          <Card key={product.id} className={`${
            isDark
              ? 'bg-white/10 border-purple-800'
              : 'bg-white/50 border-purple-100'
          } backdrop-blur-sm hover:shadow-lg transition-all`}>
            <CardHeader>
              <img 
                src={product.image} 
                alt={product.name}
                className="rounded-lg"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className={isDark ? 'text-white' : 'text-gray-800'}>
                {product.name}
              </CardTitle>
              <CardDescription className={isDark ? 'text-white/70' : 'text-gray-600'}>
                {product.description}
              </CardDescription>
              <p className={`mt-2 font-bold ${
                isDark ? 'text-purple-400' : 'text-purple-600'
              }`}>€{product.price}</p>
            </CardContent>
            <CardFooter>
              <Button className={`w-full ${
                isDark
                  ? 'bg-gradient-to-r from-purple-400 to-blue-400'
                  : 'bg-gradient-to-r from-purple-600 to-blue-600'
              } text-white hover:opacity-90`}>
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default App;
