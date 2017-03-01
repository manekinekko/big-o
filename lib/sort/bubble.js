/**
 * O(n^2)
 */
export const Bubble = (A) => {

    const a = Array.from(A);
    const n = a.length;

    if (n === 0) {
        return a;
    }

    let swapped = false;

    do {
        swapped = false;
        for (let i = 1; i <= n - 1; i++) {
            if (a[i - 1] > a[i]) {
                let x = a[i - 1];
                a[i - 1] = a[i];
                a[i] = x;
                swapped = true;
            }
        }
    }
    while (swapped === true);
    return a;

};