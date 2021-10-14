import { ReplaceUnderlinePipe } from './replace-underline.pipe';

describe('Pipe: ReplaceUnderline', () => {
  let pipe: ReplaceUnderlinePipe | null;

  beforeEach(() => {
    pipe = new ReplaceUnderlinePipe();
  })

  it('should create pipe class truthly' , () => {
    expect(pipe).toBeTruthy();
  })

  it('should return true when value is null' , () => {
    expect(pipe?.isNullOrUndefined(null)).toBeTrue();
  })

  it('should return true when value is undefined' , () => {
    expect(pipe?.isNullOrUndefined(undefined)).toBeTrue();
  })

  it('should return false when value is string' , () => {
    expect(pipe?.isNullOrUndefined("string")).toBeFalse();
  })

  it('should return false when value is number', () => {
    expect(pipe?.isNullOrUndefined(1)).toBeFalse();
  });

  it('should return _ when value is null' , () => {
    expect(pipe?.transform(null)).toBe("_");
  })

  it('should return _ when value is undefined' , () => {
    expect(pipe?.transform(undefined)).toBe("_");
  })

  it('should return data when value is $data$' , () => {
    expect(pipe?.transform("data")).toBe("data");
  })

  it('should return 1 when value is $1$' , () => {
    expect(pipe?.transform(1)).toBe(1);
  })

  afterEach(() => {
    pipe = null;
  })
});
