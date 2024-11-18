import logo from './logo.svg';
import './App.css';
import CourseListCard from './component/course/CourseListCard';



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
    <footer>
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


function App() {
  return (

    /* <Header />
       <Main />
       <Footer /> */
   
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
   
   <main>
   <CourseListCard />
   </main>

  );
}

export default App.jsp;