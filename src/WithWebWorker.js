// src/SortWithWebWorker.js
const workerCode = `
  onmessage = function (e) {
    const sortedArray = e.data.slice().sort((a, b) => a - b);
    postMessage(sortedArray);
  };
`;

const createWebWorker = (code) => {
  const blob = new Blob([code], { type: 'application/javascript' });
  return new Worker(URL.createObjectURL(blob));
};

const sortWithWebWorker = (array, callback) => {
  const worker = createWebWorker(workerCode);

  worker.onmessage = (e) => {
    callback(e.data);
    worker.terminate();
  };

  worker.postMessage(array);
};

export default sortWithWebWorker;
