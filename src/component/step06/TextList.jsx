import React from 'react';

const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];

function TextList(props) {
     
    // 리스트 렌더링에서는 반드시 유일한 값을 갖는 
    const listitems = people.map((k) => {
       return <li key={k.id}>{k.name}</li>
    }
    )
    console.log(listitems)
    return (
        <ul>
        {listitems}
        </ul>
    );
}

export default TextList;