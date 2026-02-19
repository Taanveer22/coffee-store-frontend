import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const loadedOneCoffee = useLoaderData();
  // console.log(loadedOneCoffee);

  const handleUpdateCoffeeSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const quantity = e.target.quantity.value;
    const supplier = e.target.supplier.value;
    const taste = e.target.taste.value;
    const category = e.target.category.value;
    const details = e.target.details.value;
    const photo = e.target.photo.value;
    const updateCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    // console.log(updateCoffee);

    const res = await fetch(
      `http://localhost:5000/updateCoffees/${loadedOneCoffee?._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateCoffee),
      },
    );
    const data = await res.json();
    // console.log(data);
    if (data.modifiedCount > 0) {
      Swal.fire("Coffee updated successfully");
    }
  };

  return (
    <div>
      <section className="w-11/12 mx-auto">
        <form onSubmit={handleUpdateCoffeeSubmit}>
          {/* 1st */}
          <div className="flex items-center justify-between gap-6 my-4">
            <fieldset className="fieldset w-1/2">
              <legend className="fieldset-legend">Coffee Name</legend>
              <input
                defaultValue={loadedOneCoffee?.name}
                name="name"
                type="text"
                className="input w-full"
                placeholder="Coffee Name"
              />
            </fieldset>
            <fieldset className="fieldset w-1/2">
              <legend className="fieldset-legend">Availbale Quantity</legend>
              <input
                defaultValue={loadedOneCoffee?.quantity}
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
                defaultValue={loadedOneCoffee?.supplier}
                name="supplier"
                type="text"
                className="input w-full"
                placeholder="Supplier"
              />
            </fieldset>
            <fieldset className="fieldset w-1/2">
              <legend className="fieldset-legend">Taste</legend>
              <input
                defaultValue={loadedOneCoffee?.taste}
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
                defaultValue={loadedOneCoffee?.category}
                name="category"
                type="text"
                className="input w-full"
                placeholder="Category"
              />
            </fieldset>
            <fieldset className="fieldset w-1/2">
              <legend className="fieldset-legend">Details</legend>
              <input
                defaultValue={loadedOneCoffee?.details}
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
                defaultValue={loadedOneCoffee?.photo}
                name="photo"
                type="text"
                className="input w-full"
                placeholder="Photo Url"
              />
            </fieldset>
          </div>
          {/* btn */}
          <div>
            <button className="btn btn-info w-full">Update Coffee</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateCoffee;
