import React from 'react';

function Avatar({size, person}) {
    const getImgUrl = 'https://i.imgur.com/'
    
    return (
     <img
     src={getImgUrl + person.imageId + '.jpg'}
     alt = {person.name}
     width = {size}
     height = {size}
     />
    );
}

export default Avatar;