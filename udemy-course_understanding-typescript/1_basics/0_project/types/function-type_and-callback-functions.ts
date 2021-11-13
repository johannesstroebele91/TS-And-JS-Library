// FUNCTION TYPES & CALLBACKS
function addAndHandler(
  n1: number,
  n2: number,
  cb: (num: number) => void
): void {
  const result = n1 + n2;
  cb(result);
}
// Pass normale function to a function
let anonymousFunct = (result: number) => console.log(result);
addAndHandler(10, 20, anonymousFunct);

// Pass anonymous function to a function
addAndHandler(10, 20, (result: number) => console.log(result));

// Additional example
function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({ data: "Hi there!" });
}

sendRequest("Send this!", (response) => {
  console.log(response);
  return true;
});
