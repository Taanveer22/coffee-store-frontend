// ===============================
// STEP 1A: Import necessary functions from Firebase Authentication
// STEP 1B: Import React features
// STEP 1C: Import Firebase auth configuration
// ===============================
// STEP 2: Create a Context (Global Storage)
// This will allow all components to access auth data
// ===============================
// STEP 3: Create AuthProvider Component
// This component will wrap the whole app
// ===============================
// STEP 4A: Create State for User
// STEP 4B: Create State for Loading
// ===============================
// STEP 5: Firebase Auth Function Setup(register, login, logout, updateUser)
// ===============================
// STEP 6: Track Authentication State
// This runs automatically when component loads
// 6A. Listen for user login/logout changes(Capture the unsubscribe function returned inside useEffect hook)
// 6B. Update user state
// 6C. Stop loading after checking
// 6D. Cleanup function (Prevent memory leaks when component unmounts)
// ===============================
// STEP 7: Create Object to Pass in Context
// ===============================
//  STEP 8: Wrap c with AuthContext Provider
// ===============================
// STEP 9: Export Context & Provider
// ===============================

// step 1
import auth from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

// step 2
const AuthContext = createContext(null);

// step 3
const AuthContextProvider = ({ children }) => {
  // step 4
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // step 5
  const registerUser = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // step 6
  useEffect(() => {
    // 6a
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // 6b
      setUser(currentUser);
      // 6c
      setLoading(false);
    });
    // 6d
    return () => {
      unsubscribe();
    };
  }, []);

  // step 7
  const authData = {
    user,
    loading,
    registerUser,
  };

  // step 8
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

// step 9
export default AuthContextProvider;
export { AuthContext };
