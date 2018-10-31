export const updateObj = (oldObj, updatedValues) => {
  return {
    ...oldObj,
    ...updatedValues
  }
}