/**
 * O(n^2)
 */
export const Selection = (A) => {

    const a = Array.from(A);
    const n = a.length;

    if (n <= 1) {
        return a;
    }

    for (let i = 0; i < n; i++) {
        let min = i;

        for (let j = i + 1; j < n; j++) {
            if (a[j] < a[min]) {
                min = j;
            }
        }

        if (min !== i) {
            const x = a[i];
            a[i] = a[min];
            a[min] = x;
        }
    }

    return a;

};