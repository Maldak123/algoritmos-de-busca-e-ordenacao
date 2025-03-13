def bubble(lista):
    for x in range(len(lista) - 1):
        for y in range(len(lista) - 1 - x):
            if lista[y] > lista[y + 1]:
                variavel = lista[y]
                lista[y] = lista[y + 1]
                lista[y + 1] = variavel

    return lista


lis = [14, 94, 916, 19, 164, 2984, 946, 165]
print(bubble(lis))
