function prepareGifts(gifts) {
    const uniqueGifts = new Set(gifts); // Elimina duplicados
    const newArray = Array.from(uniqueGifts)   
        giftFinal = newArray.sort()
    console.log(giftFinal); 

    return [giftFinal];
  }

  prepareGifts([3, 1, 2, 3, 4, 2, 5]);

