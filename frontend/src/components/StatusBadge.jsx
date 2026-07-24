const StatusBadge = ({ status }) => {
  let badgeColor = '';

  switch (status) {
    case 'New':
      badgeColor = 'bg-blue-100 text-blue-800 border-blue-200';
      break;
    case 'Contacted':
      badgeColor = 'bg-yellow-100 text-yellow-800 border-yellow-200';
      break;
    case 'Closed':
      badgeColor = 'bg-green-100 text-green-800 border-green-200';
      break;
    default:
      badgeColor = 'bg-gray-100 text-gray-800 border-gray-200';
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${badgeColor}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
