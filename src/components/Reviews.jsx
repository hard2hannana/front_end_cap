import React from "react";

export default function Reviews() {
  return (
   <main>
    <section className="reviews">
      <div className="reviews-header">
      <h2>Our customers love us!</h2>
      </div>
      <div className="reviews-cards">
      <div className="card-item">
          <div className="review-card-stars">
            <h2>⭐ ⭐ ⭐ ⭐ ⭐</h2>
            <h2>Review title</h2>
            <h3>Review body</h3>
            <div className="reviewer">
              <img src="/src/assets/mid60female.png" alt="" />
              <div className="reviewer-text">
                <h4>Reviewers name</h4>
                <small className="review-date">Review date"</small>
              </div>
            </div>
          </div>
        </div>
        <div className="card-item">
          <div className="review-card-stars">
            <h2>⭐ ⭐ ⭐ ⭐ ⭐</h2>
            <h2>Review title</h2>
            <h3>Review body</h3>
            <div className="reviewer">
              <img src="/src/assets/mid60female.png" alt="" />
              <div className="reviewer-text">
                <h3>Reviewers name</h3>
                <h3 className="review-date">Review date"</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card-item">
          <div className="review-card-stars">
            <h2>⭐ ⭐ ⭐ ⭐ ⭐</h2>
            <h2>Review title</h2>
            <h3>Review body</h3>
            <div className="reviewer">
              <img src="/src/assets/mid60female.png" alt="" />
              <div className="reviewer-text">
                <h4>Reviewers name</h4>
                <small className="review-date">Review date"</small>
              </div>
            </div>
          </div>
        </div>
        <div className="card-item">
          <div className="review-card-stars">
            <h2>⭐ ⭐ ⭐ ⭐ ⭐</h2>
            <h2>Review title</h2>
            <h3>Review body</h3>
            <div className="reviewer">
              <img src="/src/assets/mid60female.png" alt="" />
              <div className="reviewer-text">
                <h4>Reviewers name</h4>
                <small className="review-date">Review date"</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   </main>
  ); 
}