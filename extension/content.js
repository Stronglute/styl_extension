// // Find all images on the page

// const clothingTags = [
//   // Western Clothing
//   "shirt", "t-shirt", "jeans", "pants", "trousers", "shorts", "jacket", "coat", 
//   "suit", "tie", "blazer", "sweater", "hoodie", "skirt", "dress", "gown", 
//   "socks", "shoes", "boots", "heels","shirts", "t-shirts", "jean", "pant", "trouser", "short", "jackets", "coats", 
//   "suits", "ties", "blazers", "sweaters", "hoodies", "skirts", "dresses", "gowns", 
//   "sock", "shoe", "boot", "heel",

//   // South Asian Clothing (India, Pakistan, Bangladesh)
//   "kurta", "sherwani", "lehenga", "sari", "saree", "dhoti", "lungi", "churidar", 
//   "salwar", "kameez", "dupattas", "patiala", "anarkali", "ghagra","kurtas", "sherwanis", "lehengas", "saris", "sarees", "dhotis", "lungis", "churidars", 
//   "salwars", "kameezs", "dupatta", "patialas", "anarkalis", "ghagras",

//   // East Asian Clothing (China, Japan, Korea)
//   "hanfu", "cheongsam", "qipao", "changshan", "kimono", "yukata", "hakama", 
//   "samue", "jogori", "hanbok", "jeogori", "chima", "durumagi","hanfus", "cheongsams", "qipaos", "changshans", "kimonos", "yukata", "hakama", 
//   "samues", "jogoris", "hanboks", "jeogoris", "chimas", "durumagis",

//   // Middle Eastern Clothing
//   "abaya", "thobe", "dishdasha", "jubbah", "keffiyeh", "ghutra", "niqab", 
//   "hijab", "burqa", "jalabiya", "kaftan","abayas", "thobes", "dishdashas", "jubbahs", "keffiyehs", "ghutras", "niqabs", 
//   "hijabs", "burqas", "jalabiyas", "kaftans",


//   // African Traditional Clothing
//   "dashiki", "kitenge", "kanga", "boubou", "gele", "kanzu", "agabada", 
//   "kufi", "shuka", "khanga","dashikis", "kitenges", "kangas", "boubous", "geles", "kanzus", "agabadas", 
//   "kufis", "shukas", "khangas",

//   // European Traditional Clothing
//   "lederhosen", "dirndl", "kilts", "sarafan", "ushanka", "pelisse", "bolero","lederhosens", "dirndls", "kilt", "sarafans", "ushankas", "pelisses", "boleros",

//   // Native American Clothing
//   "warbonnet", "moccasins", "breechcloth", "buckskin", "ribbon dress","warbonnets", "moccasin", "breechcloths", "buckskins", "ribbon dresses",

//   // South American Traditional Clothing
//   "poncho", "ruana", "pollera", "huipil", "rebozo", "bombacha","ponchos", "ruanas", "polleras", "huipils", "rebozos", "bombachas",

//   // Pacific Islander Traditional Clothing
//   "lava-lava", "sarong", "pareo", "ulu", "tapa cloth", "hula skirt","lava-lavas", "sarongs", "pareos", "ulus", "tapa cloths", "hula skirts",

//   // Others
//   "swimsuit", "bikini", "kimono robe", "robe", "overalls", "tunic", "toga","swimsuits", "bikinis", "kimono robes", "robes", "overalls", "tunics", "togas"
// ];


// const images = document.querySelectorAll('img');

// images.forEach((image) => {
//   // Check if the image is a clothing image
//   const altText = image.alt.toLowerCase();
//   const srcText = image.src.toLowerCase();
//   const isClothing = clothingTags.some(tag => 
//     altText.toLowerCase().includes(tag) || srcText.toLowerCase().includes(tag)
//   );

//   console.log(isClothing);

//   if (isClothing) {
//     // Create a button element
//     const button = document.createElement('button');
//     button.innerText = 'Try Now';
//     button.classList.add('image-button');

//     // Position the button relative to the image
//     image.style.position = 'relative';
//     button.style.position = 'absolute';
//     button.style.bottom = '10px';
//     button.style.left = '10px';

//     // Append the button to the image's parent element
//     image.parentNode.insertBefore(button, image.nextSibling);

//     // Add a click event listener to the button
//     button.addEventListener('click', () => {
//       alert(`Buying clothing item: ${image.src}`);
//     });
//   }
// });


// async function loadModel() {
//   const model = await tf.loadLayersModel("https://tfhub.dev/google/tfjs-model/mobilenet_v2_130_224/classification/3/default/1");
//   return model;
// }

// async function detectClothingML(img, model) {
//   const imageTensor = tf.browser.fromPixels(img).resizeNearestNeighbor([224, 224]).expandDims().toFloat().div(255.0);
//   const predictions = model.predict(imageTensor).dataSync();
//   const topPrediction = predictions.indexOf(Math.max(...predictions));

//   // Clothing classes are usually in the top ranges (adjust as needed)
//   return topPrediction > 400 && topPrediction < 600;
// }

// async function addButtonToImages() {
//   const model = await loadModel();

//   document.querySelectorAll("img").forEach(async (img) => {
//     if (img.dataset.buttonAdded) return;

//     const isClothing = await detectClothingML(img, model);
//     if (isClothing) {
//       let btn = document.createElement("button");
//       btn.innerText = "Clothing Item";
//       btn.className = "image-btn";

//       btn.style.position = "absolute";
//       btn.style.top = `${img.offsetTop + 10}px`;
//       btn.style.left = `${img.offsetLeft + 10}px`;
//       btn.style.background = "red";
//       btn.style.color = "white";
//       btn.style.padding = "5px 10px";
//       btn.style.borderRadius = "5px";
//       btn.style.cursor = "pointer";
//       btn.style.zIndex = "9999";

//       btn.addEventListener("click", () => {
//         alert(`This is a clothing item: ${img.src}`);
//       });

//       document.body.appendChild(btn);
//       img.dataset.buttonAdded = true;
//     }
//   });
// }

// window.addEventListener("load", addButtonToImages);
// document.addEventListener("scroll", addButtonToImages);


async function sendImageToBackend(img) {
  const imageUrl = img.src;
  const response = await fetch(imageUrl);
  const blob = await response.blob();

  const formData = new FormData();
  formData.append("image", blob, "image.jpg");

  const backendUrl = "http://localhost:5000/classify"; // Your backend URL

  try {
    const result = await fetch(backendUrl, {
      method: "POST",
      body: formData
    });

    const data = await result.json();
    return data.isClothing;
  } catch (error) {
    console.error("Error sending image:", error);
    return false;
  }
}

async function addButtonToClothingImages() {
  document.querySelectorAll("img").forEach(async (img) => {
    if (img.dataset.buttonAdded) return;

    const isClothing = await sendImageToBackend(img);
    if (isClothing) {
      let btn = document.createElement("button");
      btn.innerText = "Clothing Item";
      btn.className = "image-btn";

      btn.style.position = "absolute";
      btn.style.top = `${img.offsetTop + 10}px`;
      btn.style.left = `${img.offsetLeft + 10}px`;
      btn.style.background = "red";
      btn.style.color = "white";
      btn.style.padding = "5px 10px";
      btn.style.borderRadius = "5px";
      btn.style.cursor = "pointer";
      btn.style.zIndex = "9999";

      btn.addEventListener("click", () => {
        alert(`This is a clothing item: ${img.src}`);
      });

      document.body.appendChild(btn);
      img.dataset.buttonAdded = true;
    }
  });
}

window.addEventListener("load", addButtonToClothingImages);
document.addEventListener("scroll", addButtonToClothingImages);
