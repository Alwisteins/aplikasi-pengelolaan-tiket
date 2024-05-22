import { useState } from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { users } from "../../data/data";

export default function Form() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [icon, setIcon] = useState(eyeOff);
  const [type, setType] = useState<string>("password");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password.length < 8) {
      setError("Password must have at least 8 characters");
      return;
    }

    const user = users.find(
      (user) => user.email == email && user.password == password
    );

    !user ? setError("Invalid email or password.") : setError("");
  };

  const handleToggle = () => {
    if (type == "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  return (
    <div>
      <form className="space-y-5" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-slate-400">
            EMAIL
          </label>
          <input
            type="text"
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2 text-sm bg-slate-100 border border-slate-200 rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <div className="flex flex-row justify-between">
            <label
              htmlFor="password"
              className="text-sm font-medium text-slate-400"
            >
              PASSWORD
            </label>
            <button className="text-xs font-medium text-slate-400">
              Forgot password?
            </button>
          </div>
          <input
            type={type}
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-2 text-sm bg-slate-100 border border-slate-200 rounded-md"
          />
          <span
            className="flex justify-around items-center"
            onClick={handleToggle}
          >
            <Icon
              icon={icon}
              className="text-slate-500 absolute ml-60 mb-16 w-2 h-2"
            />
          </span>
          {error && <p className="text-red-500 text-center text-xs">{error}</p>}
        </div>
        <button
          type="submit"
          className="w-full p-2 rounded-md bg-blue-700 text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
}
