import React from 'react';

const LearnCard = ({title,description,image}) => {
    return (
        <div className="card lg:card-side bg-base-100  shadow-xl border-2 border-white hover:border-2 hover:border-[#00b58b]">
  <figure><img src={image} className='w-4/5' alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">{title}</h2>
    <p>{description}</p>
   
  </div>
</div>
    );
};

export default LearnCard;