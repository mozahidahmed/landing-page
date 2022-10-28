import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faUserGroup} from '@fortawesome/free-solid-svg-icons'

const PostSection = () => {
    return (
        <div className='container-lg mt-5'>
            <div className='d-flex justify-content-between'>
                <div className='d-lg-flex mt-2 '>
                    <p className='fw-bold pe-3'>All Posts(32)</p>
                    <div className='d-lg-flex hidden-xs d-none d-sm-block'>
                        <p className='pe-3'>Article</p>
                        <p className='pe-3'>Event</p>
                        <p className='pe-3'>Education</p>
                        <p >Job</p>
                    </div>
                </div>

                <div>
                    <div className='hidden-xs d-none d-sm-block'>
                        <button type='button' className='btn btn-light fw-bold me-3'>Write a Post <FontAwesomeIcon className='px-2' icon={faCaretDown}/></button>
                        <button type='button' className='btn btn-primary fw-bold'><FontAwesomeIcon className='px-2' icon={faUserGroup}/> Join Group </button>
                    </div>
                    <button type='button' className='btn btn-light fw-bold hidden-lg d-lg-none text-gray'>Filter : All <FontAwesomeIcon className='px-2' icon={faCaretDown}/></button>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default PostSection;