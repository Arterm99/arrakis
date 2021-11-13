import React from "react";

import Header from '../../header';
import CategoriesOfGoods from '../../categoriesOfGoods';
import Demand from '../../demand';
import About from '../../about';
import HowItsWork from "../../howItsWork";
import Footer from '../../footer';

function MainPage() {
  return (
    <React.Fragment>
      <Header />
      <CategoriesOfGoods />
      <Demand />
      <About />
      <HowItsWork />
      <Footer />
    </React.Fragment>
  );
}

export default MainPage;