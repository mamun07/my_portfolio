import React from 'react';
import Data from '../data'
import Masonry from 'react-masonry-css'
import {CartMain} from './component.style'
import {IoMdOpen} from "react-icons/io";

const Portfoliocart = () => {
    const MyBrk = { default: 4, 1100: 3, 700: 3, 500: 2 };
    const Portfolios = Data.portfolio.map((items, i) => {
        return <CartMain key={i}>
            <img src={items.srcport} alt={items.altport}/>
            <a target="_blank" rel='noreferrer' href={items.linkport}> View <IoMdOpen/> </a>
        </CartMain>
    })

  return (
    <Masonry
        breakpointCols={MyBrk}
        className="portfolio-grid"
        columnClassName="portfolio-grid_column"
    >
        {Portfolios}
    </Masonry>
  );
}
export default Portfoliocart