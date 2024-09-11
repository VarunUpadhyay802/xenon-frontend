import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Signup = () => {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ name: '', email: '', password: '', cpassword: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        
        setLoading(true); // Show loader

        try {
            const response = await fetch(`https://xenon-backend-ehaj.onrender.com/api/auth/createuser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });
            const json = await response.json();
            if (json.success) {
                // Save jwt token
                localStorage.setItem('token', json.token);
                alert('Signup successful!');
                navigate('/');
            } else {
                alert('Invalid credentials');
            }
        } catch (error) {
            alert('An error occurred');
        } finally {
            setLoading(false); // Hide loader
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="h-screen flex flex-col md:flex-row">
                <div className="relative overflow-hidden flex-1 bg-gradient-to-tr from-green-200 to-green-800 justify-center items-center hidden md:flex">
                    <div className="text-center text-white p-8">
                        <h1 className="text-4xl font-bold">Your Perfect Stay Awaits</h1>
                        <p className="mt-2">Find your ideal vacation home with ease.</p>
                        <button type="button" className="mt-4 bg-white text-green-800 py-2 px-6 rounded-full font-bold">Explore More</button>
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-center bg-white">
                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                        <h1 className="text-gray-800 text-2xl font-bold mb-4">Create an Account</h1>
                        <p className="text-sm text-gray-600 mb-6">Sign up to start your journey</p>
                        <div className="flex items-center border-2 py-2 px-3 rounded-full mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Full Name"
                                className="pl-2 outline-none border-none w-full"
                                onChange={onChange}
                            />
                        </div>
                        <div className="flex items-center border-2 py-2 px-3 rounded-full mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                className="pl-2 outline-none border-none w-full"
                                onChange={onChange}
                            />
                        </div>
                        <div className="flex items-center border-2 py-2 px-3 rounded-full mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                className="pl-2 outline-none border-none w-full"
                                onChange={onChange}
                                minLength={5}
                            />
                        </div>
                        <div className="flex items-center border-2 py-2 px-3 rounded-full mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            <input
                                type="password"
                                id="cpassword"
                                name="cpassword"
                                placeholder="Confirm Password"
                                className="pl-2 outline-none border-none w-full"
                                onChange={onChange}
                                minLength={5}
                            />
                        </div>
                        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-full font-semibold mb-2">
                            {loading ? <ClipLoader color="#fff" css={override} size={30} /> : 'Signup'}
                        </button>
                        <span className="text-sm">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></span>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;
