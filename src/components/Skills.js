import React from 'react';

import SkillsTabs from './SkillsTabs';

const Skills = ({data}) => {
  return (
    <React.Fragment>
    {/**<!-- Skills Area -->**/}
    <section className="skills-area section-pad section-padding-less bg" id="skills">
        <div className="container">
            <div className="row align-items-center">
                <div className="col">
                    <div className="section-title text-center">
                        <h3 className="text-uppercase"><strong>Skills</strong> I have</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="diff-cat">
                        <div className="nav-center">
                            <ul className="nav nav-pills" id="skills-tab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="skills-1-tab" data-toggle="tab" href="#skills-1" role="tab" aria-controls="skills-1" aria-selected="true">Language</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="skills-2-tab" data-toggle="tab" href="#skills-2" role="tab" aria-controls="skills-2" aria-selected="false">Tools</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="skills-3-tab" data-toggle="tab" href="#skills-3" role="tab" aria-controls="skills-3" aria-selected="false">Web</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="skills">
                        <div className="tab-content" id="skills-tabContent">
                            <SkillsTabs data={data.programmingln} active={true} skills={"skills-1"} />
                            <SkillsTabs data={data.tools} active={false} skills={"skills-2"} />
                            <SkillsTabs data={data.web} active={false} skills={"skills-3"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/**<!-- /Skills Area -->**/}
    </React.Fragment>
  )
}

export default Skills;
