# 2020 Durga Puja Registration Website

This is a website designed for [Utsav Inc.](https://utsavsac.org) for registry of options with Coronavirus Liabilty Release form integrated.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)

## Installation

Download this project
### Using Git
Run the following:
```sh
git clone https://github.com/kidsonfilms-python-rules/DP2020RegWebsite.git

# Then go into the root dir of the website
cd DP2020RegWebsite
```
### Using Link (below)
[Download Here](https://github.com/kidsonfilms-python-rules/DP2020RegWebsite/archive/master.zip)

## Usage

Replace our REST API with your own JS or HTTP Endpoint by replacing:

```js
// Our Code
function post(name, zipcode, email, driveby, prasad, bhog, members) {
  const http = new XMLHttpRequest();
  const url = 'https://us-central1-project-delta-db6b3.cloudfunctions.net/postRegDetails'
  http.open("POST", url, true);
  http.setRequestHeader('Content-type', 'application/json');
  //...
  http.send(
    `{
      "name": "${name}",
      "zipcode": "${zipcode}",
      "email": "${email}",
      "driveby": ${driveby},
      "prasad": ${prasad},
      "bhog": ${bhog},
      "members": "${members}"
      }`
  );
  http.onreadystatechange = (e) => {
    console.log(http.responseText + e)
  }
}

```
with your logic to handel your data:
```js
function post(name, zipcode, email, driveby, prasad, bhog, members) {
  // Your logic to handel the above varibles passed
}
```
Then just deploy to your server (ready to be deployed on [GitHub Pages](https://pages.github.com/) out of the box)

## Support

Please [open an issue](https://github.com/kidsonfilms-python-rules/DP2020RegWebsite/issues/new) for support.

## Contributing

We are not currently open to contributions. Open a pull request and we will review it.