import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.SVELTE_APP_API_KEY,
  projectId: process.env.SVELTE_APP_PROJECT_ID,
  authDomain: process.env.SVELTE_APP_AUTH_DOMAIN,
  storageBucket: process.env.SVELTE_APP_STORAGE_BUCKET,
};

const defaultProject = initializeApp(firebaseConfig);
const defaultStorage = getStorage(defaultProject);

const imagesRef = ref(defaultStorage, "weddingPictures/");
const listImage = listAll(imagesRef);
export { listImage };
