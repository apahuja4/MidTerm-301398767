import React from 'react';
import { useForm } from 'react-hook-form';
import './index.css';

const SignUpUser = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        alert(JSON.stringify(data, null, 2));
        console.log(data);
    };

    const password = watch("password");

    return (
        <div className="form-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        {...register("firstName", { required: true })}
                    />
                    {errors.firstName && <span className="error">First name is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        {...register("lastName", { required: true })}
                    />
                    {errors.lastName && <span className="error">Last name is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="userName">Username:</label>
                    <input
                        type="text"
                        id="userName"
                        {...register("userName", { required: true })}
                    />
                    {errors.userName && <span className="error">Username is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    />
                    {errors.email && <span className="error">Enter a valid email address</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        {...register("password", { required: true })}
                    />
                    {errors.password && <span className="error">Password is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        {...register("confirmPassword", {
                            required: true,
                            validate: value => value === password || "Passwords don't match"
                        })}
                    />
                    {errors.confirmPassword && <span className="error">{errors.confirmPassword.message}</span>}
                </div>
                <div className="form-buttons">
                    <button type="submit" className="submit-button">Submit</button>
                    <button type="button" className="cancel-button">Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default SignUpUser;
