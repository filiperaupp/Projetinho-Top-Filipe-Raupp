function consultaApi() {
    axios.get('https://pacific-earth-39167.herokuapp.com/codigo/panqueca')
        .then(function (response) {
            console.log(response.data);
            let objeto = response.data;
            document.querySelector("#latitude").innerHTML = `Latitude: ${objeto.cidade.lat}`;
            document.querySelector("#longitude").innerHTML = `Latitude: ${objeto.cidade.long}`;
        })
        .catch(function (error) {
            console.log(error);
        });

}
