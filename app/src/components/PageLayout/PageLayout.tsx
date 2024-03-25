import { Outlet, useMatches } from "react-router-dom";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import IRouteObjectHandle from "../../types/IRouteObjectHandle";

/**
 * Creates a new PageLayout component.
 * @returns {JSX.Element} A new react component.
 * @type {() => JSX.Element}
 */
const PageLayout: () => JSX.Element = (): JSX.Element => {
  // get the current route matches
  const matches = useMatches();

  useEffect(() => {
    // select the matching route and set the document title
    const title = (matches.find((match) => match.handle)?.handle as IRouteObjectHandle)?.title;
    document.title = title;
  }, [matches]);

  return (
    <>
      <Header />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default PageLayout;
