$burgers = $("#burger-container");

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

function trimID(textID) {
    const splitID = textID.split("-");

    const id = parseInt(splitID[splitID.length - 1]);

    return id;
}