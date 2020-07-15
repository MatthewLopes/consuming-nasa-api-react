import React from 'react';
import '../astronomy-photo-of-the-day/AstronomyPhotoOfTheDay.css';
import '../../../assets/animations/NasaParticleAnimation';

const EarthPolychromaticImagingCameraCard = (props) => {

    const {image, date, caption, centroid_coordinates, dscovr_j2000_position, lunar_j2000_position } = props.data;
    const dateAndTimeArray = date.split(' ');
    const dateArray = dateAndTimeArray[0].split('-');
    const year = dateArray[0];
    const month = dateArray[1];
    const day = dateArray[2];

    return (
        <div>
            <div id="particles-js"></div>
            <div className="card">
                <a className="image-wrapper">
                    <img src={'https://epic.gsfc.nasa.gov/archive/natural/' + year + '/' + month + '/' + day + '/png/' + image + '.png'} />
                </a>
                <p className="explanation-paragraph">{caption}</p>
                <span className="date-span">{date}</span>
            </div>
        </div>
    )
    
}

export default EarthPolychromaticImagingCameraCard;