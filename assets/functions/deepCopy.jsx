function deepCopy(thingToCopy) {
  if (Array.isArray(thingToCopy)) {
    return thingToCopy.map(deepCopy);
  } else if (typeof thingToCopy === "object" && thingToCopy !== null) {
    return Object.fromEntries(
      Object.entries(thingToCopy).map(([key, value]) => [key, deepCopy(value)])
    );
  } else {
    return thingToCopy;
  }
}
export default deepCopy;
