$(document).ready(function () {

var gohan = {
    name: "Gohan",
    hp: 170,
    attackPower: 15,
    counter: 15,
    attackPowersub: 15,
    hpstat: ".gohan-hp",
    nameCall: ".gohan",
    enemies: []
};

var trunks = {
    name: "Trunks",
    hp: 200,
    attackPower: 6,
    counter: 17,
    attackPowersub: 6,
    hpstat: ".trunks-hp",
    nameCall: ".trunks"
};

var cell = {
    name: "Perfect Cell",
    hp: 220,
    attackPower: 8,
    counter: 22,
    attackPowersub: 8,
    hpstat: ".cell-hp",
    nameCall: ".cell"
};

var frieza = {
    name: "Frieza",
    hp: 180,
    attackPower: 12,
    counter: 12,
    attackPowersub: 12,
    hpstat: ".frieza-hp",
    nameCall: ".frieza"
};

$(".frieza-hp").text("HP: " + frieza.hp);
$(".cell-hp").text("HP: " + cell.hp);
$(".gohan-hp").text("HP: " + gohan.hp);
$(".trunks-hp").text("HP: " + trunks.hp);

var initialize

var isAttacker = "";

var isDefender = "";

var attacker = "";

var defender = "";

var reset = ".enemyRow"

//When user clicks on gohan
$(".gohan").on("click", function() {
    //if there is already a defender chosen, do nothing
    if (isDefender) {
        return false;
    }
    
    
    //
    else if (attacker && attacker.name !== gohan.name) {
        isDefender = true;
        defender = gohan;
        $(".gohan").appendTo(".defender");
        console.log(defender);
        $(".defender").show();
        $("h5").text("Prepare to fight");
    }

    
    else {
        isAttacker = true;
        $(".cell").appendTo(".enemyRow");
        $(".trunks").appendTo(".enemyRow");
        $(".frieza").appendTo(".enemyRow");
        attacker = gohan;
        console.log(attacker);
        $("h5").text("Select a defender");
    };

});

$(".trunks").on("click", function() {
    if (isDefender) {
        return false;
    }

    else if (attacker && attacker.name !== trunks.name) {
        isDefender = true;
        defender = trunks;
        $(".trunks").appendTo(".defender")
        console.log(trunks);
        $(".defender").show();
        $("h5").text("Prepare to fight");
    }

    else {
        isAttacker = true
        $(".cell").appendTo(".enemyRow")
        $(".gohan").appendTo(".enemyRow")
        $(".frieza").appendTo(".enemyRow")
        attacker = trunks;
        console.log(attacker);
        $("h5").text("Select a defender");
    }

});

$(".cell").on("click", function() {
    if (isDefender) {
        return false;
    }

    else if (attacker && attacker.name !== cell.name) {
        isDefender = true;
        defender = cell;
        $(".cell").appendTo(".defender")
        $(".defender").show();
        console.log(defender);
        $("h5").text("Prepare to fight");
    }

    else {
        isAttacker = true;
        $(".gohan").appendTo(".enemyRow")
        $(".trunks").appendTo(".enemyRow")
        $(".frieza").appendTo(".enemyRow")
        attacker = cell;
        console.log(attacker);
        $("h5").text("Select a defender");
    }
});

$(".frieza").on("click", function() {
    if (isDefender) {
        return false;
    }

    else if (attacker && attacker.name !== frieza.name) {
        isDefender = true;
        defender = frieza;
        $(".frieza").appendTo(".defender")
        $(".defender").show();
        console.log(defender);
        $("h5").text("Prepare to fight");
    }

    else {
        isAttacker = true;
        $(".cell").appendTo(".enemyRow")
        $(".trunks").appendTo(".enemyRow")
        $(".gohan").appendTo(".enemyRow")
        attacker = frieza;
        console.log(attacker);
        $("h5").text("Select a defender");
    }
});


//Create a function for the click button that causes you character to attack and the defender to counter attack. Also have it add the attack stat together so that it grows as the attacks increase.
$(".attack").on("click", function() {
        if (isDefender && isAttacker) {
            
            defender.hp -= attacker.attackPower;
            console.log(defender.hp)
            attacker.hp -= defender.counter;
            console.log(attacker.hp);
            attacker.attackPower += attacker.attackPowersub;
            console.log(attacker.attackPower);
            $("h5").text(attacker.name + " attacked " + defender.name + " for " + attacker.attackPower + " damage. " + defender.name + " counterattacked " + attacker.name + " for " + defender.counter + " damage." );
            $(attacker.hpstat).text("HP: " + attacker.hp); 
            
            $(defender.hpstat).text("HP: " + defender.hp);
        }

        else {
            return false;
        }
        
        //To bring in the next defender if the first is KO
        if (defender.hp <= 0) {
            isDefender = false;
           $(defender.nameCall).hide();
           $("h5").text(attacker.name + " has slain " + defender.name + ". Prepare for next battle!")

        }

        // to reset the game if the player loses
        if (attacker.hp <= 0) {
            $("h5").text(defender.name + " has slain " + attacker.name + ". Better luck next time.");
            isDefender = false;
            isAttacker = false;
            attacker = "";
            defender = "";
            $(".pic").appendTo(".char-row");
             gohan = {
                name: "Gohan",
                hp: 170,
                attackPower: 15,
                counter: 15,
                attackPowersub: 15,
                hpstat: ".gohan-hp",
                nameCall: ".gohan",
                enemies: []
            };
            
             trunks = {
                name: "Trunks",
                hp: 200,
                attackPower: 6,
                counter: 17,
                attackPowersub: 6,
                hpstat: ".trunks-hp",
                nameCall: ".trunks"
            };
            
             cell = {
                name: "Perfect Cell",
                hp: 220,
                attackPower: 8,
                counter: 22,
                attackPowersub: 8,
                hpstat: ".cell-hp",
                nameCall: ".cell"
            };
            
             frieza = {
                name: "Frieza",
                hp: 180,
                attackPower: 12,
                counter: 12,
                attackPowersub: 12,
                hpstat: ".frieza-hp",
                nameCall: ".frieza"
            };

            $(".frieza-hp").text("HP: " + frieza.hp);
            $(".cell-hp").text("HP: " + cell.hp);
            $(".gohan-hp").text("HP: " + gohan.hp);
            $(".trunks-hp").text("HP: " + trunks.hp);
            $(".pic").show();

        }

        //to end the game if there are no remaining defenders
        if (!$.trim( $('.enemyRow').html() ).length && isDefender) {
            isDefender = false;
            isAttacker = false;
            $(".pic").appendTo(".char-row");
            $("h5").text(attacker.name + " has slain all enemies! You won the game!");
            defender = "";
            attacker = ""; 
                 gohan = {
                    name: "Gohan",
                    hp: 170,
                    attackPower: 15,
                    counter: 15,
                    attackPowersub: 15,
                    hpstat: ".gohan-hp",
                    nameCall: ".gohan",
                    enemies: []
                };
                
                 trunks = {
                    name: "Trunks",
                    hp: 200,
                    attackPower: 6,
                    counter: 17,
                    attackPowersub: 6,
                    hpstat: ".trunks-hp",
                    nameCall: ".trunks"
                };
                
                 cell = {
                    name: "Perfect Cell",
                    hp: 220,
                    attackPower: 8,
                    counter: 22,
                    attackPowersub: 8,
                    hpstat: ".cell-hp",
                    nameCall: ".cell"
                };
                
                 frieza = {
                    name: "Frieza",
                    hp: 180,
                    attackPower: 12,
                    counter: 12,
                    attackPowersub: 12,
                    hpstat: ".frieza-hp",
                    nameCall: ".frieza"
                };

        $(".frieza-hp").text("HP: " + frieza.hp);
            $(".cell-hp").text("HP: " + cell.hp);
            $(".gohan-hp").text("HP: " + gohan.hp);
            $(".trunks-hp").text("HP: " + trunks.hp);
            $(".pic").show();

                }


});

});