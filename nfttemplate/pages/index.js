import React from 'react';


//Internal import
import Style from "../styles/index.module.css";
import { BigNFTSlider, Category, Filter, HeroSection, Service, Subscribe, Title, NFTCard, Collection, FollowerTab, AudioLive, Slider } from '@/Components/Componentindex';

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title heading="Audio Collections" paragraph="Discover the most outstanding NFTs in all topics of life."/>
      <AudioLive />
      <Title heading="New Collections" paragraph="Discover the most outstanding NFTs in all topics of life."/>
      <Collection />
      <Title heading="Featured NFTs" paragraph="Discover the most outstanding NFTs in all topics of life."/>
      <FollowerTab />
      <Title heading="Explore NFTs Video" paragraph="Play and Enjoy them"/>
      <Slider />
      <Filter />
      <NFTCard />
      <Title heading="Browse by category" paragraph="Explore the NFS in the most featured categories."/>
      <Category />
      <Subscribe />
    </div>
  )
}

export default Home