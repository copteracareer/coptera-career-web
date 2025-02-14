/**
 * Wraps an asynchronous function with error handling.
 *
 * @template T The return type of the asynchronous function.
 * @template P The parameter type of the asynchronous function.
 * @param {(...args: P[]) => Promise<T>} asyncFunc The asynchronous function to wrap.
 * @return {(...args: P[]) => Promise<T>} The wrapped asynchronous function.
 * @throws {Error} If an error occurs during the execution of the asynchronous function.
 */
export const withHandling = <T, P extends any[]>(
  asyncFunc: (...args: P) => Promise<T>
): ((...args: P) => Promise<T>) => {
  return async (...args: P): Promise<T> => {
    try {
      return await asyncFunc(...args);
    } catch (error: any) {
      console.error('Error in function:', asyncFunc.name, error);
      throw error; // Re-throw the error after logging it
    }
  };
};
