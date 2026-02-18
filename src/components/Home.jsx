import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const loadedCoffees = useLoaderData();
  // console.log(loadedCoffees);

  const handleDeleteCoffee = () => {
    console.log("delete");
  };
  return (
    <div className="w-11/12 mx-auto my-12">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {loadedCoffees.map((item) => (
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
