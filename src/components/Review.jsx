import React, { useState } from "react";
import "./../styles/Reviews.css";

export default function Reviews({ currentUser }) {
  // Nepdata: lijst van bestaande reviews
  const [reviews, setReviews] = useState([
    { id: 1, user: "emma", text: "Leuk spel!" },
    { id: 2, user: "tom", text: "Niet mijn ding." },
    { id: 3, user: "sara", text: "Geweldig ontworpen levels!" },
  ]);

  const [newReview, setNewReview] = useState("");

  const handleAddReview = () => {
    if (!currentUser) return;

    const newEntry = {
      id: Date.now(),
      user: currentUser,
      text: newReview,
    };

    setReviews([newEntry, ...reviews]);
    setNewReview("");
  };

  const handleDelete = (id) => {
    setReviews(reviews.filter((r) => r.id !== id));
  };

  return (
    <div className="reviews-page">
      <h2>Reviews</h2>

      {/* Review schrijven */}
      {currentUser ? (
        <div className="new-review">
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Schrijf je review..."
          />
          <button onClick={handleAddReview} disabled={!newReview.trim()}>
            Plaatsen
          </button>
        </div>
      ) : (
        <p className="login-warning">Log in om een review te schrijven.</p>
      )}

      {/* Review lijst */}
      <div className="review-list">
        {reviews.map((review) => (
          <div className="review-card" key={review.id}>
            <p className="review-user"><strong>{review.user}</strong> zegt:</p>
            <p>{review.text}</p>
            {currentUser === review.user && (
              <button
                className="delete-btn"
                onClick={() => handleDelete(review.id)}
              >
                Verwijder
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
