import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll } from "firebase/storage";

const firebaseConfig = {
  apiKey: SVELTE_APP_API_KEY,
  projectId: SVELTE_APP_PROJECT_ID,
  authDomain: SVELTE_APP_AUTH_DOMAIN,
  storageBucket: SVELTE_APP_STORAGE_BUCKET,
};

const defaultProject = initializeApp(firebaseConfig);
const defaultStorage = getStorage(defaultProject);

const imagesRef = ref(defaultStorage, "weddingPictures/");
const listImage = listAll(imagesRef);
export { listImage };
