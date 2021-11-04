const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 1

const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

cat.complain();

// Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.className = "subheading";

// Question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p style="background: yellow">New paragraph</p>`;

// Question 7

function listOfCats(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

listOfCats(cats);

// Question 8

function createCats(cats) {
  let catsHtml = "";

  for (let i = 0; i < cats.length; i++) {
    let name = cats[i].name;
    let age = cats[i].age;

    let ageUnknown = "Age unknown";

    if (age) {
      ageUnknown = age;
    }

    catsHtml += `
    <div>
    <h5>${name}</h5>
    <p>${ageUnknown}</p>
    </div>
    `;
  }

  return catsHtml;
}

const catsListHtml = createCats(cats);

const container = document.querySelector(".cat-container");

container.innerHTML = catsListHtml;
