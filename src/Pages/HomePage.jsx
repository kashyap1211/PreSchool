import React from 'react'
import Banner from '../Containers/Home/Banner'
import WhatWeOffer from '../Containers/Home/WhatWeOffer'
import About from '../Containers/Home/About'
import OurClass from '../Containers/Home/OurClass'
import { ExploreNewWorlds } from '../Containers/Home/ExploreNewWorlds'
import { WhyChooseUs } from '../Containers/Home/WhyChooseUs'
import { UpcomingEvents } from '../Containers/Home/UpcomingEvents'

export const HomePage = () => {
  return (
    <div>
      <Banner/>
      <WhatWeOffer />
      <About />
      <OurClass/>
      <ExploreNewWorlds/>
      <WhyChooseUs/>
      <UpcomingEvents/>
    </div>
  )
}
