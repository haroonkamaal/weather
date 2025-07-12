export const occurence = (arr: Array<string>) => {
  const freq: any = {};
  arr.forEach(item => {
    console.log('item::', item);
    freq[item] = (freq[item] || 0) + 1;
  });
  console.log('Frequency::', freq);
};

export const fibboci = (upto: number) => {
  if (upto <= 1) return upto;

  let a = 0;
  let b = 1;
  for (let i = 2; i <= upto; i++) {
    const next = a + b;
    a = b;
    b = next;
  }
  console.log('fibbo::', b);
};
