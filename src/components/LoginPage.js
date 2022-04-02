import { useFormik } from "formik";
import * as Yup from "yup";
import "./LoginPage.css"

const LoginPage = () => {
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
          console.log(values);
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({consumer: values})
        };
        fetch('http://2a04-14-99-102-226.ngrok.io/login', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
          formik.resetForm();
        },
        });
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