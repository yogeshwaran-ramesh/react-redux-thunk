import { fetchImages, fetchImagesSuccess } from "../actions/images";

export const fetchImagesThunk = () => {
  return (dispatch) => {
    dispatch(fetchImages());
    return fetch("https://picsum.photos/v2/list?page=1&limit=9")
      .then((response) => response.json())
      .then((images) => dispatch(fetchImagesSuccess(images)))
      .catch((e) => console.log(e));
  };
};
