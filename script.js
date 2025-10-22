console.log("script is givingggg");

const fullName = document.getElementById("fullOne");
const role = document.getElementById("roleOne");
const category = document.getElementById("categoryOne");
const description = document.getElementById("descriptionOne")

//employee 2
const girlName = document.getElementById("fullTwo");
const girlRole = document.getElementById("roleTwo");
const girlCategory = document.getElementById("categoryTwo");
const   girlDescription = document.getElementById("descriptionTwo");

//employee 3
const maleName = document.getElementById("fullThree");
const maleRole = document.getElementById("roleThree");
const maleCategory = document.getElementById("categoryThree");
const   maleDescription = document.getElementById("descriptionThree");

//employee 4
const frontName = document.getElementById("fullFour");
const frontRole = document.getElementById("roleFour");
const frontCategory = document.getElementById("categoryFour");
const   frontDescription = document.getElementById("descriptionFour");

//employee 5
const dataName = document.getElementById("fullFive");
const dataRole = document.getElementById("roleFive");
const dataCategory = document.getElementById("categoryFive");
const   dataDescription = document.getElementById("descriptionFive");

//employee 6
const reportName = document.getElementById("fullSix");
const reportRole = document.getElementById("roleSix");
const reportCategory = document.getElementById("categorySix");
const   reportDescription = document.getElementById("descriptionSix");

async function getBlog() {
    try{
const fetchblog = await fetch('http://localhost:4000/api/blog')
const blog = await fetchblog.json()
console.log("blog is", blog);

if (blog.fullName) {
    fullOne.textContent = blog.fullName
    role.textContent = blog.Role
    category.textContent = blog.Category
    description.textContent = blog.Description
}

    } catch(error) {
console.log("fetch failed", error)
    }
}

getBlog()

async function getBlog2() {
    try{
const fetchblog2 = await fetch('http://localhost:4000/api/blog2')
const blog2 = await fetchblog2.json()
console.log("blog2 is", blog2); 

if (blog2.fullName) {
    fullTwo.textContent = blog2.fullName
    roleTwo.textContent = blog2.Role
    categoryTwo.textContent = blog2.Category
    descriptionTwo.textContent = blog2.Description
}
    } catch(error) {
console.log("fetch failed", error)
    }
}

getBlog2()

async function getBlog3() {
    try{
const fetchblog3 = await fetch('http://localhost:4000/api/blog3')
const blog3 = await fetchblog3.json()
console.log("blog3 is", blog3); 

if (blog3.fullName) {
    fullThree.textContent = blog3.fullName
    roleThree.textContent = blog3.Role
    categoryThree.textContent = blog3.Category
    descriptionThree.textContent = blog3.Description
}
    } catch(error) {
console.log("fetch failed", error)
    }
}

getBlog3()

async function getBlog4() {
    try{
const fetchblog4 = await fetch('http://localhost:4000/api/blog4')
const blog4 = await fetchblog4.json()
console.log("blog4 is", blog4); 

if (blog4.fullName) {
    fullFour.textContent = blog4.fullName
    roleFour.textContent = blog4.Role
    categoryFour.textContent = blog4.Category
    descriptionFour.textContent = blog4.Description
}
    } catch(error) {
console.log("fetch failed", error)
    }
}

getBlog4()

async function getBlog5() {
    try{
const fetchblog5 = await fetch('http://localhost:4000/api/blog5')
const blog5 = await fetchblog5.json()
console.log("blog5 is", blog5);

if (blog5.fullName) {
    fullFive.textContent = blog5.fullName
    roleFive.textContent = blog5.Role
    categoryFive.textContent = blog5.Category
    descriptionFive.textContent = blog5.Description
}
    } catch(error) {
console.log("fetch failed", error)
    }
}

getBlog5()

async function getBlog6() {
    try{
const fetchblog6 = await fetch('http://localhost:4000/api/blog6')
const blog6 = await fetchblog6.json()
console.log("blog6 is", blog6);

if (blog6.fullName) {
    fullSix.textContent = blog6.fullName
    roleSix.textContent = blog6.Role
    categorySix.textContent = blog6.Category
    descriptionSix.textContent = blog6.Description
}
    } catch(error) {
console.log("fetch failed", error)
    }
}

getBlog6()