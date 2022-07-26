declare function excludeProps<T, Key extends keyof T>(object: T, ...keys: Key[]): Omit<T, Key>;
export { excludeProps };
