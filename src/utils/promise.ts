async function wait(ms: number): Promise<false> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(false), ms);
  });
}

export { wait };
