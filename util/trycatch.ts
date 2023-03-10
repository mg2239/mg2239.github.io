export const trycatch = async <T>(func: () => Promise<T>, fallback: T) => {
  return func().catch(() => fallback);
};
