import React from "react";

export default function Reviews() {
  return (
    <section className="reviews">
      <div className="container container-body">
      <h2 className="reviews-title">Our customers love us!</h2>
      <div className="cards">
        <div className="card-item">
          <div className="card-footer">
            <img src="/src/assets/mid60female.png" alt="" />
              <div className="reviewer-details">
                <h4>Reviewers name</h4>
                <small className="review-date">Review date"</small>
              </div>
          </div>
          <div className="card-content">
            <h3 className="stars">⭐ ⭐ ⭐ ⭐ ⭐</h3>
            <p>Review title</p>
            <p>Review body</p>
          </div>
        </div>
        <div className="card-item">
          <div className="card-content">
            <h3 className="stars">⭐ ⭐ ⭐ ⭐ ⭐</h3>
            <p>Review title</p>
            <p>Review body</p>
            <div className="card-footer flex-center">
              <img src="/src/assets/mid60female.png" alt="" />
              <div className="reviewer-details">
                <h4>Reviewers name</h4>
                <small className="review-date">Review date"</small>
              </div>
            </div>
          </div>
        </div>
        <div className="card-item">
          <div className="card-content">
            <h3 className="stars">⭐ ⭐ ⭐ ⭐ ⭐</h3>
            <p>Review title</p>
            <p>Review body</p>
            <div className="card-footer flex-center">
              <img src="/src/assets/mid60female.png" alt="" />
              <div className="reviewer-details">
                <h4>Reviewers name</h4>
                <small className="review-date">Review date"</small>
              </div>
            </div>
          </div>
        </div>
        <div className="card-item">
          <div className="card-content">
            <h3 className="stars">⭐ ⭐ ⭐ ⭐ ⭐</h3>
            <p>Review title</p>
            <p>Review body</p>
            <div className="card-footer flex-center">
              <img src="/src/assets/mid60female.png" alt="" />
              <div className="reviewer-details">
                <h4>Reviewers name</h4>
                <small className="review-date">Review date"</small>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
    </section>
  ); 
}