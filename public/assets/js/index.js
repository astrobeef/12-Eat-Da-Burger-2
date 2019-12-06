$burgers = $("#burger-container");
$burgerInput = $("#input-burger");
$burgerSubmit = $("#submit-burger");

const API = {
    setEaten: function (id) {
        return $.ajax({
            url: `api/burgers/${id}`,
            type: "PUT",
            data: {
                "devoured" : true
            }
        }).then(function(){
            location.reload();
        });
    },
    addBurger: function(burgerName){
        return $.ajax({
            url: `api/burgers/${burgerName}`,
            type : "POST",
            data : {
                "burger_name" : burgerName
            }
        }).then(function(){
            location.reload();
        });
    }
};

$burgers.click(function (event) {

    burgerID = trimID($(event.target).attr("id"));

    if (!isNaN(burgerID)) {
        
        API.setEaten(burgerID);

        console.log(`ID found, eating burger with ID ${burgerID}`)
    }
    else{
        console.warn("no ID attached");
    }

})

$burgerSubmit.click(function(event){

    burgerName = $burgerInput.val().trim();

    console.log(burgerName);

    API.addBurger(burgerName);

})

function trimID(textID) {
    const splitID = textID.split("-");

    const id = parseInt(splitID[splitID.length - 1]);

    return id;
}