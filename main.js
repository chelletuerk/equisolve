const getData = () => {
  $.ajax({
    type: 'GET',
    url: `https://devtest.equisolve-dev.com/`,
    success: function(data) {
      sortDate(data)
    }
  })
}

const sortDate = (data) => {
  data.sort((a, b) => {
    let dateA = a.published_at.split('-').join('')
    let dateB = b.published_at.split('-').join('')
      if (dateA > dateB) {
        return -1
      }

      if (dateB < dateA) {
        return 1
      }
    })
  }

getData()
