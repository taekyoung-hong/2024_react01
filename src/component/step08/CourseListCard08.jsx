
function HeartIconBtn({chk = false}) {
   function handleFavorite() {
    chk = !chk; 
    return alert(chk? "좋아요" : "모르겠어요")
    console.log(chk? "좋아요" : "모르겠어요");
   } 
   return(
     <button className="btn" onClick={handleFavorite} >
        <img className="btn_img" src={chk ? './img/heart-fill-icon.svg' : './img/heart-icon.svg'} />
     </button>
   ); 

  }
  

function CourseListCard08(items) {
    const [course1, course2, course3] = items;

    return (
        <>
          <div className="card">
        <div className="card__header">강의 목록</div>
        <div className="card__body">
          <div className="courses">  
            <HeartIconBtn chk={isFavorite}/>
          </div>
        </div>
      </div>
      </>
    );
}

export default CourseListCard08;