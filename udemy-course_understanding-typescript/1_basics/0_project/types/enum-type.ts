enum Role {
  ADMIN = "ADMIN",
  READ_ONLY_AUTHOR = "READ_ONLY_AUTHOR",
  AUTHOR = "AUTHOR",
}

enum RoleIndex {
  ADMIN,
  READ_ONLY_AUTHOR,
  AUTHOR,
}

enum RoleWithRandomValues {
  ADMIN = 5345,
  READ_ONLY_AUTHOR = "gefdcvx434",
  AUTHOR = 63424,
  // AUTHOR = true, no boolean values allowed
}

const user = {
  name: "max",
  role: Role.ADMIN,
  roleIndex: RoleIndex.ADMIN,
  roleWithRandomValues: RoleWithRandomValues.AUTHOR,
};

console.log(user.role); // OUTPUT: "ADMINs"
console.log(user.roleIndex); // OUTPUT: only index!!! so "1" here
console.log(user.roleWithRandomValues); // OUTPUT: v
