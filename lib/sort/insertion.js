/**
 * O(n^2)
 */
export const Insertion = (A) => {

    const a = Array.from(A);
    const n = a.length;

    // O(n)
    for (let i = 1; i < n; i = i + 1) {
        let key = a[i];
        let j = i - 1;

        // O(n)
        while (j >= 0 && a[j] > key) {
            a[j + 1] = a[j];
            j = j - 1;
        }
        a[j + 1] = key;
    }

    return a;

};