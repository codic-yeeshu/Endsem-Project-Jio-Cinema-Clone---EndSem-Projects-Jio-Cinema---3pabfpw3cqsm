import { createContext } from "react";
const apiContext = createContext({
  projectId: "qcjfyfgmr5ux",
  // projectId: "treoo5dhf86s",
  username: "",
  email: "",
  password: "",
  jwt: "",
});
function apiContextProvider({children}){
    return (
      <apiContext.Provider
        value={{
          projectId: "qcjfyfgmr5ux",
          // projectId: "treoo5dhf86s", 
          username: "",
          email: "",
          password: "",
          jwt: "",
        }}
      >
        {children}
      </apiContext.Provider>
    );
}
export default apiContext;
export { apiContextProvider };