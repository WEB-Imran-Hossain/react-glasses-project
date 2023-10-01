/* eslint-disable react/prop-types */
import SingleProductCard from "./SingleProductCard";


// common component for displaying products from multiple Components
const ShowProducts = ({ name, sunglasses }) => {
    return (
        <>
            <div className=" py-12">
                <h1 className="text-3xl font-bold text-center lg:text-left">{name}</h1>
                <br />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">

                    {
                        sunglasses.map((item) => <SingleProductCard
                            key={item.id}
                            product={item}
                            discount
                        />)
                    }
                </div>
            </div>

        </>
    );
};

export default ShowProducts;