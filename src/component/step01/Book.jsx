import React from 'react';


// props : 자바에서는 인자, 매개변수 
/* function Book(props) {
    return (
        <div>
            {`문자열 ${ }`}
            <h1>{`이 책의 이름은 ${props.name } 입니다.`}</h1>
            <h1>{`이 책의 총 ${props.numofPage } 페이지로 이뤄어져 있습니다.`}</h1>
        </div>
    );
}
 */

function Book({name, numofPage}) {
    return (
        <div>
            
            {/* `문자열 ${ }` */}
            <img src="" alt="" />
            <h1>{`이 책의 이름은 ${name } 입니다.`}</h1>
            <h1>{`이 책의 총 ${numofPage } 페이지로 이뤄어져 있습니다.`}</h1>
        
        </div>
    );
}

export default Book;