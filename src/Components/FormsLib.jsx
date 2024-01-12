import { useForm } from "react-hook-form";
import { useState } from "react";

function FormsLib() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setSub(true);
  };
  const [sub, setSub] = useState(false);

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        {sub && !Object.keys(errors).length && (
          <h2>Registration Successfull!</h2>
        )}
        <div className="form-group">
          <input
            {...register("firstName", {
              required: "FirstName is required",
              minLength: {
                value: 5,
                message: "Minimum length is 5 characters",
              },
              maxLength: {
                value: 20,
                message: "Maximum length is 20 characters",
              },
            })}
            placeholder="Enter your FirstName"
          />
          <p>
            {errors.firstName && (
              <span className="error-message">{errors.firstName.message}</span>
            )}
          </p>
        </div>

        <div className="form-group">
          <input
            {...register("lastName", {
              required: "LastName is required",
              minLength: {
                value: 5,
                message: "Minimum length is 5 characters",
              },
              maxLength: {
                value: 20,
                message: "Maximum length is 20 characters",
              },
            })}
            placeholder="Enter your LastName"
          />
          <p>
            {errors.lastName && (
              <span className="error-message">{errors.lastName.message}</span>
            )}
          </p>
        </div>

        <div className="form-group">
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                message: "Invalid email",
              },
            })}
            placeholder="Enter your Email"
          />
          <p>
            {errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}
          </p>
        </div>

        <div className="form-group">
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 4,
                message: "Minimum length is 4 characters",
              },
              maxLength: {
                value: 20,
                message: "Maximum length is 20 characters",
              },
            })}
            placeholder="Enter your Password"
            type="password"
          />
          <p>
            {errors.password && (
              <span className="error-message">{errors.password.message}</span>
            )}
          </p>
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormsLib;
