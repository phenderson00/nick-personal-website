import React, { useState } from "react";

import { Banner } from "../components/banner/Banner";
import { InfoCard, InfoCardProps } from "../components/info-card/InfoCard";
import { HOME_TITLE, HOME_DATA } from "../data/home-data";

export function HomePage() {

  const [homeData, setHomeData] = useState<InfoCardProps[]>(HOME_DATA);

  return (
    <div>
      <Banner title={HOME_TITLE} />
      {homeData.map(data => (
        <InfoCard title={data.title} content={data.content} />
      ))}
    </div>
  )

}