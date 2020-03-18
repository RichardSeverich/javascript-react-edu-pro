export function add(user) {
  return { type: "ADD", payload: user };
}

export function remove(id) {
  return { type: "REMOVE", payload: id };
}
