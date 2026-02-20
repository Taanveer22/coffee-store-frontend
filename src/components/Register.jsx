import { useContext } from "react";
import { AuthContext } from "../providers/AuthContextProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { registerUser, updateProfileOfUser } = useContext(AuthContext);

  const handleRegisterForm = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, photo, email, password);

    registerUser(email, password)
      .then((result) => {
        Swal.fire(result?.user?.displayName || "register done");
        const creationTime = result?.user?.metadata?.creationTime;
        const createUser = { email, name, photo, creationTime };
        //  console.log(result?.user?.metadata?.creationTime);
        updateProfileOfUser(name, photo)
          .then(() => {
            Swal.fire("user update done");
            fetch(`http://localhost:5000/users`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(createUser),
            })
              .then((res) => res.json())
              .then((data) => {
                // console.log("database data ", data);
                if (data.insertedId) {
                  Swal.fire("created user successfully");
                }
              });
          })
          .catch(() => {
            Swal.fire("user update failed");
          });
      })
      .catch((error) => {
        Swal.fire(error.message);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <form
          onSubmit={handleRegisterForm}
          className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
        >
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
              />

              <label className="label">Photo</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="photo"
              />

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

              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
