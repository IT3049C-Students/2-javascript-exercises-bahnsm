/**
 * The following object must contain:
 *  `first_name`property that is of type string
 *  `last_name` property that is of type string
 *  `class_of` property that is of type number
 *   a `full_name` function that would return the concatenation of `first_name` and `last_name` properties.
 *   an `introduction` function that returns a string of a welcome message. The introduction function:
 *      * must call the `full_name()` function to present the person's name.
 *      * must use the `class_of` property in the introduction
 */
const personObject = {
  first_name: "Marco",
  last_name: "Bahns",
  class_of: 2024,
  full_name: function () {
    const full_name = this.first_name + " " + this.last_name;
    return full_name;
  },
  introduction: function () {
    const message = this.full_name() + ", class of " + this.class_of;
    return message;
  }
};

module.exports = {
  personObject
};