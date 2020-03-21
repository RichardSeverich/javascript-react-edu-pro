export function add(module) {
  return { type: "ADD", payload: module };
}

export function remove(id) {
  return { type: "REMOVE", payload: id };
}
