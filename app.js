function getRandomArrayEntry(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
fetch('https://instances.ubersdr.org/api/instances').then(response => response.json()).then(data => {
  window.location.replace(getRandomArrayEntry(data.instances).public_url);
});
