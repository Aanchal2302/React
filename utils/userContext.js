import { createContext } from "react";

const userContext = createContext({
    loggedInUser: "Admin",
});
export default userContext;