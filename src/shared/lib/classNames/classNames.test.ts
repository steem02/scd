import { cn } from '@/shared/lib/classNames/classNames';

describe('classname', () => {
  it('test different values', () => {
    expect(cn('first')).toBe('first');
    expect(cn(['first'], { second: true, third: false })).toBe('first second');
    expect(cn('first', { second: true, third: true })).toBe('first second third');
    expect(cn('first', { second: false })).toBe('first');
    expect(cn([undefined], { second: false })).toBe('');
  });
});
