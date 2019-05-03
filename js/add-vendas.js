
//Referência do Input
var enderecoVenda = document.getElementById('location-input');
// var numeroEndereco = document.getElementById('numeroEndereco');
// var bairroEndereco = document.getElementById('bairroEndereco');
var cepEndereco = document.getElementById('cepEndereco');
var racaPet = document.getElementById('racaPet');
var precoVenda = document.getElementById('precoVenda');
var infoComplementar = document.getElementById('infoComplementar');


document.getElementById('enviar').addEventListener('click', addVenda, false);
document.getElementById('enviar').addEventListener('click', converteEndereco, false);
//var geo = geocode(enderecoVenda.value);

function addVenda() {
    
geocoder = new google.maps.Geocoder();
  // objeto campeonato
//  console.log(geo);
  var vendas = {
    endereco: enderecoVenda.value,
   // lat: geo.latitude,
  // lng: geo.longitude,
    // numero: numeroEndereco.value,
    // bairro: bairroEndereco.value,
    cep: cepEndereco.value,
    raca: racaPet.value,
    preco: precoVenda.value,
    infoComplementar: infoComplementar.value
  }
//  console.log(vendas);
  firebase.database().ref().child('venda').push(vendas);
//    geocode(enderecoVenda);
}

// Call Geocode
//geocode();



function converteEndereco(enderecoVenda) {

  geocoder.geocode( enderecoVenda, function(resultado, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marcador = {
          	latitude: resultado[0].geometry.location.k
          ,longitude: resultado[0].geometry.location.D 
      }
      console.log(marcador);
       firebase.database().ref().child('location').push(marcador);
    } else {
      alert('Erro ao converter endereço: ' + status);
    }
  });
}











//function geocode(end){
//  // Prevent actual submit
//
//   var location = document.getElementById('location-input').value;
//  //var objlocalizacao = {};
//  axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
//    params:{
//      address:end,
//      key:'AIzaSyBO59mo6rMe4ChzmBqEQ8gz9QmWjg_X38c'
//    }
//  })
//  .then(function(response){
//    // Log full response
//
//    // // Formatted Address
//    // var formattedAddress = response.data.results[0].formatted_address;
//    //
//    // // Address Components
//    // var addressComponents = response.data.results[0].address_components;
//
//    // Geometry
//    var enderecolocalizacao = {};
//    latitude = response.data.results[0].geometry.location.lat;
//    longitude = response.data.results[0].geometry.location.lng;
//    
//    
//      firebase.database().ref().child('location').push(objlocalizacao);
//    
//      console.log(objlocalizacao);
//      return objlocalizacao;
//  })
//  .catch(function(error){
//    console.log(error);
//  });
//}
