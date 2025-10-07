const Loading = () => {
  return (
    <div
      className="dots-loader"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <span className="dot" aria-hidden="true"></span>
      <span className="dot" aria-hidden="true"></span>
      <span className="dot" aria-hidden="true"></span>
      <span className="sr-only">Loading…</span>
    </div>
  );
};

export default Loading;
