/**
 * @copyright 2025 Shahriar Tamjid
 * @license Apache-2.0
 */

import React from 'react'
import PropTypes from 'prop-types'

const ExperienceCard = ({content, designation, timeline, imgSrc, company}) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">

        <div className="flex items-center gap-1 mb-3">
            <p className="text-lg text-zinc-200 mb-4">{timeline}</p>
        </div>

        <div className="flex items-center gap-2 mt-auto">
            <figure className='img-box rounded-lg'>
                <img src={imgSrc} alt={company} width={60} height={60} loading='lazy' className='img-cover' />
            </figure>

            <div className='ml-4'> 
                <p className='text-md text-zinc-200'>{designation}</p>

                <p className="text-md text-zinc-200 tracking-wider">{company}</p>
            </div>
        </div>

        <p className="text-zinc-400 mt-4">{content}</p>
    </div>
  )
}

ExperienceCard.propTypes = {
    content: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    timeline: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
}

export default ExperienceCard