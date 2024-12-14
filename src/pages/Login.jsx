import React, {useState, useEffect} from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Login() {
    const usersData = localStorage.getItem('usersData')? JSON.parse(localStorage.getItem('usersData')): [];
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
        setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })
    const handelChange = (e) => {
        const{name, value} = e.target;
        setLoginData(prevState => ({
            ...prevState, [name]: value.trim()
        }));
    }
    const handelFormSave = (e) => {
        e.preventDefault();
        const findUser = usersData.find(user => user.email === loginData.email);
        if (findUser) {
            if (findUser.password === loginData.password) {
                toast.success(`Welcom ${findUser.fullName}`);
                setTimeout(() => {
                    window.location.assign("/");
                }, 250);
                setLoginData({
                    email: '',
                    password: ''
                })
            } else {
                toast.error('Email or Password is incorrect');
            }
        } else {
            toast.error('Email or Password is incorrect');
        }
    }
    return (
        <div className="container-fluid">
            <h2 className="text-center my-2">Login</h2>
            <hr className="mx-5"></hr>
            <form action="/action_page.php" className={`${width>=1200?"w-25":width>=992?"w-50":"w-100"} m-auto`} >
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" name="email"
                        onChange={handelChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">Password</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="password"
                    onChange={handelChange} />
                </div>
                <div className="form-check mb-3">
                    <p>New Here? <a href="/register" className="text-info">Register</a></p>
                </div>
                <button type="" className="btn btn-secondary d-block mx-auto" onClick={handelFormSave}>Login</button>
            </form>
            <Toaster position="top-center"  />
        </div>
    )
}
