
const read =(data = null)=>{
    let members;
    if(data){
        members = data
    }else{
        members = JSON.parse(localStorage.getItem('members')) || []
    }
    const tbody = document.getElementById('tbody')
    if(!tbody)return//prevent errors if element not found
    tbody.innerHTML = ''

    if(members.length === 0){
        tbody.innerHTML = "No ticket found"
        return
    }

    members.map((item, index)=>{
        const statusClass = item.status ? item.status.replace(/\s+/g, '-') : "Open-Ticket"
        const newRow = `
        <tr>
        <td data-label="Ticket ID">${item.id}</td>
        <td data-label="User Name">${item.userName}</td>
        <td data-label="User ID">${item.userID}</td>
        <td data-label="Issue">${item.issue}</td>
        <td data-label="Priority">${item.priority}</td>
        <td data-label="Description">${item.descrip}</td>
        <td data-label="Status">
        <span class="status-badge ${statusClass}">${item.status || "Open Ticket"}</span>
        </td>
        <td data-label="Action">
        <div class="action-btn">
        <button class="btn" onclick="update('${item.id}')">Update</button>
        </div>
        <td data-label="Delete"><button class="btn" onclick="del(${index})">Delete</button></td>
        </td>
        </tr>
        `
        tbody.innerHTML += newRow
    })
    const allMembers = JSON.parse(localStorage.getItem('members'))

    const openTicket = document.getElementById('open-ticket')
    const inProgress = document.getElementById('in-progress')
    const resolved = document.getElementById('resolved')

    const allOpenTicket = allMembers.filter((item)=> item.status === 'Open Ticket').length
    const allInProgress = allMembers.filter((item)=> item.status === "In Progress").length
    const allResolved = allMembers.filter((item)=> item.status === "Resolved").length
    
    if(openTicket)
        openTicket.textContent = allOpenTicket
    if(inProgress)
        inProgress.textContent = allInProgress
    if(resolved)
        resolved.textContent = allResolved
    }

   //filtter function
   const filterByStatus =()=>{
    let members = JSON.parse(localStorage.getItem('members'))
    const selectedStatus = document.getElementById('statusFilter').value
    if(selectedStatus === 'All'){
        read(members)
    }else{
        const filtered = members.filter((item)=> item.status === selectedStatus)
        read(filtered)
    }
   }

    const update =(id)=>{
        let members = JSON.parse(localStorage.getItem('members')) || []
        //we find a specific ticket first
        const ticket = members.find((item)=> String(item.id) === String(id))
        if(!ticket)
            return
        //use prompt that lists the options clearly
        const msg = `Current Status: ${ticket.status}\n\nChoose new status:
        \n1. Open Ticket\n2. In Progress\n3. Resolved`
        const choice = prompt(msg)
        let newStatus = ""
        switch(choice){
            case '1': newStatus = 'Open Ticket'
            break
            case '2': newStatus = 'In Progress'
            break
            case '3': newStatus = 'Resolved'
            break
            default:
                //If they type the word exactly, allow it
                if(['Open Ticket', 'In Progress', 'Resolved'].includes(choice)){
                    newStatus = choice
                }else{
                    alert('Invalid selection. Status not updated')
                    return
                }
        }
        members = members.map((item)=> String(item.id) === String(id) ? {...item, status: newStatus}: item)
        localStorage.setItem('members', JSON.stringify(members))
        read()
    }
    //delete function
    const del =(index)=>{
        let members = JSON.parse(localStorage.getItem('members')) || []
        members.splice(index, 1)
        localStorage.setItem('members', JSON.stringify(members))
        read()
    }
read()
