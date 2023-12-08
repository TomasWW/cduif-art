import "./App.css";
import { Home } from "./Components/Home.jsx";
import { Gallery } from "./Components/Gallery";
import { HomePage } from "./Components/HomePage";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom"
import { Workshop } from "./Components/Workshop.jsx";
import { Contact } from "./Components/Contact.jsx";
function App() {
  const [currentStep, setCurrentStep] = useState(1); //manejo de la renderizacion por etapas
  const handleHomeClick = () => {
    setCurrentStep(1);
  };
  const handleGalleryClick = () => {
    setCurrentStep(2);
  };

  const handleContactClick = () => {
    setCurrentStep(3);
  };
  const handleWorkshopClick = () => {
    setCurrentStep(4);
  };
  return (
    <Router>

    <div className="App">
      {currentStep === 1 && (
        <HomePage
          handleGalleryClick={handleGalleryClick}
          handleHomeClick={handleHomeClick}
          handleContactClick={handleContactClick}
          handleWorkshopClick={handleWorkshopClick}
          mainComponent={<Home />}
        />
      )}
      {currentStep === 2 && (
        <HomePage
          handleGalleryClick={handleGalleryClick}
          handleHomeClick={handleHomeClick}
          handleContactClick={handleContactClick}
          handleWorkshopClick={handleWorkshopClick}
          mainComponent={<Gallery />}
        />
      )}
      {currentStep === 3 && (
        <HomePage
          handleGalleryClick={handleGalleryClick}
          handleHomeClick={handleHomeClick}
          handleContactClick={handleContactClick}
          handleWorkshopClick={handleWorkshopClick}
          mainComponent={<Contact/>}
        />
      )}{" "}
      {currentStep === 4 && (
        <HomePage
          handleGalleryClick={handleGalleryClick}
          handleHomeClick={handleHomeClick}
          handleContactClick={handleContactClick}
          handleWorkshopClick={handleWorkshopClick}
          mainComponent={<Workshop />}
        />
      )}
    </div>
    </Router>
  );
}

export default App;
