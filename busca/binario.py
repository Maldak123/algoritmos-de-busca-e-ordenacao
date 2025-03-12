import math

def binario(nums, alvo):
  init = 0
  final = len(nums) - 1

  while init <= final:
    meio = math.floor(init + (final - init) / 2)

    if nums[meio] == alvo:
      return meio
    elif nums[meio] > alvo:
       final = meio - 1
    elif nums[meio] < alvo:
       init = meio + 1

  return -1

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
alvo = 16
print(binario(nums, alvo))

