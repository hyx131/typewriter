const sentence = "hello there from lighthouse labs";

const typeWriter = function(string) {
  let i = 0;

  setTimeout(function print() {
    process.stdout.write(string[i]);
    if (i < string.length - 1) {
      setTimeout(print, 50);
    } else {
      process.stdout.write("\n");
    }
    i++;
  }, 50);
}

typeWriter(sentence);

