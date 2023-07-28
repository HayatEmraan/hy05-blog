import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { postDetailsById } from "../ApisRequest/ApisRequest";
import LayOut from "../LayOut/LayOut";

const Details = () => {
  const [posts, setPost] = React.useState(null);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const result = await postDetailsById(id);
      setPost(result);
    })();
  }, []);
  return (
    <LayOut>
      <div className="container mx-auto my-12 p-9">
        {posts ? (
          <div className="grid p-x-9 grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-1">
            <div className="card w-100 glass">
              <figure>
                <img src={posts["postDetails"]["img"]} alt="car!" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{posts["postDetails"]["title"]}</h2>
                <p>{posts["postDetails"]["content"]}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="min-h-screen flex justify-center items-center">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        )}
      </div>
    </LayOut>
  );
};

export default Details;
