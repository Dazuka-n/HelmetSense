const API_BASE_URL = "http://localhost:8000";

export const detectFace = async (imageBlob) => {
  const formData = new FormData();
  formData.append("image", imageBlob, "capture.jpg");

  const response = await fetch(`${API_BASE_URL}/detect`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Face detection failed");
  }

  return response.json();
};
