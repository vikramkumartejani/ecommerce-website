import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../components/CartContext";
import { Link } from "react-router-dom";
import { AiOutlineShopping, AiOutlineEye } from "react-icons/ai";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import axios from "axios";
import "./shop.css";

const ShopPage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [totalProductsCount, setTotalProductsCount] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  //   Add to cart Button
  const { addToCart } = useContext(CartContext);

  // This useEffect for for fetchproducts and fetchvategories
  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  // fetchCategories
  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // fetchproducts
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // handle category click function
  const handleCategoryClick = (category) => {
    if (category === "All Products") {
      setSelectedCategory("");
    } else {
      setSelectedCategory(category);
    }
    setSearchQuery("");
  };

  //  hnadle search function
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setSelectedCategory("");
  };

  // handle filter products
  const filteredProducts = products.filter((product) => {
    // Filter by category if a category is selected
    if (selectedCategory) {
      return product.category === selectedCategory;
    }

    // Filter by search query if there's a search query
    if (searchQuery) {
      return product.title.toLowerCase().includes(searchQuery.toLowerCase());
    }

    return true; // If no category or search query, show all products
  });

  // handle clear filter function
  const handleClearFilters = () => {
    setSelectedCategory("");
    setSearchQuery("");
  };

  // Count a number of total products
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setTotalProductsCount(response.data.length);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Calculate total pages based on the length of filteredProducts and productsPerPage
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };
  return (
    <div className="shop-container max-width">
      {/* =============================================== Filter Container  */}
      <section className="shop-filter-container">
        <input
          type="search"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="SearchInput"
        />
        <div className="categories">
          <h2>Product Categories</h2>
          <ul>
            <li onClick={() => handleCategoryClick("All Products")}>
              All Products
            </li>
            {categories.map((category) => (
              <li key={category} onClick={() => handleCategoryClick(category)}>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <button onClick={handleClearFilters} className="filter-Btn">
          Clear Filters
        </button>
      </section>

      {/* =====================================================> Shop Products Container  */}
      <section className="shop-products-container">
        <section className="shop-products-child1 flex">
          <h2>All Products</h2>
          <span>Total Products: ({totalProductsCount})</span>
        </section>

        <section className="shop-products-child2">
          {filteredProducts
            .slice(
              (currentPage - 1) * productsPerPage,
              currentPage * productsPerPage
            )
            .map((product) => (
              <div key={product.id} className="shop-product">
                <p className="category">{product.category}</p>

                <div className="shopProduct-Image">
                  <img src={product.image} alt={product.title} />
                  <div className="shop-icon flex">
                    <Link to="#" onClick={() => handleAddToCart(product)}>
                      <AiOutlineShopping className="icon" />
                    </Link>
                    <Link to={`/products/${product.id}`}>
                      <AiOutlineEye className="icon" />
                    </Link>
                  </div>
                </div>

                <div className="shopProduct-content">
                  <h3 className="shopProduct-title">
                    {product.title.slice(0, 20)}...
                  </h3>
                  <p className="shopProduct-price">${product.price}</p>
                </div>
              </div>
            ))}
        </section>

        {/* ========================================= Pagination Button  */}
        <section className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            <BsChevronLeft className="paginationBtn-Icon" />
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <BsChevronRight className="paginationBtn-Icon" />
          </button>
        </section>
      </section>
    </div>
  );
};

export default ShopPage;
