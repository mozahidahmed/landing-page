import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faShareNodes, faLocationDot, faPen, faCircleExclamation, faCalendarDay, faBriefcase, faEllipsis } from '@fortawesome/free-solid-svg-icons'

const AllPosts = () => {
    return (
        <div className='container-lg'>
            <div className='row'>
                <div className='col w-sm-100'>
                    <Card className='card-width' style={{ marginBottom: 16 }}>
                        <Card.Img variant="top" src="https://i.ibb.co/513GDFV/Rectangle-5.png" />
                        <Card.Body>
                            <p className='fw-bold'>✍️ Article</p>
                            <div className='d-flex'>
                                <Card.Title className='fw-bold'>What if famous brands had regular fonts? Meet RegulaBrands!</Card.Title>
                                <FontAwesomeIcon className='ps-5' icon={faEllipsis} />
                            </div>
                            <Card.Text>
                                I've worked in UX for the better part of a decade. From now on, I plan to rei…
                            </Card.Text>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex align-items-center'>
                                    <img className='mb-3' src="https://i.ibb.co/NrzqSWc/Rectangle-3.png" alt="" />
                                    <p className='fw-bold ps-3 pt-2'>Sarthak Kamra <p className='mt-lg-2 pe-4 hidden-lg d-lg-none d-sm-block fw-normal'><FontAwesomeIcon className='pe-1' icon={faEye} />1.4k views</p></p>
                                </div>
                                <div className='d-flex'>
                                    <p className='mt-lg-2 pe-4 hidden-xs d-none d-sm-block'><FontAwesomeIcon className='pe-1' icon={faEye} />1.4k views</p>
                                    <button style={{ height: 42, width: 36 }} className='btn btn-light'><FontAwesomeIcon icon={faShareNodes} /></button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card className='card-width' style={{ marginBottom: 16 }}>
                        <Card.Img variant="top" src="https://i.ibb.co/fFzQTYX/Rectangle-5-1.png" />
                        <Card.Body>
                            <p className='fw-bold'>🔬️ Education</p>
                            <div className="d-flex justify-content-between">
                                <Card.Title className='fw-bold'>Tax Benefits for Investment under National Pension Scheme launched by Government</Card.Title>
                                <FontAwesomeIcon className='ps-5' icon={faEllipsis} />
                            </div>
                            <Card.Text>
                                I've worked in UX for the better part of a decade. From now on, I plan to rei…
                            </Card.Text>

                            <div className='d-flex justify-content-between'>
                                <div className='d-flex align-items-center'>
                                    <img className='mb-3' src="https://i.ibb.co/ZS4Qvd9/Rectangle-3-1.png" alt="" />
                                    <p className='fw-bold ps-3 pt-2'>Sarah West <p className='mt-lg-2 pe-4 hidden-lg d-lg-none d-sm-block fw-normal'><FontAwesomeIcon className='pe-1' icon={faEye} />1.4k views</p></p>
                                </div>
                                <div className='d-flex'>
                                    <p className='mt-lg-2 pe-4 hidden-xs d-none d-sm-block'><FontAwesomeIcon className='pe-1' icon={faEye} />1.4k views</p>
                                    <button style={{ height: 42, width: 36 }} className='btn btn-light'><FontAwesomeIcon icon={faShareNodes} /></button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card className='card-width' style={{ marginBottom: 16 }}>
                        <Card.Img variant="top" src="https://i.ibb.co/BnHbVV7/Rectangle-5-2.png" />
                        <Card.Body>
                            <p className='fw-bold'>🗓️ Meetup</p>
                            <div className="d-flex justify-content-between">
                                <Card.Title className='fw-bold'>Finance & Investment Elite Social Mixer @Lujiazui</Card.Title>
                                <FontAwesomeIcon className='ps-5' icon={faEllipsis} />
                            </div>
                            <div className='d-flex'>
                                <p className='pe-5'><FontAwesomeIcon className='px-2' icon={faCalendarDay} /> Fri, 12 Oct, 2018</p>
                                <p><FontAwesomeIcon className='px-2' icon={faLocationDot} />Ahmedabad, India</p>
                            </div>

                            <div>
                                <button style={{ color: '#E56135' }} className='btn btn-light w-100 mt-3 mb-4'>Visit Website</button>
                            </div>

                            <div className='d-flex justify-content-between'>
                                <div className='d-flex align-items-center'>
                                    <img className='mb-3' src="https://i.ibb.co/hf1n86R/Rectangle-3-2.png" alt="" />
                                    <p className='fw-bold ps-3 pt-2'>Ronal Jones <p className='mt-lg-2 pe-4 hidden-lg d-lg-none d-sm-block fw-normal'><FontAwesomeIcon className='pe-1' icon={faEye} />1.4k views</p></p>
                                </div>
                                <div className='d-flex'>
                                    <p className='mt-lg-2 pe-4 hidden-xs d-none d-sm-block'><FontAwesomeIcon className='pe-1' icon={faEye} />1.4k views</p>
                                    <button style={{ height: 42, width: 36 }} className='btn btn-light'><FontAwesomeIcon icon={faShareNodes} /></button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card className='card-width' style={{ marginBottom: 16 }}>
                        <Card.Body>
                            <p className='fw-bold'>💼️ Job</p>
                            <div className="d-flex justify-content-between">
                                <Card.Title className='fw-bold'>Software Developer</Card.Title>
                                <FontAwesomeIcon className='ps-5' icon={faEllipsis} />
                            </div>
                            <div className='d-flex'>
                                <p className='pe-5'><FontAwesomeIcon className='px-1' icon={faBriefcase} /> Innovaccer Analytics Private Ltd.</p>
                                <p><FontAwesomeIcon className='px-1' icon={faLocationDot} />Noida, India</p>
                            </div>

                            <div>
                                <button style={{ color: '#02B875' }} className='btn btn-light w-100 mt-3 mb-4 fw-bold'>Apply on Timesjobs</button>
                            </div>

                            <div className='d-flex justify-content-between'>
                                <div className='d-flex align-items-center'>
                                    <img className='mb-3' src="https://i.ibb.co/xskWZqR/Rectangle-3-3.png" alt="" />
                                    <p className='fw-bold ps-3 pt-2'>Joseph Gray <p className='mt-lg-2 pe-4 hidden-lg d-lg-none d-sm-block fw-normal'><FontAwesomeIcon className='pe-1' icon={faEye} />1.4k views</p></p>
                                </div>
                                <div className='d-flex'>
                                    <p className='mt-lg-2 pe-4 hidden-xs d-none d-sm-block'><FontAwesomeIcon className='pe-1' icon={faEye} />1.4k views</p>
                                    <button style={{ height: 42, width: 36 }} className='btn btn-light'><FontAwesomeIcon icon={faShareNodes} /></button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col hidden-xs d-none d-sm-block'>
                    <div className='w-50 mx-auto mt-5'>
                        <div className="d-flex justify-content-between">
                            <p><FontAwesomeIcon icon={faLocationDot} /> Noida, India</p>
                            <FontAwesomeIcon className='px-2 pt-2' icon={faPen} />
                        </div>
                        <hr/>
                        <div className="d-flex">
                            <FontAwesomeIcon className='pe-2 mt-1' icon={faCircleExclamation} />
                            <p style={{ fontSize: 13, justifyContent: 'space-between' }}> Your location will help us serve better and extend a personalised experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllPosts;