import { QuickLink, Club, User } from ".";

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-gray-50 p-4 border-r flex flex-col gap-6">
      <QuickLink />
      <Club />
      <User />
    </aside>
  );
};

export default Sidebar;
