export const getMessage = () => {
  return fetch("/hello").then((res) => res.json())
}
