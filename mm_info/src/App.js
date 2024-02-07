import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import Home from "./Component/Home";
import Rules from "./Component/Rules";
import { BrowserRouter as Router, Route, useHistory, Routes, useLocation, useParams } from 'react-router-dom';
import WinnerList from "./Component/WinnerList";
import PlayNow from "./Component/PlayNow";
import MainGame from "./Component/MainGame";
import CoinGive from "./Component/CoinGive";
import AboutUs from "./Component/AboutUs";
import ContactUs from "./Component/ContactUs";
import Terms from "./Component/Terms";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    const handleRouteChange = () => {
      
      const routeTitleMap = {
        '/': 'Home Page - Quizylite.com',
        '/rules': 'Quizylite Rules- Quizylite.com',
        '/aboutus': 'About Quizylite- Quizylite.com',
        '/contactus': 'Contact Quizylite - Quizylite.com',
        '/termsandcondition': 'Quiz Terms- Quizylite.com',
        '/winnerlist': 'Quiz Winner List - Quizylite.com',
        '/playnow/:id': 'Quiz Rules - Quizylite.com',
        '/playnow/quiz/:id': 'Quiz Page - Quizylite.com',
        '/quiz/score/:id': 'Quiz Result - Quizylite.com',
      };

      // const currentRoute = location.pathname;
      const matchingRoute = Object.keys(routeTitleMap).find((route) => {
        const routeRegex = new RegExp(`^${route.replace(/:\w+/g, '[^/]+')}$`);
        return routeRegex.test(location.pathname);
      });

      document.title = routeTitleMap[matchingRoute] || 'Default Title';
     
    
      // document.title = routeTitleMap[currentRoute] || 'Default Title';
    };

    // Initial title setup when the component mounts
    handleRouteChange();

    // Clean up the effect when the component unmounts
    return () => {
      // Optional cleanup (if needed)
    };
  }, [location]);
  return (
    <Container className="p-0">
      <Row className="content-back-ground">
        <Col className="p-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/termsandcondition" element={<Terms />} />
            <Route path="/playnow/:id" element={<PlayNow />} />
            <Route path="/winnerlist" element={<WinnerList />} />
            <Route path="/playnow/quiz/:id" element={<MainGame />} />
            <Route path="/quiz/score/:id" element={<CoinGive />} />
          </Routes>
    

        </Col>
      </Row>
    </Container>
  );
}

export default App;
