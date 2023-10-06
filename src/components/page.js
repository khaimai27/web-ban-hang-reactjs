// Trong tệp NewsPage.js
import React from "react";
import NewsCard from "./card";
import productData from "./productData";

function NewsPage() {
  return (
    <div className="container">
      <div className="row">
        {productData.map((news, index) => (
          <div key={index} className="col-md-4">
            <NewsCard {...news} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsPage;
