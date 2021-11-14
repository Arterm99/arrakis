import React from "react";

import Menu from '../../menu';
import Products from "../../products";
import Footer from '../../footer';

function MainPage() {
  return (
    <React.Fragment>
      <Menu isFilled/>
      <Products />
      <Footer />
    </React.Fragment>
  );
}

export default MainPage;