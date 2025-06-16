const User = () => {
  return (
    <div className="mt-auto pt-4 border-t">
      <div className="text-sm font-medium text-gray-800">홍길동</div>
      <div className="text-xs text-gray-500">관리자</div>
      <a href="/logout" className="text-xs text-red-500 mt-1 inline-block">
        로그아웃
      </a>
    </div>
  );
};

export default User;
