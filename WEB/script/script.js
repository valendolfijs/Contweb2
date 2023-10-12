function updateCountdown() {
    const targetDate = new Date('2023-10-28T23:59:59Z');
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;
  
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  }
  
  // Update the countdown every second
  setInterval(updateCountdown, 1000);
  
  // Initial call to display the countdown immediately
  updateCountdown();
  