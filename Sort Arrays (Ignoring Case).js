function sortme(names) {
  return names.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
}
   console.log(sortme(["C", "d", "a", "B"]))