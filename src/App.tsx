import Footer from "./components/Footer/Footer";
import { NavbarMain } from "./components/Navbar";

function App() {
  return (
     <div className="min-h-screen flex flex-col">
    <NavbarMain/>
    <main className="grow">
        {/* your routes/components */}
      </main>
    <Footer/>
    </div>
  );
}

export default App;
