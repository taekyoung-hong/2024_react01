import React from 'react';


// 조건부로 null 반환하면 아무것도 반환하지 않는다.
/* function item(name, isPacked) {
    if (isPacked) {
        return <li>{name} ✅</li>
    } else {
        return <li>{name} </li>
    }
} */

function item({ name, isPacked }) {
    if (isPacked) {
        return <li>{name} ✅</li>
    } else {
        return null
    }
}



// function item(name, isPacked) {

//     return <li>{isPacked? name+'✅' : name } </li>

//  }



export default item;