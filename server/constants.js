export default function enums() {
  const statusCodes = {
    active: 'ACTIVE',
    completed: 'COMPLETED',
    deleted: 'DELETED',
  };

  const importance = {
    high: 'HIGH',
    medium: 'MEDIUM',
    low: 'LOW',
  };

  return Object.freeze({
    statusCodes,
    importance,
  });
}
