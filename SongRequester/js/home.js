fetch('../database/requests.json')
  .then(res => res.json())
  .then(json => {
    console.log(json.requests)
})

// var homecard = document.createElement("div").classList.add('homecard')
// var row = document.createElement("div").classList.add('row')
// var votediv = document.createElement("div").classList.add('votediv')
// var upvote = document.createElement("span").classList.add('vote')
// var downvote = document.createElement("span").classList.add('vote')
// var votes = document.createElement("div").classList.add('_1rZYMD_4xY3gRcSS3p8ODO').style.color = "#D7DADC"
// var homecardbody = document.createElement("div").classList.add('homecardbody')
// var column = document.createElement("div").classList.add('column')
// var requestedP = document.createElement("p")
// var requestedTitle = document.createElement("h3")


for (const btn of document.querySelectorAll('.vote')) {
    btn.addEventListener('click', event => {
    //   btn.classList += ' voteActive'
    if (!btn.classList.contains('voteActive')) {
        btn.classList += ' voteActive'
    } else {
        btn.classList.remove('voteActive')
    }
    });
}