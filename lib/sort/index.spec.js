import { Sort } from './';
import assert from 'assert';
import { randomNumbers, randomNumbersSorted } from '../../data/random-numbers';

export const runSpec = (alg) => {

    describe(`${alg} sort`, () => {

        it('should not sort empty array', () => {
            const input = [];
            const output = [];
            assert.deepEqual(Sort[alg](input), output);
        });

        it('should not sort a single value', () => {
            const input = [1];
            const output = [1];
            assert.deepEqual(Sort[alg](input), output);
        });

        it('should sort 2 values', () => {
            const input = [1, -1];
            const output = [-1, 1];
            assert.deepEqual(Sort[alg](input), output);
        });

        it('should sort positive values', () => {
            const input = [3, 7, 4, 9, 5, 2, 8, 6, 1];
            const output = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            assert.deepEqual(Sort[alg](input), output);
        });

        it('should sort negative values', () => {
            const input = [-3, -7, -4, -9, -5, -2, -8, -6, -1];
            const output = [-9, -8, -7, -6, -5, -4, -3, -2, -1];
            assert.deepEqual(Sort[alg](input), output);
        });

        it('should sort negative/positive values', () => {
            const input = [3, 7, -4, -9, 5, -2, 8, -6, -1];
            const output = [-9, -6, -4, -2, -1, 3, 5, 7, 8];
            assert.deepEqual(Sort[alg](input), output);
        });

        it('should sort duplicate values', () => {
            const input = [3, 7, -1, -9, 5, -2, 7, -6, -1];
            const output = [-9, -6, -2, -1, -1, 3, 5, 7, 7];
            assert.deepEqual(Sort[alg](input), output);
        });

        it('should sort two characters', () => {
            const input = ['z', 'a'];
            const output = ['a', 'z'];
            assert.deepEqual(Sort[alg](input), output);
        });

        it('should sort characters', () => {
            const input = ['a', 'z', 'e', 'r', 'r', 't', 'y', 'u', 'y', 'i', 'u', 'o'];
            const output = ['a', 'e', 'i', 'o', 'r', 'r', 't', 'u', 'u', 'y', 'y', 'z'];
            assert.deepEqual(Sort[alg](input), output);
        });

        it('should sort two words', () => {
            const input = ['house', 'car'];
            const output = ['car', 'house'];
            assert.deepEqual(Sort[alg](input), output);
        });

        it('should sort two words (bis)', () => {
            const input = ['abc', 'aba'];
            const output = ['aba', 'abc'];
            assert.deepEqual(Sort[alg](input), output);
        });

        it('should sort many words', () => {
            const input = ['polymer', 'react', 'angular', 'vue'];
            const output = ['angular', 'polymer', 'react', 'vue'];
            assert.deepEqual(Sort[alg](input), output);
        });

        it('should sort 2500 numbers', () => {
            assert.deepEqual(Sort[alg](randomNumbers), randomNumbersSorted);
        });
    });
}