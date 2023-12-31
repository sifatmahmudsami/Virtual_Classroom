import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createUser } from '../redux/user/userSlice';
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {

    const dispatch = useDispatch()

    const handleForm = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmpassword = form.confirmpassword.value;
        console.log(email, password, confirmpassword)


        if (password === confirmpassword) {
            dispatch(createUser({
                email: email,
                password: password
            }))

            toast.success('User Created.');
            form.reset()

        } else {
            toast.error('Please Match your password.Make sure your password is more than 6 character.');

        }



    }

    return (
        <div>


            <div>

                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <form onSubmit={handleForm}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="text" name='password' placeholder="password" className="input input-bordered" />

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Confirm Password</span>
                                        </label>
                                        <input type="text" name='confirmpassword' placeholder="password" className="input input-bordered" />
                                        <label className="label">
                                            <p>Allready have an acoount ? <Link className='underline' to='/login'>Login Now!</Link></p>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button type='submit' className="btn btn-primary">Signup</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Toaster />

        </div>
    );
};

export default Signup;