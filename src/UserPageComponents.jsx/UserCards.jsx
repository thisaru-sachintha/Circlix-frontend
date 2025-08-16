import { React, useState, useEffect } from "react";

import ItemCardSmall from "./ItemCardSmall";
import CreatePostModal from "./CreatePostModal";
import UserProfileCard from "./UserProfileCard";
import ItemContainer from "./ItemContainer";
import arrow from "./icons/arrow-right-circle.svg";

function UserCards(props) {
  const [userData, setUserData] = useState({
    firstName: "Kisame",
    lastName: "Hoshigaki",
    address: "Kirigakure",
    DOB: "1960-10-10",
    tpNumber: "123",
    email: "samehada@akatsuki.com",
    nic: "123",
    password: "1234",
    image: null,
  });

  const [bidData, setBidData] = useState();
  const [myPostsData, setMyPostsData] = useState();
  const [purchasesData, setPurchasesData] = useState();

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/user/profile",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUserData(data);
    } catch (err) {
      console.error("Failed to fetch user data:", err);
    }
  };
  const fetchBidData = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/user/profile",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setBidData(data);
    } catch (err) {
      console.error("Failed to fetch bid data:", err);
    }
  };
  const fetchMyPostsData = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/user/profile",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMyPostsData(data);
    } catch (err) {
      console.error("Failed to fetch my posts data:", err);
    }
  };
  const fetchPurchasesData = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/user/profile",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setPurchasesData(data);
    } catch (err) {
      console.error("Failed to fetch purchases data:", err);
    }
  };

  useEffect(() => {
    fetchUserData();
    fetchBidData();
    fetchMyPostsData();
    fetchPurchasesData();
  }, []);

  return (
    <>
      <div>
        <div>
          <div className="d-flex flex-lg-row flex-sm-column overflow-hidden">
            <div className="w-100 d-flex flex-lg-row flex-sm-column">
              <UserProfileCard
                userImg={arrow}
                userName={userData.firstName}
                fName={userData.firstName}
                lName={userData.lastName}
                nic={userData.nic}
                address={userData.address}
                dob={userData.DOB}
                tpNumber={userData.tpNumber}
                email={userData.email}
              />
              {/*user Item list */}
              <div className="h-100 d-flex flex-column bg-dark rounded-4 flex-grow-1">
                <ItemContainer containerData={bidData} division="Bids" navigateTo="/bids" />
                <ItemContainer containerData={myPostsData} division="My posts" navigateTo="/myposts" />
              </div>
            </div>
          </div>
          <ItemContainer containerData={purchasesData} division="Purchases" navigateTo="/purchases" />
        </div>
        {/*items */}
        <div className="d-flex flex-row border rounded-4">
          <div className="d-flex justify-content-center align-items-center p-3 col-6 border rounded-4">
            <h2 className="fs-2 me-4">Create Posts</h2>
            <CreatePostModal />
          </div>
          <div className=" h-100 py-3 ps-4 d-flex flex-column justify-content-center border rounded-4 col-6">
            <div className="d-flex flex-row mb-2 justify-content-center">
              <h2 className="fs-2 me-4">Explore</h2>
              <form action="/explore">
                <button className="btn btn-primary">
                  See all <img src={arrow} />
                </button>
              </form>
            </div>
            <form
              action="/explore"
              className="d-flex flex-row justify-content-center"
            >
              <input
                className="form-control w-50"
                type="text"
                placeholder="search by filter"
              />
              <button className="btn bg-primary">Search</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserCards;
