import { Flowbite } from 'flowbite-react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router';
import './App.css';
import Footer from './components/shared/footer/Footer';
import NavbarMain from './components/shared/navbar/Navbar';
const customTheme = {
  button: {
    color: {
      primary: "bg-red-500 hover:bg-red-600",
    },
  },
};
function App() {

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Toaster />
      <NavbarMain />
      <Outlet />
      <Footer />
    </Flowbite>
  )
}

export default App
