// import AboutUs from "./components/Apptoll/AboutUs";
import { Route, Router, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Apptoll/Header";
// import AppFeature from "./components/Apptoll/AppFeature";
// import Investor from "./components/Apptoll/Investor";
// import ScreenShot from "./components/Apptoll/ScreenShot";
// import Download from "./components/Apptoll/Download";
// import TestoMonials from "./components/Apptoll/TestoMonials";
// import Subscribe from "./components/Apptoll/Subscribe";
// import Footer from "./components/Apptoll/Footer";
import LoginModal from "./components/Apptoll/LoginModal";
import { useState } from "react";
import Terms_Conditions from "./components/Apptoll/Terms_Conditions";

function App() {
  // const [isOpen, setIsOpen] = useState(false);
  // const togglePopup = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>

    <Header />
    {/*
    <Terms_Conditions/>
      <Routes>
        <Route path="/login" component={LoginModal}></Route>
      </Routes>
      <AboutUs />
      <AppFeature />
      <Investor />*/}
      {/* <ScreenShot />*/}
      {/* <Download />
      <TestoMonials />
      <Subscribe />
      <Footer />
         */}
    </>
  );
}

export default App;
