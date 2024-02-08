import React from 'react';
import styled from 'styled-components';
import Navbar from 'components/common/Navbar';
import Search from 'components/Search';
import CategoryTab from 'components/CategoryTab';

function Main() {
  const Banner = styled.div`
    background-color: #ffcd6b;
    height: 350px;
    width: 100%;
  `;

  return (
    <>
      <Navbar />
      <Banner />
      <Search />
      <CategoryTab />
    </>
  );
}

export default Main;
