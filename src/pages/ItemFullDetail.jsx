import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import UserNavbar from "../headerComponents/UserNavbar";
import ItemDetailView from "../UserPageComponents.jsx/ItemDetailView";
import UserFooter from "../footerSection/UserFooter";

function ItemFullDetail() {
  const { id, type } = useParams();
  const [item, setItem] = useState(0);

  const testData = [
    {
      itemId: "1",
      itemName: "Laptop",
      category: "Electronics",
      description: "High-end gaming laptop",
      bidLimit: "5000",
      startDate: "2025-12-31",
      startTime: "23:59",
      endDate: "2025-12-31",
      endTime: "23:59",
    },
    {
      itemId: "2",
      itemName: "Chair",
      category: "Furniture",
      description: "Ergonomic office chair",
      bidLimit: "1500",
      startDate: "2025-12-31",
      startTime: "23:59",
      endDate: "2025-11-30",
      endTime: "18:00",
    },
  ];

  useEffect(() => {
    const foundItem = testData.find((item) => item.itemId === id);
    if (foundItem) {
      setItem(foundItem);
    }
  }, [id]);

  return (
    <>
      <UserNavbar />
      <ItemDetailView
        itemId={item.itemId}
        itemName={item.itemName}
        category={item.category}
        description={item.description}
        bidLimit={item.bidLimit}
        startDate={item.startDate}
        startTime={item.startTime}
        endDate={item.endDate}
        endTime={item.endTime}
        parentComponent={type}
      />
      <UserFooter />
    </>
  );
}

export default ItemFullDetail;

{
  /*
  <div className="p-4">
        <h2>Full Item Details</h2>
        <p>
          <strong>ID:</strong> {id}
        </p>
        <p>
          <strong>Type:</strong> {type}
        </p>

        {item ? (
          <ul className="list-group list-group-flush mt-3">
            <li className="list-group-item">
              <strong>Item Name:</strong> {item.itemName}
            </li>
            <li className="list-group-item">
              <strong>Category:</strong> {item.category}
            </li>
            <li className="list-group-item">
              <strong>Description:</strong> {item.description}
            </li>
            <li className="list-group-item">
              <strong>Bid Limit:</strong> {item.bidLimit}
            </li>
            <li className="list-group-item">
              <strong>End Date:</strong> {item.endDate}
            </li>
            <li className="list-group-item">
              <strong>End Time:</strong> {item.endTime}
            </li>
          </ul>
        ) : (
          <p className="text-danger mt-3">Item not found.</p>
        )}
      </div>
       */
}
