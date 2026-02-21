import Swal from "sweetalert2";

const CreateCoffee = () => {
  const handleCreateCoffeeSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const quantity = e.target.quantity.value;
    const supplier = e.target.supplier.value;
    const taste = e.target.taste.value;
    const category = e.target.category.value;
    const details = e.target.details.value;
    const photo = e.target.photo.value;
    const createCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    // console.log(createCoffee);

    const response = await fetch(
      `https://coffee-store-backend-rho.vercel.app/createCoffees`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(createCoffee),
      },
    );
    const data = await response.json();
    // console.log(data);
    if (data.insertedId) {
      Swal.fire("create coffee successfully");
    }
  };

  return (
    <div>
      <section className="w-11/12 mx-auto">
        <form onSubmit={handleCreateCoffeeSubmit}>
          {/* 1st */}
          <div className="flex items-center justify-between gap-6 my-4">
            <fieldset className="fieldset w-1/2">
              <legend className="fieldset-legend">Coffee Name</legend>
              <input
                name="name"
                type="text"
                className="input w-full"
                placeholder="Coffee Name"
              />
            </fieldset>
            <fieldset className="fieldset w-1/2">
              <legend className="fieldset-legend">Availbale Quantity</legend>
              <input
                name="quantity"
                type="text"
                className="input w-full"
                placeholder="Availbale Quantity"
              />
            </fieldset>
          </div>
          {/* 2nd */}
          <div className="flex items-center justify-between gap-6 mb-4">
            <fieldset className="fieldset w-1/2">
              <legend className="fieldset-legend">Supplier</legend>
              <input
                name="supplier"
                type="text"
                className="input w-full"
                placeholder="Supplier"
              />
            </fieldset>
            <fieldset className="fieldset w-1/2">
              <legend className="fieldset-legend">Taste</legend>
              <input
                name="taste"
                type="text"
                className="input w-full"
                placeholder="Taste"
              />
            </fieldset>
          </div>
          {/* 3rd */}
          <div className="flex items-center justify-between gap-6 mb-4">
            <fieldset className="fieldset w-1/2">
              <legend className="fieldset-legend">Category</legend>
              <input
                name="category"
                type="text"
                className="input w-full"
                placeholder="Category"
              />
            </fieldset>
            <fieldset className="fieldset w-1/2">
              <legend className="fieldset-legend">Details</legend>
              <input
                name="details"
                type="text"
                className="input w-full"
                placeholder="Details"
              />
            </fieldset>
          </div>
          {/* 4th */}
          <div className="mb-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Photo Url</legend>
              <input
                name="photo"
                type="text"
                className="input w-full"
                placeholder="Photo Url"
              />
            </fieldset>
          </div>
          {/* btn */}
          <div>
            <button className="btn btn-success w-full">Create Coffee</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreateCoffee;
