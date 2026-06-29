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
import CoworkingMedicos from "./pages/CoworkingMedicos";
import ConsultorioPorHora from "./pages/ConsultorioPorHora";
import AluguelConsultorio from "./pages/AluguelConsultorio";
import CoworkingVilaClementino from "./pages/CoworkingVilaClementino";
import CoworkingVilaMariana from "./pages/CoworkingVilaMariana";
import SalaPsicologo from "./pages/SalaPsicologo";
import SalaNutricionista from "./pages/SalaNutricionista";
import SalaFonoaudiologo from "./pages/SalaFonoaudiologo";
import ConsultorioMedicoVilaClementino from "./pages/ConsultorioMedicoVilaClementino";
import ConsultorioHospitalSaoPaulo from "./pages/ConsultorioHospitalSaoPaulo";
import ConsultorioMetroSantaCruz from "./pages/ConsultorioMetroSantaCruz";
import CoworkingProfissionaisSaude from "./pages/CoworkingProfissionaisSaude";
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
            <Route path="/coworking-medico" component={CoworkingMedicos} />
            <Route path="/consultorio-por-hora" component={ConsultorioPorHora} />
            <Route path="/aluguel-consultorio-sao-paulo" component={AluguelConsultorio} />
            <Route path="/coworking-vila-clementino" component={CoworkingVilaClementino} />
            <Route path="/coworking-vila-mariana" component={CoworkingVilaMariana} />
            <Route path="/sala-psicologo-vila-clementino" component={SalaPsicologo} />
            <Route path="/sala-nutricionista-vila-clementino" component={SalaNutricionista} />
            <Route path="/sala-fonoaudiologo-vila-clementino" component={SalaFonoaudiologo} />
            <Route path="/consultorio-medico-vila-clementino" component={ConsultorioMedicoVilaClementino} />
            <Route path="/consultorio-hospital-sao-paulo" component={ConsultorioHospitalSaoPaulo} />
            <Route path="/consultorio-metro-santa-cruz" component={ConsultorioMetroSantaCruz} />
            <Route path="/coworking-profissionais-saude" component={CoworkingProfissionaisSaude} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
