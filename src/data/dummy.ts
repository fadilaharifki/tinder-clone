const names = [
  'Jisu',
  'Taehyun',
  'Mina',
  'Junho',
  'Hyejin',
  'Sora',
  'Minho',
  'Yeonwoo',
  'Seojin',
  'Hyunwoo',
];
const locations = [
  'Seoul',
  'Gangnam',
  'Hongdae',
  'Busan',
  'Incheon',
  'Daegu',
  'Jeju',
  'Suwon',
  'Gwangju',
  'Daejeon',
];
const statuses = ['Online', 'Active 15m ago', 'Active 3h ago', 'Active Today'];

export const dataDummy: any[] = Array.from({ length: 100 }, (_, i) => {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomAge = Math.floor(Math.random() * 12) + 20;
  const randomLocation =
    locations[Math.floor(Math.random() * locations.length)];
  const randomDistance = `${Math.floor(Math.random() * 500)} km`;
  const randomVerified = Math.random() > 0.5;
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
  const picStartId = 10 + i * 2;

  return {
    id: i + 1,
    name: randomName,
    age: randomAge,
    location: randomLocation,
    distance: randomDistance,
    isVerified: randomVerified,
    status: randomStatus,
    pictures: [
      `https://picsum.photos/id/${picStartId}/1080/1920`,
      `https://picsum.photos/id/${picStartId + 1}/1080/1920`,
    ],
  };
});
