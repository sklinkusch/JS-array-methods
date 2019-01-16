function reverseNumber(number) {
  const NumberString = String(number);
  const ArrayDigits = NumberString.split("");
  const ArrayReversed = ArrayDigits.reverse();
  const ReversedString = ArrayReversed.join("");
  const FinalNumber = Number(ReversedString);
  return FinalNumber;
}

console.log(reverseNumber(1234));

const revNumberShort = number =>
  Number(
    String(number)
      .split("")
      .reverse()
      .join("")
  );
console.log(revNumberShort(4567));
