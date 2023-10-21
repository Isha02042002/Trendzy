import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
       
"TrendZy - Where Fashion Meets Expression. Our clothing line is a canvas of creativity, offering a diverse range of styles that cater to your unique personality. With quality fabrics, impeccable craftsmanship, and a commitment to staying on top of the latest trends, TrendZy is your go-to destination for dressing in style and making a statement. Discover the art of self-expression through our fashion, and let your wardrobe reflect your individuality with TrendZy."
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
