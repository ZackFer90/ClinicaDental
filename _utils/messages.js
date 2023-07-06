const errorMsg = {
   user: {
      CREATE: "Error creating user",
      UPDATE: "Error updating user",
      DELETEALL: "Error deleting all users",
      DELETE: "Error deleting user",
      GETALL: "Error retreiving all users",
      GET: "Error retreiving user",
      NOTFOUND: "User not found",
      PASSWORDLEN: "Password length can not be less than ",
   },
   token: {
      NOTFOUND: "No authorization token was found",
      NOTVALID: "Invalid token",
   },
   authorization: {
      NOAUTH: "Dont have permission",
      BADCREDENTIALS: "Bad credentials",
      REQUIERED: "Email and Password are required",
      LOGINFAILED: "User login failed",
   },
};

const successMsg = {
   user: {
      CREATE: "User created succsessfully",
      UPDATE: "User updated succesfully",
      DELETEALL: "All users deleted succesfully",
      DELETE: "Deleted successfully",
   },
};

module.exports = {
   errorMsg,
   successMsg,
};