(async () => {
  const res = await fetch("dummy-data.json");
  const json = await res.json();
  console.log("Object", json);
  // document.querySelector('div#data').innerHTML = JSON.stringify(json);
  let data = document.getElementById("data");
  let listDiv = document.createElement("div");
  let imgDiv = document.createElement("div");

  data.classList.add("container");
  data.classList.add("float-left");
  listDiv.classList.add("col-3");
  listDiv.classList.add("float-left");
  listDiv.classList.add("pt-5");
  listDiv.classList.add("pl-5");
  imgDiv.classList.add("col-6");
  imgDiv.classList.add("float-left");

  for (let i = 0; i < json.length; ++i) {
    let listElement = document.createElement("div");
    let box = document.createElement("button");
    let parent = document.createElement("span");
    box.classList.add("border");
    box.classList.add("border-secondary");
    box.classList.add("rounded-sm");
    box.classList.add("bg-white");
    box.style.height = "14px";
    box.setAttribute("id", json[i].id);
    box.setAttribute("onclick", "clickBox(this.id)");
    parent.classList.add("ml-2");
    parent.setAttribute("id", json[i].id + "parent");
    parent.innerHTML = json[i].name;
    if (json[i].children.length > 0) {
      let triangle = document.createElement("span");
      triangle.setAttribute("id", json[i].id + "triangle");
      // triangle.innerHTML = "▼":
      triangle.innerHTML = "►";
      triangle.classList.add("mr-1");
      listElement.appendChild(triangle);
      for (let j = 0; j < json[i].children.length; ++j) {
        let listElement2 = document.createElement("div");
        let child = document.createElement("span");
        let childImgSource = document.createElement("span");
        let box2 = document.createElement("button");
        box2.classList.add("border");
        box2.classList.add("border-secondary");
        box2.classList.add("rounded-sm");
        box2.classList.add("bg-white");
        box2.classList.add("ml-5");
        box2.style.height = "14px";
        box2.setAttribute("id", json[i].children[j].id);
        box2.setAttribute("onclick", "selectImage(this.id)");
        child.innerHTML = json[i].children[j].name;
        child.classList.add("ml-2");
        childImgSource.innerHTML = json[i].children[j].image;
        childImgSource.setAttribute("id", json[i].children[j].id + "img");
        childImgSource.style.display = "none";
        listElement2.appendChild(box2);
        listElement2.appendChild(child);
        listElement2.appendChild(childImgSource);
        parent.appendChild(listElement2);
        listElement2.style.display = "none";
      }
    }
    listElement.appendChild(box);
    listElement.appendChild(parent);
    listDiv.appendChild(listElement);
  }

  let image = document.createElement("IMG");
  image.classList.add("img-thumbnail");
  image.setAttribute("id", "ImageElement");
  image.src = "";
  imgDiv.appendChild(image);
  data.appendChild(listDiv);
  data.appendChild(imgDiv);
})();

function clickBox(id) {
  let selectedBox = document.getElementById(id);
  let selectTriangle = document.getElementById(id + "triangle");
  let clickedElement = document.getElementById(id + "parent").childNodes;

  if (clickedElement.length > 1) {
    for (let i = 1; i < clickedElement.length; ++i) {
      if (clickedElement[i].style.display === "none") {
        clickedElement[i].style.display = "";
        selectTriangle.innerHTML = "▼";
        selectedBox.classList.remove("bg-white");
        selectedBox.classList.add("bg-success");
      } else {
        clickedElement[i].style.display = "none";
        selectTriangle.innerHTML = "►";
        selectedBox.classList.remove("bg-success");
        selectedBox.classList.add("bg-white");
      }
    }
  }
}

function selectImage(id) {
  let imageSource = document.getElementById(id + "img").innerText;
  let imageElement = document.getElementById("ImageElement");
  imageElement.src = imageSource;

}