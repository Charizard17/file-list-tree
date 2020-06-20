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
    box.classList.add("rounded-sm")
    box.classList.add("bg-white");
    box.style.height = "14px";
    parent.classList.add("ml-2");
    parent.innerHTML = json[i].name;
    if (json[i].children.length > 0) {
      for (let j = 0; j < json[i].children.length; ++j) {
        let listElement2 = document.createElement("div");
        let child = document.createElement("span");
        let box2 = document.createElement("button");
        box2.classList.add("border");
        box2.classList.add("border-secondary");
        box2.classList.add("rounded-sm")
        box2.classList.add("bg-white");
        box2.style.height = "14px";
        box2.classList.add("ml-5");
        child.classList.add("ml-2");
        child.innerHTML = json[i].children[j].name;
        listElement2.appendChild(box2);
        listElement2.appendChild(child);
        parent.appendChild(listElement2);
      }
    }
    listElement.appendChild(box);
    listElement.appendChild(parent);
    listDiv.appendChild(listElement);
  }

  let image = document.createElement("IMG");
  source = json[0].children[0].image;
  image.src = source;
  image.classList.add("img-thumbnail");
  imgDiv.appendChild(image);

  data.appendChild(listDiv);
  data.appendChild(imgDiv);
})();
