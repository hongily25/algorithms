function bst(list: number[], key: number): number {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (list[mid] === key) {
            return mid;
        } else if (key > list[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}