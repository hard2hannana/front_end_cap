import React from "react";
import reviewer from "../assets/mid60female.png";



export default function Reviews() {
  return (
    <section className="reviews">
      <div className="container">
      <div className="reviews">
        <h2 className="reviews-title">Our customers love us!</h2>
        <div className="cards spacing">
          <div className="card-item">
            <div className="card-footer flex-center">
              <img src={reviewer} alt="Mid sixties female" />
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
            <div className="card-footer flex-center">
              <img src={reviewer} alt="Mid sixties female" />
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
            <div className="card-footer flex-center">
              <img src={reviewer} alt="Mid sixties female" />
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
            <div className="card-footer flex-center">
              <img src={reviewer} alt="Mid sixties female" />
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
        </div>
      </div>
    </div>
    </section>
  ); 
}