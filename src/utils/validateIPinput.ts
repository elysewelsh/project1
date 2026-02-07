function isValidIP(ip: string): boolean {
  const ipRegex = /^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/;
  return ip.match(ipRegex) !== null;
}

console.log(isValidIP("192.168.1.1")); // true
console.log(isValidIP("256.256.256.256")); // false (invalid IP address)