var cancellable = function(fn, args, t) {
    const timerId = setTimeout(() => {
        fn(...args);
    }, t);

    const cancelFn = () => {
        clearTimeout(timerId);
    };

    return cancelFn;
};
// -------------------------------------------------------
const start = Date.now();

const fn = (x) => x * 5;

const cancelFn = cancellable(fn, [2], 100); // Will run after 100ms