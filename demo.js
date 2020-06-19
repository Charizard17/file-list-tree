(async () => {
  const res = await fetch("dummy-data.json");
  const json = await res.json();
  console.log("Object", json);
  // document.querySelector('div#data').innerHTML = JSON.stringify(json);
  let data = document.getElementById("data");

  let listDiv = document.createElement("div");
  listDiv.className = "listDiv";
  let imgDiv = document.createElement("div");
  imgDiv.className = "imgDiv";
  data.appendChild(listDiv);
  data.appendChild(imgDiv);

  for (let i = 0; i < json.length; ++i) {
    let box = document.createElement("button");
    box.className = "box";
    let parent = document.createElement("div");
    parent.className = "parent";
    parent.innerHTML = box + " " + json[i].name;
    if (json[i].children.length > 0) {
      for (let j = 0; j < json[i].children.length; ++j) {
        let child = document.createElement("div");
        child.className = "child";
        child.classList.add("displayNone");
        child.innerHTML = box + " " + json[i].children[j].name;
        parent.appendChild(child);
      }
    }
    listDiv.appendChild(parent);
  }

  let image = document.createElement("IMG");
  source = json[0].children[0].image;
  image.src = source;
  image.classList.add("image");
  imgDiv.appendChild(image);
})();
