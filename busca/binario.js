function bin (nums, target) {
    let init = 0;
    let final = nums.length - 1;

    while (init <= final) {
        let meio = Math.floor(init + (final - init) / 2);

        if (nums[meio] === target) {
            return meio;
        } else if (nums[meio] < target) {
            init = meio + 1;
        } else if (nums[meio] > target) {
            final = meio - 1;
        }
    }
    return -1;
};

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let alvo = 1;

console.log(bin(num, alvo));
