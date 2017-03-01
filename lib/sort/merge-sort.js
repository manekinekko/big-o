/**
 * O(n.log.n)
 */
export const MergeSort = (A = []) => {
    const n = A.length;
    if (n < 2) {
        return A;
    }
    let A1 = A.slice(0, ((n / 2) | 0));
    let A2 = A.slice(((n / 2) | 0), n);

    A1 = MergeSort(A1);
    A2 = MergeSort(A2);
    return Merge(A1, A2);
}

function Merge(left = [], right = []) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}