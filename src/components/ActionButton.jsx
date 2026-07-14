const ActionButton = ({ icon, label, onClick }) => {
  return (
    <button className="login-action-btn" onClick={onClick}>
      <div className="login-action-icon">{icon}</div>
      <span className="login-action-label">{label}</span>
    </button>
  );
};
export default ActionButton;
