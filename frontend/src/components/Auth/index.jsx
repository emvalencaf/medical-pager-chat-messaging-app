// hooks
import { useState } from 'react';

// cookies
import Cookies from 'universal-cookie';

// assets
import SignInIcon from '../../assets/signup.jpg';

// utils
import axios from 'axios';

const cookies = new Cookies();

const Auth = () => {
    // auth states
    const [isSignUp, setSignUp] = useState(false);

    // fields states
    const [form, setForm] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        avatarURL: '',
    });

    // handle change
    const handleChange = (event) => {
        // change up a selected input
        setForm({...form, [event.target.name]: event.target.value});
    };

    // handle submit
    const handleSubmit = async (event) => {
        event.preventDefault();

        const URL = 'http://localhost:5000/api/auth';

        const dataForm = {
            fullName: form.fullName,
            username: form.username,
            password: form.password,
            phoneNumber: form.phoneNumber,
            avatarURL: form.avatarURL,
        };

        const { data } = await axios.post(`${URL}/${isSignUp ? 'sign-up' : 'sign-in'}`, dataForm);
        console.log(data);
        const {
            token,
            userId,
            hashedPassword,
            fullName,
        } = data;

        cookies.set('token', token);
        cookies.set('username', form.username);
        cookies.set('fullName', fullName);
        cookies.set('userId', userId);

        if (isSignUp) {
            cookies.set("phoneNumber", form.phoneNumber);
            cookies.set('avatarURL', form.avatarURL);
            cookies.set('hashedPassword', hashedPassword);
        }

        window.location.reload();
    };

    // switch mode
    const switchMode = () => {
        setSignUp((previewIsSigUp) => !previewIsSigUp);
    }

    return (
        <div className="auth__form-container">
            <div className="auth__form-container_fields">
                <div className="auth__form-container_fields-content">
                    <p>
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </p>
                    <form onSubmit={handleSubmit}>
                        {isSignUp && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="fullName">
                                    Full Name
                                </label>
                                <input type="text" name="fullName" placeholder='full name' onChange={handleChange} required />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="username">
                                Username
                            </label>
                            <input type="text" name="username" placeholder='username' onChange={handleChange} required />
                        </div>
                        {isSignUp && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="phoneNumber">
                                    Phone Number
                                </label>
                                <input type="tel" name="phoneNumber" placeholder='phone number' onChange={handleChange} required />
                            </div>
                        )}
                        {isSignUp && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="avatarURL">
                                    Avatar URL
                                </label>
                                <input type="url" name="avatarURL" placeholder='avatar url' onChange={handleChange} required />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="password">
                                Password
                            </label>
                            <input type="password" name="password" placeholder='password' onChange={handleChange} required />
                        </div>
                        {isSignUp && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="confirmPassword">
                                    Confirm Password
                                </label>
                                <input type="password" name="confirmPassword" placeholder='confirm password' onChange={handleChange} required />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_button">
                            <button type="submit">
                                {isSignUp ? 'Sign Up': 'Sign In'}
                            </button>
                        </div>
                    </form>
                    <div className="auth__form-container_fields-account">
                        <p>
                            {isSignUp ? 'Already have an account?': "Don't have an account?" }
                        </p>
                        <span onClick={switchMode}>
                            {isSignUp ? 'sign in' : 'sign up'}
                        </span>
                    </div>
                </div>
            </div>
            <div className="auth__form-container_image">
                <img
                    src={SignInIcon}
                    alt="sign in"
                />
            </div>
        </div>
    );
};

export default Auth;