import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import BookACall from "./Components/BookACall";
import MeetEli from "./Components/MeetEli";
import Mission from "./Components/Mission";
import MeetEliDetail from "./Components/MeetEliDetail";
import ProgramOverview from "./Components/ProgramOverview";
import AskMyCow from "./Components/AskMyCow";
// import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Mission />
      <MeetEli />
      <MeetEliDetail />
      <ProgramOverview />
      <AskMyCow />
      <BookACall />
      <Footer />
    </div>
  );
}

export default App;
