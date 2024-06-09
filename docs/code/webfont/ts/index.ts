/**
 * @example
 * type A1 = 1
 */
type A1 = 'x' extends 'x' ? 1 : 2;

/**
 * @example
 * type A2 = 2
 */
type A2 = 'x' | 'y' extends 'x' ? 1 : 2;

/**
 * @example
 * type A3 = 1 | 2
 */
// type P<T> = T extends 'x' ? 1 : 2;
type A3 = P<'x' | 'y'>
// 联合类型会依次检测泛型内的所有类型。

type P<T> = [T] extends ['x'] ? 1 : 2;
/**
 * type A4 = 2;
 */
type A4 = P<'x' | 'y'>
// 使用元组可以避免这种错误