export default function uploadedTime(publishTime: string): string {
  const date = new Date(Date.parse(publishTime));
  const timestamp = date.getTime();
  const currentTime = new Date().getTime();
  const difference = currentTime - timestamp;

  if (difference < 3600000 * 24) {
    return Math.floor(Number(difference / 3600000)) + '시간 전';
  } else if (difference < 3600000 * 24 * 30) {
    return Math.floor(Number(difference / (24 * 3600000))) + '일 전';
  } else if (difference < 3600000 * 24 * 30 * 12) {
    return Math.floor(Number(difference / (24 * 3600000 * 30))) + '개월 전';
  } else {
    return Math.floor(Number(difference / (24 * 3600000 * 30 * 12))) + '년 전';
  }
}
