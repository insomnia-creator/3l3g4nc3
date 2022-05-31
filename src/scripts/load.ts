import setTime from "./time";

const changeBackground = (url: string) => {
  const main = document.querySelector("main")!;
  main.style.backgroundImage = `url(${url})`;
};

const storeImage = async (image: Blob) => {
  const request = indexedDB.open("wallpaper");
  let db;
  request.onupgradeneeded = function () {
    const db = request.result;
    const store = db.createObjectStore("images", { keyPath: "id", autoIncrement: true });
    store.createIndex("image", "image", { unique: false });

    store.put({ image: image });
  };
  request.onsuccess = function () {
    db = request.result;
    const store = db.transaction("images", "readwrite").objectStore("images");
    //update the image in the database so that it is not fetched again
    //delete the old image
    const req2 = store.getAll();
    req2.onsuccess = function () {
        const images = req2.result;
        images.forEach((image) => {
            store.delete(image.id);
        });
    };
    req2.onerror = function (e) {
        console.error(e);
    }
    //store the new image
    store.put({ image: image });

  };

  request.onerror = function (e) {
    console.error(e);
  };

  return db;
};


const getImageFromDatabase = async () => {
  const request = indexedDB.open("wallpaper");
  let db!: IDBDatabase;
  request.onsuccess = function () {
    db = request.result;
    const transaction = db.transaction(["images"]);
    const store = transaction.objectStore("images");
    const request2 = store.getAll();
    request2.onsuccess = function () {
        const image = request2.result[0].image;
        changeBackground(URL.createObjectURL(image));
        setTime(image);
    };
    request2.onerror = function (e) {
        useDefaultImage();
        console.error(e);
    };
  };
  request.onerror = function (e) {
    console.error(e);
  };
 
};

const useDefaultImage = async () => {
  const data = (await fetch('/default.png'));
  const blob = await data.blob();
  setTime(blob);
  const url = URL.createObjectURL(blob);
  changeBackground(url);
}
const useFetchedImage = async (fetchedData:Response) => {
  const imageFILE = await fetchedData.blob();
  changeBackground(URL.createObjectURL(imageFILE));
  setTime(imageFILE);
  storeImage(imageFILE);
  localStorage.setItem('lastImage', Date.now().toString());
}

const getImageFromAPI = async () => {
  let fetchedData = await fetch(
    "https://source.unsplash.com/random/3840x2160?wallpaper"
  ).catch(async e => {
    await useDefaultImage();
    console.error(e);
    throw e;
  }) as Response;
  
  useFetchedImage(fetchedData); 
 
};
const getImage = async () => {
  const lastImageDate = localStorage.getItem("lastImage");
  const lastImageDateObj = new Date(parseInt(lastImageDate ?? '0'));
  const now = new Date();

//get the minutes between the two dates
    const minutes = (now.getTime() - lastImageDateObj.getTime()) / 1000 / 60;
  if (minutes > 480 || !lastImageDate) {
    await getImageFromAPI();
  } else {
    const lastImage = localStorage.getItem("lastImage");
    if (!lastImage) {
      await getImageFromAPI();
    } else {
      getImageFromDatabase();
    }
  }
};


export default getImage;
