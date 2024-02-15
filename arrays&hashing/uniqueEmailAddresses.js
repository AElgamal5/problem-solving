/**
 * 929. Unique Email Addresses
 * -----------------------
 * link: https://leetcode.com/problems/unique-email-addresses/description/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

//solution description:
//1- make function to check email and return email address after sensitize
//2- save sensitized email address to array
//3- remove duplicate form array using set

//space: O(n^2)
//time: O(n^2)

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  let temp = [];
  for (let i = 0; i < emails.length; i++) {
    temp.push(uniqueEmails(emails[i]));
  }
  return new Set(temp).size;
};

/**
 * @param {string} email
 * @return {string}
 */
let uniqueEmails = function (email) {
  let result = "";
  let at = -1;
  let plus = -1;

  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      at = i;
    } else if (email[i] === "." && at === -1) {
      continue;
    } else if (email[i] === "+") {
      plus = i;
      continue;
    }
    if (plus === -1 || (plus != -1 && at !== -1)) {
      result += email[i];
    }
  }
  return result;
};

console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ])
);

console.log(
  numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"])
);
