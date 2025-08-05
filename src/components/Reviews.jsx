import reviews from "../data/reviewsData";

export default function Reviews() {
  return (
    <section className="reviews">
      <div className="container review-content">
        <h2 className="reviews-title">Our customers love us!</h2>
         {reviews.map((review) => (
          <div className="review-card" key="reviews.id">
            <div className="card-header">
              <img src={review.reviewImage} alt={review.reviewer} />
                <div className="reviewer-details">
                  <h4>{ review.reviewer } </h4>
                  <small className="review-date">{review.date}"</small>
                </div>
            </div>
            <div className="card-content">
              <h3 className="stars">⭐ ⭐ ⭐ ⭐ ⭐</h3>
              <p>{review.body}</p>
            </div>
          </div>
         ))}
      </div>
    </section>
  ); 
}