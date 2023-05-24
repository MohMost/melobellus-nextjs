import { storage } from "./firebase-config";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import wrapPromise from "./wrapPromise";

function getImages(Ref: string): { read: () => string[] } {
  const imagesRef = ref(storage, Ref);
  const promise = listAll(imagesRef).then((imageList) => {
    return Promise.all(
      imageList.items.map(async (item) => {
        try {
          const url = await getDownloadURL(item);
          return url;
        } catch (err: any) {
          console.error(
            `Error getting download URL for image: ${item.name}`,
            err
          );
          throw err;
        }
      })
    );
  });

  return wrapPromise(promise);
}

export default getImages;
