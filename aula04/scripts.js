var listafilmes = []
listafilmes.push ("https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYTlhNzJjYzYtNGU3My00ZDI5LTgzZDUtYzllYjU1ZmU0YTgwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg")

var listaNome = []
listaNome.push ("Mulher Maravilha", "Mulher Maravilha 1984","Liga da Justiça de Zack Snyder")

for (var i =0; i <listafilmes.length; i ++) {
  document.write('<div class = "catalogimg">' + '<img src =' + listafilmes[i] + ">" + '<span class = "title">' + listaNome[i] + "</span>" + "</div>")
}




//var filme1 = ""Mulher Maravilha""
//var filme2 = "Mulher Maravilha 1984"
//var filme3 = "Liga da Justiça de Zack Snyder"
