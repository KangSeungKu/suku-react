import React from 'react'
import Footer from './Footer'
import Header from './Header'
import MainSlide from './Header/MainSlide'
import PopularProducts from './PopularProducts'

const MainLayout = () => {
  return (
    <>
        <Header/>
        <MainSlide/>
        <PopularProducts/>
        <Footer/>
    </>
  )
}

export default MainLayout