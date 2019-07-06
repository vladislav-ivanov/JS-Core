function solve () {
    let table = document.querySelector('table')
    let message = document.querySelector('#check p')
   
    let [quickCheck, clear] = document.querySelectorAll('button')
   
    quickCheck.addEventListener('click', validateSudoku)
    clear.addEventListener('click', clearData)
   
    function validateSudoku () {
      let rows = Array.from(document.querySelectorAll('tbody tr')).map(x =>
        Array.from(
          new Set(Array.from(x.querySelectorAll('input')).map(y => +y.value))
        )
      )
   
      let cols = [
        Array.from(new Set([rows[0][0], rows[1][0], rows[2][0]])),
        Array.from(new Set([rows[0][1], rows[1][1], rows[2][1]])),
        Array.from(new Set([rows[0][2], rows[1][2], rows[2][2]]))
      ]
   
      if (rows.every(x => x.length === 3) && cols.every(x => x.length === 3)) {
        table.style.border = '2px solid green'
        message.textContent = 'You solve it! Congratulations!'
        message.style.color = 'green'
      } else {
        table.style.border = '2px solid red'
        message.textContent = 'NOP! You are not done yet...'
        message.style.color = 'red'
      }
    }
   
    function clearData () {
      Array.from(document.querySelectorAll('input')).forEach(d => (d.value = ''))
      table.style.border = 'none'
      message.textContent = ''
    }
  }