import './App.css';
import { FaAngleDown } from "react-icons/fa6";

function MainUl(main_u) {
    return (
        <>
            {/* <div className='d-flex heder'>
                <div>
                    <img src={require('./creative-logo-blue.png')} alt="" />
                </div>

                <nav>
                    <ul className='main_menu d-flex'>
                        <li><a href="$">Home</a></li>
                        <li><a href="$">Courses</a></li>
                        <li><a href="$">Activities</a>
                            {
                                main_u.send_activity.map((val) => {
                                    return (
                                        <ul className='peta_menu'>
                                            <li><a href="$">{val}</a></li>
                                        </ul>
                                    )
                                })
                            }
                        </li>
                        <li><a href="$">Blog</a></li>
                        <li><a href="$">Know us</a>
                            {
                                <ul className='peta_menu'>
                                    <li><a href="$">{main_u.send_know.about}</a></li>
                                    <li><a href="$">{main_u.send_know.about_succes}</a></li>
                                    <li><a href="$">{main_u.send_know.about_placement}</a></li>
                                </ul>
                            }
                        </li>
                        <li><a href="$">Get in touch</a></li>
                        <li><a href="$">student_zone</a>
                            {
                                main_u.send.map((val) => {
                                    return (
                                        <ul className='peta_menu'>
                                            <li><a href="$">{val}</a></li>
                                        </ul>
                                    )
                                })
                            }
                        </li>
                    </ul>
                </nav>

            </div> */}


            <header>
                <div className="container">
                    <div className="head">

                        <div className="logo">
                            <a href="#">
                                <img src={require('./creative-logo-blue.png')} alt="logo image" />
                            </a>
                        </div>

                        <nav>
                            <ul className="main_menu">
                                <li><a href='$'>Home</a></li>

                                <li><a href="$">Courses <FaAngleDown className='icon'></FaAngleDown></a>

                                    <div className='peta_menu'>
                                        <div className='p-4 row'>
                                            {
                                                main_u.send_course.map((val) =>
                                                    <div className='col-3'>
                                                        <h4 className='mb-2'>{val.Course}</h4>
                                                        <ul>
                                                            {val.CourseName.map((x) => <li> <a href="">{x}</a></li>)}
                                                        </ul>
                                                    </div>)
                                            }
                                        </div>
                                    </div>

                                </li>



                                <li><a href="#">Activities<FaAngleDown className='icon'></FaAngleDown></a>
                                    <ul className="sub_menu">
                                        {
                                            main_u.send_activity.map((val) => {
                                                return (
                                                    <li><a href="$">{val}</a></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                                <li><a href="$">Blog</a></li>
                                <li><a href="$">Know us <FaAngleDown className='icon'></FaAngleDown></a>
                                    {
                                        <ul className="sub_menu">
                                            <li><a href="$">{main_u.send_know.about}</a></li>
                                            <li><a href="$">{main_u.send_know.about_succes}</a></li>
                                            <li><a href="$">{main_u.send_know.about_placement}</a></li>
                                        </ul>
                                    }
                                </li>
                                <li><a href="$">Get in touch</a></li>
                                <li><a href="$">student_zone <FaAngleDown className='icon'></FaAngleDown></a>
                                    <ul className="sub_menu">
                                        {
                                            main_u.send.map((val) => {
                                                return (
                                                    <li><a href='$'>{val}</a></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </div>
            </header>
        </>
    );
}

export default MainUl;
