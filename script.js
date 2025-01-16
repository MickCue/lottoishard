 let gen_numbers = [];
    let gen_bonusNumber = 0;
    var numbers = [];
    var bonusNumber = 0;
    let matchCounts =[];

    let count = 0.00;
    const counterDisplay = document.getElementById("counter");

    let ticketcount = 0;
    const counterDisplay2 = document.getElementById("ticketcounter");

    let c =0;

    let c1 =1;
    let c2 =1;
    let c3 =1;
    let c4 =1;
    let c5 =1;
    let c6 =1;
    let c7 =1;
    let c8 =1;

    let timev = 00500;
    let timeoutId; // Declare a variable to store the timeout ID

    let cprizeTotal = 0;
    const prizecounterDisplay = document.getElementById("prizeCounter");

    const jp = document.getElementById("jackpot");
    const m5 = document.getElementById("match-5");
    const m4b = document.getElementById("match-4-bonus");
    const m4 = document.getElementById("match-4");
    const m3b = document.getElementById("match-3-bonus");
    const m3 = document.getElementById("match-3");
    const m2b = document.getElementById("match-2-bonus");
    const m2 = document.getElementById("match-2");

    let startTime = 0;
    let elapsedTime = 0;
    let timerInterval;

function calculateBreakEven(x, y) {
  const difference = y - x;
  const breakevPriceDiv = document.getElementById("breakevPrice");

  let breakEvenPrice;

  if (difference > 0) {
    breakEvenPrice = "You are up +€" + difference.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}); // Profit with commas
    breakevPrice.style.backgroundColor = "green";
    breakevPrice.style.color = "white";

  } else if (difference < 0) {
    breakEvenPrice = "You are down -€" + Math.abs(difference).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}); // Loss with commas
    breakevPrice.style.backgroundColor = "red";
  } else {
    breakEvenPrice = "€0.00"; // Break-even
  }

  breakevPriceDiv.textContent = breakEvenPrice;
}


function appendToWinningTickets(content) {
  const winningTicketsDiv = document.getElementById("winningtickets");

  // Create a new element to append (e.g., a paragraph)
  const newElement = document.createElement("p");
  newElement.textContent = content;

  // Append the new element to the div
  winningTicketsDiv.appendChild(newElement);
}


    function startTimer() {
      startTime = Date.now() - elapsedTime;
      timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        document.getElementById("timer").textContent = formatTime(elapsedTime);
      }, 10); // Update every 10 milliseconds
    }

    function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const seconds = totalSeconds % 60;
  const millisecondsRemainder = milliseconds % 1000;

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

    function pad(number, length = 2) {
  return String(number).padStart(length, '0');
}

    function increaseCounter() {
      count += 2.50;
      counterDisplay.textContent = count.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    }

    function increaseTicketCounter() {
      ticketcount += 1;
      counterDisplay2.textContent = ticketcount.toFixed(0);
      // Check if count has reached 30
      if (ticketcount >= 30) {
        document.getElementById('elon-button').style.display = 'block';
      }
      if (ticketcount >= 1000) {
        document.getElementById('ludspe-button').style.display = 'block';
      }
      if (ticketcount >= 100) {
        document.getElementById('toggleButton').style.display = 'block';
      }
    }

    function increasePrizeCounter(value) {
      cprizeTotal += value;

      // Format the number with commas
      const formattedPrizeTotal = cprizeTotal.toLocaleString();

      prizecounterDisplay.textContent = formattedPrizeTotal;
    }

    function generateLotteryNumbers() {

      // Generate 6 unique random numbers
      while (gen_numbers.length < 7) {
        let randomNumber = Math.floor(Math.random() * 47) + 1;
        if (!gen_numbers.includes(randomNumber)) {
          gen_numbers.push(randomNumber);
        }
      }

      // Separate the bonus number
      gen_bonusNumber = gen_numbers.pop();

      // Display the numbers in the HTML
      document.getElementById("main-numbers").textContent = gen_numbers.join(", ");
      document.getElementById("bonus-number").textContent = gen_bonusNumber;

      // Update the divs with random numbers
      document.querySelector('.ball.red').textContent = gen_numbers[0];
      document.querySelector('.ball.blue').textContent = gen_numbers[1];
      document.querySelector('.ball.green').textContent = gen_numbers[2];
      document.querySelector('.ball.yellow').textContent = gen_numbers[3];
      document.querySelector('.ball.purple').textContent = gen_numbers[4];
      document.querySelector('.ball.chocolate').textContent = gen_numbers[5];

      document.querySelector('.ball.orange').textContent = gen_bonusNumber;
    }

    // Run the function when the page loads
    generateLotteryNumbers();

function generateNumbers(v) {
  if (v === 1) {
    timev = 00020; // Assign 50 to timev if v is 0
  }
  if (v === 2) {
    setTimeout(function() {
    for (let i = 0; i < 300; i++) {
      generateNumbers();
    }
  }, 3000); // 3000 milliseconds (3 seconds)

  }
  startTimer();
  // Generate 5 regular numbers
  for (var i = 0; i < 6; i++) {
    var number = Math.floor(Math.random() * 59) + 1; // Numbers from 1 to 59
    numbers.push(number);
  }
  // Generate bonus number
  bonusNumber = Math.floor(Math.random() * 59) + 1;
  numbers.push(bonusNumber);

  // // Display the numbers
  // document.getElementById("numbers").innerHTML =
  //   numbers.slice(0, 5).join(", ") + " Bonus: <b> " + bonusNumber + "</b>";

      // Update the divs with random numbers
      document.querySelector('.ball2.red').textContent = numbers[0];
      document.querySelector('.ball2.blue').textContent = numbers[1];
      document.querySelector('.ball2.green').textContent = numbers[2];
      document.querySelector('.ball2.yellow').textContent = numbers[3];
      document.querySelector('.ball2.purple').textContent = numbers[4];
      document.querySelector('.ball2.chocolate').textContent = numbers[5];

      document.querySelector('.ball2.orange').textContent = bonusNumber;

  function clearQP() {
    // console.log(gen_numbers);
    // console.log(gen_bonusNumber);

    // console.log(numbers);
    // console.log(bonusNumber);
    numbers = [];
    bonusNumber = 0;
  }

  function checkLotteryMatch(gen_numbers, gen_bonusNumber, numbers, bonusNumber) {
  let matchedNumbers = gen_numbers.filter(number => numbers.includes(number));
  let bonusMatched = gen_bonusNumber === bonusNumber;

  // Initialize counters
  matchCounts = {
    "Match 5 + Bonus": 0,
    "Match 5": 0,
    "Match 4 + Bonus": 0,
    "Match 4": 0,
    "Match 3 + Bonus": 0,
    "Match 3": 0,
    "Match 2 + Bonus": 0,
    "Match 2": 0, // Added for completeness
    "Match 0 + Bonus": 0  // Added for completeness
  };

  // Count occurrences
  let occurrences = matchedNumbers.length;
  count = Math.floor(count); // Remove the remainder (decimal part)
  const formattedPrizecounts = count.toLocaleString();
  //count = count.toLocaleString('en-US'); // Add commas for currency formatting
  const winningtickets63 = document.getElementById("63winningtickets");
  if (occurrences === 5 && bonusMatched) {
    matchCounts["Match 5 + Bonus"]++;
    jp.textContent = c1++;
    winningtickets3000.innerHTML += "<span style='color: #40711a; font-weight: bold;'>" + numbers + " <= Winner €3,000,000: This took buying " + ticketcount + " tickets worth of €" + formattedPrizecounts + "</span><br>";
    increasePrizeCounter(3000000);
  } else if (occurrences === 5) {
    matchCounts["Match 5"]++;
    m5.textContent = c2++;
    winningtickets73.innerHTML += "<span style='color: #40711a; font-weight: bold;'>" + numbers + " <= Winner €73,000: This took buying " + ticketcount + " tickets worth of €" + formattedPrizecounts + "</span><br>";
    increasePrizeCounter(73000);
  } else if (occurrences === 4 && bonusMatched) {
    matchCounts["Match 4 + Bonus"]++;
    m4b.textContent = c3++;
    winningtickets157.innerHTML += "<span style='color: #40711a; font-weight: bold;'>" + numbers + " <= Winner €1,573: This took buying " + ticketcount + " tickets worth of €" + formattedPrizecounts + "</span><br>";
    increasePrizeCounter(1573);
  } else if (occurrences === 4) {
    matchCounts["Match 4"]++;
    m4.textContent = c4++;
    winningtickets244.innerHTML += "<span style='color: #40711a; font-weight: bold;'>" + numbers + " <= Winner €244: This took buying " + ticketcount + " tickets worth of €" + formattedPrizecounts + "</span><br>";
    increasePrizeCounter(244);
  } else if (occurrences === 3 && bonusMatched) {
    matchCounts["Match 3 + Bonus"]++;
    m3b.textContent = c5++;
    winningtickets63.innerHTML += "<span style='color: #233e0e; font-weight: bold;'>" + numbers + " <= Winner €63: This took buying " + ticketcount + " tickets worth of €" + formattedPrizecounts + "</span><br>";
    increasePrizeCounter(63);
  } else if (occurrences === 3) {
    matchCounts["Match 3"]++;
    m3.textContent = c6++;
    winningtickets30.innerHTML += "<span style='color: black;'>" + numbers + " <= Winner €30: This took buying " + ticketcount + " tickets worth of €" + formattedPrizecounts + "</span><br>";
    increasePrizeCounter(30);
  } else if (occurrences === 2 && bonusMatched) {
    matchCounts["Match 2 + Bonus"]++;
    m2b.textContent = c7++;
    //appendToWinningTickets("Winner €10: "+numbers);
    increasePrizeCounter(10);
  } else if (occurrences === 2) {
    matchCounts["Match 2"]++;
    m2.textContent = c8++;
    //appendToWinningTickets("Winner €3: "+numbers);
    increasePrizeCounter(3);
  } else if (occurrences === 0 && bonusMatched) {
    matchCounts["Match 0 + Bonus"]++;
  }
  calculateBreakEven(count, cprizeTotal);
  return { matchedNumbers, bonusMatched, matchCounts };
}


  let matchResult = checkLotteryMatch(gen_numbers, gen_bonusNumber, numbers, bonusNumber);

  // ... your code to set the timeout ...
  timeoutId = setTimeout(function() {
    generateNumbers();
  }, timev); // 5000 milliseconds (5 seconds)

  // Loop every 5 seconds
  //setTimeout(generateNumbers, timev);
  increaseCounter();
  increaseTicketCounter();
  //console.log(matchResult.matchCounts["Match 1"]);

  //updateResults();
  clearQP();

}
