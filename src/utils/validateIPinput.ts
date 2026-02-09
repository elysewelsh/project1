export function isValidIP(ip: string): boolean {
  const ipRegex = /^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/;
  return ipRegex.test(ip);
}