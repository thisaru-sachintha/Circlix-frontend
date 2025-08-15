import {React,useState,useEffect} from "react";

import ItemCardSmall from "./ItemCardSmall";
import ItemsModal from "./ItemsModal";
import UserProfileCard from "./UserProfileCard";
import arrow from "./icons/arrow-right-circle.svg";
import plus from "./icons/plus-circle.svg";

function UserCards(props) {

  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.get("http://localhost:8080/api/v1/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserData(data);
    } catch (err) {
      console.error("Failed to fetch user data:", err);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);


  return (
    <>
      <div>
        <div>
          <div className="d-flex flex-lg-row flex-sm-column overflow-hidden">
            <div className="w-100 d-flex flex-lg-row flex-sm-column">
              <UserProfileCard
                userName="Kisame"
                fName="Hoshigaki"
                lName="Kisame"
                nic="12345"
                address="kirigakure"
                dob="01/01/1990"
                tpNumber="01234"
                email="samehada@akatsuki.com"
              />
              {/*user Item list */}
              <div className="h-100 d-flex flex-column bg-dark rounded-4 flex-grow-1">
                <div className="d-flex flex-wrap bg-white h-50 border rounded-top-4 p-3">
                  <h3 className="fs-4">Bids</h3>
                  <div className="w-100 d-flex flex-row justify-content-between align-items-center">
                    <div className="">
                      <ItemCardSmall itemName="PurItem" />
                    </div>
                    <form action="/bids">
                      <button className="btn btn-primary">
                        See all <img src={arrow} />
                      </button>
                    </form>
                  </div>
                </div>
                <div className="d-flex flex-wrap bg-white h-50 border p-3">
                  <h3 className="fs-4">My Posts</h3>
                  <div className="w-100 d-flex flex-row justify-content-between align-items-center">
                    <div className="">
                      <ItemCardSmall itemName="item" />
                    </div>
                    <form action="/myposts">
                      <button className="btn btn-primary">
                        See all <img src={arrow} />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap bg-white h-50 border rounded-bottom-4 p-3">
            <h3 className="fs-4">Purchases</h3>
            <div className="w-100 d-flex flex-row justify-content-between align-items-center">
              <div className="">
                <ItemCardSmall itemName="item" />
              </div>
              <form action="/purchases">
                <button className="btn btn-primary">
                  See all <img src={arrow} />
                </button>
              </form>
            </div>
          </div>
        </div>
        {/*items */}
        <div className="d-flex flex-row border rounded-4">
          <div className="d-flex justify-content-center align-items-center p-3 col-6 border rounded-4">
            <h2 className="fs-2 me-4">Create Posts</h2>
            <ItemsModal />
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
            <form action="/explore" className="d-flex flex-row justify-content-center">
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
