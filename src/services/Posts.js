import api from "./apiConfig.js";

export const getPosts = async () => {
  try {
    const response = await api.get("/api/posts/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPost = async (id) => {
  try {
    const response = await api.get(`/api/posts/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (postData) => {
  try {
    const response = await api.post("/api/posts/", postData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePost = async (id, postData) => {
  try {
    const response = await api.put(`/api/posts/${id}/`, postData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (id) => {
  try {
    const response = await api.delete(`/api/posts/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const likePost = async (id) => {
  try {
    const response = await api.patch(`api/likePost/`, id);
    return response;
  } catch (error) {
    throw error;
  }
};

export const unlikePost = (id) => {
  const promise = api.patch(`api/unlikePost/`, id);
  promise
    .then((res) => {
      setTimeout(() => {
        return res
      }, 700);
    })
    .catch((error) => {
      throw error;
    });
};
