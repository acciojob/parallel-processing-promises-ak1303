//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");
const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];
let promises = images.map(img=>{
	return new Promise((resolve,reject)=>{
		let image = new Image();
		image.onload =()=>{
			resolve(image);
		}
		image.onerror = (error)=>{
			reject(new Error(`Failed to load image's URL: ${img.url}`));
		}
		image.src = img.url;
	});
}) 
btn.addEventListener('click',()=>{
	Promise.all(promises).then(resolvedImages => {
	resolvedImages.forEach(img => { 
		output.appendChild(img); 
	});
	}).catch((err)=>{
		console.error(err);
	});
})


