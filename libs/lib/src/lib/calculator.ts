export function add(args: number[]): number {
  return args.reduce((prev, curr) => prev + curr, 0);
}
