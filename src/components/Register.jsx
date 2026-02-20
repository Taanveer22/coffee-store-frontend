const Register = () => {

  const handleRegisterForm = (e) => {
    e.preventDefault();
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
