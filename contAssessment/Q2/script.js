function filterTitles(n, titles, q) {
  let count = 0;
  q = q.toLowerCase();

  for (let i = 0; i < n; i++) {
    if (titles[i].toLowerCase().includes(q)) {
      console.log(titles[i]);
      count++;
    }
  }

  if (count === 0) console.log("NO MATCH");
  console.log(count);
}
