import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useForm } from "react-hook-form";
import GoogleLogin from "../Components/Login_register/GoogleLogin";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigator = useNavigate();

  const onSubmit = (data) => {
    const email = data.email;
    const role = data.role;
    const status = role === 'buyer'  ? 'approved' : 'pending'
    const wishlist = {}

    const userData = {
      email,
      role,
      status,
      wishlist,
    }
    createUser(data.email, data.password)
    .then( () => {
      axios.post("http://localhost:4000/users", userData).then((res) => {
        console.log(res.data);
        if (res.data.insertedId){
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Registration Successfully!",
            showConfirmButton: false, 
            timer: 1500
          }); 
          navigator("/"); 
        }
      })
    })
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true, minLength: 6 })}
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600">This field is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    Password must be at least 6 characters
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) => {
                      if (watch("password") != value) {
                        return "Passwords do not match";
                      }
                    },
                  })}
                />
                {errors.confirmPassword && (
                  <span className="text-red-600">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Role</span>
                </label>
                <select className="select select-bordered w-full max-w-xs"
                  {...register("role", { required: true })}>
                  <option value="buyer">Buyer</option>
                  <option value="seller">Seller</option>
                </select>
                {errors.role && (
                  <span className="text-red-600">you must select a role</span>
                )}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
              <p className="text-center my-4 text-sm fount-light">
                Already have an account?{" "}
                <Link
                  className="font-bold text-primary hover:underline"
                  to="/login"
                >
                  Login
                </Link>
              </p>
            </form>
            <div className="">
              <GoogleLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
