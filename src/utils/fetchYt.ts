export const fetchYt = async (
  fetchFn: (val: string) => any, 
  inputText: string,
  callbackFn: (val: any) => void,
) => {
  try {
    const { data, success } = await fetchFn(inputText);
    if (success) {
      callbackFn(data);
    }
  } catch (err) { }
}
