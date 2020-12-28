import Dealer from "../../model/dealers";
export const FETCH_DEALERS = 'FETCH_DEALERS';


export const fetchDealers = () => {
    return async (dispatch, getState) => {
      try {
        const response = await fetch(
          `https://rent-a-car-app-211bf.firebaseio.com/dealers.json`
        );
        const resData = await response.json();
        // console.log(resData);
  
        let fetchDealersData = [];
  
        for (const key in resData) {
            fetchDealersData.push(
            new Dealer(
              key,
              resData[key].dealerId,
              resData[key].title,
              resData[key].rating,
              resData[key].coverImage,
              resData[key].description,
              resData[key].address
            )
          );
        }
  
        dispatch({
          type: FETCH_DEALERS,
          dealers: fetchDealersData
        });
      } catch (err) {
        throw err;
      }
    };
  };
  