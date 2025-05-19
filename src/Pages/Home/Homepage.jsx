import React from 'react'
import Layout from '../../Components/Layout/Layout'
import HeroSection from '../../Components/heroSection/heroSection'
import Category from '../../Components/category/Category'
import HomePageProductCard from '../../Components/homePageProductCart/HomePageProductCart'
import Track from '../../Components/track/Track'


function Homepage() {
  return (
    <Layout>
      <HeroSection />
      <Category />
      <HomePageProductCard></HomePageProductCard>
      <Track />
    
    </Layout>
  )
}

export default Homepage