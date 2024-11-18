import Courseitem from './Courseitem';

function CourseListCard(props) {
    return (

      <div className="card">
        <div className="card__header">강의 목록</div>
        <div className="card__body">
          <div className="courses">  
            <Courseitem />
            <Courseitem />
            <Courseitem />
          </div>
        </div>
      </div>

    );
}

export default CourseListCard;