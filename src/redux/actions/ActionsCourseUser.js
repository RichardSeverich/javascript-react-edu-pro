export function add(courseUser) {
  return { type: "ADD", payload: courseUser };
}

export function remove(id) {
  return { type: "REMOVE", payload: id };
}
