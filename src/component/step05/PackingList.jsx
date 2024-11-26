import React from 'react';

function PackingList(props) {
    return (
        <section>
          <h1>조건부 렌더링</h1>  
          <ul>
            <item isPacked={true}
            name="고길동"/>
            <item isPacked={true}
            name="둘리"/>
            <item isPacked={false}
            name="희동이"/>
          </ul>
        </section>
    );
}

export default PackingList;