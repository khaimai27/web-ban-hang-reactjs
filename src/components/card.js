import React from "react";

function NewsCard({ title, imageUrl, price, description, link }) {
  return (
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h5 className="card-price">{price}<strong>đ</strong></h5>
        <p className="card-text">{description}</p>
        <div className="card-buttons">
        <a href={link} className="card-button">
          Chi tiết
        </a>
        <a href={link} className="card-button">
          Mua
        </a>
        <a href={link} className="card-button">
          Thêm vào giỏ hàng
        </a>
        </div>
        
      </div>
    </div>
  );
}

export default NewsCard;
