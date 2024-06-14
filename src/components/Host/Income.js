import React from "react";

export default function Income() {
    const transactionsData = [
        { amount: 500, date: "Mar 7, '24", id: "1" },
        { amount: 640, date: "Apr 9, '24", id: "2" },
        { amount: 189, date: "May 23, '24", id: "3" },
        { amount: 328, date: "Jun 14, '24", id: "4" }
    ]
    return (
        <div>
            <h2>Your income</h2>
            <h3>Transactions ({transactionsData.length})</h3>
            {transactionsData.map( el => (
                <div key={el.id} className="dashboard host-van--container">
                    <p>{el.amount}</p>
                    <p>{el.date}</p>
                </div>
            ))}
        </div>
    )
}