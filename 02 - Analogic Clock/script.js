document.addEventListener("DOMContentLoaded", () => {
  const e_hourHand = document.getElementById("hour-hand");
  const e_minuteHand = document.getElementById("minute-hand");
  const e_secondHand = document.getElementById("second-hand");

  function setClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90; // Offset by 90 to start from the top
    e_secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
    e_minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours % 12) / 12) * 360 + (minutes / 60) * 30 + 90;
    e_hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  }

  setInterval(setClock, 1000);
  setClock(); // C
});
