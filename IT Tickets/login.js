let members = []//empty array
const userName = document.getElementById('username')
const userID = document.getElementById('userID')
const issue = document.getElementById('issue')
const descrip = document.getElementById('description')
const priority = document.getElementById('priority')
const signInBtn = document.getElementById('btn2')

signInBtn.addEventListener('click', (event)=>{
  event.preventDefault()
  userVal = userName.value
  userkey = userID.value
  issueVal = issue.value
  descriptionVal = descrip.value
  prioVal = priority.value

  if(userVal === ''|| userkey === ''|| issueVal === ''|| descriptionVal === ''|| prioVal === ''){
    alert("Fill in all fields")
    return
  }
  let member = JSON.parse(localStorage.getItem('members')) || []
    const newMembers = {
      id: String(Date.now()),
      userName: userVal,
      userID: userkey,
      issue: issueVal,
      descrip: descriptionVal,
      status: "Open Ticket",
      priority: prioVal
    }
    member.push(newMembers)
    localStorage.setItem('members', JSON.stringify(member))
    alert("Ticket received")
    userName.value = ''
    userID.value = ''
    issue.value = ''
    descrip.value = ''
    priority.value = ''
    setTimeout(()=>{
      window.location.href = 'dashboard.html'
    }, 2000)
})

async function readData() {
  let savedData = localStorage.getItem("members");
  if (savedData) {
    console.log("Fetching data from local storage");
  } else {
    console.log("Local storage is empty");
  }
  try {
    const res = await fetch("ticket.json");
    const data = await res.json();
    members = data;
  } catch (error) {
    console.error("Failed to fetch data from JSON File:", error);
  }
}
readData();