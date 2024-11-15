import { Banner } from "../components/banner/Banner";
import { WorkCard } from "../components/cards/WorkCard";
import { CURRENT_WORK_TITLE, CURRENT_WORK_UNDER_REVIEW_DATA, CURRENT_WORK_WORKING_PAPERS_DATA } from "../data/current-work-data";

export function CurrentWorkPage() {

  return (
    <div>
      <Banner title={CURRENT_WORK_TITLE} />

      <h2>Under Review</h2>
      {CURRENT_WORK_UNDER_REVIEW_DATA.map(data => 
        <WorkCard key={`currentwork-underreview-${data.title}`} title={data.title} content={data.content} />
      )}

      <h2>Working Papers</h2>
      {CURRENT_WORK_WORKING_PAPERS_DATA.map(data => 
        <WorkCard key={`currentwork-workingpapers-${data.title}`} title={data.title} content={data.content} />
      )}
    </div>
  )

}