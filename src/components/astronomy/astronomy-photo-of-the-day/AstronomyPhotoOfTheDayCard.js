import React from 'react';
import './AstronomyPhotoOfTheDay.scss';

const AstronomyPhotoOfTheDayCard = (props) => {

    const {title, url, hdurl, explanation, date, copyright } = props.data;

    return (
        <div className="card">
            <h6 className="title">{title}</h6>
            <a href={hdurl} className="image-wrapper">
                <img src={url} alt={title} />
            </a>
            <p className="explanation-paragraph">{explanation}</p>
            <span className="date-span">{date} {copyright}</span>
        </div>
    )
}

export default AstronomyPhotoOfTheDayCard;