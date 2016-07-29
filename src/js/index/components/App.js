import { Separator } from 'prhone-gui';
import Header from './Header';
import Projects from './Projects';
import Footer from './Footer';

const App = React.createClass({

  render () {
    const globalState = RP.store.getState();
    const loaded = globalState.get('loaded');
    return (
      <div>
        <Header />
        <Separator anim={loaded} />
        <Projects />
        <Footer />
      </div>
    );
  }
});

export default App;
