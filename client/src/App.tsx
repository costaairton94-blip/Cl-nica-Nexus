import { Switch, Route } from "wouter";
import Layout from "./Layout";
import Home from "./pages/Home";
import Space from "./pages/Space";
import Team from "./pages/Team";
import Services from "./pages/Services";
import Coworking from "./pages/Coworking";
import Contact from "./pages/Contact";
import DrAirton from "./pages/DrAirton";
import Mariana from "./pages/Mariana";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./ErrorBoundary";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Layout>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/espaco" component={Space} />
            <Route path="/equipe" component={Team} />
            <Route path="/servicos" component={Services} />
            <Route path="/coworking" component={Coworking} />
            <Route path="/contato" component={Contact} />
            <Route path="/dr-airton" component={DrAirton} />
            <Route path="/mariana" component={Mariana} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
