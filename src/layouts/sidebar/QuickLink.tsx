const QuickLink = () => {
  return (
    <nav className="space-y-2">
      <a
        href="/admin"
        className="block text-sm text-gray-800 font-medium hover:text-blue-500"
      >
        관리자 홈
      </a>
      <a
        href="/dashboard"
        className="block text-sm text-gray-800 hover:text-blue-500"
      >
        대시보드
      </a>
    </nav>
  );
};

export default QuickLink;
