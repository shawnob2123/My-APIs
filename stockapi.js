document.addEventListener('DOMContentLoaded', function () {

  document.getElementById('button').addEventListener('click', marketData)


  function marketData() {
    
    let ticker = 'AAPL';
    const interval = '5min';
    const functionName = 'TIME_SERIES_INTRADAY';
    const url = `https://www.alphavantage.co/query?function=${functionName}&symbol=${ticker}&interval=${interval}&apikey=${apiKey}`;
    
    // const testUrl = "https://api.github.com/users";

    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = function () {
      if (this.status === 200 && this.readyState === 4) {
        const parsedResponseText = JSON.parse(this.responseText);
        open = `<br>Market Open: ${parsedResponseText}`;
        high = `<br>Market High: ${parsedResponseText}`;

        ticker = document.getElementById('tickerSymbol').innerHTML = ticker;
        document.getElementById('open').innerHTML = open;
        document.getElementById('high').innerHTML = high;

        console.log(parsedResponseText);
      } else if (this.status === 400) {
        console.log('404 Error...Try Again');
      }
    } 
    xhr.send();
  }
})
