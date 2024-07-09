import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../api/products";
import { CartContext } from "../../components/CartContext";
import { Link } from "react-router-dom";
import renderStarRating from "../../components/StarRating/index";
import { BiChevronRight } from "react-icons/bi";
import { AiOutlineShopping, AiOutlineEye } from "react-icons/ai";

import "./productsinglepage.css";

const ProductDetailPage = () => {
  const { addToCart } = useContext(CartContext);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const data = await fetchProducts();
      const foundProduct = data.find((p) => p.id === Number(productId));
      setProduct(foundProduct);

      // Find and set related products with the same category
      const related = data.filter(
        (p) =>
          p.category === foundProduct.category && p.id !== Number(productId)
      );
      setRelatedProducts(related.slice(0, 4)); // Limit to 4 related products
    };
    getProduct();
  }, [productId]);

  if (!product) {
    return (
      <div className="loading-container">
        <h1>Loading....</h1>
      </div>
    );
  }
  const handleAddToCart = (product) => {
    addToCart(product);
  };
  return (
    <div className="max-width">
      <section className="product-container">
        <div className="details-child1">
          <h2 className=" flex">
            <Link to="/">Home</Link> <BiChevronRight className="heading-icon" />{" "}
            {product.category}
          </h2>
        </div>
        <div className="details-child2">
          <div className="details-Image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="details-content">
            <span>{product.category}</span>
            <h2>{product.title}</h2>
            <p className="price">Price: ${product.price.toFixed(2)}</p>
            <p className="description">{product.description}</p>
            <div className="rating flex">
              <p>
                Rating:
                <span className="stars">
                  {renderStarRating(product.rating.rate)}
                </span>
              </p>
              & <p>{product.rating.count} Reviews</p>
            </div>

            <button
              onClick={() => handleAddToCart(product)}
              className="addCart-Btn"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      <section className="related-products">
        <h2 className="relatedProduct-heading">Related Products</h2>
        <div className="related-product-list">
          {relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="related-product">
              <div className="relateProduct-image">
                <img src={relatedProduct.image} alt={relatedProduct.title} />
              </div>
              <div className="relatedproduct-content">
                <div>
                  <h3 className="title">
                    {relatedProduct.title.slice(0, 20)}...
                  </h3>
                  <p className="price">${relatedProduct.price.toFixed(2)}</p>
                </div>
                <div className="icons flex">
                  <Link to="#" onClick={() => handleAddToCart(relatedProduct)}>
                    <AiOutlineShopping className="icon" />
                  </Link>
                  <Link to={`/products/${relatedProduct.id}`}>
                    <AiOutlineEye className="icon" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
