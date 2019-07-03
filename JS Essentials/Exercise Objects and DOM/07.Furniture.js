function solve () {
    let [input, output] = Array.from(document.querySelectorAll('textarea'))
    let [generate, buy] = Array.from(document.querySelectorAll('button'))
    let tbody = document.querySelector('tbody')
   
    generate.addEventListener('click', function () {
      let furnitureData = JSON.parse(input.value)
   
      furnitureData.forEach(data => {
        let [tdImage, tdName, tdPrice, tdDecFactor, tdMark] = Array.from(
          { length: 5 },
          () => document.createElement('td')
        )
   
        let image = document.createElement('img')
        image.src = data.img
        tdImage.appendChild(image)
   
        let [name, price, decFactor] = Array.from({ length: 3 }, () =>
          document.createElement('p')
        )
        name.textContent = data.name
        tdName.appendChild(name)
        price.textContent = data.price
        tdPrice.appendChild(price)
        decFactor.textContent = data.decFactor
        tdDecFactor.appendChild(decFactor)
   
        let mark = document.createElement('input')
        mark.type = 'checkbox'
        tdMark.appendChild(mark)
   
        let tr = document.createElement('tr')
        tr.appendChild(tdImage)
        tr.appendChild(tdName)
        tr.appendChild(tdPrice)
        tr.appendChild(tdDecFactor)
        tr.appendChild(tdMark)
        tbody.appendChild(tr)
      })
    })
   
    buy.addEventListener('click', function () {
      let [furniture, totalPrice, avgDecFactor] = [[], 0, 0]
   
      let checked = Array.from(tbody.children).filter(
        x => x.querySelector('input').checked
      )
      checked.forEach(tr => {
        let [name, price, decFactor] = Array.from(tr.children)
          .filter(x => x.querySelector('p'))
          .map(x => x.querySelector('p').textContent)
   
        furniture.push(name)
        totalPrice += +price
        avgDecFactor += +decFactor
      })
   
      avgDecFactor /= checked.length
   
      output.value = `Bought furniture: ${furniture.join(
        ', '
      )}\nTotal price: ${totalPrice.toFixed(
        2
      )}\nAverage decoration factor: ${avgDecFactor}`
    })
  }