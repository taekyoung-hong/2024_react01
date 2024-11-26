
import './App.css';
import CourseListCard from './component/step04/CourseListCard';
import PackingList from './component/step05/PackingList';
import TextList from './component/step06/TextList';

/*
function Header() {
  return (
    <header>
      <h2>Header</h2>
    </header>
  );
}
function Footer() {
  return (
    <footer>n
      <h2>Footer</h2>
    </footer>
  );
}
function Main() {
  return (
    <main>
      <Counter />
    </main>
  );
}


// 파스칼 케이스 사용해야 된다.(첫글자 대문자 단어 첫글자 대문자)
function Counter() {
  return (
    <button>Counter</button>
  );
}
*/
// 리액트에서는 class 예약어기 때문에 사용 못하고 , 
// class 대신 className 이라고 사용한다.


//  <Header />
//        <Main />
//        <Footer />
       
       // 2단계 CourseListCard.jsx 에 보낸다.
       //  <main>
       //     <div className="card">
       //       <div className="card__header">강의 목록</div>
       //       <div className="card__body">
       //         <div className="courses">
       
       
       //           {/* <Courseitem />
       //           <Courseitem />
       //           <Courseitem /> */}
       //         </div>
       //       </div>
  //     </div>
  //   </main>
  
  // function App(title, description) {
  //   return (
  // <main>
  //    {/* <CourseListCard /> */}
  //  <div className="card">
  //       <div className="card__header">강의 목록</div>
  //       <div className="card__body">
  //         <div className="courses">  
  //           <Courseitem 
  //           title="입문자를 위한 HTML&CSS 웹 개발 입문" 
  //           description="웹 개발에 필요한 기본 지식을 배웁니다." 
  //           />
  //           <Courseitem 
  //           title="초급자를 위한 HTML&CSS 웹 개발 입문" 
  //           description="웹 개발에 필요한 기본 지식을 배웁니다."
  //           />
  //           <Courseitem 
  //           title="중급자를 위한 HTML&CSS 웹 개발 입문" 
  //           description="웹 개발에 필요한 기본 지식을 배웁니다." 
  //           />
  //         </div>
  //       </div>
  //     </div>


  //  </main>

/* import React from 'react';
import Avatar from './component/step02/Avatar';

function App(props) {
  return (
    <div>
      <Avatar 
      size = {100}
      />
      <Avatar />
      <Avatar />
    </div>
  );
} */

const items = [
  {
    title: '입문자를 위한, HTML&CSS 웹 개발 입문',
    description: '웹 개발에 필요한 기본 지식을 배웁니다.',
    thumbnail: './img/kisame.png',
    isFavorite : true
  },
  {
    title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
    description: '쉽고! 알찬! 내용을 준비했습니다.',
    thumbnail: './img/kisame.png',
    isFavorite : true
  },
  {
    title: '포트폴리오 사이트 만들고 배포까지!',
    description: '포트폴리오 사이트를 만들고 배포해 보세요.',
    thumbnail: './img/kisame.png',
    isFavorite : true
  }
]


// 조건부 렌더링 : if, &&, 삼항연산자(조건식? 참:거짓)

const ischk = false;

function App({name, isPacked}) {
  return (
    <div className='App'>
      { ischk ? <h1>Hello, react</h1> : <CourseListCard itmes={items}/> }
      <hr />
      <PackingList />
      <TextList />
    </div>
  );
}
 



export default App;