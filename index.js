var recipes = {}
function updateObjectWithKeyAndValue(object, key, value) {
  thing = object
  thing[key] = value
  return thing
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {}
function deleteFromObjectByKey(object, key) {
  thing = object ;
  delete thing[key] ;
  return thing ;
}
function destructivelyDeleteFromObjectByKey(object, key) {}
