import "./App.css";
import Header from "./components/Header/Header.jsx";
import HelloSection from "./components/HelloSection/HelloSection.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ContactSection from "./components/ContactSection/ContactSection.jsx";
import StackSection from "./components/StackSection/StackSection.jsx";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection.jsx";

function App() {
  return (
    <>
      <Header />
      <HelloSection />
      <ContactSection />
      <StackSection />
      <ProjectsSection />
      <Footer />
    </>
  );
}

export default App;
