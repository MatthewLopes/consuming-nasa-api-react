import React from 'react';

const EarthPolychromaticImagingCameraCard = (props) => {

    const {image, date, caption, centroid_coordinates, dscovr_j2000_position, lunar_j2000_position } = props.data;
    const dateAndTimeArray = date.split(' ');
    const dateArray = dateAndTimeArray[0].split('-');
    const year = dateArray[0];
    const month = dateArray[1];
    const day = dateArray[2];

    return (
        <div className="card">
            <a className="image-wrapper">
                <img src={'https://epic.gsfc.nasa.gov/archive/natural/' + year + '/' + month + '/' + day + '/png/' + image + '.png'} />
            </a>
            <p className="explanation-paragraph">{caption}</p>
            <span className="date-span">{date}</span>
        </div>
    )
    
}

export default EarthPolychromaticImagingCameraCard;