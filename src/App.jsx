import Logo from './assets/Logo.svg';
import SBDLogo from './assets/SBDLogo.svg';
import DMJLogo from './assets/DMJLogo.svg';
import OSLogo from './assets/OSLogo.svg';
import character from './assets/character.png';
import './App.css';
import { useState, useEffect } from "react";

const response = {
  page: 1,
  results: [
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: SBDLogo,
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      image: DMJLogo,
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      image: OSLogo,
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      image: Logo,
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      image: Logo,
    },
  ],
};

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert(`${count} is divisible by 10`);
    }
  }, [count]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="min-h-screen bg-primary" style={{ scrollPaddingTop: '5rem' }}>
      {/* Navigation Bar */}
      <nav className="fixed w-full flex justify-between bg-secondary text-text p-4 z-10 shadow-lg">
        <img src={Logo} alt="Logo" className="w-11" />
        <div className="font-bold ml-5 mr-auto mt-auto mb-auto text-lg">
          <a href="/">Fadhlureza Sebastian</a>
        </div>
        <div className="flex space-x-6 mt-auto mb-auto">
          <a href="#home" className="hover:text-blue-500 transition">Home</a>
          <a href="#profile" className="hover:text-blue-500 transition">Profile</a>
          <a href="#counter" className="hover:text-blue-500 transition">Counter</a>
        </div>
      </nav>

      {/* Home Section */}
      <div className="min-h-screen bg-primary" id="home" style={{ scrollPaddingTop: '5rem' }}>
        <div className="flex flex-col md:flex-row items-center justify-center pt-24 pb-12 px-4">
          <div className="text-text md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">Welcome to My Web!</h1>
            <p className="text-lg">Exploring the world of web development</p>
            <a href="#cards">
            <button className="mt-4 px-6 py-2 bg-secondary text-text rounded-lg hover:bg-accent hover:text-white transition">
            Cards
            </button>
            </a>
          </div>
          <img src={character} alt="Character" className="md:w-1/3 mt-8 md:mt-0 mx-auto md:mx-0" />
        </div>
      </div>

      {/* Profile Section */}
      <div className="min-h-screen bg-secondary" id="profile" style={{ scrollPaddingTop: '5rem' }}>
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-text mb-8 mt-5 text-center">Profile</h2>
          <div className="text-text text-center md:text-left">
            <p className="mb-4">Frontend Developer | React Enthusiast</p>
            <p className="mb-4">Passionate about creating user-friendly web applications</p>
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <div className="min-h-screen bg-primary" id="counter" style={{ scrollPaddingBottom: '5rem' }}>
        <div className="flex justify-center items-center my-8">
          <div className="bg-secondary rounded text-center text-text border-accent border-double bordered-lg shadow-lg p-5 mt-20">
            <p className="text-2xl mt-10">Counter: {count}</p>
            <div className="flex justify-center space-x-4 mt-4 mb-5 mx-5">
              <button
                onClick={increment}
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                +
              </button>
              <button
                onClick={decrement}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                -
              </button>
              <button
                onClick={reset}
                className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-secondary mt-20" id="cards" style={{ scrollPaddingTop: '5rem' }}>
        {response.results.map((item) => (
          <div
            key={item.id}
            className="bg-white border-accent p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-text mt-2">{item.body}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-primary text-text py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <p className="mb-2">Email: fadhlureza@gmail.com</p>
            <p className="mb-2">Phone: +6281282004828</p>
            <p className="mb-2">Location: Jakarta, Indonesia</p>
          </div>
          <div className="text-center mt-4 text-sm">
            <p>&copy; 2023 Fadhlureza Sebastian. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;