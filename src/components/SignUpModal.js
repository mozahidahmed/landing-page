import React from 'react';
import Modal from 'react-bootstrap/Modal';

const SignUpModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <div style={{ backgroundColor: '#EFFFF4', height: 50 }} className='rounded-top'>
                <p className='d-flex justify-content-center mt-2'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
            </div>
            <div className='row '>
                <div className='col m-4'>
                    <h3 className='fw-bold pb-3'>Create Account</h3>
                    <form className='mb-3'>
                        <div className='d-flex'>
                            <input style={{ width: 160 , background: '#F7F8FA'}} className="form-control rounded-0" type="text" placeholder="First Name" />
                            <input style={{ width: 160, background: '#F7F8FA' }} className="form-control rounded-0" type="text" placeholder="Last Name" />
                        </div>
                        <input style={{ width: 320, background: '#F7F8FA' }} className="form-control rounded-0" type="email" placeholder="Email" />
                        <input style={{ width: 320,background: '#F7F8FA' }} className="form-control rounded-0" type="password" placeholder="Password" />
                        <input style={{ width: 320,background: '#F7F8FA' }} className="form-control rounded-0" type="password" placeholder="Confirm Password" />
                    </form>

                    <button style={{ width: 300 }} className='btn btn-primary rounded-pill mb-4 fw-bold'>Create Account</button><br />
                    <button style={{ width: 300 }} className='border btn btn-light mb-2'><svg style={{width: 17, margin: 7}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>Sign up with Facebook</button><br />
                    <button style={{ width: 300 }} className='border btn btn-light'><svg style={{width: 17, margin: 7}}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>Sign up with Google</button>
                </div>
                <div className='col'>
                    <div className='mt-4'>
                        <button style={{ paddingLeft: 70 }} className='pe-5 btn btn-link text-black text-decoration-none' >Already have an account <span className='text-primary fw-bold'> Sign In</span></button>
                        <img className='hidden-xs d-none d-sm-block' src="https://i.ibb.co/5MZ5KQq/signin.png" alt="" />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default SignUpModal;