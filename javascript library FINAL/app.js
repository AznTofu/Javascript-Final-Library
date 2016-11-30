let books = [
{author: 'Thomas Pynchon', title: 'Bleeding Edge', genre: 'fiction', copies: 2},
{author: 'Haruki Murakami', title: '1Q84', genre: 'fiction', copies: 2},
{author: 'John D MacDonald', title: 'Nightmare in Pink', genre: 'mystery', copies: 1},
{author: 'Ncholas Zakas', title: 'Understanding Ecmascript 6', genre: 'javascript', copies: 1},
{author: 'Thomas Phillips', title: 'Long Slow Distance', genre: 'fiction', copies: 1},
{author: 'J.K Rowling', title: 'Harry Potter and the Order of the Phoenix', genre: 'fiction', copies: 3},
{author: 'Haruki Murukami', title: 'Kafka on the Shore', genre: 'fiction', copies: 2},
{author: 'H.P Lovecraft', title: 'The Call of Cthulhu', genre: 'fiction', copies: 3}
]

let users = []

function search() {
	let type = document.getElementById('type').value
	let search = document.getElementById('searchBook').value
	let name
	// filtering by each category option
	if (type === "author") {
		name = books.filter((x) => x.author.indexOf(search) !== -1)
	} else if ( type === "title") {
		name = books.filter((x) => x.title.indexOf(search) !== -1)
	} else if ( type === "genre") {
		name = books.filter((x) => x.genre.indexOf(search) !== -1)
	}

	// output for when a searched item is found
	if (name.length > 0) {
		hideAllBooks('result')
		name.forEach((x) => {
			let listItem = document.createElement('li')
			let textnode = document.createTextNode(`${x.title} by ${x.author} in ${x.genre}`)
			listItem.appendChild(textnode)
			document.getElementById('result').appendChild(listItem)
		}) 
		// output when searched item is not found
	} else {
		hideAllBooks('result')
		let listItem = document.createElement('li')
		let textnode = document.createTextNode(`sorry your search for ${search} returned 0 books`)
		listItem.appendChild(textnode)
		document.getElementById('result').appendChild(listItem)
	}
}

// event listeners
document.getElementById('enter').addEventListener('click', search)

function hideAllBooks (id) {
	document.getElementById(id).innerHTML = ''
}

// defining elements that are in userInfo
function userInfo(name, email, password) {
	this.name=name
	this.email=email
	this.password=password
}

// Sign up function, stores the value of each field of input into an array
function signUp() {
	let user = document.getElementById('userName').value
	let mail = document.getElementById('email').value
	let pWord = document.getElementById('password').value

	let newUser = {name: user, email: mail, password: pWord}
	users.push(newUser)

	// empties out the input by assigning blank value to each field
	document.getElementById('userName').value = ""
	document.getElementById('email').value = ""
	document.getElementById('password').value = ""

	console.log(users)
}

// A function to post more than one review
function post() {
	// get the value from each field
	let name = document.getElementById('name').value
	let subject = document.getElementById('subject').value
	let review = document.getElementById('review').value

	// creating a new h4 tag with the title "Name:" in the index everytime a new submission is made
	let newH4 = document.createElement('h4')
	let newText = document.createTextNode("Name:" + " " + name)
	newH4.appendChild(newText)
	document.getElementById('submission').appendChild(newH4)

	// creating a new p tag with the title "Subject:" in the index everytime a new submission is made
	let newP1 = document.createElement('p')
	newText = document.createTextNode("Subject:" + " " +  subject)
	newP1.appendChild(newText)
	document.getElementById('submission').appendChild(newP1)

	// creating a new p tag with the title "Review:" in the index everytime a new submission is made
	let newP2 = document.createElement('p')
	newText = document.createTextNode("Review:" + " " + review)
	newP2.appendChild(newText)
	document.getElementById('submission').appendChild(newP2)

	// emptying out the field to allow new input
	document.getElementById('name').value = ""
	document.getElementById('subject').value = ""
	document.getElementById('review').value =""
}
