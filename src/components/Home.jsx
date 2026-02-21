import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import CoffeeCard from "./CoffeeCard";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthContextProvider";

const Home = () => {
  const loadedCoffees = useLoaderData();
  // console.log(loadedCoffees);
  const [showCards, setShowCards] = useState(loadedCoffees);
  // console.log(showCards);
  const { user, signOutUser } = useContext(AuthContext);
  // console.log(user);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire("sign out successful");
      })
      .catch(() => {
        Swal.fire("sign out failed");
      });
  };

  const handleDeleteCoffee = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      // async is inside then block
      if (result.isConfirmed) {
        const res = await fetch(`http://localhost:5000/deleteCoffees/${id}`, {
          method: "DELETE",
        });
        const data = await res.json();
        // console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your coffee has been deleted.",
            icon: "success",
          });
          // ✅ Only update UI if the user confirmed AND DB deleted it
          const remainingCards = showCards.filter((card) => card._id !== id);
          setShowCards(remainingCards);
        }
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto my-12">
      <div className="flex justify-center items-center gap-6 mb-6">
        <p className="text-xl font-medium">
          Username : {user ? user.displayName : "No name found"}
        </p>
        <button onClick={handleSignOut} className="btn btn-warning">
          Sign out from here
        </button>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Make sure you are mapping 'showCards', NOT 'loadedCoffees' */}
        {showCards.map((item) => (
          <CoffeeCard
            item={item}
            key={item._id}
            handleDeleteCoffee={handleDeleteCoffee}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
