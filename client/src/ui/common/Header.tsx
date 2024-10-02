import Button from "./Button";

export default function Header() {
  return (
    <header className="px-8 py-4 flex justify-between">
      <div />
      <h1 className="font-bold text-xl Inter">Train Scheduler</h1>
      <div className="flex gap-4">
        <Button link="/login">Login</Button>
        <Button link="/register">Register</Button>
      </div>
    </header>
  );
}
