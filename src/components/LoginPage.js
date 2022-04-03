import { useFormik } from "formik";
import * as Yup from "yup";
import "./LoginPage.css";
import {useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
// import { useSelector } from 'react-redux';



const LoginPage = () => {
    const [responseData, setResponseData] = useState(null);
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email!").required("Email is required!"),
            password: Yup.string().min(8,"Min 8 characters long!").required("Password is required!"),
        }),
        onSubmit:(values,{setSubmitting}) => {
            setSubmitting(false);
            formik.resetForm();
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({consumer:values})
            };
            fetch('https://8062-14-99-102-226.ngrok.io/login', requestOptions)
                .then(response => response.json())
                .then(
                    data => {
                        setResponseData(data);  
                    });
        },
        });
        let navigate = useNavigate();

        useEffect(() => {
            console.log('called useEffect');
            if(responseData && responseData.logged_in){
                console.log("SUCCESS")
                navigate('/dashboard/user')
            }   else {
                console.log("fail")
                navigate('/login')
            } 
        },[navigate, responseData])
        
    return (
        <div className="form-container">
            <div className="heading">Login</div>

            <form onSubmit={formik.handleSubmit} className="flex-container form">
                <div className="flex-container input-container">
                    <label htmlFor="email">Email</label>
                    <input type="email" autoFocus {...formik.getFieldProps("email")}/>
                    {formik.touched.email && formik.errors.email ? (
                    <p className="error">{formik.errors.email}</p>
                    ) : null}
                </div>
                <div className="flex-container input-container">
                    <label htmlFor="password">Password</label>
                    <input type="password" {...formik.getFieldProps("password")}/>
                    {formik.touched.password && formik.errors.password ? (
                    <p className="error">{formik.errors.password}</p>
                    ) : null}
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginPage;