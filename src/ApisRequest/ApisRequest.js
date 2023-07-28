import axios from "axios";

const baseURL = "https://basic-blog.teamrabbil.com/api";

export async function postCategories() {
  const res = await axios.get(baseURL + "/post-categories");
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
}

export async function newestPost() {
  const res = await axios.get(baseURL + "/post-newest");
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
}

export async function postByCategory(id) {
  const res = await axios.get(baseURL + "/post-list/" + id);
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
}

export async function postDetailsById(id) {
  const res = await axios.get(baseURL + "/post-details/" + id);
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
}
