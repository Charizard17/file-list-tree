(async() => {
    const res = await fetch('dummy-data.json');
    const json = await res.json();
    console.log("Object",json);
    document.querySelector('div#data').innerHTML = JSON.stringify(json);
})();