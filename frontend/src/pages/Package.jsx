import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { CartContext } from '../context/CartContext';

const packages = {
    "the-kesugi-ridge-trail": {
        id: "kesugi",
        name: "The Kesugi Ridge Trail",
        price: 1299,
        duration: "3-4 days",
        location: "Alaska, USA",
        description: "Experience the breathtaking beauty of Alaska's wilderness on this multi-day ridge hike with stunning views of Denali.",
        image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "alps-adventure": {
        id: "alps",
        name: "Alps Adventure",
        price: 2499,
        duration: "7-10 days",
        location: "Europe - France, Italy, Switzerland",
        description: "Explore the majestic Alps across three countries with experienced guides and comfortable accommodations.",
        image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "patagonia-wilderness": {
        id: "patagonia",
        name: "Patagonia Wilderness",
        price: 3799,
        duration: "14 days",
        location: "Chile & Argentina",
        description: "Journey through the stunning landscapes of Patagonia, from Torres del Paine to Fitz Roy massif.",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
};

const Package = () => {
    const { addToCart } = useContext(CartContext);
    const { packageName } = useParams();
    const packageDetails = packages[packageName.toLowerCase().replace(/ /g, "-")];

    if (!packageDetails) {
        return <Layout><div>Package not found</div></Layout>;
    }

    const { id, name, price, duration, location, description, image } = packageDetails;

    return (
        <Layout>
            <section className="package-details">
                <div className="container">
                    <div className="package-card">
                        <div className="package-img" style={{ backgroundImage: `url('${image}')` }}></div>
                        <div className="package-content">
                            <h3>{name}</h3>
                            <div className="package-meta">
                                <span><i className="far fa-clock"></i> {duration}</span>
                                <span><i className="fas fa-map-marker-alt"></i> {location}</span>
                            </div>
                            <p>{description}</p>
                            <div className="package-price">${price}</div>
                            <button className="btn add-to-cart-btn" onClick={() => addToCart(id, name, price)}>Book Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Package;
