
$(document).ready(function() {
    
    var randomNumber=0;
    var triangleNumber=0;
    var squareNumber=0;
    var hexagonNumber=0;
    var roundNumber=0;
    var totalScore=0;
    var wins=0;
    var losses=0;

    function randomNumberPick(){
        randomNumber=Math.floor(Math.random() * 112)+19;
        $("#random-number").text(randomNumber);
    }

    function formNumber(){
        return Math.floor(Math.random() * 12)+1;
    }

    function initializaton(){
        
        totalScore=0;
        $("#round,#triangle,#square,#hexagon,#total-score").empty();
        randomNumberPick();
        triangleNumber=formNumber();
        $(".triangle").val(triangleNumber);
        roundNumber=formNumber();
        $(".round").val(roundNumber);
        hexagonNumber =formNumber();
        $(".hexagon ").val(hexagonNumber);
        squareNumber =formNumber();
        $(".square ").val(squareNumber);

    }

    $("#wins").text(wins);
    $("#losses").text(losses);
    
    
    initializaton();



    $(".form").on("click", function() {
        
        totalScore = totalScore + parseInt($(this).val());
        $("#total-score").text(totalScore);
        if(totalScore===randomNumber)
        {
            wins+=1;
            $("#wins").text(wins);
            $("#result").text("You win!")
            initializaton();
            
        }
        else if(totalScore>randomNumber)
        {
            losses+=1;
            $("#losses").text(losses);
            initializaton();
            $("#result").text("You loss!")
            
        }
        
    })
    
   
})
