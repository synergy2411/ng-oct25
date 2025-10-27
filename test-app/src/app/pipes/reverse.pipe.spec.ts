import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  let pipe: ReversePipe;

  beforeEach(() => {
    pipe = new ReversePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should reverse the given string', () => {
    let reverseString = pipe.transform('hello world');
    expect(reverseString).toEqual('dlrow olleh');
  });
});
