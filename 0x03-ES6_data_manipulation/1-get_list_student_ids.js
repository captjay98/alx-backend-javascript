export default function getListStudentIds(arg) {
  if (Array.isArray(arg) === false) {
    return [];
  }
  const ans = arg.map((val) => val.id);
  return ans;
}
