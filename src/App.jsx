import "./App.css";
import Header from "./components/header/Header";
import HelloSection from "./components/HelloSection/HelloSection";
import Footer from "./components/Footer/Footer";
// import Sidebar from "./components/Sidebar/Sidebar";
import ContactSection from "./components/ContactSection/ContactSection";
import StackSection from "./components/StackSection/StackSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";

function App() {
  return (
    <>
      <Header />
      {/* veo si el sidebar va aqui o en el header */}
      {/* <Sidebar /> */}
      <HelloSection />
      <ContactSection />
      <StackSection />
      <ProjectsSection/>
      <Footer />
    </>
  );
}

export default App;
