const getData = () => {
  $.ajax({
    type: 'GET',
    url: `https://devtest.equisolve-dev.com/`,
    success: function(res) {
    console.log(res)
    }
  })
}

getData()
