import React from 'react';

const SkillsCard = ({data: {name, status, percentage}}) => {
  const stylePercentage = percentage + '%';
  return (
    <div className="col-md-6">
        <div className="skill-card">
            <h3>{name} <span>{status}</span></h3>
            <span className="percent">{percentage}%</span>
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: stylePercentage}} aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    </div>
  )
}

export default SkillsCard;
