
import ItemCardSmall from "./ItemCardSmall";
import SeeAllBtn from "../component/SeeAllBtn";

function ItemContainer(props) {
  return (
    <>
      <div className="d-flex flex-wrap bg-white h-50 border rounded-top-4 p-3">
        <h3 className="fs-4">{props.division}</h3>
        <div className="w-100 d-flex flex-row justify-content-between align-items-center">
          <div className="">
            <ItemCardSmall itemName="PurItem" />
          </div>
          <SeeAllBtn navigateTo={props.navigateTo}/>
        </div>
      </div>
    </>
  );
}

export default ItemContainer;
