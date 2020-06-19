(async() => {
    const res = await fetch('dummy-data.json');
    const json = await res.json();
    console.log("Object",json);
    // document.querySelector('div#data').innerHTML = JSON.stringify(json);
    let data = document.getElementById("data");

    for (let i = 0; i < json.length; ++i) {
        let box = document.createElement("button");
        box.className = "box";
        let parent = document.createElement("div");
        parent.className = "parentButton";
        parent.innerHTML = box + json[i].name;
        if (json[i].children.length > 0) {
          for (let j = 0; j < json[i].children.length; ++j) {
            let child = document.createElement("div");
            child.className = "childButton";
            child.innerHTML = box + json[i].children[j].name;
            parent.appendChild(child);
          }
        }
        data.appendChild(parent);
      }

})();