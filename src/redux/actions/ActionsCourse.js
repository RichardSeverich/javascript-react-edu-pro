export function add(course) {
  return { type: "ADD", payload: course };
}

export function remove(id) {
  return { type: "REMOVE", payload: id };
}
