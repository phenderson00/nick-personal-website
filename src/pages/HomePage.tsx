import { Banner } from "../components/banner/Banner";
import { InfoCard } from "../components/info-card/InfoCard";
import {HOME_TITLE, HOME_DATA} from "../data/home-data";

export function HomePage() {

  return (
    <div>
      <Banner title={HOME_TITLE} />
      {HOME_DATA.map(data => (
        <InfoCard key={`homepage-${data.title}`} title={data.title} content={data.content} />
      ))}
    </div>
  )

}