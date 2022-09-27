const sentence = "hello there from lighthouse labs";
let time = 0;
let index = 0;

for (const char of sentence) {
  console.log(index, sentence.length - 1);
  if (index === sentence.length - 1) {
    setTimeout(() => {
      console.log(char);
    }, (time += 50));
    return;
  }
  setTimeout(() => {
    process.stdout.write(char);
  }, (time += 50));
  index++;
}
