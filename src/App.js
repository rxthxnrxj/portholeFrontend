import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import DeployScreen from "./screens/DeployScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AddScreen from "./screens/AddScreen";
import camera from "./screens/camera";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/deploy" component={DeployScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/add" component={AddScreen} />
          <Route path="/new" component={camera} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
