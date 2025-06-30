import Bridegroom from './components/Bridegroom';
import Countdown from './components/Countdown';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Organization from './components/Organization';
import RSVP from './components/RSVP';
import Seeyou from './components/Seeyou';
import Sidebar from './components/Sidebar';
import Story from './components/Story';
import Where from './components/Where';
import Todo from './components/Todo';
import FAQ from './components/Faq';
import Apparel from './components/Apparel';
import Registry from './components/Registry';
import Photos from './components/Photos';

function App() {
  return (
    <>
      <Sidebar />
      <div id='oliven-main'>
        <Header />
        <Bridegroom />
        <Countdown />
        <Story />
        <Seeyou />
        <Organization />
        <Gallery />
        <Where />
        <Apparel />
        <Registry />
        <FAQ />
        <Todo />
        <Photos />
        <Footer />
      </div>
    </>
  );
}

export default App;
