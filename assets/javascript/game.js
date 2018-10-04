    // var imdb = requirejs('imdb-api')
    // var requirejs = require('require.js')
    // var imdb = require('imdb-api')

    // requirejs.config({
    //     nodeRequire: require
    // });

    // var imdb = requirejs('imdb-api')
    // requirejs(['imdb-api'],
    // function   (imdbapi) {
       
    // });

window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    var categories;         // Array of topics
    var chosenCategory;     // Selected catagory
    var getHint ;          // Word getHint
    var word ;              // Selected word
    var guess ;             // Guess
    var guesses = [ ];      // Stored guesses
    var lives ;             // Lives
    var counter ;           // Count correct geusses
    var space;              // Number of spaces in word '-'
    
    // Get elements
    var showLives = document.getElementById("mylives");
    var showCatagory = document.getElementById("scatagory");
    var getHint = document.getElementById("hint");
    var showClue = document.getElementById("clue");
  
  
  
    // create alphabet ul
    var buttons = function () {
      myButtons = document.getElementById('buttons');
      letters = document.createElement('ul');
  
      for (var i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
      }
    }
      
    
    // Select Catagory
    var selectCat = function () {
      if (chosenCategory === categories[0]) {
        catagoryName.innerHTML = "The Chosen Category Is Horror";
      } else if (chosenCategory === categories[1]) {
        catagoryName.innerHTML = "The Chosen Category Is Action/Adventure";
      } else if (chosenCategory === categories[2]) {
        catagoryName.innerHTML = "The Chosen Category Is Comedy";
      }
    }
  
    // Create geusses ul
     result = function () {
      wordHolder = document.getElementById('hold');
      correct = document.createElement('ul');
  
      for (var i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        if (word[i] === " ") {
          guess.innerHTML = " ";
          space = 1;
        } else {
          guess.innerHTML = "_";
        }
  
        guesses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
      }
    }
    
    // Show lives
     comments = function () {
      showLives.innerHTML = "You have " + lives + " lives";
      if (lives < 1) {
        showLives.innerHTML = "Game Over";
      }
      for (var i = 0; i < guesses.length; i++) {
        if (counter + space === guesses.length) {
          showLives.innerHTML = "You Win!";

        }
      }
    }
  
        // Animate man
    var animate = function () {
      var drawMe = lives ;
    }
  
    
     // Movie Type
    canvas =  function(){
  
      myStickman = document.getElementById("movietype");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.strokeStyle = "#fff";
      context.lineWidth = 2;
    };
    
      head = function(){
        myStickman = document.getElementById("movietype");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.arc(60, 25, 10, 0, Math.PI*2, true);
        context.stroke();
      } 
  
  
    // OnClick Function
     check = function () {
      list.onclick = function () {
        var guess = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (var i = 0; i < word.length; i++) {
          if (word[i] === guess) {
            guesses[i].innerHTML = guess;
            counter += 1;
          } 
        }
        var j = (word.indexOf(guess));
        if (j === -1) {
          lives -= 1;
          comments();
          animate();
        } else {
          comments();
        }
      }
    }
    
      
    // Play
    play = function () {
      categories = [
          ["alien", "jaws", "predator", "it", "halloween", "insidious","the shining","the silence of the lambs","the sixth sense","the ring","saw","the conjuring"],
          ["gladiator", "pirates of the caribbean","the lion king", "the dark knight", "pulp fiction", "the godfather","jurassic park","independence day","deadpool","indiana jones","the lord of the rings","guardians of the galaxy","harry potter","star-wars"],
          ["zoolander", "dumb and dumber", "ace ventura", "tropic thunder", "airplane","young frankenstein","office space","happy gilmore","anchorman","ghostbusters","step brothers","austin powers","meet the parents"]
      ];
  
      chosenCategory = categories[Math.floor(Math.random() * categories.length)];
      word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    //   imdb.get({name: word}, {apiKey: 'GYSqfQioySxjx6z0GkiqwvFWIFrvNj'}).then(console.log).catch(console.log);
    //   word = word.replace(/\s/g, "-");
      console.log(word);
      buttons();
  
      guesses = [ ];
      lives = 10;
      counter = 0;
      space = 0;
      result();
      comments();
      selectCat();
      canvas();
    }
  
    play();
  /*
   [ {Name:"alien", hint:"Science-Fiction horror film", category:"categories[0]"},
      {}
    ]
  
  */
    // Hint
  
      hint.onclick = function() {
  
        hints = [
          ["Science-Fiction horror film", "Giant great white shark","Get to the Choppa!!","You'll float too!","Michael Myers","The further","Here's Johnny!","I ate his liver with some fava beans.","I see dead people..","Seven days...","Let's play a game","This thing has latched itself to your family."],
          ["Strength and Honor!", "Stop blowing holes in my ship!","Hakuna Matata","I believe that whatever doesn't kill you simply makes you stranger.","Chill honey bunny","I'll make him an offer he can't refuse","Life, Uh, Finds a Way","Welcome to Earth!","All dinosaurs feared the T-Rex.","It belongs in a museum!","My precious..","Nothing goes over my head. My reflexes are too fast. I would catch it.","Avada Kedavra!","Rebel Scum!!"],
          ["It's a walk off, it's a walk off...", "Hey, guys. Whoa, Big Gulps, huh? All right! Well, see you later.", "All righty then!", " I don't read the script. The script reads me.", "I am serious... and don't call me Shirley.","Good night, Frau Blücher. (horses whinny)","I believe you have my stapler.","You're gonna die clown!","Knights of Columbus that hurt!!","Who you gonna call?","It's the f**kin' Catalina Wine Mixer!","Finally, we come to my number two man. His name? Number Two.","Gaylord Focker, will you be my son-in-law?"],
      ];
  
      var catagoryIndex = categories.indexOf(chosenCategory);
      var hintIndex = chosenCategory.indexOf(word);
      showClue.innerHTML = "Movie quote: - " +  hints [catagoryIndex][hintIndex];
    };
  
    // Play Theme
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", ["assets/mp3/Theme.mp3"]);
    $('#song').on("click", function() {
      audioElement.play();
    });

     // Reset
  
    document.getElementById('reset').onclick = function() {
      correct.parentNode.removeChild(correct);
      letters.parentNode.removeChild(letters);
      showClue.innerHTML = "";
      context.clearRect(0, 0, 400, 400);
      play();
    }
  }
  