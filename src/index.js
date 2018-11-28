// `<tr><td>*Insert College*</td> <td>*Insert Group Name*</td> <td>*Insert Membership*</td> <td>*Insert Division*</td> <td><img src='./assets/trophy.png' data-id='*put an id here*'/></td> </tr>`

const tableBody = document.querySelector('#table-body')
const winner = document.querySelector('#winner')

const render = () => {
  fetch('http://localhost:3000/a_cappella_groups')
    .then((r) => {
      return r.json()
    }).then((groups) => {
      // console.log(groups);

      for (let a = 0; a < groups.length; a++) {
        const newRow = document.createElement('tr')

        const collegeName = document.createElement('td')
        const groupName = document.createElement('td')
        const membershipName = document.createElement('td')
        const divisionName = document.createElement('td')
        const trophyImage = document.createElement('td')
        const trophyImg = document.createElement('img')

        trophyImg.src = './assets/trophy.png'
        trophyImg.setAttribute('data-id', 'trophy-image')

        trophyImage.addEventListener('click', () => {
          winner.innerHTML = `Winner: ${groups[a].name}`
          newRow.hidden = true
        })

        trophyImage.appendChild(trophyImg)

        collegeName.innerHTML = groups[a].college.name
        groupName.innerHTML = groups[a].name
        membershipName.innerHTML = groups[a].membership
        divisionName.innerHTML = groups[a].college.division

        newRow.appendChild(collegeName)
        newRow.appendChild(groupName)
        newRow.appendChild(membershipName)
        newRow.appendChild(divisionName)
        newRow.appendChild(trophyImage)

        tableBody.appendChild(newRow)
      }
    })
}

render()
