import React, {useEffect, useState} from 'react';
import MetaData from "../layouts/MetaData";

import {useAlert} from "react-alert";
import {useDispatch, useSelector} from "react-redux"
import {resetPassword, clearErrors, forgotPassword} from "../../actions/userActions";

const NewPassword = ({history, match}) => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const alert = useAlert();
    const dispatch = useDispatch();

    const {isAuthenticated,} = useSelector(state => state.auth);
    const {error, success, loading} = useSelector(state => state.forgetPassword);

    useEffect(() => {

        if (isAuthenticated) {
            history.push('/')
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (success) {
            alert.success('Password updated successfully')
            history.push('/login')
        }


    }, [dispatch, alert, error, success, history, loading, isAuthenticated])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('password', password);
        formData.set('confirmPassword', confirmPassword);

        dispatch(resetPassword(match.params.token, formData))
    }

    return (
        <>
            <MetaData title={'reset Password'}/>
            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHandler}>
                        <h1 className="mb-3">New Password</h1>

                        <div className="form-group">
                            <label htmlFor="password_field">Password</label>
                            <input
                                type="password"
                                id="password_field"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirm_password_field">Confirm Password</label>
                            <input
                                type="password"
                                id="confirm_password_field"
                                className="form-control"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>

                        <button
                            id="new_password_button"
                            type="submit"
                            disabled={!!loading}
                            className="btn btn-block py-3">
                            Set Password
                        </button>

                    </form>
                </div>
            </div>

        </>
    )
};

export default NewPassword;