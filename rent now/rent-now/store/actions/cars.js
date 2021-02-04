import Car from "../../model/cars";
export const FETCH_CARS = 'FETCH_CARS';


export const fetchAllCars = () => {
    return async (dispatch, getState) => {
      try {
        const response = await fetch(
          `https://rent-a-car-app-211bf.firebaseio.com/cars.json`
        );
        const resData = await response.json();
        // console.log(resData);
  
        let fetchCarsData = [];
  
        for (const key in resData) {
            fetchCarsData.push(
            new Car(
              key,
              resData[key].dealerId,
              resData[key].title,
              resData[key].model,
              resData[key].rent,
              resData[key].fuelAverage,
              resData[key].coverImage,
              resData[key].description,
            )
          );
        }
  
        dispatch({
          type: FETCH_CARS,
          cars: fetchCarsData
        });
      } catch (err) {
        throw err;
      }
    };
  };
  