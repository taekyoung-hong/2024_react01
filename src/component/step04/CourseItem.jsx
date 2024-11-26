function HeartIconBtn(isFavorite = false) {
    if (isFavorite) {
        return (
            <button className='btn'>
                <img className='btn_img' src="./img/heart-fill-icon.svg" alt="" />
            </button>
        )
    }
    return (
        <button className='btn'>
            <img className='btn_img' src="./img/heart-icon.svg" alt="" />
        </button>
    )
}

function Courseitem({ title, description, image, isFavorite }) {


    return (
        <>
            <article className="course" >
                <img className="course__img" src={image} alt="이미지" style={{ width: 100 }} />
                <div className="course__body">
                    <div className="course__title">{title}</div>
                    <div className="course__description">{description}</div>

                </div>
                <div className="course_icons">
                    <HeartIconBtn isFavorite ={isFavorite}/>
                </div>
            </article>

        </>
    );

}

export default Courseitem;