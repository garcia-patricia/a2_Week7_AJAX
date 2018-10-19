(()=> {
    function getData(){
        let targetURL = `./includes/connect.php?modelNo=${this.id}`;
        //event handler for car when clicked it would change modelNo=X

        fetch(targetURL) // go get the data and bring it back
        .then(res => res.json()) // turn the result into a plai JS object
        .then(data => {
            console.log(data);
        // run a function to parse our data
        showCarData(data[0]);
        }) // lets see what we got
        .catch(function(error){
        console.log(error); //if anything broke, log it into the console
        });
    }
    function showCarData(data){
        // parse the DB info and put it where it needs to go
        const {modelName, pricing, modelDetails} = data; // destructuring assignment => MDN JS destructuring

        // grab the elements we need,and populate them with the data
        document.querySelector('.modelName').textContent =  modelName;
        document.querySelector('.priceInfo').textContent =  `$ ${pricing}.00`;
        document.querySelector('.modelDetails').textContent =  modelDetails;

    }
    getData(); // trigger the getData function
})();

