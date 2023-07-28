import React, { useEffect } from "react";
import LayOut from "../LayOut/LayOut";
import { newestPost } from "../ApisRequest/ApisRequest";
import Blogs from "../components/Blogs";

const Home = () => {
  const [posts, setPost] = React.useState(null);
  useEffect(() => {
    (async () => {
      const result = await newestPost();
      setPost(result);
    })();
  }, []);

  return (
    <LayOut>
      <Blogs blogs={posts} />
    </LayOut>
  );
};

export default Home;
