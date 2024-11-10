import ReactLoading from 'react-loading';

function Loading() {
  return (
    <div className="loading-container">
      <ReactLoading type="spinningBubbles" color="#007bff" height={100} width={100} />
    </div>
  );
}

export default Loading;
