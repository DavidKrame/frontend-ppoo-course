export const checkImage = (file: File) => {
  const SIZE_ALLOWED = 1024 * 1024; // 1mb
  const types = ["image/png", "image/jpeg", "image/jpg"];
  // const types = [ "image/jpeg", "image/jpg"];
  let err = "";
  if (!file) return (err = "Fichier inexistant");
  if (file.size > SIZE_ALLOWED) err = "Taille maximale : 1Mb ";

  if (!types.includes(file.type)) err = " Image de type png, jpeg ou jpg";
  return err;
};

export const uploadImage = async (file: File) => {
    
  const UPLOAD_PRESET = "kvicfmvb";
  const CLOUD_NAME = "chanel-muhesi";
  const URL = "https://cloudinary.com/v1_1/chanel-muhesi/image/upload" ;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);
  formData.append("cloud_name", CLOUD_NAME);

  const res = await fetch(URL, { method: "POST", body: formData });
  const data: any = res.json();
  return { public_id: data.public_id, url: data.secure_url };
};
