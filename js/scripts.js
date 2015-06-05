function Player() {
  this.startingCards = [];
  this.playerCards = [];
}

function Game() {
  this.drawPile = [];
  this.discardPile = [];
}

Player.prototype.startingCards = function () {
  var red_numbers = ["r0", "r1", "r1", "r2", "r2", "r3", "r3", "r4", "r4", "r5", "r5", "r6", "r6", "r7", "r7", "r8", "r8", "r9", "r9"]
  var green_numbers = ["g0", "g1", "g1", "g2", "g2", "g3", "g3", "g4", "g4", "g5", "g5", "g6", "g6", "g7", "g7", "g8", "g8", "g9", "g9"]
  var blue_numbers = ["b0", "b1", "b1", "b2", "b2", "b3", "b3", "b4", "b4", "b5", "b5", "b6", "b6", "b7", "b7", "b8", "b8", "b9", "b9"]
  var yellow_cards = ["y0", "y1", "y1", "y2", "y2", "y3", "y3", "y4", "y4", "y5", "y5", "y6", "y6", "y7", "y7", "y8", "y8", "y9", "y9"]
  var red_specials = ["rd", "rd", "rs", "rs", "rv", "rv"]
  var green_specials = ["gd", "gd", "gs", "gs", "gv", "gv"]
  var blue_specials = ["bd", "bd", "bs", "bs", "bv", "bv"]
  var yellow_specials = ["yd", "yd", "ys", "ys", "yv", "yv"]
  var wild_cards = ["wc", "wc", "wc", "wc", "wf", "wf", "wf", "wf"]
  var number_cards = red_numbers.concat(green_numbers, blue_numbers, yellow_numbers);
  var special_cards = red_specials.concat(green_specials, yellow_specials, blue_specials);
  for (i=0; i<4; i++) {
    var randomCard = number_cards[Math.floor(Math.random() * number_cards.length)];
    var cardIndex = number_cards.indexOf(randomCard);
    this.playerCards.push(randomCard);
    number_cards = number_cards.splice(index, cardIndex);
    }
};




$(document).ready(function() {
  $('form#start_game').submit(function(event) {
    var player = new Player().startingCards;
    var opponentCount = $('input#option');
    $('.pre-game').slideUp('slow');
    $('#in-game').delay(1000).fadeIn();
    $('.title-header').text("The Game Has Begun!")





    event.preventDefault();
    // window.location.href='game.html';
 });

});
