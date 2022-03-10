import { useDispatch, useSelector } from "react-redux";
import { fetchImagesThunk } from "./store/thunks";

function App() {
  const dispatch = useDispatch();
  const { images, loading } = useSelector((state) => state?.imagesReducer);

  return (
    <div className="App">
      <header className="App-header">
        <div className="flex-center flex-column">
          <h1>Redux Thunk</h1>
          <button className="btn" onClick={() => dispatch(fetchImagesThunk())}>
            Fetch Images
          </button>
          {loading && <h1>loading...</h1>}
          <div className="flex-center image-wrapper">
            {images.map(({ download_url, id, author }) => (
              <img className="image" key={id} src={download_url} alt={author} />
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
