import React, { useEffect } from "react";
import LayOut from "../LayOut/LayOut";
import { postByCategory } from "../ApisRequest/ApisRequest";
import Blogs from "../components/Blogs";
import { useParams } from "react-router-dom";

const ByCategory = () => {
  const [posts, setPost] = React.useState(null);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const result = await postByCategory(id);
      setPost(result);
    })();
  }, [id]);
  return (
    <LayOut>
      <Blogs blogs={posts} />
    </LayOut>
  );
};

export default ByCategory;
