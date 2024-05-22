import Form from "../form/Form";

export default function Modal() {
  return (
    <div>
      <div className="fixed inset-0 bg-black opacity-20"></div>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-[20rem] h-[30rem] bg-white px-5 py-8 space-y-5 rounded-md">
          <div className="flex flex-col items-center space-y-2">
            <img
              src="/letter-d.png"
              alt="dashboard icon"
              width={40}
              height={40}
            />
            <h1 className="text-lg font-semibold text-slate-400">
              Dashboard Kit
            </h1>
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-xl font-semibold">Log In to Dashboard Kit</h1>
            <p className="text-sm text-slate-400">
              Enter your email and password below
            </p>
          </div>
          <Form />
          <div>
            <p className="text-center text-sm text-slate-400">
              Don't have an account?{" "}
              <button className="text-blue-700">Sign up</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
