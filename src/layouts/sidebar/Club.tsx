const sampleClubs = [
  { id: 1, name: "스터디 모임", members: 12 },
  { id: 2, name: "하이킹 클럽", members: 8 },
  { id: 3, name: "독서회", members: 14 },
  { id: 4, name: "영화 감상회", members: 9 },
  { id: 5, name: "요리 클래스", members: 7 },
];

const Club = () => {
  return (
    <div>
      <h2 className="text-sm font-semibold mb-2 text-gray-700">내 모임</h2>
      <ul className="space-y-1">
        {sampleClubs.map((club) => (
          <li key={club.id} className="text-sm text-gray-600 truncate">
            • {club.name} ({club.members})
          </li>
        ))}
      </ul>
      <a href="/my-clubs" className="text-xs text-blue-500 mt-1 inline-block">
        더보기 →
      </a>
    </div>
  );
};

export default Club;
