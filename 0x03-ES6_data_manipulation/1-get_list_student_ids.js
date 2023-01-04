export default function getListStudentIds(arg) {
  if (Array.isArray(arg) === false) {
    return [];
  } else {
    const ans = arg.map((val) => val.id);
    return ans;
  }
}
