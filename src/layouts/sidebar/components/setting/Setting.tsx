import { SettingsIcon } from "lucide-react";

const Setting = () => {
  return (
    <div className="mt-auto pt-4 border-t">
      <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
        홍길동
      </div>
      <div className="text-xs text-gray-500 dark:text-gray-400">관리자</div>

      {/* 설정 링크 */}
      <SettingsIcon />
      <a
        href="/settings"
        className="text-xs text-blue-600 dark:text-blue-400 mt-2 inline-block"
      >
        설정
      </a>
    </div>
  );
};

export default Setting;
