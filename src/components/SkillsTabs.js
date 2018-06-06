import React from 'react';

import SkillsCard from './SkillsCard';

const SkillsTabs = ({children, data, active, skills}) => {
  const skillsContent = data.map(skillContent => <SkillsCard key={skillContent.id} data={skillContent} />);
  return (
    <div className={"tab-pane fade show " + (active ? " active" : "")} id={skills} role="tabpanel" aria-labelledby={skills + "-tab"} data-scroll-id={skills + "-tab"}>
        <div className="row">
            {skillsContent}
        </div>
    </div>
  )
}

export default SkillsTabs;
