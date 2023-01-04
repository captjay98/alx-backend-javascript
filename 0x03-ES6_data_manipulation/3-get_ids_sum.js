export default function getStudentIdsSum(arg) {
  const ans = arg.reduce((val, acc) => val + acc.id, 0);
  return ans;
}
