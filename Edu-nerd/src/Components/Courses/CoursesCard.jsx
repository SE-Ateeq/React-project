import React from 'react'

const CoursesCard = (props) => {

    const { imgUrl, title, lesson, students, ratting} = props.item

  return (
    <div className="single_course_item">
                    <div className="course_img">
                        <img src={imgUrl}alt="" className='w-100' />
                    </div>

                    <div className="course_details">
                       <h6 className="course_title mb-4">
                        {title}
                       </h6>

                       <div className='d-flex justify-content-between align-items-center'>
                        <p className="lesson d-flex align-iems-center gap-1">
                        <i className="ri-book-open-line"></i>
                            {lesson} LESSONS
                        </p>
                        <p className="students d-flex align-iems-center gap-1">
                        <i className="ri-user-line"></i>
                           {students}k
                        </p>
                       </div>

                       <div className='d-flex justify-content-between align-items-center'>
                        <p className="ratting d-flex align-iems-center gap-1">
                        <i className="ri-star-line"></i>
                            {ratting}K
                        </p>
                        <p className="enroll d-flex align-iems-center gap-1">
                        <a href="">Enroll Now</a>
                        </p>
                       </div>
                    </div>
                </div>
  )
}

export default CoursesCard;