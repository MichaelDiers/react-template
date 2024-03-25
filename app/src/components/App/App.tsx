import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

/**
 * Creates a new App component.
 * @returns {JSX.Element} A new react component.
 * @type {() => JSX.Element}
 */
const App: () => JSX.Element = (): JSX.Element => {
  return (
    <>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
