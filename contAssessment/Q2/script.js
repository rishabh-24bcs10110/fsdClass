// 1:

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



// 2.


// const titles = [
//   "React Basics",
//   "Learning JavaScript",
//   "Advanced CSS",
//   "React Hooks Guide",
//   "Web Development"
// ];

// function filterPosts() {
//   const query = document.getElementById("search").value.toLowerCase();
//   const output = document.getElementById("output");

//   output.innerHTML = "";

//   let count = 0;

//   titles.forEach(title => {
//     if (title.toLowerCase().includes(query)) {
//       const p = document.createElement("p");
//       p.innerText = title;
//       output.appendChild(p);
//       count++;
//     }
//   });

//   if (count === 0) {
//     output.innerHTML = "NO MATCH<br>0";
//   } else {
//     const total = document.createElement("p");
//     total.innerText = count;
//     output.appendChild(total);
//   }
// }


// 3.

// import React, { useState } from "react";

// function App() {
//   const [query, setQuery] = useState("");

//   const titles = [
//     "React Basics",
//     "Learning JavaScript",
//     "Advanced CSS",
//     "React Hooks Guide",
//     "Web Development"
//   ];

//   const filteredTitles = titles.filter(title =>
//     title.toLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search posts"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />

//       <div>
//         {filteredTitles.length > 0 ? (
//           <>
//             {filteredTitles.map((title, index) => (
//               <p key={index}>{title}</p>
//             ))}
//             <p>{filteredTitles.length}</p>
//           </>
//         ) : (
//           <>
//             <p>NO MATCH</p>
//             <p>0</p>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;


