import React, {useState, useEffect} from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Register() {
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
    const [userData, setUserData] = useState({
        fullName: '',
        email: '',
        password: ''
    })
    const handelChange = (e) => {
        const{name, value} = e.target;
        setUserData(prevState => ({
            ...prevState, [name]: value
        }));
    }
    const handelFormSave = (e) => {
        e.preventDefault();
        if (userData.fullName.trim() && userData.email.trim() && userData.password.trim()) {
            const findUser = usersData.find(user => user.email == userData.email);
            if (!findUser) {
                usersData.push(userData);
                localStorage.setItem('usersData', JSON.stringify(usersData));
                toast.success('Data registered successfully');
                setUserData({
                    fullName: '',
                    email: '',
                    password: ''
                })
                setTimeout(() => {
                    window.location.assign("/login");
                }, 250);
            } else {
                toast.error('This Emial registered befor');
            }
        } else {
            toast.error('You must fill data in all fields');
        }
    }
    return (
        <div className="container-fluid">
            <h2 className="text-center my-2">Register</h2>
            <hr className="mx-5"></hr>
            <form action="/action_page.php" className={`${width>=1200?"w-25":width>=992?"w-50":"w-100"} m-auto`} >
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Your Name" name="fullName"
                        required onChange={handelChange} />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" name="email"
                        required onChange={handelChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">Password</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="password"
                    required onChange={handelChange} />
                </div>
                <div className="form-check mb-3">
                    <p>Already has an account? <a href="/login" className="text-info">Login</a></p>
                </div>
                <button type="" className="btn btn-secondary d-block mx-auto" onClick={handelFormSave}>Register</button>
            </form>
            <Toaster position="top-center"  />
        </div>
    )
}

