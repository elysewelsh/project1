// const ipInputElement: HTMLInputElement = document.getElementById("ipInput");

const ipInputElement = document.getElementById("ipInput") as HTMLInputElement;
export const ipInput: string = ipInputElement.value;
console.log(ipInput);