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
  // filter 는 원하는 것만 추출
  const chemist = people.filter((k) => {
    return k.profession == 'chemist'
  }
  )

  const listitems = chemist.map((k) => {
    return <li key={k.id}>{k.name}</li>
  }
  )

  return (
    <ul>
      {chemist}
    </ul>
  );
}

export default TextList;