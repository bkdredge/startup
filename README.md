# startup
For CS 260, Winter 2023

Make sure to follow the pull, commit, push pattern!
PITCH: If you've tried apps like Duolingo, Pimsleur or Babble, you probably share the same frustrations as all of us. "It's way too slow. The courses are rigid. The owl kept threatening me. It's fun but I suck at speaking Japanese." Luckily for us, there is faster and funner way to learn a foreign language! Enter: Cure Monolingualism. It's an online game that tests and grows your ability to write and speak in your desired language. It's like Duolingo and The Most Dangerous Writing App had a baby! In fact, it is so heavy on your output that it only rewards you when you write and speak complete sentences using words that you are recently learning. You can adjust your fluency level so that you are right on track with your learning goals. You are learning along with thousands of other users around the world who are striving to rack up as many points as they can, week by week. And the real kicker is that even after 15 minutes of it, you can expect to have written 2000 words in your desired language, and have used at least 50 new words and phrases to keep in your vocabulary. -- So, want to cure monolingualism -- in the world, and in yourself? Get on curemonolingualism.com.

FEATURES: Customizable settings for writing/speaking prompts, including the following: language, fluency level (according to ACTFL), point level, topics. You can opt out of a particular prompt. A timer and a checker for spelling and grammar are included. The user may look back at words used and learned through prompts, and see their point values. There is a leaderboard which counts the points of other users. The user may refer to a dictionary on the system when stuck on prompts; they can also get other help on the prompts by clicking the button. Prompts and vocabulary and phrases are assigned by fluency level. The complexity of the prompts correspond to the difficulty of the prompts; that is, the user may progress through the use of higher volumes of words and phrases with higher point values for their prompts.

LEARNINGS:

[CONSOLE]
- mkdir make directory
- rmdir remove directory
- echo output parameters of command
- cd change directory
- rm remove files
- mv move files
- cp copy files
- ls list files
- curl command line client URL browser
- grep regular expression search
- find find files
- df view disk statistics
- cat output contents of file (can open HTML, etc)
- ssh create a secure shell on a remote computer
- tracert trace connections to a website
- man look up command in manual
- // top, less, wc, kill, sudo, scp, history, ping, dig

example: ls -l | grep ' Nov ' | wc -l
- CTRL+R use type ahead to find previous commands
- CTRL+C kill the currently running command

example:
    mkdir junk
    cd junk
    pwd
    ls
    ls -la
    ls ../
    echo "hello world" > test.txt
    ls -l
    cat test.txt
    cp test.txt other.txt
    ls
    cat test.txt >> other.txt
    less other.txt # press `q` to exit less
    rm test.txt
    ls
    cd ..
    ls
    rm -rf junk
    ls

[GitHub]

example:
git clone https://github.com/webprogramming260/startup-example.git
cd startup-example
// git pull]
// change code
printf "\nChange from my development environment!\n" >> README.md
git commit -am "update(notes) thoughts about start up applications"
git push
git config --global user.email "you@example.com"
git config --global user.name "Your name"

example:
// merge conflict
git fetch
git status
git pull
git commit -am "merge(notes) combined both edits"
git push

[AWS]
- AWS Services makes it possible to run an actual web server for a super low cost! That's awesome! It was neat to be able to access the server through shell. ssh -i ~/keys/production.pem ubuntu@53.104.2.123 (example of what to do)
- AWS Services also makes it possible to purchase a domain name for a cheap price. And I could get any subdomain as welL! This is wonderful! --> Route 53 on AWS, Domains -> Registered Domains, and then Hosted Zones

Service / Purpose / Estimated Cost
EC2 / Server / t3.nano $3.50/month, t3.micro $7/month, t3.small $14/month
EC2 Elastic IP / Keep IP address between reboots / first free is associated with running server, $3.50 a month otherwise
Route 53 / Domain name / $3/year for click TLD, more for others
Route 53 / DNS records / $0.50 per month for each root domain

example:
ssh -i [key pair file] ubuntu@[ip address]
ssh -i ~/keys/production.pem ubuntu@53.104.2.123
 `chmod  600 [key pair file]`
 ls -l
 
 total 4
lrwxrwxrwx 1 ubuntu ubuntu   20 Nov 17 23:03 Caddyfile -> /etc/caddy/Caddyfile
lrwxrwxrwx 1 ubuntu ubuntu   16 Nov 17 03:42 public_html -> /usr/share/caddy
drwxrwxr-x 6 ubuntu ubuntu 4096 Nov 30 22:42 services

[Security]
- Caddy helps with web security. I can use sudo commands to do this!
- Make sure the deploy shell files are in the right repositories. Fork, then clone. Git pull to update local development (Git Bash), nano to open a file, ./ to execute a deploy file. Git push when you're done, and git commit -m "{message}" as well!

example:
ssh -i ~/keys/production.pem ubuntu@myfunkychickens.click
cd ~
sudo vi Caddyfile
[cat?]
:wq
sudo service caddy restart


[HTML/CSS/JavaScript]
- Look for HTML/CSS/JavaScript things on the web to try new things!
- CSS Organization is easier with classes (HTML class = ""; CSS .class) and identifiers (HTML id = ""; CSS #id). I can easily find inspiration for animations, and find pngs that have transparency to create interesting parallax effects.
- Use CSS Grid and Flex to assist in page organization. @media can be used to reorganize the page depending on width and height of window resolution.
- Make sure to use a command on gitbash like "./deployFiles.sh -k ~/.ssh/production331100.pem -h curemonolingualism.click -s simon" to make changes to your website. Use bootstrap! And incorporate CSS! If possible, try to set aside navigation elements on a separate file so that you don't have to change them so much!
- Find out how to make new things using W3Schools and Geeks for Geeks.

example (HTML Attributes):
<p id="hello" class="greeting">Hello world</p>

example (HTML Hyperlink):
<a href="https://byu.edu">Go to the Y</a>

examples (HTML element):
html, head, title, meta, script, include, body, header, footer, nav, main, section, aside, div, span, h1-9, p, b, table, tr, td, ol, ul, li, a, img, dialog, form, input, audio, video, svg, iframe

examples (HTML elements):
form Input container and submission <form action="form.html" method="post">
fieldset	Labeled input grouping	<fieldset> ... </fieldset>
input	Multiple types of user input	<input type="" />
select	Selection dropdown	<select><option>1</option></select>
optgroup	Grouped selection dropdown	<optgroup><option>1</option></optgroup>
option	Selection option	<option selected>option2</option>
textarea	Multiline text input	<textarea></textarea>
label	Individual input label	<label for="range">Range: </label>
output	Output of input	<output for="range">0</output>
meter	Display value with a known range	<meter min="0" max="100" value="50"></meter>

example (HTML element, textarea):
  <form action="submission.html" method="post">
  <label for="ta">TextArea: </label>
  <textarea id="ta" name="ta-id">
Some text
  </textarea>
  <button type="submit">Submit</button>
</form>
  
example (HTML element, image, audio, video, svg, canvas):
  <img
  alt="mountain landscape"
  src="https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg"
/>
  <audio controls src="testAudio.mp3"></audio>
  <video controls width="300" crossorigin="anonymous">
  <source
    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  />
</video>
  <svg
  viewBox="0 0 300 200"
  xmlns="http://www.w3.org/2000/svg"
  stroke="red"
  fill="red"
  style="border: 1px solid #000000"
>
  <circle cx="150" cy="100" r="50" />
</svg>
  <canvas
  id="canvasDemo"
  width="300"
  height="200"
  style="border: 1px solid #000000"
></canvas>
<script>
  const ctx = document.getElementById('canvasDemo').getContext('2d');
  ctx.beginPath();
  ctx.arc(150, 100, 50, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.strokeStyle = 'red';
  ctx.fill();
  ctx.stroke();
</script>
  
example (deploying Website):
  ./deployWebsite.sh  -k ~/keys/production.pem -h funkychickens.click
  ./deployFiles.sh -k ~/keys/production.pem -h yourdomain.click -s simon
  
example (HTML page):
<body>
  <p>Body</p>
  <header>
    <p>Header - <span>Span</span></p>
    <nav>
      Navigation
      <div>Div</div>
      <div>Div</div>
    </nav>
  </header>

  <main>
    <section>
      <p>Section</p>
      <ul>
        <li>List</li>
        <li>List</li>
        <li>List</li>
      </ul>
    </section>
    <section>
      <p>Section</p>
      <table>
        <tr>
          <th>Table</th>
          <th>Table</th>
          <th>Table</th>
        </tr>
        <tr>
          <td>table</td>
          <td>table</td>
          <td>table</td>
        </tr>
      </table>
    </section>
    <aside>
      <p>Aside</p>
    </aside>
  </main>

  <footer>
    <div>Footer - <span>Span</span></div>
  </footer>
</body>
  
example (CSS):
  
  body {
  margin: 2rem;
  padding: 0;
  font-family: system-ui;
  background-color: $clr-bg;
}

.title {
  width: 100%;
  text-align: center;
  color: $clr-fg;
}

.section-title {
  display: none;
}

.demos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;  
}

.description {
  margin: 0 auto;
  color: $clr-fg;
  max-width: 55ch;
}
  
  @media (orientation: portrait) {
  main {
    flex-direction: column;
  }
}

@media (max-height: 700px) {
  header {
    display: none;
  }
  footer {
    display: none;
  }
}
  
example (HTML Bootstrap):
  
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
  </head>
  <body>
    ...
  </body>
</html>

example (HTML Bootstrap):
  <body>
  ...

  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
    crossorigin="anonymous"
  ></script>
</body>
  
example (HTML Bootstrap), run on console:
  npm install bootstrap@5.2.3
<button type="button" class="btn btn-primary">Bootstrap</button>
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-danger" disabled>Danger</button>
      <button type="button" class="btn btn-outline-dark">Outline</button>
      <button type="button" class="btn btn-success" data-bs-toggle="button">Toggle button</button>
      <a class="btn btn-warning" href="#typography" role="button">Link</a>
    </div>

    <div id="card" class="demo-box">
      <h2>Card</h2>
      <div class="card" style="width:300px">
        <img class="card-img-top" src="https://picsum.photos/300/200" />

        <div class="card-body">
          <h5 class="card-title">Card title <span class="badge bg-secondary">New</span></h5>
          <p class="card-text">Lorem ipsum dolor sit amet, consec adipiscing elit</p>
  
example (DOM):
const el = document.querySelector('.injected');
el.innerHTML = '<p class="injected"><b>Instructions: </b><ol><li>Choose your options.</li><li>Write according to your prompt</li><li>Submit! And repeat!</li> </p>';

const submitDataEl = document.querySelector('.options');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});

[JavaScript]

example (type , construct):
2 + '3';
// OUTPUT: '23'
2 * '3';
// OUTPUT: 6
[2] + [3];
// OUTPUT: '23'
true + null;
// OUTPUT: 1
true + undefined;
// OUTPUT: NaN

example (loops):
for (let i = 0; i < 2; i++) {
  console.log(i);
}
// OUTPUT: 0 1
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 2);
// OUTPUT: 0 1
let i = 0;
while (i < 2) {
  console.log(i);
  i++;
}
// OUTPUT: 0 1
const obj = { a: 1, b: 'fish' };
for (const name in obj) {
  console.log(name);
}
// OUTPUT: a
// OUTPUT: b
const arr = ['a', 'b'];
for (const name in arr) {
  console.log(name);
}
// OUTPUT: 0
// OUTPUT: 1
const arr = ['a', 'b'];
for (const val of arr) {
  console.log(val);
}
// OUTPUT: 'a'
// OUTPUT: 'b'
let i = 0;
while (true) {
  console.log(i);
  if (i === 0) {
    i++;
    continue;
  } else {
    break;
  }
}
// OUTPUT: 0 1

example (functions):

function hello(who) {
  return 'hello ' + who;
}

function hello(who) {
  who.count++;
  console.log('hello ' + who.name);
}

hello({ name: 'world', count: 0 });
// OUTPUT: hello world

function labeler(value, title = 'title') {
  console.log(`${title}=${value}`);
}

labeler();
// OUTPUT: title=undefined

labeler('fish');
// OUTPUT: title=fish

labeler('fish', 'animal');
// OUTPUT: animal=fish

// Function that takes a function as a parameter
function doMath(operation, a, b) {
  return operation(a, b);
}

// Anonymous function assigned to a variable
const add = function (a, b) {
  return a + b;
};

console.log(doMath(add, 5, 3));
// OUTPUT: 8

// Anonymous function assigned to a parameter
console.log(
  doMath(
    function (a, b) {
      return a - b;
    },
    5,
    3
  )
);
// OUTPUT: 2

// Anonymous declaration of the function that is later assigned to a variable
const add = function (a, b) {
  return a + b;
};

// Function that logs as a side effect of its execution
function labeler(label, value) {
  console.log(label + '=' + value);
}

// Function that takes a function as a parameter and then executes the function as a side effect
function addAndLabel(labeler, label, adder, a, b) {
  labeler(label, adder(a, b));
}

// Passing a function to a function
addAndLabel(labeler, 'a+b', add, 1, 3);
// OUTPUT: a+b=4

// Function that returns a function
function labelMaker(label) {
  return function (value) {
    console.log(label + '=' + value);
  };
}

// Assign a function from the return value of the function
const nameLabeler = labelMaker('name');

// Calling the returned function
nameLabeler('value');
// OUTPUT: name=value

function labeler(value) {
  function stringLabeler(value) {
    console.log('string=' + value);
  }
  function numberLabeler(value) {
    console.log('number=' + value);
  }

  if (typeof value == 'string') {
    stringLabeler(value);
  } else if (typeof value == 'number') {
    numberLabeler(value);
  }
}

labeler(5);
// OUTPUT: number=5

labeler('fish');
// OUTPUT: string=fish

example (arrow function):

const a = [1, 2, 3, 4];

// standard function syntax
a.sort(function (v1, v2) {
  return v1 - v2;
});

// arrow function syntax
a.sort((v1, v2) => v1 - v2);

() => 3;
// RETURNS: 3

() => {
  3;
};
// RETURNS: undefined

() => {
  return 3;
};
// RETURNS: 3

function makeClosure(a) {
  a = 'a2';
  const b = 'b2';
  return () => [a, b];
}

const a = 'a';
const b = 'b';

const closure = makeClosure(a);

console.log(closure());
// OUTPUT: ['a2', 'b2']

console.log(a, b);
// OUTPUT: 'a' 'b'

example (array):

const a = [1, 2, 3];
console.log(a[1]);
// OUTPUT: 2

console.log(a.length);
// OUTPUT: 3

const a = [1, 2, 3];

console.log(a.map((i) => i + i));
// OUTPUT: [2,4,6]
console.log(a.reduce((v1, v2) => v1 + v2));
// OUTPUT: 6
console.log(a.sort((v1, v2) => v2 - v1));
// OUTPUT: [3,2,1]

a.push(4);
console.log(a.length);
// OUTPUT: 4

Function	Meaning	Example
push	Add an item to the end of the array	a.push(4)
pop	Remove an item from the end of the array	x = a.pop
slice	Return a sub-array	a.slice(1,-1)
sort	Run a function sort an array in place	a.sort((a,b) => b-a)
values	Creates an iterator for use with a for of loop	for (i of a.values()) {...}
find	Find the first item satisfied by a test function	a.find(i => i < 2)
forEach	Run a function on each array item	a.forEach(console.log)
reduce	Run a function to reduce each array item to a single item	a.reduce((a, c) => a + c)
map	Run a function to map an array to a new array	a.map(i => i+i)
filter	Run a function to remove items	a.filter(i => i%2)
every	Run a function to test if all items match	a.every(i => i < 3)
some	Run a function to test if any items match	a.some(i => 1 < 1)

example(object, classes):

const obj = new Object();

obj.c = [1, 2, 3];
obj.hello = function () {
  console.log('hello');
};

console.log(obj);
// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}

const obj = {
  a: 3,
  b: 'fish',
};

const obj = {
  a: 3,
  b: 'fish',
};

console.log(Object.entries(obj));
// OUTPUT: [['a', 3], ['b', 'fish']]
console.log(Object.keys(obj));
// OUTPUT: ['a', 'b']
console.log(Object.values(obj));
// OUTPUT: [3, 'fish']

example (constructor):

function Person(name) {
  return {
    name: name,
  };
}

const p = new Person('Eich');
console.log(p);
// OUTPUT: {name: 'Eich'}

function Person(name) {
  return {
    name: name,
    log: function () {
      console.log('My name is ' + this.name);
    },
  };
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich

example (classes):

class Person {
  constructor(name) {
    this.name = name;
  }

  log() {
    console.log('My name is ' + this.name);
  }
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich

class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }
}

const p = new Person('Eich');
p.#name = 'Lie';
// OUTPUT: Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class

example (inheritance):

class Person {
  constructor(name) {
    this.name = name;
  }

  print() {
    return 'My name is ' + this.name;
  }
}

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  print() {
    return super.print() + '. I am a ' + this.position;
  }
}

const e = new Employee('Eich', 'programmer');
console.log(e.print());
// OUTPUT: My name is Eich. I am a programmer

example (regex):

const objRegex = new RegExp('ab*', 'i');
const literalRegex = /ab*/i;

const petRegex = /(dog)|(cat)|(bird)/gim;
const text = 'Both cats and dogs are pets, but not rocks.';

text.match(petRegex);
// RETURNS: ['cat', 'dog']

text.replace(petRegex, 'animal');
// RETURNS: Both animals and animals are pets, but not rocks.

petRegex.test(text);
// RETURNS: true

example (rest):

function hasNumber(test, numbers) {
  return numbers.some((i) => i === test);
}

const a = [1, 2, 3];
hasNumber(2, a);
// RETURNS: true

function hasTwo(a, b, c) {
  return hasNumber(2, [a, b, c]);
}

function hasNumber(test, ...numbers) {
  return numbers.some((i) => i === test);
}

hasNumber(2, 1, 2, 3);
// RETURNS: true

example (spread):

function person(firstName, lastName) {
  return { first: firstName, last: lastName };
}

const p = person(...['Ryan', 'Dahl']);
console.log(p);
// OUTPUT: {first: 'Ryan', last: 'Dahl'}

example (destructuring):

const a = [1, 2, 4, 5];

// destructure the first two items from a, into the new variables b and c
const [b, c] = a;

console.log(b, c);
// OUTPUT: 1, 2

//----

const [b, c, ...others] = a;

console.log(b, c, others);
// OUTPUT: 1, 2, [4,5]

//----

const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a, c } = o;

console.log(a, c);
// OUTPUT 1, ['fish', 'cats']

//----

const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a: count, b: type } = o;

console.log(count, type);
// OUTPUT 1, animals

//----

const { a, b = 22 } = {};
const [c = 44] = [];

console.log(a, b, c);
// OUTPUT: undefined, 22, 44

//----

let a = 22;

[a] = [1, 2, 3];

console.log(a);
// OUTPUT: 1

example (exceptions):

try {
  // normal execution code
} catch (err) {
  // exception handling code
} finally {
  // always called code
}

//----

function connectDatabase() {
  throw new Error('connection error');
}

try {
  connectDatabase();
  console.log('never executed');
} catch (err) {
  console.log(err);
} finally {
  console.log('always executed');
}

// OUTPUT: Error: connection error
//         always executed

example (fallbacks, in exceptions):

function getScores() {
  try {
    const scores = scoringService.getScores();
    // store the scores so that we can use them later if the network is not available
    window.localStorage.setItem('scores', scores);
    return scores;
  } catch {
    return window.localStorage.getItem('scores');
  }
}

example (promises):

const delay = (msg, wait) => {
  setTimeout(() => {
    console.log(msg, wait);
  }, 1000 * wait);
};

new Promise((resolve, reject) => {
  // Code executing in the promise
  for (let i = 0; i < 3; i++) {
    delay('In promise', i);
  }
});

// Code executing after the promise
for (let i = 0; i < 3; i++) {
  delay('After promise', i);
}

// OUTPUT:
//   In promise 0
//   After promise 0
//   In promise 1
//   After promise 1
//   In promise 2
//   After promise 2

example (resolve, reject):

const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 10000);
});

console.log(coinToss);
// OUTPUT: Promise {<pending>}
  
console.log(coinToss);
// OUTPUT: Promise {<fulfilled>}
  
example (then, catch, finally):
  
  const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});
  
  coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed
  
example (async, await):

  const coinToss = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(Math.random() > 0.5 ? 'heads' : 'tails');
      } else {
        reject('fell off table');
      }
    }, 1000);
  });
};
  
  //----
  coinToss()
  .then((result) => console.log(`Toss result ${result}`))
  .catch((err) => console.error(`Error: ${err}`))
  .finally(() => console.log(`Toss completed`));
  
  //----
  try {
  const result = await coinToss();
  console.log(`Toss result ${result}`);
} catch (err) {
  console.error(`Error: ${err}`);
} finally {
  console.log(`Toss completed`);
}

example (async):
  
  async function cow() {
  return 'moo';
}
console.log(cow());
// OUTPUT: Promise {<fulfilled>: 'moo'}

example (await):
  
  console.log(cow());
// OUTPUT: Promise {<pending>}

console.log(await cow());
// OUTPUT: moo
  
example (await, async):
  
  const httpPromise = fetch('https://simon.cs260.click/api/user/me');
const jsonPromise = httpPromise.then((r) => r.json());
jsonPromise.then((j) => console.log(j));
console.log('done');

// OUTPUT: done
// OUTPUT: {email: 'bud@mail.com', authenticated: true}
  
  const httpResponse = await fetch('https://simon.cs260.click/api/user/me');
const jsonResponse = await httpResponse.json();
console.log(jsonResponse));
console.log('done');

// OUTPUT: {email: 'bud@mail.com', authenticated: true}
// OUTPUT: done
[UX Design]
- design as a story
- simplicity
- consistency
- navigation
- application map
-   device controls
-   breadcrumb
-   common actions
- colors
- typography
- iconography
- text
-   limiting line length
-   internationalization
-   space
- interaction
- images
- animation
- decision fatigue
- device aware
-   device size and orientation
- performance
- short circuit
- accessibility
- legal
-   HIPA (mgmt of med records), FERPA, ADA (disabilities), GDPR (protect data)
- walls
-   complexity, payment, application failure, security (CAPTCHA), legal walls

[MONGO]
- It works.
- It can be checked by putting js files in a convenient place for git to check.
- Go to MongoDB Atlas and Connect, Connect Your Application, copy "mongodb+srv://bd99:<password>@cluster0.y8vjhmc.mongodb.net/" into the file.
- SIMON works now!
