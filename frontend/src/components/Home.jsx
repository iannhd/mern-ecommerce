import { addToCart } from "../features/cartSlice";
import { useGetAllProductsQuery } from "../features/productApi";

import { useSelector, useDispatch } from "react-redux";
const Home = () => {

    const {data, error, isLoading} = useGetAllProductsQuery()
    // const {items, status} = useSelector(state => state.products)
    const dispatch = useDispatch()
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }
    return ( 
        <div className="home-container">
            {isLoading ? <p>loading</p> : error ? <p>An Error Occured </p> : 
            <>
            <h2>New Arrivals</h2>
            <div className="products">
                {data?.map( product => (
                    <div className="product" key={product.id}>
                        <h3>{product.name}</h3>
                        <img src={product.image} alt={product.name}/>
                        <div className="details">
                            <span>{product.desc}</span>
                            <span className="price">
                                ${product.price}
                            </span>
                        </div>
                        <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
                    </div>
                ))}
            </div>
            </>}
        </div>
     );
}
 
export default Home;