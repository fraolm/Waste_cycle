import GetStartedSection from './GetStartedSection';
import Navbar from './Navbar'
import ServiceInfoCard from './ServiceInfoCard';
import CardDisplay from './pages/FlashCards/CardDisplay';
import Footer from './pages/Footer/Footer';
import Home from './pages/Homepage/Home';
import TeamCard from './pages/OurTeam/TeamCard';

function App() {
  return (
    <div >
    {Navbar()}
    {Home()}
    {CardDisplay()}
    {TeamCard()}
    {GetStartedSection()}
    {ServiceInfoCard()}
    {Footer()}
    </div>
  );
}

export default App;
