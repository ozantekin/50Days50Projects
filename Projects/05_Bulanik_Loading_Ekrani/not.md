- <a href="https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers"> Stack Overflow </a>

- function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) \* (outMax - outMin)) / (inMax - inMin) + outMin
  }
  - number: num
  - inMin: başlangı. sayı
  - inMax: duracağı sayı
  - out: number ilerledikçe değikeşecek kısımlar. Örnek opacity
    - outMin: opacity 1
    - outMax: opacity 0
