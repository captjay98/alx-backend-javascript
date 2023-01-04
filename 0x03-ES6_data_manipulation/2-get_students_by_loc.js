export default function getStudentsByLocation(arg, city) {
  const ans = arg.filter((val) => val.location === city);
  return ans;
}
