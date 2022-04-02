import * as Yup from "yup";
import { useFormik } from "formik";
import Geocode from "react-geocode";
import "./Signup.css";
import "./LoginPage.css";

Geocode.setApiKey("AIzaSyBkQwV1KPiWqgfQFD4OLYVxIw_DKiXo5NU");

const SignupConsumer = () => {
    const phoneRegExp = /^[6-9]\d{9}$/;
    const formik = useFormik({
        initialValues: {
          first_name: "",
          last_name:"",
          email: "",
          phone: "",
          address:"",
          password: "",
          cpassword: "",
        },
        validationSchema: Yup.object({
          first_name: Yup.string()
            .required("First name is required!"),
          last_name: Yup.string()
            .required("Last name is required!"),
          email: Yup.string().email("Invalid email!").required("Email is required!"),
          phone: Yup.string()
            .matches(phoneRegExp, "Phone number is not valid!")
            .required("Phone number is required!"),
          address: Yup.string()
            .required("Address is required!"),
          password: Yup.string().min(8, "Min 8 characters are required!")
          .required("Password is required!"),
          cpassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match!")
            .required("Confirm password is required!"),
        }),
        onSubmit: (values, { setSubmitting }) => {
          setSubmitting(false);
          Geocode.fromAddress(values.address).then(
            (response) => {
              const { lat, lng } = response.results[0].geometry.location;
              values.latitude = Number(lat);
              values.longitude = Number(lng);
              const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({consumer: values})
            };
              fetch('http://2a04-14-99-102-226.ngrok.io/consumers', requestOptions)
                  .then(response => response.json())
                  .then(data => console.log(data));
              },
          );
          formik.resetForm();
        },
      });

    return(
      <>
        <div className="form-container signup">
            <div className="heading">Signup</div>
            <form onSubmit={formik.handleSubmit} className="flex-container form">
              <div className="flex-container-row">
                <div className="flex-container input-container">
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" name="first_name" className="input" {...formik.getFieldProps("first_name")}/>
                    {formik.touched.first_name && formik.errors.first_name ? (
                        <p className="error">{formik.errors.first_name}</p>
                        ) : null}
                </div>
                <div className="flex-container input-container">
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" name="last_name"  className="input" {...formik.getFieldProps("last_name")}/>
                    {formik.touched.last_name && formik.errors.last_name ? (
                        <p className="error">{formik.errors.last_name}</p>
                        ) : null}
                </div>
              </div>
              <div className="flex-container-row">
                <div className="flex-container input-container">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email"  className="input" {...formik.getFieldProps("email")}/>
                    {formik.touched.email && formik.errors.email ? (
                        <p className="error">{formik.errors.email}</p>
                        ) : null}
                </div>
                <div className="flex-container input-container">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone"  className="input" {...formik.getFieldProps("phone")}/>
                    {formik.touched.phone && formik.errors.phone ? (
                        <p className="error">{formik.errors.phone}</p>
                        ) : null}
                </div>
                </div>
                
                <div className="flex-container input-container">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" className="input address" {...formik.getFieldProps("address")}/>
                    {formik.touched.address && formik.errors.address ? (
                        <p className="error">{formik.errors.address}</p>
                        ) : null}
                </div>
                
                <div className="flex-container-row">
                <div className="flex-container input-container">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"  className="input" {...formik.getFieldProps("password")}/>
                    {formik.touched.password && formik.errors.password ? (
                        <p className="error">{formik.errors.password}</p>
                        ) : null}
                </div>
                <div className="flex-container input-container">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input type="password" name="cpassword"  className="input" {...formik.getFieldProps("cpassword")}/>
                    {formik.touched.cpassword && formik.errors.cpassword ? (
                        <p className="error">{formik.errors.cpassword}</p>
                        ) : null}
                </div>
                </div>
                <button type="submit">Sign up</button>
            </form>
        </div>
      </>
    )

}
export default SignupConsumer;
