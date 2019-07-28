import './style';

console.log('this is the index page');

function join(...strings: string[]): string {
  if (strings.length) {
    return strings.reduce(
      (accumulator, currentValue): string => accumulator + currentValue,
    );
  }
  return '';
}

const obj = {
  output: {
    filename: join('js', '[name].js'),
  },
  a: 12,
  foo(): void {
    console.log(this.a + 3);
  },
};

const cond = true;

if (cond) obj.foo();

[1, 2, 3].map((n): number => n ** 2);

(async (): Promise<void> => {
  const res = await fetch('index.html');
  const json = await res.text();
  console.log(json.substr(0, 300));
})();
