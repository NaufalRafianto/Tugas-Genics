// const arr = [1, 2, 3, 4, 5];

// for (i = 0; i <= 10; i++) {
//   arr.push(i);
// }
// const filtered = arr.filter((data) => data % 2 === 0);

// console.log(filtered);

// arr.map((data) => {
//   console.log(`Number ${data}`);
// });

async function getData() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      throw new Error("Request failed with status: " + response.status);
    }
  } catch (error) {
    console.error(error);
  }
}

getData();
