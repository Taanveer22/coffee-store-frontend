import { useContext } from "react";
import { AuthContext } from "../providers/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signin = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignInForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        navigate("/");
        // console.log(result.user);
        // console.log(result?.user?.metadata?.lastSignInTime);
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const updateUserInfo = { email, lastSignInTime };

        fetch(
          `https://coffee-store-backend-dcench5jp-taanveer22s-projects.vercel.app/updateUsers/${email}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updateUserInfo),
          },
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire("user data updated successfully");
            }
          });
      })
      .catch((error) => {
        Swal.fire(error.message);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h2 className="text-5xl font-bold">Sign In Now!</h2>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignInForm} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Sign In</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
