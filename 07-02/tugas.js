const table = document.createElement('table');
document.body.appendChild(table);
table.style.borderSpacing = '0'


const title = document.createElement('thead')
table.appendChild(title)
title.style.border = "1px solid #000"

const rowsTitle = document.createElement('tr')
title.appendChild(rowsTitle)
rowsTitle.style.border = "1px solid #000"

const tableData1 = document.createElement('th')
rowsTitle.appendChild(tableData1)
tableData1.innerText = 'Nama'
tableData1.style.border = "1px solid #000"

const tableData2 = document.createElement('th')
rowsTitle.appendChild(tableData2)
tableData2.innerText = 'Kelas'
tableData2.style.border = "1px solid #000"

const tableData3 = document.createElement('th')
rowsTitle.appendChild(tableData3)
tableData3.innerText = 'Nilai'
tableData3.style.border = "1px solid #000"

const body = document.createElement('tbody')
table.appendChild(body)
body.style.border = "1px solid #000"

const rowsBody1 = document.createElement('tr')
body.appendChild(rowsBody1)
rowsBody1.style.border = "1px solid #000"

const tableData4 = document.createElement('td')
rowsBody1.appendChild(tableData4)
tableData4.innerText = 'Maman'
tableData4.style.border = "1px solid #000"

const tableData5 = document.createElement('td')
rowsBody1.appendChild(tableData5)
tableData5.innerText = '11A'
tableData5.style.border = "1px solid #000"

const tableData6 = document.createElement('td')
rowsBody1.appendChild(tableData6)
tableData6.innerText = 80
tableData6.style.border = "1px solid #000"

const rowsBody2 = document.createElement('tr')
body.appendChild(rowsBody2)
rowsBody2.style.border = "1px solid #000"

const tableData7 = document.createElement('td')
rowsBody2.appendChild(tableData7)
tableData7.innerText = 'Joni'
tableData7.style.border = "1px solid #000"

const tableData8 = document.createElement('td')
rowsBody2.appendChild(tableData8)
tableData8.innerText = '11A'
tableData8.style.border = "1px solid #000"

const tableData9 = document.createElement('td')
rowsBody2.appendChild(tableData9)
tableData9.innerText = 75
tableData9.style.border = "1px solid #000"

const rowsBody3 = document.createElement('tr')
body.appendChild(rowsBody3)
rowsBody3.style.border = "1px solid #000"

const tableData10 = document.createElement('td')
rowsBody3.appendChild(tableData10)
tableData10.innerText = 'Michael'
tableData10.style.border = "1px solid #000"

const tableData11 = document.createElement('td')
rowsBody3.appendChild(tableData11)
tableData11.innerText = '11A'
tableData11.style.border = "1px solid #000"

const tableData12 = document.createElement('td')
rowsBody3.appendChild(tableData12)
tableData12.innerText = 95
tableData12.style.border = "1px solid #000"

const img = document.createElement('img')
body.appendChild(img)
img.id = "myImg"
img.src = "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg";
