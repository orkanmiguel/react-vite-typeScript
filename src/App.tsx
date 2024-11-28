import "./App.css";
/* import { BasicTypes } from "./assets/typescript/basicTypes";
import { ObjectLiterals } from "./assets/typescript/ObjectLiterals";
import { BasicFunctions } from "./assets/typescript/BasicFunctions"; */
import { Counter } from "./assets/components/Counter";
import { LoginPage } from "./assets/components/LoginPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col justify-center items-center h-svh">
        <h1 className="text-4xl mb-5">Hello world!</h1>
        {/* <BasicTypes /> */}
        {/* <ObjectLiterals /> */}
        {/* <BasicFunctions /> */}
        {/*    <Counter /> */}
        <LoginPage />
      </div>
    </AuthProvider>
  );
}

export default App;
