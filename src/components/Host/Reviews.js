import React from "react";
import { FaStar } from "react-icons/fa";

export default function Reviews() {
    const reviewsData = [
        {
            rating: 5,
            name: "Veronica",
            date: "February 7, 2024",
            text: "Highly recommend!",
            id: "1"
        },
        {
            rating: 5,
            name: "David",
            date: "December 14, 2023",
            text: "No complaints, absolutely perfect!",
            id: "2"
        }
    ]
    return (
        <>
            <h2>Your reviews</h2>
            <h3>Reviews ({reviewsData.length})</h3>
            {reviewsData.map(review => (
                <div key={review.id}>
                    <p>{review.rating}</p>
                    <FaStar />
                    <div className="review--info">
                        <p className="name">{review.name}</p>
                        <p className="date">{review.date}</p>
                    </div>
                    <p>{review.text}</p>
                    <hr />
                </div>
            ))}
        </>

    )
}