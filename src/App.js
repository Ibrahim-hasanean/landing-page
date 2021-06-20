import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import SearchSection from "./components/SearchSection/SearchSection";
import ExploreSection from "./components/ExploreSection/ExploreSection";
import AdventureSection from "./components/AdventureSection/AdventureSection";
import PhotoGallary from "./components/PhotoGallary/PhotoGallary";
import Tailer from "./components/Tailer/Tailer";
function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <SearchSection />
      <ExploreSection />
      <AdventureSection />
      <PhotoGallary />
      <Tailer />
    </div>
  );
}

export default App;
